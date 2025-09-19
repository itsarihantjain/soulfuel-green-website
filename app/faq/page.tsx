import Header from "@/components/header"
import Footer from "@/components/footer"
import FAQHeroSection from "@/components/faq-hero-section"
import FAQSection from "@/components/faq-section"

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <FAQHeroSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
