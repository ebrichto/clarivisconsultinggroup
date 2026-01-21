import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Users, 
  ClipboardCheck, 
  Scale, 
  Rocket, 
  Check,
  ArrowRight,
  Sparkles,
  Video,
  GraduationCap,
  CalendarCheck
} from "lucide-react";

import programOriginationImg from "@/assets/pricing-program-origination.png";
import postReviewImg from "@/assets/pricing-post-review.png";
import mockSiteImg from "@/assets/pricing-mock-site.png";
import selfStudyImg from "@/assets/pricing-self-study.png";
import support360Img from "@/assets/pricing-360-support.png";

const serviceBundles = [
  {
    title: "Self-Study Only",
    description: "Ideal for programs seeking expert guidance while retaining internal project ownership.",
    price: "$1,200 – $2,500",
    priceNote: "Varies by program size, complexity, and accreditation history",
    icon: FileText,
    image: selfStudyImg,
    features: [
      "Accreditation strategy and readiness assessment",
      "Self-study planning and timeline development",
      "Standards-based self-study review and gap analysis",
      "Written feedback with prioritized recommendations",
      "Limited consultative support during self-study development",
    ],
    popular: false,
    bgColor: "bg-gradient-to-br from-amber-50 to-amber-100/80",
  },
  {
    title: "Full-Cycle Accreditation Support",
    description: "Comprehensive, hands-on support from self-study through final accreditation decision.",
    price: "$8,500",
    priceNote: "Flat fee (Travel and on-site expenses billed separately, if applicable)",
    icon: ClipboardCheck,
    image: support360Img,
    features: [
      "Accreditation strategy guidance",
      "End-to-end self-study support and review",
      "Documentation and evidence strategy",
      "Stakeholder coordination and preparation",
      "Mock site visit (virtual or on-site)",
      "Site visit readiness coaching and response planning",
      "Ongoing advisory support through final decision",
      "Progress reporting and appeal support",
    ],
    popular: true,
    bgColor: "bg-gradient-to-br from-primary/10 to-primary/5",
  },
  {
    title: "Post-Decision Support",
    description: "Focused support for programs addressing accreditation findings or adverse actions.",
    price: "$1,000 – $1,800",
    priceNote: "Appeals complexity may affect final scope and pricing",
    icon: Scale,
    image: postReviewImg,
    features: [
      "Analysis of accreditation decision letters and findings",
      "Progress report and interim report strategy",
      "Evidence development and narrative refinement",
      "Appeals advisory and process management (if applicable)",
      "Timeline management and submission readiness review",
    ],
    popular: false,
    bgColor: "bg-gradient-to-br from-sky-50 to-sky-100/80",
  },
  {
    title: "Program Origination & Initial Accreditation",
    description: "Designed for new or emerging programs preparing for initial accreditation.",
    price: "$1,500 – $7,500",
    priceNote: "Scope varies by program stage and needs",
    icon: Rocket,
    image: programOriginationImg,
    features: [
      "Accreditation pathway and eligibility assessment",
      "Standards alignment and curriculum mapping",
      "Governance, assessment, and outcomes framework development",
      "Readiness review prior to application or candidacy submission",
    ],
    popular: false,
    bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50",
  },
];

const addOnServices = [
  {
    title: "Mock Site Visit",
    description: "Realistic mock site visits designed to prepare faculty, staff, and leadership for peer review.",
    virtualPrice: "$1,500",
    onsitePrice: "$4,000",
    icon: Video,
  },
  {
    title: "Faculty & Leadership Training",
    description: "Accreditation training sessions for faculty and institutional leadership.",
    price: "$2,500 – $5,000",
    icon: GraduationCap,
  },
  {
    title: "Annual Reporting & Compliance",
    description: "Ongoing compliance support and annual reporting assistance.",
    price: "$1,000 – $7,500",
    icon: CalendarCheck,
  },
];

