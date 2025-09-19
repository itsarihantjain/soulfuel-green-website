import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"
import ContactFormTest from "@/components/contact-form-test"

export default function TestContactPage() {
  return (
    <>
      <Header />
      <main>
        <div className="py-10 bg-gray-50">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Form Testing</h1>
              <p className="text-lg text-gray-600">
                Test the contact form functionality, validation, and EmailJS integration.
              </p>
            </div>

            {/* Test Suite */}
            <ContactFormTest />

            {/* Divider */}
            <div className="my-12 border-t border-gray-300"></div>

            {/* Actual Contact Form for Testing */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Live Contact Form (For Testing)</h2>
              <div data-testid="contact-section">
                <ContactSection />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
