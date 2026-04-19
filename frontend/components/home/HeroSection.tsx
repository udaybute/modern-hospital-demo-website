import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'

const quickStats = [
  { value: '99%', label: 'Patient Satisfaction' },
  { value: '250+', label: 'Global Specialists' },
  { value: '98.4%', label: 'Recovery Rate' },
  { value: 'A+', label: 'Accreditation' },
]

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative h-screen min-h-[720px] max-h-[1080px] overflow-hidden bg-deep grain"
    >
      {/* ── Photography Panel (right 50%) ──────────────────────────────── */}
      <div className="absolute top-0 right-0 w-1/2 h-full" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1400&q=90"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="50vw"
        />
        {/* Left-edge gradient — blends photo into the dark bg */}
        <div className="absolute inset-0 bg-gradient-photo-l" />
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-photo-b" />
      </div>

      {/* ── Thin vertical accent line ───────────────────────────────────── */}
      <div
        className="absolute top-0 left-[50%] -translate-x-1/2 w-px h-full bg-white/[0.06] hidden lg:block"
        aria-hidden="true"
      />

      {/* ── Main content ────────────────────────────────────────────────── */}
      <div className="relative z-10 h-full flex flex-col">

        {/* Top content area */}
        <div className="flex-1 flex items-center pt-24">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-2xl lg:max-w-[58%]">

              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-10">
                <span className="section-eyebrow-gold">The Architectural Healer</span>
                <span className="rule-gold" aria-hidden="true" />
                <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase font-medium">Est. 1984</span>
              </div>

              {/* Headline — Serif + Sans weight contrast */}
              <h1 className="mb-9 space-y-1">
                <span
                  className="block font-display font-light italic leading-[0.92]
                             text-white/80 text-[clamp(2.75rem,5.5vw,5rem)]"
                >
                  The Future of
                </span>
                <span
                  className="block font-heading font-black text-white leading-[0.88]
                             tracking-tight text-[clamp(4.5rem,9vw,8.5rem)]"
                >
                  HEALING
                </span>
                <span
                  className="block font-display font-light italic leading-[1.05]
                             text-white/60 text-[clamp(1.75rem,3.5vw,3rem)]"
                >
                  is Architectural.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-white/45 text-base md:text-lg leading-[1.8] max-w-lg mb-10 font-light">
                Where precision clinical infrastructure meets radical empathy.
                250+ world-class specialists. One unwavering commitment to your recovery.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/appointment" className="btn-primary-gold">
                  Book Appointment
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <Link href="/services" className="btn-outline-white">
                  Explore Services
                </Link>
                {/* Mobile-only emergency */}
                <a
                  href="tel:+18005550911"
                  className="lg:hidden btn-emergency"
                >
                  <Phone size={15} aria-hidden="true" />
                  Emergency
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Stats Bar ────────────────────────────────────────── */}
        <div className="relative z-10 border-t border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
            <div className="flex flex-wrap items-center gap-8 lg:gap-12">

              {quickStats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-4">
                  {i > 0 && (
                    <div className="w-px h-7 bg-white/[0.12]" aria-hidden="true" />
                  )}
                  <div>
                    <div className="font-heading font-black text-white text-2xl md:text-3xl leading-none tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-white/35 text-[10px] font-medium tracking-[0.15em] uppercase mt-1">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}

              {/* Emergency — desktop only */}
              <a
                href="tel:+18005550911"
                className="ml-auto hidden lg:flex items-center gap-3
                           border border-tertiary/60 text-white px-5 py-3 rounded-full
                           hover:bg-tertiary/20 transition-all duration-300"
              >
                <div className="w-7 h-7 rounded-full bg-tertiary/90 flex items-center justify-center flex-shrink-0">
                  <Phone size={13} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-[10px] text-white/50 tracking-widest uppercase font-medium">Emergency</div>
                  <div className="text-sm font-bold text-white font-heading leading-none">1-800-555-0911</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating Live Status (desktop, on photo side) ────────────── */}
      <div
        className="absolute top-36 right-[4%] z-20 hidden lg:block"
        aria-label="Live clinic status"
      >
        <div className="glass-dark rounded-2xl px-5 py-4 min-w-[220px]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white/60 text-xs font-medium tracking-wide">Live Status</span>
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-secondary-fixed">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse-soft" aria-hidden="true" />
              Open Now
            </span>
          </div>
          <div className="space-y-3">
            {[
              { icon: 'schedule', value: '12 min', label: 'Average wait time' },
              { icon: 'groups', value: '45+', label: 'Physicians on duty' },
              { icon: 'bed', value: '94%', label: 'Bed availability' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-white/30" style={{ fontSize: '14px' }} aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="text-white/50 text-[11px]">{item.label}</span>
                </div>
                <span className="text-white font-bold text-sm font-heading">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────────────────── */}
      <div
        className="absolute bottom-24 right-[4%] hidden lg:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-white/40" />
        <span className="text-white/25 text-[9px] tracking-[0.3em] uppercase font-medium"
              style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
      </div>
    </section>
  )
}
