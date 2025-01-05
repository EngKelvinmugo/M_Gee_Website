import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { WorkExperienceSection } from "@/components/work-experience-section"
import { CertificationsSection } from "@/components/certifications-section"
import { HobbiesSection } from "@/components/hobbies-section"


export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-8">
      <HeroSection />
      <AboutSection />
      <WorkExperienceSection />
      <CertificationsSection />
      <HobbiesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

