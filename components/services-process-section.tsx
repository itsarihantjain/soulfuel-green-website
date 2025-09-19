import { CheckCircle, Lightbulb, Handshake, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesProcessSection() {
  const processSteps = [
    {
      step: "1",
      title: "Consultation & Needs Assessment",
      description:
        "We begin by understanding your specific energy requirements, current fuel consumption, and sustainability goals. Our experts provide a detailed analysis to identify the optimal biomass solution for your operations.",
      icon: Lightbulb,
    },
    {
      step: "2",
      title: "Customized Solution Design",
      description:
        "Based on the assessment, we design a tailored biomass fuel solution, including product type (pellets, briquettes, or custom blends), quantity, and delivery schedule, ensuring seamless integration with your existing infrastructure.",
      icon: CheckCircle,
    },
    {
      step: "3",
      title: "Quality-Assured Production",
      description:
        "Our state-of-the-art facilities convert agricultural waste into high-quality biomass fuels. Rigorous quality control ensures consistent calorific value, low moisture, and minimal ash content for superior performance.",
      icon: Handshake,
    },
    {
      step: "4",
      title: "Efficient Logistics & Delivery",
      description:
        "Leveraging our pan-India network, we ensure timely and reliable delivery of biomass fuel directly to your site. Our logistics team manages the entire supply chain, from sourcing to last-mile delivery, for uninterrupted operations.",
      icon: Truck,
    },
    {
      step: "5",
      title: "Ongoing Support & Optimization",
      description:
        "Our partnership extends beyond delivery. We provide continuous technical support, performance monitoring, and assistance with ESG reporting and carbon credit documentation to help you maximize benefits and achieve sustainability targets.",
      icon: CheckCircle,
    },
  ]

  return (
    <section id="services" className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Solutions Process</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-normal">
            Experience a seamless transition to sustainable energy with our end-to-end biomass fuel solutions, designed
            for industrial excellence and environmental responsibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-green-300 transition-all duration-300 flex items-center text-center flex-col gap-0 px-3 py-3"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-green-600">{step.step}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-normal">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-8 py-3">
            <Link href="/contact">Get a Custom Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
