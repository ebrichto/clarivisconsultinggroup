import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Hospital, Stethoscope, Shield, ArrowRight } from "lucide-react";

const audiences = [
  {
    icon: Hospital,
    title: "Healthcare Organizations",
    description: "Hospitals, health systems, and clinical facilities seeking accreditation and compliance excellence.",
    needs: [
      "Joint Commission, CARF, or AAAHC accreditation",
      "Regulatory compliance programs",
      "Quality improvement initiatives",
      "Operational readiness assessments",
    ],
  },
  {
    icon: Shield,
    title: "Compliance & Quality Leaders",
    description: "Directors and officers responsible for maintaining organizational compliance and quality standards.",
    needs: [
      "Standards interpretation and application",
      "Policy and procedure development",
      "Risk management strategies",
      "Performance monitoring systems",
    ],
  },
  {
    icon: Building2,
    title: "Government Contractors",
    description: "Organizations pursuing or executing federal and state healthcare contracts.",
    needs: [
      "Contract compliance requirements",
      "Proposal development support",
      "Subcontractor management",
      "Audit preparation assistance",
    ],
  },
  {
    icon: Stethoscope,
    title: "Healthcare Executives",
    description: "C-suite leaders and program directors driving strategic healthcare initiatives.",
    needs: [
      "Interim leadership support",
      "Strategic planning guidance",
      "Change management expertise",
      "Board and stakeholder communication",
    ],
  },
];

export default function WhoWeServePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-narrow mx-auto px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Who We Serve
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            We partner with healthcare organizations and leaders who are committed to achieving and maintaining the highest standards of compliance and operational excellence.
          </p>
        </div>
      </section>

      {/* Audiences */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="card-hover flex flex-col rounded-xl border border-border bg-card p-6 shadow-card lg:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <audience.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-card-foreground">
                  {audience.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{audience.description}</p>
                <div className="mt-6 flex-1">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Common Needs
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {audience.needs.map((need) => (
                      <li key={need} className="flex items-start gap-2 text-sm text-card-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {need}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Approach to Partnership
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe in building lasting partnerships, not just completing projects. Our consultants embed with your team to understand your unique challenges, culture, and goals—delivering solutions that work in your specific context.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Understand",
                description: "We begin by deeply understanding your organization's current state, challenges, and objectives.",
              },
              {
                step: "02",
                title: "Strategize",
                description: "We develop a clear, actionable roadmap tailored to your specific needs and timeline.",
              },
              {
                step: "03",
                title: "Execute",
                description: "We partner with your team to implement solutions and build sustainable internal capacity.",
              },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {phase.step}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {phase.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            See Yourself Here?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            If you are facing accreditation, compliance, or operational challenges, we are ready to help.
          </p>
          <div className="mt-8">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start the Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
