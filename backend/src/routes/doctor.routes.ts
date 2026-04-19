import { Router } from 'express'
import { getAllDoctors, getDoctorById, updateDoctorAvailability, getDoctorAppointments } from '../controllers/doctor.controller'
import { authenticate, requireRole } from '../middleware/auth.middleware'

const router = Router()

// GET /api/v1/doctors
router.get('/', getAllDoctors)

// GET /api/v1/doctors/:id
router.get('/:id', getDoctorById)

// PATCH /api/v1/doctors/:id/availability
router.patch('/:id/availability', authenticate, requireRole('doctor', 'admin'), updateDoctorAvailability)

// GET /api/v1/doctors/:id/appointments
router.get('/:id/appointments', authenticate, requireRole('doctor', 'admin'), getDoctorAppointments)

export default router
