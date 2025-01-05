import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="container flex items-center justify-center py-12">
      <div className="max-w-3xl space-y-6 text-center">
        <div className="space-y-2">
          <h2 className="text-sm uppercase tracking-widest text-red-500">Welcome to my world</h2>
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I&apos;m{" "}
            <span className="text-red-500">Kelvin Mugo</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-muted-foreground">
            a Software Developer
          </h2>
        </div>
        <p className="text-muted-foreground">
          Dynamic Software Developer with a solid foundation in creating reliable, scalable
          applications. Proficient in various programming languages and frameworks.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/engkelvinmugo" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/engkelvinmugo" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href="mailto:kelvinmugo099@gmail.com"target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