const standaloneServices = [
  {
    title: "360° Accreditation Support",
    description: "Full-cycle accreditation consulting from the self-study year through final decision. This includes readiness assessment, documentation strategy, stakeholder coordination, site visit preparation, and ongoing compliance support.",
    icon: ClipboardCheck,
    image: support360Img,
  },
  {
    title: "Self-Study Review & Gap Analysis",
    description: "Detailed, standards-based review of draft self-studies with written feedback identifying strengths, gaps, risks, and opportunities for improvement—grounded in current accreditation expectations and best practices.",
    icon: FileText,
    image: selfStudyImg,
  },
  {
    title: "Mock Site Visits",
    description: "Realistic mock site visits designed to prepare faculty, staff, and leadership for peer review. Includes document review, interviews, debriefing, and actionable recommendations to strengthen performance and confidence.",
    icon: Users,
    image: mockSiteImg,
  },
  {
    title: "Post-Review Support",
    description: "Strategic guidance and hands-on support following accreditation review, including progress reports, interim reports, and appeals. Services include issue analysis, evidence development, narrative refinement, and process management.",
    icon: Scale,
    image: postReviewImg,
  },
  {
    title: "Program Origination & Readiness",
    description: "Advising for new or emerging programs, including accreditation pathway planning, standards alignment, curriculum mapping, governance structures, and readiness assessments to support successful initial review.",
    icon: Rocket,
    image: programOriginationImg,
  },
];

export default function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Pricing | Clarivis Consulting Group</title>
        <meta
          name="description"
          content="Transparent pricing for accreditation consulting services. From self-study support to full-cycle accreditation guidance."
        />
        <link rel="canonical" href="https://clarivisgroup.com/pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero section-padding">
        <div className="container-narrow mx-auto px-4 sm:px-6 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
            <Sparkles className="mr-1 h-3 w-3" />
            Transparent Pricing
          </Badge>
          <h1 className="text-responsive-xl font-display font-bold tracking-tight text-white">
            Investment in Your <span className="text-accent">Accreditation Success</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Clear, straightforward pricing for expert accreditation consulting. Choose the level of support that fits your program's needs and budget.
          </p>
        </div>
      </section>

      {/* Standalone Services Overview */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-responsive-lg font-display font-bold text-foreground">
              Our Services
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Comprehensive accreditation support tailored to your program's unique needs
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {standaloneServices.map((service) => (
              <Card key={service.title} className="card-hover border-border/50 overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-16 h-16 object-contain"
                    />
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Bundles */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-responsive-lg font-display font-bold text-foreground">
              Service Bundles
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Choose the package that best matches your accreditation journey
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {serviceBundles.map((bundle) => (
              <Card 
                key={bundle.title} 
                className={`relative card-hover overflow-hidden ${bundle.bgColor} ${bundle.popular ? 'border-primary shadow-lg ring-2 ring-primary/30' : 'border-border/50'}`}
              >
                {bundle.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <img 
                        src={bundle.image} 
                        alt={bundle.title}
                        className="w-20 h-20 object-contain"
                      />
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <bundle.icon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                  <CardTitle className="mt-4 text-xl">{bundle.title}</CardTitle>
                  <CardDescription className="text-base">{bundle.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-3xl font-bold text-foreground">{bundle.price}</p>
                    <p className="text-sm text-muted-foreground mt-1">{bundle.priceNote}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground">Includes:</p>
                    <ul className="space-y-2">
                      {bundle.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full" variant={bundle.popular ? "default" : "outline"}>
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative container-narrow mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-responsive-lg font-display font-bold text-white">
              Optional Add-On Services
            </h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Available individually or bundled with any package
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {addOnServices.map((service) => (
              <Card key={service.title} className="card-hover border-white/20 bg-white/10 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 text-white mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg text-white">{service.title}</CardTitle>
                  <CardDescription className="text-white/70">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {'virtualPrice' in service ? (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white/70">Virtual:</span>
                        <span className="font-semibold text-white">{service.virtualPrice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white/70">On-site:</span>
                        <span className="font-semibold text-white">{service.onsitePrice}</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-xl font-bold text-white">{service.price}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative container-narrow mx-auto px-4 sm:px-6">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-responsive-md font-display font-bold text-white">
                Ready to Discuss Your Needs?
              </h2>
              <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                Every program is unique. Schedule a consultation to discuss your specific accreditation challenges and receive a customized proposal.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Link to="/services">
                    Explore Our Services
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
