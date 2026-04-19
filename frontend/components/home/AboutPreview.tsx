import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const values = [
  { icon: 'precision_manufacturing', title: 'Authoritative Precision', desc: 'Every decision grounded in rigorous evidence and decades of clinical expertise.' },
  { icon: 'volunteer_activism', title: 'Radical Empathy', desc: 'We treat the whole person — not just the condition. Dignity at the center of every interaction.' },
  { icon: 'eco', title: 'Sustainability', desc: 'Carbon-neutral operations by 2027. The health of our planet and our patients are one.' },
  { icon: 'diversity_3', title: 'Cohesion', desc: 'Multidisciplinary teams collaborating seamlessly, ensuring every patient benefits from collective expertise.' },
]

export default function AboutPreview() {
  return (
    <section className="py-32 bg-cream-2 relative overflow-hidden">

      {/* Section number watermark */}
      <div className="absolute -top-4 left-6 lg:left-12 section-number" aria-hidden="true">03</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Left: Photography ──────────────────────────────────────── */}
          <div className="lg:col-span-5 relative pb-12 lg:pb-0">
            {/* Main image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=900&q=85"
                alt="Clinical Excellence founding physicians in the original clinic, 1984"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              {/* Subtle overlay for color depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            </div>

            {/* Floating year card */}
            <div className="absolute bottom-0 lg:-bottom-4 -right-2 lg:-right-6 bg-deep rounded-3xl p-6 shadow-2xl">
              <div
                className="font-heading font-black text-white leading-none tracking-tight mb-1"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                1984
              </div>
              <div className="text-white/40 text-xs font-medium tracking-[0.2em] uppercase">Founded</div>
              <div className="text-gold/70 text-[11px] mt-2 leading-relaxed max-w-[140px]">
                Dr. Julian Vance's vision to redefine clinical care.
              </div>
            </div>

            {/* Small accent card */}
            <div className="absolute top-8 -left-4 hidden lg:block bg-surface-lowest rounded-2xl shadow-lg px-4 py-3">
              <div className="text-[10px] text-on-surface-variant tracking-widest uppercase mb-1">Heritage</div>
              <div className="font-heading font-bold text-on-surface text-lg leading-none">40 Years</div>
              <div className="text-[11px] text-on-surface-variant/70 mt-0.5">of Clinical Excellence</div>
            </div>
          </div>

          {/* ── Right: Content ─────────────────────────────────────────── */}
          <div className="lg:col-span-7">
            <div className="section-eyebrow mb-6">
              <span className="rule-dark" aria-hidden="true" />
              Our Story
            </div>

            <h2 className="mb-6" style={{ letterSpacing: '-0.025em' }}>
              <span className="block font-heading font-bold text-on-surface leading-tight"
                    style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)' }}>
                Built on precision.
              </span>
              <span className="block font-display font-light italic text-on-surface/50"
                    style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}>
                Driven by empathy.
              </span>
            </h2>

            <p className="section-subheading mb-4">
              What began as a single clinic with an audacious vision has grown into one of the nation's most respected medical institutions — 40 years of relentless innovation and unwavering patient focus.
            </p>
            <p className="text-on-surface-variant/70 leading-[1.75] mb-10 font-light">
              Today, Clinical Excellence encompasses 15 Centers of Excellence, an AI-assisted surgical wing, a molecular profiling lab, and a patient care philosophy that places empathy at the center of every clinical decision.
            </p>

            {/* Values — compact list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-10">
              {values.map((v) => (
                <div key={v.title} className="flex gap-3.5 group">
                  <div
                    className="w-9 h-9 rounded-xl bg-primary-fixed flex items-center justify-center flex-shrink-0 mt-0.5
                               group-hover:bg-on-surface transition-colors duration-300"
                    aria-hidden="true"
                  >
                    <span
                      className="material-symbols-outlined text-primary group-hover:text-white transition-colors duration-300"
                      style={{ fontSize: '17px' }}
                    >
                      {v.icon}
                    </span>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-sm text-on-surface mb-0.5">{v.title}</div>
                    <div className="text-xs text-on-surface-variant/70 leading-relaxed font-light">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-outline-dark">
              Our Full Story
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
