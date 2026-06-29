'use client'

import { motion } from "framer-motion"
import { Quote, Heart, Droplets, Users, Sparkles } from "lucide-react"
import { IMAGES } from "@/lib/images"

const GALLERY = [
  {
    image: IMAGES.refillStation,
    caption: "Pure refills",
    subcaption: "Premium water at fair prices",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-square lg:aspect-auto lg:h-full",
  },
  {
    image: IMAGES.waterRefillKiosk,
    caption: "Easy refills",
    subcaption: "Bring any container — pay a fair price",
    span: "",
    aspect: "aspect-square",
  },
  {
    image: IMAGES.bowser,
    caption: "Bowser delivery",
    subcaption: "Reaching kiosks across 6 counties",
    span: "",
    aspect: "aspect-square",
  },
  {
    image: IMAGES.bowserDispensing,
    caption: "Bowser delivery",
    subcaption: "Water trucked to kiosks across 6 counties",
    span: "lg:col-span-2",
    aspect: "aspect-[2/1] lg:aspect-[2.2/1]",
  },
  {
    image: IMAGES.labTesting,
    caption: "Lab-tested",
    subcaption: "Every batch verified to WHO standards",
    span: "",
    aspect: "aspect-square",
  },
  {
    image: IMAGES.waterAtmAlt,
    caption: "Community kiosks",
    subcaption: "Clean water within walking distance",
    span: "",
    aspect: "aspect-square",
  },
]

const TESTIMONIALS = [
  {
    quote: "Before Purefresh, my children's teeth were turning brown from the borehole water. Now they drink without worry — and I save 200 shillings every week.",
    name: "Wanjiku M.",
    role: "Mother of 3, Nakuru",
  },
  {
    quote: "I run a small hotel in Maili Sita. Purefresh refills are affordable, the water tastes clean, and my customers can tell the difference. They are part of why my business is growing.",
    name: "Peter K.",
    role: "Hotel owner, Maili Sita",
  },
  {
    quote: "As a teacher, I see the difference safe water makes. Kids who used to miss school with stomach issues are now in class every day. That's not just water — that's their future.",
    name: "Teacher Grace",
    role: "Primary school, Naivasha",
  },
]

export function StorySection() {
  return (
    <section id="story" className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-brand-50/40 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-200 px-4 py-1.5 mb-5 text-xs font-semibold text-brand-700 uppercase tracking-wider">
            <Heart className="h-3.5 w-3.5 text-brand-500" />
            Our Story
          </span>
          <h2 className="font-[family-name:var(--font-poppins)] font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-deep">
            Every drop tells{" "}
            <span className="text-gradient-water">a story.</span>
          </h2>
          <p className="mt-5 text-body-muted text-base lg:text-lg leading-relaxed">
            From borehole to bottle, from kiosk to kitchen — meet the people and moments that
            make Purefresh more than just water.
          </p>
        </motion.div>

        {/* Bento-style gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-20">
          {GALLERY.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className={`relative rounded-2xl overflow-hidden shadow-lg group cursor-default ${item.span} ${item.aspect}`}
            >
              <img
                src={item.image}
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/50 to-deep/10 opacity-95 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 inset-x-0 p-3 lg:p-4">
                <div className="text-[10px] lg:text-xs font-bold uppercase tracking-wider text-teal-accent mb-0.5 text-shadow-soft">
                  {item.subcaption}
                </div>
                <div className="text-sm lg:text-base font-[family-name:var(--font-poppins)] font-bold text-white text-shadow-soft">
                  {item.caption}
                </div>
              </div>
              {/* Hover sparkle */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-200 px-4 py-1.5 mb-5 text-xs font-semibold text-brand-700 uppercase tracking-wider">
            <Users className="h-3.5 w-3.5 text-brand-500" />
            Voices of Purefresh
          </span>
          <h3 className="font-[family-name:var(--font-poppins)] font-black text-2xl sm:text-3xl lg:text-4xl leading-tight text-deep">
            What our community says.
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative bg-white rounded-3xl p-6 lg:p-7 border border-brand-100 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 hover:-translate-y-1 transition-all duration-500"
            >
              <Quote className="h-8 w-8 text-brand-200 mb-3" />
              <p className="text-body text-sm lg:text-base leading-relaxed italic mb-5">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-brand-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center font-[family-name:var(--font-poppins)] font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-deep text-sm">{t.name}</div>
                  <div className="text-xs text-body-soft">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
