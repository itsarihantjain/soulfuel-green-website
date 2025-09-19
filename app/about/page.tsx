import Header from "@/components/header"
import Footer from "@/components/footer"
import FounderSection from "@/components/founder-section"
import MergedVisionMissionPurpose from "@/components/merged-vmp-section"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <MergedVisionMissionPurpose />
        <FounderSection />
      </main>
      <Footer />
    </>
  )
}
