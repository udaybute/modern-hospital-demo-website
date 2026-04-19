'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Send, AlertCircle } from 'lucide-react'

const directLines = [
  { dept: 'Emergency', number: '1-800-555-0911', available: '24/7' },
  { dept: 'Appointments', number: '1-800-555-0100', available: 'Mon–Fri 8am–8pm' },
  { dept: 'Cardiology', number: '1-800-555-0101', available: 'Mon–Fri 9am–5pm' },
  { dept: 'Neurology', number: '1-800-555-0102', available: 'Mon–Fri 9am–5pm' },
  { dept: 'Oncology', number: '1-800-555-0103', available: 'Mon–Fri 9am–5pm' },
  { dept: 'Pediatrics', number: '1-800-555-0104', available: 'Mon–Sat 8am–6pm' },
]

const locations = [
  { name: 'Main Medical Center', address: '100 Medical Center Drive, New York, NY 10001', type: 'Primary Hospital' },
  { name: 'East Wing Outpatient', address: '120 Medical Center Drive, New York, NY 10001', type: 'Outpatient Clinic' },
  { name: 'Brooklyn Specialty Center', address: '450 Atlantic Ave, Brooklyn, NY 11217', type: 'Specialty Clinic' },
  { name: 'Westchester Campus', address: '200 Wellness Blvd, White Plains, NY 10601', type: 'Regional Center' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label mb-3">Contact Us</div>
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-on-surface leading-tight mb-5">
                We're here
                <br />
                <span className="italic font-light">when you need us.</span>
              </h1>
              <p className="section-subheading">Reach out for appointments, inquiries, second opinions, or emergencies. Our team responds within one business day — emergencies immediately.</p>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'call_24', label: '24/7 Emergency', value: '1-800-555-0911', href: 'tel:+18005550911', urgent: true },
                  { icon: 'schedule', label: 'Response Time', value: '< 1 Business Day', href: '#', urgent: false },
                  { icon: 'location_on', label: 'Locations', value: '4 Campuses', href: '#locations', urgent: false },
                  { icon: 'chat', label: 'Live Chat', value: '8am – 8pm', href: '#', urgent: false },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`p-5 rounded-2xl flex flex-col gap-2 transition-all duration-200 ${
                      item.urgent ? 'bg-tertiary text-white hover:bg-tertiary-container' : 'bg-surface-low hover:bg-primary-fixed'
                    }`}
                  >
                    <span className={`material-symbols-outlined ${item.urgent ? 'text-white' : 'text-primary'}`} style={{ fontSize: '22px' }}>{item.icon}</span>
                    <div>
                      <div className={`text-[10px] font-semibold uppercase tracking-widest ${item.urgent ? 'text-white/70' : 'text-on-surface-variant'}`}>{item.label}</div>
                      <div className={`font-semibold text-sm mt-0.5 ${item.urgent ? 'text-white' : 'text-on-surface'}`}>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 bg-surface-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="card p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mx-auto mb-5">
                      <span className="material-symbols-outlined text-secondary" style={{ fontSize: '32px' }}>check_circle</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-on-surface mb-2">Message Received</h3>
                    <p className="text-on-surface-variant">We'll respond within one business day. For urgent matters, please call 1-800-555-0911.</p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', type: '', message: '' }) }}
                      className="btn-secondary mt-6"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading text-2xl font-bold text-on-surface mb-1">Send us a Message</h2>
                    <p className="text-on-surface-variant text-sm mb-8">Complete the form below and our patient services team will respond promptly.</p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-2 block">Full Name *</label>
                          <input type="text" placeholder="Jane Doe" className="input-field" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-2 block">Email Address *</label>
                          <input type="email" placeholder="jane@example.com" className="input-field" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-2 block">Phone Number</label>
                          <input type="tel" placeholder="+1 (555) 000-0000" className="input-field" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-2 block">Inquiry Type *</label>
                          <div className="relative">
                            <select className="select-field" required value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                              <option value="">Select a category</option>
                              <option>Appointment Request</option>
                              <option>Medical Records</option>
                              <option>Second Opinion</option>
                              <option>Billing Inquiry</option>
                              <option>General Question</option>
                              <option>Feedback / Complaint</option>
                            </select>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none material-symbols-outlined text-on-surface-variant" style={{ fontSize: '18px' }}>expand_more</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-2 block">Message *</label>
                        <textarea
                          rows={5}
                          placeholder="Please describe your inquiry in detail..."
                          className="input-field resize-none"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                      <button type="submit" className="btn-primary">
                        <Send size={16} />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-5 space-y-5">

              {/* Map Placeholder */}
              <div className="relative h-56 rounded-2xl overflow-hidden bg-surface-highest">
                <Image
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80"
                  alt="Hospital location"
                  fill
                  className="object-cover opacity-60"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-surface-lowest/90 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
                    <MapPin size={18} className="text-primary" />
                    <div>
                      <div className="font-semibold text-sm text-on-surface">100 Medical Center Drive</div>
                      <div className="text-xs text-on-surface-variant">New York, NY 10001</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Lines */}
              <div className="card p-6">
                <h3 className="font-heading font-bold text-on-surface mb-4">Department Direct Lines</h3>
                <div className="space-y-3">
                  {directLines.map((line) => (
                    <a
                      key={line.dept}
                      href={`tel:${line.number.replace(/[^0-9]/g, '')}`}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-surface-low transition-colors duration-150 group"
                    >
                      <div>
                        <div className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors duration-150">{line.dept}</div>
                        <div className="text-xs text-on-surface-variant">{line.available}</div>
                      </div>
                      <div className="text-sm font-medium text-primary font-heading">{line.number}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Emergency Banner */}
              <div className="bg-tertiary rounded-2xl p-5 flex items-start gap-4">
                <AlertCircle size={20} className="text-white flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white mb-1">Medical Emergency?</div>
                  <p className="text-white/70 text-sm mb-3">Call 911 immediately or our ER hotline. Average ER wait: 12 minutes.</p>
                  <a href="tel:+18005550911" className="inline-flex items-center gap-2 bg-white text-tertiary font-bold text-sm px-4 py-2 rounded-xl hover:bg-tertiary-fixed transition-colors duration-200">
                    <Phone size={14} />
                    1-800-555-0911
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-20 bg-background scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label mb-3">Our Campuses</div>
          <h2 className="section-heading mb-10">
            Clinical excellence,
            <span className="italic font-light"> near you.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {locations.map((loc) => (
              <div key={loc.name} className="card-hover p-6">
                <span className="tag-primary mb-3 inline-block">{loc.type}</span>
                <h3 className="font-heading font-bold text-on-surface mb-2">{loc.name}</h3>
                <p className="text-on-surface-variant text-sm flex items-start gap-2">
                  <MapPin size={14} className="flex-shrink-0 mt-0.5 text-primary" />
                  {loc.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
