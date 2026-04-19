import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react'
import { newsArticles } from '@/lib/data'

export default function NewsPreview() {
  const featured = newsArticles[0]
  const rest = newsArticles.slice(1, 4)

  return (
    <section className="py-32 bg-cream-2 relative overflow-hidden">

      {/* Section number watermark */}
      <div className="absolute -top-4 right-10 section-number" aria-hidden="true">06</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="rule-dark" aria-hidden="true" />
              <span className="section-eyebrow">Health Insights Journal</span>
            </div>
            <h2 className="section-heading">
              Clinical perspectives
              <br />
              <span className="font-display font-light italic text-on-surface/50"
                    style={{ fontSize: 'inherit' }}>
                from our specialists.
              </span>
            </h2>
          </div>
          <Link href="/news" className="btn-outline-dark self-start sm:self-auto shrink-0">
            All Articles
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        {/* ── Magazine Layout ──────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-5">

          {/* Featured — full editorial */}
          <Link
            href={`/news#${featured.id}`}
            className="lg:col-span-7 group relative overflow-hidden rounded-3xl"
            style={{ aspectRatio: '4/3' }}
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-premium"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-card-b opacity-[0.92]" />

            {/* Arrow icon on hover */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
              <ArrowUpRight size={16} className="text-white" aria-hidden="true" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="tag-gold">{featured.category}</span>
                <span className="text-white/30 text-[10px]">·</span>
                <div className="flex items-center gap-1 text-white/40 text-[11px]">
                  <Clock size={10} aria-hidden="true" />
                  <span>{featured.readTime} min read</span>
                </div>
              </div>
              <h3 className="font-heading font-bold text-white leading-snug mb-4 group-hover:text-gold/90 transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                {featured.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed line-clamp-2 mb-6 font-light">
                {featured.excerpt}
              </p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-white/20">
                  <Image src={featured.authorImage} alt={featured.author} fill className="object-cover" sizes="32px" />
                </div>
                <div>
                  <div className="text-white font-semibold text-xs font-heading">{featured.author}</div>
                  <div className="text-white/35 text-[10px] font-light">{featured.authorTitle}</div>
                </div>
              </div>
            </div>
          </Link>

          {/* Article List — editorial cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {rest.map((article, i) => (
              <Link
                key={article.id}
                href={`/news#${article.id}`}
                className="group flex gap-4 bg-surface-lowest rounded-3xl p-4 hover:shadow-card-lift hover:-translate-y-0.5 transition-all duration-300 ease-premium flex-1"
              >
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="80px"
                  />
                </div>
                <div className="flex flex-col justify-between min-w-0 py-0.5">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-gold-muted/70">
                        {article.category}
                      </span>
                    </div>
                    <h4 className="font-heading font-semibold text-sm text-on-surface leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant/50 text-[11px] mt-2">
                    <Clock size={10} aria-hidden="true" />
                    <span>{article.readTime} min · {article.author.split(' ').slice(0, 2).join(' ')}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
