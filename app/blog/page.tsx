import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is shaping the landscape of software development and what it means for developers.",
    date: "2023-12-15",
  },
  {
    title: "Best Practices for Secure Coding",
    excerpt: "A comprehensive guide to writing secure code and protecting your applications from common vulnerabilities.",
    date: "2023-11-30",
  },
  {
    title: "Optimizing React Applications for Performance",
    excerpt: "Learn how to improve the performance of your React applications with these advanced optimization techniques.",
    date: "2023-11-15",
  },
  {
    title: "Understanding TypeScript for JavaScript Developers",
    excerpt: "An introductory guide for JavaScript developers looking to learn TypeScript and enhance their development skills with static typing.",
    date: "2023-10-05",
  },
]

export default function BlogPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <Button variant="outline">Read More</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
