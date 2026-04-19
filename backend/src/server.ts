import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'

import authRoutes from './routes/auth.routes'
import appointmentRoutes from './routes/appointment.routes'
import doctorRoutes from './routes/doctor.routes'
import patientRoutes from './routes/patient.routes'
import departmentRoutes from './routes/department.routes'
import { errorMiddleware } from './middleware/error.middleware'

const app = express()
const PORT = process.env.PORT || 4000

// Security middleware
app.use(helmet())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}))

// Rate limiting
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
}))

app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true }))

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// API Routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/appointments', appointmentRoutes)
app.use('/api/v1/doctors', doctorRoutes)
app.use('/api/v1/patients', patientRoutes)
app.use('/api/v1/departments', departmentRoutes)

// Error handler (must be last)
app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`[server] Clinical Excellence API running on http://localhost:${PORT}`)
})

export default app
