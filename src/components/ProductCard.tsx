import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card card-shadow transition-all duration-300 hover:-translate-y-1 hover:card-shadow-hover">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-accent/50 p-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
        />
        {/* Stamp Preview Overlay */}
        <div className="absolute bottom-2 right-2 rounded-md border border-primary/30 bg-background/90 px-2 py-1 backdrop-blur-sm">
          <p className="text-[8px] font-bold tracking-wider text-primary">HANAN TECHNOLOGIES</p>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-heading text-sm font-bold text-foreground">{product.name}</h3>
            <span className="inline-block rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
              {product.model}
            </span>
          </div>
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">{product.description}</p>
        <p className="text-xs font-semibold text-primary">Size: {product.measurement}</p>

        <Button
          onClick={() => addToCart({ id: product.id, model: product.model, name: product.name, image: product.image })}
          className="w-full gradient-primary hover:gradient-primary-hover gap-2 text-xs"
          size="sm"
        >
          <ShoppingCart className="h-3.5 w-3.5" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
