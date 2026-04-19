import { Request, Response, NextFunction } from 'express'
import { AppDataSource } from '../config/database'
import { Department } from '../models/Department'
import { Doctor } from '../models/Doctor'
import { AppError } from '../middleware/error.middleware'

const departmentRepo = () => AppDataSource.getRepository(Department)
const doctorRepo = () => AppDataSource.getRepository(Doctor)

export const getAllDepartments = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const departments = await departmentRepo().find({ where: { isActive: true }, order: { isFeatured: 'DESC', name: 'ASC' } })
    res.json({ success: true, data: departments })
  } catch (err) { next(err) }
}

export const getDepartmentById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const department = await departmentRepo().findOne({ where: { id: req.params.id, isActive: true } })
    if (!department) throw new AppError('Department not found', 404)
    res.json({ success: true, data: department })
  } catch (err) { next(err) }
}

export const getDepartmentDoctors = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const department = await departmentRepo().findOne({ where: { id: req.params.id } })
    if (!department) throw new AppError('Department not found', 404)

    const doctors = await doctorRepo().find({ where: { departmentId: req.params.id, isActive: true }, order: { rating: 'DESC' } })
    res.json({ success: true, data: doctors, total: doctors.length })
  } catch (err) { next(err) }
}
