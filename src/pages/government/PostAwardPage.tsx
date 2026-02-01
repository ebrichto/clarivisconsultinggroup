import { GovernmentPageLayout } from "@/components/GovernmentPageLayout";

export default function PostAwardPage() {
  return (
    <GovernmentPageLayout
      seoPath="/government/post-award"
      title="Post-Award Support"
      description="Implementation planning and compliance support to ensure successful contract execution from day one through contract closeout."
      capabilities={[
        "Contract transition and startup planning",
        "Compliance program implementation",
        "Performance monitoring and reporting",
        "Contract modification support",
        "Option year preparation",
        "Contract closeout procedures",
      ]}
      approach={[
        "Plan for successful execution before contract award",
        "Establish robust compliance and reporting systems",
        "Monitor performance against contract requirements",
        "Maintain proactive communication with contracting officers",
        "Position for successful recompetes and follow-on work",
      ]}
      relatedPages={[
        { label: "Opportunity Identification", path: "/government/opportunity" },
        { label: "Proposal Development", path: "/government/proposal" },
        { label: "Teaming & Partnerships", path: "/government/teaming" },
      ]}
    />
  );
}
