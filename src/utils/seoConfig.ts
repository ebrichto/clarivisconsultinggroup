// Centralized SEO Configuration for Clarivis Consulting Group
// Domain: https://www.clarivisgroup.com

export const SITE_CONFIG = {
  name: "Clarivis Consulting Group",
  legalName: "Clarivis Consulting Group, LLC",
  domain: "https://www.clarivisgroup.com",
  founder: "Eric A. Brichto, Esq.",
  email: "ebrichto@clarivisgroup.com",
  phone: "+1-508-446-4592",
  logo: "https://www.clarivisgroup.com/logo.png",
  ogImage: "https://www.clarivisgroup.com/og-image.png",
} as const;

// SEO metadata for each page route
export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  canonicalPath: string;
  ogType?: "website" | "article" | "profile";
}

export const pageSEO: Record<string, PageSEO> = {
  // Homepage
  "/": {
    title: "Clarivis Consulting Group | Health Education Accreditation by Eric A. Brichto",
    description: "Clarivis Consulting Group, led by Eric A. Brichto, Esq., delivers expert accreditation readiness, compliance consulting, and site visit preparation for health sector education programs.",
    keywords: ["Clarivis Consulting Group", "Eric Brichto", "Eric A. Brichto", "health education accreditation", "accreditation consulting", "compliance consulting", "CAAHEP", "CAHME", "site visit preparation", "healthcare education"],
    canonicalPath: "/",
    ogType: "website",
  },

  // Services
  "/services": {
    title: "Accreditation & Compliance Services | Clarivis Consulting Group",
    description: "Comprehensive accreditation readiness, site visit preparation, compliance consulting, and training services for health sector education programs. Expert guidance from Eric A. Brichto.",
    keywords: ["accreditation services", "compliance consulting", "site visit preparation", "healthcare education", "accreditation readiness", "Clarivis"],
    canonicalPath: "/services",
    ogType: "website",
  },

  "/services/accreditation": {
    title: "Accreditation Readiness Services | Clarivis Consulting Group",
    description: "Expert accreditation readiness consulting including self-study support, gap analysis, and strategic planning for CAAHEP, CAHME, and other health education accreditation bodies.",
    keywords: ["accreditation readiness", "self-study support", "CAAHEP", "CAHME", "health education accreditation", "gap analysis", "accreditation consulting"],
    canonicalPath: "/services/accreditation",
    ogType: "website",
  },

  "/services/site-visit": {
    title: "Site Visit Preparation | Clarivis Consulting Group",
    description: "Comprehensive site visit preparation including mock site visits, faculty coaching, and documentation review. Ensure your program is ready for accreditation peer review.",
    keywords: ["site visit preparation", "mock site visit", "accreditation visit", "peer review preparation", "faculty coaching", "accreditation readiness"],
    canonicalPath: "/services/site-visit",
    ogType: "website",
  },

  "/services/compliance": {
    title: "Regulatory Compliance Consulting | Clarivis Consulting Group",
    description: "Navigate complex regulatory requirements with clarity. Expert compliance consulting for healthcare education programs including policy development and risk management.",
    keywords: ["compliance consulting", "regulatory compliance", "healthcare regulations", "policy development", "risk management", "education compliance"],
    canonicalPath: "/services/compliance",
    ogType: "website",
  },

  "/services/leadership": {
    title: "Recruitment & Leadership Support | Clarivis Consulting Group",
    description: "Strategic recruitment support and leadership development for healthcare education programs. Increase student applications and build strong program leadership.",
    keywords: ["recruitment support", "leadership development", "program development", "healthcare education", "student recruitment", "program management"],
    canonicalPath: "/services/leadership",
    ogType: "website",
  },

  "/services/training": {
    title: "Accreditation Training Programs | Clarivis Consulting Group",
    description: "Customized training programs for faculty, staff, and leadership on accreditation standards, compliance requirements, and quality improvement practices.",
    keywords: ["accreditation training", "faculty training", "compliance training", "quality improvement", "staff development", "healthcare education"],
    canonicalPath: "/services/training",
    ogType: "website",
  },

  // About
  "/about": {
    title: "About Eric A. Brichto, Esq. | Clarivis Consulting Group",
    description: "Eric A. Brichto, Esq., licensed attorney and accreditation professional with decades of leadership in health sector education. Former Chief Accreditation Officer at CAHME.",
    keywords: ["Eric Brichto", "Eric A. Brichto", "accreditation consultant", "licensed attorney", "healthcare education", "compliance expert", "CAHME", "Clarivis"],
    canonicalPath: "/about",
    ogType: "profile",
  },

  // Contact
  "/contact": {
    title: "Contact Us | Schedule a Free Consultation | Clarivis Consulting",
    description: "Schedule a free consultation with Clarivis Consulting Group. Get expert guidance on accreditation, compliance, and program development from Eric A. Brichto.",
    keywords: ["contact Clarivis", "schedule consultation", "accreditation help", "compliance consulting", "free consultation", "Eric Brichto contact"],
    canonicalPath: "/contact",
    ogType: "website",
  },

  // Pricing
  "/pricing": {
    title: "Pricing & Service Packages | Clarivis Consulting Group",
    description: "Transparent pricing for accreditation consulting services. Self-study support, full-cycle accreditation, mock site visits, and post-decision support packages.",
    keywords: ["accreditation consulting pricing", "consulting fees", "accreditation packages", "self-study pricing", "mock site visit cost", "Clarivis pricing"],
    canonicalPath: "/pricing",
    ogType: "website",
  },

  // Blog
  "/blog": {
    title: "Eric A. Brichto Blog | Health Education Accreditation Insights",
    description: "Expert insights on health education accreditation, compliance, and regulatory affairs from Eric A. Brichto, Esq., licensed attorney and former Chief Accreditation Officer.",
    keywords: ["Eric Brichto blog", "accreditation insights", "healthcare education", "compliance blog", "health sector education", "accreditation tips"],
    canonicalPath: "/blog",
    ogType: "website",
  },

  // Who We Serve
  "/who-we-serve": {
    title: "Who We Serve | Healthcare & Education Organizations | Clarivis",
    description: "Clarivis partners with healthcare organizations, education programs, and government contractors seeking accreditation, compliance, and operational excellence.",
    keywords: ["healthcare organizations", "education programs", "government contractors", "accreditation clients", "compliance services", "Clarivis clients"],
    canonicalPath: "/who-we-serve",
    ogType: "website",
  },

  // Government
  "/government": {
    title: "Government Contract Support | Clarivis Consulting Group",
    description: "Strategic guidance for organizations pursuing federal, state, and local healthcare contracts. Proposal development, compliance, and post-award support.",
    keywords: ["government contracts", "federal healthcare contracts", "proposal development", "contract compliance", "government consulting", "healthcare contracting"],
    canonicalPath: "/government",
    ogType: "website",
  },

  "/government/opportunity": {
    title: "Opportunity Identification | Government Contracts | Clarivis",
    description: "Identify and evaluate government contract opportunities aligned with your capabilities. Expert guidance on federal and state healthcare RFPs and solicitations.",
    keywords: ["opportunity identification", "government RFP", "contract opportunities", "federal contracts", "healthcare procurement", "bid identification"],
    canonicalPath: "/government/opportunity",
    ogType: "website",
  },

  "/government/proposal": {
    title: "Proposal Development | Government Contracts | Clarivis",
    description: "Develop compliant, competitive government proposals that win. Expert proposal writing, compliance review, and submission support for healthcare contracts.",
    keywords: ["proposal development", "government proposals", "RFP response", "proposal writing", "competitive proposals", "contract proposals"],
    canonicalPath: "/government/proposal",
    ogType: "website",
  },

  "/government/teaming": {
    title: "Teaming & Partnerships | Government Contracts | Clarivis",
    description: "Build effective prime-subcontractor relationships for government contracts. Strategic teaming arrangements and partnership development support.",
    keywords: ["teaming agreements", "subcontractor partnerships", "government teaming", "prime contractor", "joint ventures", "contract partnerships"],
    canonicalPath: "/government/teaming",
    ogType: "website",
  },

  "/government/post-award": {
    title: "Post-Award Contract Support | Government Contracts | Clarivis",
    description: "Ensure successful government contract execution from day one. Compliance monitoring, performance management, and contract administration support.",
    keywords: ["post-award support", "contract execution", "contract compliance", "performance management", "contract administration", "government compliance"],
    canonicalPath: "/government/post-award",
    ogType: "website",
  },

  // Careers
  "/careers": {
    title: "Careers at Clarivis Consulting Group | Join Our Team",
    description: "Join Clarivis Consulting Group. Career opportunities in accreditation consulting, compliance, and healthcare education program development.",
    keywords: ["Clarivis careers", "consulting jobs", "accreditation careers", "healthcare consulting jobs", "compliance careers", "join Clarivis"],
    canonicalPath: "/careers",
    ogType: "website",
  },

  // Legal Pages
  "/privacy": {
    title: "Privacy Policy | Clarivis Consulting Group",
    description: "Clarivis Consulting Group privacy policy. Learn how we collect, use, and protect your personal information.",
    keywords: ["privacy policy", "data protection", "Clarivis privacy"],
    canonicalPath: "/privacy",
    ogType: "website",
  },

  "/terms": {
    title: "Terms of Service | Clarivis Consulting Group",
    description: "Clarivis Consulting Group terms of service. Review our terms and conditions for using our website and services.",
    keywords: ["terms of service", "terms and conditions", "Clarivis terms"],
    canonicalPath: "/terms",
    ogType: "website",
  },

  // Search
  "/search": {
    title: "Search | Clarivis Consulting Group",
    description: "Search Clarivis Consulting Group for accreditation resources, blog articles, and service information.",
    keywords: ["search Clarivis", "accreditation search", "find services"],
    canonicalPath: "/search",
    ogType: "website",
  },
};

// Helper function to get full canonical URL
export function getCanonicalUrl(path: string): string {
  return `${SITE_CONFIG.domain}${path}`;
}

// Helper function to get SEO data for a route
export function getSEO(path: string): PageSEO & { canonicalUrl: string } {
  const seo = pageSEO[path] || pageSEO["/"];
  return {
    ...seo,
    canonicalUrl: getCanonicalUrl(seo.canonicalPath),
  };
}
