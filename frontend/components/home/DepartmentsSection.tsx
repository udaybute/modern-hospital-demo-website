import Link from 'next/link'
import Image from 'next/image'
import { departments } from '@/lib/data'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export default function DepartmentsSection() {
  const featured = departments.filter((d) => d.featured)
  const rest = departments.filter((d) => !d.featured)

  return (
    <section className="py-32 bg-cream relative overflow-hidden">

      {/* Section number watermark */}
      <div className="absolute -top-4 left-6 lg:left-12 section-number" aria-hidden="true">01</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-6 mb-16 lg:mb-20">
          <div className="lg:col-span-6">
            <div className="section-eyebrow mb-5">
              <span className="rule-dark" aria-hidden="true" />
              Centers of Excellence
            </div>
            <h2 className="section-heading mb-0">
              Clinical precision across
              <br />
              <span
                className="font-display font-light italic text-on-surface/70"
                style={{ fontSize: 'inherit' }}
              >
                every specialty.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-end gap-5">
            <p className="section-subheading">
              15 specialized departments, each led by board-certified experts. From complex cardiac procedures to precision oncology — world-class care, under one roof.
            </p>
            <Link href="/services" className="btn-outline-dark self-start">
              All Departments
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* ── Featured Cards (Bento) ───────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mb-4">
          {featured.map((dept, i) => {
            const colClass =
              i === 0 ? 'lg:col-span-7' :
              i === 1 ? 'lg:col-span-5' : 'lg:col-span-12'
            const aspect = i === 2 ? 'aspect-[16/6]' : 'aspect-[4/5] md:aspect-[4/4]'
            const imgSizes =
              i === 0 ? '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 58vw' :
              i === 1 ? '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 42vw' :
              '100vw'

            return (
              <Link
                key={dept.id}
                href={`/services#${dept.id}`}
                className={`group relative overflow-hidden rounded-3xl ${aspect} ${colClass}`}
              >
                {dept.image && (
                  <Image
                    src={dept.image}
                    alt={dept.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                    sizes={imgSizes}
                  />
                )}
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-card-b opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <span className="tag-gold">{dept.doctors} Specialists</span>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-white/10 -translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight size={16} className="text-white" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Bottom */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-white/50" style={{ fontSize: '18px' }} aria-hidden="true">
                        {dept.icon}
                      </span>
                      {dept.featured && (
                        <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase">
                          Center of Excellence
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight tracking-tight">
                      {dept.name}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-2 max-w-md">
                      {dept.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {dept.specialties.slice(0, 3).map((s) => (
                        <span key={s} className="text-[10px] text-white/50 border border-white/15 px-3 py-1 rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* ── Rest of Departments — Elegant List ──────────────────────── */}
        <div className="mt-12 lg:mt-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-on-surface-variant/60">
              All Departments
            </span>
            <div className="flex-1 h-px bg-on-surface/8" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {rest.map((dept, i) => (
              <Link
                key={dept.id}
                href={`/services#${dept.id}`}
                className="group flex items-center gap-4 py-5 px-4 rounded-2xl hover:bg-on-surface/[0.03] transition-all duration-300 border-b border-on-surface/[0.06]"
              >
                <div className="w-11 h-11 rounded-2xl bg-surface-container flex items-center justify-center flex-shrink-0 group-hover:bg-primary-fixed transition-colors duration-300">
                  <span
                    className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors duration-300"
                    style={{ fontSize: '20px' }}
                    aria-hidden="true"
                  >
                    {dept.icon}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-heading font-semibold text-sm text-on-surface group-hover:text-primary transition-colors duration-300 mb-0.5">
                    {dept.name}
                  </div>
                  <div className="text-[11px] text-on-surface-variant/60 font-medium">
                    {dept.doctors} Specialists
                  </div>
                </div>
                <ArrowRight
                  size={14}
                  className="text-outline/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
