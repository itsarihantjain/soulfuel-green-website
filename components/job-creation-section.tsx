import { Briefcase, MapPin, TrendingUp, Users } from "lucide-react"

export default function JobCreationSection() {
  const jobStats = [
    {
      icon: Briefcase,
      value: "25",
      label: "Jobs per 1,000 tons",
      description: "Direct employment opportunities",
    },
    {
      icon: MapPin,
      value: "15",
      label: "Tier 2/3 Cities",
      description: "Operations across India",
    },
    {
      icon: TrendingUp,
      value: "200%",
      label: "Growth in Rural Jobs",
      description: "Year-over-year increase",
    },
    {
      icon: Users,
      value: "1,500+",
      label: "Indirect Jobs",
      description: "Supply chain employment",
    },
  ]

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Creating Employment Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our operations generate significant employment in rural and semi-urban areas, contributing to local economic
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {jobStats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-3">
                <stat.icon className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Job Categories Created</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Production & Operations</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Plant operators</li>
                <li>Quality control specialists</li>
                <li>Maintenance technicians</li>
                <li>Production supervisors</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Supply Chain & Logistics</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Collection agents</li>
                <li>Transportation coordinators</li>
                <li>Warehouse managers</li>
                <li>Delivery personnel</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Support Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Administrative staff</li>
                <li>Sales representatives</li>
                <li>Customer service</li>
                <li>Technical support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
