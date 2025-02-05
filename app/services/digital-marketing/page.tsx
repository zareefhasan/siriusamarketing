"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Search, Share2, Mail, TrendingUp, Target } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

function AnimatedSection({ children, delay = 0 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function DigitalMarketingPage() {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Boost your website's visibility in search engine results and drive organic traffic.",
      icon: <Search className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Create targeted ad campaigns to reach your ideal audience and drive conversions.",
      icon: <Target className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Social Media Marketing",
      description: "Engage with your audience and build brand awareness across popular social platforms.",
      icon: <Share2 className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and maintain customer relationships with personalized email campaigns.",
      icon: <Mail className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Content Marketing",
      description: "Create valuable content that attracts and retains a clearly defined audience.",
      icon: <BarChart className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Analytics and Reporting",
      description: "Track and analyze your marketing efforts to optimize performance and ROI.",
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0D0B21] text-white py-12">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-center mb-8">Digital Marketing Services</h1>
          <p className="text-xl text-center mb-12 text-gray-300">
            Elevate your online presence with our comprehensive digital marketing solutions
          </p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="border-purple-800/20 bg-purple-900/10">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Online Presence?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's create a tailored digital marketing strategy for your business
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
              Get a Free Consultation
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

