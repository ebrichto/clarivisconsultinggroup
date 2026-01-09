import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Service images
import serviceAccreditation from "@/assets/service-accreditation.jpg";
import serviceCompliance from "@/assets/service-compliance.jpg";
import serviceRecruitment from "@/assets/service-recruitment.jpg";
import serviceGovernment from "@/assets/service-government.jpg";

const services = [
  {
    image: serviceAccreditation,
    title: "Accreditation Readiness",
    description: "Comprehensive preparation including self-study and progress report support.",
    path: "/services/accreditation",
    alt: "Professional reviewing compliance documents on laptop with digital checklist icons",
  },
  {
    image: serviceCompliance,
    title: "Site Visit Preparation",
    description: "Ensure your team and facilities are ready for surveyor visits.",
    path: "/services/site-visit",
    alt: "Stacked compliance document blocks with checkmark representing organized regulatory compliance",
  },
  {
    image: serviceRecruitment,
    title: "Compliance Consulting",
    description: "Navigate complex regulatory requirements with clarity.",
    path: "/services/compliance",
    alt: "Team of professionals collaborating on document review in meeting",
  },
  {
    image: serviceGovernment,
    title: "Recruitment Support",
    description: "Strategic assistance in identifying qualified personnel for your programs.",
    path: "/services/leadership",
    alt: "Magnifying glass examining approved compliance documents representing government contract review",
  },
  {
    image: serviceAccreditation,
    title: "Education & Training",
    description: "Build internal capacity with customized training programs.",
    path: "/services/training",
    alt: "Professional reviewing compliance documents on laptop with digital checklist icons",
  },
];

export default function ServicesPage() {
  return (
    <article>
      {/* Hero */}
      <section aria-labelledby="services-hero-heading" className="bg-gradient-hero py-16 md:py-24">
        <div className="container-narrow mx-auto px-6 text-center">
          <h1 id="services-hero-heading" className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Comprehensive consulting solutions designed to support your organization's accreditation, compliance, and operational success.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section aria-labelledby="services-grid-heading" className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <h2 id="services-grid-heading" className="sr-only">Available Services</h2>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" role="list">
            {services.map((service) => (
              <li key={service.path}>
                <Link
                  to={service.path}
                  className="card-hover group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-card-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-muted-foreground">{service.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="services-cta-heading" className="section-padding bg-secondary/50">
        <div className="container-narrow mx-auto text-center">
          <h2 id="services-cta-heading" className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Need a Customized Solution?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Every organization is unique. Let us design a consulting engagement tailored to your specific needs.
          </p>
          <div className="mt-8">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">
                Discuss Your Needs
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
