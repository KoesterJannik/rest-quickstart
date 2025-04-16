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
  
function Testimonials() {
  return (
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
  )
}

export default Testimonials