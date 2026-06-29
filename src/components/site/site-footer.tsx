'use client'

import { Phone, Mail, Facebook, MapPin, Droplets, ArrowUp } from "lucide-react"

export function SiteFooter() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="relative bg-gradient-to-br from-deep via-brand-900 to-deep-soft text-white overflow-hidden">
      {/* Top wave divider */}
      <div className="absolute top-0 inset-x-0 h-12 -translate-y-px">
        <svg viewBox="0 0 1440 60" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,40 C240,60 480,10 720,30 C960,50 1200,5 1440,30 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* Glow blobs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-brand-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-teal-500/15 blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 pt-20 pb-8">
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src="/purefresh-mark.svg" alt="Purefresh" width={48} height={48} />
              <div>
                <div className="font-[family-name:var(--font-poppins)] font-black text-2xl text-white">
                  Pure<span className="text-teal-accent">fresh</span>
                </div>
                <div className="text-[10px] font-semibold tracking-[0.25em] text-teal-accent uppercase">
                  Premium Drinking Water
                </div>
              </div>
            </div>
            <p className="text-on-dark-muted text-sm leading-relaxed max-w-md mb-6">
              Purified through advanced reverse osmosis, certified by KEBS, and compliant with
              WHO standards. Serving low- and middle-income households across Nakuru, Naivasha,
              Nairobi, Kajiado, Machakos, and Kiambu.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                <Droplets className="h-3.5 w-3.5 text-teal-accent" />
                KEBS Certified
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                <Droplets className="h-3.5 w-3.5 text-teal-accent" />
                WHO Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                <Droplets className="h-3.5 w-3.5 text-teal-accent" />
                150+ Outlets
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-[family-name:var(--font-poppins)] font-bold text-white text-sm uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Purification Process", href: "#process" },
                { label: "Our Impact", href: "#impact" },
                { label: "Locations", href: "#locations" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-on-dark-muted hover:text-teal-accent transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-teal-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-poppins)] font-bold text-white text-sm uppercase tracking-wider mb-4">
              Reach Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+254114247578" className="flex items-start gap-2.5 text-on-dark-muted hover:text-teal-accent transition-colors">
                  <Phone className="h-4 w-4 shrink-0 mt-0.5 text-teal-accent" />
                  <span>+254 114 247578</span>
                </a>
              </li>
              <li>
                <a href="mailto:purefresh.watershop@gmail.com" className="flex items-start gap-2.5 text-on-dark-muted hover:text-teal-accent transition-colors break-all">
                  <Mail className="h-4 w-4 shrink-0 mt-0.5 text-teal-accent" />
                  <span>purefresh.watershop@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/PureFreshNakuru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-on-dark-muted hover:text-teal-accent transition-colors"
                >
                  <Facebook className="h-4 w-4 shrink-0 mt-0.5 text-teal-accent" />
                  <span>Facebook: PureFresh Nakuru</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-on-dark-muted">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-teal-accent" />
                <span>Maili Sita, Nakuru – Nairobi Highway, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-on-dark-soft text-center sm:text-left">
            © {new Date().getFullYear()} Purefresh Premium Drinking Water. All rights reserved.
            <span className="hidden sm:inline"> • Nakuru • Naivasha • Nairobi • Kajiado • Machakos • Kiambu</span>
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-on-dark-soft">Managed by Antony Kamotho, MD</span>
            <button
              onClick={scrollTop}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
