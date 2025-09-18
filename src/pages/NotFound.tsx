import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="max-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center space-y-6 max-w-md mx-auto px-4">
          <div className="space-y-4">
            <h1 className="text-8xl font-bold text-primary animate-fade-in">404</h1>
            <h2 className="text-2xl font-semibold text-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Page Not Found
            </h2>
            <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button asChild size="lg" className="hover-scale">
              <Link to="/">
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
