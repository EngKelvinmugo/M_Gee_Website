import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Community Guardian",
    description: "Mobile app for community engagement and online crime reporting. Won Murang'a University 2024 Innovation Week.",
    tags: ["Mobile", "Security", "React Native"],
  },
  {
    title: "ImmunityShield",
    description: "Web application to enhance API security. Won 2024 Inter-University Hackathon for Cyber Security Category.",
    tags: ["Cybersecurity", "API", "Web"],
  },
  {
    title: "Remote Health Monitoring",
    description: "Web-based telemedicine and monitoring tool using microcontrollers for health tracking.",
    tags: ["Healthcare", "IoT", "Web"],
  },
  {
    title: "Stretcher Application",
    description: "A fitness mobile app designed using Figma and developed using React Native. Offers workout tracking, fitness challenges, and progress monitoring.",
    tags: ["Fitness", "Mobile", "React Native"],
  },
  {
    title: "E-Health",
    description: "A web-based health application with offline functionality using CouchDB and PouchDB. Supports medical record storage and appointment management.",
    tags: ["Healthcare", "Web", "Offline"],
  },
  {
    title: "Facial Recognition Attendance System",
    description: "A web-based attendance system using facial recognition. Built with Node.js, Express, and React.js for seamless attendance tracking.",
    tags: ["AI", "Web", "Node.js"],
  },
]

export function ProjectsSection() {
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
