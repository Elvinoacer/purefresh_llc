'use client'

import { motion } from "framer-motion"
import { AlertTriangle, Droplet, HeartPulse, TrendingDown, Baby, ShieldCheck } from "lucide-react"
import { IMAGES } from "@/lib/images"

const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: "Fluoride Crisis",
    text: "Groundwater in the Rift Valley contains fluoride up to 14× the WHO recommended level — causing endemic fluorosis.",
    stat: "14×",
    statLabel: "above WHO limit",
  },
  {
    icon: Baby,
    title: "Children at Risk",
    text: "Excess fluoride damages children's bones and teeth — affecting development for life.",
    stat: "Kids",
    statLabel: "most vulnerable",
  },
  {
    icon: TrendingDown,
    title: "Bottled Water Cost",
    text: "Packaged bottled water is unaffordable and inaccessible for most Kenyan households.",
    stat: "70%",
    statLabel: "price mark-up",
  },
  {
    icon: HeartPulse,
    title: "Water-Borne Disease",
    text: "Cholera, typhoid, and hepatitis A remain persistent threats in underserved areas.",
    stat: "3+",
    statLabel: "deadly diseases",
  },
]

const SOLUTIONS = [
  "Reverse Osmosis removes fluoride and all organic/inorganic contaminants",
  "Affordable refills — bring any container, pay a fraction of bottled prices",
  "KEBS-certified and WHO-compliant for guaranteed safety",
  "Local kiosks make clean water accessible within walking distance",
]

export function WhySection() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-deep via-brand-900 to-deep-soft text-white overflow-hidden">
      {/* Background image — soft water overlay */}
      <div className="absolute inset-0 opacity-15">
        <img
          src={IMAGES.waterSurface}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Background water effects */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-500/40 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] rounded-full bg-teal-500/30 blur-3xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Floating droplets */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-brand-300/50"
          style={{
            left: `${10 + i * 11}%`,
            top: `${15 + (i % 4) * 22}%`,
          }}
          animate={{ y: [0, 30, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur px-4 py-1.5 mb-5 text-xs font-semibold text-white uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-accent" />
            Why Purefresh Exists
          </span>
          <h2 className="font-[family-name:var(--font-poppins)] font-black text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Clean water is a right,{" "}
            <span className="text-gradient-water">not a luxury.</span>
          </h2>
          <p className="mt-5 text-on-dark-muted text-base lg:text-lg leading-relaxed">
            The Rift Valley faces a hidden public health crisis. We exist to solve it —
            one refill, one kiosk, one healthy child at a time.
          </p>
        </motion.div>

        {/* Emotional image + problem grid */}
        <div className="grid lg:grid-cols-12 gap-6 mb-14">
          {/* Image — unsafe water collection (the problem we solve) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl h-72 lg:h-auto min-h-[400px]"
          >
            <img
              src={IMAGES.jerricansStack}
              alt="Stacked water containers — the reality of daily water collection"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-deep/20" />
            <div className="absolute bottom-0 inset-x-0 p-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-accent mb-2">
                <HeartPulse className="h-3.5 w-3.5" />
                The Hidden Crisis
              </div>
              <h3 className="font-[family-name:var(--font-poppins)] font-black text-xl lg:text-2xl text-white leading-tight">
                The water your family drinks may be harming them — silently.
              </h3>
              <p className="text-sm text-on-dark-muted mt-2 leading-relaxed text-shadow-soft">
                Excess fluoride doesn't just discolor teeth. It weakens bones, stunts growth,
                and robs children of their potential.
              </p>
            </div>
          </motion.div>

          {/* Problem cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {PROBLEMS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-red-500/20 border border-red-400/30 flex items-center justify-center">
                    <p.icon className="h-5 w-5 text-red-300" />
                  </div>
                  <div className="text-right">
                    <div className="font-[family-name:var(--font-poppins)] font-black text-2xl text-red-300">{p.stat}</div>
                    <div className="text-[10px] text-on-dark-soft uppercase tracking-wide">{p.statLabel}</div>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-white mb-1.5">{p.title}</h3>
                <p className="text-sm text-on-dark-muted leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solution banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-r from-brand-500 to-teal-600 rounded-3xl overflow-hidden shadow-2xl shadow-brand-500/30"
        >
          {/* Background image — water refilling */}
          <div className="absolute inset-0 opacity-20">
            <img
              src={IMAGES.waterRefillKiosk}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Animated wave overlay */}
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 1200 200" className="w-full h-full" preserveAspectRatio="none">
              <motion.path
                d="M0,100 C300,150 600,50 900,100 C1050,125 1150,90 1200,100 L1200,200 L0,200 Z"
                fill="white"
                animate={{ d: [
                  "M0,100 C300,150 600,50 900,100 C1050,125 1150,90 1200,100 L1200,200 L0,200 Z",
                  "M0,110 C300,60 600,160 900,110 C1050,85 1150,120 1200,110 L1200,200 L0,200 Z",
                  "M0,100 C300,150 600,50 900,100 C1050,125 1150,90 1200,100 L1200,200 L0,200 Z",
                ] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Droplet className="h-6 w-6 text-white" />
                <span className="font-bold text-white text-sm uppercase tracking-wider">Our Solution</span>
              </div>
              <h3 className="font-[family-name:var(--font-poppins)] font-black text-2xl lg:text-3xl text-white mb-3 leading-tight">
                Pure water. Fair price. Within reach.
              </h3>
              <p className="text-on-dark-muted text-base leading-relaxed">
                We don't just sell water — we restore health, dignity, and opportunity to families
                who have been priced out of safety for too long.
              </p>
            </div>
            <div className="space-y-3">
              {SOLUTIONS.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3 bg-white/15 backdrop-blur rounded-xl p-3.5 border border-white/20"
                >
                  <ShieldCheck className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-white font-medium">{s}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
