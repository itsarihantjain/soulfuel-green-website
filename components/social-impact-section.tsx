import { Users, TrendingUp, Home } from 'lucide-react'
import Image from "next/image"

export default function SocialImpactSection() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Empowering Communities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission extends beyond clean energy to creating sustainable livelihoods and strengthening rural
            economies.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative h-96 lg:h-[500px]">
            <Image
              src="/images/farmer-partnership.jpeg"
              alt="Soulfuel representative shaking hands with a farmer, representing our direct partnership approach"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div className="max-w-2xl text-white">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                    Direct Partnership with Farmers
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-200 mb-6">
                    Building trust through fair pricing, transparent processes, and long-term relationships that benefit entire farming communities.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <span className="text-lime-400 font-bold text-lg">500+</span>
                      <span className="text-white ml-2">Farmers</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <span className="text-lime-400 font-bold text-lg">₹15L+</span>
                      <span className="text-white ml-2">Annual Payments</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <span className="text-lime-400 font-bold text-lg">3 States</span>
                      <span className="text-white ml-2">Coverage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Transforming Agricultural Waste into Opportunity</h3>
            <p className="text-gray-600 mb-4">
              By purchasing agricultural residue directly from farmers, we provide an additional income stream while
              preventing harmful stubble burning practices.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-lime-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Direct Farmer Partnership</h4>
                  <p className="text-gray-600">Working with 500+ farmers across Punjab, Haryana, and UP</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-lime-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Additional Income</h4>
                  <p className="text-gray-600">₹2,000-4,000 per acre additional income from crop residue</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mr-4">
                  <Home className="h-6 w-6 text-lime-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Rural Development</h4>
                  <p className="text-gray-600">Supporting local economies and reducing urban migration</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-lime-50 to-cyan-50 p-8 rounded-2xl">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Impact Metrics</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700">Farmers Supported</span>
                <span className="text-2xl font-bold text-lime-600">500+</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700">States Covered</span>
                <span className="text-2xl font-bold text-cyan-600">3</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700">Annual Payments</span>
                <span className="text-2xl font-bold text-lime-600">₹15L+</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700">Stubble Burning Reduced</span>
                <span className="text-2xl font-bold text-green-600">85%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-lime-600 text-white rounded-lg p-8 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">1:1</div>
              <div className="text-lime-100">Each 1 ton = 1 farmer supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹15L+</div>
              <div className="text-lime-100">Total farmer payments annually</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-lime-100">Reduction in stubble burning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
