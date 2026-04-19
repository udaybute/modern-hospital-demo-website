import { Router } from 'express'
import { body } from 'express-validator'
import { createAppointment, getAppointmentById, updateAppointmentStatus, cancelAppointment, getAvailableSlots } from '../controllers/appointment.controller'
import { authenticate, requireRole } from '../middleware/auth.middleware'
import { validate } from '../middleware/validate.middleware'

const router = Router()

// GET /api/v1/appointments/slots?doctorId=&date=
router.get('/slots', getAvailableSlots)

// POST /api/v1/appointments — create (requires auth)
router.post('/', authenticate, [
  body('doctorId').isUUID(),
  body('departmentId').isUUID(),
  body('appointmentDate').isISO8601().toDate(),
  body('appointmentTime').matches(/^([01]\d|2[0-3]):([0-5]\d)$/),
  body('patientName').notEmpty().trim(),
  body('patientEmail').isEmail().normalizeEmail(),
  body('patientPhone').notEmpty(),
  validate,
], createAppointment)

// GET /api/v1/appointments/:id
router.get('/:id', authenticate, getAppointmentById)

// PATCH /api/v1/appointments/:id/status
router.patch('/:id/status', authenticate, requireRole('doctor', 'admin'), updateAppointmentStatus)

// DELETE /api/v1/appointments/:id — cancel
router.delete('/:id', authenticate, cancelAppointment)

export default router
