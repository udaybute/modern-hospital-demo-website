export default function StatsSection() {
  const primaryStats = [
    {
      value: '99%',
      label: 'Patient Satisfaction',
      desc: 'Rated by 12,400+ verified patients',
    },
    {
      value: '250+',
      label: 'Global Specialists',
      desc: 'Board-certified across 45+ specialties',
    },
    {
      value: '98.4%',
      label: 'Recovery Rate',
      desc: 'Across all surgical procedures',
    },
    {
      value: 'A+',
      label: 'Accreditation',
      desc: 'Joint Commission · URAC · NCQA',
    },
  ]

  const secondaryStats = [
    { value: '40', unit: 'yrs', label: 'In Practice' },
    { value: '15', unit: '', label: 'Centers of Excellence' },
    { value: '12', unit: 'min', label: 'Avg Wait Time' },
    { value: '1984', unit: '', label: 'Year Founded' },
  ]

  return (
    <section className="bg-deep grain relative overflow-hidden">

      {/* Section number watermark */}
      <div className="absolute -top-4 right-10 section-number-light" aria-hidden="true">02</div>

      {/* ── Primary Stats ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 relative z-10">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-16">
          <span className="rule-gold" aria-hidden="true" />
          <span className="section-eyebrow-gold">Our Track Record</span>
        </div>

        {/* Large stat numbers — typography-first design */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {primaryStats.map((stat, i) => (
            <div key={stat.label} className="relative py-10 px-8 group">
              {/* Vertical separator */}
              {i > 0 && (
                <div className="absolute left-0 top-10 bottom-10 w-px bg-white/[0.07]" aria-hidden="true" />
              )}

              <div
                className="font-heading font-black text-white leading-none mb-3 tracking-tight
                           text-[clamp(3.5rem,6vw,5.5rem)]
                           group-hover:text-gold transition-colors duration-400"
              >
                {stat.value}
              </div>
              <div className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                {stat.label}
              </div>
              <div className="text-white/30 text-xs leading-relaxed font-light">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* ── Divider with quote ─────────────────────────────────────── */}
        <div className="border-t border-white/[0.07] mt-10 pt-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="font-display font-light italic text-white/40 leading-relaxed"
                 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                "Clinical excellence is not a destination — it is a practice. An ongoing commitment to pushing the boundaries of what medicine can achieve."
              </p>
              <div className="flex items-center gap-3 mt-5">
                <div className="w-8 h-px bg-gold" aria-hidden="true" />
                <span className="text-gold/70 text-xs font-medium tracking-widest uppercase">
                  Dr. Julian Vance, Founder — 1984
                </span>
              </div>
            </div>

            {/* Secondary stats */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="grid grid-cols-2 gap-px bg-white/[0.06] rounded-3xl overflow-hidden">
                {secondaryStats.map((s) => (
                  <div key={s.label} className="bg-deep-2 p-6 text-center">
                    <div className="font-heading font-black text-white text-3xl leading-none mb-1 tracking-tight">
                      {s.value}
                      {s.unit && (
                        <span className="text-lg text-gold font-bold ml-0.5">{s.unit}</span>
                      )}
                    </div>
                    <div className="text-white/30 text-[10px] font-medium tracking-widest uppercase mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Accreditations strip ──────────────────────────────────────── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="text-white/20 text-[9px] font-medium tracking-[0.4em] uppercase flex-shrink-0">
              Accredited by
            </span>
            {['Joint Commission', 'URAC', 'NCQA', 'Magnet Recognition', 'NCI Designated Center'].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-white/35 text-xs font-medium">
                <span
                  className="material-symbols-outlined text-gold/60"
                  style={{ fontSize: '13px' }}
                  aria-hidden="true"
                >
                  verified
                </span>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
