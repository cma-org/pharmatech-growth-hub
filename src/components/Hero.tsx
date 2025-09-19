import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Award, Globe } from "lucide-react";
import heroImage from "@/assets/hero-pharma-lab.jpg";
import Hero3DVariant from "@/components/Hero3DVariants";

const Hero = () => {
  const achievements = [
    { icon: CheckCircle, text: "Successfully Led Multiple USFDA, EU Inspections", color: "text-accent" },
    { icon: Users, text: "10,000+ Professionals Trained in GxP & Compliance", color: "text-primary" },
    { icon: Award, text: "75+ Years Combined Leadership Experience", color: "text-accent" },
    { icon: Globe, text: "Built Quality Systems for Greenfield Projects", color: "text-primary" },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional pharmaceutical laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground">
            <div className="mb-6 animate-fade-in">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4 hover:scale-105 transition-transform duration-200">
                Pharmaceutical & Biotech Quality Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Your Trusted Partner in 
                <span className="text-accent"> GxP Excellence</span>
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed text-primary-foreground/90 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Global reach with local partnership in pharmaceutical GxP. 
                Delivering compliance-driven, practical solutions that deliver measurable results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-all duration-200" asChild>
                <Link to="/contact">Request Audit Proposal</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-primary-foreground/10 border-primary-foreground hover:scale-105 hover:bg-primary-foreground/20 transition-all duration-200" asChild>
                <Link to="/training">Explore Training Programs</Link>
              </Button>
            </div>

            {/* Key achievements */}
            <div className="grid sm:grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 text-primary-foreground/90 hover:scale-105 transition-transform duration-200">
                    <Icon className={`h-5 w-5 ${achievement.color}`} />
                    <span className="text-sm font-medium">{achievement.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:flex justify-end items-center hidden animate-fade-in" style={{ animationDelay: '1s' }}>
            <Hero3DVariant type="dna" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;