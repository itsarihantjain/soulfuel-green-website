import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicesHeroSection from "@/components/services-hero-section"
import OurOfferingsSection from "@/components/our-offerings-section"

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHeroSection />
        <OurOfferingsSection />
      </main>
      <Footer />
    </>
  )
}
