import { Link } from "react-router-dom";
import { Stamp, Clock, Circle, Hexagon } from "lucide-react";

const cats = [
  { id: "self-ink", label: "Self Ink Stamps", desc: "Premium self-inking stamps for daily office use", icon: Stamp },
  { id: "date", label: "Date Stamps", desc: "Self-inking date stamps with customizable text", icon: Clock },
  { id: "round", label: "Round Stamps", desc: "Circular stamps for company seals and marks", icon: Circle },
  { id: "special", label: "Special Shapes", desc: "Triangle and oval stamps for unique impressions", icon: Hexagon },
];

const CategoriesSection = () => (
  <section className="bg-accent/50 py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-3 font-heading text-3xl font-bold md:text-4xl">Product <span className="gradient-text">Categories</span></h2>
        <p className="mx-auto max-w-lg text-muted-foreground">Browse our complete range of Shiny self-inking stamps.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cats.map((cat) => (
          <Link
            key={cat.id}
            to={`/products?category=${cat.id}`}
            className="group overflow-hidden rounded-xl border border-border bg-card p-6 card-shadow transition-all duration-300 hover:-translate-y-1 hover:card-shadow-hover"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl gradient-primary transition-transform duration-300 group-hover:scale-110">
              <cat.icon className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-1 font-heading text-lg font-semibold group-hover:text-primary transition-colors">{cat.label}</h3>
            <p className="text-sm text-muted-foreground">{cat.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
