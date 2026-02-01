import { GovernmentPageLayout } from "@/components/GovernmentPageLayout";

export default function ProposalPage() {
  return (
    <GovernmentPageLayout
      seoPath="/government/proposal"
      title="Proposal Development"
      description="Expert support in developing compliant, competitive proposals that clearly articulate your value proposition and technical approach."
      capabilities={[
        "Proposal strategy and win theme development",
        "Technical and management volume writing",
        "Compliance matrix development and tracking",
        "Past performance narrative preparation",
        "Cost/price volume support and review",
        "Final proposal review and quality assurance",
      ]}
      approach={[
        "Develop a clear, compelling win strategy early",
        "Focus on customer needs and evaluation criteria",
        "Leverage your unique differentiators and strengths",
        "Ensure complete compliance with RFP requirements",
        "Build in sufficient review cycles for quality",
      ]}
      relatedPages={[
        { label: "Opportunity Identification", path: "/government/opportunity" },
        { label: "Teaming & Partnerships", path: "/government/teaming" },
        { label: "Post-Award Support", path: "/government/post-award" },
      ]}
    />
  );
}
