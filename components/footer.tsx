import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const footerLinks = {
    company: [{ name: "About Us", href: "/about" }],
    services: [
      { name: "Biomass Pellets", href: "/services" },
      { name: "B2B Supply", href: "/services" },
      { name: "Logistics", href: "/services" },
    ],
    support: [
      { name: "Get Quote", href: "/contact" },
      { name: "Technical Support", href: "/contact" },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {" "}
          {/* Adjusted grid columns */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Link href="/" className="flex items-center p-3 rounded-lg bg-white border border-gray-200">
                <Image
                  src="/soulfuel-logo.png"
                  alt="Soulfuel Green Energy"
                  width={140}
                  height={45}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming agricultural waste into clean energy solutions for a sustainable future. Empowering farmers,
              industries, and communities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-lime-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-lime-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Removed Resources Section */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-lime-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-lime-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Soulfuel Green Energy Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-lime-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-lime-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-lime-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
