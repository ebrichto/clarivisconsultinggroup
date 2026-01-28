import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { blogPosts } from "@/data/blogPosts";

// Define searchable pages
const sitePages = [
  { title: "Home", path: "/", keywords: ["home", "main", "start"] },
  { title: "Services", path: "/services", keywords: ["services", "what we do", "offerings"] },
  { title: "Accreditation Readiness", path: "/services/accreditation", keywords: ["accreditation", "caahep", "coarc", "jrcert", "self-study"] },
  { title: "Site Visit Preparation", path: "/services/site-visit", keywords: ["site visit", "mock visit", "preparation"] },
  { title: "Compliance Consulting", path: "/services/compliance", keywords: ["compliance", "regulatory", "requirements"] },
  { title: "Interim Leadership", path: "/services/leadership", keywords: ["leadership", "interim", "director", "management"] },
  { title: "Education & Training", path: "/services/training", keywords: ["training", "education", "workshops", "professional development"] },
  { title: "Who We Serve", path: "/who-we-serve", keywords: ["clients", "healthcare", "hospitals", "colleges", "government"] },
  { title: "Government", path: "/government", keywords: ["government", "federal", "contracts", "gsa"] },
  { title: "Opportunity Identification", path: "/government/opportunity", keywords: ["opportunities", "contracts", "sam.gov", "rfp"] },
  { title: "Proposal Development", path: "/government/proposal", keywords: ["proposal", "bid", "rfp", "response"] },
  { title: "Teaming & Partnerships", path: "/government/teaming", keywords: ["teaming", "partnerships", "joint venture", "subcontracting"] },
  { title: "Post-Award Support", path: "/government/post-award", keywords: ["post-award", "contract management", "compliance"] },
  { title: "Pricing", path: "/pricing", keywords: ["pricing", "cost", "packages", "rates"] },
  { title: "About Eric A. Brichto", path: "/about", keywords: ["about", "team", "company", "history", "eric brichto", "brichto"] },
  { title: "Contact", path: "/contact", keywords: ["contact", "email", "phone", "reach out"] },
  { title: "Blog", path: "/blog", keywords: ["blog", "articles", "news", "insights"] },
  { title: "Careers", path: "/careers", keywords: ["careers", "jobs", "employment", "hiring"] },
];

interface SearchResult {
  title: string;
  path: string;
  type: "page" | "blog";
  excerpt?: string;
}

interface SearchBarProps {
  variant?: "desktop" | "mobile";
  onClose?: () => void;
}

