import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { departments } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Services — Clinical Excellence',
  description:
    'Explore 15 Centers of Excellence at Clinical Excellence — from cardiology and neurology to oncology, pediatrics, and precision diagnostics.',
}

/* ── Per-department editorial layer (data not in lib/data) ───────────────── */
const editorial: Record<
  string,
  { tagline: string; stat: string; statLabel: string; badge?: string }
> = {
  cardiology: {
    tagline: 'The science of the beating heart.',
    stat: '4,200+',
    statLabel: 'Cardiac procedures annually',
    badge: 'Ranked #1 in Cardiac Outcomes',
  },
  neurology: {
    tagline: 'Where mind meets medicine.',
    stat: '98%',
    statLabel: 'Surgical success rate',
    badge: 'AI-Navigated Precision Surgery',
  },
  oncology: {
    tagline: 'Precision. Compassion. Remission.',
    stat: '94%',
    statLabel: 'Phase III trial response rate',
    badge: 'NCI-Designated Cancer Center',
  },
}

const featuredDepts = departments.filter((d) => d.featured)
const otherDepts = departments.filter((d) => !d.featured)

const techPillars = [
  {
    icon: 'precision_manufacturing',
    value: '5th Gen',
    label: 'Robotic Surgery',
    desc: 'Sub-millimetre precision. First in the region to deploy the latest surgical platform.',
  },
  {
    icon: 'radiology',
    value: '3T',
    label: 'MRI & AI Imaging',
    desc: 'Neural-network-assisted diagnostics identify anomalies earlier and with greater accuracy.',
  },
  {
    icon: 'biotech',
    value: 'NGS',
    label: 'Genomic Profiling',
    desc: "Next-generation sequencing tailors every treatment plan to the patient's molecular profile.",
  },
  {
    icon: 'emergency',
    value: '12 min',
    label: 'Average ER Wait',
    desc: 'Round-the-clock critical care. Our trauma team responds in minutes, not hours.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[82vh] bg-deep grain overflow-hidden flex items-center">

        {/* Right-side full-bleed photo with left-fade gradient */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=1400&q=80"
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority
          />
          {/* fade left to deep bg */}
          <div className="absolute inset-0 bg-gradient-photo-l" />
          {/* fade bottom */}
          <div className="absolute inset-0 bg-gradient-photo-b opacity-50" />
        </div>

        {/* Section number watermark */}
        <div
          className="section-number-light absolute -bottom-6 right-10 pointer-events-none"
          aria-hidden="true"
        >
          01
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-44 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-10">
              <span className="rule-gold" aria-hidden="true" />
              <span className="section-eyebrow-gold">Clinical Departments</span>
            </div>

            <h1 className="mb-8">
              <span
                className="block font-heading font-black text-white leading-none"
                style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)', letterSpacing: '-0.03em' }}
              >
                Fifteen Centers
              </span>
              <span
                className="block font-display font-light italic text-white/40 leading-tight"
                style={{ fontSize: 'clamp(3rem, 6vw, 5.25rem)' }}
              >
                of Excellence.
              </span>
            </h1>

            <p className="text-white/40 text-lg font-light leading-[1.8] max-w-lg mb-12">
              Every specialty. Every complexity. One unwavering standard of care — delivered by 250+ board-certified
              specialists who trained at the world's most prestigious institutions.
            </p>

            {/* Credential strip */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: 'verified_user', text: 'Joint Commission Gold Seal' },
                { icon: 'workspace_premium', text: 'A+ Accreditation Rating' },
                { icon: 'biotech', text: 'NCI-Designated' },
              ].map((c) => (
                <div
                  key={c.text}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '13px', color: '#c9a56a' }}
                    aria-hidden="true"
                  >
                    {c.icon}
                  </span>
                  <span className="text-white/50 text-[10px] font-semibold tracking-wide">{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY DEPARTMENT NAV ────────────────────────────────────────────── */}
      <div className="sticky top-20 z-40 glassmorphic-nav">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-3">
            {departments.map((d) => (
              <a
                key={d.id}
                href={`#${d.id}`}
                className="flex-shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all duration-200 whitespace-nowrap"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '13px' }}
                  aria-hidden="true"
                >
                  {d.icon}
                </span>
                {d.name}
                {d.featured && (
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#c9a56a' }}
                    aria-label="Center of Excellence"
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── CENTERS OF EXCELLENCE ────────────────────────────────────────────── */}
      <section className="py-28 bg-cream relative overflow-hidden">
        <div className="absolute -top-4 right-10 section-number pointer-events-none" aria-hidden="true">02</div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

          {/* Section header */}
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <span className="rule-dark" aria-hidden="true" />
                <span className="section-eyebrow">Centers of Excellence</span>
              </div>
              <h2 className="section-heading">
                Where clinical mastery
                <br />
                <span
                  className="font-display font-light italic text-on-surface/45"
                  style={{ fontSize: 'inherit' }}
                >
                  meets architectural precision.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="section-subheading">
                Our three flagship departments represent the highest concentration of specialised expertise,
                technology, and outcomes data in the region.
              </p>
            </div>
          </div>

          {/* Editorial cards */}
          <div className="space-y-6">
            {featuredDepts.map((dept, i) => {
              const ed = editorial[dept.id] ?? { tagline: '', stat: '', statLabel: '' }
              return (
                <article
                  key={dept.id}
                  id={dept.id}
                  className="group relative bg-surface-lowest rounded-3xl overflow-hidden scroll-mt-36 transition-all duration-500 hover:-translate-y-0.5"
                  style={{ boxShadow: '0 4px 40px rgba(17,19,24,0.07)', minHeight: '460px' }}
                >
                  <div className="grid lg:grid-cols-12 h-full">

                    {/* Photo */}
                    <div
                      className={`relative lg:col-span-5 overflow-hidden ${
                        i % 2 === 1 ? 'lg:order-last' : ''
                      }`}
                      style={{ minHeight: '320px' }}
                    >
                      {dept.image && (
                        <Image
                          src={dept.image}
                          alt={dept.name}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 42vw"
                        />
                      )}
                      {/* Gold tint on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      {/* Stat overlay — bottom of photo */}
                      <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-card-b">
                        <div
                          className="font-heading font-black text-white leading-none"
                          style={{ fontSize: '2.5rem', letterSpacing: '-0.03em' }}
                        >
                          {ed.stat}
                        </div>
                        <div className="text-white/45 text-[10px] font-semibold tracking-[0.2em] uppercase mt-1">
                          {ed.statLabel}
                        </div>
                      </div>
                    </div>

                    {/* Content panel */}
                    <div className="lg:col-span-7 p-8 lg:p-10 xl:p-14 flex flex-col justify-center">

                      {/* Badges row */}
                      <div className="flex items-center gap-3 mb-6 flex-wrap">
                        {/* Gold CoE badge */}
                        <div
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                          style={{
                            background: 'rgba(201,165,106,0.10)',
                            border: '1px solid rgba(201,165,106,0.22)',
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: '11px', color: '#c9a56a' }}
                            aria-hidden="true"
                          >
                            workspace_premium
                          </span>
                          <span
                            className="text-[9px] font-bold tracking-[0.2em] uppercase"
                            style={{ color: '#8a6d3e' }}
                          >
                            Center of Excellence
                          </span>
                        </div>

                        {ed.badge && (
                          <div
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                            style={{ background: 'rgba(0,63,135,0.07)', border: '1px solid rgba(0,63,135,0.12)' }}
                          >
                            <span className="text-[9px] font-semibold tracking-wide text-primary">{ed.badge}</span>
                          </div>
                        )}
                      </div>

                      {/* Icon + name */}
                      <div className="flex items-start gap-4 mb-3">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: '#111318' }}
                        >
                          <span
                            className="material-symbols-outlined text-white"
                            style={{ fontSize: '22px', fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}
                            aria-hidden="true"
                          >
                            {dept.icon}
                          </span>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary mb-1">
                            {dept.specialties[0]}
                          </div>
                          <h3
                            className="font-heading font-bold text-on-surface leading-tight group-hover:text-primary transition-colors duration-300"
                            style={{ fontSize: 'clamp(1.625rem, 3vw, 2.5rem)', letterSpacing: '-0.02em' }}
                          >
                            {dept.name}
                          </h3>
                        </div>
                      </div>

                      {/* Editorial tagline */}
                      {ed.tagline && (
                        <p
                          className="font-display font-light italic text-on-surface/40 mb-5 leading-snug"
                          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.375rem)' }}
                        >
                          {ed.tagline}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-on-surface-variant leading-relaxed mb-6 text-sm lg:text-base line-clamp-3">
                        {dept.description}
                      </p>

                      {/* Specialties */}
                      <div className="flex flex-wrap gap-2 mb-7">
                        {dept.specialties.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-semibold px-3 py-1.5 rounded-full bg-surface-low text-on-surface-variant tracking-wide"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* Doctor count micro-stat */}
                      <div className="flex items-center gap-2 mb-7 pb-7 border-b border-outline-variant/25">
                        <span className="material-symbols-outlined text-primary" style={{ fontSize: '16px' }} aria-hidden="true">
                          group
                        </span>
                        <span className="text-on-surface text-sm font-semibold">{dept.doctors}</span>
                        <span className="text-on-surface-variant text-sm">board-certified specialists</span>
                      </div>

                      {/* CTAs */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <Link href="/appointment" className="btn-primary-gold text-sm py-2.5 px-6">
                          Book Appointment
                          <ArrowRight size={13} aria-hidden="true" />
                        </Link>
                        <Link href="/doctors" className="btn-outline-dark text-sm py-2.5 px-5">
                          View Specialists
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ALL DEPARTMENTS GRID ─────────────────────────────────────────────── */}
      <section className="py-28 bg-cream-2 relative overflow-hidden">
        <div className="absolute -top-4 left-6 lg:left-12 section-number pointer-events-none" aria-hidden="true">03</div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

          <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4 mb-6">
                <span className="rule-dark" aria-hidden="true" />
                <span className="section-eyebrow">All Specialties</span>
              </div>
              <h2 className="section-heading">
                Every discipline.
                <br />
                <span
                  className="font-display font-light italic text-on-surface/45"
                  style={{ fontSize: 'inherit' }}
                >
                  One standard.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="section-subheading">
                Beyond our three flagship centres, six additional specialties cover the full spectrum of adult
                and paediatric medicine — each staffed by fellowship-trained consultants.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherDepts.map((dept) => (
              <article
                key={dept.id}
                id={dept.id}
                className="group bg-surface-lowest rounded-3xl p-7 flex flex-col gap-5 scroll-mt-36 transition-all duration-400 hover:-translate-y-1"
                style={{ boxShadow: '0 4px 20px rgba(17,19,24,0.06)' }}
              >
                {/* Icon */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-13 h-13 rounded-2xl flex items-center justify-center transition-colors duration-300"
                    style={{ width: '52px', height: '52px', background: 'rgba(17,19,24,0.05)' }}
                  >
                    <span
                      className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors duration-300"
                      style={{
                        fontSize: '24px',
                        fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24",
                      }}
                      aria-hidden="true"
                    >
                      {dept.icon}
                    </span>
                  </div>
                  <span
                    className="text-[10px] font-semibold text-on-surface-variant/60 bg-surface-low px-2.5 py-1 rounded-full"
                  >
                    {dept.doctors} specialists
                  </span>
                </div>

                {/* Name + description */}
                <div>
                  <h3
                    className="font-heading font-bold text-on-surface mb-2 group-hover:text-primary transition-colors duration-300"
                    style={{ fontSize: '1.125rem', letterSpacing: '-0.01em' }}
                  >
                    {dept.name}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                    {dept.description}
                  </p>
                </div>

                {/* Specialty pills */}
                <div className="flex flex-wrap gap-1.5">
                  {dept.specialties.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-surface-low text-on-surface-variant tracking-wide"
                    >
                      {s}
                    </span>
                  ))}
                  {dept.specialties.length > 3 && (
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-surface-low text-on-surface-variant/60">
                      +{dept.specialties.length - 3} more
                    </span>
                  )}
                </div>

                {/* CTA row */}
                <div className="mt-auto pt-4 border-t border-outline-variant/25 flex items-center justify-between">
                  <Link
                    href="/appointment"
                    className="text-[11px] font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                  >
                    Book Now
                    <ArrowRight size={11} aria-hidden="true" />
                  </Link>
                  <Link
                    href="/doctors"
                    className="text-[11px] text-on-surface-variant hover:text-primary transition-colors duration-200 font-medium"
                  >
                    View Doctors
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY & INNOVATION ──────────────────────────────────────────── */}
      <section className="py-28 bg-deep grain relative overflow-hidden">
        <div className="absolute -top-4 right-10 section-number-light pointer-events-none" aria-hidden="true">04</div>

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,63,135,0.07) 0%, transparent 60%)' }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

          <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <span className="rule-gold" aria-hidden="true" />
                <span className="section-eyebrow-gold">Technology & Approach</span>
              </div>
              <h2 className="mb-0">
                <span
                  className="block font-heading font-black text-white leading-none"
                  style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)', letterSpacing: '-0.025em' }}
                >
                  Clinical tools that
                </span>
                <span
                  className="block font-display font-light italic text-white/35 leading-tight"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
                >
                  define the edge.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-white/35 text-lg font-light leading-[1.75]">
                We invest where it matters: surgical robotics, AI-assisted imaging, genomic profiling, and the
                infrastructure to deploy these at scale.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techPillars.map((t) => (
              <div
                key={t.label}
                className="group relative rounded-3xl p-7 flex flex-col gap-5 overflow-hidden transition-all duration-400 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(201,165,106,0.12)' }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: '20px',
                      color: '#c9a56a',
                      fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24",
                    }}
                    aria-hidden="true"
                  >
                    {t.icon}
                  </span>
                </div>

                {/* Value */}
                <div>
                  <div
                    className="font-heading font-black text-white leading-none mb-1"
                    style={{ fontSize: '2rem', letterSpacing: '-0.025em', color: '#c9a56a' }}
                  >
                    {t.value}
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/35">
                    {t.label}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/30 text-xs leading-relaxed mt-auto">{t.desc}</p>

                {/* Bottom gold rule on hover */}
                <div
                  className="absolute bottom-0 left-7 right-7 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-full"
                  style={{ backgroundColor: 'rgba(201,165,106,0.30)' }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS STRIP ─────────────────────────────────────────────── */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: 'health_and_safety',
                title: 'All Major Insurance',
                desc: 'We handle prior authorisations and billing on your behalf. No surprises, transparent pricing.',
              },
              {
                icon: 'calendar_month',
                title: 'Same-Week Scheduling',
                desc: 'Most specialties offer same-week appointments. Urgent cases are often seen the same day.',
              },
              {
                icon: 'support_agent',
                title: '24/7 Care Navigation',
                desc: 'Our patient navigators match you to the right specialist — at no cost, no referral required.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-surface-lowest rounded-3xl p-7 flex gap-5 transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: '0 4px 20px rgba(17,19,24,0.06)' }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,63,135,0.07)' }}
                >
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontSize: '22px', fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-on-surface mb-1.5">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-deep grain relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,63,135,0.09) 0%, transparent 65%)' }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="rule-gold" aria-hidden="true" />
                <span className="section-eyebrow-gold">Begin Your Care</span>
              </div>
              <h2 className="mb-5">
                <span
                  className="block font-heading font-black text-white leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)', letterSpacing: '-0.025em' }}
                >
                  Ready to experience
                </span>
                <span
                  className="block font-display font-light italic text-white/35 leading-tight"
                  style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)' }}
                >
                  world-class care?
                </span>
              </h2>
              <p className="text-white/35 text-lg font-light leading-[1.75] max-w-xl">
                Same-week appointments available across most specialties. All major insurance accepted.
                Transparent, honest pricing — always.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link href="/appointment" className="btn-primary-gold w-full py-4">
                Book an Appointment
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/doctors"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-white/40 hover:text-white/70 hover:bg-white/[0.05] border border-white/12 transition-all duration-300 text-sm font-medium"
              >
                Browse Our Specialists
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              <a
                href="tel:+18005550911"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-white/30 hover:text-white/55 transition-colors duration-300 text-sm font-medium"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '15px' }} aria-hidden="true">call</span>
                Emergency · 1-800-555-0911
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
