'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, ArrowRight, ArrowUpRight, Send, BookOpen } from 'lucide-react'
import { newsArticles } from '@/lib/data'

/* ── Category styling ────────────────────────────────────────────────────── */
const categories = ['All', 'Clinical Innovation', 'Research', 'Technology', 'Patient Education', 'Pediatrics']

function getCategoryStyle(category: string) {
  switch (category) {
    case 'Clinical Innovation':
      return { bg: 'rgba(201,165,106,0.12)', color: '#8a6d3e', border: '1px solid rgba(201,165,106,0.22)' }
    case 'Research':
      return { bg: 'rgba(0,63,135,0.09)', color: '#003f87', border: '1px solid rgba(0,63,135,0.14)' }
    case 'Technology':
      return { bg: 'rgba(0,63,135,0.09)', color: '#003f87', border: '1px solid rgba(0,63,135,0.14)' }
    case 'Patient Education':
      return { bg: 'rgba(0,110,37,0.09)', color: '#006e25', border: '1px solid rgba(0,110,37,0.14)' }
    case 'Pediatrics':
      return { bg: 'rgba(201,165,106,0.12)', color: '#8a6d3e', border: '1px solid rgba(201,165,106,0.22)' }
    default:
      return { bg: 'rgba(61,65,80,0.07)', color: '#3d4150', border: '1px solid rgba(61,65,80,0.12)' }
  }
}

