import Header from "@/components/header"
import Footer from "@/components/footer"
// import ImpactHeroSection from "@/components/impact-hero-section" // removed
import ReadyToCapitaliseSection from "@/components/ready-to-capitalise-section"
import SDGSection from "@/components/sdg-section"
import EnvironmentalImpactStatsSection from "@/components/environmental-impact-stats-section"
import GlobalEnvironmentImpactSection from "@/components/global-environment-impact-section"

export default function ImpactPage() {
  return (
    <>
      <Header />
      <main>
        {/* <ImpactHeroSection /> */} {/* hero highlight cards removed per request */}
        <EnvironmentalImpactStatsSection />
        <GlobalEnvironmentImpactSection />
        <SDGSection />
        <ReadyToCapitaliseSection />
      </main>
      <Footer />
    </>
  )
}
