import { CheckCircle, X, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button" // Import Button
import Link from "next/link" // Import Link

export default function BiomassComparisonSection() {
  const comparisonData = [
    {
      factor: "Environmental Impact",
      biomass: {
        rating: "excellent",
        text: "Carbon neutral, reduces emissions by 85%",
        icon: CheckCircle,
      },
      coal: {
        rating: "poor",
        text: "High CO₂ emissions, air pollution",
        icon: X,
      },
      diesel: {
        rating: "poor",
        text: "High emissions, fossil fuel dependency",
        icon: X,
      },
      naturalGas: {
        rating: "moderate",
        text: "Lower emissions than coal, still fossil fuel",
        icon: AlertTriangle,
      },
    },
    {
      factor: "Cost Stability",
      biomass: {
        rating: "excellent",
        text: "Stable pricing, local sourcing",
        icon: CheckCircle,
      },
      coal: {
        rating: "moderate",
        text: "Price volatility, import dependency",
        icon: AlertTriangle,
      },
      diesel: {
        rating: "poor",
        text: "High price volatility, expensive",
        icon: X,
      },
      naturalGas: {
        rating: "moderate",
        text: "Moderate volatility, infrastructure dependent",
        icon: AlertTriangle,
      },
    },
    {
      factor: "Availability",
      biomass: {
        rating: "excellent",
        text: "Abundant agricultural waste in India",
        icon: CheckCircle,
      },
      coal: {
        rating: "good",
        text: "Available but finite resource",
        icon: AlertTriangle,
      },
      diesel: {
        rating: "good",
        text: "Widely available but imported",
        icon: AlertTriangle,
      },
      naturalGas: {
        rating: "moderate",
        text: "Limited domestic production",
        icon: AlertTriangle,
      },
    },
    {
      factor: "Energy Efficiency",
      biomass: {
        rating: "excellent",
        text: "High calorific value, consistent output",
        icon: CheckCircle,
      },
      coal: {
        rating: "good",
        text: "High energy content but polluting",
        icon: AlertTriangle,
      },
      diesel: {
        rating: "excellent",
        text: "High efficiency but expensive",
        icon: CheckCircle,
      },
      naturalGas: {
        rating: "excellent",
        text: "High efficiency, clean burning",
        icon: CheckCircle,
      },
    },
    {
      factor: "Storage & Handling",
      biomass: {
        rating: "excellent",
        text: "Easy storage, safe handling",
        icon: CheckCircle,
      },
      coal: {
        rating: "moderate",
        text: "Requires special storage, dust issues",
        icon: AlertTriangle,
      },
      diesel: {
        rating: "moderate",
        text: "Careful storage, fire risk",
        icon: AlertTriangle,
      },
      naturalGas: {
        rating: "poor",
        text: "Complex storage, safety concerns",
        icon: X,
      },
    },
    {
      factor: "Government Support",
      biomass: {
        rating: "excellent",
        text: "Strong policy support, subsidies",
        icon: CheckCircle,
      },
      coal: {
        rating: "poor",
        text: "Phasing out, carbon taxes",
        icon: X,
      },
      diesel: {
        rating: "poor",
        text: "No incentives, high taxes",
        icon: X,
      },
      naturalGas: {
        rating: "moderate",
        text: "Some support for transition",
        icon: AlertTriangle,
      },
    },
  ]

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case "excellent":
        return "text-green-600 bg-green-50"
      case "good":
        return "text-green-600 bg-green-50"
      case "moderate":
        return "text-yellow-600 bg-yellow-50"
      case "poor":
        return "text-red-600 bg-red-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const getRatingText = (rating: string) => {
    switch (rating) {
      case "excellent":
        return "✅ EXCELLENT"
      case "good":
        return "✅ GOOD"
      case "moderate":
        return "⚠ MODERATE"
      case "poor":
        return "❌ POOR"
      default:
        return ""
    }
  }

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            <div className="flex items-center justify-center mb-3">
              <span className="text-green-600">🌿 BIOMASS VS TRADITIONAL FUELS</span>
            </div>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-normal">
            Compare biomass fuel with traditional energy sources across key performance indicators
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-16 overflow-x-auto">
          <div className="min-w-full bg-white rounded-lg shadow-lg border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
                  <th className="text-left py-4 px-6 font-semibold">Comparison Factor</th>
                  <th className="text-left py-4 px-6 font-semibold">Biomass</th>
                  <th className="text-left py-4 px-6 font-semibold">Coal</th>
                  <th className="text-left py-4 px-6 font-semibold">Diesel</th>
                  <th className="text-left py-4 px-6 font-semibold">Natural Gas</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-4 px-6 font-semibold text-gray-900">{row.factor}</td>
                    <td className="py-4 px-6">
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${getRatingColor(row.biomass.rating)}`}
                      >
                        {getRatingText(row.biomass.rating)}
                      </div>
                      <div className="text-sm text-gray-600">{row.biomass.text}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${getRatingColor(row.coal.rating)}`}
                      >
                        {getRatingText(row.coal.rating)}
                      </div>
                      <div className="text-sm text-gray-600">{row.coal.text}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${getRatingColor(row.diesel.rating)}`}
                      >
                        {getRatingText(row.diesel.rating)}
                      </div>
                      <div className="text-sm text-gray-600">{row.diesel.text}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${getRatingColor(row.naturalGas.rating)}`}
                      >
                        {getRatingText(row.naturalGas.rating)}
                      </div>
                      <div className="text-sm text-gray-600">{row.naturalGas.text}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* New CTA for Our Services */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Explore Our Solutions?</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Discover how Soulfuel's comprehensive biomass products and services can meet your industrial energy needs.
          </p>
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 text-lg">
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
