import { ArrowRight, Brain, Heart, Users, Shield, Scale, Church, Calendar } from "lucide-react"
import { LabHighlightsReel } from "@/components/lab-highlights-reel"
import { RecentPublications } from "@/components/recent-publications"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const researchAreas = [
  {
    title: "Human-AI Interaction",
    description: "Studying how humans interact with and trust AI systems in various contexts.",
    icon: Brain,
    href: "/research/human-ai-interaction",
  },
  {
    title: "Emotion",
    description: "Investigating emotional responses and regulation in human-AI interactions.",
    icon: Heart,
    href: "/research/emotion",
  },
  {
    title: "Group Bias",
    description: "Examining biases in group dynamics and decision-making processes.",
    icon: Users,
    href: "/research/group-bias",
  },
  {
    title: "Threat Appraisal",
    description: "Analyzing how humans assess and respond to threats in crisis situations.",
    icon: Shield,
    href: "/research/threat-appraisal",
  },
  {
    title: "Morality",
    description: "Exploring moral decision-making and ethical considerations in AI interactions.",
    icon: Scale,
    href: "/research/morality",
  },
  {
    title: "Religion",
    description: "Investigating the intersection of religious beliefs and AI trust.",
    icon: Church,
    href: "/research/religion",
  },
]

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Welcome to EvoLab
              </h1>
              <p className="mx-auto max-w-[800px] text-xl md:text-2xl text-gray-200">
                Studying human-AI interaction and trust levels in crisis situations through innovative research and
                methodologies.
              </p>
            </div>
            <div className="space-x-4 pt-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/research">Our Research</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-black/30 hover:bg-black/50" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Research Areas</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore our diverse research initiatives focused on understanding human-AI interactions
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area) => {
              const Icon = area.icon
              return (
                <Link key={area.title} href={area.href} className="group">
                  <Card className="transition-colors hover:border-primary">
                    <CardHeader>
                      <Icon className="h-8 w-8 transition-colors group-hover:text-primary" />
                      <CardTitle>{area.title}</CardTitle>
                      <CardDescription>{area.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="flex items-center text-primary">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Recent Events</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Check out our latest outreach activities and community engagement
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bobcat-5.jpg-QKg03OPdMytXduBnBY8wcj2OLa3DgH.jpeg"
                    alt="Young child interacting with the Unitree Go2 robot at Bobcat Day 2025"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">April 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Bobcat Day 2025</h3>
                  <p className="text-muted-foreground mb-4">
                    EvoLab showcased our robots and research at UC Merced's annual Bobcat Day, engaging with prospective
                    students and their families to promote the Cognitive Science major.
                  </p>
                  <Button asChild>
                    <Link href="/events" className="flex items-center gap-2">
                      View Event Gallery <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <RecentPublications />
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Lab Highlights</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Take a look at our state-of-the-art facilities and ongoing research activities
              </p>
            </div>
          </div>
          <div className="mt-12">
            <LabHighlightsReel />
          </div>
        </div>
      </section>
    </main>
  )
}