function CategoryBadge({
  category,
  dark = false,
}: {
  category: string
  dark?: boolean
}) {
  if (dark) {
    return (
      <span
        className="inline-flex items-center text-[9px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
        style={{
          background: 'rgba(255,255,255,0.12)',
          color: 'rgba(255,255,255,0.80)',
          border: '1px solid rgba(255,255,255,0.18)',
        }}
      >
        {category}
      </span>
    )
  }
  const s = getCategoryStyle(category)
  return (
    <span
      className="inline-flex items-center text-[9px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
      style={{ background: s.bg, color: s.color, border: s.border }}
    >
      {category}
    </span>
  )
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [subscribed, setSubscribed] = useState(false)

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All') return newsArticles
    return newsArticles.filter((a) => a.category === activeCategory)
  }, [activeCategory])

  const showMagazine = activeCategory === 'All'
  const featured = newsArticles[0]
  const secondary = newsArticles.slice(1, 3)
  const compact = newsArticles.slice(3)

  const counts = useMemo(() => {
    const map: Record<string, number> = {}
    categories.forEach((c) => {
      map[c] = c === 'All' ? newsArticles.length : newsArticles.filter((a) => a.category === c).length
    })
    return map
  }, [])

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="min-h-[82vh] bg-deep grain relative overflow-hidden flex items-center">

        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,63,135,0.06) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div
          className="section-number-light absolute -bottom-6 right-10 pointer-events-none"
          aria-hidden="true"
        >
          01
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-40 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left: Editorial identity */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-10">
                <span className="rule-gold" aria-hidden="true" />
                <span className="section-eyebrow-gold">Health Insights Journal</span>
              </div>

              <h1 className="mb-8">
                <span
                  className="block font-heading font-black text-white leading-none"
                  style={{ fontSize: 'clamp(3.25rem, 6vw, 5.5rem)', letterSpacing: '-0.03em' }}
                >
                  Clinical perspectives
                </span>
                <span
                  className="block font-display font-light italic text-white/40 leading-tight"
                  style={{ fontSize: 'clamp(3rem, 5.5vw, 5rem)' }}
                >
                  from the frontline.
                </span>
              </h1>

              <p className="text-white/40 text-lg font-light leading-[1.8] max-w-xl mb-12">
                Evidence-based insights, research breakthroughs, and clinical perspectives — authored
                exclusively by the 250+ specialists at Clinical Excellence.
              </p>

              {/* Journal stats */}
              <div className="flex items-stretch gap-8 pt-8 border-t border-white/[0.07]">
                {[
                  { value: '500+', label: 'Articles published' },
                  { value: '24k+', label: 'Journal readers' },
                  { value: 'Since 2010', label: 'Peer-reviewed' },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span
                      className="font-heading font-black text-white leading-none"
                      style={{ fontSize: '1.625rem', letterSpacing: '-0.025em' }}
                    >
                      {s.value}
                    </span>
                    <span className="text-white/30 text-[9px] font-semibold tracking-[0.2em] uppercase mt-1">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Subscribe widget */}
            <div className="lg:col-span-5">
              <div
                className="glass-dark rounded-3xl p-8"
                style={{ boxShadow: '0 40px 80px rgba(11,13,22,0.55)' }}
              >
                {subscribed ? (
                  <div className="text-center py-8">
                    <div
                      className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                      style={{ background: 'rgba(201,165,106,0.14)' }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: '28px', color: '#c9a56a' }}
                        aria-hidden="true"
                      >
                        check_circle
                      </span>
                    </div>
                    <div className="font-heading font-bold text-white text-lg mb-2">
                      You&apos;re subscribed
                    </div>
                    <p className="text-white/35 text-sm leading-relaxed">
                      Monthly clinical insights will arrive in your inbox. Welcome to the journal.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(201,165,106,0.15)' }}
                      >
                        <BookOpen size={17} style={{ color: '#c9a56a' }} aria-hidden="true" />
                      </div>
                      <div>
                        <div className="font-heading font-bold text-white text-base leading-tight">
                          Subscribe to Journal
                        </div>
                        <div className="text-white/35 text-[11px]">Join 24,000+ readers</div>
                      </div>
                    </div>

                    <p className="text-white/30 text-sm leading-relaxed mb-6">
                      Monthly clinical insights, research highlights, and patient education — delivered
                      to your inbox.
                    </p>

                    {/* Recent topic pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {['AI Diagnostics', 'Oncology Research', 'Robotic Surgery'].map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                          style={{
                            background: 'rgba(255,255,255,0.06)',
                            color: 'rgba(255,255,255,0.40)',
                            border: '1px solid rgba(255,255,255,0.09)',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        setSubscribed(true)
                      }}
                      className="space-y-3"
                    >
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-2xl text-sm text-white placeholder-white/25 outline-none transition-all duration-300"
                        style={{
                          background: 'rgba(255,255,255,0.07)',
                          border: '1px solid rgba(255,255,255,0.10)',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.border = '1px solid rgba(201,165,106,0.45)'
                          e.currentTarget.style.background = 'rgba(255,255,255,0.10)'
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.border = '1px solid rgba(255,255,255,0.10)'
                          e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                        }}
                      />
                      <button
                        type="submit"
                        className="w-full py-3 rounded-full font-heading font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
                        style={{ background: '#c9a56a', color: '#0b0d16' }}
                      >
                        <Send size={13} aria-hidden="true" />
                        Subscribe to Journal
                      </button>
                    </form>

                    <p className="text-white/20 text-[10px] text-center mt-4">
                      No spam. Unsubscribe at any time. HIPAA compliant.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY CATEGORY FILTER ───────────────────────────────────────────── */}
      <div className="sticky top-20 z-40 glassmorphic-nav">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-on-surface text-white'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                {cat}
                {(counts[cat] ?? 0) > 0 && (
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                      activeCategory === cat ? 'bg-white/20 text-white' : 'bg-surface-container text-on-surface-variant'
                    }`}
                  >
                    {counts[cat]}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURED ARTICLE (magazine layout — All only) ────────────────────── */}
      {showMagazine && (
        <section className="py-20 lg:py-28 bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="flex items-center gap-4 mb-12">
              <span className="rule-dark" aria-hidden="true" />
              <span className="section-eyebrow">Editor&apos;s Pick</span>
            </div>

            {/* Dark editorial feature card */}
            <Link
              href={`/news#${featured.id}`}
              id={featured.id}
              className="group relative block overflow-hidden rounded-3xl bg-deep transition-all duration-500 hover:-translate-y-0.5"
              style={{ minHeight: '520px', boxShadow: '0 8px 60px rgba(17,19,24,0.16)' }}
            >
              {/* Photo — fills right side */}
              <div
                className="absolute inset-y-0 right-0 w-full lg:w-[60%] pointer-events-none"
                aria-hidden="true"
              >
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-premium"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-photo-l" />
                <div className="absolute inset-0 bg-gradient-photo-b opacity-30" />
              </div>

              {/* Content — on dark bg */}
              <div
                className="relative z-10 flex flex-col justify-center"
                style={{ minHeight: '520px', maxWidth: '580px', padding: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                {/* Badges */}
                <div className="flex items-center gap-3 mb-6">
                  <CategoryBadge category={featured.category} dark />
                  <span
                    className="text-[9px] font-bold tracking-[0.22em] uppercase"
                    style={{ color: '#c9a56a' }}
                  >
                    Featured
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="font-heading font-bold text-white leading-tight mb-4 group-hover:text-gold transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.375rem)', letterSpacing: '-0.02em' }}
                >
                  {featured.title}
                </h2>

                {/* Excerpt */}
                <p className="text-white/40 text-base font-light leading-relaxed line-clamp-3 mb-8 max-w-lg">
                  {featured.excerpt}
                </p>

                {/* Author + meta */}
                <div className="flex items-center gap-5 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 border border-white/20">
                      <Image
                        src={featured.authorImage}
                        alt={featured.author}
                        fill
                        className="object-cover"
                        sizes="36px"
                      />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-white text-sm leading-tight">
                        {featured.author}
                      </div>
                      <div className="text-white/35 text-[11px]">{featured.authorTitle}</div>
                    </div>
                  </div>

                  <div className="w-px h-7 bg-white/10" aria-hidden="true" />

                  <div className="flex items-center gap-1.5 text-white/30 text-xs">
                    <Clock size={11} aria-hidden="true" />
                    <span>{featured.readTime} min read</span>
                  </div>

                  <div className="text-white/25 text-xs">{formatDate(featured.publishDate)}</div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300" style={{ color: '#c9a56a' }}>
                  Read Full Article
                  <ArrowRight size={14} aria-hidden="true" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── ARTICLES SECTION ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-cream-2 relative overflow-hidden">
        <div
          className="absolute -top-4 left-6 lg:left-12 section-number pointer-events-none"
          aria-hidden="true"
        >
          {showMagazine ? '03' : '02'}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

          {/* Section header */}
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span className="rule-dark" aria-hidden="true" />
                <span className="section-eyebrow">
                  {activeCategory === 'All' ? 'Recent Articles' : activeCategory}
                </span>
              </div>
              <h2 className="section-heading" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}{' '}
                <span
                  className="font-display font-light italic text-on-surface/40"
                  style={{ fontSize: 'inherit' }}
                >
                  {activeCategory === 'All' ? 'this month.' : 'in this category.'}
                </span>
              </h2>
            </div>
            {activeCategory !== 'All' && (
              <button
                onClick={() => setActiveCategory('All')}
                className="btn-ghost text-sm py-2 px-4 shrink-0"
              >
                Show All
              </button>
            )}
          </div>

          {showMagazine ? (
            /* ── Magazine layout ── */
            <>
              {/* Row 1: Two medium editorial cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {secondary.map((article) => (
                  <Link
                    key={article.id}
                    href={`/news#${article.id}`}
                    id={article.id}
                    className="group bg-surface-lowest rounded-3xl overflow-hidden transition-all duration-400 hover:-translate-y-1"
                    style={{ boxShadow: '0 4px 24px rgba(17,19,24,0.07)' }}
                  >
                    {/* Photo */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-premium"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-4 left-4">
                        <CategoryBadge category={article.category} />
                      </div>
                      <div
                        className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(11,13,22,0.65)', backdropFilter: 'blur(8px)' }}
                      >
                        <Clock size={10} className="text-white/60" aria-hidden="true" />
                        <span className="text-[10px] font-medium text-white/60">
                          {article.readTime} min
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3
                        className="font-heading font-bold text-on-surface leading-snug mb-2.5 group-hover:text-primary transition-colors duration-200 line-clamp-2"
                        style={{ fontSize: '1.0625rem', letterSpacing: '-0.01em' }}
                      >
                        {article.title}
                      </h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2 mb-5">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-outline-variant/25">
                        <div className="flex items-center gap-2.5">
                          <div className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={article.authorImage}
                              alt={article.author}
                              fill
                              className="object-cover"
                              sizes="28px"
                            />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-on-surface leading-tight">
                              {article.author}
                            </div>
                            <div className="text-[10px] text-on-surface-variant">
                              {formatDate(article.publishDate)}
                            </div>
                          </div>
                        </div>
                        <span className="text-[11px] font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                          Read <ArrowRight size={11} aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Row 2: Compact horizontal list */}
              <div className="space-y-3">
                {compact.map((article) => (
                  <Link
                    key={article.id}
                    href={`/news#${article.id}`}
                    id={article.id}
                    className="group flex items-center gap-5 bg-surface-lowest rounded-2xl p-4 transition-all duration-300 hover:-translate-y-px"
                    style={{ boxShadow: '0 2px 12px rgba(17,19,24,0.05)' }}
                  >
                    {/* Thumbnail */}
                    <div className="relative w-[76px] h-[76px] rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="76px"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="mb-1.5">
                        <CategoryBadge category={article.category} />
                      </div>
                      <h4
                        className="font-heading font-semibold text-on-surface leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200"
                        style={{ fontSize: '0.9375rem' }}
                      >
                        {article.title}
                      </h4>
                    </div>

                    {/* Right meta */}
                    <div className="hidden sm:flex flex-col items-end gap-1.5 flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-on-surface-variant/55 text-[11px]">
                        <Clock size={10} aria-hidden="true" />
                        <span>{article.readTime} min</span>
                      </div>
                      <div className="text-on-surface-variant/40 text-[11px]">
                        {formatDate(article.publishDate)}
                      </div>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-on-surface-variant/25 group-hover:text-primary transition-colors duration-200 flex-shrink-0"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </>
          ) : filteredArticles.length > 0 ? (
            /* ── Filtered uniform grid ── */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news#${article.id}`}
                  id={article.id}
                  className="group bg-surface-lowest rounded-3xl overflow-hidden transition-all duration-400 hover:-translate-y-1"
                  style={{ boxShadow: '0 4px 24px rgba(17,19,24,0.07)' }}
                >
                  {/* Photo */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <CategoryBadge category={article.category} />
                    </div>
                    <div
                      className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(11,13,22,0.65)', backdropFilter: 'blur(8px)' }}
                    >
                      <Clock size={10} className="text-white/60" aria-hidden="true" />
                      <span className="text-[10px] font-medium text-white/60">{article.readTime} min</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3
                      className="font-heading font-bold text-on-surface leading-snug mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2"
                      style={{ fontSize: '1rem', letterSpacing: '-0.01em' }}
                    >
                      {article.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-outline-variant/25">
                      <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={article.authorImage}
                            alt={article.author}
                            fill
                            className="object-cover"
                            sizes="24px"
                          />
                        </div>
                        <span className="text-xs text-on-surface-variant">{article.author}</span>
                      </div>
                      <span className="text-[10px] text-on-surface-variant/45">
                        {formatDate(article.publishDate)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* ── Empty state ── */
            <div className="text-center py-24">
              <span
                className="material-symbols-outlined text-on-surface-variant/25 mb-4 block"
                style={{ fontSize: '52px' }}
                aria-hidden="true"
              >
                article
              </span>
              <h3 className="font-heading font-bold text-on-surface text-xl mb-2">
                No articles found
              </h3>
              <p className="text-on-surface-variant text-sm mb-6">
                No articles in this category yet. Check back soon.
              </p>
              <button onClick={() => setActiveCategory('All')} className="btn-outline-dark text-sm">
                Show All Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── ARCHIVE CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-deep grain relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,63,135,0.08) 0%, transparent 60%)' }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="rule-gold" aria-hidden="true" />
                <span className="section-eyebrow-gold">Journal Archive</span>
              </div>
              <h2 className="mb-5">
                <span
                  className="block font-heading font-black text-white leading-none"
                  style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', letterSpacing: '-0.025em' }}
                >
                  500+ peer-reviewed
                </span>
                <span
                  className="block font-display font-light italic text-white/35 leading-tight"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                >
                  articles &amp; case studies.
                </span>
              </h2>
              <p className="text-white/35 text-lg font-light leading-[1.75] max-w-xl">
                Clinical case studies, patient education resources, and research highlights — published
                continuously by our specialists since 2010.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button className="btn-primary-gold w-full py-4">
                Browse Full Archive
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              <button
                onClick={() => setActiveCategory('Research')}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-white/40 hover:text-white/70 hover:bg-white/[0.05] border border-white/12 transition-all duration-300 text-sm font-medium"
              >
                View Research Studies
                <ArrowUpRight size={14} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
