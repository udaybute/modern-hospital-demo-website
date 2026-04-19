import { DataSource } from 'typeorm'
import { User } from '../models/User'
import { Doctor } from '../models/Doctor'
import { Patient } from '../models/Patient'
import { Appointment } from '../models/Appointment'
import { Department } from '../models/Department'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'clinical_excellence',
  synchronize: process.env.NODE_ENV === 'development', // disable in production
  logging: process.env.NODE_ENV === 'development',
  entities: [User, Doctor, Patient, Appointment, Department],
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
})

export const connectDatabase = async (): Promise<void> => {
  try {
    await AppDataSource.initialize()
    console.log('[database] PostgreSQL connection established')
  } catch (err) {
    console.error('[database] Connection failed:', err)
    process.exit(1)
  }
}
