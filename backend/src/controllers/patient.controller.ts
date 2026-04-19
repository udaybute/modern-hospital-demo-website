import { Request, Response, NextFunction } from 'express'
import { AppDataSource } from '../config/database'
import { Patient } from '../models/Patient'
import { AppError } from '../middleware/error.middleware'
import { AuthRequest } from '../middleware/auth.middleware'

const patientRepo = () => AppDataSource.getRepository(Patient)

export const getPatientProfile = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.params.id ? req.params.id : req.user!.id
    const patient = await patientRepo().findOne({ where: { userId } })
    if (!patient) throw new AppError('Patient profile not found', 404)
    res.json({ success: true, data: patient })
  } catch (err) { next(err) }
}

export const updatePatientProfile = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const patient = await patientRepo().findOne({ where: { userId: req.user!.id } })
    if (!patient) throw new AppError('Patient profile not found', 404)

    const allowed = ['phone', 'address', 'emergencyContactName', 'emergencyContactPhone', 'insuranceProvider', 'insurancePolicyNumber', 'allergies', 'currentMedications']
    allowed.forEach((field) => {
      if (req.body[field] !== undefined) (patient as Record<string, unknown>)[field] = req.body[field]
    })

    await patientRepo().save(patient)
    res.json({ success: true, data: patient })
  } catch (err) { next(err) }
}

export const getPatientRecords = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    // TODO: Return medical records (lab results, imaging reports, prescriptions)
    // This will be expanded when medical record entities are added
    res.json({ success: true, data: [], message: 'Medical records integration coming in Phase 2' })
  } catch (err) { next(err) }
}

export const getPatientAppointments = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const patient = await patientRepo().findOne({
      where: { userId: req.user!.id },
      relations: ['appointments', 'appointments.doctor'],
    })
    if (!patient) throw new AppError('Patient profile not found', 404)
    res.json({ success: true, data: patient.appointments })
  } catch (err) { next(err) }
}
