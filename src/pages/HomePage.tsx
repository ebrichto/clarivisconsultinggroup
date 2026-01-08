import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, FileCheck, Users, Target, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Accreditation Readiness",
    description: "Comprehensive preparation for Joint Commission, CARF, and other healthcare accreditation standards.",
  },
  {
    icon: FileCheck,
    title: "Compliance Consulting",
    description: "Regulatory guidance to ensure your organization meets all federal, state, and industry requirements.",
  },
  {
    icon: Users,
    title: "Interim Leadership",
    description: "Experienced healthcare executives providing strategic direction during transitions.",
  },
  {
    icon: Target,
    title: "Government Contracts",
    description: "Strategic support for pursuing and executing federal and state healthcare contracts.",
  },
];

const trustIndicators = [
  "Standards-Based Methodology",
  "Healthcare Industry Expertise",
  "Proven Compliance Track Record",
  "Executive-Level Partnership",
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container-narrow relative mx-auto px-6 py-20 md:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-up">
              <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent-foreground/90 backdrop-blur">
                Healthcare Accreditation & Compliance
              </span>
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Clarity in Compliance.
              <br />
              <span className="text-accent-foreground/80">Confidence in Results.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 md:text-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Clarivis Consulting Group delivers standards-based guidance to help healthcare organizations achieve accreditation, regulatory compliance, and operational excellence.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path
              d="M0 80V40C240 0 480 0 720 20C960 40 1200 60 1440 40V80H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-b border-border bg-background py-8">
        <div className="container-narrow mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {trustIndicators.map((indicator) => (
              <div key={indicator} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>{indicator}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Comprehensive Healthcare Consulting
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From accreditation readiness to government contract pursuit, we provide the expertise your organization needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-hover group rounded-xl border border-border bg-card p-6 shadow-card lg:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Standards-Based Guidance You Can Trust
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We understand that healthcare compliance is not just about meeting requirements—it is about building sustainable programs that protect patients, staff, and your organization's mission.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Deep expertise in healthcare accreditation standards",
                  "Practical, actionable compliance roadmaps",
                  "Partnership approach with your leadership team",
                  "Focus on sustainable operational success",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/about">Learn About Our Approach</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-hero shadow-elevated">
                <div className="flex h-full items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-6xl font-display font-bold text-primary-foreground/90">20+</div>
                    <div className="mt-2 text-lg text-primary-foreground/70">Years of Combined Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Achieve Compliance Excellence?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Schedule a consultation to discuss how Clarivis can support your accreditation, compliance, and operational goals.
          </p>
          <div className="mt-8">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
