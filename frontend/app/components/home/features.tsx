import { CheckCircle, Zap, BarChart, RefreshCw, Lock } from "lucide-react";
// Static data
const features = [
    {
      title: "TypeScript",
      description: "Strongly-typed codebase for better developer experience and fewer runtime errors.",
      icon: <Zap className="h-6 w-6 text-primary" />,
    },
    {
      title: "Express Backend",
      description: "Fast, unopinionated, minimalist web framework for Node.js to build your API.",
      icon: <BarChart className="h-6 w-6 text-primary" />,
    },
    {
      title: "React Frontend",
      description: "Component-based UI library for building interactive user interfaces.",
      icon: <RefreshCw className="h-6 w-6 text-primary" />,
    },
    {
      title: "Prisma ORM",
      description: "Next-generation ORM for Node.js and TypeScript, making database access easy.",
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
    },
    {
      title: "JWT Authentication",
      description: "Secure authentication using JSON Web Tokens for protected routes and resources.",
      icon: <Lock className="h-6 w-6 text-primary" />,
    },
    {
      title: "Shadcn UI",
      description: "Beautiful, accessible UI components built with Radix UI and Tailwind CSS.",
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
    },
  ];
function Features() {
  return (
    <section className="py-20 bg-muted/50">
    <div className="container px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Everything you need</h2>
        <p className="text-muted-foreground max-w-[700px] mx-auto">
          Our starter template includes all the essential tools and features to get your project off the ground quickly.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Features