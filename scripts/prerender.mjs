#!/usr/bin/env node
/**
 * Custom Static Site Generator for Clarivis Consulting Group
 * Generates static HTML files for all subpages with full SEO optimization
 * 
 * This script runs after Vite build to create individual HTML files for each route
 * with proper meta tags, structured data, and Open Graph tags
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

// Site configuration
const SITE_CONFIG = {
  name: "Clarivis Consulting Group",
  legalName: "Clarivis Consulting Group, LLC",
  domain: "https://www.clarivisgroup.com",
  founder: "Eric A. Brichto, Esq.",
  email: "ebrichto@clarivisgroup.com",
  phone: "+1-508-446-4592",
  logo: "https://www.clarivisgroup.com/logo.png",
  ogImage: "https://www.clarivisgroup.com/og-image.png",
};

// All routes with their SEO metadata
const routes = {
  "/": {
    title: "Clarivis Consulting Group | Health Education Accreditation by Eric A. Brichto",
    description: "Clarivis Consulting Group, led by Eric A. Brichto, Esq., delivers expert accreditation readiness, compliance consulting, and site visit preparation for health sector education programs.",
    keywords: ["Clarivis Consulting Group", "Eric Brichto", "Eric A. Brichto", "health education accreditation", "accreditation consulting", "compliance consulting", "CAAHEP", "CAHME", "site visit preparation", "healthcare education"],
    ogType: "website",
  },
  "/services": {
    title: "Accreditation & Compliance Services | Clarivis Consulting Group",
    description: "Comprehensive accreditation readiness, site visit preparation, compliance consulting, and training services for health sector education programs. Expert guidance from Eric A. Brichto.",
    keywords: ["accreditation services", "compliance consulting", "site visit preparation", "healthcare education", "accreditation readiness", "Clarivis"],
    ogType: "website",
  },
  "/services/accreditation": {
    title: "Accreditation Readiness Services | Clarivis Consulting Group",
    description: "Expert accreditation readiness consulting including self-study support, gap analysis, and strategic planning for CAAHEP, CAHME, and other health education accreditation bodies.",
    keywords: ["accreditation readiness", "self-study support", "CAAHEP", "CAHME", "health education accreditation", "gap analysis", "accreditation consulting"],
    ogType: "website",
  },
  "/services/site-visit": {
    title: "Site Visit Preparation | Clarivis Consulting Group",
    description: "Comprehensive site visit preparation including mock site visits, faculty coaching, and documentation review. Ensure your program is ready for accreditation peer review.",
    keywords: ["site visit preparation", "mock site visit", "accreditation visit", "peer review preparation", "faculty coaching", "accreditation readiness"],
    ogType: "website",
  },
  "/services/compliance": {
    title: "Regulatory Compliance Consulting | Clarivis Consulting Group",
    description: "Navigate complex regulatory requirements with clarity. Expert compliance consulting for healthcare education programs including policy development and risk management.",
    keywords: ["compliance consulting", "regulatory compliance", "healthcare regulations", "policy development", "risk management", "education compliance"],
    ogType: "website",
  },
  "/services/leadership": {
    title: "Recruitment & Leadership Support | Clarivis Consulting Group",
    description: "Strategic recruitment support and leadership development for healthcare education programs. Increase student applications and build strong program leadership.",
    keywords: ["recruitment support", "leadership development", "program development", "healthcare education", "student recruitment", "program management"],
    ogType: "website",
  },
  "/services/training": {
    title: "Accreditation Training Programs | Clarivis Consulting Group",
    description: "Customized training programs for faculty, staff, and leadership on accreditation standards, compliance requirements, and quality improvement practices.",
    keywords: ["accreditation training", "faculty training", "compliance training", "quality improvement", "staff development", "healthcare education"],
    ogType: "website",
  },
  "/about": {
    title: "About Eric A. Brichto, Esq. | Clarivis Consulting Group",
    description: "Eric A. Brichto, Esq., licensed attorney and accreditation professional with decades of leadership in health sector education. Former Chief Accreditation Officer at CAHME.",
    keywords: ["Eric Brichto", "Eric A. Brichto", "accreditation consultant", "licensed attorney", "healthcare education", "compliance expert", "CAHME", "Clarivis"],
    ogType: "profile",
  },
  "/contact": {
    title: "Contact Us | Schedule a Free Consultation | Clarivis Consulting",
    description: "Schedule a free consultation with Clarivis Consulting Group. Get expert guidance on accreditation, compliance, and program development from Eric A. Brichto.",
    keywords: ["contact Clarivis", "schedule consultation", "accreditation help", "compliance consulting", "free consultation", "Eric Brichto contact"],
    ogType: "website",
  },
  "/pricing": {
    title: "Pricing & Service Packages | Clarivis Consulting Group",
    description: "Transparent pricing for accreditation consulting services. Self-study support, full-cycle accreditation, mock site visits, and post-decision support packages.",
    keywords: ["accreditation consulting pricing", "consulting fees", "accreditation packages", "self-study pricing", "mock site visit cost", "Clarivis pricing"],
    ogType: "website",
  },
  "/blog": {
    title: "Eric A. Brichto Blog | Health Education Accreditation Insights",
    description: "Expert insights on health education accreditation, compliance, and regulatory affairs from Eric A. Brichto, Esq., licensed attorney and former Chief Accreditation Officer.",
    keywords: ["Eric Brichto blog", "accreditation insights", "healthcare education", "compliance blog", "health sector education", "accreditation tips"],
    ogType: "website",
  },
  "/who-we-serve": {
    title: "Who We Serve | Healthcare & Education Organizations | Clarivis",
    description: "Clarivis partners with healthcare organizations, education programs, and government contractors seeking accreditation, compliance, and operational excellence.",
    keywords: ["healthcare organizations", "education programs", "government contractors", "accreditation clients", "compliance services", "Clarivis clients"],
    ogType: "website",
  },
  "/government": {
    title: "Government Contract Support | Clarivis Consulting Group",
    description: "Strategic guidance for organizations pursuing federal, state, and local healthcare contracts. Proposal development, compliance, and post-award support.",
    keywords: ["government contracts", "federal healthcare contracts", "proposal development", "contract compliance", "government consulting", "healthcare contracting"],
    ogType: "website",
  },
  "/government/opportunity": {
    title: "Opportunity Identification | Government Contracts | Clarivis",
    description: "Identify and evaluate government contract opportunities aligned with your capabilities. Expert guidance on federal and state healthcare RFPs and solicitations.",
    keywords: ["opportunity identification", "government RFP", "contract opportunities", "federal contracts", "healthcare procurement", "bid identification"],
    ogType: "website",
  },
  "/government/proposal": {
    title: "Proposal Development | Government Contracts | Clarivis",
    description: "Develop compliant, competitive government proposals that win. Expert proposal writing, compliance review, and submission support for healthcare contracts.",
    keywords: ["proposal development", "government proposals", "RFP response", "proposal writing", "competitive proposals", "contract proposals"],
    ogType: "website",
  },
  "/government/teaming": {
    title: "Teaming & Partnerships | Government Contracts | Clarivis",
    description: "Build effective prime-subcontractor relationships for government contracts. Strategic teaming arrangements and partnership development support.",
    keywords: ["teaming agreements", "subcontractor partnerships", "government teaming", "prime contractor", "joint ventures", "contract partnerships"],
    ogType: "website",
  },
  "/government/post-award": {
    title: "Post-Award Contract Support | Government Contracts | Clarivis",
    description: "Ensure successful government contract execution from day one. Compliance monitoring, performance management, and contract administration support.",
    keywords: ["post-award support", "contract execution", "contract compliance", "performance management", "contract administration", "government compliance"],
    ogType: "website",
  },
  "/careers": {
    title: "Careers at Clarivis Consulting Group | Join Our Team",
    description: "Join Clarivis Consulting Group. Career opportunities in accreditation consulting, compliance, and healthcare education program development.",
    keywords: ["Clarivis careers", "consulting jobs", "accreditation careers", "healthcare consulting jobs", "compliance careers", "join Clarivis"],
    ogType: "website",
  },
  "/privacy": {
    title: "Privacy Policy | Clarivis Consulting Group",
    description: "Clarivis Consulting Group privacy policy. Learn how we collect, use, and protect your personal information.",
    keywords: ["privacy policy", "data protection", "Clarivis privacy"],
    ogType: "website",
  },
  "/terms": {
    title: "Terms of Service | Clarivis Consulting Group",
    description: "Clarivis Consulting Group terms of service. Review our terms and conditions for using our website and services.",
    keywords: ["terms of service", "terms and conditions", "Clarivis terms"],
    ogType: "website",
  },
  "/search": {
    title: "Search | Clarivis Consulting Group",
    description: "Search Clarivis Consulting Group for accreditation resources, blog articles, and service information.",
    keywords: ["search Clarivis", "accreditation search", "find services"],
    ogType: "website",
  },
  "/leadership": {
    title: "Our Leadership — Eric A. Brichto, Esq. | Clarivis Consulting Group",
    description: "Meet Eric A. Brichto, Esq., Founder & Principal of Clarivis Consulting Group. Licensed attorney and accreditation expert with decades of healthcare education leadership.",
    keywords: ["Eric Brichto", "Eric A. Brichto", "Clarivis leadership", "accreditation consultant", "healthcare education", "licensed attorney"],
    ogType: "profile",
  },
};

// Blog posts (IDs 1-12 based on the data file)
const blogPosts = [
  { id: 1, title: "Navigating the Evolving Landscape of Health Education Accreditation", excerpt: "As accreditation standards continue to evolve, health education programs must stay ahead of regulatory changes." },
  { id: 2, title: "The Critical Role of Compliance in Healthcare Program Success", excerpt: "Drawing from decades of experience in health sector education, Eric Brichto examines proactive compliance strategies." },
  { id: 3, title: "Preparing for Your First Accreditation Site Visit: A Comprehensive Guide", excerpt: "With experience overseeing hundreds of site visits, Eric A. Brichto provides practical guidance." },
  { id: 4, title: "Building Sustainable Governance Structures in Health Education", excerpt: "Eric Brichto offers unique perspectives on developing governance frameworks for compliance and innovation." },
  { id: 5, title: "Policy Development in Health Sector Education: Lessons from the Field", excerpt: "Eric A. Brichto shares key principles for developing effective policies for accreditation." },
  { id: 6, title: "The Future of Healthcare Management Education Accreditation", excerpt: "Eric Brichto reflects on emerging trends in accreditation based on his years of experience." },
  { id: 7, title: "Understanding Healthcare Accreditation Standards: An Insider's Perspective", excerpt: "Drawing from his experience as Chief Accreditation Officer, Eric A. Brichto offers insights." },
  { id: 8, title: "Legal Considerations in Health Education Accreditation", excerpt: "Eric Brichto leverages his dual expertise as attorney and accreditation professional." },
  { id: 9, title: "Self-Study Best Practices: Maximizing Your Accreditation Outcomes", excerpt: "Learn effective self-study practices from an accreditation expert." },
  { id: 10, title: "The Role of Data in Accreditation Excellence", excerpt: "Discover how data-driven approaches improve accreditation outcomes." },
  { id: 11, title: "Faculty Engagement in the Accreditation Process", excerpt: "Strategies for engaging faculty in accreditation success." },
  { id: 12, title: "The Ten Commandments of Site Visits", excerpt: "Essential principles for site visit success." },
];

// Add blog routes
blogPosts.forEach(post => {
  routes[`/blog/${post.id}`] = {
    title: `${post.title} | Eric A. Brichto Blog`,
    description: post.excerpt,
    keywords: ["Eric Brichto", "accreditation", "healthcare education", "compliance", post.title.split(' ').slice(0, 3).join(' ')],
    ogType: "article",
  };
});

/**
 * Generate JSON-LD structured data for a route
 */
