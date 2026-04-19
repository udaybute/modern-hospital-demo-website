import { Request, Response, NextFunction } from 'express'
import { AppDataSource } from '../config/database'
import { Doctor } from '../models/Doctor'
import { AppError } from '../middleware/error.middleware'

const doctorRepo = () => AppDataSource.getRepository(Doctor)

export const getAllDoctors = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { department, availability, search, limit = '20', offset = '0' } = req.query

    const qb = doctorRepo().createQueryBuilder('doctor').where('doctor.isActive = true')

    if (department) qb.andWhere('doctor.departmentId = :department', { department })
    if (availability) qb.andWhere('doctor.availability = :availability', { availability })
    if (search) qb.andWhere('(doctor.firstName ILIKE :s OR doctor.lastName ILIKE :s OR doctor.specialty ILIKE :s)', { s: `%${search}%` })

    qb.take(parseInt(limit as string)).skip(parseInt(offset as string)).orderBy('doctor.rating', 'DESC')

    const [doctors, total] = await qb.getManyAndCount()
    res.json({ success: true, data: doctors, total, limit: parseInt(limit as string), offset: parseInt(offset as string) })
  } catch (err) { next(err) }
}

export const getDoctorById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const doctor = await doctorRepo().findOne({ where: { id: req.params.id, isActive: true } })
    if (!doctor) throw new AppError('Doctor not found', 404)
    res.json({ success: true, data: doctor })
  } catch (err) { next(err) }
}

export const updateDoctorAvailability = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { availability } = req.body
    const doctor = await doctorRepo().findOne({ where: { id: req.params.id } })
    if (!doctor) throw new AppError('Doctor not found', 404)

    doctor.availability = availability
    await doctorRepo().save(doctor)
    res.json({ success: true, data: doctor })
  } catch (err) { next(err) }
}

export const getDoctorAppointments = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const doctor = await doctorRepo().findOne({
      where: { id: req.params.id },
      relations: ['appointments', 'appointments.patient'],
    })
    if (!doctor) throw new AppError('Doctor not found', 404)
    res.json({ success: true, data: doctor.appointments })
  } catch (err) { next(err) }
}
