import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, FileCheck, Users, Target, ClipboardCheck, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "accreditation",
    icon: Shield,
    title: "Accreditation Readiness & Self-Study Support",
    description: "Prepare your organization for successful accreditation with expert guidance through every phase of the process.",
    features: [
      "Gap analysis and readiness assessments",
      "Self-study document development",
      "Policy and procedure review",
      "Staff education and training",
      "Mock survey preparation",
    ],
  },
  {
    id: "site-visit",
    icon: ClipboardCheck,
    title: "Site Visit Preparation",
    description: "Ensure your team and facilities are ready for surveyor visits with comprehensive preparation strategies.",
    features: [
      "Leadership and staff interview preparation",
      "Document organization and accessibility",
      "Physical environment assessments",
      "Tracer activity practice sessions",
      "Day-of coordination support",
    ],
  },
  {
    id: "compliance",
    icon: FileCheck,
    title: "Regulatory Compliance Consulting",
    description: "Navigate complex regulatory requirements with clarity and confidence.",
    features: [
      "Federal and state regulatory analysis",
      "Compliance program development",
      "Risk assessment and mitigation",
      "Corrective action planning",
      "Ongoing compliance monitoring strategies",
    ],
  },
  {
    id: "leadership",
    icon: Users,
    title: "Interim & Advisory Program Leadership",
    description: "Experienced healthcare executives providing strategic direction when you need it most.",
    features: [
      "Interim executive placement",
      "Program development and oversight",
      "Organizational change management",
      "Performance improvement initiatives",
      "Transition planning and support",
    ],
  },
  {
    id: "government",
    icon: Target,
    title: "Government Contract Pursuit Support",
    description: "Strategic guidance for organizations pursuing federal and state healthcare contracts.",
    features: [
      "Opportunity identification and analysis",
      "Proposal development support",
      "Compliance requirements navigation",
      "Subcontractor coordination",
      "Post-award implementation planning",
    ],
  },
  {
    id: "training",
    icon: BookOpen,
    title: "Education & Training",
    description: "Build internal capacity with customized training programs for your team.",
    features: [
      "Standards interpretation workshops",
      "Compliance officer training",
      "Leadership development programs",
      "Staff competency education",
      "Continuing education support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-narrow mx-auto px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Comprehensive consulting solutions designed to support your organization's accreditation, compliance, and operational success.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid items-start gap-8 lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-lg text-muted-foreground">{service.description}</p>
                </div>
                <div className={`rounded-xl border border-border bg-card p-6 shadow-card ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    What We Deliver
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Need a Customized Solution?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Every organization is unique. Let us design a consulting engagement tailored to your specific needs and objectives.
          </p>
          <div className="mt-8">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">
                Discuss Your Needs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
