import { Button } from "@/components/ui/button"
import { Package, Layers, Settings, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image" // Import Image

export default function DetailedServicesSection() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 sm:px-2.5">
        <div className="space-y-16">
          {/* Biomass Pellets */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Package className="h-8 w-8 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Biomass Pellets</h3>
              </div>
              <p className="text-base text-gray-600 mb-6 leading-normal">
                High-density, uniform pellets made from agricultural waste. Perfect for industrial boilers and power
                generation.
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-lime-400 mr-3" />
                    <span>Consistent 4,500+ kcal/kg</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-lime-400 mr-3" />
                    <span>Low moisture content</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-lime-400 mr-3" />
                    <span>Uniform size</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-lime-400 mr-3" />
                    <span>Clean burning</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Applications:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Power Plants</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Industrial Boilers</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Heating Systems</span>
                </div>
              </div>

              <Button asChild className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold">
                <Link href="/contact">Order Now</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/images/biomass-pellets.png"
                alt="Pile of biomass pellets"
                width={400} // Estimated width
                height={300} // Estimated height
                className="rounded-lg shadow-lg max-w-sm mx-auto"
              />
            </div>
          </div>

          {/* Biomass Briquettes */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <Layers className="h-8 w-8 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Biomass Briquettes</h3>
              </div>
              <p className="text-base text-gray-600 mb-6 leading-normal">
                Compressed biomass fuel blocks ideal for large-scale industrial applications with sustained energy
                output.
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-lime-400 mr-3" />
                    <span>High energy density</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-lime-400 mr-3" />
                    <span>Long burning time</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-lime-400 mr-3" />
                    <span>Consistent quality</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-lime-400 mr-3" />
                    <span>Cost-effective</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Applications:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Cement Industry</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Steel Plants</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Textile Mills</span>
                </div>
              </div>

              <Button asChild className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold">
                <Link href="/contact">Order Now</Link>
              </Button>
            </div>
            <div className="lg:order-1">
              <Image
                src="/images/biomass-briquettes.png"
                alt="Pile of biomass briquettes"
                width={400} // Estimated width
                height={300} // Estimated height
                className="rounded-lg shadow-lg max-w-sm mx-auto"
              />
            </div>
          </div>

          {/* Custom Solutions */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Settings className="h-8 w-8 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Custom Solutions</h3>
              </div>
              <p className="text-base text-gray-600 mb-6 leading-normal">
                Tailored biomass fuel solutions designed to meet specific industrial requirements and energy needs.
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-lime-400 mr-3" />
                    <span>Custom specifications</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-lime-400 mr-3" />
                    <span>Flexible delivery</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-lime-400 mr-3" />
                    <span>Technical support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-lime-400 mr-3" />
                    <span>Quality assurance</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Applications:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Manufacturing</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Food Processing</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Chemical Industry</span>
                </div>
              </div>

              <Button asChild className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold">
                <Link href="/contact">Order Now</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/images/custom.png"
                alt="Custom solutions"
                width={400} // Estimated width
                height={300} // Estimated height
                className="rounded-lg shadow-lg max-w-sm mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
