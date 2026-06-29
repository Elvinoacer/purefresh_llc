'use client'

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, MapPin, Users, Droplets, ShieldCheck, ArrowRight } from "lucide-react"
import { IMAGES } from "@/lib/images"

const STATS = [
  { icon: Droplets, value: "150+", label: "Vending outlets", sublabel: "Across 6 counties" },
  { icon: TrendingDown, value: "70%", label: "Price reduction", sublabel: "vs. bottled water" },
  { icon: MapPin, value: "6", label: "Counties served", sublabel: "Nakuru, Naivasha, Nairobi, Kajiado, Machakos, Kiambu" },
  { icon: Users, value: "1000s", label: "Households reached", sublabel: "Low- & middle-income families" },
]

const PARTNERS = [
  { name: "KIFFWA", desc: "Kenya Innovative Finance Facility for Water — financial & technical support since 2019" },
  { name: "ILF for WASH", desc: "Impact-Linked Fund for Water, Sanitation & Hygiene — provided the SAFI loan" },
  { name: "Aqua for All", desc: "Co-designed the ILF for WASH programme" },
  { name: "Roots of Impact", desc: "Co-designed the ILF for WASH programme" },
  { name: "NWP", desc: "Netherlands Water Partnership — supports KIFFWA's overall programme" },
]

export function ImpactSection() {
  return (
    <section id="impact" className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-brand-50/40 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Cinematic image strip — proof of impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden h-64 lg:h-80 mb-16 shadow-2xl"
        >
          <img
            src={IMAGES.jerricans}
            alt="Stack of water containers — representing thousands of households served"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep/95 via-deep/75 to-deep/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 lg:px-10">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-accent mb-3">
                  <Users className="h-3.5 w-3.5" />
                  Real Families, Real Impact
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-black text-2xl lg:text-3xl leading-tight">
                  Every refill is a family's health protected,<br className="hidden lg:block" /> a future reclaimed.
                </h3>
                <p className="text-sm lg:text-base text-white mt-3 leading-relaxed text-shadow-soft">
                  We measure our success not in shillings, but in healthier children, fuller classrooms, and stronger communities across the Rift Valley.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-200 px-4 py-1.5 mb-5 text-xs font-semibold text-brand-700 uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Our Impact
          </span>
          <h2 className="font-[family-name:var(--font-poppins)] font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-deep">
            Numbers that{" "}
            <span className="text-gradient-water">change lives.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative bg-white rounded-3xl p-6 lg:p-8 border border-brand-100 hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1 transition-all duration-500 text-center group overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-brand-100/50 group-hover:bg-brand-200/50 blur-2xl transition-colors" />
              <div className="relative">
                <div className="inline-flex w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="font-[family-name:var(--font-poppins)] font-black text-3xl lg:text-4xl text-gradient-water mb-1">
                  {stat.value}
                </div>
                <div className="font-bold text-deep text-sm lg:text-base mb-1">{stat.label}</div>
                <div className="text-xs text-body-soft leading-snug">{stat.sublabel}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative bg-white rounded-3xl border border-brand-100 shadow-xl p-8 lg:p-12 overflow-hidden"
        >
          {/* Decorative wave */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-brand-100 to-teal-100 opacity-50 blur-3xl" />

          <div className="relative grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="h-5 w-5 text-brand-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700">Our Partners</span>
              </div>
              <h3 className="font-[family-name:var(--font-poppins)] font-black text-2xl lg:text-3xl text-deep leading-tight mb-3">
                Backed by institutions that believe in water for all.
              </h3>
              <p className="text-body-muted text-sm leading-relaxed">
                Purefresh is supported by an ecosystem of impact-focused organizations funding
                innovative water solutions for underserved communities across Kenya.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-brand-700 bg-brand-50 rounded-full px-3 py-1.5">
                <TrendingUp className="h-3.5 w-3.5" />
                Scaling to 15+ new cashless outlets
              </div>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
              {PARTNERS.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-4 rounded-2xl bg-gradient-to-br from-brand-50/80 to-white border border-brand-100 hover:border-brand-300 transition-colors"
                >
                  <div className="font-[family-name:var(--font-poppins)] font-bold text-deep text-base mb-1">{p.name}</div>
                  <div className="text-xs text-body-soft leading-snug">{p.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
