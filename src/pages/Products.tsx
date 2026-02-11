import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products, categories, type StampCategory } from "@/data/products";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filtered = useMemo(
    () => activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    if (id === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: id });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="gradient-primary py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-2 font-heading text-3xl font-bold text-white md:text-5xl">Our Products</h1>
          <p className="text-white/70">Complete range of Shiny self-inking stamps</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Category Tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "gradient-primary text-white shadow-md"
                  : "border border-border bg-card text-muted-foreground hover:bg-accent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-muted-foreground">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
