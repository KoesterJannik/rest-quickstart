import PublicLayout from "@/components/layouts/public-layout";
import type { Route } from "./+types/home";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, BarChart, Lock, RefreshCw, Zap } from "lucide-react";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Testimonials from "@/components/home/testimonials";
import Cta from "@/components/home/cta";
import Footer from "@/components/home/footer";

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
   <Hero/>

      {/* Features Section */}
     <Features />

      {/* Testimonials */}
 <Testimonials/>

      {/* CTA Section */}
      <Cta/>

      {/* Footer */}
    <Footer/>
    </PublicLayout>
  );
}



