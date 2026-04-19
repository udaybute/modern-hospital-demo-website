import { testimonials } from '@/lib/data'

export default function TestimonialsSection() {
  // Feature the first testimonial as a hero quote, list the rest below
  const [hero, ...rest] = testimonials

  return (
    <section className="py-32 bg-cream relative overflow-hidden">

      {/* Section number watermark */}
      <div className="absolute -top-4 left-6 lg:left-12 section-number" aria-hidden="true">05</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* ── Eyebrow ──────────────────────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-20">
          <span className="rule-dark" aria-hidden="true" />
          <span className="section-eyebrow">Patient Stories</span>
        </div>

        {/* ── Hero Testimonial ─────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-20">

          {/* Giant decorative quote mark */}
          <div className="lg:col-span-1 hidden lg:flex items-start pt-2">
            <span
              className="font-display font-bold text-on-surface/[0.07] leading-none select-none"
              style={{ fontSize: '8rem', lineHeight: 1 }}
              aria-hidden="true"
            >
              "
            </span>
          </div>

          {/* Quote text */}
          <figure className="lg:col-span-8">
            <blockquote>
              <p
                className="font-display font-light italic text-on-surface leading-[1.45] mb-8"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
              >
                "{hero.text}"
              </p>
            </blockquote>
            <figcaption className="flex items-center gap-4">
              <div className="w-10 h-px bg-on-surface/15" aria-hidden="true" />
              <div>
                <div className="font-heading font-semibold text-on-surface text-sm">{hero.patientName}</div>
                <div className="text-on-surface-variant/60 text-xs mt-0.5 font-light">
                  {hero.condition} · Treated by{' '}
                  <cite className="not-italic text-primary font-medium">{hero.doctor}</cite>
                </div>
              </div>
            </figcaption>
          </figure>

          {/* Rating summary card */}
          <div className="lg:col-span-3">
            <div className="bg-on-surface rounded-3xl p-7 h-full flex flex-col justify-between">
              <div>
                <div className="font-heading font-black text-white text-5xl leading-none mb-1">4.9</div>
                <div className="text-white/30 text-xs font-medium tracking-widest uppercase mb-5">/ 5.0 Overall Rating</div>
                <div className="flex gap-1 mb-5" aria-label="4.9 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 h-1 rounded-full bg-gold"
                      style={{ opacity: i < 4 ? 1 : 0.4 }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { pct: '97%', label: 'Would Recommend' },
                  { pct: '99%', label: 'Felt Respected' },
                  { pct: '96%', label: 'Clear Communication' },
                ].map((m) => (
                  <div key={m.label} className="flex items-center justify-between">
                    <span className="text-white/40 text-xs">{m.label}</span>
                    <span className="font-heading font-bold text-gold text-sm">{m.pct}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/[0.08] text-white/25 text-[10px] font-medium">
                Based on 12,400+ verified reviews
              </div>
            </div>
          </div>
        </div>

        {/* ── Additional Testimonials ──────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10 border-t border-on-surface/[0.07]">
          {rest.map((t) => (
            <figure key={t.id} className="card-hover p-7 flex flex-col gap-4">
              <blockquote>
                <p className="font-display font-light italic text-on-surface/70 leading-relaxed"
                   style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                  "{t.text}"
                </p>
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-4 border-t border-outline-variant/40 mt-auto">
                <div className="w-6 h-px bg-on-surface/20" aria-hidden="true" />
                <div>
                  <div className="font-heading font-semibold text-sm text-on-surface">{t.patientName}</div>
                  <div className="text-xs text-on-surface-variant/60 mt-0.5 font-light">
                    {t.condition} · <cite className="not-italic text-primary">{t.doctor}</cite>
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
