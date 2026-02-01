import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { SITE_CONFIG } from "@/utils/seoConfig";
import ownerProfile from "@/assets/owner-profile.jpg";

// JSON-LD structured data for blog listing page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Eric A. Brichto's Insights on Health Education Accreditation",
  "description": "Expert insights on health education accreditation, compliance, and regulatory affairs from Eric A. Brichto, Esq., licensed attorney and accreditation professional.",
  "url": `${SITE_CONFIG.domain}/blog`,
  "author": {
    "@type": "Person",
    "name": SITE_CONFIG.founder,
    "jobTitle": "Licensed Attorney & Accreditation Consultant",
    "description": "Eric Brichto is a licensed attorney and experienced accreditation professional with decades of leadership experience in health sector education accreditation and policy development. Eric A. Brichto provides expert consulting services through Clarivis Consulting Group.",
    "url": `${SITE_CONFIG.domain}/about`,
    "sameAs": [
      `${SITE_CONFIG.domain}/blog`,
      `${SITE_CONFIG.domain}/about`
    ],
    "worksFor": {
      "@type": "Organization",
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.domain
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": SITE_CONFIG.name,
    "url": SITE_CONFIG.domain,
    "logo": {
      "@type": "ImageObject",
      "url": SITE_CONFIG.logo
    }
  },
  "blogPost": blogPosts.map(post => ({
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": SITE_CONFIG.founder
    },
    "datePublished": post.date,
    "url": `${SITE_CONFIG.domain}/blog/${post.id}`
  }))
};

// Helper function to parse date strings for sorting
const parseDate = (dateStr: string): Date => {
  return new Date(dateStr);
};

const BlogPage = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts
    .filter((post) => !post.featured)
    .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

  return (
    <>
      <Helmet>
        <title>Eric A. Brichto Blog | Health Education Accreditation Insights</title>
        <meta
          name="description"
          content="Expert insights on health education accreditation, compliance, and regulatory affairs from Eric A. Brichto, Esq., licensed attorney and former Chief Accreditation Officer."
        />
        <meta name="author" content={SITE_CONFIG.founder} />
        <meta name="keywords" content="Eric Brichto, Eric A. Brichto, accreditation blog, healthcare education, compliance, health sector education, accreditation consultant, licensed attorney" />
        <link rel="canonical" href={`${SITE_CONFIG.domain}/blog`} />
        <meta property="og:title" content="Eric A. Brichto Blog | Accreditation Insights" />
        <meta property="og:description" content="Expert insights on health education accreditation from Eric A. Brichto, Esq., licensed attorney and accreditation professional." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_CONFIG.domain}/blog`} />
        <meta property="og:image" content={SITE_CONFIG.ogImage} />
        <meta property="og:site_name" content={SITE_CONFIG.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eric Brichto Blog | Accreditation Insights" />
        <meta name="twitter:description" content="Expert insights on health education accreditation from Eric A. Brichto, Esq." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            Insights & Perspectives
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90 md:text-xl">
            Expert commentary on accreditation, compliance, and health sector education 
            from Eric A. Brichto, Esq.
          </p>
        </div>
      </section>

      {/* Author Bio Section */}
      <section className="border-b border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <img
              src={ownerProfile}
              alt="Eric A. Brichto, Esq."
              className="h-32 w-32 rounded-full object-cover shadow-lg"
            />
            <div className="text-center md:text-left">
              <h2 className="font-display text-2xl font-bold text-foreground">
                About the Author
              </h2>
              <h3 className="mt-1 text-lg font-semibold text-primary">
                Eric A. Brichto, Esq.
              </h3>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Eric A. Brichto is a licensed attorney and experienced accreditation professional 
                with decades of leadership experience in health sector education accreditation 
                and policy development. Eric brings unique insights to the challenges facing 
                healthcare education programs today. His legal background combined with hands-on 
                regulatory experience provides a comprehensive perspective on compliance, 
                governance, and institutional effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
              Featured Article
            </span>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg transition-shadow hover:shadow-xl">
              <span className="text-sm font-medium text-primary">
                {featuredPost.category}
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
                {featuredPost.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {featuredPost.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {featuredPost.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </span>
              </div>
              <Link 
                to={`/blog/${featuredPost.id}`}
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Read Full Article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="bg-muted/20 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 font-display text-2xl font-bold text-foreground md:text-3xl">
            Recent Articles by Eric A. Brichto
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md flex flex-col"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {post.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                </div>
                <Link 
                  to={`/blog/${post.id}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors self-start"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Work Directly with Eric A. Brichto
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Leverage Eric's decades of experience in health education accreditation, 
            his legal expertise, and his insider knowledge as a former Chief Accreditation 
            Officer to guide your program to success.
          </p>
          <Link 
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-base font-medium text-primary hover:bg-white/90 transition-colors"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
