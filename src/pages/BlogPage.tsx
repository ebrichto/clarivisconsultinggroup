import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import ownerProfile from "@/assets/owner-profile.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Navigating the Evolving Landscape of Health Education Accreditation",
    excerpt: "As accreditation standards continue to evolve, health education programs must stay ahead of regulatory changes. Eric A. Brichto, Esq., shares insights from his extensive experience as a former Chief Accreditation Officer.",
    author: "Eric A. Brichto, Esq.",
    date: "January 15, 2026",
    readTime: "8 min read",
    category: "Accreditation",
    featured: true,
  },
  {
    id: 2,
    title: "The Critical Role of Compliance in Healthcare Program Success",
    excerpt: "Drawing from decades of experience in health sector education, Eric Brichto examines why proactive compliance strategies are essential for program sustainability and growth.",
    author: "Eric A. Brichto, Esq.",
    date: "January 8, 2026",
    readTime: "6 min read",
    category: "Compliance",
    featured: false,
  },
  {
    id: 3,
    title: "Preparing for Your First Accreditation Site Visit: A Comprehensive Guide",
    excerpt: "With experience overseeing hundreds of site visits throughout his career, Eric A. Brichto provides practical guidance for programs preparing for their initial accreditation review.",
    author: "Eric A. Brichto, Esq.",
    date: "December 28, 2025",
    readTime: "10 min read",
    category: "Site Visits",
    featured: false,
  },
  {
    id: 4,
    title: "Building Sustainable Governance Structures in Health Education",
    excerpt: "Eric Brichto's legal background and regulatory expertise combine to offer unique perspectives on developing governance frameworks that support both compliance and innovation.",
    author: "Eric A. Brichto, Esq.",
    date: "December 15, 2025",
    readTime: "7 min read",
    category: "Leadership",
    featured: false,
  },
  {
    id: 5,
    title: "Policy Development in Health Sector Education: Lessons from the Field",
    excerpt: "As a licensed attorney and former Chief Accreditation Officer, Eric A. Brichto shares key principles for developing effective policies that align with accreditation requirements.",
    author: "Eric A. Brichto, Esq.",
    date: "December 1, 2025",
    readTime: "9 min read",
    category: "Policy",
    featured: false,
  },
  {
    id: 6,
    title: "The Future of Healthcare Management Education Accreditation",
    excerpt: "Eric Brichto reflects on emerging trends in accreditation and offers predictions based on his years of experience shaping accreditation policy at the national level.",
    author: "Eric A. Brichto, Esq.",
    date: "November 18, 2025",
    readTime: "5 min read",
    category: "Industry Trends",
    featured: false,
  },
  {
    id: 7,
    title: "Understanding Healthcare Accreditation Standards: An Insider's Perspective",
    excerpt: "Drawing from his extensive experience as a Chief Accreditation Officer, Eric A. Brichto offers unparalleled insights into how accreditation standards are developed, interpreted, and applied to healthcare management programs.",
    author: "Eric A. Brichto, Esq.",
    date: "November 5, 2025",
    readTime: "12 min read",
    category: "Accreditation",
    featured: false,
  },
  {
    id: 8,
    title: "Legal Considerations in Health Education Accreditation",
    excerpt: "Eric Brichto leverages his dual expertise as a licensed attorney and accreditation professional to explore the legal frameworks that underpin educational accreditation processes.",
    author: "Eric A. Brichto, Esq.",
    date: "October 22, 2025",
    readTime: "8 min read",
    category: "Legal",
    featured: false,
  },
  {
    id: 9,
    title: "Self-Study Best Practices: Maximizing Your Accreditation Outcomes",
    excerpt: "Drawing on years of reviewing self-study documents, Eric A. Brichto shares proven strategies for creating compelling, comprehensive self-studies that demonstrate program excellence.",
    author: "Eric A. Brichto, Esq.",
    date: "October 8, 2025",
    readTime: "11 min read",
    category: "Accreditation",
    featured: false,
  },
  {
    id: 10,
    title: "Faculty Development and Its Impact on Accreditation Success",
    excerpt: "Eric Brichto examines the critical connection between robust faculty development programs and successful accreditation outcomes in healthcare management education.",
    author: "Eric A. Brichto, Esq.",
    date: "September 25, 2025",
    readTime: "7 min read",
    category: "Leadership",
    featured: false,
  },
  {
    id: 11,
    title: "Competency-Based Education in Healthcare Management",
    excerpt: "With his extensive background in health sector education, Eric A. Brichto analyzes the shift toward competency-based models and their implications for program design and assessment.",
    author: "Eric A. Brichto, Esq.",
    date: "September 10, 2025",
    readTime: "9 min read",
    category: "Education",
    featured: false,
  },
  {
    id: 12,
    title: "Responding to Accreditation Findings: A Strategic Approach",
    excerpt: "Eric Brichto provides expert guidance on developing effective responses to accreditation findings, drawing from his experience evaluating hundreds of institutional responses.",
    author: "Eric A. Brichto, Esq.",
    date: "August 28, 2025",
    readTime: "10 min read",
    category: "Compliance",
    featured: false,
  },
  {
    id: 13,
    title: "Building a Culture of Continuous Improvement",
    excerpt: "Seasoned accreditation expert Eric A. Brichto shares strategies for embedding continuous improvement into organizational culture to support ongoing accreditation success.",
    author: "Eric A. Brichto, Esq.",
    date: "August 15, 2025",
    readTime: "6 min read",
    category: "Leadership",
    featured: false,
  },
  {
    id: 14,
    title: "The Intersection of Accreditation and Institutional Strategy",
    excerpt: "Eric Brichto explores how healthcare education leaders can align accreditation efforts with broader institutional goals, creating synergies that benefit the entire organization.",
    author: "Eric A. Brichto, Esq.",
    date: "August 1, 2025",
    readTime: "8 min read",
    category: "Strategy",
    featured: false,
  },
  {
    id: 15,
    title: "Data-Driven Decision Making in Accreditation",
    excerpt: "Leveraging his expertise in regulatory affairs, Eric A. Brichto examines how programs can use data analytics to strengthen their accreditation portfolios and demonstrate outcomes.",
    author: "Eric A. Brichto, Esq.",
    date: "July 18, 2025",
    readTime: "7 min read",
    category: "Analytics",
    featured: false,
  },
];

const BlogPage = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog | Clarivis Consulting Group</title>
        <meta
          name="description"
          content="Insights on health education accreditation, compliance, and regulatory affairs from Eric A. Brichto, Esq., experienced accreditation professional and licensed attorney."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
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
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {post.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
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
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  Read More
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-white">
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
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
