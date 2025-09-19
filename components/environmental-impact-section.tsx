import { Leaf, Wind, TreePine, Gauge } from "lucide-react"
import Image from "next/image" // Import Image

export default function EnvironmentalImpactSection() {
  const impacts = [
    {
      icon: Leaf,
      value: "2.5 tons",
      label: "CO₂ Saved per Ton",
      description: "Compared to coal combustion",
    },
    {
      icon: Wind,
      value: "85%",
      label: "PM2.5 Reduction",
      description: "Cleaner air quality",
    },
    {
      icon: TreePine,
      value: "90%",
      label: "Stubble Burning Reduced",
      description: "In partner regions",
    },
    {
      icon: Gauge,
      value: "4.2x",
      label: "Climate Resilience",
      description: "Better than fossil fuels",
    },
  ]

  return (
    <section id="impact" className="py-20 bg-lime-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Environmental Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every ton of biomass pellets contributes to a cleaner environment and helps combat climate change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {impacts.map((impact, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-100 rounded-full mb-3">
                <impact.icon className="h-8 w-8 text-lime-600" />
              </div>
              <div className="text-3xl font-bold text-lime-600 mb-1">{impact.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{impact.label}</div>
              <div className="text-gray-600">{impact.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Carbon Footprint Visualization</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Coal Emissions</span>
                    <span className="text-red-600 font-semibold">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-red-500 h-4 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Natural Gas</span>
                    <span className="text-orange-600 font-semibold">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-orange-500 h-4 rounded-full w-3/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Biomass Pellets</span>
                    <span className="text-green-600 font-semibold">0%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-green-500 h-4 rounded-full w-0"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Environmental impact visualization"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
