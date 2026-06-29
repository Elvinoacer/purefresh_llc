'use client'

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const WHATSAPP_NUMBER = "254114247578"
const DEFAULT_MESSAGE = "Hello Purefresh! I'd like to know more about your premium drinking water and refill prices."

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [tooltipShown, setTooltipShown] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Show tooltip after a delay once visible
  useEffect(() => {
    if (visible && !tooltipShown) {
      const t = setTimeout(() => setTooltipShown(true), 1200)
      return () => clearTimeout(t)
    }
  }, [visible, tooltipShown])

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`
    window.open(url, "_blank")
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-3"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltipShown && !hovered && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                className="hidden sm:block bg-white rounded-2xl shadow-xl border border-brand-100 px-4 py-2.5 max-w-[220px]"
              >
                <button
                  onClick={() => setTooltipShown(false)}
                  className="absolute -left-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-l border-t border-brand-100 rotate-45"
                  aria-hidden
                />
                <div className="text-xs font-bold text-deep mb-0.5">Chat with us! 💬</div>
                <div className="text-[11px] text-body-muted leading-snug">
                  Tap to ask about water refills, prices, or delivery.
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp button with rippling waves */}
          <button
            onClick={openWhatsApp}
            aria-label="Chat with Purefresh on WhatsApp"
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-2xl shadow-[#25D366]/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-10"
          >
            {/* Rippling waves — multiple expanding circles */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ripple-wave" style={{ animationDelay: "0s" }} />
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ripple-wave" style={{ animationDelay: "0.8s" }} />
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ripple-wave-slow" style={{ animationDelay: "1.6s" }} />

            {/* WhatsApp icon */}
            <svg
              viewBox="0 0 32 32"
              className="relative w-8 h-8 sm:w-9 sm:h-9 text-white drop-shadow"
              fill="currentColor"
              aria-hidden
            >
              <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39z" />
              <path d="M16.04 3.2c-7.06 0-12.78 5.72-12.78 12.78 0 2.25.6 4.45 1.73 6.39L3.2 28.8l6.6-1.73a12.72 12.72 0 0 0 6.24 1.6h.01c7.06 0 12.78-5.72 12.78-12.78 0-3.42-1.33-6.63-3.75-9.05A12.72 12.72 0 0 0 16.04 3.2zm0 23.04h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.56 10.56 0 0 1-1.62-5.64c0-5.85 4.77-10.62 10.63-10.62 2.84 0 5.5 1.11 7.51 3.12a10.55 10.55 0 0 1 3.11 7.51c0 5.85-4.77 10.62-10.62 10.62z" />
            </svg>

            {/* Online indicator dot */}
            <span className="absolute top-1 right-1 w-3 h-3 bg-green-300 rounded-full border-2 border-white" />

            {/* Hover glow */}
            <span className="absolute inset-0 rounded-full bg-white/30 opacity-0 hover:opacity-100 transition-opacity" />
          </button>

          {/* Floating tooltip on hover */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute right-16 sm:right-20 top-1/2 -translate-y-1/2 bg-deep text-white text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap shadow-lg pointer-events-none"
              >
                Chat on WhatsApp
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
