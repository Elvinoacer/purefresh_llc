'use client'

import { motion } from "framer-motion"
import { CheckCircle2, MapPin, Calendar, Award, Quote } from "lucide-react"
import { IMAGES } from "@/lib/images"

const HIGHLIGHTS = [
  { icon: MapPin, title: "Nakuru Roots", text: "Born in Nakuru County, now serving 6 counties across Kenya." },
  { icon: Calendar, title: "Since 2019", text: "Piloted with KIFFWA support, scaling ever since." },
  { icon: Award, title: "150+ Outlets", text: "A growing network of cashless water vending kiosks." },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-brand-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Top story image strip — Rift Valley context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden h-56 lg:h-72 mb-16 lg:mb-20 shadow-2xl"
        >
          <img
            src={IMAGES.riftValley}
            alt="Kenya's Rift Valley landscape — the region Purefresh serves"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep/95 via-deep/70 to-deep/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 lg:px-10">
              <div className="max-w-xl text-white">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-accent mb-3">
                  <MapPin className="h-3.5 w-3.5" />
                  Our Home
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-black text-2xl lg:text-3xl leading-tight">
                  Born in the Rift Valley, where fluoride runs deep in the soil.
                </h3>
                <p className="text-sm lg:text-base text-white mt-2 leading-relaxed text-shadow-soft">
                  We exist to protect the families who call this stunning landscape home.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image collage — story of water */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group">
                  <img
                    src={IMAGES.waterDropClear}
                    alt="Pure water droplet"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-teal-accent text-shadow-soft">Pure</div>
                    <div className="text-xs font-medium text-shadow-soft">Every drop matters</div>
                  </div>
                </div>
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl group">
                  <img
                    src={IMAGES.roPlant}
                    alt="Purefresh reverse osmosis purification plant"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-teal-accent text-shadow-soft">Purified</div>
                    <div className="text-xs font-medium text-shadow-soft">Advanced RO technology</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl group">
                  <img
                    src={IMAGES.manBicycle}
                    alt="Man transporting water containers by bicycle — last-mile distribution"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-teal-accent text-shadow-soft">Last mile</div>
                    <div className="text-xs font-medium text-shadow-soft">Water reaches every home</div>
                  </div>
                </div>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-brand-500 to-brand-800 p-6 flex flex-col justify-end">
                  <div className="text-white">
                    <div className="font-[family-name:var(--font-poppins)] font-black text-4xl lg:text-5xl leading-none">
                      15+
                    </div>
                    <div className="text-sm font-medium text-white mt-2 leading-snug">
                      Years of water & sanitation experience led by MD Antony Kamotho
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-xl" />
                </div>
              </div>
            </div>

            {/* Floating quote card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl border border-white/60 shadow-xl p-4 max-w-[220px] z-10"
            >
              <Quote className="h-5 w-5 text-brand-500 mb-1.5" />
              <p className="text-xs text-body-muted italic leading-snug">
                "We don't just sell water — we restore health, dignity, and opportunity."
              </p>
              <div className="text-[10px] font-bold text-deep mt-1.5">— Antony Kamotho, MD</div>
            </motion.div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-200 px-4 py-1.5 mb-5 text-xs font-semibold text-brand-700 uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Who We Are
            </span>
            <h2 className="font-[family-name:var(--font-poppins)] font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-deep">
              A Kenyan movement for{" "}
              <span className="text-gradient-water">clean, affordable water.</span>
            </h2>
            <p className="mt-5 text-body-muted text-base lg:text-lg leading-relaxed">
              Purefresh is a Kenyan water purification and distribution company serving low- and
              middle-income households. Through a network of over 150 vending outlets, we provide
              clean, potable water at prices more accessible than most water service providers —
              because every family deserves safe hydration.
            </p>
            <p className="mt-4 text-body-muted text-base lg:text-lg leading-relaxed">
              Our model is simple but powerful: raw water sourced from boreholes, purified through
              a rigorous four-step reverse osmosis process, then trucked to outlets across
              underserved areas. Certified by KEBS and compliant with WHO standards, we are
              eradicating water-borne illnesses — one refill at a time.
            </p>

            <div className="mt-8 space-y-3">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-3 rounded-2xl hover:bg-brand-50/60 transition-colors"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/25">
                    <h.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-deep">{h.title}</div>
                    <div className="text-sm text-body-muted mt-0.5">{h.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
