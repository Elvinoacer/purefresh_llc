'use client'

import { useEffect, useState } from "react"
import { Menu, X, Phone, Droplets } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Purification" },
  { href: "#story", label: "Story" },
  { href: "#impact", label: "Impact" },
  { href: "#locations", label: "Locations" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl transition-all duration-500",
            scrolled
              ? "glass shadow-[0_10px_40px_-15px_rgba(8,145,178,0.25)] border border-white/40 px-4 py-2.5"
              : "bg-deep/30 backdrop-blur-sm border border-white/10 px-4 py-2.5"
          )}
        >
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2 group"
            aria-label="Purefresh home"
          >
            <div className="relative">
              <img
                src="/purefresh-mark.svg"
                alt="Purefresh logo"
                width={40}
                height={40}
                className="drop-shadow-md group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span
                className={cn(
                  "font-[family-name:var(--font-poppins)] font-extrabold text-lg tracking-tight transition-colors",
                  scrolled ? "text-deep" : "text-white"
                )}
              >
                Pure<span className="text-teal-accent">fresh</span>
              </span>
              <span
                className={cn(
                  "text-[9px] font-semibold tracking-[0.22em] uppercase transition-colors",
                  scrolled ? "text-brand-700/80" : "text-teal-accent/90"
                )}
              >
                Premium Drinking Water
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={cn(
                  "px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
                  scrolled
                    ? "text-body-muted hover:text-brand-700 hover:bg-brand-50/60"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              className="hidden md:inline-flex bg-gradient-to-r from-brand-500 to-brand-700 hover:from-brand-600 hover:to-brand-800 text-white shadow-lg shadow-brand-500/30 rounded-full px-5 group"
            >
              <a href="tel:+254114247578" className="flex items-center gap-2">
                <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                Order Water
              </a>
            </Button>

            <button
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled
                  ? "hover:bg-brand-50 text-deep"
                  : "hover:bg-white/10 text-white"
              )}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl border border-white/50 shadow-xl p-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-body hover:bg-brand-50 hover:text-brand-700 font-medium transition-colors text-left"
                >
                  <Droplets className="h-4 w-4 text-brand-500" />
                  {link.label}
                </button>
              ))}
              <a
                href="tel:+254114247578"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-brand-700 text-white py-3 rounded-xl font-semibold shadow-lg shadow-brand-500/30"
              >
                <Phone className="h-4 w-4" /> Call to Order
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
