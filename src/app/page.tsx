import { SiteHeader } from "@/components/site/site-header"
import { HeroSection } from "@/components/site/hero-section"
import { AboutSection } from "@/components/site/about-section"
import { ServicesSection } from "@/components/site/services-section"
import { WhySection } from "@/components/site/why-section"
import { ProcessSection } from "@/components/site/process-section"
import { ImpactSection } from "@/components/site/impact-section"
import { StorySection } from "@/components/site/story-section"
import { CtaBanner } from "@/components/site/cta-banner"
import { LocationsSection } from "@/components/site/locations-section"
import { ContactSection } from "@/components/site/contact-section"
import { SiteFooter } from "@/components/site/site-footer"
import { WhatsAppFloat } from "@/components/site/whatsapp-float"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhySection />
        <ProcessSection />
        <StorySection />
        <ImpactSection />
        <CtaBanner />
        <LocationsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
