import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Eye, 
  CheckCircle,
  TrendingUp,
  Shield,
  ArrowRight,
  Play,
  Monitor,
  Users,
  Target
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import threeDLearningImage from "@/assets/3d-learning-modules.jpg";

const Product3DLearning = () => {
  const features = [
    "Virtual Clean Room Environments",
    "Risk-Free Practice Scenarios", 
    "Real-world GxP Operations",
    "Interactive Learning Modules",
    "Multi-user Collaboration",
    "Performance Analytics"
  ];

  const benefits = [
    "Reduce Training Costs by 60%",
    "Zero Operational Risk",
    "Accelerated Learning Curve",
    "Consistent Training Quality"
  ];

  const useCases = [
    {
      title: "Aseptic Processing Training",
      description: "Practice sterile manufacturing procedures in a controlled virtual environment",
      scenarios: ["Gowning Procedures", "Environmental Monitoring", "Material Transfer", "Contamination Response"]
    },
    {
      title: "Equipment Operation",
      description: "Learn complex equipment operations without production impact",
      scenarios: ["Filling Line Operations", "Inspection Procedures", "Maintenance Activities", "Troubleshooting"]
    },
    {
      title: "Regulatory Compliance",
      description: "Simulate inspection scenarios and regulatory interactions",
      scenarios: ["Mock Inspections", "Document Reviews", "Investigator Interviews", "Deviation Handling"]
    }
  ];

  const technicalSpecs = [
    {
      title: "VR Compatibility",
      description: "Compatible with major VR headsets including Oculus, HTC Vive, and mixed reality devices",
      icon: Monitor
    },
    {
      title: "Multi-User Support", 
      description: "Up to 20 simultaneous users in collaborative training sessions",
      icon: Users
    },
    {
      title: "Progress Tracking",
      description: "Comprehensive analytics and performance metrics for each learner",
      icon: Target
    },
    {
      title: "Industry Compliance",
      description: "Built to meet GMP, GDP, and regulatory training requirements",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={threeDLearningImage} 
            alt="3D Immersive Learning" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              VR Technology
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              3D Immersive Learning
              <span className="text-primary block">Modules</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              For GxP operations—bringing real-world scenarios into a virtual environment where teams can 
              practice critical tasks and build confidence without operational risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              </Button>
              <Button size="lg" variant="outline" className="border-card-border" asChild>
                <Link to="/contact">Request Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Virtual Reality Training Revolution
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Transform pharmaceutical training with immersive virtual reality experiences that replicate 
                  real-world manufacturing and quality environments. Practice critical procedures without 
                  compromising product quality or safety.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Benefits</h4>
                  <div className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-hover">
                <img 
                  src={threeDLearningImage} 
                  alt="3D Immersive Learning Environment"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Training Scenarios
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive training modules covering all aspects of pharmaceutical operations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card 
                key={index}
                className="group hover:shadow-hover transition-all duration-300 border-card-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{useCase.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Training Modules:</h4>
                    <div className="space-y-1">
                      {useCase.scenarios.map((scenario, scenarioIndex) => (
                        <div key={scenarioIndex} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                          <span className="text-muted-foreground">{scenario}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade VR platform designed for pharmaceutical excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <Card 
                  key={index}
                  className="text-center group hover:shadow-hover transition-all duration-300 border-card-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {spec.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {spec.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gradient-trust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Implementation Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Assessment", description: "Analyze current training needs and VR infrastructure requirements" },
              { step: 2, title: "Customization", description: "Develop tailored VR modules specific to your operations" },
              { step: 3, title: "Deployment", description: "Install hardware and software with comprehensive setup support" },
              { step: 4, title: "Training & Support", description: "Train your team and provide ongoing technical support" }
            ].map((step, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Training?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Experience risk-free pharmaceutical training with our immersive VR platform. 
            Schedule a demo to see the technology in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/contact">
                <Play className="mr-2 h-4 w-4" />
                Schedule VR Demo
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-card-border" asChild>
              <Link to="/contact">
                Get Implementation Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Product3DLearning;