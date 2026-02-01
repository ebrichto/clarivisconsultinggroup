import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Heart, TrendingUp, Mail } from "lucide-react";
import { SEOWrapper } from "@/components/SEOWrapper";

const benefits = [
  {
    icon: TrendingUp,
    title: "Professional Growth",
    description: "Opportunities to expand your expertise in healthcare accreditation and consulting.",
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description: "Work alongside experienced professionals dedicated to excellence in health education.",
  },
  {
    icon: Heart,
    title: "Meaningful Impact",
    description: "Help shape the future of healthcare education programs across the nation.",
  },
];

export default function CareersPage() {
  return (
    <>
      <SEOWrapper path="/careers" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero section-padding">
        <div className="container-narrow mx-auto px-4 sm:px-6 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
            Careers
          </Badge>
          <h1 className="text-responsive-xl font-display font-bold tracking-tight text-white">
            Join Our Team
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Be part of a team dedicated to advancing excellence in healthcare education through expert accreditation consulting.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-responsive-lg font-display font-bold text-foreground">
              Why Clarivis?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We're building a team of passionate professionals committed to making a difference in healthcare education.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="card-hover border-border/50 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-responsive-lg font-display font-bold text-foreground">
              Current Opportunities
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team.
            </p>
          </div>

          <Card className="border-border/50 bg-secondary/20">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground mb-6">
                We don't have any open positions at the moment, but we're always interested in hearing from qualified professionals in healthcare accreditation, compliance consulting, and education program advisory.
              </p>
              <p className="text-muted-foreground mb-8">
                If you're passionate about healthcare education and want to be considered for future opportunities, we'd love to hear from you.
              </p>
              <Button asChild size="lg">
                <a href="mailto:ebrichto@clarivisgroup.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Your Resume
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative container-narrow mx-auto px-4 sm:px-6">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-responsive-md font-display font-bold text-white">
                Questions About Working With Us?
              </h2>
              <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                Reach out to learn more about our team culture and potential opportunities.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
