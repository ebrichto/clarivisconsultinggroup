import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { SEOWrapper } from "@/components/SEOWrapper";

interface GovernmentPageLayoutProps {
  title: string;
  description: string;
  capabilities: string[];
  approach: string[];
  relatedPages: { label: string; path: string }[];
  seoPath: string;
}

export function GovernmentPageLayout({ 
  title, 
  description, 
  capabilities, 
  approach,
  relatedPages,
  seoPath
}: GovernmentPageLayoutProps) {
  return (
    <div>
      <SEOWrapper path={seoPath} />

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container-narrow mx-auto px-6">
          <Link 
            to="/government" 
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Government Services
          </Link>
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            {description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Capabilities */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Our Capabilities
              </h2>
              <ul className="mt-6 space-y-4">
                {capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-foreground">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Approach */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-card lg:p-8">
              <h3 className="font-display text-xl font-semibold text-card-foreground">
                Our Approach
              </h3>
              <ul className="mt-4 space-y-3">
                {approach.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Related Capabilities
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {relatedPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="card-hover rounded-lg border border-border bg-card p-4 shadow-card"
              >
                <span className="font-medium text-card-foreground">{page.label}</span>
                <ArrowRight className="mt-2 h-4 w-4 text-accent" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
            Ready to Pursue Government Opportunities?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Let us help you develop a strategic approach to government contracting.
          </p>
          <div className="mt-8">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
