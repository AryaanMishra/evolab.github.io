import { EventGallery } from "@/components/event-gallery"

const bobcatDayImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bobcat-1.jpg-QWqKuAc67TH1FLcqDYJQIBQMyvpiYZ.jpeg",
    alt: "EvoLab members at the information table speaking with prospective students",
    caption: "EvoLab members engaging with prospective students at our information table during Bobcat Day 2025.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bobcat-2.jpg-RmwCO8rGaqoxeHbJKU8qum0UWmobqD.jpeg",
    alt: "Lab members discussing cognitive science with interested students and families",
    caption:
      "Our team discussing cognitive science research opportunities with interested students and their families.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bobcat-3.jpg-JN2pJhYfDuNUhBM9tsibD20lQYPP1N.jpeg",
    alt: "The Unitree Go2 quadruped robot demonstration with visitors",
    caption: "Demonstration of our Unitree Go2 quadruped robot, attracting interest from potential students.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bobcat-4.jpg-7ZeaOk3vxv96zOpJSCrkcqjig7HCv5.jpeg",
    alt: "Lab members explaining research projects to a prospective student",
    caption: "Lab members explaining our human-AI interaction research projects to a prospective student.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bobcat-5.jpg-QKg03OPdMytXduBnBY8wcj2OLa3DgH.jpeg",
    alt: "Young child interacting with the Unitree Go2 robot",
    caption: "A young visitor excited to see the Unitree Go2 robot in action during our demonstration.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bobcat-6.jpg-Qf3WPC1O9ktjuzAnIss8lvhKymi6lK.jpeg",
    alt: "Lab members discussing research with families",
    caption: "Our team discussing the Cognitive Science program and research opportunities with visiting families.",
  },
]

export default function EventsPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Events</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore our recent events, outreach activities, and community engagement
              </p>
            </div>
          </div>

          <div className="space-y-16">
            <EventGallery
              title="Bobcat Day 2025"
              date="April 2025"
              location="UC Merced Campus"
              description="EvoLab participated in UC Merced's annual Bobcat Day, showcasing our research to prospective students and their families. Our team demonstrated two of our robots, the Bunker autonomous ground vehicle and the Unitree Go2 quadruped robot, to increase awareness and interest in the Cognitive Science major. Visitors had the opportunity to interact with our robots and learn about our research in human-AI interaction and trust in crisis situations."
              credit="David Wesley Taylor"
              images={bobcatDayImages}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
