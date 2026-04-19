import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ unique: true })
  name!: string

  @Column({ type: 'text' })
  description!: string

  @Column()
  icon!: string

  @Column({ type: 'text', array: true, default: [] })
  specialties!: string[]

  @Column({ name: 'image_url', nullable: true })
  imageUrl!: string

  @Column({ name: 'is_featured', default: false })
  isFeatured!: boolean

  @Column({ name: 'is_active', default: true })
  isActive!: boolean

  @Column({ name: 'head_of_department_id', nullable: true })
  headOfDepartmentId!: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date
}
