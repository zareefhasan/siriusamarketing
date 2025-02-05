import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About AI Tool",
  description: "Learn about AI Tool's mission, vision, and core values",
  openGraph: {
    title: "About AI Tool",
    description: "Learn about AI Tool's mission, vision, and core values",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0D0B21] text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About AI Tool</h1>

        <Card className="border-purple-800/20 bg-purple-900/10 mb-12">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-300 mb-6">
                  At AI Tool, we're on a mission to revolutionize the way businesses interact with artificial
                  intelligence. We believe in making AI accessible, understandable, and actionable for companies of all
                  sizes.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-gray-300 mb-6">
                  We envision a future where AI is an integral part of every business strategy, driving innovation,
                  efficiency, and growth. Our goal is to be at the forefront of this AI revolution, providing
                  cutting-edge tools and insights to our clients.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px]">
                <Image src="/placeholder.svg" alt="AI Tool Team" fill className="object-cover rounded-lg" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-800/20 bg-purple-900/10 mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Innovation", description: "We constantly push the boundaries of what's possible with AI." },
                {
                  title: "Accessibility",
                  description: "We make complex AI technologies understandable and usable for all.",
                },
                {
                  title: "Integrity",
                  description: "We uphold the highest standards of ethics in AI development and application.",
                },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Join Us on Our Journey</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our team and help shape the future of AI. If you're
            excited about the possibilities of AI and want to make a difference, we'd love to hear from you.
          </p>
          <Link href="/contact">
            <Button className="bg-purple-600 hover:bg-purple-700">Get in Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

