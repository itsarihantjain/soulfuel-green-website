import { Flame, DollarSign, Leaf, Zap, BadgeCheck, ShieldCheck } from "lucide-react"

export default function WhyBiomassSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "30-40% cheaper than coal with better efficiency",
    },
    {
      icon: Flame,
      title: "High Combustion",
      description: "Consistent burn rate with minimal ash residue",
    },
    {
      icon: Leaf,
      title: "Zero Carbon",
      description: "Carbon neutral fuel cycle with no net emissions",
    },
    {
      icon: Zap,
      title: "High Energy",
      description: "Superior calorific value compared to traditional fuels",
    },
    {
      icon: BadgeCheck,
      title: "Environmental Leader",
      description: "85% reduction in CO₂ emissions compared to coal",
    },
    {
      icon: ShieldCheck,
      title: "Future Proof",
      description: "Strong government support and policy backing",
    },
  ]

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 text-center text-balance">
            Why Choose Biomass Fuel?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-normal text-center text-pretty">
            Biomass pellets are compressed organic materials that provide clean, renewable energy while supporting
            agricultural communities.
          </p>
        </div>

        {/* Cards grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/4 max-w-sm mx-auto p-4 flex flex-col items-center text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-3">
                <benefit.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center text-balance">{benefit.title}</h3>
              <p className="text-gray-600 leading-normal text-center text-pretty max-w-prose mx-auto">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
