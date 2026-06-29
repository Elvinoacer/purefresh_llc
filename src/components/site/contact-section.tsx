'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Facebook, MapPin, Send, CheckCircle2, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

const WHATSAPP_NUMBER = "254114247578"

export function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" })
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.message) {
      toast.error("Please fill in all fields")
      return
    }
    setSubmitting(true)

    // Build a WhatsApp deep link with the message — opens WhatsApp with prefilled text
    const text = `Hello Purefresh! My name is ${form.name}.%0A%0A${form.message}%0A%0AMy phone: ${form.phone}`
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`

    // Simulate brief processing for UX, then redirect to WhatsApp
    setTimeout(() => {
      setSubmitting(false)
      setSent(true)
      toast.success("Opening WhatsApp...")
      window.open(waUrl, "_blank")
      setTimeout(() => {
        setSent(false)
        setForm({ name: "", phone: "", message: "" })
      }, 2500)
    }, 600)
  }

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-gradient-to-br from-brand-50 via-white to-teal-50/40 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-200 px-4 py-1.5 mb-5 text-xs font-semibold text-brand-700 uppercase tracking-wider shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Get In Touch
            </span>
            <h2 className="font-[family-name:var(--font-poppins)] font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-deep mb-5">
              Order water,{" "}
              <span className="text-gradient-water">ask a question,</span>{" "}
              or visit us today.
            </h2>
            <p className="text-body-muted text-base lg:text-lg leading-relaxed mb-8">
              Drop us a message and we'll respond on WhatsApp. Or reach out directly using
              any of the channels below — we're here to serve your family's water needs.
            </p>

            <div className="space-y-3">
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="group flex items-center gap-4 bg-white rounded-2xl border border-brand-100 hover:border-brand-300 p-4 hover:shadow-lg hover:shadow-brand-500/10 transition-all"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:scale-110 transition-transform">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold uppercase tracking-wide text-body-soft">Call to Order</div>
                  <div className="font-[family-name:var(--font-poppins)] font-bold text-deep">+254 114 247578</div>
                </div>
                <Send className="h-4 w-4 text-brand-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="mailto:purefresh.watershop@gmail.com"
                className="group flex items-center gap-4 bg-white rounded-2xl border border-brand-100 hover:border-brand-300 p-4 hover:shadow-lg hover:shadow-brand-500/10 transition-all"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-brand-700 flex items-center justify-center shadow-lg shadow-teal-500/25 group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold uppercase tracking-wide text-body-soft">Email Us</div>
                  <div className="font-[family-name:var(--font-poppins)] font-bold text-deep break-all">purefresh.watershop@gmail.com</div>
                </div>
                <Send className="h-4 w-4 text-brand-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="https://www.facebook.com/PureFreshNakuru/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white rounded-2xl border border-brand-100 hover:border-brand-300 p-4 hover:shadow-lg hover:shadow-brand-500/10 transition-all"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                  <Facebook className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold uppercase tracking-wide text-body-soft">Facebook</div>
                  <div className="font-[family-name:var(--font-poppins)] font-bold text-deep">PureFresh Nakuru</div>
                </div>
                <Send className="h-4 w-4 text-brand-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>

              <div className="flex items-center gap-4 bg-white rounded-2xl border border-brand-100 p-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-deep flex items-center justify-center shadow-lg shadow-brand-700/25">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold uppercase tracking-wide text-body-soft">Visit Our Maili Sita Shop</div>
                  <div className="font-[family-name:var(--font-poppins)] font-bold text-deep text-sm leading-tight">
                    Maili Sita, Nakuru – Nairobi Highway
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-deep via-brand-900 to-deep-soft rounded-3xl p-8 lg:p-10 shadow-2xl shadow-brand-900/30 overflow-hidden">
              {/* Decorative water drop in corner */}
              <div className="absolute -top-10 -right-10 opacity-10">
                <Droplets className="h-40 w-40 text-brand-300" />
              </div>
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-brand-500/20 blur-3xl" />

              <div className="relative">
                <h3 className="font-[family-name:var(--font-poppins)] font-black text-2xl text-white mb-2">
                  Send us a message
                </h3>
                <p className="text-on-dark-muted text-sm mb-7">
                  Fill in the form below and we'll respond on WhatsApp within minutes.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white text-sm font-medium">Your Name</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Mary Wanjiru"
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-300 focus:bg-white/15 focus:border-teal-accent rounded-xl h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white text-sm font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. 0712 345 678"
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-300 focus:bg-white/15 focus:border-teal-accent rounded-xl h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white text-sm font-medium">Message / Order</Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="e.g. I'd like to order 5 refills of 20L water. When can I pick them up?"
                      rows={4}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-300 focus:bg-white/15 focus:border-teal-accent rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting || sent}
                    className="w-full h-12 rounded-xl bg-gradient-to-r from-teal-accent to-brand-500 hover:from-teal-400 hover:to-brand-600 text-white font-bold text-base shadow-lg shadow-brand-500/30 group disabled:opacity-70"
                  >
                    {sent ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" /> Opening WhatsApp...
                      </span>
                    ) : submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Preparing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send via WhatsApp
                        <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>

                  <p className="text-center text-xs text-on-dark-soft">
                    Clicking the button opens WhatsApp with your message pre-filled.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
