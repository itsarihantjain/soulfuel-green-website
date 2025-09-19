import { Leaf, Lightbulb, Users, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutSection() {
  const coreValues = [
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We are committed to protecting and preserving our planet for future generations through sustainable practices.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Excellence",
      description: "We continuously innovate to deliver superior products and services that exceed expectations.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We build strong partnerships with farmers, businesses, and communities to create mutual value.",
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We build lasting relationships through transparency, reliability, and ethical business practices.",
    },
  ]

  return (
    <section id="about" className="py-10 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Core Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-normal">
            The principles that guide our decisions and define our culture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-green-300 transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-4">
                <value.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-normal">{value.description}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Have More Questions or Ready to Connect?</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Find answers to common questions or reach out to our team directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg"
            >
              <Link href="/faq">Visit Our FAQ</Link>
            </Button>
            <Button
              asChild
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg"
            >
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
