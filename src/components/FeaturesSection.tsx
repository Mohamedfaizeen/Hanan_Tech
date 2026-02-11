import { Award, Zap, Palette, ShieldCheck } from "lucide-react";

const features = [
  { icon: Award, title: "High Quality Materials", desc: "Premium inks and durable stamp bodies built to last thousands of impressions." },
  { icon: Zap, title: "Fast Processing", desc: "Quick turnaround times on custom orders. Same-day delivery available." },
  { icon: Palette, title: "Custom Branding", desc: "Fully customizable stamps with your logo, text, and unique designs." },
  { icon: ShieldCheck, title: "Reliable Service", desc: "Trusted by hundreds of businesses across the UAE for quality and consistency." },
];

const FeaturesSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-3 font-heading text-3xl font-bold md:text-4xl">Why Choose <span className="gradient-text">Hanan Technologies</span></h2>
        <p className="mx-auto max-w-lg text-muted-foreground">We deliver excellence in every stamp with precision engineering and premium materials.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div key={f.title} className="group rounded-xl border border-border bg-card p-6 card-shadow transition-all duration-300 hover:-translate-y-1 hover:card-shadow-hover" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg gradient-primary transition-transform duration-300 group-hover:scale-110">
              <f.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-2 font-heading text-lg font-semibold">{f.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
