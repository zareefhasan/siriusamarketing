"use client";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Sparkles,
  Zap,
  Bot,
  Code2,
  Gauge,
  Lock,
  ChevronRight,
  Megaphone,
  Palette,
  BarChart,
  MessageCircle,
  Search,
  DollarSign,
  FileText,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Sample blog post data
const blogPosts = [
  {
    title: "Getting Started with AI in Your SaaS",
    excerpt:
      "Learn how to integrate AI capabilities into your SaaS product for enhanced user experience.",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    category: "AI",
    slug: "getting-started-with-ai-in-your-saas",
  },
  {
    title: "The Future of Next.js and React",
    excerpt:
      "Explore the latest features and improvements in Next.js and React, and how they shape the future of web development.",
    date: "Jan 20, 2025",
    readTime: "7 min read",
    category: "Web Development",
    slug: "the-future-of-nextjs-and-react",
  },
  {
    title: "Optimizing Your SaaS for Performance",
    excerpt:
      "Discover key strategies to improve the performance and scalability of your SaaS application.",
    date: "Jan 25, 2025",
    readTime: "6 min read",
    category: "Performance",
    slug: "optimizing-your-saas-for-performance",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 },
};

const slideInFromLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

const slideInFromRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

const rotateIn = {
  initial: { rotate: -10, opacity: 0 },
  animate: { rotate: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0D0B21] text-white">
      {/* Hero Section - Fade In Up */}
      <motion.section
        className="container mx-auto px-4 py-20 text-center"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h1
          className="mx-auto max-w-5xl text-4xl font-bold leading-10 md:text-5xl lg:text-6xl"
          variants={fadeInUp}
        >
          Your Partner for Exceptional and Stellar Marketing Results.
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-400"
          variants={fadeInUp}
        >
          We empower businesses to thrive in today's competitive market. Our
          cutting-edge strategies, data-driven approach, and creative campaigns
          strategically position your brand for industry leadership.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Button className="mt-8 bg-purple-600 hover:bg-purple-700">
            Meet the Team
          </Button>
        </motion.div>
      </motion.section>

      {/* Features Grid - Scale In */}
      <motion.section
        id="features"
        className="container mx-auto px-4 py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.h2
          className="text-center text-3xl font-bold"
          variants={scaleIn}
        >
          Our Service Offerings
        </motion.h2>
        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerChildren}
        >
          {[
            {
              icon: <MessageCircle className="h-6 w-6" />,
              title: "Social Media Marketing",
              description:
                "We develop and implement impactful social media strategies to cultivate audience engagement and expand your online presence.",
            },
            {
              icon: <Search className="h-6 w-6" />,
              title: "Search Engine Optimization (SEO)",
              description:
                "We optimize your online visibility and search engine rankings on Google to generate high-converting organic traffic.",
            },
            {
              icon: <DollarSign className="h-6 w-6" />,
              title: "Paid Advertising",
              description:
                "We manage and optimize Google Ads, social media advertising, and display campaigns to maximize your return on investment (ROI).",
            },
            {
              icon: <Palette className="h-6 w-6" />,
              title: "Brand Strategy & Development",
              description:
                "We assist in defining your unique brand identity and crafting a compelling and consistent brand narrative.",
            },
            {
              icon: <FileText className="h-6 w-6" />,
              title: "Content Creation",
              description:
                "We produce engaging visual, video, and written content tailored to resonate with your target audience.",
            },
            {
              icon: <Globe className="h-6 w-6" />,
              title: "Web Design & Development",
              description:
                "We design and develop aesthetically pleasing and highly functional websites that provide an optimal user experience.",
            },
          ].map((service, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card className="border-purple-800/20 bg-purple-900/10">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-purple-600/10 p-3 w-fit">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Feature Highlights - Slide In from Left/Right */}
      <motion.section
        className="container mx-auto px-4 py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={staggerChildren}
        >
          <motion.div variants={slideInFromLeft}>
            <Card className="border-purple-800/20 bg-gradient-to-br from-purple-900/40 to-purple-800/10">
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold">
                  Seamless OpenAI Integration
                </h3>
                <p className="text-gray-400">
                  Built-in OpenAI integration makes it easy to add AI
                  capabilities to your application.
                </p>
                <Button variant="link" className="mt-4 p-0 text-purple-400">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={slideInFromRight}>
            <Card className="border-purple-800/20 bg-gradient-to-br from-purple-900/40 to-purple-800/10">
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold">Highly Customizable</h3>
                <p className="text-gray-400">
                  Customize every aspect of your application with our flexible
                  configuration options.
                </p>
                <Button variant="link" className="mt-4 p-0 text-purple-400">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Pricing Section - Rotate In */}
      <motion.section
        id="pricing"
        className="container mx-auto px-4 py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.h2
          className="text-center text-3xl font-bold"
          variants={rotateIn}
        >
          Our Pricing Plan
        </motion.h2>
        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-3"
          variants={staggerChildren}
        >
          {[
            { name: "Starter", price: "$100" },
            { name: "Pro", price: "$200" },
            { name: "Business", price: "$300" },
          ].map((plan, index) => (
            <motion.div key={index} variants={rotateIn}>
              <Card className="border-purple-800/20 bg-purple-900/10">
                <CardHeader>
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <div className="mt-4 text-4xl font-bold">{plan.price}</div>
                  <div className="text-sm text-gray-400">per month</div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <li key={i} className="flex items-center text-gray-400">
                          <Sparkles className="mr-2 h-4 w-4 text-purple-500" />
                          Premium Feature {i + 1}
                        </li>
                      ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Testimonials - Fade In Up */}
      <motion.section
        className="container mx-auto px-4 py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.h2
          className="text-center text-3xl font-bold"
          variants={fadeInUp}
        >
          What Our Users Say
        </motion.h2>
        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerChildren}
        >
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-purple-800/20 bg-purple-900/10">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/placeholder.svg"
                        alt="User avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-semibold">User Name</div>
                        <div className="text-sm text-gray-400">Company</div>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-400">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore."
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </motion.div>
      </motion.section>

      {/* Blog Section - Scale In */}
      <motion.section
        className="container mx-auto px-4 py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.h2
          className="text-center text-3xl font-bold"
          variants={scaleIn}
        >
          Latest Blogs & News
        </motion.h2>
        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerChildren}
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card className="border-purple-800/20 bg-purple-900/10">
                <Link href={`/blog/${post.slug}`}>
                  <Image
                    src="/placeholder.svg"
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full"
                  />
                  <CardContent className="p-6">
                    <Badge className="mb-4 bg-purple-600">
                      {post.category}
                    </Badge>
                    <h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
                    <p className="text-gray-400">{post.excerpt}</p>
                    <div className="mt-4 flex items-center text-sm text-gray-400">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Final CTA - No Animation */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Call to Action</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Partner with Sirius A Marketing to elevate your business. Schedule a
            complimentary consultation to discuss your marketing transformation.
          </p>
          <div className="mt-8 space-y-2">
            <p className="text-lg">
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              Call us:{" "}
              <a
                href="tel:+4407362622636"
                className="text-purple-400 hover:underline"
              >
                +4407362622636
              </a>
            </p>
            <p className="text-lg">
              <span role="img" aria-label="email">
                📧
              </span>{" "}
              Email:{" "}
              <a
                href="mailto:siriusmarketing@gmail.com"
                className="text-purple-400 hover:underline"
              >
                siriusmarketing@gmail.com
              </a>
            </p>
          </div>
          <Button className="mt-8 bg-purple-600 hover:bg-purple-700">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
