import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowRight
} from "lucide-react";
import axygenLogo from "@/assets/axygen-fixity-logo-v2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Training Programs", href: "/training" },
    { name: "Quality Auditing", href: "/auditing" },
    { name: "Consulting Services", href: "/consulting" },
    { name: "AI Products", href: "/products" },
  ];

  const services = [
    { name: "FirstLeap Program", href: "/training/firstleap" },
    { name: "Uplift Program", href: "/training/uplift" },
    { name: "Leadership Program", href: "/training/leadership" },
    { name: "Re-Start Program", href: "/training/restart" },
  ];

  const resources = [
    { name: "Case Studies", href: "/resources/case-studies" },
    { name: "Whitepapers", href: "/resources/whitepapers" },
    { name: "Webinars", href: "/events" },
    { name: "Blog", href: "/resources/blog" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Accessibility", href: "/accessibility" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Company info - Left side */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={axygenLogo} 
                alt="Axygen Pharmatech - Global Centre of Excellence for GxP Training & Consulting" 
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner in Pharmaceutical & Biotech Quality Solutions. 
              Part of the Fixity Group of Companies.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    #1st floor, Legend Platinum<br />
                    Jubilee Enclave, Hitech City<br />
                    Hyderabad, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">+91 96039 78651</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">hello@axygenpharmatech.com</span>
              </div>
            </div>
          </div>

          {/* Right side - Services sections */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Training Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Training Programs</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      to={service.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <Link 
                      to={resource.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-primary-foreground/70">
            <p>&copy; {currentYear} Axygen Pharmatech. All rights reserved.</p>
            <div className="flex space-x-4">
              {legal.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href}
                  className="hover:text-accent transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0 text-primary-foreground/70 hover:text-accent hover:text-white">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0 text-primary-foreground/70 hover:text-accent hover:text-white">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0 text-primary-foreground/70 hover:text-accent hover:text-white">
              <Facebook className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Fixity Group branding */}
      <div className="bg-primary-foreground/5 border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-center text-xs text-primary-foreground/60">
            Proudly part of the <span className="text-accent font-medium">Fixity Group of Companies</span> - Enabling scalable global delivery
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;