import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { 
    label: "Services", 
    path: "/services",
    children: [
      { label: "Accreditation Readiness", path: "/services/accreditation" },
      { label: "Site Visit Preparation", path: "/services/site-visit" },
      { label: "Compliance Consulting", path: "/services/compliance" },
      { label: "Interim Leadership", path: "/services/leadership" },
      { label: "Education & Training", path: "/services/training" },
    ]
  },
  { label: "Who We Serve", path: "/who-we-serve" },
  { 
    label: "Government", 
    path: "/government",
    children: [
      { label: "Opportunity Identification", path: "/government/opportunity" },
      { label: "Proposal Development", path: "/government/proposal" },
      { label: "Teaming & Partnerships", path: "/government/teaming" },
      { label: "Post-Award Support", path: "/government/post-award" },
    ]
  },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export function Header() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileAccordion(null);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileAccordion = (path: string) => {
    setMobileAccordion(mobileAccordion === path ? null : path);
  };

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      role="banner"
    >
      <nav 
        className="container-narrow mx-auto flex h-16 items-center justify-between px-4 lg:h-20 lg:px-6"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center shrink-0"
          aria-label="Clarivis Consulting Group - Home"
        >
          <img 
            src={logo} 
            alt="Clarivis Consulting Group" 
            className="h-10 w-auto lg:h-12"
          />
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-0.5 lg:gap-1" role="menubar">
          {navItems.map((item) => (
            <div
              key={item.path}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.path)}
              onMouseLeave={() => setOpenDropdown(null)}
              role="none"
            >
              <Link
                to={item.path}
                className={cn(
                  "flex items-center gap-1 px-2 py-2 text-xs font-medium transition-colors rounded-md whitespace-nowrap lg:px-3 lg:text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
                  isActive(item.path)
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
                role="menuitem"
                aria-haspopup={item.children ? "true" : undefined}
                aria-expanded={item.children ? openDropdown === item.path : undefined}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" aria-hidden="true" />}
              </Link>

              {/* Desktop Dropdown Menu */}
              {item.children && openDropdown === item.path && (
                <div 
                  className="absolute left-0 top-full pt-1 z-50"
                  role="menu"
                  aria-label={`${item.label} submenu`}
                >
                  <div className="min-w-48 rounded-lg border border-border bg-card p-1.5 shadow-elevated">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent",
                          location.pathname === child.path
                            ? "text-primary bg-secondary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        )}
                        role="menuitem"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <div className="hidden lg:block shrink-0">
            <Button variant="cta" size="sm" className="text-sm" asChild>
              <Link to="/contact">Consult</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-md text-foreground hover:bg-secondary/50 transition-colors touch-manipulation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm transition-opacity lg:hidden",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed top-16 left-0 right-0 bottom-0 z-50 bg-background overflow-y-auto transition-transform duration-300 ease-out lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="px-4 py-6 pb-safe">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <div key={item.path} className="border-b border-border/50 last:border-0">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleMobileAccordion(item.path)}
                      className={cn(
                        "flex w-full items-center justify-between py-4 text-base font-medium transition-colors touch-manipulation",
                        isActive(item.path) ? "text-primary" : "text-foreground"
                      )}
                      aria-expanded={mobileAccordion === item.path}
                    >
                      <span>{item.label}</span>
                      <ChevronDown 
                        className={cn(
                          "h-5 w-5 text-muted-foreground transition-transform duration-200",
                          mobileAccordion === item.path && "rotate-180"
                        )} 
                        aria-hidden="true" 
                      />
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-200",
                        mobileAccordion === item.path ? "max-h-96 pb-4" : "max-h-0"
                      )}
                    >
                      <div className="pl-4 space-y-1">
                        <Link
                          to={item.path}
                          className={cn(
                            "block py-3 text-sm font-medium touch-manipulation",
                            location.pathname === item.path
                              ? "text-primary"
                              : "text-muted-foreground"
                          )}
                        >
                          All {item.label}
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={cn(
                              "block py-3 text-sm touch-manipulation",
                              location.pathname === child.path
                                ? "text-primary font-medium"
                                : "text-muted-foreground"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      "block py-4 text-base font-medium transition-colors touch-manipulation",
                      isActive(item.path) ? "text-primary" : "text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-8 pt-6 border-t border-border">
            <Button variant="cta" size="lg" className="w-full text-base" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
