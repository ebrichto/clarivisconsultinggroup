import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search, ArrowRight, FileText, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { cn } from "@/lib/utils";

// Define searchable pages with enhanced keywords for SEO
const sitePages = [
  { 
    title: "Home", 
    path: "/", 
    description: "Clarivis Consulting Group - Health sector education accreditation and compliance consulting.",
    keywords: ["home", "main", "start", "clarivis", "consulting"] 
  },
  { 
    title: "Services", 
    path: "/services", 
    description: "Our comprehensive consulting services for health education programs.",
    keywords: ["services", "what we do", "offerings", "consulting"] 
  },
  { 
    title: "Accreditation Readiness", 
    path: "/services/accreditation", 
    description: "Comprehensive accreditation preparation including self-study and progress report support.",
    keywords: ["accreditation", "caahep", "coarc", "jrcert", "self-study", "readiness"] 
  },
  { 
    title: "Site Visit Preparation", 
    path: "/services/site-visit", 
    description: "Expert guidance for preparing and executing successful accreditation site visits.",
    keywords: ["site visit", "mock visit", "preparation", "visit"] 
  },
  { 
    title: "Compliance Consulting", 
    path: "/services/compliance", 
    description: "Regulatory guidance to ensure your organization meets all requirements.",
    keywords: ["compliance", "regulatory", "requirements", "regulation"] 
  },
  { 
    title: "Interim Leadership", 
    path: "/services/leadership", 
    description: "Experienced interim leadership for healthcare education programs.",
    keywords: ["leadership", "interim", "director", "management", "executive"] 
  },
  { 
    title: "Education & Training", 
    path: "/services/training", 
    description: "Professional development and training for healthcare education faculty and staff.",
    keywords: ["training", "education", "workshops", "professional development"] 
  },
  { 
    title: "Who We Serve", 
    path: "/who-we-serve", 
    description: "Healthcare organizations, academic institutions, and government agencies we serve.",
    keywords: ["clients", "healthcare", "hospitals", "colleges", "government", "universities"] 
  },
  { 
    title: "Government Contracting", 
    path: "/government", 
    description: "Federal and state government contract support and pursuit.",
    keywords: ["government", "federal", "contracts", "gsa", "sam.gov"] 
  },
  { 
    title: "Opportunity Identification", 
    path: "/government/opportunity", 
    description: "Strategic identification and evaluation of government contract opportunities.",
    keywords: ["opportunities", "contracts", "sam.gov", "rfp", "rfi"] 
  },
  { 
    title: "Proposal Development", 
    path: "/government/proposal", 
    description: "Comprehensive proposal development for government contract submissions.",
    keywords: ["proposal", "bid", "rfp", "response", "submission"] 
  },
  { 
    title: "Teaming & Partnerships", 
    path: "/government/teaming", 
    description: "Strategic teaming arrangements and partnership development.",
    keywords: ["teaming", "partnerships", "joint venture", "subcontracting", "partner"] 
  },
  { 
    title: "Post-Award Support", 
    path: "/government/post-award", 
    description: "Contract execution and compliance support after award.",
    keywords: ["post-award", "contract management", "compliance", "execution"] 
  },
  { 
    title: "Pricing", 
    path: "/pricing", 
    description: "Consulting service packages and pricing options.",
    keywords: ["pricing", "cost", "packages", "rates", "fees"] 
  },
  { 
    title: "About Eric A. Brichto", 
    path: "/about", 
    description: "Learn about Eric A. Brichto, Esq., licensed attorney and accreditation expert with decades of healthcare education experience.",
    keywords: ["about", "team", "company", "history", "eric brichto", "brichto", "attorney", "lawyer"] 
  },
  { 
    title: "Contact", 
    path: "/contact", 
    description: "Get in touch with Clarivis Consulting Group.",
    keywords: ["contact", "email", "phone", "reach out", "consultation"] 
  },
  { 
    title: "Blog", 
    path: "/blog", 
    description: "Expert insights on accreditation and compliance from Eric A. Brichto.",
    keywords: ["blog", "articles", "news", "insights", "eric brichto"] 
  },
  { 
    title: "Careers", 
    path: "/careers", 
    description: "Join our team at Clarivis Consulting Group.",
    keywords: ["careers", "jobs", "employment", "hiring", "work"] 
  },
];

