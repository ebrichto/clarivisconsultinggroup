import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { SearchBar } from "./SearchBar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
    ],
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
    ],
  },
  { label: "Pricing", path: "/pricing" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
] as const;

type NavItem = (typeof navItems)[number];

export function Header() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  const activeGroupPath = useMemo(() => {
    const group = navItems.find(
      (i) => "children" in i && i.children?.some((c) => location.pathname === c.path),
    ) as NavItem | undefined;
    return group?.path ?? null;
  }, [location.pathname]);

  // Keep the relevant group expanded on mobile when entering a subpage
  useEffect(() => {
    if (!mobileOpen) return;
    if (activeGroupPath) setMobileExpanded(activeGroupPath);
  }, [activeGroupPath, mobileOpen]);

  // Close sheet on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Ensure hamburger is mobile-only: if user resizes to desktop, close sheet.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleMobileExpanded = (path: string) =>
    setMobileExpanded((prev) => (prev === path ? null : path));

  return (
    <header
      className="sticky top-0 z-[60] w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-0.5 lg:gap-1" role="menubar">
          {navItems.map((item) => (
            <div
              key={item.path}
              className="relative"
              onMouseEnter={() =>
                "children" in item && item.children ? setOpenDropdown(item.path) : undefined
              }
              onMouseLeave={() => setOpenDropdown(null)}
              role="none"
            >
              <Link
                to={item.path}
                className={cn(
                  "flex items-center gap-1 px-2 py-2 text-xs font-medium transition-colors rounded-md whitespace-nowrap lg:px-3 lg:text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
                  isActive(item.path)
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                )}
                role="menuitem"
                aria-haspopup={"children" in item && item.children ? "true" : undefined}
                aria-expanded={
                  "children" in item && item.children ? openDropdown === item.path : undefined
                }
              >
                {item.label}
                {"children" in item && item.children ? (
                  <ChevronDown className="h-3 w-3" aria-hidden="true" />
                ) : null}
              </Link>

              {/* Desktop Dropdown Menu */}
              {"children" in item && item.children && openDropdown === item.path && (
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
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
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

        <div className="flex items-center gap-2">
          {/* Desktop Search */}
          <div className="hidden lg:block">
            <SearchBar />
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block shrink-0">
            <Button variant="cta" size="sm" className="text-sm" asChild>
              <Link to="/contact">Consult</Link>
            </Button>
          </div>

          {/* Mobile Hamburger (ONLY on mobile/tablet) */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="flex items-center justify-center w-11 h-11 rounded-md text-foreground bg-secondary/30 hover:bg-secondary/50 active:bg-secondary transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[90vw] max-w-sm p-0 bg-background border-border"
              >
                <div className="flex h-full flex-col">
                  <SheetHeader className="px-5 pt-6 pb-4 border-b border-border">
                    <SheetTitle className="text-left">Menu</SheetTitle>
                  </SheetHeader>

                  <nav className="flex-1 overflow-y-auto px-5 py-4 pb-safe">
                    <div className="space-y-1">
                      {navItems.map((item) => {
                        const hasChildren = "children" in item && !!item.children;
                        if (!hasChildren) {
                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={cn(
                                "block rounded-md px-3 py-3 text-base font-medium touch-manipulation",
                                isActive(item.path)
                                  ? "bg-secondary text-primary"
                                  : "text-foreground hover:bg-secondary/50",
                              )}
                            >
                              {item.label}
                            </Link>
                          );
                        }

                        const expanded = mobileExpanded === item.path;
                        return (
                          <div key={item.path} className="rounded-md border border-border/60">
                            <button
                              type="button"
                              onClick={() => toggleMobileExpanded(item.path)}
                              className={cn(
                                "w-full flex items-center justify-between px-3 py-3 text-base font-medium touch-manipulation",
                                isActive(item.path)
                                  ? "text-primary"
                                  : "text-foreground",
                              )}
                              aria-expanded={expanded}
                            >
                              <span>{item.label}</span>
                              <ChevronDown
                                className={cn(
                                  "h-5 w-5 text-muted-foreground transition-transform",
                                  expanded && "rotate-180",
                                )}
                                aria-hidden="true"
                              />
                            </button>

                            <div className={cn(expanded ? "block" : "hidden")}>
                              <div className="px-3 pb-3">
                                <Link
                                  to={item.path}
                                  className={cn(
                                    "block rounded-md px-3 py-2 text-sm font-medium touch-manipulation",
                                    location.pathname === item.path
                                      ? "bg-secondary text-primary"
                                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                                  )}
                                >
                                  All {item.label}
                                </Link>
                                <div className="mt-1 space-y-1">
                                  {item.children!.map((child) => (
                                    <Link
                                      key={child.path}
                                      to={child.path}
                                      className={cn(
                                        "block rounded-md px-3 py-2 text-sm touch-manipulation",
                                        location.pathname === child.path
                                          ? "bg-secondary text-primary font-medium"
                                          : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                                      )}
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6 border-t border-border pt-6">
                      <Button variant="cta" size="lg" className="w-full text-base" asChild>
                        <Link to="/contact">Schedule Consultation</Link>
                      </Button>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
