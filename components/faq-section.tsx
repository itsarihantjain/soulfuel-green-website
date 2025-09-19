import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"
import Link from "next/link"

export default function FAQSection() {
  const faqs = [
    {
      question: "What is biomass fuel and how is it different from traditional fuels?",
      answer:
        "Biomass fuel is a renewable energy source made from organic materials like agricultural waste, wood chips, and crop residues. Unlike fossil fuels, biomass is carbon-neutral, sustainable, and helps reduce greenhouse gas emissions while providing the same energy output.",
    },
    {
      question: "What types of agricultural waste do you process?",
      answer:
        "We process a wide variety of agricultural residues including rice husks, wheat straw, sugarcane bagasse, corn stalks, cotton stalks, groundnut shells, and other crop residues. Our advanced processing technology can handle diverse waste types while maintaining consistent fuel quality.",
    },
    {
      question: "How does biomass fuel compare to coal in terms of energy output?",
      answer:
        "Our high-quality biomass pellets provide 4,000+ kcal/kg energy content, which is comparable to many coal varieties. While the energy density may be slightly lower than premium coal, biomass burns cleaner, produces less ash, and offers superior environmental benefits with carbon neutrality.",
    },
    {
      question: "How much can I save by switching to biomass fuel?",
      answer:
        "Cost savings typically range from 20-40% compared to traditional fuels like coal or diesel. The exact savings depend on your current fuel costs, consumption volume, and local market conditions. We provide detailed cost analysis for each client.",
    },
    {
      question: "How do you ensure consistent quality across different batches?",
      answer:
        "We maintain strict quality control through automated testing at every stage. Each batch is tested for moisture content, energy density, ash content, and particle size. We provide quality certificates with every shipment and maintain detailed traceability records.",
    },
    {
      question: "What are the storage requirements for biomass fuel?",
      answer:
        "Biomass pellets and briquettes should be stored in dry, covered areas with good ventilation. Ideal moisture levels should be maintained below 10%. We provide storage guidelines and can recommend suitable storage solutions based on your consumption patterns.",
    },
    {
      question: "Can you customize fuel specifications for specific industrial needs?",
      answer:
        "Absolutely. We offer custom specifications for energy content, size, moisture levels, and ash content based on your specific requirements. Our R&D team works closely with clients to develop optimal fuel formulations for their applications.",
    },
    {
      question: "How do you support farmers in the waste collection process?",
      answer:
        "We work directly with farmer cooperatives and provide fair pricing for agricultural waste. We've established collection centers in key agricultural regions, offer transportation support, and provide training on proper waste preparation to maximize farmer income.",
    },
  ]

  return (
    <section id="faq" className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-3">
            <HelpCircle className="h-8 w-8 text-green-600 mr-3" />
            <span className="text-green-600 font-semibold text-lg">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            FREQUENTLY ASKED QUESTIONS and Quick Facts
          </h2>{" "}
          {/* Updated title */}
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-normal">
            Get answers to common questions about our biomass fuel products, services, and sustainability solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-green-600 py-6">
                  <span className="pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 pt-2 leading-normal">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Support Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Still Have Questions?</h3>
            <p className="text-sm text-gray-600 mb-4 leading-normal">
              Our technical experts are ready to help you find the perfect biomass solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-6">Quick Facts About Our Biomass Fuel</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">4,000+</div>
              <div className="text-gray-600">kcal/kg Energy Content</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
              <div className="text-3xl font-bold text-lime-600 mb-1">20-40%</div>
              <div className="text-gray-600">Cost Savings vs Coal</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
              <div className="text-3xl font-bold text-lime-500 mb-1">85%</div>
              <div className="text-gray-600">CO₂ Reduction</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-gray-600">Carbon Neutral</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
