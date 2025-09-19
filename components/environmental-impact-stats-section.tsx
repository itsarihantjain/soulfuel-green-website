export default function EnvironmentalImpactStatsSection() {
  const environmentalStats = [
    {
      metric: "Carbon Neutral",
      value: "100%",
      benefit: "CO₂ released during combustion = CO₂ absorbed during plant growth",
      comparison: "→ 85% less emissions vs coal",
    },
    {
      metric: "Air Quality",
      value: "90%",
      benefit: "Significant reduction in air pollutants",
      comparison: "→ Cleaner than coal or diesel",
    },
    {
      metric: "Water Conservation",
      value: "75%",
      benefit: "Uses far less water than fossil fuel extraction",
      comparison: "→ Minimal water pollution risk",
    },
    {
      metric: "Waste Reduction",
      value: "95%",
      benefit: "Converts agri-waste into fuel",
      comparison: "→ Prevents open burning",
    },
    {
      metric: "Renewable",
      value: "∞",
      benefit: "Infinitely renewable as long as agriculture continues",
      comparison: "→ Unlike finite fossil reserves",
    },
    {
      metric: "Biodegradable",
      value: "100%",
      benefit: "Fully decomposable, zero toxic residues",
      comparison: "→ No harmful ash or chemical waste",
    },
  ]

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">🌎 Environmental Impact Statistics</h3>
          <p className="text-base text-gray-600 max-w-4xl mx-auto leading-normal">
            Comprehensive data showing why biomass is the superior choice for environmental sustainability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {environmentalStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">{stat.metric}</h4>
                <div className="text-2xl font-bold text-green-600">{stat.value}</div>
              </div>
              <p className="text-gray-600 text-sm mb-2 leading-normal">{stat.benefit}</p>
              <p className="text-green-600 text-sm font-medium leading-normal">{stat.comparison}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
