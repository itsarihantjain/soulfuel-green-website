export default function GlobalEnvironmentImpactSection() {
  const globalImpact = [
    {
      icon: "♻️",
      value: "2.5 Billion tons/year",
      label: "Global CO₂ reduction potential",
    },
    {
      icon: "🌾",
      value: "4 Billion tons/year",
      label: "Agricultural waste available globally",
    },
    {
      icon: "🌐",
      value: "150+ Countries",
      label: "Using biomass energy solutions",
    },
    {
      icon: "👷‍♂️",
      value: "3.2 Million Jobs Globally",
      label: "Jobs created in the biomass sector",
    },
  ]

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-gradient-to-br from-slate-800 to-teal-900 rounded-lg p-8 text-white">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-3">🌍 Global Environmental Impact</h3>
            <p className="text-base text-gray-200 max-w-4xl mx-auto leading-normal">
              Biomass energy is making a significant impact on global sustainability:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalImpact.map((impact, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-green-400/30"
              >
                <div className="text-4xl mb-4">{impact.icon}</div>
                <div className="text-2xl font-bold text-green-400 mb-2">{impact.value}</div>
                <div className="text-gray-200 text-sm">{impact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
