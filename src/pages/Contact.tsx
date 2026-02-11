import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Hanan Technologies!\n\n*Contact Form*\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Phone:* ${form.phone}\n*Message:* ${form.message}`;
    window.open(`https://wa.me/971523613334?text=${encodeURIComponent(text)}`, "_blank");
    toast({ title: "Redirecting to WhatsApp", description: "Your message is being sent via WhatsApp." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-primary py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-2 font-heading text-3xl font-bold text-white md:text-5xl">Contact Us</h1>
          <p className="text-white/70">Get in touch with Hanan Technologies</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info + Map */}
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Phone", value: "+971 52 361 3334", href: "tel:+971523613334" },
                { icon: Mail, label: "Email", value: "info@hanantech.ae", href: "mailto:info@hanantech.ae" },
                { icon: MapPin, label: "Address", value: "Katkotta Building Shop.10, Near Al Gubaiba Bus Station, Bur Dubai" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 card-shadow">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gradient-primary">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-heading font-semibold text-foreground hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-heading font-semibold text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-xl border border-border card-shadow">
              <iframe
                title="Hanan Technologies Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5!2d55.29!3d25.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE1JzM2LjAiTiA1NcKwMTcnMjQuMCJF!5e0!3m2!1sen!2sae!4v1000000000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border border-border bg-card p-6 card-shadow md:p-8">
            <h2 className="mb-6 font-heading text-2xl font-bold">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Name</label>
                <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Email</label>
                <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Phone</label>
                <Input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+971 XX XXX XXXX" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Message</label>
                <Textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help you?" />
              </div>
              <Button type="submit" size="lg" className="w-full gradient-primary hover:gradient-primary-hover gap-2">
                <Send className="h-4 w-4" />
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
