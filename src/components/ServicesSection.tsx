import { CreditCard, Signpost, BadgeCheck, Coffee } from "lucide-react";

const services = [
  { icon: CreditCard, title: "Business Cards & Letterhead", desc: "Professional business cards and letterhead printing with premium finishes." },
  { icon: Signpost, title: "Office Sign Boards", desc: "Custom office signage and nameplates for a professional workspace." },
  { icon: BadgeCheck, title: "ID Cards & Name Badges", desc: "Employee ID cards and name badges with full-color printing." },
  { icon: Coffee, title: "Mug Printing", desc: "Customized mug printing for corporate gifts and promotions." },
];

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-3 font-heading text-3xl font-bold md:text-4xl">Our <span className="gradient-text">Services</span></h2>
        <p className="mx-auto max-w-lg text-muted-foreground">Beyond stamps, we offer a full range of business printing solutions.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div key={s.title} className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 card-shadow transition-all duration-300 hover:-translate-y-1 hover:card-shadow-hover">
            {/* Gradient accent top border */}
            <div className="absolute left-0 top-0 h-1 w-full gradient-primary" />
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent transition-transform duration-300 group-hover:scale-110">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-heading text-lg font-semibold">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
