import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Award, Globe } from "lucide-react";
import heroImage from "@/assets/hero-pharma-lab.jpg";

const Hero = () => {
  const achievements = [
    { icon: Users, text: "10,000+ Professionals Trained", color: "text-accent" },
    { icon: Award, text: "75+ Years Combined Leadership", color: "text-primary" },
    { icon: Globe, text: "USFDA, EU-GMP, WHO Expertise", color: "text-accent" },
    { icon: CheckCircle, text: "Regulatory Inspection Veterans", color: "text-primary" },
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
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
                Pharmaceutical & Biotech Quality Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Trusted Partner in 
                <span className="text-accent"> GxP Excellence</span>
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed text-primary-foreground/90 mb-8">
                Global reach with local partnership in pharmaceutical GxP. 
                Delivering compliance-driven, practical solutions that deliver measurable results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/contact">Request Audit Proposal</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground bg-none text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/training">Explore Training Programs</Link>
              </Button>
            </div>

            {/* Key achievements */}
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 text-primary-foreground/90">
                    <Icon className={`h-5 w-5 ${achievement.color}`} />
                    <span className="text-sm font-medium">{achievement.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:flex justify-center items-center hidden">
            <div className="relative">
              <div className="w-96 h-96 bg-primary-foreground/10 rounded-full absolute -top-4 -left-4"></div>
              <div className="w-80 h-80 bg-accent/20 rounded-full relative flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="text-6xl font-bold mb-2">75+</div>
                  <div className="text-lg font-medium">Years Combined</div>
                  <div className="text-lg font-medium">Leadership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;