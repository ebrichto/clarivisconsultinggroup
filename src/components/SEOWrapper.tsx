import { Helmet } from "react-helmet-async";
import { SITE_CONFIG, getSEO } from "@/utils/seoConfig";

interface SEOWrapperProps {
  path: string;
  title?: string;
  description?: string;
  keywords?: string[];
  ogType?: "website" | "article" | "profile";
  ogImage?: string;
  children?: React.ReactNode;
  jsonLd?: object;
}

/**
 * SEO Wrapper Component
 * Provides consistent SEO metadata across all pages using centralized configuration.
 * 
 * @param path - The route path (e.g., "/services", "/about")
 * @param title - Override the default title
 * @param description - Override the default description
 * @param keywords - Additional keywords to merge with defaults
 * @param ogType - Override the Open Graph type
 * @param ogImage - Override the default OG image
 * @param jsonLd - Additional JSON-LD structured data
 */
export function SEOWrapper({
  path,
  title,
  description,
  keywords,
  ogType,
  ogImage,
  children,
  jsonLd,
}: SEOWrapperProps) {
  const seo = getSEO(path);
  
  const finalTitle = title || seo.title;
  const finalDescription = description || seo.description;
  const finalKeywords = keywords 
    ? [...new Set([...seo.keywords, ...keywords])]
    : seo.keywords;
  const finalOgType = ogType || seo.ogType || "website";
  const finalOgImage = ogImage || SITE_CONFIG.ogImage;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords.join(", ")} />
      <meta name="author" content={SITE_CONFIG.founder} />
      <link rel="canonical" href={seo.canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={finalOgType} />
      <meta property="og:url" content={seo.canonicalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.canonicalUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}

      {/* Additional head elements */}
      {children}
    </Helmet>
  );
}

export default SEOWrapper;
