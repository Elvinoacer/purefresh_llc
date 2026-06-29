'use client'

import { motion } from "framer-motion"
import { Drill, Filter, Waves, FlaskConical } from "lucide-react"
import { IMAGES } from "@/lib/images"

const STEPS = [
  {
    icon: Drill,
    step: "01",
    title: "Borehole Sourcing",
    text: "Raw water is carefully extracted from protected deep boreholes — accessing natural aquifers far below surface contamination.",
    image: IMAGES.borehole,
    imageAlt: "Borehole water well pump in Africa",
    color: "from-cyan-400 to-brand-500",
  },
  {
    icon: Filter,
    step: "02",
    title: "Pre-Filtration",
    text: "Multi-stage mechanical filtration removes sediment, suspended solids, and larger particles — preparing water for the RO membrane.",
    image: IMAGES.roPlantAlt,
    imageAlt: "Industrial water filtration system",
    color: "from-brand-500 to-brand-600",
  },
  {
    icon: Waves,
    step: "03",
    title: "Reverse Osmosis",
    text: "Water is forced through advanced semi-permeable membranes under high pressure — eliminating fluoride, heavy metals, bacteria, viruses, and dissolved solids.",
    image: IMAGES.roPlant,
    imageAlt: "Reverse osmosis purification plant",
    color: "from-brand-600 to-teal-600",
  },
  {
    icon: FlaskConical,
    step: "04",
    title: "Quality Assurance",
    text: "Purified water is tested to WHO standards, KEBS-certified, and trucked in sealed bowsers to vending kiosks across underserved communities.",
    image: IMAGES.labTestingAlt,
    imageAlt: "Water quality testing laboratory",
    color: "from-teal-600 to-brand-700",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-200 px-4 py-1.5 mb-5 text-xs font-semibold text-brand-700 uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            The Purification Process
          </span>
          <h2 className="font-[family-name:var(--font-poppins)] font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-deep">
            Four rigorous steps to{" "}
            <span className="text-gradient-water">absolute purity.</span>
          </h2>
          <p className="mt-5 text-body-muted text-base lg:text-lg leading-relaxed">
            From deep beneath the earth to your container — every drop passes through a
            meticulous four-stage reverse osmosis process that eliminates all organic and
            inorganic contaminants.
          </p>
        </motion.div>

        {/* Process flow — image-rich cards */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[8rem] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-cyan-300 via-brand-400 to-teal-500" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative group"
              >
                {/* Image header with step number */}
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl mb-6">
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent" />

                  {/* Step number badge */}
                  <div className="absolute top-3 right-3 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center font-[family-name:var(--font-poppins)] font-black text-brand-700 text-base border-2 border-brand-100">
                    {step.step}
                  </div>

                  {/* Icon on bottom-left */}
                  <div className={`absolute -bottom-5 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl ring-4 ring-white group-hover:scale-110 transition-transform`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content card */}
                <div className="bg-gradient-to-b from-brand-50/60 to-white border border-brand-100 rounded-2xl p-5 hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-300 transition-all duration-500">
                  <h3 className="font-[family-name:var(--font-poppins)] font-bold text-lg text-deep mb-2 mt-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-body-muted leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom certification banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3 lg:gap-6"
        >
          <div className="flex items-center gap-3 bg-gradient-to-r from-brand-50 to-teal-50 border border-brand-200 rounded-2xl px-5 py-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
              <FlaskConical className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-[family-name:var(--font-poppins)] font-bold text-deep text-sm">KEBS Certified</div>
              <div className="text-xs text-body-soft">Kenya Bureau of Standards</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-gradient-to-r from-teal-50 to-brand-50 border border-teal-200 rounded-2xl px-5 py-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-brand-700 flex items-center justify-center">
              <Waves className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-[family-name:var(--font-poppins)] font-bold text-deep text-sm">WHO Compliant</div>
              <div className="text-xs text-body-soft">World Health Organization</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
