'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ChevronRight, Phone, MessageSquare } from 'lucide-react'
import { departments, doctors, timeSlots, insuranceProviders } from '@/lib/data'

const steps = ['Department', 'Physician', 'Date & Time', 'Your Details']

export default function AppointmentPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selected, setSelected] = useState({
    departmentId: '',
    doctorId: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    dob: '',
    insurance: '',
    policyNumber: '',
    notes: '',
  })

  const selectedDept = departments.find((d) => d.id === selected.departmentId)
  const selectedDoc = doctors.find((d) => d.id === selected.doctorId)
  const filteredDoctors = selected.departmentId
    ? doctors.filter((d) => d.department === selected.departmentId)
    : doctors

  const consultationFee = selectedDoc ? 350 : 0
  const insuranceCoverage = selected.insurance && selected.insurance !== 'Self-Pay' ? Math.round(consultationFee * 0.7) : 0
  const totalDue = consultationFee - insuranceCoverage

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-4">
            <Link href="/" className="hover:text-primary transition-colors duration-200">Home</Link>
            <ChevronRight size={14} />
            <span className="text-on-surface font-medium">Book Appointment</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-on-surface mb-3">
            Book an <span className="italic font-light">Appointment</span>
          </h1>
          <p className="text-on-surface-variant">Same-week availability across most specialties. Most insurance plans accepted.</p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-background pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-0">
            {steps.map((step, i) => {
              const stepNum = i + 1
              const isComplete = currentStep > stepNum
              const isActive = currentStep === stepNum
              return (
                <div key={step} className="flex items-center gap-0 flex-1">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-200 ${
                      isComplete ? 'bg-secondary text-white' : isActive ? 'bg-gradient-primary text-white' : 'bg-surface-high text-on-surface-variant'
                    }`}>
                      {isComplete ? <Check size={16} /> : stepNum}
                    </div>
                    <span className={`text-xs font-medium hidden sm:block ${isActive ? 'text-primary' : 'text-on-surface-variant'}`}>{step}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 transition-colors duration-200 ${currentStep > stepNum ? 'bg-secondary' : 'bg-outline-variant'}`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 bg-surface-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">

            {/* Form Area */}
            <div className="lg:col-span-8">
              <div className="card p-8">

                {/* Step 1: Department */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-on-surface mb-1">Select Department</h2>
                    <p className="text-on-surface-variant text-sm mb-7">Choose the medical specialty most relevant to your needs.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {departments.map((dept) => (
                        <button
                          key={dept.id}
                          onClick={() => setSelected({ ...selected, departmentId: dept.id, doctorId: '' })}
                          className={`p-5 rounded-2xl border-2 text-left transition-all duration-200 ${
                            selected.departmentId === dept.id
                              ? 'border-primary bg-primary-fixed'
                              : 'border-outline-variant bg-surface-lowest hover:border-primary/30 hover:bg-surface-low'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                            selected.departmentId === dept.id ? 'bg-primary' : 'bg-surface-low'
                          }`}>
                            <span className={`material-symbols-outlined ${selected.departmentId === dept.id ? 'text-white' : 'text-primary'}`} style={{ fontSize: '20px' }}>
                              {dept.icon}
                            </span>
                          </div>
                          <div className={`font-semibold text-sm ${selected.departmentId === dept.id ? 'text-primary' : 'text-on-surface'}`}>{dept.name}</div>
                          <div className="text-xs text-on-surface-variant mt-0.5">{dept.doctors} specialists</div>
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-end mt-8">
                      <button
                        onClick={() => setCurrentStep(2)}
                        disabled={!selected.departmentId}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        Continue to Physician
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Doctor */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-on-surface mb-1">Select Physician</h2>
                    <p className="text-on-surface-variant text-sm mb-7">Choose your preferred specialist from {selectedDept?.name}.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {filteredDoctors.map((doc) => (
                        <button
                          key={doc.id}
                          onClick={() => setSelected({ ...selected, doctorId: doc.id })}
                          className={`flex gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
                            selected.doctorId === doc.id
                              ? 'border-primary bg-primary-fixed'
                              : 'border-outline-variant bg-surface-lowest hover:border-primary/30'
                          }`}
                        >
                          <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                            <Image src={doc.image} alt={doc.name} fill className="object-cover" sizes="64px" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-semibold text-sm text-on-surface">{doc.name}</div>
                            <div className="text-xs text-primary font-medium mt-0.5">{doc.specialty}</div>
                            <div className="text-xs text-on-surface-variant mt-0.5">{doc.experience} yrs experience</div>
                            <div className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full mt-1.5 ${
                              doc.availability === 'Available' ? 'bg-secondary-container text-secondary' : 'bg-tertiary-fixed text-tertiary'
                            }`}>
                              <span className={`w-1 h-1 rounded-full ${doc.availability === 'Available' ? 'bg-secondary' : 'bg-tertiary'}`} />
                              {doc.availability}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between mt-8">
                      <button onClick={() => setCurrentStep(1)} className="btn-secondary">Back</button>
                      <button
                        onClick={() => setCurrentStep(3)}
                        disabled={!selected.doctorId}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Continue to Date & Time
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Date & Time */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-on-surface mb-1">Select Date & Time</h2>
                    <p className="text-on-surface-variant text-sm mb-7">Choose your preferred appointment slot.</p>

                    <div className="mb-7">
                      <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-2 block">Date</label>
                      <input
                        type="date"
                        className="input-field max-w-xs"
                        value={selected.date}
                        onChange={(e) => setSelected({ ...selected, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-3 block">Available Times</label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelected({ ...selected, time: slot })}
                            className={`py-2.5 rounded-xl text-sm font-medium border transition-all duration-150 ${
                              selected.time === slot
                                ? 'border-primary bg-primary text-white'
                                : 'border-outline-variant bg-surface-lowest hover:border-primary/30 text-on-surface-variant hover:text-on-surface'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between mt-8">
                      <button onClick={() => setCurrentStep(2)} className="btn-secondary">Back</button>
                      <button
                        onClick={() => setCurrentStep(4)}
                        disabled={!selected.date || !selected.time}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Continue to Your Details
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Patient Details */}
                {currentStep === 4 && (
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-on-surface mb-1">Your Details</h2>
                    <p className="text-on-surface-variant text-sm mb-7">Please provide your personal and insurance information.</p>

                    <div className="space-y-7">
                      {/* Personal Info */}
                      <div>
                        <div className="text-xs font-semibold text-on-surface uppercase tracking-widest mb-4 pb-2 border-b border-outline-variant">Personal Information</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-medium text-on-surface-variant mb-1.5 block">Full Name *</label>
                            <input type="text" placeholder="Jane Doe" className="input-field" value={selected.name} onChange={(e) => setSelected({ ...selected, name: e.target.value })} />
                          </div>
                          <div>
                            <label className="text-xs font-medium text-on-surface-variant mb-1.5 block">Date of Birth *</label>
                            <input type="date" className="input-field" value={selected.dob} onChange={(e) => setSelected({ ...selected, dob: e.target.value })} />
                          </div>
                          <div>
                            <label className="text-xs font-medium text-on-surface-variant mb-1.5 block">Email Address *</label>
                            <input type="email" placeholder="jane@example.com" className="input-field" value={selected.email} onChange={(e) => setSelected({ ...selected, email: e.target.value })} />
                          </div>
                          <div>
                            <label className="text-xs font-medium text-on-surface-variant mb-1.5 block">Phone Number *</label>
                            <input type="tel" placeholder="+1 (555) 000-0000" className="input-field" value={selected.phone} onChange={(e) => setSelected({ ...selected, phone: e.target.value })} />
                          </div>
                        </div>
                      </div>

                      {/* Insurance */}
                      <div>
                        <div className="text-xs font-semibold text-on-surface uppercase tracking-widest mb-4 pb-2 border-b border-outline-variant">Insurance Information</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-medium text-on-surface-variant mb-1.5 block">Insurance Provider</label>
                            <div className="relative">
                              <select className="select-field" value={selected.insurance} onChange={(e) => setSelected({ ...selected, insurance: e.target.value })}>
                                <option value="">Select provider</option>
                                {insuranceProviders.map((p) => <option key={p} value={p}>{p}</option>)}
                              </select>
                              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none material-symbols-outlined text-on-surface-variant" style={{ fontSize: '18px' }}>expand_more</span>
                            </div>
                          </div>
                          <div>
                            <label className="text-xs font-medium text-on-surface-variant mb-1.5 block">Policy Number</label>
                            <input type="text" placeholder="XYZ-123456" className="input-field" value={selected.policyNumber} onChange={(e) => setSelected({ ...selected, policyNumber: e.target.value })} />
                          </div>
                        </div>
                      </div>

                      {/* Notes */}
                      <div>
                        <label className="text-xs font-medium text-on-surface-variant mb-1.5 block">Additional Notes (Optional)</label>
                        <textarea
                          rows={4}
                          placeholder="Describe your symptoms or reason for visit..."
                          className="input-field resize-none"
                          value={selected.notes}
                          onChange={(e) => setSelected({ ...selected, notes: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between mt-8">
                      <button onClick={() => setCurrentStep(3)} className="btn-secondary">Back</button>
                      <button
                        onClick={() => alert('Appointment confirmed! You will receive a confirmation email shortly.')}
                        disabled={!selected.name || !selected.email || !selected.phone}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Check size={16} />
                        Confirm Appointment
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Booking Sidebar */}
            <aside className="lg:col-span-4">
              <div className="space-y-4 sticky top-28">

                {/* Summary Card */}
                <div className="card p-6">
                  <h3 className="font-heading font-bold text-on-surface mb-5">Booking Summary</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Department', value: selectedDept?.name, icon: 'category' },
                      { label: 'Physician', value: selectedDoc?.name, icon: 'person' },
                      { label: 'Date', value: selected.date || '—', icon: 'calendar_month' },
                      { label: 'Time', value: selected.time || '—', icon: 'schedule' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: '18px' }}>{item.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-medium text-on-surface-variant uppercase tracking-wider">{item.label}</div>
                          <div className="text-sm font-medium text-on-surface truncate">{item.value || '—'}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  {selectedDoc && (
                    <div className="mt-5 pt-5 border-t border-outline-variant space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-on-surface-variant">Consultation Fee</span>
                        <span className="font-medium text-on-surface">${consultationFee}</span>
                      </div>
                      {insuranceCoverage > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-secondary">Insurance Coverage</span>
                          <span className="font-medium text-secondary">-${insuranceCoverage}</span>
                        </div>
                      )}
                      <div className="flex justify-between font-bold text-base pt-2 border-t border-outline-variant">
                        <span className="text-on-surface">Total Due</span>
                        <span className="text-primary">${totalDue}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Need Help */}
                <div className="bg-surface-low rounded-2xl p-5">
                  <h4 className="font-heading font-semibold text-sm text-on-surface mb-3">Need Help?</h4>
                  <div className="space-y-2">
                    <a href="tel:+18005550100" className="flex items-center gap-3 p-3 rounded-xl bg-surface-lowest hover:bg-primary-fixed transition-colors duration-200 group">
                      <Phone size={16} className="text-primary" />
                      <div>
                        <div className="text-xs font-medium text-on-surface">Call Us</div>
                        <div className="text-[10px] text-on-surface-variant">1-800-555-0100</div>
                      </div>
                    </a>
                    <button className="flex items-center gap-3 p-3 rounded-xl bg-surface-lowest hover:bg-primary-fixed transition-colors duration-200 w-full group">
                      <MessageSquare size={16} className="text-primary" />
                      <div className="text-left">
                        <div className="text-xs font-medium text-on-surface">Live Chat</div>
                        <div className="text-[10px] text-on-surface-variant">Available 8am–8pm</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* HIPAA Badge */}
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary-container/30 rounded-xl">
                  <span className="material-symbols-outlined text-secondary" style={{ fontSize: '18px' }}>verified_user</span>
                  <span className="text-xs text-secondary font-medium">HIPAA Compliant · Your data is protected</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
