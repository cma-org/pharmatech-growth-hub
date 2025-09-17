import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Shield, 
  Users, 
  Brain,
  ChevronRight,
  CheckCircle,
  TrendingUp
} from "lucide-react";
import trainingImage from "@/assets/training-session.jpg";
import auditImage from "@/assets/audit-quality.jpg";
import aiImage from "@/assets/ai-dashboard.jpg";

const ServicePillars = () => {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Training & Development",
      subtitle: "Practice-first GMP & GxP Learning",
      description: "Comprehensive training programs across career stages with signature programs: FirstLeap, Uplift, Leadership, and Re-Start.",
      image: trainingImage,
      features: [
        "10,000+ Professionals Trained",
        "4 Signature Programs",
        "GMP/GxP Certifications",
        "Career-stage Aligned Learning"
      ],
      link: "/training",
      cta: "Explore Programs",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Auditing & Quality (CQO)",
      subtitle: "Regulatory Readiness & Compliance",
      description: "Product-specific audits aligned to current guidelines with CAPA support. Internal, vendor, and regulatory readiness assessments.",
      image: auditImage,
      features: [
        "USFDA, EU-GMP, WHO Coverage",
        "Internal & Vendor Audits",
        "Gap Analysis & CAPA Support",
        "Regulatory Inspection Veterans"
      ],
      link: "/auditing",
      cta: "Request Audit",
      color: "accent"
    },
    {
      icon: Users,
      title: "Consulting Services",
      subtitle: "Inspection Readiness & SME Support",
      description: "Mock audits, SME readiness, CAPA planning, and Computer System Validation (CSV) that drive compliance outcomes.",
      image: auditImage,
      features: [
        "Mock Audits & Readiness",
        "SME Enablement",
        "CSV Expertise",
        "CAPA Planning Support"
      ],
      link: "/consulting",
      cta: "Book Discovery Call",
      color: "primary"
    },
    {
      icon: Brain,
      title: "Innovative Products",
      subtitle: "AI Dashboards & 3D Learning",
      description: "Revolutionary AI-Integrated Quality Dashboards and 3D Immersive Learning Modules for next-generation pharmaceutical training.",
      image: aiImage,
      features: [
        "AI Quality Dashboards",
        "3D Immersive Learning",
        "Real-time Insights",
        "Predictive Analytics"
      ],
      link: "/products",
      cta: "Request Demo",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Quality Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From training and development to auditing and cutting-edge products, 
            we partner with you across the entire pharmaceutical quality lifecycle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 border-card-border bg-card overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-2 ${
                      pillar.color === "primary" ? "bg-primary" : "bg-accent"
                    }`}>
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{pillar.title}</h3>
                      <p className="text-sm text-muted-foreground font-normal">{pillar.subtitle}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {pillar.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      variant={pillar.color === "primary" ? "default" : "secondary"} 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" 
                      asChild
                    >
                      <Link to={pillar.link}>
                        {pillar.cta}
                        <TrendingUp className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust signals */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-trust rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Axygen Pharmatech?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">75+</div>
                <div className="text-sm text-muted-foreground">Years Combined Leadership Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">10,000+</div>
                <div className="text-sm text-muted-foreground">Professionals Successfully Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Reduction in Quality Incidents</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePillars;