import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  services: [
    { label: "Accreditation", path: "/services/accreditation" },
    { label: "Compliance", path: "/services/compliance" },
    { label: "Government", path: "/government" },
  ],
  company: [
    { label: "About", path: "/about" },
    { label: "Pricing", path: "/pricing" },
    { label: "Blog", path: "/blog" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30" role="contentinfo">
      <div className="container-narrow mx-auto px-4 sm:px-6 py-8 sm:py-10 pb-safe">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center" aria-label="Clarivis Consulting Group - Home">
              <img 
                src={logo} 
                alt="Clarivis Consulting Group" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Expert accreditation and compliance consulting for health education.
            </p>
            
            {/* Contact Info */}
            <div className="mt-4 space-y-1">
              <a
                href="tel:+1-508-446-4592"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>(508) 446-4592</span>
              </a>
              <a
                href="mailto:ebrichto@clarivisgroup.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>ebrichto@clarivisgroup.com</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <nav aria-label="Services">
            <h4 className="mb-2 text-sm font-semibold text-foreground">Services</h4>
            <ul className="space-y-1" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Links */}
          <nav aria-label="Company">
            <h4 className="mb-2 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-1" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Clarivis Consulting Group, LLC
          </p>
          <div className="flex gap-4">
            <Link 
              to="/privacy" 
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>
            <Link 
              to="/terms" 
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
