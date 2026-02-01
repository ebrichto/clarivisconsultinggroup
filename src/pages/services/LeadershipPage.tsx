import { ServicePageLayout } from "@/components/ServicePageLayout";

export default function LeadershipPage() {
  return (
    <ServicePageLayout
      seoPath="/services/leadership"
      title="Interim & Advisory Program Leadership"
      description="Experienced healthcare executives providing strategic direction during transitions, vacancies, or periods of organizational change."
      features={[
        "Interim executive and director placement",
        "Program development and operational oversight",
        "Organizational change management",
        "Performance improvement initiatives",
        "Transition planning and knowledge transfer",
        "Board and stakeholder advisory services",
      ]}
      benefits={[
        "Maintain momentum during leadership transitions",
        "Access experienced healthcare executives on demand",
        "Objective perspective on organizational challenges",
        "Accelerated program development and improvement",
        "Smooth handoff to permanent leadership",
      ]}
      relatedServices={[
        { label: "Compliance Consulting", path: "/services/compliance" },
        { label: "Education & Training", path: "/services/training" },
        { label: "Accreditation Readiness", path: "/services/accreditation" },
      ]}
    />
  );
}
