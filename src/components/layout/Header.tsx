import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + "/");
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
          className="flex items-center gap-2 shrink-0"
          aria-label="Clarivis Consulting Group - Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary lg:h-10 lg:w-10" aria-hidden="true">
            <span className="font-display text-lg font-bold text-primary-foreground lg:text-xl">C</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-lg font-semibold text-foreground lg:text-xl">Clarivis</span>
          </div>
        </Link>

        {/* Horizontal Navigation - Always Visible */}
        <div className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide lg:gap-1" role="menubar">
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

              {/* Dropdown Menu */}
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

        {/* CTA */}
        <div className="shrink-0 ml-2 lg:ml-4">
          <Button variant="cta" size="sm" className="text-xs lg:text-sm" asChild>
            <Link to="/contact">Consult</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
