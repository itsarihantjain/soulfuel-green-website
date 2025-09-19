import { TrendingUp, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  const stats = [
    {
      icon: Users,
      value: "20+",
      label: "Industrial Partners",
    },
    {
      icon: Award,
      value: "500K+",
      label: "Tons CO₂ Saved",
    },
    {
      icon: TrendingUp,
      value: "100+",
      label: "Farmers Supported",
    },
  ]

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-slate-800 to-teal-900 min-h-screen flex items-center overflow-hidden"
    >
      {/* Decorative agricultural illustrations */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#84cc16" strokeWidth="2" fill="none">
            <path d="M100 600 L100 500 M95 520 L105 520 M95 530 L105 530 M95 540 L105 540" />
            <path d="M150 600 L150 480 M145 500 L155 500 M145 510 L155 510 M145 520 L155 520" />
            <rect x="300" y="550" width="80" height="40" rx="5" />
            <circle cx="320" cy="600" r="15" />
            <circle cx="360" cy="600" r="15" />
            <rect x="800" y="200" width="60" height="40" rx="5" />
            <circle cx="830" cy="220" r="8" />
            <path d="M500 600 Q510 580 520 600 Q530 580 540 600" />
            <path d="M600 600 Q610 570 620 600 Q630 570 640 600" />
            <circle cx="1000" cy="400" r="20" />
            <path d="M1000 420 L1000 500 M980 450 L1020 450 M1000 500 L990 550 M1000 500 L1010 550" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Soulfuel transforms agri-residue into industrial-grade biomass pellets — powering India's green energy
            future while creating value for farmers and industry.
          </h1>
          {/* Single CTA Button */}
          <Button asChild className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-8 py-3 text-lg">
            <Link href="/services">Explore Our Sustainable Solutions</Link>
          </Button>
        </div>

        {/* Trusted by section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-lime-400 mb-8">Trusted by leading industries</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-lime-400/30">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-lime-400 rounded-lg mb-3">
                  <stat.icon className="h-6 w-6 text-gray-900" />
                </div>
                <div className="text-3xl font-bold text-lime-400 mb-1">{stat.value}</div>
                <div className="text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
