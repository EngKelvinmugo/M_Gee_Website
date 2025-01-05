import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Software Developer",
    company: "Affam Software Limited",
    period: "05/2024 - 11/2024",
    location: "Nairobi, Kenya",
    responsibilities: [
      "Designed and developed software applications using Python and Java",
      "Wrote clean and efficient code, participated in code reviews",
      "Engaged in Agile methodologies through daily stand-ups and sprint planning",
    ],
  },
  {
    title: "Software Developer",
    company: "Harmosoft Software Company",
    period: "08/2023 - 04/2024",
    location: "Nairobi, Kenya",
    responsibilities: [
      "Developed and maintained custom software solutions",
      "Provided technical support and training to employees",
      "Consulted with management to identify opportunities for technology integration",
    ],
  },
  {
    title: "Software Developer",
    company: "Freelancer | Upwork",
    period: "04/2023 - 08/2023",
    location: "Remote",
    responsibilities: [
      "Developed and maintained software applications",
      "Provided technical support to clients",
      "Collaborated with cross-functional teams to deliver high-quality features",
    ],
  },
]

export function WorkExperienceSection() {
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <Card key={index} className="border border-muted-foreground bg-background shadow-sm">
            <CardHeader>
              <CardTitle>{exp.title} at {exp.company}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{exp.period} | {exp.location}</p>
              <ul className="list-disc list-inside space-y-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
