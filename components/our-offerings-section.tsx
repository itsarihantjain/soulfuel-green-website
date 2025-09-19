"use client"

import { useState, useEffect, Fragment } from "react"
import {
  Package,
  Layers,
  Settings,
  Wrench,
  Factory,
  Truck,
  Building,
  Cog,
  ChevronDown,
  ChevronUp,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function OurOfferingsSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }

  useEffect(() => {
    if (expandedService === null) return
    const el = document.getElementById(`service-panel-${expandedService}`)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [expandedService])

  const services = [
    {
      icon: Package,
      title: "Biomass Pellets",
      description: "High-density uniform pellets from agricultural waste",
      keyFeatures: ["Consistent 4,500+ kcal/kg", "Low moisture content", "Uniform size", "Clean burning"],
      applications: ["Power Plants", "Industrial Boilers", "Heating Systems"],
      technicalSpecs: [
        { property: "Calorific Value", value: "3,400 – 4,400 kcal/kg" },
        { property: "Moisture Content", value: "< 8%" },
        { property: "Ash Content", value: "< 3%" },
        { property: "Diameter", value: "6–8 mm" },
      ],
      image: "/biomass-pellets.png",
    },
    {
      icon: Layers,
      title: "Biomass Briquettes",
      description: "Compressed fuel blocks for large-scale industrial applications",
      keyFeatures: ["High energy density", "Long burning time", "Consistent quality", "Cost-effective"],
      applications: ["Cement Industry", "Steel Plants", "Textile Mills"],
      technicalSpecs: [
        { property: "Calorific Value", value: "3,400 – 4,400 kcal/kg" },
        { property: "Moisture Content", value: "< 10%" },
        { property: "Ash Content", value: "< 5%" },
        { property: "Diameter", value: "50–90 mm" },
      ],
      image: "/biomass-briquettes.png",
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Tailored biomass fuel solutions for specific needs",
      keyFeatures: ["Custom specifications", "Flexible delivery", "Technical support", "Quality assurance"],
      applications: ["Manufacturing", "Food Processing", "Chemical Industry"],
      technicalSpecs: [
        { property: "Customization", value: "Based on requirements" },
        { property: "Delivery", value: "Flexible scheduling" },
        { property: "Support", value: "24/7 technical assistance" },
        { property: "Quality", value: "Guaranteed standards" },
      ],
      image: "/custom-biomass-solutions.png",
    },
    {
      icon: Wrench,
      title: "Consultancy for Pellet Manufacturing Plant Setup",
      description: "Expert guidance for setting up biomass pellet production facilities",
    },
    {
      icon: Factory,
      title: "Contract Manufacturing",
      description: "End-to-end manufacturing services for biomass fuel production",
    },
    {
      icon: Cog,
      title: "Boiler Operations and Maintenance",
      description: "Comprehensive boiler management and maintenance services",
    },
    {
      icon: Truck,
      title: "Biomass Supply Chain Management",
      description: "Complete supply chain solutions from sourcing to delivery",
    },
    {
      icon: Building,
      title: "BOOT (Build, Own, Operate & Transfer) – Energy Rental Model",
      description: "Complete energy solutions with flexible ownership models",
    },
  ]

  const processSteps = [
    {
      number: "1",
      title: "Raw Material Collection",
      description:
        "Collection of agricultural waste from farms across India, including rice husks, wheat straw, and corn stalks.",
    },
    {
      number: "2",
      title: "Quality Assessment",
      description: "Thorough inspection for moisture content, contamination, and suitability for biomass conversion.",
    },
    {
      number: "3",
      title: "Pre-processing",
      description: "Cleaning, crushing, and sizing of raw materials to prepare them for the conversion process.",
    },
    {
      number: "4",
      title: "Drying & Conditioning",
      description: "Controlled drying to achieve optimal moisture levels for efficient biomass fuel production.",
    },
    {
      number: "5",
      title: "Pelletizing/Briquetting",
      description: "Compression of processed materials into uniform pellets or briquettes using advanced machinery.",
    },
    {
      number: "6",
      title: "Quality Control",
      description: "Rigorous testing for calorific value, ash content, and durability to ensure premium quality.",
    },
    {
      number: "7",
      title: "Packaging & Storage",
      description: "Professional packaging in moisture-resistant bags and storage in controlled environments.",
    },
    {
      number: "8",
      title: "Distribution",
      description: "Efficient delivery network ensuring timely supply to customers across India.",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => (
            <Fragment key={index}>
              <div className="w-full">
                <div
                  className={`
                    relative bg-white p-6 rounded-xl border-2 transition-all duration-300 h-full flex flex-col
                    ${index < 3 ? "cursor-pointer hover:shadow-xl hover:border-green-400 hover:-translate-y-1" : "hover:shadow-lg"}
                    ${expandedService === index ? "border-green-400 shadow-xl ring-2 ring-green-100" : "border-gray-200 hover:border-gray-300"}
                    group
                  `}
                  onClick={() => (index < 3 ? toggleService(index) : undefined)}
                  aria-expanded={expandedService === index}
                  role={index < 3 ? "button" : undefined}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl mb-4 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-green-600" />
                  </div>

                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 flex-1 pr-2 group-hover:text-green-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    {index < 3 && (
                      <div className="flex-shrink-0 mt-1">
                        {expandedService === index ? (
                          <ChevronUp className="h-5 w-5 text-green-600 transition-transform duration-300" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-green-600 transition-transform duration-300 group-hover:translate-y-0.5" />
                        )}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{service.description}</p>

                  {index < 3 && (
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <span className="text-xs text-green-600 font-medium">Click to view details</span>
                    </div>
                  )}
                </div>
              </div>

              {expandedService === index && index < 3 && (
                <div id={`service-panel-${index}`} className="col-span-full -mx-4 sm:-mx-6 lg:-mx-8">
                  <div className="bg-white border-2 border-green-200 rounded-2xl p-6 md:p-8 shadow-2xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => setExpandedService(null)}
                        className="shrink-0 border-gray-300 hover:border-gray-400"
                        aria-label="Close details"
                      >
                        Close
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                            <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                            Key Features
                          </h4>
                          <ul className="space-y-4">
                            {service.keyFeatures?.map((feature, idx) => (
                              <li key={idx} className="flex items-start group">
                                <CheckCircle className="h-5 w-5 text-lime-400 mr-3 flex-shrink-0 mt-0.5 group-hover:text-lime-500 transition-colors" />
                                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-6">Applications</h4>
                          <div className="flex flex-wrap gap-3">
                            {service.applications?.map((app, idx) => (
                              <span
                                key={idx}
                                className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:from-green-200 hover:to-green-300 transition-all duration-300 cursor-default"
                              >
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Button
                          asChild
                          className="bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-gray-900 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                        >
                          <a href="/contact">Order Now</a>
                        </Button>
                      </div>

                      <div className="space-y-8">
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-inner">
                          <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                            <h4 className="text-lg font-semibold text-white">Technical Specifications</h4>
                          </div>
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <tbody>
                                {service.technicalSpecs?.map((spec, idx) => (
                                  <tr
                                    key={idx}
                                    className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-green-50 transition-colors duration-200`}
                                  >
                                    <td className="py-4 px-6 text-gray-700 font-medium text-sm border-b border-gray-200">
                                      {spec.property}
                                    </td>
                                    <td className="py-4 px-6 text-gray-900 font-semibold text-sm border-b border-gray-200">
                                      {spec.value}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {service.image && (
                          <div className="w-full">
                            <div className="relative overflow-hidden rounded-xl shadow-lg group">
                              <Image
                                src={service.image || "/placeholder.svg?height=200&width=300&query=biomass%20product"}
                                alt={service.title}
                                width={300}
                                height={200}
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="mt-20 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Step-by-Step Process</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 8-step process ensures consistent quality and sustainable production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 h-full group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:from-green-600 group-hover:to-green-700 transition-all duration-300">
                      {step.number}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-gray-900 font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            <Link href="/contact">Get Custom Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
