import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with AI in Your SaaS",
    excerpt: "Learn how to integrate AI capabilities into your SaaS product for enhanced user experience.",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "AI",
    imageUrl: "/placeholder.svg",
    slug: "getting-started-with-ai-in-your-saas",
  },
  {
    id: 2,
    title: "The Future of Next.js and React",
    excerpt: "Explore the latest features and improvements in Next.js and React, and how they shape the future of web development.",
    date: "2025-01-20",
    readTime: "7 min read",
    category: "Web Development",
    imageUrl: "/placeholder.svg",
    slug: "the-future-of-nextjs-and-react",
  },
  {
    id: 3,
    title: "Optimizing Your SaaS for Performance",
    excerpt: "Discover key strategies to improve the performance and scalability of your SaaS application.",
    date: "2025-01-25",
    readTime: "6 min read",
    category: "Performance",
    imageUrl: "/placeholder.svg",
    slug: "optimizing-your-saas-for-performance",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0D0B21] text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Our Blog</h1>
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="border-purple-800/20 bg-purple-900/10">
              <Link href={`/blog/${post.slug}`}>
                <div className="aspect-video relative">
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4 md:p-6">
                  <Badge className="mb-4 bg-purple-600">{post.category}</Badge>
                  <h2 className="mb-2 text-lg md:text-xl font-semibold line-clamp-2">{post.title}</h2>
                  <p className="text-gray-400 mb-4 text-sm md:text-base line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs md:text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

