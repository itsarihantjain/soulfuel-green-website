import { Zap, TrendingUp, Recycle, Leaf, TreePine } from 'lucide-react'

export default function SDGSection() {
  const sdgs = [
    {
      icon: Zap,
      number: "SDG 7",
      title: "Affordable & Clean Energy",
      description: "Providing accessible renewable energy solutions for industrial needs",
    },
    {
      icon: TrendingUp,
      number: "SDG 8",
      title: "Decent Work & Economic Growth",
      description: "Creating employment opportunities in rural and industrial sectors",
    },
    {
      icon: Recycle,
      number: "SDG 12",
      title: "Responsible Consumption",
      description: "Converting waste into valuable resources through circular economy",
    },
    {
      icon: Leaf,
      number: "SDG 13",
      title: "Climate Action",
      description: "Reducing greenhouse gas emissions through clean energy production",
    },
    {
      icon: TreePine,
      number: "SDG 15",
      title: "Life on Land",
      description: "Preventing harmful agricultural burning and promoting soil health",
    },
  ]

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="lg:text-4xl font-bold text-gray-900 mb-4 text-2xl">Contributing to UN Sustainable Development Goals</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-normal">
            Our biomass solutions directly contribute to achieving global sustainability targets and creating positive impact across multiple UN SDGs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sdgs.map((sdg, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-lime-300 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-100 rounded-lg mb-4">
                <sdg.icon className="h-8 w-8 text-lime-600" />
              </div>
              <div className="text-lime-600 font-bold text-lg mb-1">{sdg.number}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{sdg.title}</h3>
              <p className="text-gray-600 leading-normal">{sdg.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Impact Summary</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-normal">
              Through our biomass solutions, we're contributing to multiple UN Sustainable Development Goals while creating measurable positive impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-lime-600 mb-2">5</div>
              <div className="text-gray-700 font-medium">SDGs Addressed</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold mb-2 text-lime-600">85%</div>
              <div className="text-gray-700 font-medium">CO₂ Reduction</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-lime-600 mb-2">5000+</div>
              <div className="text-gray-700 font-medium">Jobs Created</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold mb-2 text-lime-600">7</div>
              <div className="text-gray-700 font-medium">States Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
