import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, FileCheck, Users, ClipboardCheck, BookOpen, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Accreditation Readiness",
    description: "Comprehensive preparation including self-study and progress report support.",
    path: "/services/accreditation",
  },
  {
    icon: ClipboardCheck,
    title: "Site Visit Preparation",
    description: "Ensure your team and facilities are ready for surveyor visits.",
    path: "/services/site-visit",
  },
  {
    icon: FileCheck,
    title: "Compliance Consulting",
    description: "Navigate complex regulatory requirements with clarity.",
    path: "/services/compliance",
  },
  {
    icon: Users,
    title: "Recruitment Support",
    description: "Strategic assistance in identifying qualified personnel for your programs.",
    path: "/services/leadership",
  },
  {
    icon: BookOpen,
    title: "Education & Training",
    description: "Build internal capacity with customized training programs.",
    path: "/services/training",
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

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="card-hover group flex flex-col rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-muted-foreground">{service.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
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
            Every organization is unique. Let us design a consulting engagement tailored to your specific needs.
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