function generateJsonLd(routePath, meta) {
  const baseStructuredData = [
    // Organization
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_CONFIG.domain}/#organization`,
      "name": SITE_CONFIG.legalName,
      "alternateName": ["Clarivis Group", "Clarivis", "ClarivIsGroup"],
      "url": SITE_CONFIG.domain,
      "logo": SITE_CONFIG.logo,
      "description": "Health sector education accreditation, compliance, and program advisory services led by Eric A. Brichto, Esq.",
      "email": SITE_CONFIG.email,
      "telephone": SITE_CONFIG.phone,
      "founder": {
        "@type": "Person",
        "name": "Eric A. Brichto, Esq.",
        "alternateName": ["Eric Brichto", "Eric A. Brichto"],
        "jobTitle": "Founder & Principal",
        "url": `${SITE_CONFIG.domain}/about`
      }
    }
  ];

  // Add page-specific structured data
  if (routePath === "/about") {
    baseStructuredData.push({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Eric A. Brichto, Esq.",
      "alternateName": ["Eric Brichto", "Eric A. Brichto"],
      "jobTitle": "Founder & Principal Consultant",
      "description": "Licensed attorney and accreditation professional with decades of leadership in health sector education.",
      "url": `${SITE_CONFIG.domain}/about`,
      "worksFor": {
        "@id": `${SITE_CONFIG.domain}/#organization`
      }
    });
  }

  if (routePath.startsWith("/blog/")) {
    baseStructuredData.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": meta.title.split(" | ")[0],
      "description": meta.description,
      "author": {
        "@type": "Person",
        "name": "Eric A. Brichto, Esq."
      },
      "publisher": {
        "@id": `${SITE_CONFIG.domain}/#organization`
      },
      "url": `${SITE_CONFIG.domain}${routePath}`
    });
  }

  if (routePath.startsWith("/services")) {
    baseStructuredData.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": meta.title.split(" | ")[0],
      "description": meta.description,
      "provider": {
        "@id": `${SITE_CONFIG.domain}/#organization`
      },
      "url": `${SITE_CONFIG.domain}${routePath}`
    });
  }

  return baseStructuredData;
}