export function SearchBar({ variant = "desktop", onClose }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(variant === "mobile");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Search logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchTerm = query.toLowerCase();
    const matchedResults: SearchResult[] = [];

    // Search pages
    sitePages.forEach((page) => {
      const titleMatch = page.title.toLowerCase().includes(searchTerm);
      const keywordMatch = page.keywords.some((kw) => kw.includes(searchTerm));
      if (titleMatch || keywordMatch) {
        matchedResults.push({ title: page.title, path: page.path, type: "page" });
      }
    });

    // Search blog posts
    blogPosts.forEach((post) => {
      const titleMatch = post.title.toLowerCase().includes(searchTerm);
      const excerptMatch = post.excerpt.toLowerCase().includes(searchTerm);
      const categoryMatch = post.category.toLowerCase().includes(searchTerm);
      const authorMatch = post.author.toLowerCase().includes(searchTerm);
      if (titleMatch || excerptMatch || categoryMatch || authorMatch) {
        matchedResults.push({
          title: post.title,
          path: `/blog/${post.id}`,
          type: "blog",
          excerpt: post.excerpt.slice(0, 80) + "...",
        });
      }
    });

    setResults(matchedResults.slice(0, 8)); // Limit results
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[selectedIndex]) {
        navigateToResult(results[selectedIndex]);
      } else if (query.trim()) {
        // Navigate to search page with query
        navigate(`/search?q=${encodeURIComponent(query.trim())}`);
        closeSearch();
      }
    } else if (e.key === "Escape") {
      closeSearch();
    }
  };

  const navigateToResult = (result: SearchResult) => {
    navigate(result.path);
    closeSearch();
  };

  const closeSearch = () => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
    onClose?.();
  };

  const openSearch = () => {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleViewAllResults = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      closeSearch();
    }
  };

  // Close on click outside (desktop only)
  useEffect(() => {
    if (variant === "mobile") return;
    
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeSearch();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, variant]);

  // Mobile variant - full width inline search
  if (variant === "mobile") {
    return (
      <div className="w-full">
        <div className="flex items-center gap-2 bg-secondary/50 rounded-lg p-2">
          <Search className="h-5 w-5 text-muted-foreground ml-2 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search pages, articles..."
            className="flex-1 bg-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-none py-2"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="flex items-center justify-center w-8 h-8 rounded text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors shrink-0"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="mt-2 bg-background border border-border rounded-lg max-h-64 overflow-y-auto">
            {results.map((result, index) => (
              <button
                key={result.path}
                onClick={() => navigateToResult(result)}
                className={cn(
                  "w-full text-left px-4 py-3 transition-colors border-b border-border/50 last:border-0",
                  index === selectedIndex
                    ? "bg-secondary"
                    : "hover:bg-secondary/50"
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "text-[10px] font-medium uppercase px-1.5 py-0.5 rounded",
                      result.type === "blog"
                        ? "bg-accent/20 text-accent-foreground"
                        : "bg-primary/20 text-primary"
                    )}
                  >
                    {result.type}
                  </span>
                  <span className="text-sm font-medium text-foreground truncate">
                    {result.title}
                  </span>
                </div>
              </button>
            ))}
            <button
              onClick={handleViewAllResults}
              className="w-full text-center px-4 py-3 text-sm font-medium text-primary hover:bg-secondary/50 transition-colors"
            >
              View all results →
            </button>
          </div>
        )}

        {/* No results */}
        {query.trim() && results.length === 0 && (
          <div className="mt-2 bg-background border border-border rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground">No results found</p>
            <button
              onClick={handleViewAllResults}
              className="mt-2 text-sm font-medium text-primary hover:underline"
            >
              Search all content →
            </button>
          </div>
        )}
      </div>
    );
  }

  // Desktop variant
  return (
    <div ref={containerRef} className="relative">
      {/* Search trigger button */}
      {!isOpen && (
        <button
          onClick={openSearch}
          className="flex items-center justify-center w-9 h-9 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
          aria-label="Open search"
        >
          <Search className="h-4 w-4" />
        </button>
      )}

      {/* Expanded search input */}
      {isOpen && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-50">
          <div className="flex items-center gap-2 bg-background border border-border rounded-lg shadow-lg p-1 min-w-[280px] lg:min-w-[320px]">
            <Search className="h-4 w-4 text-muted-foreground ml-2 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search pages, articles..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none py-2"
            />
            <button
              onClick={closeSearch}
              className="flex items-center justify-center w-7 h-7 rounded text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors shrink-0"
              aria-label="Close search"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Results dropdown */}
          {results.length > 0 && (
            <div className="absolute top-full right-0 left-0 mt-1 bg-background border border-border rounded-lg shadow-elevated max-h-80 overflow-y-auto">
              {results.map((result, index) => (
                <button
                  key={result.path}
                  onClick={() => navigateToResult(result)}
                  className={cn(
                    "w-full text-left px-4 py-3 transition-colors border-b border-border/50 last:border-0",
                    index === selectedIndex
                      ? "bg-secondary"
                      : "hover:bg-secondary/50"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "text-[10px] font-medium uppercase px-1.5 py-0.5 rounded",
                        result.type === "blog"
                          ? "bg-accent/20 text-accent-foreground"
                          : "bg-primary/20 text-primary"
                      )}
                    >
                      {result.type}
                    </span>
                    <span className="text-sm font-medium text-foreground truncate">
                      {result.title}
                    </span>
                  </div>
                  {result.excerpt && (
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                      {result.excerpt}
                    </p>
                  )}
                </button>
              ))}
              <button
                onClick={handleViewAllResults}
                className="w-full text-center px-4 py-2 text-sm font-medium text-primary hover:bg-secondary/50 transition-colors border-t border-border"
              >
                View all results →
              </button>
            </div>
          )}

          {/* No results */}
          {query.trim() && results.length === 0 && (
            <div className="absolute top-full right-0 left-0 mt-1 bg-background border border-border rounded-lg shadow-elevated p-4 text-center">
              <p className="text-sm text-muted-foreground">No results found</p>
              <button
                onClick={handleViewAllResults}
                className="mt-2 text-sm font-medium text-primary hover:underline"
              >
                Search all content →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
