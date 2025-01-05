import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const hobbies = [
  "Personal Coding Projects",
  "Participating in Hackathons",
  "Tech Blogs",
  "Attending Meetups and Conferences",
  "Online Courses and Certifications",
  "Participating in Coding Challenges",
]

export function HobbiesSection() {
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold mb-8">Hobbies and Interests</h2>
      <Card>
        <CardHeader>
          <CardTitle>What I Love to Do</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hobbies.map((hobby, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-red-500">•</span>
                {hobby}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

