import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="gradient-primary py-16 md:py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">Need Custom Stamps?</h2>
      <p className="mx-auto mb-8 max-w-lg text-white/80">
        Get in touch with us for personalized stamp solutions tailored to your business needs.
      </p>
      <Button asChild size="lg" className="rounded-full bg-white px-8 text-primary hover:bg-white/90 font-semibold shadow-lg gap-2">
        <Link to="/contact">
          Contact Us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  </section>
);

export default CTASection;
