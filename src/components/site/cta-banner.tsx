'use client'

import { motion } from "framer-motion"
import { Droplets, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IMAGES } from "@/lib/images"

export function CtaBanner() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Cinematic background image */}
          <div className="absolute inset-0">
            <img
              src={IMAGES.heroGlassPour}
              alt="Pure water being poured"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-deep/95 via-brand-900/90 to-brand-700/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/30 to-deep/40" />

          {/* Animated water effect */}
          <div className="absolute inset-0 opacity-30">
            <motion.div
              className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-teal-300/40 blur-3xl"
              animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-cyan-300/40 blur-3xl"
              animate={{ scale: [1, 1.4, 1], x: [0, -30, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
            />
          </div>

          {/* Wave pattern */}
          <div className="absolute inset-0 opacity-15">
            <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="none">
              <motion.path
                d="M0,200 C300,250 600,150 900,200 C1050,225 1150,190 1200,200 L1200,400 L0,400 Z"
                fill="white"
                animate={{ d: [
                  "M0,200 C300,250 600,150 900,200 C1050,225 1150,190 1200,200 L1200,400 L0,400 Z",
                  "M0,210 C300,160 600,260 900,210 C1050,185 1150,220 1200,210 L1200,400 L0,400 Z",
                  "M0,200 C300,250 600,150 900,200 C1050,225 1150,190 1200,200 L1200,400 L0,400 Z",
                ] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur rounded-full px-3 py-1 mb-4">
                <Droplets className="h-3.5 w-3.5 text-teal-accent" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Ready when you are</span>
              </div>
              <h2 className="font-[family-name:var(--font-poppins)] font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
                Bring your container.
                <br />
                <span className="text-teal-accent">Take home pure water.</span>
              </h2>
              <p className="text-white text-base lg:text-lg leading-relaxed text-shadow-soft">
                Visit our Maili Sita shop in Nakuru today — or order by phone. Up to 70%
                cheaper than bottled water. KEBS-certified. WHO-compliant. Family-safe.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-700 hover:bg-brand-50 rounded-full px-7 py-6 text-base font-bold shadow-xl group flex-1"
              >
                <a href="tel:+254114247578" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Call +254 114 247578
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 hover:text-white rounded-full px-7 py-6 text-base font-bold group flex-1"
              >
                <a href="#locations" className="flex items-center justify-center gap-2">
                  <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Find a Location
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
