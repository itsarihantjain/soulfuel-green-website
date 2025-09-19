import { TrendingUp, DollarSign, Award, BarChart3 } from "lucide-react"

export default function BusinessPotentialSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: "230 MT",
      label: "Annual Biomass Surplus in India",
      description: "Massive untapped potential",
    },
    {
      icon: DollarSign,
      value: "₹50,000 Cr",
      label: "Government Subsidies Available",
      description: "Strong policy support",
    },
    {
      icon: Award,
      value: "₹2,400/ton",
      label: "Carbon Credit Value",
      description: "Additional revenue stream",
    },
    {
      icon: BarChart3,
      value: "25%",
      label: "Annual Market Growth",
      description: "Rapidly expanding sector",
    },
  ]

  return (
    <section className="py-10 bg-gradient-to-br from-slate-800 to-teal-900 text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">The Biomass Opportunity in India</h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            India's shift from coal to renewable energy creates unprecedented opportunities for sustainable biomass
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-lime-400/30"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-400 rounded-lg mb-4">
                <stat.icon className="h-8 w-8 text-gray-900" />
              </div>
              <div className="text-3xl font-bold mb-2 text-lime-400">{stat.value}</div>
              <div className="text-lg font-semibold mb-3">{stat.label}</div>
              <div className="text-gray-200">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-lime-400/30">
          <h3 className="text-2xl font-bold mb-8 text-center">Market Projections</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-lime-400 mb-2">2024</div>
              <div className="text-gray-200">Current Market Size: ₹15,000 Cr</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lime-400 mb-2">2027</div>
              <div className="text-gray-200">Projected Market: ₹35,000 Cr</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lime-400 mb-2">2030</div>
              <div className="text-gray-200">Target Market: ₹75,000 Cr</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
