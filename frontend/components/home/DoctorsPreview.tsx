import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { doctors } from '@/lib/data'

export default function DoctorsPreview() {
  const featured = doctors.slice(0, 4)

  return (
    <section className="py-32 bg-deep grain relative overflow-hidden">

      {/* Section number watermark */}
      <div className="absolute -top-4 right-10 section-number-light" aria-hidden="true">04</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <span className="rule-gold" aria-hidden="true" />
              <span className="section-eyebrow-gold">Our Specialists</span>
            </div>
            <h2 className="text-white leading-tight mb-0"
                style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)', letterSpacing: '-0.025em', fontFamily: 'var(--font-manrope)', fontWeight: 800 }}>
              Meet the minds
              <br />
              <span className="font-display font-light italic text-white/45"
                    style={{ fontSize: 'inherit' }}>
                behind the care.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-end gap-5">
            <p className="text-white/40 text-lg leading-[1.75] font-light">
              250+ board-certified specialists trained at the world's most prestigious medical institutions. Each brings exceptional expertise and genuine empathy.
            </p>
            <Link href="/doctors" className="btn-outline-white self-start">
              All Specialists
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* ── Doctor Cards — Editorial Photography ────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {featured.map((doctor) => (
            <Link
              key={doctor.id}
              href={`/doctors#${doctor.id}`}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4]"
            >
              {/* Photography */}
              <Image
                src={doctor.image}
                alt={`Photo of ${doctor.name}`}
                fill
                className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-[transform,filter] duration-700 ease-premium"
                sizes="(max-width: 640px) 50vw, 25vw"
              />

              {/* Always-on bottom gradient */}
              <div className="absolute inset-0 bg-gradient-card-b" />

              {/* Hover reveal: top right link icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight size={15} className="text-white" aria-hidden="true" />
              </div>

              {/* Availability dot */}
              <div className="absolute top-4 left-4">
                <span
                  className={`w-2 h-2 rounded-full block ${
                    doctor.availability === 'Available' ? 'bg-secondary-fixed' : 'bg-gold'
                  }`}
                  aria-label={doctor.availability}
                />
              </div>

              {/* Content — always visible at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold/80 mb-1.5">
                  {doctor.specialty}
                </div>
                <h3 className="font-heading font-bold text-white text-base leading-tight mb-1 group-hover:text-gold/90 transition-colors duration-300">
                  {doctor.name}
                </h3>
                <div className="text-white/40 text-[11px]">
                  {doctor.experience} yrs · {doctor.rating}★
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Bottom strip ─────────────────────────────────────────────── */}
        <div className="mt-12 pt-10 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            {[
              { value: '250+', label: 'Specialists' },
              { value: '45+', label: 'Specialties' },
              { value: '4.9★', label: 'Avg Rating' },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-4">
                {i > 0 && <div className="w-px h-6 bg-white/[0.1]" aria-hidden="true" />}
                <div>
                  <div className="font-heading font-black text-white text-xl leading-none">{s.value}</div>
                  <div className="text-white/30 text-[10px] mt-0.5 font-medium tracking-widest uppercase">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/25 text-xs max-w-xs leading-relaxed font-light">
            All specialists are board-certified and credentialed at Clinical Excellence's rigorous standards.
          </p>
        </div>
      </div>
    </section>
  )
}
