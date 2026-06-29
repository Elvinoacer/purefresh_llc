'use client'

import { motion } from "framer-motion"
import { MapPin, Clock, Phone, Facebook, Navigation, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IMAGES } from "@/lib/images"

const LOCATIONS = [
  {
    name: "Purefresh Maili Sita",
    area: "Nakuru – Nairobi Highway",
    address: "Maili Sita Commercial Area, Nakuru",
    note: "Our flagship Nakuru refill shop — bring your own containers.",
    tag: "Flagship",
    image: IMAGES.refillStation,
    imageAlt: "Purefresh Maili Sita refill station in Nakuru",
  },
  {
    name: "Purefresh Nakuru Town",
    area: "Nakuru Town Centre",
    address: "Former UCHUMI Supermarket Building, Nakuru",
    note: "Conveniently located in the heart of Nakuru town.",
    image: IMAGES.waterAtm,
    imageAlt: "Purefresh Nakuru town cashless water kiosk",
  },
  {
    name: "Purefresh Naivasha",
    area: "Naivasha Town",
    address: "Kenyatta Avenue & Mbaria Kaniu Road, Naivasha",
    note: "Sister branch serving Naivasha and surrounding areas.",
    phone: "+254 114 247578",
    image: IMAGES.waterAtmAlt,
    imageAlt: "Purefresh Naivasha water access point",
  },
]

export function LocationsSection() {
  return (
    <section id="locations" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-200 px-4 py-1.5 mb-5 text-xs font-semibold text-brand-700 uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Find Us
          </span>
          <h2 className="font-[family-name:var(--font-poppins)] font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-deep">
            Visit a{" "}
            <span className="text-gradient-water">Purefresh outlet</span>{" "}
            near you.
          </h2>
          <p className="mt-5 text-body-muted text-base lg:text-lg leading-relaxed">
            Three convenient locations across Nakuru and Naivasha — and a growing network
            across 6 counties. Walk in, bring any container, and walk out with premium water.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-gradient-to-br from-white to-brand-50/40 rounded-3xl border border-brand-100 hover:border-brand-300 overflow-hidden hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500"
            >
              {/* Image header */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/50 to-deep/10" />

                {loc.tag && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-teal-accent to-brand-500 px-2.5 py-1 rounded-full shadow-lg">
                    {loc.tag}
                  </span>
                )}

                {/* Floating pin */}
                <div className="absolute -bottom-5 left-5 w-12 h-12 rounded-full bg-white border-4 border-brand-100 shadow-xl flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-brand-600" />
                </div>
              </div>

              {/* Body */}
              <div className="p-6 pt-8">
                <h3 className="font-[family-name:var(--font-poppins)] font-bold text-lg text-deep leading-tight">
                  {loc.name}
                </h3>
                <div className="text-xs text-brand-700 font-semibold uppercase tracking-wide mt-0.5 mb-3">
                  {loc.area}
                </div>

                <p className="text-sm text-body font-medium mb-1.5">{loc.address}</p>
                <p className="text-sm text-body-muted leading-relaxed mb-4">{loc.note}</p>

                <div className="flex items-center gap-2 text-xs text-body-muted mb-4">
                  <Clock className="h-4 w-4 text-brand-600" />
                  <span className="font-medium">Mon – Sat: 7:00 AM – 7:00 PM</span>
                </div>

                {loc.phone && (
                  <a
                    href={`tel:${loc.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors mb-3"
                  >
                    <Phone className="h-4 w-4" />
                    {loc.phone}
                  </a>
                )}

                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-xl border-brand-200 text-brand-800 hover:bg-brand-50 hover:border-brand-400 group/btn"
                >
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.name + " " + loc.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Navigation className="h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-body-muted"
        >
          <span>Can't find us?</span>
          <a
            href="https://www.facebook.com/PureFreshNakuru/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-900 transition-colors"
          >
            <Facebook className="h-4 w-4" />
            Message us on Facebook
            <ExternalLink className="h-3 w-3" />
          </a>
          <span className="text-body-soft/50">•</span>
          <a href="mailto:purefresh.watershop@gmail.com" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-900 transition-colors">
            Email us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
