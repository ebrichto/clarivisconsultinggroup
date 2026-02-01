import { ServicePageLayout } from "@/components/ServicePageLayout";

export default function AccreditationPage() {
  return (
    <ServicePageLayout
      seoPath="/services/accreditation"
      title="Accreditation Readiness & Self-Study Support"
      description="Prepare your organization for successful accreditation with expert guidance through every phase of the process, from initial assessment to survey day."
      features={[
        "Comprehensive gap analysis and readiness assessments",
        "Self-study document development and review",
        "Policy and procedure alignment with standards",
        "Staff education and competency training",
        "Mock survey preparation and execution",
        "Ongoing readiness monitoring and support",
      ]}
      benefits={[
        "Reduce survey preparation stress and uncertainty",
        "Identify and address gaps before surveyors arrive",
        "Build internal capacity for ongoing compliance",
        "Achieve successful accreditation outcomes",
        "Develop sustainable compliance systems",
      ]}
      relatedServices={[
        { label: "Site Visit Preparation", path: "/services/site-visit" },
        { label: "Compliance Consulting", path: "/services/compliance" },
        { label: "Education & Training", path: "/services/training" },
      ]}
    />
  );
}
