import { AboutSection } from "@/components/about-section"
import { WorkExperienceSection } from "@/components/work-experience-section"
import { CertificationsSection } from "@/components/certifications-section"
import { HobbiesSection } from "@/components/hobbies-section"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20 py-8">
      <AboutSection />
      <WorkExperienceSection />
      <CertificationsSection />
      <HobbiesSection />
    </div>
  )
}

