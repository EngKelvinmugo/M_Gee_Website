import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const certifications = [
  "Introduction to Artificial Intelligence by Simplilearn",
  "Introduction to Internet of Things by Simplilearn",
  "Python Libraries for Data Science by Simplilearn",
  "Introduction to Cyber Security by Cisco Skills for All",
  "Security Operations Center by Coursera",
  "Endpoint Security by Cisco Skills for All",
  "Foundations of Cyber Security by Google",
  "AWS Cloud Technical Essentials by Coursera",
  "Python Essentials by Cisco Skills for All",
  "JavaScript Essentials by Cisco Skills for All",
  "SPSS Certificate by Kesap Center",
  "Data Entry Certificate by Ajira digital",
]

export function CertificationsSection() {
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold mb-8">Certifications</h2>
      <Card>
        <CardHeader>
          <CardTitle>Professional Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-red-500">•</span>
                {cert}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

