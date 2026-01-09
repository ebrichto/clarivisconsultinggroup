import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Accreditation Support", path: "/services/accreditation" },
    { label: "Compliance Consulting", path: "/services/compliance" },
    { label: "Recruitment Support", path: "/services/leadership" },
    { label: "Government Contracts", path: "/government" },
  ],
  company: [
    { label: "About Us", path: "/about" },
    { label: "Who We Serve", path: "/who-we-serve" },
    { label: "Contact", path: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30" role="contentinfo">
      <div className="container-narrow mx-auto px-6 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2" aria-label="Clarivis Consulting Group - Home">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary" aria-hidden="true">
                <span className="font-display text-xl font-bold text-primary-foreground">C</span>
              </div>
              <div>
                <span className="font-display text-xl font-semibold text-foreground">Clarivis</span>
                <span className="ml-1 text-sm text-muted-foreground">Consulting Group</span>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Clear guidance for health sector education programs — accreditation, compliance, and operational excellence.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-2">
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
            <h4 className="mb-4 text-sm font-semibold text-foreground">Services</h4>
            <ul className="space-y-3" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Links */}
          <nav aria-label="Company">
            <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Clarivis Consulting Group, LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link 
              to="/privacy" 
              className="text-sm text-muted-foreground hover:text-foreground focus:outline-none focus:underline"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-sm text-muted-foreground hover:text-foreground focus:outline-none focus:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
