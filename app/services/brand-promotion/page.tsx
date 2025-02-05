"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Megaphone, Users, TrendingUp, Award, Globe, Zap } from "lucide-react"
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

export default function BrandPromotionPage() {
  const services = [
    {
      title: "Brand Strategy Development",
      description:
        "Create a comprehensive brand strategy that aligns with your business goals and resonates with your target audience.",
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Public Relations",
      description: "Build and maintain a positive public image through strategic communication and media relations.",
      icon: <Megaphone className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Influencer Marketing",
      description: "Leverage the power of social media influencers to expand your brand's reach and credibility.",
      icon: <Users className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Event Marketing",
      description: "Create memorable brand experiences through strategic event planning and execution.",
      icon: <Zap className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Reputation Management",
      description: "Monitor and improve your brand's online reputation to build trust with your audience.",
      icon: <Award className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Global Brand Expansion",
      description: "Develop strategies for expanding your brand into new markets and cultures.",
      icon: <Globe className="h-8 w-8 text-purple-500" />,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0D0B21] text-white py-12">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-center mb-8">Brand Promotion Services</h1>
          <p className="text-xl text-center mb-12 text-gray-300">
            Elevate your brand's presence and connect with your audience through our strategic promotion services
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
            <h2 className="text-3xl font-bold mb-6">Ready to Amplify Your Brand?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's work together to create a powerful brand promotion strategy tailored to your unique needs
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
              Schedule a Consultation
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

