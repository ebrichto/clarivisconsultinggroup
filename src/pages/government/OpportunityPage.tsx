import { GovernmentPageLayout } from "@/components/GovernmentPageLayout";

export default function OpportunityPage() {
  return (
    <GovernmentPageLayout
      seoPath="/government/opportunity"
      title="Opportunity Identification"
      description="We help you identify and evaluate federal and state contract opportunities that align with your organizational capabilities and strategic goals."
      capabilities={[
        "Federal procurement landscape analysis",
        "State and local opportunity monitoring",
        "Capability matching and gap assessment",
        "Competitive intelligence gathering",
        "Opportunity pipeline development",
        "Go/no-go decision framework support",
      ]}
      approach={[
        "Understand your organization's core strengths and capabilities",
        "Monitor relevant procurement channels and sources",
        "Evaluate opportunities against strategic fit criteria",
        "Provide actionable recommendations for pursuit decisions",
        "Support long-term positioning for future opportunities",
      ]}
      relatedPages={[
        { label: "Proposal Development", path: "/government/proposal" },
        { label: "Teaming & Partnerships", path: "/government/teaming" },
        { label: "Post-Award Support", path: "/government/post-award" },
      ]}
    />
  );
}
