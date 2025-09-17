import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Training", href: "/training" },
    { name: "Auditing", href: "/auditing" },
    { name: "Consulting", href: "/consulting" },
    { name: "About", href: "/about" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-card border-b border-card-border shadow-professional sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm text-primary-foreground">
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3" />
                <span>+91 96039 78651</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3" />
                <span>hello@axygenpharmatech.com</span>
              </div>
            </div>
            <div className="text-xs hidden sm:block">
              Part of Fixity Group of Companies
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Axygen Pharmatech</h1>
                <p className="text-xs text-muted-foreground">Quality Solutions Partner</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-smooth rounded-md ${
                  isActive(item.href)
                    ? "text-primary bg-primary/5"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="default" size="sm" asChild>
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-card border-t border-card-border">
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-sm font-medium transition-smooth rounded-md ${
                  isActive(item.href)
                    ? "text-primary bg-primary/5"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Quote
                </Link>
              </Button>
              <Button variant="default" size="sm" className="w-full" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Book Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;