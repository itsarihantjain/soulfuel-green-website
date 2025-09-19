import Header from "@/components/header"
import Footer from "@/components/footer"
import BiomassComparisonSection from "@/components/biomass-comparison-section"
import WhyBiomassSection from "@/components/why-biomass-section"
import EnvironmentalBenefitsSection from "@/components/environmental-benefits-section"

export default function WhyBiomassPage() {
  return (
    <>
      <Header />
      <main>
        <WhyBiomassSection />
        <BiomassComparisonSection />
        <EnvironmentalBenefitsSection />
      </main>
      <Footer />
    </>
  )
}
