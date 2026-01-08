import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Search, Users, CheckCircle, ArrowRight, CheckCircle2 } from "lucide-react";

const capabilities = [
  {
    icon: Search,
    title: "Opportunity Identification",
    description: "We help you identify and evaluate federal and state contract opportunities aligned with your organizational capabilities.",
  },
  {
    icon: FileText,
    title: "Proposal Development",
    description: "Expert support in developing compliant, competitive proposals that clearly articulate your value proposition.",
  },
  {
    icon: Users,
    title: "Teaming & Partnerships",
    description: "Guidance on building effective prime-subcontractor relationships and joint venture arrangements.",
  },
  {
    icon: CheckCircle,
    title: "Post-Award Support",
    description: "Implementation planning and compliance support to ensure successful contract execution.",
  },
];

const contractTypes = [
  "Healthcare Service Delivery Contracts",
  "Medical Staffing & Personnel Services",
  "Healthcare IT & Systems Support",
  "Training & Education Programs",
  "Quality Assurance & Compliance Services",
  "Program Management & Advisory",
];

export default function GovernmentPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-narrow mx-auto px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Government Contract Support
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Strategic guidance for organizations pursuing federal, state, and local healthcare contracts.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Navigate the Government Contracting Landscape
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Government healthcare contracts offer significant opportunities—but the pursuit process is complex. Clarivis provides the expertise you need to compete effectively and execute successfully.
            </p>
          </div>

          {/* Capabilities */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="card-hover rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <capability.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-card-foreground">
                  {capability.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Types */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Contract Areas We Support
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our team has experience supporting organizations across a wide range of healthcare contract categories.
              </p>
              <ul className="mt-8 space-y-3">
                {contractTypes.map((type) => (
                  <li key={type} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                    <span className="text-foreground">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-8 shadow-card">
              <h3 className="font-display text-xl font-semibold text-card-foreground">
                Why Partner with Clarivis?
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Deep understanding of government healthcare requirements",
                  "Proven proposal development methodology",
                  "Focus on compliance from pursuit through execution",
                  "Experienced in both prime and subcontractor roles",
                ].map((item) => (
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

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Pursue Government Opportunities?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Let us help you develop a strategic approach to government contracting.
          </p>
          <div className="mt-8">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Discuss Your Goals
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
