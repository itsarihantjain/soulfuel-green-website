import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-10 min-h-[calc(100vh-160px)]">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-700 mb-4">
          Welcome to Soulfuel Green Energy Pvt. Ltd. These Terms of Service ("Terms") govern your use of our website
          located at soulfuel.com (the "Site") and any related services provided by Soulfuel Green Energy Pvt. Ltd.
          (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms. If
          you disagree with any part of the terms, then you may not access the Services.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Use of the Site</h2>
        <p className="text-gray-700 mb-4">
          You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, restrict
          or inhibit anyone else's use and enjoyment of the Site. Prohibited behavior includes harassing or causing
          distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the
          normal flow of dialogue within the Site.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intellectual Property</h2>
        <p className="text-gray-700 mb-4">
          All content on the Site, including text, graphics, logos, images, and software, is the property of Soulfuel
          Green Energy Pvt. Ltd. or its content suppliers and protected by intellectual property laws. You may not
          reproduce, distribute, modify, or create derivative works of any content without our express written consent.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          Soulfuel Green Energy Pvt. Ltd. will not be liable for any direct, indirect, incidental, special,
          consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or
          other intangible losses, resulting from (i) your access to or use of or inability to access or use the
          Services; (ii) any conduct or content of any third party on the Services; (iii) any content obtained from the
          Services; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on
          warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been
          informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of
          its essential purpose.
        </p>
        <p className="text-gray-700 text-sm mt-8">
          *This is placeholder content. Please replace it with your actual, legally compliant Terms of Service.*
        </p>
      </main>
      <Footer />
    </>
  )
}
