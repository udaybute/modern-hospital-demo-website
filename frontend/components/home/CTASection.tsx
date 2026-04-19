import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-deep grain relative overflow-hidden">

      {/* Subtle radial glow behind text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,63,135,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* ── Left: Copy ────────────────────────────────────────────── */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-10">
              <span className="rule-gold" aria-hidden="true" />
              <span className="section-eyebrow-gold">Begin Your Journey</span>
            </div>

            <h2 className="mb-6">
              <span
                className="block font-heading font-black text-white leading-tight tracking-tight"
                style={{ fontSize: 'clamp(2.75rem, 6vw, 5.5rem)', letterSpacing: '-0.03em' }}
              >
                Your health deserves
              </span>
              <span
                className="block font-display font-light italic text-white/40"
                style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)' }}
              >
                world-class attention.
              </span>
            </h2>

            <p className="text-white/35 text-lg font-light leading-[1.75] max-w-2xl">
              Connect with one of our 250+ specialists. Same-week appointments available across most departments. All major insurance accepted. Transparent, honest pricing.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-white/[0.07]">
              {[
                { icon: 'verified_user', text: 'HIPAA Compliant' },
                { icon: 'health_and_safety', text: 'Insurance Accepted' },
                { icon: 'schedule', text: 'Same-Week Appointments' },
                { icon: 'support_agent', text: '24/7 Care Navigation' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/30 text-xs font-medium">
                  <span
                    className="material-symbols-outlined text-gold/50"
                    style={{ fontSize: '14px' }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Actions ────────────────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link
              href="/appointment"
              className="btn-primary-gold w-full py-4 text-base"
            >
              Book an Appointment
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <a
              href="tel:+18005550911"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-full border border-white/15 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="w-7 h-7 rounded-full bg-tertiary/80 flex items-center justify-center">
                <Phone size={13} className="text-white" aria-hidden="true" />
              </div>
              <div>
                <div className="text-[10px] text-white/30 tracking-widest uppercase font-medium">24/7 Emergency</div>
                <div className="text-white font-heading font-bold text-base leading-none">1-800-555-0911</div>
              </div>
            </a>

            <Link
              href="/doctors"
              className="w-full text-center py-3.5 rounded-full text-white/35 hover:text-white/70 text-sm font-medium transition-colors duration-300"
            >
              Browse Our Specialists →
            </Link>

            {/* Live indicator */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse-soft" aria-hidden="true" />
              <span className="text-white/20 text-[10px] tracking-widest uppercase font-medium">
                Clinic Open · 12 min avg wait
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright bar */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-white" style={{ fontSize: '14px' }} aria-hidden="true">local_hospital</span>
            </div>
            <span className="font-heading font-bold text-white/40 text-sm">Clinical Excellence</span>
          </div>
          <span className="text-white/20 text-xs">
            © 2026 Clinical Excellence. All rights reserved.
          </span>
        </div>
      </div>
    </section>
  )
}
