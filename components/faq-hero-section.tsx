import { HelpCircle, MessageSquare, CheckCircle } from "lucide-react"

export default function FAQHeroSection() {
  const faqHighlights = [
    {
      icon: HelpCircle,
      title: "Common Questions",
      description: "Answers to frequently asked questions about biomass fuel",
    },
    {
      icon: MessageSquare,
      title: "Technical Support",
      description: "Detailed information about our products and services",
    },
    {
      icon: CheckCircle,
      title: "Quick Solutions",
      description: "Fast answers to help you make informed decisions",
    },
  ]

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-normal">
            Find comprehensive answers to common questions about biomass fuel, our products, services, and
            sustainability solutions. Get the information you need to make confident decisions about clean energy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {faqHighlights.map((highlight, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <highlight.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600 leading-normal">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
