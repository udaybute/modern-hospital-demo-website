export interface Doctor {
  id: string
  name: string
  specialty: string
  department: string
  experience: number
  education: string
  qualifications: string[]
  availability: 'Available' | 'Busy' | 'Unavailable'
  bio: string
  image: string
  rating: number
  consultations: number
}

export interface Department {
  id: string
  name: string
  description: string
  icon: string
  specialties: string[]
  doctors: number
  image?: string
  featured?: boolean
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  author: string
  authorImage: string
  authorTitle: string
  publishDate: string
  category: string
  image: string
  featured?: boolean
  readTime: number
}

export interface Testimonial {
  id: string
  patientName: string
  condition: string
  doctor: string
  rating: number
  text: string
  date: string
}

export interface NavItem {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
  icon: string
}
