import { GovernmentPageLayout } from "@/components/GovernmentPageLayout";

export default function TeamingPage() {
  return (
    <GovernmentPageLayout
      seoPath="/government/teaming"
      title="Teaming & Partnerships"
      description="Guidance on building effective prime-subcontractor relationships and joint venture arrangements that strengthen your competitive position."
      capabilities={[
        "Teaming partner identification and vetting",
        "Teaming agreement development and negotiation",
        "Joint venture structuring and compliance",
        "Subcontractor management frameworks",
        "Small business utilization planning",
        "Mentor-protégé program support",
      ]}
      approach={[
        "Identify partners who complement your capabilities",
        "Establish clear roles, responsibilities, and expectations",
        "Develop agreements that protect all parties' interests",
        "Create governance structures for effective collaboration",
        "Plan for successful contract execution as a team",
      ]}
      relatedPages={[
        { label: "Opportunity Identification", path: "/government/opportunity" },
        { label: "Proposal Development", path: "/government/proposal" },
        { label: "Post-Award Support", path: "/government/post-award" },
      ]}
    />
  );
}
