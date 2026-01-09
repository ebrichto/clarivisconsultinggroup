import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Clarity",
    description: "We cut through complexity to deliver straightforward, actionable guidance.",
  },
  {
    icon: Eye,
    title: "Standards-Based",
    description: "Every recommendation is grounded in established standards and best practices.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description: "We work alongside your team, building capacity and transferring knowledge.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-narrow mx-auto px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            About Clarivis
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Clear vision. Proven expertise. Trusted partnership.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Clarivis Consulting Group, LLC provides education, accreditation, compliance, and program advisory services to public and private organizations. Services include accreditation readiness and self-study support, site visit preparation, progress report preparation, recruitment support, regulatory compliance consulting, and strategic support for government contract pursuits.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Clarivis delivers clear guidance to help health sector education programs achieve compliance, operational readiness, and sustainable success.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              These principles guide every engagement and define how we work with clients.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clarivis */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Why "Clarivis"?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Our name combines "clarity" and "vision"—reflecting our commitment to providing clear insight and forward-looking guidance to the organizations we serve.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                In a complex regulatory environment, clarity is essential. We help our clients see the path forward, understand their options, and make informed decisions that support their mission.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-hero shadow-elevated">
                <div className="flex h-full items-center justify-center p-8">
                  <div className="text-center">
                    <div className="font-display text-5xl font-bold text-primary-foreground/90">
                      Clarivis
                    </div>
                    <div className="mt-4 text-lg text-primary-foreground/70">
                      Clarity + Vision
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Let Us Partner With You
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            We would welcome the opportunity to learn about your organization and discuss how we might support your goals.
          </p>
          <div className="mt-8">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
