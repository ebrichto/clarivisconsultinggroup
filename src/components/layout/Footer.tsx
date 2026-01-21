import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

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
    { label: "Pricing", path: "/pricing" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30" role="contentinfo">
      <div className="container-narrow mx-auto px-4 sm:px-6 py-10 sm:py-12 lg:py-16 pb-safe">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center" aria-label="Clarivis Consulting Group - Home">
              <img 
                src={logo} 
                alt="Clarivis Consulting Group" 
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Clear guidance for health sector education programs — accreditation, compliance, and operational excellence.
            </p>
            
            {/* Contact Info */}
            <div className="mt-5 sm:mt-6 space-y-3">
              <a
                href="tel:+1-508-446-4592"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors touch-manipulation min-h-[44px] py-2"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>(508) 446-4592</span>
              </a>
              <a
                href="mailto:ebrichto@clarivisgroup.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors touch-manipulation min-h-[44px] py-2"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>ebrichto@clarivisgroup.com</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <nav aria-label="Services">
            <h4 className="mb-3 sm:mb-4 text-sm font-semibold text-foreground">Services</h4>
            <ul className="space-y-1" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="block text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:underline touch-manipulation min-h-[44px] py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Links */}
          <nav aria-label="Company">
            <h4 className="mb-3 sm:mb-4 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-1" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="block text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:underline touch-manipulation min-h-[44px] py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:pt-8 md:flex-row">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Clarivis Consulting Group, LLC. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link 
              to="/privacy" 
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground focus:outline-none focus:underline touch-manipulation py-2"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground focus:outline-none focus:underline touch-manipulation py-2"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
