import PublicLayout from "@/components/layouts/public-layout";
import type { Route } from "./+types/home";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, BarChart, Lock, RefreshCw, Zap } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SaaS Starter - Modern Web Application" },
    { name: "description", content: "A modern web application starter template" },
  ];
}

export default function Home() {
  return (
    <PublicLayout>
      {/* Hero Section */}
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

      {/* Features Section */}
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

      {/* Testimonials */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What developers say</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              Join hundreds of developers who have used our template to build amazing projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 mr-3"></div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">SaaS Starter</h3>
              <p className="text-muted-foreground">
                Modern web application starter template with TypeScript, Express, React, Prisma, and JWT.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Guides</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API Reference</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SaaS Starter. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </PublicLayout>
  );
}

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

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Full Stack Developer",
    content: "This starter template saved me weeks of setup time. The integration between React and Express is seamless.",
  },
  {
    name: "Michael Chen",
    role: "Frontend Engineer",
    content: "The Shadcn UI components are beautiful and the TypeScript integration makes development a breeze.",
  },
  {
    name: "Emma Rodriguez",
    role: "Backend Developer",
    content: "Prisma ORM and the Express setup made database operations simple and intuitive. Highly recommended!",
  },
];
