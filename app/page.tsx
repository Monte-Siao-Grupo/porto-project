import HeroSection from "@/components/hero-section"
import PricingTable from "@/components/pricing-table"
import BenefitsSection from "@/components/benefits-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

// import Header from "@/components/header"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* <Header /> */}
      <HeroSection />
      <PricingTable />
      <BenefitsSection />
      <TestimonialsSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

