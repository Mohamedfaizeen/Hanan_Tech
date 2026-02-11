import { useState } from "react";
import { Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/CartContext";

const CartSidebar = () => {
  const { items, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, clearCart } = useCart();
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppOrder = () => {
    const productList = items
      .map((item) => `• ${item.name} (${item.model}) × ${item.quantity}`)
      .join("\n");

    const text = `Hello Hanan Technologies!\n\n*New Order Request*\n\n*Customer:* ${customerName}\n*Phone:* ${customerPhone}\n\n*Products:*\n${productList}${message ? `\n\n*Message:* ${message}` : ""}`;

    const url = `https://wa.me/971523613334?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    clearCart();
    setShowOrderForm(false);
    setIsCartOpen(false);
    setCustomerName("");
    setCustomerPhone("");
    setMessage("");
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex flex-col overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="font-heading">Your Cart ({items.length})</SheetTitle>
          <SheetDescription>Review your selected products</SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 text-muted-foreground">
            <ShoppingCartEmpty />
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 py-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 rounded-lg border border-border p-3">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-accent">
                    <img src={item.image} alt={item.model} className="h-full w-full object-contain p-1" onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="truncate font-heading text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.model}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="flex h-7 w-7 items-center justify-center rounded-md border border-border hover:bg-accent">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="flex h-7 w-7 items-center justify-center rounded-md border border-border hover:bg-accent">
                        <Plus className="h-3 w-3" />
                      </button>
                      <button onClick={() => removeFromCart(item.id)} className="ml-auto flex h-7 w-7 items-center justify-center rounded-md text-destructive hover:bg-destructive/10">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {!showOrderForm ? (
              <Button onClick={() => setShowOrderForm(true)} className="w-full gradient-primary hover:gradient-primary-hover gap-2">
                <MessageCircle className="h-4 w-4" />
                Order via WhatsApp
              </Button>
            ) : (
              <div className="space-y-3 border-t border-border pt-4">
                <h4 className="font-heading font-semibold">Your Details</h4>
                <Input placeholder="Your name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                <Input placeholder="Phone number" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} />
                <Textarea placeholder="Message (optional)" rows={2} value={message} onChange={(e) => setMessage(e.target.value)} />
                <Button onClick={handleWhatsAppOrder} disabled={!customerName || !customerPhone} className="w-full gradient-primary hover:gradient-primary-hover gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Send Order via WhatsApp
                </Button>
              </div>
            )}
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

const ShoppingCartEmpty = () => (
  <svg className="h-16 w-16 text-muted-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8l-1.5 7.5M7 13L5.4 5M17 13l1.5 7.5M9 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
  </svg>
);

export default CartSidebar;
