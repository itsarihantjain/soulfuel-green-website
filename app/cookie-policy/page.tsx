import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-10 min-h-[calc(100vh-160px)]">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
        <p className="text-gray-700 mb-4">
          This Cookie Policy explains what cookies are, how we use them, the types of cookies we use, and how you can
          manage your cookie preferences when you visit our website soulfuel.com ("Site").
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What are Cookies?</h2>
        <p className="text-gray-700 mb-4">
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They
          are widely used to make websites work more efficiently, as well as to provide information to the owners of the
          site.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Cookies</h2>
        <p className="text-gray-700 mb-4">
          We use cookies for various purposes, including:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>To ensure the proper functioning of our website.</li>
            <li>To analyze how visitors use our site, which helps us improve its design and content.</li>
            <li>To remember your preferences and settings.</li>
            <li>For security purposes.</li>
          </ul>
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of Cookies We Use</h2>
        <p className="text-gray-700 mb-4">
          We use both session cookies (which are temporary and disappear after you close your browser) and persistent
          cookies (which remain on your device for a set period or until you delete them). We also use first-party
          cookies (set by us) and third-party cookies (set by external services).
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Managing Your Cookie Preferences</h2>
        <p className="text-gray-700 mb-4">
          You can control and manage cookies in various ways. Most web browsers allow you to accept or decline cookies,
          or to delete cookies already set. Please refer to your browser's help section for more information. Be aware
          that disabling cookies may affect the functionality of this and many other websites that you visit.
        </p>
        <p className="text-gray-700 text-sm mt-8">
          *This is placeholder content. Please replace it with your actual, legally compliant Cookie Policy.*
        </p>
      </main>
      <Footer />
    </>
  )
}
