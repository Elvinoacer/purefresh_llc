'use client'

import { motion } from "framer-motion"
import { Droplets, ShieldCheck, Sparkles, ChevronDown, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IMAGES } from "@/lib/images"

export function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-deep"
    >
      {/* Cinematic background image — low opacity texture over solid dark base */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroSplashWide}
          alt="Crystal clear water splash in slow motion"
          className="w-full h-full object-cover opacity-25"
        />
      </div>

      {/* Dark gradient on top of image — ensures text area is solid dark */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(10, 37, 64, 0.98) 0%, rgba(10, 37, 64, 0.92) 50%, rgba(8, 47, 73, 0.7) 100%)",
        }}
      />
      {/* Bottom fade for scroll indicator area */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-deep/40" />

      {/* Floating water blobs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-[28rem] h-[28rem] rounded-full bg-brand-400/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -right-24 w-[34rem] h-[34rem] rounded-full bg-teal-400/15 blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 pt-32 pb-24 lg:pt-40 lg:pb-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="inline-flex items-center gap-2 rounded-full glass-dark border border-white/20 px-4 py-1.5 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-teal-accent opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-accent" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-white text-shadow-soft">
                KEBS Certified • WHO Compliant • Nakuru, Kenya
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-[family-name:var(--font-poppins)] font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-white text-shadow-hero"
            >
              Pure Water.
              <br />
              <span className="text-teal-accent">Pure Life.</span>
              <br />
              <span className="text-white">For Every Home.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-white max-w-xl mx-auto lg:mx-0 leading-relaxed text-shadow-strong"
            >
              Premium drinking water purified through advanced reverse osmosis at our Maili Sita
              shop in Nakuru. Bring any container, pay up to 70% less than bottled water, and
              give your family the fluoride-free, KEBS-certified hydration they deserve.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-teal-accent to-brand-500 hover:from-teal-400 hover:to-brand-600 text-white rounded-full px-7 py-6 text-base font-semibold shadow-2xl shadow-brand-500/40 group"
              >
                <a href="#contact" className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Get Water Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-7 py-6 text-base font-semibold border-white/40 text-white hover:bg-white/10 hover:border-white bg-white/5 backdrop-blur"
              >
                <a href="tel:+254114247578" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  +254 114 247578
                </a>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-5 justify-center lg:justify-start text-sm text-white text-shadow-soft"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-teal-accent" />
                <span className="font-medium">KEBS Certified</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-teal-accent" />
                <span className="font-medium">WHO Standard</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-teal-accent" />
                <span className="font-medium">150+ Outlets</span>
              </div>
            </motion.div>
          </div>

          {/* Right: image card stack — business-appropriate, no children */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 relative h-[420px] sm:h-[500px] lg:h-[600px]"
          >
            {/* Main image — water refill station */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[75%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20"
            >
              <img
                src={IMAGES.refillStation}
                alt="Purefresh purified water refill station"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-teal-accent text-shadow-soft">Pure refills</div>
                <div className="text-xs text-white font-medium text-shadow-soft">Premium water, affordable prices</div>
              </div>
            </motion.div>

            {/* Bottom-left image — water refilling kiosk */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 w-[60%] h-[45%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20"
            >
              <img
                src={IMAGES.waterRefillKiosk}
                alt="Water refilling station — bring any container"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-teal-accent text-shadow-soft">Bring any container</div>
                <div className="text-xs text-white font-medium text-shadow-soft">Refill at our kiosk in minutes</div>
              </div>
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute top-[40%] left-0 glass-dark rounded-2xl border border-white/30 shadow-2xl p-3 sm:p-4 backdrop-blur-xl"
            >
              <div className="text-2xl sm:text-3xl font-[family-name:var(--font-poppins)] font-black text-white">70%</div>
              <div className="text-[10px] sm:text-xs font-medium text-white leading-tight mt-0.5">
                Cheaper than<br />bottled water
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.15 }}
              className="absolute bottom-[5%] right-2 glass-dark rounded-full border border-white/30 shadow-2xl px-4 py-2 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <ShieldCheck className="h-4 w-4 text-teal-accent" />
                KEBS Certified
              </div>
            </motion.div>

            {/* Decorative drop shape */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[8%] left-[2%] w-12 h-12 opacity-90"
            >
              <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-[0_5px_15px_rgba(34,211,238,0.5)]">
                <defs>
                  <linearGradient id="heroMiniDrop" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a5f3fc" />
                    <stop offset="100%" stopColor="#0891b2" />
                  </linearGradient>
                </defs>
                <path d="M32 6 C32 6 12 28 12 42 C12 53 21 60 32 60 C43 60 52 53 52 42 C52 28 32 6 32 6 Z" fill="url(#heroMiniDrop)" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom location strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 lg:mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-white text-shadow-soft"
        >
          <span className="inline-flex items-center gap-1.5 font-medium">
            <MapPin className="h-3.5 w-3.5 text-teal-accent" /> Now serving:
          </span>
          {["Nakuru", "Naivasha", "Nairobi", "Kajiado", "Machakos", "Kiambu"].map((c, i) => (
            <span key={c} className="inline-flex items-center gap-2">
              <span className="font-semibold text-white">{c}</span>
              {i < 5 && <span className="text-white/40">•</span>}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors z-20"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.button>
    </section>
  )
}