/**
 * Generate the HTML content for a route
 */
function generateHtml(routePath, meta) {
  const canonicalUrl = `${SITE_CONFIG.domain}${routePath === "/" ? "" : routePath}`;
  const jsonLd = generateJsonLd(routePath, meta);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <meta name="author" content="${SITE_CONFIG.founder}" />
    <meta name="keywords" content="${meta.keywords.join(", ")}" />
    <link rel="canonical" href="${canonicalUrl}" />
    
    <!-- Favicon Package -->
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
    <meta name="msapplication-TileImage" content="/favicon.png" />
    <meta name="msapplication-TileColor" content="#1a3a4a" />
    
    <!-- Theme Color -->
    <meta name="theme-color" content="#1a3a4a" />
    
    <!-- Preconnect for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:type" content="${meta.ogType}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${SITE_CONFIG.ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="640" />
    <meta property="og:site_name" content="${SITE_CONFIG.name}" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${SITE_CONFIG.ogImage}" />

    <!-- Structured Data (JSON-LD) -->
${jsonLd.map(data => `    <script type="application/ld+json">
${JSON.stringify(data, null, 6)}
    </script>`).join('\n')}

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-FZP6SPKMK5"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-FZP6SPKMK5');
    </script>

    <!-- GitHub Pages SPA redirect script -->
    <script type="text/javascript">
      (function(l) {
        if (l.hostname === 'clarivisgroup.com') {
          l.replace('https://www.clarivisgroup.com' + l.pathname + l.search + l.hash);
          return;
        }
        if (l.search[1] === '/') {
          var decoded = l.search.slice(1).split('&').map(function(s) { 
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location))
    </script>
  </head>

  <body>
    <noscript>
      <div style="padding: 2rem; text-align: center;">
        <h1>JavaScript Required</h1>
        <p>Please enable JavaScript to use Clarivis Consulting Group website.</p>
      </div>
    </noscript>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
}

/**
 * Create directory recursively
 */
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Main prerender function
 */
async function prerender() {
  console.log('🚀 Starting custom SSG prerender...');
  console.log(`📁 Output directory: ${distDir}`);
  
  if (!fs.existsSync(distDir)) {
    console.error('❌ Error: dist directory does not exist. Run "npm run build" first.');
    process.exit(1);
  }

  // Read the built index.html to get the correct asset references
  const indexHtmlPath = path.join(distDir, 'index.html');
  let builtIndexHtml = '';
  
  if (fs.existsSync(indexHtmlPath)) {
    builtIndexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
  }
  
  // Extract the built script and CSS references from the compiled index.html
  const scriptMatch = builtIndexHtml.match(/<script type="module" crossorigin src="([^"]+)"><\/script>/);
  const cssMatch = builtIndexHtml.match(/<link rel="stylesheet" crossorigin href="([^"]+)">/);
  
  const scriptSrc = scriptMatch ? scriptMatch[1] : '/assets/index.js';
  const cssSrc = cssMatch ? cssMatch[1] : '/assets/index.css';

  let generatedCount = 0;
  
  for (const [routePath, meta] of Object.entries(routes)) {
    // Generate the HTML with proper SEO
    let html = generateHtml(routePath, meta);
    
    // Replace the dev script reference with the production bundle
    html = html.replace(
      '<script type="module" src="/src/main.tsx"></script>',
      `<link rel="stylesheet" crossorigin href="${cssSrc}">
    <script type="module" crossorigin src="${scriptSrc}"></script>`
    );
    
    // Determine the output path
    let outputPath;
    if (routePath === "/") {
      outputPath = path.join(distDir, 'index.html');
    } else {
      const routeDir = path.join(distDir, routePath.slice(1));
      ensureDir(routeDir);
      outputPath = path.join(routeDir, 'index.html');
    }
    
    // Write the HTML file
    fs.writeFileSync(outputPath, html, 'utf-8');
    console.log(`✅ Generated: ${routePath} -> ${path.relative(distDir, outputPath)}`);
    generatedCount++;
  }

  // Also update 404.html with proper SEO (using homepage meta as fallback)
  const notFoundHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${routes["/"].title}</title>
    <meta name="description" content="${routes["/"].description}" />
    <meta name="author" content="${SITE_CONFIG.founder}" />
    <meta name="keywords" content="${routes["/"].keywords.join(", ")}" />
    <link rel="canonical" href="${SITE_CONFIG.domain}/" />
    
    <!-- Favicon Package -->
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
    <meta name="msapplication-TileImage" content="/favicon.png" />
    <meta name="msapplication-TileColor" content="#1a3a4a" />
    
    <!-- Theme Color -->
    <meta name="theme-color" content="#1a3a4a" />
    
    <!-- Preconnect for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${routes["/"].title}" />
    <meta property="og:description" content="${routes["/"].description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${SITE_CONFIG.domain}/" />
    <meta property="og:image" content="${SITE_CONFIG.ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="640" />
    <meta property="og:site_name" content="${SITE_CONFIG.name}" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${routes["/"].title}" />
    <meta name="twitter:description" content="${routes["/"].description}" />
    <meta name="twitter:image" content="${SITE_CONFIG.ogImage}" />

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-FZP6SPKMK5"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-FZP6SPKMK5');
    </script>

    <!-- GitHub Pages SPA redirect script -->
    <script type="text/javascript">
      (function(l) {
        if (l.hostname === 'clarivisgroup.com') {
          l.replace('https://www.clarivisgroup.com' + l.pathname + l.search + l.hash);
          return;
        }
        if (l.search[1] === '/') {
          var decoded = l.search.slice(1).split('&').map(function(s) { 
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location))
    </script>
    <link rel="stylesheet" crossorigin href="${cssSrc}">
    <script type="module" crossorigin src="${scriptSrc}"></script>
  </head>

  <body>
    <noscript>
      <div style="padding: 2rem; text-align: center;">
        <h1>JavaScript Required</h1>
        <p>Please enable JavaScript to use Clarivis Consulting Group website.</p>
      </div>
    </noscript>
    <div id="root"></div>
  </body>
</html>`;

  fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf-8');
  console.log(`✅ Generated: 404.html`);

  console.log(`\n🎉 SSG complete! Generated ${generatedCount + 1} static HTML files.`);
  console.log('📝 All subpages now have unique SEO metadata, structured data, and Open Graph tags.');
}

// Run the prerender
prerender().catch(err => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});
