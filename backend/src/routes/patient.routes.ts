import { Router } from 'express'
import { getPatientProfile, updatePatientProfile, getPatientRecords, getPatientAppointments } from '../controllers/patient.controller'
import { authenticate, requireRole } from '../middleware/auth.middleware'

const router = Router()

// All patient routes require authentication
router.use(authenticate)

// GET /api/v1/patients/me
router.get('/me', getPatientProfile)

// PATCH /api/v1/patients/me
router.patch('/me', updatePatientProfile)

// GET /api/v1/patients/me/records
router.get('/me/records', getPatientRecords)

// GET /api/v1/patients/me/appointments
router.get('/me/appointments', getPatientAppointments)

// Admin: GET /api/v1/patients/:id
router.get('/:id', requireRole('admin'), getPatientProfile)

export default router
