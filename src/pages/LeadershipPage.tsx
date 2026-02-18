import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/utils/seoConfig";
import ownerProfile from "@/assets/owner-profile.jpg";
import partnershipBg from "@/assets/partnership-bg.png";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": SITE_CONFIG.founder,
    "alternateName": ["Eric Brichto", "Eric A. Brichto"],
    "jobTitle": "Founder & Principal",
    "description": "Eric A. Brichto is a licensed attorney and experienced accreditation professional with decades of leadership experience in health sector education accreditation, compliance, and policy development.",
    "url": `${SITE_CONFIG.domain}/leadership`,
    "image": `${SITE_CONFIG.domain}/owner-profile.jpg`,
    "worksFor": {
      "@type": "Organization",
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.domain,
    },
    "knowsAbout": [
      "Health Education Accreditation",
      "Healthcare Management Education",
      "Regulatory Compliance",
      "Policy Development",
      "Accreditation Standards",
      "Site Visit Preparation",
    ],
  },
};

export default function LeadershipPage() {
  return (
    <div>
      <Helmet>
        <title>Our Leadership | Clarivis Consulting Group</title>
        <meta
          name="description"
          content="Meet Eric A. Brichto, Esq., Founder & Principal of Clarivis Consulting Group. Licensed attorney and accreditation expert with decades of healthcare education leadership."
        />
        <meta name="author" content={SITE_CONFIG.founder} />
        <meta
          name="keywords"
          content="Eric Brichto, Eric A. Brichto, accreditation consultant, licensed attorney, healthcare education, compliance expert, Clarivis"
        />
        <link rel="canonical" href={`${SITE_CONFIG.domain}/leadership`} />
        <meta property="og:title" content="Our Leadership | Clarivis Consulting Group" />
        <meta
          property="og:description"
          content="Meet Eric A. Brichto, Esq. — licensed attorney and accreditation expert with decades of healthcare education leadership."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={`${SITE_CONFIG.domain}/leadership`} />
        <meta property="og:image" content={SITE_CONFIG.ogImage} />
        <meta property="profile:first_name" content="Eric" />
        <meta property="profile:last_name" content="Brichto" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-narrow mx-auto px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Our Leadership
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Experienced guidance rooted in decades of accreditation and regulatory expertise.
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="mt-4">
            <div className="float-left mr-6 mb-4">
              <div className="h-40 w-40 overflow-hidden rounded-xl shadow-elevated md:h-56 md:w-56">
                <img
                  src={ownerProfile}
                  alt="Eric A. Brichto, Esq."
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Eric A. Brichto, Esq.
              </h2>
              <p className="mt-1 text-lg font-medium text-primary">Founder & Principal</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Eric A. Brichto, Esq. is an experienced accreditation and regulatory professional with more than a decade of leadership in higher education and healthcare accreditation. He previously served as Chief Accreditation Officer for the Commission on Accreditation of Healthcare Management Education (CAHME), where he oversaw accreditation operations, standards development, international program reviews, and governance initiatives.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Eric has advised hundreds of academic programs on accreditation strategy, compliance, and continuous improvement, and played a key role in designing new accreditation models, mentorship programs, and professional training initiatives. A licensed attorney, he brings a practical, risk-aware approach to accreditation grounded in regulatory compliance, policy development, and organizational strategy.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Eric is a frequent author and presenter on accreditation and quality assurance and is committed to helping institutions navigate accreditation with clarity, efficiency, and confidence.
              </p>
            </div>
            <div className="clear-both"></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
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
