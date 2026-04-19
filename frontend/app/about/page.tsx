import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'Clinical Excellence was founded in 1984 with a vision to redefine healthcare through the perfect fusion of modern clinical infrastructure and deeply empathetic care.',
}

const leadership = [
  {
    name: 'Dr. Julian Vance',
    title: 'Founder & Chairman Emeritus',
    specialty: 'Orthopedic Surgery',
    education: 'Mayo Clinic Alix School of Medicine',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    bio: 'Founded Clinical Excellence in 1984 with an audacious vision: that world-class clinical care should be accessible, transparent, and deeply human. Dr. Vance\'s pioneering work in robotic-assisted surgery has transformed orthopedic practice globally.',
  },
  {
    name: 'Dr. Elena Sterling',
    title: 'Chief Medical Officer',
    specialty: 'Interventional Cardiology',
    education: 'Johns Hopkins University School of Medicine',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    bio: 'Dr. Sterling oversees all clinical operations and leads our cardiology program. Her research on AI-assisted cardiac imaging has been cited in over 200 peer-reviewed publications and has directly improved diagnostic accuracy across our network.',
  },
  {
    name: 'Dr. Marcus Thorne',
    title: 'Head of Surgery',
    specialty: 'Neurosurgery',
    education: 'Harvard Medical School',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
    bio: 'Dr. Thorne directs our surgical division, overseeing 15,000+ annual procedures. His groundbreaking work in AI-navigated minimally invasive surgery has set new benchmarks for precision and recovery outcomes.',
  },
  {
    name: 'Dr. Sarah Lang',
    title: 'Director of Innovation',
    specialty: 'Oncology',
    education: 'Stanford University School of Medicine',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80',
    bio: 'Dr. Lang leads our precision medicine and research programs. Her molecular profiling protocols have become the standard of care for treatment-resistant cancers, offering new hope where conventional therapies have failed.',
  },
]

const values = [
  {
    icon: 'precision_manufacturing',
    title: 'Authoritative Precision',
    description: 'Every diagnosis, every procedure, every decision is grounded in rigorous evidence and decades of clinical expertise. We do not guess — we know.',
  },
  {
    icon: 'volunteer_activism',
    title: 'Radical Empathy',
    description: 'We treat the whole person — not just the condition. Every patient receives care that honors their dignity, autonomy, and individual circumstances.',
  },
  {
    icon: 'eco',
    title: 'Sustainability',
    description: 'Carbon-neutral operations by 2027. We believe the health of our planet and the health of our patients are inseparable commitments.',
  },
  {
    icon: 'diversity_3',
    title: 'Cohesion',
    description: 'Multidisciplinary teams collaborate seamlessly across specialties, ensuring every patient benefits from the full breadth of our collective expertise.',
  },
]

