import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ unique: true })
  email!: string

  @Column({ select: false })
  password!: string

  @Column({ name: 'first_name' })
  firstName!: string

  @Column({ name: 'last_name' })
  lastName!: string

  @Column({ type: 'enum', enum: ['patient', 'doctor', 'admin'], default: 'patient' })
  role!: 'patient' | 'doctor' | 'admin'

  @Column({ name: 'is_active', default: true })
  isActive!: boolean

  @Column({ name: 'email_verified', default: false })
  emailVerified!: boolean

  @Column({ name: 'last_login', type: 'timestamp', nullable: true })
  lastLogin!: Date | null

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date
}
