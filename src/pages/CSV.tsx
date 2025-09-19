import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Database, 
  Settings, 
  FileCheck,
  CheckCircle,
  Users,
  Target,
  Award,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import heroImage from "@/assets/ai-dashboard.jpg";

const CSV = () => {
  const services = [
    {
      title: "GAMP 5 Implementation",
      description: "Comprehensive implementation of GAMP 5 guidelines for pharmaceutical computer systems",
      features: [
        "Risk-based approach",
        "Category assessment",
        "Validation planning",
        "Documentation templates"
      ],
      icon: Settings,
      color: "primary"
    },
    {
      title: "Data Integrity Assurance",
      description: "Ensure ALCOA+ principles compliance across all digital systems and processes",
      features: [
        "ALCOA+ compliance",
        "Audit trail review",
        "Electronic records",
        "Digital signatures"
      ],
      icon: Database,
      color: "accent"
    },
    {
      title: "Software Validation",
      description: "Complete software validation lifecycle from planning to ongoing maintenance",
      features: [
        "IQ/OQ/PQ protocols",
        "User acceptance testing",
        "Change control",
        "Periodic review"
      ],
      icon: FileCheck,
      color: "primary"
    },
    {
      title: "System Assessment",
      description: "Thorough assessment of existing systems for compliance gaps and remediation",
      features: [
        "Gap analysis",
        "Risk assessment",
        "Remediation planning",
        "Compliance roadmap"
      ],
      icon: Target,
      color: "accent"
    }
  ];

  const methodology = [
    {
      step: 1,
      title: "System Classification",
      description: "Categorize systems based on GAMP 5 guidelines and determine appropriate validation approach"
    },
    {
      step: 2,
      title: "Risk Assessment", 
      description: "Conduct comprehensive risk assessment to identify critical functions and potential failure modes"
    },
    {
      step: 3,
      title: "Validation Planning",
      description: "Develop detailed validation master plan and protocols based on risk assessment outcomes"
    },
    {
      step: 4,
      title: "Execution & Documentation",
      description: "Execute validation activities and maintain compliant documentation throughout the lifecycle"
    }
  ];

  const deliverables = [
    {
      title: "Validation Master Plan",
      description: "Comprehensive plan outlining validation approach and strategy",
      icon: FileCheck
    },
    {
      title: "Risk Assessment Reports",
      description: "Detailed risk analysis with mitigation strategies",
      icon: Shield
    },
    {
      title: "IQ/OQ/PQ Protocols",
      description: "Complete qualification and validation protocols",
      icon: Settings
    },
    {
      title: "Training Materials",
      description: "User training documentation and SOPs",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Computer System Validation" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              CSV Excellence
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Computer System 
              <span className="text-primary block">Validation (CSV)</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Compliance assurance for software and digital systems under GAMP 5 and data integrity guidelines. 
              Ensure your systems meet regulatory requirements with our expert validation services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive CSV Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From GAMP 5 implementation to ongoing system maintenance, we provide end-to-end CSV solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-hover hover:scale-[1.02] transition-all duration-300 border-card-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      service.color === "primary" ? "bg-primary" : "bg-accent"
                    }`}>
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our CSV Methodology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven approach following GAMP 5 guidelines and industry best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((step, index) => (
              <Card 
                key={index}
                className="text-center group hover:shadow-hover transition-all duration-300 border-card-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You Get
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive documentation and deliverables to ensure lasting compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((deliverable, index) => {
              const Icon = deliverable.icon;
              return (
                <Card 
                  key={index}
                  className="text-center group hover:shadow-hover transition-all duration-300 border-card-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {deliverable.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {deliverable.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="py-20 bg-gradient-trust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Regulatory Standards Covered
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="border-card-border animate-fade-in">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-primary">GAMP 5</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Good Automated Manufacturing Practice guidelines for computerized systems
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-card-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-primary">21 CFR Part 11</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Electronic records and electronic signatures compliance
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-card-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-primary">Data Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  ALCOA+ principles and regulatory guidance compliance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Validate Your Systems?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Ensure regulatory compliance with our expert CSV services. Get started with a comprehensive system assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/contact">
                Request Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-card-border" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CSV;