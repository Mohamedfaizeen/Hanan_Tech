import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/hanan-logo.jpg";

const Footer = () => (
  <footer className="gradient-footer text-gray-300">
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <img src={logo} alt="Hanan Technologies" className="h-14 w-auto object-contain brightness-0 invert" />
          <p className="text-sm leading-relaxed text-gray-400">
            Premium stamp and printing solutions in Dubai. Quality products for every business need.
          </p>
          <div className="flex gap-3">
            {["M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5z",
              "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z",
            ].map((_, i) => (
              <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 transition-colors hover:border-primary hover:bg-primary/20">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 font-heading text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/#services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-gray-400 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-4 font-heading text-lg font-semibold text-white">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Self Ink Stamps</li>
            <li>Pre Ink Stamps</li>
            <li>Business Cards</li>
            <li>Office Sign Boards</li>
            <li>Mug Printing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-heading text-lg font-semibold text-white">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-gray-400">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+971523613334" className="hover:text-white">+971 52 361 3334</a>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-400">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:info@hanantech.ae" className="hover:text-white">info@hanantech.ae</a>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Katkotta Building Shop.10, Near Al Gubaiba Bus Station, Bur Dubai</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700/50 pt-8 text-center text-sm text-gray-500">
        <p>© 2026 Hanan Technologies. All rights reserved.</p>
        <p className="mt-1">Website by Hanan Tech</p>
      </div>
    </div>
  </footer>
);

export default Footer;
