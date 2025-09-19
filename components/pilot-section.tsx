import { CheckCircle, Factory, Truck, Users } from "lucide-react"
import Image from "next/image" // Import Image

export default function PilotSection() {
  const achievements = [
    {
      icon: Factory,
      title: "5,000 Tons",
      description: "Annual production capacity achieved",
    },
    {
      icon: Users,
      title: "50+ Industries",
      description: "Successfully serving diverse sectors",
    },
    {
      icon: Truck,
      title: "15 States",
      description: "Pan-India delivery network established",
    },
    {
      icon: CheckCircle,
      title: "99.5%",
      description: "Quality consistency maintained",
    },
  ]

  return (
    <section id="pilot" className="py-10 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Proven Track Record</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our pilot operations demonstrate the viability and scalability of our biomass pellet solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Production facility"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational Excellence Since 2022</h3>
            <p className="text-gray-600 mb-4">
              Our state-of-the-art production facility in Punjab has been successfully converting agricultural residue
              into high-quality biomass pellets, serving industries across India.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-lime-600 mr-3" />
                <span>ISO 9001:2015 certified production process</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-lime-600 mr-3" />
                <span>Consistent calorific value of 4,200+ kcal/kg</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-lime-600 mr-3" />
                <span>Less than 8% moisture content guaranteed</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-lime-600 mr-3" />
                <span>Zero chemical additives or binders</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center p-6 bg-lime-100 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-100 rounded-full mb-4">
                <achievement.icon className="h-8 w-8 text-lime-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{achievement.title}</div>
              <div className="text-gray-600">{achievement.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
