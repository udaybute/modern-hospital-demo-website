import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import { Appointment } from './Appointment'

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ name: 'user_id', unique: true })
  userId!: string

  @Column({ name: 'first_name' })
  firstName!: string

  @Column({ name: 'last_name' })
  lastName!: string

  @Column({ name: 'date_of_birth', type: 'date' })
  dateOfBirth!: Date

  @Column({ nullable: true })
  phone!: string

  @Column({ type: 'text', nullable: true })
  address!: string

  @Column({ nullable: true, name: 'emergency_contact_name' })
  emergencyContactName!: string

  @Column({ nullable: true, name: 'emergency_contact_phone' })
  emergencyContactPhone!: string

  @Column({ nullable: true, name: 'insurance_provider' })
  insuranceProvider!: string

  @Column({ nullable: true, name: 'insurance_policy_number' })
  insurancePolicyNumber!: string

  @Column({ type: 'text', nullable: true, name: 'medical_notes' })
  medicalNotes!: string

  @Column({ type: 'text', array: true, default: [], name: 'allergies' })
  allergies!: string[]

  @Column({ type: 'text', array: true, default: [], name: 'current_medications' })
  currentMedications!: string[]

  @OneToMany(() => Appointment, (appointment) => appointment.patient)
  appointments!: Appointment[]

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date
}
