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
import CountingNumber from "@/components/CountingNumber";

const ServicePillars = () => {
  const pillars = [
    {
      icon: Shield,
      title: "Auditing",
      subtitle: "Regulatory Readiness & Compliance",
      description: "Regulatory readiness assessments, internal audits, vendor audits, and gap analysis aligned with international standards.",
      image: auditImage,
      features: [
        "USFDA, EU-GMP, WHO Coverage",
        "Internal & Vendor Audits",
        "Gap Analysis & CAPA Support",
        "Regulatory Inspection Veterans"
      ],
      link: "/auditing",
      cta: "Request Audit",
      color: "primary"
    },
    {
      icon: Users,
      title: "Consulting",
      subtitle: "Strategic Quality Systems",
      description: "Strategic quality systems development, remediation support, and compliance optimization tailored to your operations.",
      image: auditImage,
      features: [
        "Quality Systems Development",
        "Remediation Support",
        "Compliance Optimization",
        "Tailored Solutions"
      ],
      link: "/consulting",
      cta: "Book Discovery Call",
      color: "accent"
    },
    {
      icon: GraduationCap,
      title: "GxP Training",
      subtitle: "Customized Training Programs",
      description: "Customized GxP, GMP, and data integrity training with real-world examples—suitable for all levels of experience.",
      image: trainingImage,
      features: [
        "GxP & GMP Training",
        "Data Integrity Focus",
        "Real-world Examples",
        "All Experience Levels"
      ],
      link: "/training",
      cta: "Explore Programs",
      color: "primary"
    },
    {
      icon: Users,
      title: "Talent Management Solutions",
      subtitle: "GxP-Ready Talent Connection",
      description: "Connecting organizations with GxP-ready talent for QA, QC, Manufacturing, Validation, and Regulatory Affairs roles.",
      image: trainingImage,
      features: [
        "QA/QC Professionals",
        "Manufacturing Experts",
        "Validation Specialists",
        "Regulatory Affairs Talent"
      ],
      link: "/recruitment",
      cta: "Find Talent",
      color: "accent"
    },
    {
      icon: Brain,
      title: "Leadership & Career Mentor",
      subtitle: "Future-Ready Leadership",
      description: "The future of your leadership begins with the choices you make today. We help to Unlearn, Learn and Re-learn.",
      image: trainingImage,
      features: [
        "Leadership Development",
        "Career Mentorship",
        "Unlearn & Relearn",
        "Future-Ready Skills"
      ],
      link: "/contact",
      cta: "Start Journey",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Computer System Validation (CSV)",
      subtitle: "Digital Systems Compliance",
      description: "Compliance assurance for software and digital systems under GAMP 5 and data integrity guidelines.",
      image: aiImage,
      features: [
        "GAMP 5 Compliance",
        "Data Integrity Guidelines",
        "Software Validation",
        "Digital Systems Assurance"
      ],
      link: "/contact",
      cta: "Request CSV Support",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Services
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
              <Card 
                key={index} 
                className="group hover:shadow-hover hover:scale-[1.02] transition-all duration-300 border-card-border bg-card overflow-hidden animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
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
                      variant="default"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-200" 
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

        {/* Core Products Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionary learning and analytics solutions powered by cutting-edge technology.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 3D Immersive Learning Modules */}
            <Card className="group hover:shadow-hover hover:scale-[1.02] transition-all duration-300 border-card-border bg-card overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/src/assets/3d-learning-modules.jpg" 
                  alt="3D Immersive Learning Modules"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-2 bg-primary">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">3D Immersive Learning Modules</h3>
                    <p className="text-sm text-muted-foreground font-normal">Virtual Reality Training Environment</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  For GxP operations—bringing real-world scenarios into a virtual environment where teams can practice critical tasks and build confidence without operational risk.
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Virtual Reality Environment</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Real-world Scenarios</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Risk-free Training</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Critical Task Practice</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    variant="default"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-200" 
                    asChild
                  >
                    <Link to="/product-3d-learning">
                      Explore 3D Learning
                      <TrendingUp className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI-Integrated Quality Dashboards */}
            <Card className="group hover:shadow-hover hover:scale-[1.02] transition-all duration-300 border-card-border bg-card overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/src/assets/ai-quality-dashboard.jpg" 
                  alt="AI-Integrated Quality Dashboards"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-2 bg-accent">
                    <Brain className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">AI-Integrated Quality Dashboards</h3>
                    <p className="text-sm text-muted-foreground font-normal">Real-time Analytics & Insights</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Empower leadership teams with real-time insights, predictive analytics, and intuitive visualization tools for sound, scientific, and data-driven decision making in AI era.
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Real-time Insights</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Predictive Analytics</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Data-driven Decisions</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Intuitive Visualization</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    variant="default"
                    className="w-full bg-accent text-primary-foreground hover:bg-accent/90 hover:scale-105 transition-all duration-200" 
                    asChild
                  >
                    <Link to="/product-ai-dashboard">
                      Explore AI Dashboard
                      <TrendingUp className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust signals */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-trust rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Axygen Pharmatech?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <CountingNumber end={75} suffix="+" className="text-3xl font-bold text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Years Combined Leadership Experience</div>
              </div>
              <div>
                <CountingNumber end={10000} suffix="+" className="text-3xl font-bold text-accent mb-2" />
                <div className="text-sm text-muted-foreground">Professionals Successfully Trained</div>
              </div>
              <div>
                <CountingNumber end={40} suffix="%" className="text-3xl font-bold text-primary mb-2" />
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