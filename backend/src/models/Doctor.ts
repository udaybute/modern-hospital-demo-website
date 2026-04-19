import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import { Appointment } from './Appointment'

@Entity('doctors')
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ name: 'user_id' })
  userId!: string

  @Column({ name: 'first_name' })
  firstName!: string

  @Column({ name: 'last_name' })
  lastName!: string

  @Column()
  specialty!: string

  @Column({ name: 'department_id' })
  departmentId!: string

  @Column({ type: 'int', name: 'years_experience' })
  yearsExperience!: number

  @Column()
  education!: string

  @Column({ type: 'text', array: true, default: [] })
  qualifications!: string[]

  @Column({ type: 'text' })
  bio!: string

  @Column({ name: 'profile_image', nullable: true })
  profileImage!: string

  @Column({ type: 'enum', enum: ['available', 'busy', 'unavailable'], default: 'available' })
  availability!: 'available' | 'busy' | 'unavailable'

  @Column({ type: 'decimal', precision: 3, scale: 1, default: 0 })
  rating!: number

  @Column({ name: 'total_consultations', default: 0 })
  totalConsultations!: number

  @Column({ name: 'consultation_fee', type: 'decimal', precision: 10, scale: 2, default: 350 })
  consultationFee!: number

  @Column({ name: 'is_active', default: true })
  isActive!: boolean

  @OneToMany(() => Appointment, (appointment) => appointment.doctor)
  appointments!: Appointment[]

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date
}
