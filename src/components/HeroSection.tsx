import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative overflow-hidden gradient-primary py-20 md:py-32">
    {/* Decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/5 animate-float" />
      <div className="absolute -bottom-10 right-10 h-48 w-48 rounded-full bg-white/5 animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute right-1/4 top-1/4 h-32 w-32 rounded-full bg-white/5 animate-float" style={{ animationDelay: "0.75s" }} />
    </div>

    <div className="container relative mx-auto px-4 text-center">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/70 animate-fade-in-up">
        Premium Stamp & Printing Solutions
      </p>
      <h1 className="mb-6 font-heading text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        WELCOME TO<br />
        <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
          HANAN TECHNOLOGIES
        </span>
      </h1>
      <p className="mx-auto mb-8 max-w-xl text-base text-white/80 md:text-lg animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        Your trusted partner for high-quality stamps, seals, and business printing solutions in Dubai.
      </p>
      <div className="animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
        <Button asChild size="lg" className="rounded-full bg-white px-8 text-primary hover:bg-white/90 font-semibold shadow-lg gap-2">
          <Link to="/products">
            Explore Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
