import jwt from 'jsonwebtoken'
import { env } from '../config/env'

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, env.jwt.secret, { expiresIn: env.jwt.expiresIn } as jwt.SignOptions)
}

export const generateRefreshToken = (payload: object): string => {
  return jwt.sign(payload, env.jwt.refreshSecret, { expiresIn: env.jwt.refreshExpiresIn } as jwt.SignOptions)
}

export const verifyToken = (token: string): object | null => {
  try {
    return jwt.verify(token, env.jwt.secret) as object
  } catch {
    return null
  }
}

export const verifyRefreshToken = (token: string): object | null => {
  try {
    return jwt.verify(token, env.jwt.refreshSecret) as object
  } catch {
    return null
  }
}
