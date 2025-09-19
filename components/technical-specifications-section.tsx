"use client"

import { useState } from "react"
import { CheckCircle, Flame, Leaf, Zap, Shield, Truck, Cog, Box } from "lucide-react"
import { Button } from "@/components/ui/button" // Import Button
import Link from "next/link" // Import Link

export default function TechnicalSpecificationsSection() {
  const [activeTab, setActiveTab] = useState("pellets")

  const pelletSpecs = [
    { property: "Calorific Value", value: "3,400 – 4,400 kcal/kg" },
    { property: "Moisture Content", value: "< 8%" },
    { property: "Ash Content", value: "< 3%" },
    { property: "Diameter", value: "6–8 mm" },
    { property: "Length", value: "15–30 mm" },
    { property: "Bulk Density", value: "650–700 kg/m³" },
    { property: "Chlorine Content", value: "< 0.1%" },
    { property: "Sulfur Content", value: "< 0.1%" },
  ]

  const briquetteSpecs = [
    { property: "Calorific Value", value: "3,400 – 4,400 kcal/kg" },
    { property: "Moisture Content", value: "< 10%" },
    { property: "Ash Content", value: "< 5%" },
    { property: "Diameter", value: "50–90 mm" },
    { property: "Length", value: "200–300 mm" },
    { property: "Bulk Density", value: "800–900 kg/m³" },
    { property: "Chlorine Content", value: "< 0.1%" },
    { property: "Sulfur Content", value: "< 0.1%" },
  ]

  const pelletFeatures = [
    "Uniform size and shape for consistent burning",
    "Low moisture content for efficient combustion",
    "High calorific value for maximum energy output",
    "Minimal ash production for easy maintenance",
    "Eco-friendly with zero harmful emissions",
    "Easy storage and handling",
  ]

  const briquetteFeatures = [
    "Long burning time for sustained heat",
    "High density for maximum energy per unit",
    "Smokeless burning with minimal emissions",
    "Easy ignition and consistent flame",
    "Cost-effective alternative to coal",
    "100% natural with no chemical additives",
  ]

  const processSteps = [
    {
      number: "1",
      title: "Raw Material Collection",
      description:
        "Collection of agricultural waste from farms across India, including rice husks, wheat straw, and corn stalks.",
      icon: Leaf,
    },
    {
      number: "2",
      title: "Quality Assessment",
      description: "Thorough inspection for moisture content, contamination, and suitability for biomass conversion.",
      icon: Shield,
    },
    {
      number: "3",
      title: "Pre-processing",
      description: "Cleaning, crushing, and sizing of raw materials to prepare them for the conversion process.",
      icon: Cog,
    },
    {
      number: "4",
      title: "Drying & Conditioning",
      description: "Controlled drying to achieve optimal moisture levels for efficient biomass fuel production.",
      icon: Flame,
    },
    {
      number: "5",
      title: "Pelletizing/Briquetting",
      description: "Compression of processed materials into uniform pellets or briquettes using advanced machinery.",
      icon: Zap,
    },
    {
      number: "6",
      title: "Quality Control",
      description: "Rigorous testing for calorific value, ash content, and durability to ensure premium quality.",
      icon: CheckCircle,
    },
    {
      number: "7",
      title: "Packaging & Storage",
      description: "Professional packaging in moisture-resistant bags and storage in controlled environments.",
      icon: Box,
    },
    {
      number: "8",
      title: "Distribution",
      description: "Efficient delivery network ensuring timely supply to customers across India.",
      icon: Truck,
    },
  ]

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            <div className="flex items-center justify-center mb-3">
              <span className="text-green-600">🔧 TECHNICAL SPECIFICATIONS</span>
            </div>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-normal">
            High-quality biomass fuel products with consistent specifications and superior performance
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("pellets")}
              className={`px-8 py-3 rounded-md font-semibold transition-all ${
                activeTab === "pellets" ? "bg-green-500 text-white shadow-md" : "text-gray-600 hover:text-green-600"
              }`}
            >
              🌾 Biomass Pellets
            </button>
            <button
              onClick={() => setActiveTab("briquettes")}
              className={`px-8 py-3 rounded-md font-semibold transition-all ${
                activeTab === "briquettes" ? "bg-green-500 text-white shadow-md" : "text-gray-600 hover:text-green-600"
              }`}
            >
              🔥 Biomass Briquettes
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "pellets" && (
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Specifications Table */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
                <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-green-500 text-white">
                        <th className="text-left py-4 px-6 font-semibold">Property</th>
                        <th className="text-left py-4 px-6 font-semibold">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pelletSpecs.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="py-3 px-6 text-gray-700 font-medium">{spec.property}</td>
                          <td className="py-3 px-6 text-gray-900 font-semibold">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                <div className="space-y-4">
                  {pelletFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-lime-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "briquettes" && (
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Specifications Table */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
                <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-green-500 text-white">
                        <th className="text-left py-4 px-6 font-semibold">Property</th>
                        <th className="text-left py-4 px-6 font-semibold">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {briquetteSpecs.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="py-3 px-6 text-gray-700 font-medium">{spec.property}</td>
                          <td className="py-3 px-6 text-gray-900 font-semibold">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                <div className="space-y-4">
                  {briquetteFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-lime-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Process Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🧱 STEP-BY-STEP PROCESS</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-normal">
              Our comprehensive 8-step process ensures consistent quality and sustainable production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center mb-3">
                    {/* Step Number Circle */}
                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-3">
                      {step.number}
                    </div>
                    {/* Step Icon Square */}
                    <div className="w-10 h-10 bg-lime-50 border border-lime-300 rounded-lg flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-lime-600" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-normal">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New CTA for Impact Page */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">See Our Impact</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Learn how Soulfuel is making a difference in environmental sustainability and community empowerment.
          </p>
          <Button asChild className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-8 py-3 text-lg">
            <Link href="/impact">Explore Our Impact</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
