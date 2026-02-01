import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from "vite-plugin-prerender";

// All routes to prerender for SEO
const routesToPrerender = [
  "/",
  "/services",
  "/services/accreditation",
  "/services/site-visit",
  "/services/compliance",
  "/services/leadership",
  "/services/training",
  "/pricing",
  "/who-we-serve",
  "/government",
  "/government/opportunity",
  "/government/proposal",
  "/government/teaming",
  "/government/post-award",
  "/about",
  "/contact",
  "/blog",
  "/careers",
  "/search",
  "/privacy",
  "/terms",
  // Blog posts
  "/blog/1",
  "/blog/2",
  "/blog/3",
  "/blog/4",
  "/blog/5",
  "/blog/6",
  "/blog/7",
  "/blog/8",
  "/blog/9",
  "/blog/10",
  "/blog/11",
  "/blog/12",
  "/blog/13",
  "/blog/14",
  "/blog/15",
  "/blog/16",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use root path - custom domain (clarivisgroup.com) doesn't need subdirectory
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      vitePrerender({
        routes: routesToPrerender,
        renderer: "@prerenderer/renderer-puppeteer",
        rendererOptions: {
          maxConcurrentRoutes: 4,
          renderAfterDocumentEvent: "render-event",
          headless: true,
        },
        postProcess(renderedRoute) {
          // Minify and clean up the HTML
          renderedRoute.html = renderedRoute.html
            .replace(/data-lovable-[^=]*="[^"]*"/g, "")
            .replace(/\s{2,}/g, " ")
            .trim();
          return renderedRoute;
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
