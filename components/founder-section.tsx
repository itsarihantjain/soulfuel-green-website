import { Linkedin } from "lucide-react"
import Link from "next/link"

export default function FounderSection() {
  const founders = [
    {
      name: "Sweta Patil",
      title: "Co-Founder",
      description:
        "With over 15 years of experience in renewable energy and sustainable ventures, Sweta brings a unique combination of technical expertise and farmer-first mindset to the circular economy revolution.",
      linkedin: "https://www.linkedin.com/in/sweta-patil-97b59393/",
    },
    {
      name: "Saurabh Dalal",
      title: "Co-Founder",
      description:
        "Saurabh's extensive background in operations and supply chain management ensures efficient and scalable biomass production and distribution, driving the company's growth and impact.",
      linkedin: "https://www.linkedin.com/in/saurabh-dalal-176b0298/",
    },
  ]

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Founders</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-normal">
            Our leadership team is driven by a shared vision to transform India's energy landscape and empower
            communities through sustainable biomass solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
              <p className="text-lg font-semibold text-lime-600 mb-4">{founder.title}</p>

              <div className="flex justify-center mb-6">
                <Link
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-cyan-600 hover:text-cyan-800 transition-colors"
                >
                  <Linkedin className="h-6 w-6 mr-2" />
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="text-xl italic text-gray-700 border-l-4 border-lime-600 pl-6 mt-12 max-w-3xl mx-auto text-center">
          "Every ton of biomass pellets we produce represents not just clean energy, but a step towards empowering our
          farming communities and healing our planet."
        </blockquote>
      </div>
    </section>
  )
}
