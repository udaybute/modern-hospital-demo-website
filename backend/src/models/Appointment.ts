import {
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn,
} from 'typeorm'
import { Doctor } from './Doctor'
import { Patient } from './Patient'

export type AppointmentStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no_show'

@Entity('appointments')
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ name: 'patient_id' })
  patientId!: string

  @Column({ name: 'doctor_id' })
  doctorId!: string

  @Column({ name: 'department_id' })
  departmentId!: string

  @Column({ name: 'appointment_date', type: 'date' })
  appointmentDate!: Date

  @Column({ name: 'appointment_time', type: 'time' })
  appointmentTime!: string

  @Column({ type: 'enum', enum: ['pending', 'confirmed', 'cancelled', 'completed', 'no_show'], default: 'pending' })
  status!: AppointmentStatus

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'consultation_fee' })
  consultationFee!: number

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'insurance_coverage', default: 0 })
  insuranceCoverage!: number

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'total_due' })
  totalDue!: number

  @Column({ nullable: true, name: 'insurance_provider' })
  insuranceProvider!: string

  @Column({ nullable: true, name: 'insurance_policy_number' })
  insurancePolicyNumber!: string

  @Column({ type: 'text', nullable: true })
  notes!: string

  @Column({ type: 'text', nullable: true, name: 'cancellation_reason' })
  cancellationReason!: string

  @ManyToOne(() => Patient, (patient) => patient.appointments)
  @JoinColumn({ name: 'patient_id' })
  patient!: Patient

  @ManyToOne(() => Doctor, (doctor) => doctor.appointments)
  @JoinColumn({ name: 'doctor_id' })
  doctor!: Doctor

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date
}
