
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'



function Cta() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
    <div className="container px-4 md:px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="mb-8 max-w-[600px] mx-auto opacity-90">
        Join thousands of developers building modern web applications with our starter template.
      </p>
      <Button size="lg" variant="secondary" className="gap-2">
        Start Building Now <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  </section>
  )
}

export default Cta