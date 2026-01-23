import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import ownerProfile from "@/assets/owner-profile.jpg";
import { SocialShareButtons } from "@/components/SocialShareButtons";

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Clarivis Consulting Group Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://clarivisgroup.com/blog/${post.id}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://clarivisgroup.com/blog/${post.id}`} />
        <meta property="og:image" content="https://clarivisgroup.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content="https://clarivisgroup.com/og-image.png" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 text-white">
        <div className="container mx-auto px-4">
          <Link
            to="/blog"
            className="mb-6 inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <span className="mb-4 block text-sm font-medium text-white/80 uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl max-w-4xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {/* Author Card with Social Share */}
            <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-border bg-muted/30 p-6">
              <div className="flex items-center gap-4">
                <img
                  src={ownerProfile}
                  alt={post.author}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">
                    Licensed Attorney & Accreditation Consultant
                  </p>
                </div>
              </div>
              <SocialShareButtons 
                url={`https://clarivisgroup.com/blog/${post.id}`}
                title={post.title}
                description={post.excerpt}
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="mt-8 mb-4 text-2xl font-bold">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="mt-6 mb-3 text-xl font-semibold">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <p key={index} className="font-semibold text-foreground mt-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="ml-4">
                      {paragraph.replace('- ', '')}
                    </li>
                  );
                }
                if (paragraph.match(/^\d+\. /)) {
                  return (
                    <li key={index} className="ml-4 list-decimal">
                      {paragraph.replace(/^\d+\. /, '')}
                    </li>
                  );
                }
                if (paragraph.trim() === '') {
                  return null;
                }
                return (
                  <p key={index} className="my-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-16 rounded-xl bg-gradient-hero p-8 text-center text-white">
              <h3 className="font-display text-2xl font-bold">
                Need Expert Accreditation Guidance?
              </h3>
              <p className="mt-2 text-white/80">
                Work directly with Eric A. Brichto to navigate your accreditation challenges.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-block rounded-md bg-white px-6 py-3 font-medium text-primary hover:bg-white/90 transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
