import { Router } from 'express'
import { body } from 'express-validator'
import { register, login, logout, refreshToken, forgotPassword, resetPassword } from '../controllers/auth.controller'
import { validate } from '../middleware/validate.middleware'
import { authenticate } from '../middleware/auth.middleware'

const router = Router()

// POST /api/v1/auth/register
router.post('/register', [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
  body('firstName').notEmpty().trim(),
  body('lastName').notEmpty().trim(),
  validate,
], register)

// POST /api/v1/auth/login
router.post('/login', [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty(),
  validate,
], login)

// POST /api/v1/auth/logout
router.post('/logout', authenticate, logout)

// POST /api/v1/auth/refresh
router.post('/refresh', refreshToken)

// POST /api/v1/auth/forgot-password
router.post('/forgot-password', [
  body('email').isEmail().normalizeEmail(),
  validate,
], forgotPassword)

// POST /api/v1/auth/reset-password
router.post('/reset-password', [
  body('token').notEmpty(),
  body('password').isLength({ min: 8 }),
  validate,
], resetPassword)

export default router
