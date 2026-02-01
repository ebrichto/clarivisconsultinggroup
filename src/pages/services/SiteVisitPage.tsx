import { ServicePageLayout } from "@/components/ServicePageLayout";

export default function SiteVisitPage() {
  return (
    <ServicePageLayout
      seoPath="/services/site-visit"
      title="Site Visit Preparation"
      description="Ensure your team and facilities are ready for surveyor visits with comprehensive preparation strategies and hands-on coaching."
      features={[
        "Leadership and staff interview preparation",
        "Document organization and accessibility review",
        "Physical environment assessments and walkthroughs",
        "Tracer activity practice sessions",
        "Day-of coordination and support planning",
        "Post-visit response strategy development",
      ]}
      benefits={[
        "Confident, well-prepared staff during surveys",
        "Organized documentation that surveyors can navigate",
        "Reduced findings related to environment of care",
        "Smoother survey day logistics and flow",
        "Faster response to any identified concerns",
      ]}
      relatedServices={[
        { label: "Accreditation Readiness", path: "/services/accreditation" },
        { label: "Compliance Consulting", path: "/services/compliance" },
        { label: "Education & Training", path: "/services/training" },
      ]}
    />
  );
}
