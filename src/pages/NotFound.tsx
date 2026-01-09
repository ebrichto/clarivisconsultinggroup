import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 py-16">
      <div className="text-center max-w-lg">
        {/* 404 Visual */}
        <div className="relative mb-8">
          <div className="text-[120px] md:text-[180px] font-display font-bold text-primary/10 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="h-16 w-16 md:h-24 md:w-24 text-primary/40" />
          </div>
        </div>

        {/* Message */}
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="cta" size="lg" asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Or try one of these pages:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              to="/services" 
              className="text-sm text-primary hover:underline focus:outline-none focus:underline"
            >
              Services
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              to="/about" 
              className="text-sm text-primary hover:underline focus:outline-none focus:underline"
            >
              About Us
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              to="/government" 
              className="text-sm text-primary hover:underline focus:outline-none focus:underline"
            >
              Government
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              to="/who-we-serve" 
              className="text-sm text-primary hover:underline focus:outline-none focus:underline"
            >
              Who We Serve
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