interface SearchResult {
  title: string;
  path: string;
  type: "page" | "blog";
  description?: string;
  category?: string;
  author?: string;
  date?: string;
}

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);

  // Perform search when query changes
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
      const descMatch = page.description.toLowerCase().includes(searchTerm);
      const keywordMatch = page.keywords.some((kw) => kw.includes(searchTerm));
      if (titleMatch || descMatch || keywordMatch) {
        matchedResults.push({ 
          title: page.title, 
          path: page.path, 
          type: "page",
          description: page.description
        });
      }
    });

    // Search blog posts
    blogPosts.forEach((post) => {
      const titleMatch = post.title.toLowerCase().includes(searchTerm);
      const excerptMatch = post.excerpt.toLowerCase().includes(searchTerm);
      const categoryMatch = post.category.toLowerCase().includes(searchTerm);
      const authorMatch = post.author.toLowerCase().includes(searchTerm);
      const contentMatch = post.content.toLowerCase().includes(searchTerm);
      
      if (titleMatch || excerptMatch || categoryMatch || authorMatch || contentMatch) {
        matchedResults.push({
          title: post.title,
          path: `/blog/${post.id}`,
          type: "blog",
          description: post.excerpt,
          category: post.category,
          author: post.author,
          date: post.date
        });
      }
    });

    setResults(matchedResults);
  }, [query]);

  // Update URL when search is submitted
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    }
  };

  const pageResults = results.filter(r => r.type === "page");
  const blogResults = results.filter(r => r.type === "blog");

  return (
    <>
      <Helmet>
        <title>{query ? `Search: ${query}` : "Search"} | Clarivis Consulting Group</title>
        <meta name="description" content="Search for articles, services, and resources on health education accreditation from Eric A. Brichto and Clarivis Consulting Group." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://clarivisgroup.com/search" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container-narrow mx-auto px-4 sm:px-6">
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Search
          </h1>
          <p className="mt-3 text-lg text-primary-foreground/80">
            Find articles, services, and resources
          </p>

          {/* Search Form */}
          <form onSubmit={handleSubmit} className="mt-8 flex gap-3 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for articles, services, Eric Brichto..."
                className="pl-10 h-12 text-base bg-background"
                autoFocus
              />
            </div>
            <Button type="submit" variant="hero" size="lg">
              Search
            </Button>
          </form>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto px-4 sm:px-6">
          {query.trim() && (
            <p className="mb-8 text-muted-foreground">
              {results.length === 0 
                ? `No results found for "${query}"`
                : `Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`
              }
            </p>
          )}

          {!query.trim() && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">
                Enter a search term to find pages and articles
              </p>
              <p className="mt-2 text-sm text-muted-foreground/70">
                Try searching for "accreditation", "compliance", "Eric Brichto", or "site visit"
              </p>
            </div>
          )}

          {/* Page Results */}
          {pageResults.length > 0 && (
            <div className="mb-12">
              <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Pages ({pageResults.length})
              </h2>
              <div className="space-y-4">
                {pageResults.map((result) => (
                  <Link
                    key={result.path}
                    to={result.path}
                    className="block rounded-lg border border-border bg-card p-5 transition-all hover:shadow-md hover:border-primary/30"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary">
                          {result.title}
                        </h3>
                        {result.description && (
                          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                            {result.description}
                          </p>
                        )}
                        <p className="mt-2 text-xs text-primary">
                          clarivisgroup.com{result.path}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Blog Results */}
          {blogResults.length > 0 && (
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-accent" />
                Articles ({blogResults.length})
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogResults.map((result) => (
                  <Link
                    key={result.path}
                    to={result.path}
                    className={cn(
                      "group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-md hover:border-accent/30",
                      "flex flex-col"
                    )}
                  >
                    {result.category && (
                      <span className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
                        {result.category}
                      </span>
                    )}
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {result.title}
                    </h3>
                    {result.description && (
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">
                        {result.description}
                      </p>
                    )}
                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{result.author}</span>
                      <span>{result.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
