import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";

// Eager load critical pages
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

// Lazy load other pages for better initial load performance
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AccreditationPage = lazy(() => import("./pages/services/AccreditationPage"));
const SiteVisitPage = lazy(() => import("./pages/services/SiteVisitPage"));
const CompliancePage = lazy(() => import("./pages/services/CompliancePage"));
const LeadershipPage = lazy(() => import("./pages/services/LeadershipPage"));
const TrainingPage = lazy(() => import("./pages/services/TrainingPage"));
const WhoWeServePage = lazy(() => import("./pages/WhoWeServePage"));
const GovernmentPage = lazy(() => import("./pages/GovernmentPage"));
const OpportunityPage = lazy(() => import("./pages/government/OpportunityPage"));
const ProposalPage = lazy(() => import("./pages/government/ProposalPage"));
const TeamingPage = lazy(() => import("./pages/government/TeamingPage"));
const PostAwardPage = lazy(() => import("./pages/government/PostAwardPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/accreditation" element={<AccreditationPage />} />
                <Route path="/services/site-visit" element={<SiteVisitPage />} />
                <Route path="/services/compliance" element={<CompliancePage />} />
                <Route path="/services/leadership" element={<LeadershipPage />} />
                <Route path="/services/training" element={<TrainingPage />} />
                <Route path="/who-we-serve" element={<WhoWeServePage />} />
                <Route path="/government" element={<GovernmentPage />} />
                <Route path="/government/opportunity" element={<OpportunityPage />} />
                <Route path="/government/proposal" element={<ProposalPage />} />
                <Route path="/government/teaming" element={<TeamingPage />} />
                <Route path="/government/post-award" element={<PostAwardPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
