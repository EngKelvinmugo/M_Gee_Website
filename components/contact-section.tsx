import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <MapPin className="text-red-500" />
              <p>Nairobi, 00100</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-red-500" />
              <p>kelvinmugo099@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-red-500" />
              <p>+254 799 193809</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Send Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" className="min-h-[120px]" />
              <Button className="w-full bg-red-500 hover:bg-red-600">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

