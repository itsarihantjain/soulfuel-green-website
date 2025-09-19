import { Building2, TrendingDown, Leaf, Award } from "lucide-react"

export default function CaseStudySection() {
  return (
    <section id="case-studies" className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Success Story: Textile Industry Partnership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How we helped a leading textile manufacturer reduce costs and achieve their sustainability goals.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">ABC Textiles Ltd.</h3>
                  <p className="text-gray-600">Leading textile manufacturer, Gujarat</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-600">
                    Rising coal costs and pressure to meet ESG compliance requirements for international buyers.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-600">
                    Switched to our biomass pellets for their boiler operations, with guaranteed supply and quality
                    consistency.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 3-month pilot program with 500 tons</li>
                    <li>• Boiler efficiency optimization</li>
                    <li>• Staff training and support</li>
                    <li>• Monthly performance reviews</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-lime-50 p-8 lg:p-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Results Achieved</h4>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-lime-100 rounded-lg flex items-center justify-center mr-4">
                    <TrendingDown className="h-6 w-6 text-lime-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-lime-600 mb-1">25%</div>
                    <div className="text-gray-900 font-semibold">Cost Reduction</div>
                    <div className="text-gray-600">Annual fuel cost savings</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-lime-100 rounded-lg flex items-center justify-center mr-4">
                    <Leaf className="h-6 w-6 text-lime-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-lime-600 mb-1">2,400 tons</div>
                    <div className="text-gray-900 font-semibold">CO₂ Reduced</div>
                    <div className="text-gray-600">Annual carbon footprint</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-lime-100 rounded-lg flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-lime-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-lime-600 mb-1">100%</div>
                    <div className="text-gray-900 font-semibold">ESG Compliance</div>
                    <div className="text-gray-600">Sustainability targets met</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-white rounded-lg">
                <blockquote className="text-gray-700 italic">
                  "Soulfuel's biomass pellets have transformed our operations. We've achieved significant cost savings
                  while meeting our sustainability commitments to international buyers."
                </blockquote>
                <div className="mt-4 text-sm text-gray-600">— Rajesh Kumar, Operations Director, ABC Textiles Ltd.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center space-x-8 bg-white p-6 rounded-lg shadow-lg">
            <div>
              <div className="text-2xl font-bold text-gray-900">18 months</div>
              <div className="text-gray-600">Partnership duration</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-gray-900">3,000+ tons</div>
              <div className="text-gray-600">Total supply delivered</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-gray-900">99.8%</div>
              <div className="text-gray-600">On-time delivery rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
