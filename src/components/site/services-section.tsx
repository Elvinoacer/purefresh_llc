'use client'

import { motion } from "framer-motion"
import { Recycle, Droplets, Truck, Wallet, ShieldCheck, HeartPulse, ArrowRight } from "lucide-react"
import { IMAGES } from "@/lib/images"

const SERVICES = [
  {
    icon: Recycle,
    title: "Container Refills",
    text: "Bring your own jerricans, dispensers, or bottles from any company — we refill them all with premium purified water at the lowest price.",
    image: IMAGES.waterAtm,
    imageAlt: "Purefresh cashless water refill kiosk",
    accent: "from-cyan-400 to-brand-600",
    tag: "Most Popular",
  },
  {
    icon: Droplets,
    title: "Premium Drinking Water",
    text: "Purified, premium-quality drinking water that meets strict WHO standards — clean, fresh, and safe for every member of your family.",
    image: IMAGES.heroGlassPour,
    imageAlt: "Clean water being poured into a glass",
    accent: "from-brand-500 to-teal-600",
  },
  {
    icon: Truck,
    title: "Bowser Distribution",
    text: "Advanced reverse osmosis purifies borehole water, distributed via tanker bowsers to water kiosks across underserved areas.",
    image: IMAGES.bowser,
    imageAlt: "Water tanker delivery bowser truck",
    accent: "from-teal-500 to-brand-700",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    text: "Up to 70% cheaper than packaged bottled water — freeing up household resources for other essentials like food, school, and health.",
    image: IMAGES.jerricanRefill,
    imageAlt: "Water containers and jerricans",
    accent: "from-brand-600 to-cyan-700",
  },
  {
    icon: ShieldCheck,
    title: "KEBS & WHO Certified",
    text: "Every drop is certified by the Kenya Bureau of Standards and rigorously tested to meet WHO drinking water guidelines.",
    image: IMAGES.labTesting,
    imageAlt: "Scientist testing water quality in laboratory",
    accent: "from-cyan-500 to-teal-700",
  },
  {
    icon: HeartPulse,
    title: "Health-First Mission",
    text: "Eradicating water-borne illnesses — cholera, typhoid, hepatitis A — and reducing fluorosis that harms children's bones and teeth.",
    image: IMAGES.waterRefillKiosk,
    imageAlt: "Water refilling station serving the community",
    accent: "from-teal-600 to-brand-800",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-brand-50/40 to-white overflow-hidden">
      {/* Decorative water drop pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #0891b2 1.5px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-200 px-4 py-1.5 mb-5 text-xs font-semibold text-brand-700 uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            What We Do
          </span>
          <h2 className="font-[family-name:var(--font-poppins)] font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-deep">
            Everything your family needs for{" "}
            <span className="text-gradient-water">safe hydration.</span>
          </h2>
          <p className="mt-5 text-body-muted text-base lg:text-lg leading-relaxed">
            From container refills to bulk bowser delivery, we've built a complete water service
            ecosystem designed for affordability, accessibility, and absolute purity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative bg-white rounded-3xl border border-brand-100 hover:border-brand-300 shadow-sm hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image header */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent" />

                {/* Tag */}
                {service.tag && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-teal-accent to-brand-500 px-2.5 py-1 rounded-full shadow-lg">
                    {service.tag}
                  </span>
                )}

                {/* Icon badge */}
                <div className={`absolute -bottom-6 left-5 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center shadow-xl shadow-brand-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ring-4 ring-white`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
              </div>

              {/* Body */}
              <div className="p-6 pt-9 flex-1 flex flex-col">
                <h3 className="font-[family-name:var(--font-poppins)] font-bold text-xl text-deep mb-2">
                  {service.title}
                </h3>
                <p className="text-body-muted text-sm leading-relaxed flex-1">
                  {service.text}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-bold text-brand-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${service.accent} scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
