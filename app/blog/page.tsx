import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"  // Import Image from next/image for optimization

const blogPosts = [
  {
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is shaping the landscape of software development and what it means for developers.",
    date: "2023-12-15",
    image: "https://media.licdn.com/dms/image/v2/D5612AQFIGYGEIRxiMA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698395685286?e=2147483647&v=beta&t=DcYX-t0DloCJSW1-xRFIFqJQ5fVC_yUwln4kClkV2mM", // Example image path
  },
  {
    title: "Best Practices for Secure Coding",
    excerpt: "A comprehensive guide to writing secure code and protecting your applications from common vulnerabilities.",
    date: "2023-11-30",
    image: "https://www.devx.com/wp-content/uploads/Integrating-Cyber-Security-Best-Practices-into-Secure-Software-Development.jpg.webp", // Example image path
  },
  {
    title: "Optimizing React Applications for Performance",
    excerpt: "Learn how to improve the performance of your React applications with these advanced optimization techniques.",
    date: "2023-11-15",
    image: "https://images.ctfassets.net/s600jj41gsex/jC7yKmwpLMQQnMbORx6xn/fcc229b86e617c1e7becf3f74276462e/img-react-improvements-01.jpg?w=768&q=50&fit=scale", // Example image path
  },
  {
    title: "Understanding TypeScript for JavaScript Developers",
    excerpt: "An introductory guide for JavaScript developers looking to learn TypeScript and enhance their development skills with static typing.",
    date: "2023-10-05",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*1bpnC6xQR1Is3MEwpb1v-A.png", // Example image path
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
              <div className="mb-4">
                <img
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover rounded-lg" 
                  width={600} 
                  height={300}  // Set appropriate width and height for optimization
                />
              </div>
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
