'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Eye, EyeOff, Shield, Fingerprint, AlertCircle } from 'lucide-react'

export default function PortalPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main className="min-h-screen bg-on-surface flex">
      {/* Left — Branding Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-14">
        {/* Background */}
        <Image
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80"
          alt="Clinical Excellence"
          fill
          className="object-cover opacity-25"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-on-surface/98 via-on-surface/90 to-primary/30" />

        {/* Content */}
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-white" style={{ fontSize: '20px' }}>local_hospital</span>
            </div>
            <div>
              <div className="font-heading font-bold text-white text-lg leading-tight">Clinical Excellence</div>
              <div className="text-[10px] text-white/40 tracking-widest uppercase">Est. 1984</div>
            </div>
          </Link>
        </div>

        <div className="relative z-10">
          <h1 className="font-heading text-5xl font-bold text-white leading-tight mb-5">
            Your health
            <br />
            <span className="italic font-light text-primary-fixed">in your hands.</span>
          </h1>
          <p className="text-white/60 leading-relaxed mb-8 max-w-sm">
            Access your medical records, lab results, prescriptions, and appointment history — securely, from anywhere.
          </p>

          {/* Features */}
          <div className="space-y-3">
            {[
              { icon: 'folder_shared', text: 'Complete medical history & records' },
              { icon: 'science', text: 'Lab results and diagnostic reports' },
              { icon: 'medication', text: 'Digital prescriptions and renewals' },
              { icon: 'calendar_month', text: 'Appointment scheduling and reminders' },
            ].map((f) => (
              <div key={f.text} className="flex items-center gap-3 text-white/65 text-sm">
                <span className="material-symbols-outlined text-primary-fixed" style={{ fontSize: '18px' }}>{f.icon}</span>
                {f.text}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <Shield size={13} />
            HIPAA Compliant · 256-bit Encryption · SOC 2 Certified
          </div>
        </div>
      </div>

      {/* Right — Form Panel */}
      <div className="flex-1 lg:w-1/2 flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md">

          {/* Mobile Logo */}
          <div className="lg:hidden mb-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '18px' }}>local_hospital</span>
              </div>
              <div className="font-heading font-bold text-on-surface text-lg">Clinical Excellence</div>
            </Link>
          </div>

          {/* Form Card */}
          <div className="bg-surface-lowest rounded-3xl shadow-ambient-lg p-8 md:p-10">
            <div className="mb-8">
              <h2 className="font-heading text-3xl font-bold text-on-surface mb-2">Patient Portal</h2>
              <p className="text-on-surface-variant text-sm">Sign in to access your health records and manage appointments.</p>
            </div>

            {/* Form */}
            <form onSubmit={(e) => { e.preventDefault(); alert('Login functionality will be connected to the backend.') }} className="space-y-5">
              <div>
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-2 block">Email Address</label>
                <input
                  type="email"
                  placeholder="patient@example.com"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">Password</label>
                  <Link href="#" className="text-xs text-primary hover:underline underline-offset-2">Forgot password?</Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="input-field pr-11"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full py-3.5 text-base">
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-outline-variant" />
              <span className="text-xs text-on-surface-variant font-medium">or sign in with biometrics</span>
              <div className="flex-1 h-px bg-outline-variant" />
            </div>

            {/* Biometric Options */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-outline-variant hover:bg-surface-low transition-all duration-200 text-on-surface-variant hover:text-on-surface group">
                <Fingerprint size={20} className="text-primary group-hover:text-primary" />
                <span className="text-sm font-medium">Touch ID</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-outline-variant hover:bg-surface-low transition-all duration-200 text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>face</span>
                <span className="text-sm font-medium">Face ID</span>
              </button>
            </div>

            {/* Sign Up */}
            <p className="text-center text-sm text-on-surface-variant mt-7">
              New patient?{' '}
              <Link href="#" className="text-primary font-semibold hover:underline underline-offset-2">
                Create a portal account
              </Link>
            </p>

            {/* HIPAA */}
            <div className="flex items-start gap-2 mt-6 p-3 bg-surface-low rounded-xl">
              <AlertCircle size={14} className="text-on-surface-variant flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-on-surface-variant leading-relaxed">
                This portal is HIPAA-compliant. Your health information is encrypted and protected. Never share your credentials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
