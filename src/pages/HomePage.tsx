import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Service images
import serviceAccreditation from "@/assets/service-accreditation.jpg";
import serviceCompliance from "@/assets/service-compliance.jpg";
import serviceRecruitment from "@/assets/service-recruitment.jpg";
import serviceGovernment from "@/assets/service-government.jpg";
import complianceCtaBg from "@/assets/compliance-cta-bg.jpg";

const services = [
  {
    image: serviceAccreditation,
    title: "Accreditation Readiness",
    description: "Comprehensive preparation including self-study support and progress report preparation.",
    alt: "Professional reviewing compliance documents on laptop with digital checklist icons",
  },
  {
    image: serviceCompliance,
    title: "Compliance Consulting",
    description: "Regulatory guidance to ensure your organization meets all federal, state, and industry requirements.",
    alt: "Stacked compliance document blocks with checkmark representing organized regulatory compliance",
  },
  {
    image: serviceRecruitment,
    title: "Recruitment Support",
    description: "Strategic assistance in identifying and securing qualified personnel for your programs.",
    alt: "Team of professionals collaborating on document review in meeting",
  },
  {
    image: serviceGovernment,
    title: "Government Contracts",
    description: "Strategic support for pursuing and executing federal and state education program contracts.",
    alt: "Magnifying glass examining approved compliance documents representing government contract review",
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
      {/* Hero Section */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" aria-hidden="true" />
        <div className="container-narrow relative mx-auto px-6 py-20 md:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-up">
              <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent-foreground/90 backdrop-blur">
                Education, Accreditation & Compliance
              </span>
            </div>
            <h1 id="hero-heading" className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Clarity in Compliance.
              <br />
              <span className="text-accent-foreground/80">Confidence in Results.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 md:text-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Clarivis Consulting Group delivers clear guidance to help health sector education programs achieve accreditation, regulatory compliance, and operational excellence.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
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
      <section aria-label="Trust indicators" className="border-b border-border bg-background py-8">
        <div className="container-narrow mx-auto px-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4" role="list">
            {trustIndicators.map((indicator) => (
              <li key={indicator} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>{indicator}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services Overview */}
      <section aria-labelledby="services-heading" className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="services-heading" className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Comprehensive Education Program Consulting
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From accreditation readiness to government contract pursuit, we provide the expertise your organization needs.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8" role="list">
            {services.map((service) => (
              <li
                key={service.title}
                className="card-hover group overflow-hidden rounded-xl border border-border bg-card shadow-card"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="font-display text-xl font-semibold text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center">
            <Button variant="default" size="lg" asChild>
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
        <div className="container-narrow mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2">
              <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-semibold text-primary">20+ Years of Combined Experience</span>
            </div>
            <h2 id="value-heading" className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Clear Guidance You Can Trust
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We understand that education program compliance is not just about meeting requirements—it is about building sustainable programs that support learners, faculty, and your organization's mission.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {[
              "Deep expertise in health sector education accreditation",
              "Practical, actionable compliance roadmaps",
              "Partnership approach with your leadership team",
              "Focus on sustainable operational success",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-lg bg-background p-4 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <Button variant="cta" size="lg" asChild>
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
        <div className="container-narrow relative mx-auto text-center">
          <h2 id="cta-heading" className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Achieve Compliance Excellence?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Schedule a consultation to discuss how Clarivis can support your accreditation, compliance, and operational goals.
          </p>
          <div className="mt-8">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
