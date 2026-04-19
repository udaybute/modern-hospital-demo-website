'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Calendar } from 'lucide-react'
import { doctors, departments } from '@/lib/data'

export default function DoctorsPage() {
  const [activeDept, setActiveDept] = useState('all')
  const [availFilter, setAvailFilter] = useState('all')
  const [sortBy, setSortBy] = useState('relevance')

  const allDepts = [{ id: 'all', name: 'All Specialties' }, ...departments]
  const featuredDoctors = doctors.filter((d) => d.rating >= 4.9).slice(0, 2)

  const filtered = useMemo(() => {
    let list = [...doctors]
    if (activeDept !== 'all') list = list.filter((d) => d.department === activeDept)
    if (availFilter === 'available') list = list.filter((d) => d.availability === 'Available')
    if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating)
    else if (sortBy === 'experience') list.sort((a, b) => b.experience - a.experience)
    else if (sortBy === 'consultations') list.sort((a, b) => b.consultations - a.consultations)
    return list
  }, [activeDept, availFilter, sortBy])

  const showFeatured = activeDept === 'all' && availFilter === 'all'

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="min-h-[90vh] bg-deep grain relative overflow-hidden flex items-center">

        {/* Section number watermark */}
        <div className="section-number-light absolute -bottom-6 left-8 pointer-events-none" aria-hidden="true">01</div>

        {/* Subtle radial glow */}
        <div
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,63,135,0.07) 0%, transparent 60%)' }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-40 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left: Editorial Copy */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-10">
                <span className="rule-gold" aria-hidden="true" />
                <span className="section-eyebrow-gold">Our Specialists</span>
              </div>

              <h1 className="mb-8">
                <span
                  className="block font-heading font-black text-white leading-none"
                  style={{ fontSize: 'clamp(3.25rem, 6vw, 5.5rem)', letterSpacing: '-0.03em' }}
                >
                  The Minds
                </span>
                <span
                  className="block font-display font-light italic text-white/45 leading-tight"
                  style={{ fontSize: 'clamp(3rem, 5.5vw, 5rem)' }}
                >
                  behind the medicine.
                </span>
              </h1>

              <p className="text-white/40 text-lg font-light leading-[1.8] max-w-md mb-10">
                250+ board-certified specialists from Johns Hopkins, Harvard, and Stanford — practicing here, for you.
              </p>

              {/* Micro stats */}
              <div className="flex items-stretch gap-8 pt-8 border-t border-white/[0.07]">
                {[
                  { value: '250+', label: 'Specialists' },
                  { value: '98%', label: 'Board Certified' },
                  { value: '4.9★', label: 'Avg. Rating' },
                ].map((s, i) => (
                  <div key={s.label} className="flex flex-col">
                    {i > 0 && (
                      <div className="absolute left-0 top-1 bottom-1 w-px bg-white/10 -ml-4" aria-hidden="true" />
                    )}
                    <span
                      className="font-heading font-black text-white leading-none"
                      style={{ fontSize: '1.625rem', letterSpacing: '-0.025em' }}
                    >
                      {s.value}
                    </span>
                    <span className="text-white/30 text-[9px] font-semibold tracking-[0.22em] uppercase mt-1">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Stacked Portrait Gallery */}
            <div className="hidden lg:flex lg:col-span-7 justify-end items-center">
              <div className="relative w-full max-w-[680px] h-[580px]">

                {/* Portrait 1 — large, right */}
                <div
                  className="absolute right-0 top-0 w-[310px] h-[460px] rounded-3xl overflow-hidden"
                  style={{ boxShadow: '0 40px 80px rgba(11,13,22,0.7)' }}
                >
                  <Image
                    src={doctors[0].image}
                    alt={doctors[0].name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="310px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-card-b opacity-75" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="text-[9px] font-bold tracking-[0.25em] uppercase mb-1" style={{ color: '#c9a56a' }}>
                      {doctors[0].specialty}
                    </div>
                    <div className="font-heading font-bold text-white text-sm leading-snug">{doctors[0].name}</div>
                    <div className="text-white/35 text-[11px] mt-0.5">{doctors[0].education.split(',')[0]}</div>
                  </div>
                </div>

                {/* Portrait 2 — medium, left + down */}
                <div
                  className="absolute left-0 top-[110px] w-[240px] h-[330px] rounded-3xl overflow-hidden"
                  style={{ boxShadow: '0 30px 70px rgba(11,13,22,0.65)' }}
                >
                  <Image
                    src={doctors[1].image}
                    alt={doctors[1].name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="240px"
                  />
                  <div className="absolute inset-0 bg-gradient-card-b opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[9px] font-bold tracking-[0.25em] uppercase mb-1" style={{ color: '#c9a56a' }}>
                      {doctors[1].specialty}
                    </div>
                    <div className="font-heading font-bold text-white text-sm">{doctors[1].name}</div>
                  </div>
                </div>

                {/* Portrait 3 — small, bottom center */}
                <div
                  className="absolute right-[95px] bottom-0 w-[200px] h-[210px] rounded-2xl overflow-hidden"
                  style={{ boxShadow: '0 20px 50px rgba(11,13,22,0.55)' }}
                >
                  <Image
                    src={doctors[3].image}
                    alt={doctors[3].name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-gradient-card-b opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="font-heading font-bold text-white text-xs leading-tight">{doctors[3].name}</div>
                  </div>
                </div>

                {/* Floating glass accreditation pill */}
                <div
                  className="absolute left-[230px] top-[60px] glass-dark rounded-2xl px-4 py-3 flex items-center gap-3"
                  style={{ boxShadow: '0 20px 40px rgba(11,13,22,0.4)' }}
                >
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                       style={{ background: 'rgba(201,165,106,0.18)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '15px', color: '#c9a56a' }} aria-hidden="true">
                      verified
                    </span>
                  </div>
                  <div>
                    <div className="text-white/80 text-[10px] font-semibold leading-tight">A+ Accreditation</div>
                    <div className="text-white/35 text-[9px]">Joint Commission Gold Seal</div>
                  </div>
                </div>

                {/* Floating live availability pill */}
                <div className="absolute right-[10px] bottom-[65px] glass-dark rounded-xl px-3.5 py-2.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse-soft" aria-hidden="true" />
                  <span className="text-white/55 text-[10px] font-medium">186 available today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY FILTER BAR ───────────────────────────────────────────────── */}
      <div className="sticky top-20 z-40 glassmorphic-nav">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2 py-3 overflow-hidden">

            {/* Department pills */}
            <div className="flex-1 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {allDepts.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveDept(d.id)}
                  className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-200 ${
                    activeDept === d.id
                      ? 'bg-on-surface text-white'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
                >
                  {d.name}
                </button>
              ))}
            </div>

            {/* Separator */}
            <div className="w-px h-4 bg-outline-variant/50 flex-shrink-0 mx-1" aria-hidden="true" />

            {/* Availability toggle */}
            <button
              onClick={() => setAvailFilter(availFilter === 'all' ? 'available' : 'all')}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 ${
                availFilter === 'available'
                  ? 'bg-secondary/10 text-secondary border border-secondary/20'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                  availFilter === 'available' ? 'bg-secondary' : 'bg-outline-variant'
                }`}
              />
              Available Now
            </button>

            {/* Separator */}
            <div className="w-px h-4 bg-outline-variant/50 flex-shrink-0 mx-1" aria-hidden="true" />

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-shrink-0 text-[11px] font-semibold text-on-surface-variant bg-transparent border-none outline-none cursor-pointer py-1.5 pr-1"
            >
              <option value="relevance">Best Match</option>
              <option value="rating">Top Rated</option>
              <option value="experience">Most Experienced</option>
              <option value="consultations">Most Consulted</option>
            </select>
          </div>
        </div>
      </div>

      {/* ── DISTINGUISHED PHYSICIANS ─────────────────────────────────────────── */}
      {showFeatured && (
        <section className="py-24 bg-cream relative overflow-hidden">
          <div className="absolute -top-4 right-10 section-number pointer-events-none" aria-hidden="true">02</div>

          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
            <div className="flex items-center gap-4 mb-14">
              <span className="rule-dark" aria-hidden="true" />
              <span className="section-eyebrow">Distinguished Physicians</span>
            </div>

            <div className="space-y-5">
              {featuredDoctors.map((doc, i) => (
                <article
                  key={doc.id}
                  className="group relative bg-surface-lowest rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
                  style={{ boxShadow: '0 4px 32px rgba(17,19,24,0.06)' }}
                >
                  <div className="grid lg:grid-cols-12">

                    {/* Portrait */}
                    <div
                      className={`relative lg:col-span-4 overflow-hidden ${
                        i % 2 === 1 ? 'lg:order-last' : ''
                      }`}
                      style={{ minHeight: '420px' }}
                    >
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      {/* Gold accent tint on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      {/* Availability indicator */}
                      <div className="absolute top-5 left-5">
                        <div className={`flex items-center gap-1.5 backdrop-blur-sm px-2.5 py-1.5 rounded-full ${
                          doc.availability === 'Available'
                            ? 'bg-deep/50 border border-secondary/30'
                            : 'bg-deep/50 border border-tertiary/30'
                        }`}>
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              doc.availability === 'Available' ? 'bg-secondary-fixed animate-pulse-soft' : 'bg-tertiary-fixed/70'
                            }`}
                          />
                          <span className="text-white/70 text-[10px] font-medium">{doc.availability}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`lg:col-span-8 p-8 lg:p-10 xl:p-12 flex flex-col justify-center ${i % 2 === 1 ? '' : ''}`}>

                      {/* Distinguished badge */}
                      <div className="flex items-center gap-3 mb-5">
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
                            className="text-[9px] font-bold tracking-[0.22em] uppercase"
                            style={{ color: '#8a6d3e' }}
                          >
                            Distinguished Physician
                          </span>
                        </div>
                      </div>

                      {/* Specialty label */}
                      <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary mb-2">
                        {doc.specialty}
                      </div>

                      {/* Name */}
                      <h2
                        className="font-heading font-bold text-on-surface leading-tight mb-1.5 group-hover:text-primary transition-colors duration-300"
                        style={{ fontSize: 'clamp(1.625rem, 3vw, 2.375rem)', letterSpacing: '-0.02em' }}
                      >
                        {doc.name}
                      </h2>

                      {/* Institution */}
                      <div className="text-on-surface-variant text-sm mb-5 font-light">{doc.education}</div>

                      {/* Bio */}
                      <p className="text-on-surface-variant leading-relaxed mb-6 line-clamp-2">
                        {doc.bio}
                      </p>

                      {/* Qualifications */}
                      <div className="flex flex-wrap gap-2 mb-7">
                        {doc.qualifications.map((q) => (
                          <span
                            key={q}
                            className="text-[10px] font-semibold px-3 py-1.5 rounded-full bg-surface-low text-on-surface-variant tracking-wide"
                          >
                            {q}
                          </span>
                        ))}
                      </div>

                      {/* Stats row */}
                      <div className="flex items-center gap-6 mb-7 pb-7 border-b border-outline-variant/25">
                        {[
                          { val: String(doc.rating), sub: 'Rating', bar: true },
                          { val: doc.consultations.toLocaleString(), sub: 'Consultations', bar: false },
                          { val: `${doc.experience}+`, sub: 'Years Exp.', bar: false },
                        ].map((s, idx) => (
                          <div key={s.sub} className="flex flex-col gap-1">
                            {idx > 0 && <div className="hidden" />}
                            <div
                              className="font-heading font-black text-on-surface leading-none"
                              style={{ fontSize: '1.5rem', letterSpacing: '-0.025em' }}
                            >
                              {s.val}
                            </div>
                            <div className="text-on-surface-variant text-[9px] font-semibold tracking-[0.2em] uppercase">
                              {s.sub}
                            </div>
                            {s.bar && (
                              <div className="flex gap-0.5 mt-0.5">
                                {[...Array(5)].map((_, barIdx) => (
                                  <div
                                    key={barIdx}
                                    className="h-0.5 w-5 rounded-full"
                                    style={{ backgroundColor: barIdx < Math.floor(doc.rating) ? '#c9a56a' : '#e7e4dc' }}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* CTAs */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <Link href="/appointment" className="btn-primary-gold text-sm py-2.5 px-6">
                          Book Consultation
                          <Calendar size={13} aria-hidden="true" />
                        </Link>
                        <Link href={`/doctors#${doc.id}`} className="btn-outline-dark text-sm py-2.5 px-5">
                          Full Profile
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── ALL SPECIALISTS GRID ─────────────────────────────────────────────── */}
      <section className="py-24 bg-cream-2 relative overflow-hidden">
        <div className="absolute -top-4 left-6 lg:left-12 section-number pointer-events-none" aria-hidden="true">03</div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

          {/* Section header */}
          <div className="flex items-end justify-between gap-4 mb-14">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span className="rule-dark" aria-hidden="true" />
                <span className="section-eyebrow">
                  {activeDept === 'all'
                    ? 'All Specialists'
                    : departments.find((d) => d.id === activeDept)?.name ?? 'Filtered Results'}
                </span>
              </div>
              <h2 className="section-heading" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
                {filtered.length} physician{filtered.length !== 1 ? 's' : ''}{' '}
                <span
                  className="font-display font-light italic text-on-surface/40"
                  style={{ fontSize: 'inherit' }}
                >
                  {filtered.length === 0 ? 'matched.' : 'found.'}
                </span>
              </h2>
            </div>
            {(activeDept !== 'all' || availFilter !== 'all') && (
              <button
                onClick={() => { setActiveDept('all'); setAvailFilter('all') }}
                className="btn-ghost text-sm py-2 px-4 shrink-0"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Doctor Cards Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((doc) => (
                <Link
                  key={doc.id}
                  href="/appointment"
                  id={doc.id}
                  className="group relative bg-surface-lowest rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
                  style={{ boxShadow: '0 4px 20px rgba(17,19,24,0.06)' }}
                >
                  {/* Portrait */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Persistent bottom gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-card-b opacity-85" />

                    {/* Availability glow dot */}
                    <div className="absolute top-4 right-4" aria-hidden="true">
                      <span
                        className={`block w-2.5 h-2.5 rounded-full ${
                          doc.availability === 'Available' ? 'bg-secondary-fixed' : 'bg-tertiary-fixed/50'
                        }`}
                        style={
                          doc.availability === 'Available'
                            ? { boxShadow: '0 0 10px rgba(131,252,142,0.55)' }
                            : {}
                        }
                      />
                    </div>

                    {/* Persistent bottom label (visible always) */}
                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <div
                        className="text-[9px] font-bold tracking-[0.22em] uppercase mb-1"
                        style={{ color: '#c9a56a' }}
                      >
                        {doc.specialty}
                      </div>
                      <div className="font-heading font-bold text-white text-base leading-tight">
                        {doc.name}
                      </div>
                    </div>

                    {/* Hover overlay: slide up from bottom */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-premium"
                         style={{ background: 'rgba(11,13,22,0.92)' }}>
                      <div
                        className="text-[9px] font-bold tracking-[0.22em] uppercase mb-1.5"
                        style={{ color: '#c9a56a' }}
                      >
                        {doc.specialty}
                      </div>
                      <div className="font-heading font-bold text-white text-base leading-tight mb-2.5">
                        {doc.name}
                      </div>
                      <p className="text-white/45 text-xs leading-relaxed line-clamp-3 mb-4">
                        {doc.bio}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className="font-heading font-bold leading-none"
                            style={{ fontSize: '1rem', color: '#c9a56a' }}
                          >
                            {doc.rating}
                          </span>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="h-0.5 w-3.5 rounded-full"
                                style={{
                                  backgroundColor:
                                    i < Math.floor(doc.rating) ? '#c9a56a' : 'rgba(255,255,255,0.12)',
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-white/35 text-[10px]">{doc.experience} yrs</span>
                      </div>
                    </div>
                  </div>

                  {/* Below portrait */}
                  <div className="p-4">
                    <div className="text-xs text-on-surface-variant/60 font-light mb-2.5 line-clamp-1">
                      {doc.education}
                    </div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="font-heading font-bold text-on-surface text-sm">
                        {doc.rating}
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="h-0.5 w-4 rounded-full"
                            style={{ backgroundColor: i < Math.floor(doc.rating) ? '#c9a56a' : '#e7e4dc' }}
                          />
                        ))}
                      </div>
                      <span className="text-on-surface-variant/50 text-[10px]">
                        ({doc.consultations.toLocaleString()})
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-outline-variant/25">
                      <span className="text-[11px] font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                        Book Now
                        <ArrowRight size={11} aria-hidden="true" />
                      </span>
                      <span className="text-[10px] text-on-surface-variant/45 bg-surface-low px-2 py-0.5 rounded-full">
                        {doc.experience} yrs
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="text-center py-24">
              <span
                className="material-symbols-outlined text-on-surface-variant/25 mb-4 block"
                style={{ fontSize: '52px' }}
                aria-hidden="true"
              >
                person_search
              </span>
              <h3 className="font-heading font-bold text-on-surface text-xl mb-2">No specialists found</h3>
              <p className="text-on-surface-variant text-sm mb-6">
                Try adjusting your filters to see more results.
              </p>
              <button
                onClick={() => { setActiveDept('all'); setAvailFilter('all') }}
                className="btn-outline-dark text-sm"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-deep grain relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,63,135,0.10) 0%, transparent 65%)' }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="rule-gold" aria-hidden="true" />
                <span className="section-eyebrow-gold">Get Matched</span>
              </div>
              <h2 className="mb-5">
                <span
                  className="block font-heading font-black text-white leading-none"
                  style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', letterSpacing: '-0.025em' }}
                >
                  Not sure which specialist
                </span>
                <span
                  className="block font-display font-light italic text-white/35 leading-tight"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                >
                  you need?
                </span>
              </h2>
              <p className="text-white/35 text-lg font-light leading-[1.75]">
                Our care navigators match you to the right specialist within 24 hours — free of charge, no referral required.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link href="/appointment" className="btn-primary-gold w-full py-4">
                Book a Consultation
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                href="tel:+18005550100"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full text-white/45 hover:text-white/75 hover:bg-white/[0.05] border border-white/12 transition-all duration-300 text-sm font-medium"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }} aria-hidden="true">call</span>
                Speak to a Navigator · Free
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
