import { ServicePageLayout } from "@/components/ServicePageLayout";

export default function TrainingPage() {
  return (
    <ServicePageLayout
      seoPath="/services/training"
      title="Education & Training"
      description="Build internal capacity with customized training programs designed to develop your team's compliance knowledge and operational capabilities."
      features={[
        "Standards interpretation workshops",
        "Compliance officer training and certification prep",
        "Leadership development programs",
        "Staff competency education modules",
        "Train-the-trainer programs",
        "Continuing education support and tracking",
      ]}
      benefits={[
        "Empowered staff who understand compliance expectations",
        "Reduced reliance on external consultants over time",
        "Consistent standards application across the organization",
        "Documented training for regulatory requirements",
        "Engaged workforce committed to quality",
      ]}
      relatedServices={[
        { label: "Accreditation Readiness", path: "/services/accreditation" },
        { label: "Compliance Consulting", path: "/services/compliance" },
        { label: "Site Visit Preparation", path: "/services/site-visit" },
      ]}
    />
  );
}
