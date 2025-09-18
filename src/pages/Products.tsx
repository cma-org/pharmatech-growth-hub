import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Eye, 
  BarChart3, 
  Zap,
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  ArrowRight,
  Play,
  Monitor,
  Headphones
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import threeDLearningImage from "@/assets/3d-learning-modules.jpg";
import aiDashboardImage from "@/assets/ai-quality-dashboard.jpg";

const Products = () => {
  const coreProducts = [
    {
      title: "3D Immersive Learning Modules",
      subtitle: "Virtual Reality GxP Training",
      description: "For GxP operations—bringing real-world scenarios into a virtual environment where teams can practice critical tasks and build confidence without operational risk.",
      image: threeDLearningImage,
      features: [
        "Virtual Clean Room Environments",
        "Risk-Free Practice Scenarios",
        "Real-world GxP Operations",
        "Interactive Learning Modules",
        "Multi-user Collaboration",
        "Performance Analytics"
      ],
      benefits: [
        "Reduce Training Costs by 60%",
        "Zero Operational Risk",
        "Accelerated Learning Curve",
        "Consistent Training Quality"
      ],
      icon: Eye,
      color: "primary",
      tag: "VR Technology"
    },
    {
      title: "AI-Integrated Quality Dashboards",
      subtitle: "Intelligent Decision Support",
      description: "Empower leadership teams with real-time insights, predictive analytics, and intuitive visualization tools for sound, scientific, and data-driven decision making in AI era.",
      image: aiDashboardImage,
      features: [
        "Real-time Quality Metrics",
        "Predictive Analytics Engine",
        "Automated Alert Systems",
        "Compliance Monitoring",
        "Trend Analysis",
        "Custom KPI Dashboards"
      ],
      benefits: [
        "40% Faster Decision Making",
        "Proactive Issue Prevention",
        "Enhanced Compliance",
        "Data-Driven Insights"
      ],
      icon: BarChart3,
      color: "accent",
      tag: "AI-Powered"
    }
  ];

  const productFeatures = [
    {
      title: "Cutting-Edge Technology",
      description: "Leveraging the latest in VR and AI technology for pharmaceutical excellence",
      icon: Brain
    },
    {
      title: "Industry-Specific Design",
      description: "Built specifically for pharmaceutical and biotech operations",
      icon: Shield
    },
    {
      title: "Scalable Solutions",
      description: "From small teams to global organizations, our products scale with you",
      icon: TrendingUp
    },
    {
      title: "Expert Support",
      description: "Dedicated support from pharmaceutical industry veterans",
      icon: Users
    }
  ];

  const useCases = [
    {
      title: "Manufacturing Training",
      description: "Practice complex manufacturing procedures in a safe virtual environment",
      scenarios: ["Aseptic Processing", "Equipment Operation", "Batch Record Review", "Deviation Handling"]
    },
    {
      title: "Quality Control",
      description: "Monitor and predict quality metrics across your operations",
      scenarios: ["Real-time Monitoring", "Trend Analysis", "Risk Assessment", "CAPA Management"]
    },
    {
      title: "Regulatory Preparedness",
      description: "Prepare teams for inspections with immersive mock scenarios",
      scenarios: ["Mock Inspections", "Document Review", "Interview Practice", "Compliance Verification"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Innovation Hub
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Core 
              <span className="text-primary block">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Revolutionary solutions that combine cutting-edge technology with deep pharmaceutical expertise 
              to transform how teams learn, train, and make critical quality decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link to="/contact">Request Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-card-border" asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Products Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Revolutionary Product Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Next-generation solutions designed to elevate pharmaceutical training and quality management
            </p>
          </div>

          <div className="space-y-16">
            {coreProducts.map((product, index) => {
              const Icon = product.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="space-y-4">
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {product.tag}
                      </Badge>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        product.color === "primary" ? "bg-primary" : "bg-accent"
                      }`}>
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground">
                        {product.title}
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        {product.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {product.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                        <div className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Benefits</h4>
                        <div className="space-y-2">
                          {product.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center space-x-2 text-sm">
                              <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                        asChild
                      >
                        <Link to="/contact">
                          <Play className="mr-2 h-4 w-4" />
                          Watch Demo
                        </Link>
                      </Button>
                      <Button variant="outline" className="border-card-border" asChild>
                        <Link to="/contact">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`relative ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-hover">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-80 lg:h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our products transform pharmaceutical operations across different scenarios
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
                    <h4 className="font-semibold text-foreground">Scenarios Covered:</h4>
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

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with deep pharmaceutical expertise and cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => {
              const Icon = feature.icon;
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
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-trust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powered by Advanced Technology
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="border-card-border animate-fade-in">
              <CardHeader>
                <Monitor className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-lg font-bold text-foreground">Virtual Reality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Immersive VR environments for risk-free pharmaceutical training
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-card-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <Brain className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-lg font-bold text-foreground">Artificial Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  AI-powered analytics and predictive insights for quality management
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-card-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-lg font-bold text-foreground">Real-time Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Instant data processing and visualization for immediate insights
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
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Experience the future of pharmaceutical training and quality management with our innovative products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/contact">
                <Play className="mr-2 h-4 w-4" />
                Request Live Demo
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-card-border" asChild>
              <Link to="/contact">
                <Headphones className="mr-2 h-4 w-4" />
                Schedule Consultation
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

export default Products;