import { DollarSign, TrendingUp, PieChart, Target } from "lucide-react"

export default function FinancialProjectionsSection() {
  const projections = [
    {
      year: "2024",
      revenue: "₹25 Cr",
      margin: "18%",
      production: "5,000 tons",
    },
    {
      year: "2025",
      revenue: "₹75 Cr",
      margin: "22%",
      production: "15,000 tons",
    },
    {
      year: "2026",
      revenue: "₹150 Cr",
      margin: "25%",
      production: "30,000 tons",
    },
    {
      year: "2027",
      revenue: "₹300 Cr",
      margin: "28%",
      production: "60,000 tons",
    },
  ]

  const metrics = [
    {
      icon: DollarSign,
      title: "Break-even Point",
      value: "18 months",
      description: "From full operations start",
    },
    {
      icon: TrendingUp,
      title: "ROI for Investors",
      value: "35%",
      description: "Expected annual returns",
    },
    {
      icon: PieChart,
      title: "Gross Margin",
      value: "25-30%",
      description: "Sustainable profitability",
    },
    {
      icon: Target,
      title: "Market Share",
      value: "5%",
      description: "Target by 2027",
    },
  ]

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Financial Projections</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strong financial fundamentals with clear path to profitability and sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-100 rounded-full mb-3">
                <metric.icon className="h-8 w-8 text-lime-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{metric.title}</div>
              <div className="text-gray-600">{metric.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">4-Year Growth Trajectory</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Year</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Revenue</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Gross Margin</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Production</th>
                </tr>
              </thead>
              <tbody>
                {projections.map((row, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-3 px-4 font-semibold text-gray-900">{row.year}</td>
                    <td className="py-3 px-4 text-gray-600">{row.revenue}</td>
                    <td className="py-3 px-4 text-lime-600 font-semibold">{row.margin}</td>
                    <td className="py-3 px-4 text-gray-600">{row.production}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 bg-lime-600 text-white rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Investment Opportunity</h3>
              <p className="text-lime-100 mb-4">
                Join us in scaling India's largest biomass pellet network with proven business model and strong market
                demand.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Funding Required:</span>
                  <span className="font-semibold">₹50 Cr</span>
                </div>
                <div className="flex justify-between">
                  <span>Use of Funds:</span>
                  <span className="font-semibold">Capacity Expansion</span>
                </div>
                <div className="flex justify-between">
                  <span>Expected Valuation:</span>
                  <span className="font-semibold">₹200 Cr by 2027</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4x</div>
              <div className="text-lime-100 mb-4">Revenue Growth (2024-2027)</div>
              <div className="text-2xl font-bold mb-2">₹300 Cr</div>
              <div className="text-lime-100">Target Revenue by 2027</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
