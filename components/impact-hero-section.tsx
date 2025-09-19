import { Leaf, Users, TrendingUp } from "lucide-react"

export default function ImpactHeroSection() {
  const impactAreas = [
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Reducing carbon emissions and preventing stubble burning",
    },
    {
      icon: Users,
      title: "Social Impact",
      description: "Empowering farmers and creating rural employment",
    },
    {
      icon: TrendingUp,
      title: "Economic Impact",
      description: "Driving sustainable growth and market opportunities",
    },
  ]

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 mb-0">
          {impactAreas.map((area, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <area.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.title}</h3>
              <p className="text-gray-600 leading-normal">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
