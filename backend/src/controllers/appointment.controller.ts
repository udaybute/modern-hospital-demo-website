import { Request, Response, NextFunction } from 'express'
import { AppDataSource } from '../config/database'
import { Appointment } from '../models/Appointment'
import { Doctor } from '../models/Doctor'
import { AppError } from '../middleware/error.middleware'
import { AuthRequest } from '../middleware/auth.middleware'

const appointmentRepo = () => AppDataSource.getRepository(Appointment)
const doctorRepo = () => AppDataSource.getRepository(Doctor)

export const getAvailableSlots = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { doctorId, date } = req.query
    if (!doctorId || !date) throw new AppError('doctorId and date are required', 400)

    // Get booked slots for the doctor on the given date
    const booked = await appointmentRepo().find({
      where: { doctorId: doctorId as string, appointmentDate: new Date(date as string) },
      select: ['appointmentTime'],
    })

    const bookedTimes = booked.map((a) => a.appointmentTime)
    const allSlots = [
      '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
      '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    ]

    const available = allSlots.filter((s) => !bookedTimes.includes(s))
    res.json({ success: true, data: available })
  } catch (err) { next(err) }
}

export const createAppointment = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { doctorId, departmentId, appointmentDate, appointmentTime, insuranceProvider, insurancePolicyNumber, notes } = req.body

    const doctor = await doctorRepo().findOne({ where: { id: doctorId } })
    if (!doctor) throw new AppError('Doctor not found', 404)
    if (doctor.availability === 'unavailable') throw new AppError('Doctor is currently unavailable', 409)

    // Check for scheduling conflict
    const conflict = await appointmentRepo().findOne({ where: { doctorId, appointmentDate, appointmentTime, status: 'confirmed' } })
    if (conflict) throw new AppError('This time slot is already booked', 409)

    const insuranceCoverage = insuranceProvider && insuranceProvider !== 'Self-Pay'
      ? parseFloat((doctor.consultationFee * 0.7).toFixed(2))
      : 0

    const appointment = appointmentRepo().create({
      patientId: req.user!.id,
      doctorId,
      departmentId,
      appointmentDate,
      appointmentTime,
      consultationFee: doctor.consultationFee,
      insuranceCoverage,
      totalDue: parseFloat((Number(doctor.consultationFee) - insuranceCoverage).toFixed(2)),
      insuranceProvider,
      insurancePolicyNumber,
      notes,
      status: 'pending',
    })

    await appointmentRepo().save(appointment)
    res.status(201).json({ success: true, data: appointment })
  } catch (err) { next(err) }
}

export const getAppointmentById = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const appointment = await appointmentRepo().findOne({
      where: { id: req.params.id },
      relations: ['doctor', 'patient'],
    })
    if (!appointment) throw new AppError('Appointment not found', 404)
    res.json({ success: true, data: appointment })
  } catch (err) { next(err) }
}

export const updateAppointmentStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { status } = req.body
    const appointment = await appointmentRepo().findOne({ where: { id: req.params.id } })
    if (!appointment) throw new AppError('Appointment not found', 404)

    appointment.status = status
    await appointmentRepo().save(appointment)
    res.json({ success: true, data: appointment })
  } catch (err) { next(err) }
}

export const cancelAppointment = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { reason } = req.body
    const appointment = await appointmentRepo().findOne({ where: { id: req.params.id } })
    if (!appointment) throw new AppError('Appointment not found', 404)
    if (appointment.status === 'completed') throw new AppError('Cannot cancel a completed appointment', 400)

    appointment.status = 'cancelled'
    appointment.cancellationReason = reason || ''
    await appointmentRepo().save(appointment)
    res.json({ success: true, message: 'Appointment cancelled successfully' })
  } catch (err) { next(err) }
}
