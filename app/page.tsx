import Header from "@/components/header"
import HeroCarouselSection from "@/components/hero-carousel-section" // Restored to HeroCarouselSection
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroCarouselSection /> {/* Restored to HeroCarouselSection */}
        {/* Other sections will now be on their own pages */}
      </main>
      <Footer />
    </div>
  )
}
