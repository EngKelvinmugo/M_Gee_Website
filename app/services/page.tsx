import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Web Development",
    description: "Creating responsive and dynamic web applications using modern frameworks and technologies.",
  },
  {
    title: "Mobile App Development",
    description: "Developing cross-platform mobile applications for iOS and Android devices.",
  },
  {
    title: "Data Analysis",
    description: "Analyzing and interpreting complex data sets to provide valuable insights and inform decision-making.",
  },
  {
    title: "Machine Learning Solutions",
    description: "Implementing machine learning models to solve complex problems and automate processes.",
  },
  {
    title: "Cybersecurity Consulting",
    description: "Providing expert advice on securing digital assets and implementing robust security measures.",
  },
  {
    title: "Cloud Solutions",
    description: "Designing and implementing scalable cloud-based solutions using AWS and other cloud platforms.",
  },
  {
    title: "DevOps Services",
    description: "Implementing DevOps practices to streamline development processes and improve deployment cycles.",
  },
  {
    title: "UX/UI Design",
    description: "Creating user-friendly and visually appealing designs for web and mobile applications with a focus on user experience.",
  },
  {
    title: "API Development and Integration",
    description: "Building and integrating RESTful APIs to enable seamless communication between services and applications.",
  },
  
  {
    title: "Chatbot Development",
    description: "Building AI-powered chatbots to automate customer support, enhance user interaction, and improve business operations.",
  },
  {
    title: "E-commerce Solutions",
    description: "Creating and optimizing e-commerce websites and platforms to improve online sales and customer experience.",
  },
  {
    title: "Automation Solutions",
    description: "Automating business processes using tools and technologies to improve efficiency and reduce manual work.",
  },
]

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">My Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
