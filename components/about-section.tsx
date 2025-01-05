import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const skills = [
  "Python",
  "Django",
  "Django Rest Framework",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Express.js",
  "HTML",
  "CSS",
  "SQL",

  "MongoDB",
  "PostgreSQL",
  "Data Analytics",
  "Machine Learning",
  "Cyber Security",
  "Docker",
  "Git",
  "GitHub Actions",
  "AWS",

  
  "Linux",
  "RESTful APIs",
  

  "Unit Testing",
  "Integration Testing",
  "Cloud Infrastructure",
  "Agile Development",
  "WebSockets",
  "OAuth",
  "Serverless Framework",
  "Performance Optimization",
  "UI/UX",
  "Webpack",
  "Babel",
  
  "Redux",
  "Storybook",
  "ESLint",
  "CouchDB",
  "PouchDB"
];


export function AboutSection() {
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Who I Am?</h3>
            <p className="text-muted-foreground mb-4">
              Dynamic Software Developer with a solid foundation in creating reliable, scalable
              applications. Proficient in various programming languages and frameworks, adept
              at guiding projects from initial concept through to deployment.
            </p>
            <Button variant="default" className="bg-red-500 hover:bg-red-600">
              Download CV
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

