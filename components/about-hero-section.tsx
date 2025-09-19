import { Eye, Target, Heart } from "lucide-react"

export default function AboutHeroSection() {
  const coreElements = [
    {
      icon: Eye,
      title: "Our Vision",
      description: "Leading India's transition to sustainable energy",
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "Transforming agricultural waste into clean energy solutions",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Sustainability, innovation, partnership, and integrity",
    },
  ]

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Soulfuel Green Energy</h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-normal">
            Founded on the belief that sustainable energy should benefit everyone - farmers, industries, and the
            environment. We're building India's largest network of biomass fuel solutions, one partnership at a time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {coreElements.map((element, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <element.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{element.title}</h3>
              <p className="text-gray-600 leading-normal">{element.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