const milestones = [
  { year: '1984', title: 'Founded', desc: 'Dr. Julian Vance opens a 12-bed clinic with a vision to redefine clinical care.' },
  { year: '1992', title: 'First Expansion', desc: 'Clinical Excellence grows to 5 departments and 80 beds. Cardiology wing opens.' },
  { year: '2001', title: 'Research Institute', desc: 'Clinical Research Center established, launching 40+ active clinical trials.' },
  { year: '2010', title: 'Robotic Surgery', desc: 'First hospital in the region to adopt robotic-assisted surgical systems.' },
  { year: '2018', title: 'AI Integration', desc: 'Partnership with leading AI labs brings machine learning to diagnostic imaging.' },
  { year: '2024', title: '40th Anniversary', desc: '15 Centers of Excellence, 250+ specialists, A+ accreditation rating.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-on-surface">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=1920&q=80"
            alt="Clinical Excellence"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-on-surface/95 to-on-surface/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/70 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Est. 1984 · 40 Years of Healing
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
              The Architectural
              <br />
              <span className="italic font-light text-primary-fixed">Healer.</span>
            </h1>
            <p className="text-white/65 text-xl leading-relaxed max-w-2xl">
              We redefine healthcare through the perfect fusion of modern clinical infrastructure, precision architecture, and deeply empathetic care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80"
                  alt="Mission"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
            <div className="lg:col-span-7 lg:pl-6">
              <div className="section-label mb-3">Our Mission</div>
              <h2 className="section-heading mb-6">
                Clinical excellence is not
                <br />
                a destination —
                <span className="italic font-light"> it's a practice.</span>
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-5">
                We exist to advance the science and art of healing — to bring the most rigorous clinical thinking together with the most human care, so that every patient leaves not just treated, but transformed.
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Our vision is a world where geography, economics, and circumstance do not determine the quality of care a person receives. We are building that world, one patient at a time, within walls designed to heal.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '40+', label: 'Years in Medicine' },
                  { value: '250+', label: 'Specialists' },
                  { value: '15', label: 'Centers of Excellence' },
                  { value: '45+', label: 'Clinical Specialties' },
                ].map((s) => (
                  <div key={s.label} className="bg-surface-low rounded-2xl p-5">
                    <div className="font-heading text-3xl font-bold text-primary mb-1">{s.value}</div>
                    <div className="text-on-surface-variant text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-24 bg-surface-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Core Values</div>
            <h2 className="section-heading mx-auto max-w-xl">
              The principles that
              <span className="italic font-light"> guide every decision.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-hover p-7">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '22px' }}>{v.icon}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-on-surface mb-2">{v.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Our Journey</div>
            <h2 className="section-heading">40 years of <span className="italic font-light">clinical evolution.</span></h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-outline-variant hidden md:block" />
            <div className="space-y-8 md:space-y-0">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative md:grid md:grid-cols-2 md:gap-10 md:items-center ${i % 2 === 0 ? '' : 'md:text-right'}`}>
                  <div className={i % 2 === 0 ? 'md:text-right md:pr-14' : 'md:order-last md:pl-14'}>
                    <div className="font-heading text-4xl font-bold text-primary mb-1">{m.year}</div>
                    <h3 className="font-heading text-xl font-bold text-on-surface mb-2">{m.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{m.desc}</p>
                  </div>
                  <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  </div>
                  <div className={i % 2 === 0 ? 'md:pl-14' : 'md:text-right md:pr-14 md:order-first'} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-24 bg-surface-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="section-label mb-3">Leadership</div>
            <h2 className="section-heading">The minds <span className="italic font-light">steering our mission.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {leadership.map((person) => (
              <div key={person.name} className="card-hover overflow-hidden group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-2xl">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-primary mb-1">{person.specialty}</div>
                  <h3 className="font-heading text-lg font-bold text-on-surface mb-0.5 group-hover:text-primary transition-colors duration-200">{person.name}</h3>
                  <div className="text-xs text-on-surface-variant mb-3">{person.title}</div>
                  <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section id="accreditations" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label mb-3">Accreditations</div>
          <h2 className="section-heading mb-10">Certified to <span className="italic font-light">the highest standards.</span></h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['Joint Commission Gold Seal', 'URAC Accredited', 'NCQA Certified', 'Magnet Recognition', 'NCI Designated Center', 'ISO 9001:2015'].map((badge) => (
              <div key={badge} className="flex items-center gap-2 bg-surface-low px-6 py-3.5 rounded-2xl">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>verified</span>
                <span className="font-semibold text-sm text-on-surface">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Ready to experience <span className="italic font-light text-primary-fixed">clinical excellence?</span>
          </h2>
          <p className="text-white/65 text-lg mb-8">Same-week appointments available across most specialties.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/appointment" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-primary-fixed transition-all duration-200 hover:scale-[1.02]">
              Book Appointment <ArrowRight size={18} />
            </Link>
            <Link href="/doctors" className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-200">
              Meet Our Specialists
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
