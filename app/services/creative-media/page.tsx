"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Image, Video, Paintbrush, PenTool, Megaphone, Camera } from "lucide-react"
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

export default function CreativeMediaPage() {
  const services = [
    {
      title: "Graphic Design",
      description: "Eye-catching visuals that communicate your brand's message effectively.",
      icon: <Paintbrush className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Video Production",
      description: "Engaging video content to captivate your audience across all platforms.",
      icon: <Video className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Content Creation",
      description: "Compelling written content that resonates with your target audience.",
      icon: <PenTool className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Photography",
      description: "Professional photography services to showcase your products and services.",
      icon: <Camera className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Animation",
      description: "Bring your ideas to life with custom animations and motion graphics.",
      icon: <Image className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Brand Identity Design",
      description: "Develop a cohesive visual identity that sets you apart from competitors.",
      icon: <Megaphone className="h-8 w-8 text-purple-500" />,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0D0B21] text-white py-12">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-center mb-8">Creative Media Services</h1>
          <p className="text-xl text-center mb-12 text-gray-300">
            Bring your vision to life with our cutting-edge creative media solutions
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
            <h2 className="text-3xl font-bold mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's collaborate on your next creative project and make it unforgettable
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
              Start Your Project
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

