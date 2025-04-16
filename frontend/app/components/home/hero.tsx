import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"


function Hero() {
  return (
    <section className="py-20 px-4 md:px-6 text-center md:text-left flex flex-col md:flex-row items-center ">
    <div className="md:w-1/2 space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        Build your next project <span className="text-primary">faster</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
        A modern stack with TypeScript, Express, React, Prisma, and JWT authentication.
        Everything you need to build robust web applications.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <Button size="lg" className="gap-2">
          Get Started <ArrowRight className="h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>
    </div>
    <div className="md:w-1/2 mt-10 md:mt-0">
      <div className="relative w-full aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg shadow-xl flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] rounded-lg" />
        <span className="font-mono text-sm text-muted-foreground">Preview your project</span>
      </div>
    </div>
  </section>
  )
}

export default Hero;