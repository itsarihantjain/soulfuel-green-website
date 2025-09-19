import { Button } from "@/components/ui/button"
import { TrendingUp, DollarSign, Target, Factory, Users, Leaf, MapPin } from "lucide-react"
import Link from "next/link"

export default function ReadyToCapitaliseSection() {
  const opportunities = [
    {
      icon: TrendingUp,
      title: "Market Growth",
      description: "25% annual growth in biomass energy sector",
    },
    {
      icon: DollarSign,
      title: "Investment Returns",
      description: "Attractive ROI with government incentives",
    },
    {
      icon: Target,
      title: "Strategic Position",
      description: "First-mover advantage in premium biomass market",
    },
  ]

  const impactStats = [
    {
      icon: Factory,
      value: "100+",
      label: "Tons processed Daily",
      description: "Agricultural waste converted into clean energy fuel",
    },
    {
      icon: Users,
      value: "20+",
      label: "Industrial Partners",
      description: "Manufacturing units powered by our biomass solutions",
    },
    {
      icon: Users,
      value: "5000+",
      label: "Farmers supported",
      description: "Rural communities benefiting from waste-to-energy programs",
    },
    {
      icon: Leaf,
      value: "75k+",
      label: "Tons Co2 Prevented",
      description: "Annual carbon emissions reduced through clean energy",
    },
    {
      icon: DollarSign,
      value: "₹20Cr+",
      label: "Revenue Generated",
      description: "Economic value created for farming communities",
    },
    {
      icon: MapPin,
      value: "7",
      label: "States covered",
      description: "Pan-India operations supporting diverse agricultural regions",
    },
  ]

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="lg:text-4xl font-bold text-gray-900 mb-4 text-2xl">
            Ready to Capitalise on India's Green Energy Future
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-normal">
            Join us in revolutionizing India's energy landscape with sustainable biomass solutions that deliver both
            significant environmental impact and strong financial returns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-green-300 transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-100 rounded-full mb-4">
                <opportunity.icon className="h-8 w-8 text-lime-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
              <p className="text-gray-600 leading-normal">{opportunity.description}</p>
            </div>
          ))}
        </div>

        {/* Integrated Impact Statistics */}
        <div className="text-center mb-12">
          <h3 className="lg:text-4xl font-bold text-gray-900 mb-4 text-2xl">Our Tangible Impact</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-normal">
            Measuring our contribution to sustainable energy, rural development, and environmental protection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-lime-300 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-100 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-lime-600" />
              </div>
              <div className="text-3xl font-bold text-lime-600 mb-1">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
              <p className="text-gray-600 leading-normal">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-lime-600 text-white rounded-lg p-8 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">4x</div>
              <div className="text-lime-100">Revenue Growth (2024-2027)</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹300 Cr</div>
              <div className="text-lime-100">Target Revenue by 2027</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25%</div>
              <div className="text-lime-100">Annual Market Growth</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-8 py-3 text-lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-8 py-3 text-lg">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
