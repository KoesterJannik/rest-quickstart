

function Footer() {
  return (
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
       
          <a href="https://github.com/koesterjannik" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="sr-only">GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/jannik-k%C3%B6ster-472167211/" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="sr-only">LinkedIn</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer