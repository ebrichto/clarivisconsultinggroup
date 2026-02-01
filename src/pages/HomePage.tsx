import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/utils/seoConfig";

// Service images
import serviceAccreditation from "@/assets/service-accreditation.jpg";
import serviceCompliance from "@/assets/service-compliance.jpg";
import serviceRecruitment from "@/assets/service-recruitment.jpg";
import serviceGovernment from "@/assets/service-government.jpg";
import complianceCtaBg from "@/assets/compliance-cta-bg.jpg";

// Comprehensive JSON-LD for homepage with strong Eric Brichto SEO signals
const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.domain}/#organization`,
      "name": SITE_CONFIG.legalName,
      "alternateName": ["Clarivis Group", "Clarivis", "ClarivIsGroup"],
      "url": `${SITE_CONFIG.domain}/`,
      "logo": SITE_CONFIG.logo,
      "description": "Health sector education accreditation, compliance, and program advisory services led by Eric A. Brichto, Esq.",
      "founder": {
        "@type": "Person",
        "name": SITE_CONFIG.founder,
        "alternateName": ["Eric Brichto", "Eric A. Brichto"],
        "jobTitle": "Founder & Principal",
        "url": `${SITE_CONFIG.domain}/about`
      },
      "sameAs": [
        `${SITE_CONFIG.domain}/about`,
        `${SITE_CONFIG.domain}/blog`
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.domain}/#website`,
      "url": `${SITE_CONFIG.domain}/`,
      "name": SITE_CONFIG.name,
      "description": "Expert health education accreditation consulting by Eric A. Brichto, Esq.",
      "publisher": { "@id": `${SITE_CONFIG.domain}/#organization` },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${SITE_CONFIG.domain}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_CONFIG.domain}/#service`,
      "name": SITE_CONFIG.name,
      "description": "Expert consulting for health sector education programs including accreditation readiness, compliance consulting, site visit preparation, and government contract support. Led by Eric A. Brichto, licensed attorney and former Chief Accreditation Officer.",
      "url": `${SITE_CONFIG.domain}/`,
      "telephone": SITE_CONFIG.phone,
      "email": SITE_CONFIG.email,
      "priceRange": "$$",
      "areaServed": { "@type": "Country", "name": "United States" },
      "founder": {
        "@type": "Person",
        "name": SITE_CONFIG.founder,
        "alternateName": ["Eric Brichto", "Eric A. Brichto"],
        "jobTitle": "Founder & Principal",
        "description": "Licensed attorney and experienced accreditation professional with decades of leadership in health sector education.",
        "url": `${SITE_CONFIG.domain}/about`
      },
      "serviceType": [
        "Accreditation Readiness",
        "Self-Study Support", 
        "Site Visit Preparation",
        "Progress Report Preparation",
        "Compliance Consulting",
        "Recruitment Support",
        "Government Contract Support"
      ]
    }
  ]
};

const services = [
  {
    image: serviceAccreditation,
    title: "Accreditation Readiness",
    description: "Comprehensive preparation including self-study support and progress report preparation.",
    alt: "Professional reviewing compliance documents on laptop with digital checklist icons",
    path: "/services/accreditation",
  },
  {
    image: serviceCompliance,
    title: "Compliance Consulting",
    description: "Regulatory guidance to ensure your organization meets all federal, state, and industry requirements.",
    alt: "Stacked compliance document blocks with checkmark representing organized regulatory compliance",
    path: "/services/compliance",
  },
  {
    image: serviceRecruitment,
    title: "Recruitment Support",
    description: "Strategic assistance in identifying and securing qualified personnel for your programs.",
    alt: "Team of professionals collaborating on document review in meeting",
    path: "/services/leadership",
  },
  {
    image: serviceGovernment,
    title: "Government Contracts",
    description: "Strategic support for pursuing and executing federal and state education program contracts.",
    alt: "Magnifying glass examining approved compliance documents representing government contract review",
    path: "/government",
  },
];

const trustIndicators = [
  "Clear, Actionable Guidance",
  "Health Sector Education Expertise",
  "Proven Compliance Track Record",
  "Executive-Level Partnership",
];

export default function HomePage() {
  return (
    <article>
      <Helmet>
        <title>Clarivis Consulting Group | Health Education Accreditation by Eric A. Brichto</title>
        <meta name="description" content="Clarivis Consulting Group, led by Eric A. Brichto, Esq., delivers expert accreditation readiness, compliance consulting, and site visit preparation for health sector education programs." />
        <meta name="author" content={SITE_CONFIG.founder} />
        <meta name="keywords" content="Clarivis Consulting Group, Eric Brichto, Eric A. Brichto, health education accreditation, accreditation consulting, compliance consulting, CAAHEP, CAHME, site visit preparation, healthcare education" />
        <link rel="canonical" href={`${SITE_CONFIG.domain}/`} />
        <meta property="og:title" content="Clarivis Consulting Group | Eric A. Brichto" />
        <meta property="og:description" content="Expert health education accreditation and compliance consulting led by Eric A. Brichto, licensed attorney and former Chief Accreditation Officer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_CONFIG.domain}/`} />
        <meta property="og:image" content={SITE_CONFIG.ogImage} />
        <meta property="og:site_name" content={SITE_CONFIG.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clarivis Consulting Group | Eric A. Brichto" />
        <meta name="twitter:description" content="Health education accreditation consulting by Eric A. Brichto, Esq." />
        <meta name="twitter:image" content={SITE_CONFIG.ogImage} />
        <script type="application/ld+json">{JSON.stringify(homeJsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" aria-hidden="true" />
        <div className="container-narrow relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-up">
              <span className="inline-block rounded-full bg-accent/20 px-3 py-1.5 text-xs sm:text-sm font-medium text-accent-foreground/90 backdrop-blur sm:px-4">
                Education, Accreditation & Compliance
              </span>
            </div>
            <h1 id="hero-heading" className="mt-5 sm:mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Clarity in Compliance.
              <br />
              <span className="text-accent-foreground/80">Confidence in Results.</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-primary-foreground/80 md:text-xl animate-fade-up px-2" style={{ animationDelay: "0.2s" }}>
              Clarivis Consulting Group delivers clear guidance to help health sector education programs achieve accreditation, regulatory compliance, and operational excellence.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row animate-fade-up px-4 sm:px-0" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" className="w-full sm:w-auto touch-manipulation" asChild>
                <Link to="/contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto touch-manipulation" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full" role="presentation">
            <path
              d="M0 80V40C240 0 480 0 720 20C960 40 1200 60 1440 40V80H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Trust Indicators */}
      <section aria-label="Trust indicators" className="border-b border-border bg-background py-6 sm:py-8">
        <div className="container-narrow mx-auto px-4 sm:px-6">
          <ul className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-4" role="list">
            {trustIndicators.map((indicator) => (
              <li key={indicator} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{indicator}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services Overview */}
      <section aria-labelledby="services-heading" className="section-padding bg-background">
        <div className="container-narrow mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="services-heading" className="font-display text-2xl sm:text-3xl font-bold text-foreground md:text-4xl">
              Comprehensive Education Program Consulting
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
              From accreditation readiness to government contract pursuit, we provide the expertise your organization needs.
            </p>
          </div>

          <ul className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8" role="list">
            {services.map((service) => (
              <li key={service.title}>
                <Link
                  to={service.path}
                  className="card-hover group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card active:scale-[0.98] transition-transform h-full"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 sm:p-6 lg:p-8">
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-card-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-muted-foreground">{service.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 sm:mt-12 text-center">
            <Button variant="default" size="lg" className="w-full sm:w-auto touch-manipulation" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section aria-labelledby="value-heading" className="section-padding bg-secondary/50">
        <div className="container-narrow mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 sm:gap-3 rounded-full bg-primary/10 px-3 sm:px-4 py-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-semibold text-primary">20+ Years of Combined Experience</span>
            </div>
            <h2 id="value-heading" className="font-display text-2xl sm:text-3xl font-bold text-foreground md:text-4xl">
              Clear Guidance You Can Trust
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground px-2 sm:px-0">
              We understand that education program compliance is not just about meeting requirements—it is about building sustainable programs that support learners, faculty, and your organization's mission.
            </p>
          </div>

          <ul className="mt-6 sm:mt-10 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {[
              "Deep expertise in health sector education accreditation",
              "Practical, actionable compliance roadmaps",
              "Partnership approach with your leadership team",
              "Focus on sustainable operational success",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-lg bg-background p-3 sm:p-4 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 sm:mt-10 text-center">
            <Button variant="cta" size="lg" className="w-full sm:w-auto touch-manipulation" asChild>
              <Link to="/about">Learn About Our Approach</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section aria-labelledby="cta-heading" className="section-padding relative overflow-hidden">
        <img
          src={complianceCtaBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container-narrow relative mx-auto text-center px-4 sm:px-6">
          <h2 id="cta-heading" className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Achieve Compliance Excellence?
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-primary-foreground/80 px-2 sm:px-0">
            Schedule a free consultation to discuss how Clarivis can support your accreditation, compliance, and operational goals.
          </p>
          <div className="mt-6 sm:mt-8 px-4 sm:px-0">
            <Button variant="hero" size="xl" className="w-full sm:w-auto touch-manipulation" asChild>
              <Link to="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
