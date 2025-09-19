import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import axygenLogo from "@/assets/axygen-fixity-logo-latest.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const servicesItems = [
    { name: "Auditing", href: "/auditing" },
    { name: "Consulting", href: "/consulting" },
    { name: "GxP Training", href: "/training" },
    { name: "Talent Management", href: "/recruitment" },
    { name: "Leadership & Career Mentor", href: "/leadership" },
    { name: "Computer System Validation", href: "/csv" },
  ];

  const productsItems = [
    { name: "3D Immersive Learning", href: "/products/3d-learning" },
    { name: "AI Quality Dashboards", href: "/products/ai-dashboard" },
  ];

  const isServicesActive = servicesItems.some(item => location.pathname === item.href);
  const isProductsActive = productsItems.some(item => location.pathname === item.href);

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
                <span>+91 96039 78651, +91 9553732228</span>
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
            <Link to="/" className="flex items-center group">
              <img 
                src={axygenLogo} 
                alt="Axygen Pharmatech - Global Centre of Excellence for GxP Training & Consulting" 
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium transition-smooth rounded-md ${
                isActive("/")
                  ? "text-primary bg-primary/5"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              HOME
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-smooth rounded-md ${
                isServicesActive
                  ? "text-primary bg-primary/5"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}>
                <span>SERVICES</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                {servicesItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="w-full px-4 py-2 text-sm hover:bg-primary/5 hover:text-primary transition-smooth"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-smooth rounded-md ${
                isProductsActive
                  ? "text-primary bg-primary/5"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}>
                <span>PRODUCTS</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                {productsItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="w-full px-4 py-2 text-sm hover:bg-primary/5 hover:text-primary transition-smooth"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/our-work"
              className={`px-3 py-2 text-sm font-medium transition-smooth rounded-md ${
                isActive("/our-work")
                  ? "text-primary bg-primary/5"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              OUR WORK
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium transition-smooth rounded-md ${
                isActive("/about")
                  ? "text-primary bg-primary/5"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              ABOUT US
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium transition-smooth rounded-md ${
                isActive("/contact")
                  ? "text-primary bg-primary/5"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              CONTACT US
            </Link>
          </nav>

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
        <div className="lg:hidden bg-card border-t border-card-border animate-slide-in-right">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 text-sm font-medium transition-smooth rounded-md ${
                isActive("/")
                  ? "text-primary bg-primary/5"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            
            {/* Services Section */}
            <div className="pt-2">
              <div className="px-3 py-2 text-sm font-medium text-primary">SERVICES</div>
              {servicesItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-6 py-2 text-sm font-medium transition-smooth rounded-md ${
                    isActive(item.href)
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Products Section */}
            <div className="pt-2">
              <div className="px-3 py-2 text-sm font-medium text-primary">PRODUCTS</div>
              {productsItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-6 py-2 text-sm font-medium transition-smooth rounded-md ${
                    isActive(item.href)
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              to="/our-work"
              className={`block px-3 py-2 text-sm font-medium transition-smooth rounded-md ${
                isActive("/our-work")
                  ? "text-primary bg-primary/5"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              OUR WORK
            </Link>

            <Link
              to="/about"
              className={`block px-3 py-2 text-sm font-medium transition-smooth rounded-md ${
                isActive("/about")
                  ? "text-primary bg-primary/5"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </Link>

            <Link
              to="/contact"
              className={`block px-3 py-2 text-sm font-medium transition-smooth rounded-md ${
                isActive("/contact")
                  ? "text-primary bg-primary/5"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;