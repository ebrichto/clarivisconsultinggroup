import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, ArrowRight, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/utils/seoConfig";
import partnershipBg from "@/assets/partnership-bg.png";

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

// JSON-LD structured data for Eric Brichto
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "Person",
    "name": SITE_CONFIG.founder,
    "alternateName": ["Eric Brichto", "Eric A. Brichto"],
    "jobTitle": "Founder & Principal",
    "description": "Eric A. Brichto is a licensed attorney and experienced accreditation professional with decades of leadership experience in health sector education accreditation, compliance, and policy development. Eric Brichto serves as Founder and Principal of Clarivis Consulting Group.",
    "url": `${SITE_CONFIG.domain}/about`,
    "image": `${SITE_CONFIG.domain}/owner-profile.jpg`,
    "sameAs": [
      `${SITE_CONFIG.domain}/blog`,
      `${SITE_CONFIG.domain}/about`
    ],
    "worksFor": {
      "@type": "Organization",
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.domain
    },
    "knowsAbout": [
      "Health Education Accreditation",
      "Healthcare Management Education",
      "Regulatory Compliance",
      "Policy Development",
      "Accreditation Standards",
      "Site Visit Preparation"
    ]
  }
};

export default function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>About Eric A. Brichto, Esq. | Clarivis Consulting Group</title>
        <meta
          name="description"
          content="Eric A. Brichto, Esq., licensed attorney and accreditation professional with decades of leadership in health sector education. Former Chief Accreditation Officer at CAHME."
        />
        <meta name="author" content={SITE_CONFIG.founder} />
        <meta name="keywords" content="Eric Brichto, Eric A. Brichto, accreditation consultant, licensed attorney, healthcare education, compliance expert, CAHME, Clarivis" />
        <link rel="canonical" href={`${SITE_CONFIG.domain}/about`} />
        <meta property="og:title" content="About Eric A. Brichto | Clarivis Consulting Group" />
        <meta property="og:description" content="Eric A. Brichto, Esq. is a licensed attorney and accreditation expert with decades of experience in health sector education." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={`${SITE_CONFIG.domain}/about`} />
        <meta property="og:image" content={SITE_CONFIG.ogImage} />
        <meta property="profile:first_name" content="Eric" />
        <meta property="profile:last_name" content="Brichto" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

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

      {/* Leadership Link */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Our Leadership
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Led by Eric A. Brichto, Esq., a licensed attorney and experienced accreditation professional with decades of healthcare education leadership.
          </p>
          <div className="mt-6">
            <Button variant="outline" size="lg" asChild>
              <Link to="/leadership">
                Meet Our Team
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Clarivis */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2">
              <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-semibold text-primary">Clarity + Vision</span>
            </div>
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
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={partnershipBg} 
            alt="" 
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        
        <div className="container-narrow relative mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Let Us Partner With You
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
            We would welcome the opportunity to learn about your organization and discuss how we might support your goals.
          </p>
          <div className="mt-8">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
