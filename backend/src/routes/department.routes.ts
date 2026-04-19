import { Router } from 'express'
import { getAllDepartments, getDepartmentById, getDepartmentDoctors } from '../controllers/department.controller'

const router = Router()

// GET /api/v1/departments
router.get('/', getAllDepartments)

// GET /api/v1/departments/:id
router.get('/:id', getDepartmentById)

// GET /api/v1/departments/:id/doctors
router.get('/:id/doctors', getDepartmentDoctors)

export default router
