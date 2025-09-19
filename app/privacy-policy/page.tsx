import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-10 min-h-[calc(100vh-160px)]">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          This Privacy Policy describes how Soulfuel Green Energy Pvt. Ltd. ("we," "us," or "our") collects, uses, and
          discloses your personal information when you visit, use, or make a purchase from soulfuel.com (the "Site") or
          otherwise communicate with us (collectively, the "Services"). For purposes of this Privacy Policy, "you" and
          "your" refers to you as the user of the Services, whether you are a customer, website visitor, or another
          individual whose information we have collected pursuant to this Privacy Policy.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We collect various types of information in connection with the Services. This includes information you
          directly provide to us, such as your name, email address, company name, and message when you use our contact
          form. We also collect information automatically when you access or use the Services, such as your IP address,
          browser type, operating system, and usage data.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          We use the information we collect to provide and improve our Services, respond to your inquiries, send you
          updates and marketing communications (with your consent), analyze website usage, and ensure the security of
          our Site.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
        <p className="text-gray-700 mb-4">
          Depending on your location, you may have certain rights regarding your personal information, such as the right
          to access, correct, or delete your data. Please contact us to exercise these rights.
        </p>
        <p className="text-gray-700 text-sm mt-8">
          *This is placeholder content. Please replace it with your actual, legally compliant Privacy Policy.*
        </p>
      </main>
      <Footer />
    </>
  )
}
