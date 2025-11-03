import { Camera, Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";

export function Footer() {
  const footerLinks = {
    services: [
      { label: "Wedding Photography", href: "#services" },
      { label: "Event Coverage", href: "#services" },
      { label: "Portrait Sessions", href: "#services" },
      { label: "Commercial Work", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Licensing", href: "#" },
    ],
  };

  return (
    <footer className="relative mt-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl tracking-wider">
                ARVEN <span className="text-primary">STUDIOS</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Capturing timeless moments with cinematic artistry.
            </p>
            <div className="flex gap-3 pt-4">
              <a
                href="#"
                className="p-3 glass-effect rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 glass-effect rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 glass-effect rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a
                  href="mailto:hello@arvenstudios.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@arvenstudios.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <a
                  href="tel:+15551234567"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +254710598625
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm mb-2">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Arven Studios. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with passion and precision
          </p>
        </div>
      </div>
    </footer>
  );
}
