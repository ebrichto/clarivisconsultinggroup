import { ServicePageLayout } from "@/components/ServicePageLayout";

export default function CompliancePage() {
  return (
    <ServicePageLayout
      seoPath="/services/compliance"
      title="Regulatory Compliance Consulting"
      description="Navigate complex regulatory requirements with clarity and confidence. Our consultants help you build robust compliance programs that protect your organization."
      features={[
        "Federal and state regulatory analysis",
        "Compliance program development and enhancement",
        "Risk assessment and mitigation planning",
        "Corrective action planning and execution",
        "Ongoing compliance monitoring strategies",
        "Regulatory change management support",
      ]}
      benefits={[
        "Clear understanding of regulatory obligations",
        "Reduced risk of compliance violations",
        "Proactive rather than reactive compliance posture",
        "Documented policies that withstand scrutiny",
        "Confidence in regulatory interactions",
      ]}
      relatedServices={[
        { label: "Accreditation Readiness", path: "/services/accreditation" },
        { label: "Interim Leadership", path: "/services/leadership" },
        { label: "Education & Training", path: "/services/training" },
      ]}
    />
  );
}
