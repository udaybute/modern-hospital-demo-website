import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcryptjs'
import { AppDataSource } from '../config/database'
import { User } from '../models/User'
import { generateToken, generateRefreshToken, verifyRefreshToken } from '../utils/jwt'
import { AppError } from '../middleware/error.middleware'

const userRepo = () => AppDataSource.getRepository(User)

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password, firstName, lastName } = req.body

    const existing = await userRepo().findOne({ where: { email } })
    if (existing) throw new AppError('Email already registered', 409)

    const hashed = await bcrypt.hash(password, 12)
    const user = userRepo().create({ email, password: hashed, firstName, lastName, role: 'patient' })
    await userRepo().save(user)

    const token = generateToken({ id: user.id, email: user.email, role: user.role })
    res.status(201).json({ success: true, token, user: { id: user.id, email: user.email, firstName, lastName, role: user.role } })
  } catch (err) { next(err) }
}

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body

    const user = await userRepo().createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.email = :email', { email })
      .getOne()

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new AppError('Invalid email or password', 401)
    }

    if (!user.isActive) throw new AppError('Account deactivated. Contact support.', 403)

    user.lastLogin = new Date()
    await userRepo().save(user)

    const token = generateToken({ id: user.id, email: user.email, role: user.role })
    const refreshToken = generateRefreshToken({ id: user.id })

    res.json({ success: true, token, refreshToken, user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role } })
  } catch (err) { next(err) }
}

export const logout = async (_req: Request, res: Response): Promise<void> => {
  // With JWT, logout is handled client-side by discarding the token.
  // For a blocklist approach, store the token's jti in Redis.
  res.json({ success: true, message: 'Logged out successfully' })
}

export const refreshToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { refreshToken: token } = req.body
    if (!token) throw new AppError('Refresh token required', 400)

    const payload = verifyRefreshToken(token)
    if (!payload) throw new AppError('Invalid or expired refresh token', 401)

    const user = await userRepo().findOne({ where: { id: (payload as { id: string }).id } })
    if (!user || !user.isActive) throw new AppError('User not found or inactive', 401)

    const newToken = generateToken({ id: user.id, email: user.email, role: user.role })
    res.json({ success: true, token: newToken })
  } catch (err) { next(err) }
}

export const forgotPassword = async (_req: Request, res: Response): Promise<void> => {
  // TODO: Generate reset token, store hash in DB, send email via sendgrid/nodemailer
  res.json({ success: true, message: 'If that email exists, a reset link has been sent.' })
}

export const resetPassword = async (_req: Request, res: Response): Promise<void> => {
  // TODO: Verify token, hash new password, clear token from DB
  res.json({ success: true, message: 'Password updated successfully.' })
}
