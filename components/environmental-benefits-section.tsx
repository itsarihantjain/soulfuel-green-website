import { Flame, Wind } from "lucide-react"

export default function EnvironmentalBenefitsSection() {
  return (
    <section className="py-8 bg-green-50">
      {" "}
      {/* Reduced padding */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          {" "}
          {/* Reduced margin-bottom */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Environmental & Social Benefits</h2>{" "}
          {/* Reduced margin-bottom */}
          <p className="text-base text-gray-600 max-w-4xl mx-auto leading-normal">
            Our biomass solutions directly address the critical issue of agricultural stubble burning, which is a major
            contributor to air pollution in North India.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {" "}
          {/* Changed to flex column for single content block */}
          <div className="max-w-3xl mx-auto">
            {" "}
            {/* Added max-width for content */}
            <div className="flex items-center mb-3">
              {" "}
              {/* Reduced margin-bottom */}
              <Flame className="h-8 w-8 text-green-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Preventing Stubble Burning</h3>
            </div>
            <p className="text-base text-gray-600 mb-4 leading-normal">
              Our biomass solutions directly address the critical issue of agricultural stubble burning, which is a
              major contributor to air pollution in North India.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Wind className="h-6 w-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Air Quality Improvement</h4>
                  <p className="text-gray-600 leading-normal">
                    By converting crop residue into biomass fuel, we prevent harmful emissions from field burning,
                    significantly improving regional air quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Wind className="h-6 w-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Farmer Income Generation</h4>
                  <p className="text-gray-600 leading-normal">
                    Farmers receive fair compensation for their agricultural waste, creating an additional revenue
                    stream while solving environmental challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Wind className="h-6 w-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Soil Health Protection</h4>
                  <p className="text-gray-600 leading-normal">
                    Eliminating stubble burning preserves soil nutrients and microorganisms, maintaining long-term
                    agricultural productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
