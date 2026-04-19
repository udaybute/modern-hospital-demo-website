import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = {
  Services: [
    { label: 'Cardiology', href: '/services#cardiology' },
    { label: 'Neurology', href: '/services#neurology' },
    { label: 'Oncology', href: '/services#oncology' },
    { label: 'Pediatrics', href: '/services#pediatrics' },
    { label: "Women's Health", href: '/services#maternity' },
    { label: 'All Services', href: '/services' },
  ],
  Patients: [
    { label: 'Book Appointment', href: '/appointment' },
    { label: 'Patient Portal', href: '/portal' },
    { label: 'Find a Doctor', href: '/doctors' },
    { label: 'Health Insights', href: '/news' },
    { label: 'Contact Us', href: '/contact' },
  ],
  Hospital: [
    { label: 'About Us', href: '/about' },
    { label: 'Leadership', href: '/about#leadership' },
    { label: 'Our Values', href: '/about#values' },
    { label: 'Accreditations', href: '/about#accreditations' },
    { label: 'Careers', href: '/careers' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-on-surface text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '20px' }}>local_hospital</span>
              </div>
              <div>
                <div className="font-heading font-bold text-[17px] leading-tight">Clinical Excellence</div>
                <div className="text-[10px] text-white/50 tracking-[0.15em] uppercase font-medium">Est. 1984</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              The future of healing is architectural. We redefine healthcare through the perfect fusion of clinical precision, modern infrastructure, and deeply empathetic care.
            </p>
            <div className="space-y-3">
              <a href="tel:+18005550911" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                  <Phone size={14} />
                </div>
                1-800-555-0911 (Emergency)
              </a>
              <a href="mailto:info@clinicalexcellence.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                  <Mail size={14} />
                </div>
                info@clinicalexcellence.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <span>100 Medical Center Drive<br />New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(quickLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-semibold text-sm text-white mb-4 tracking-wide">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="font-heading font-semibold text-base mb-1">Health Insights Journal</h4>
              <p className="text-white/55 text-sm">Clinical perspectives, research highlights, and patient stories — delivered monthly.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-primary-fixed focus:bg-white/15 transition-all duration-200"
              />
              <button className="btn-primary text-sm py-2.5 px-5 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs">
              © 2026 Clinical Excellence. All rights reserved. Founded 1984.
            </p>
            <div className="flex items-center gap-5">
              {['Privacy Policy', 'Terms of Service', 'HIPAA Notice', 'Accessibility'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-white/40 hover:text-white/70 text-xs transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
