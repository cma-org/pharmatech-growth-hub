import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  CheckCircle,
  TrendingUp,
  Shield,
  ArrowRight,
  Play,
  Brain,
  Zap,
  Database,
  Eye
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import aiDashboardImage from "@/assets/ai-quality-dashboard.jpg";

const ProductAIDashboard = () => {
  const features = [
    "Real-time Quality Metrics",
    "Predictive Analytics Engine",
    "Automated Alert Systems", 
    "Compliance Monitoring",
    "Trend Analysis",
    "Custom KPI Dashboards"
  ];

  const benefits = [
    "40% Faster Decision Making",
    "Proactive Issue Prevention",
    "Enhanced Compliance",
    "Data-Driven Insights"
  ];

  const dashboardModules = [
    {
      title: "Quality Performance Dashboard",
      description: "Real-time monitoring of quality metrics across all manufacturing operations",
      features: ["Batch Quality Trends", "Deviation Tracking", "OOS/OOT Analysis", "CAPA Effectiveness"]
    },
    {
      title: "Predictive Analytics Suite",
      description: "AI-powered predictions to prevent quality issues before they occur",
      features: ["Risk Prediction Models", "Trend Forecasting", "Equipment Health", "Process Optimization"]
    },
    {
      title: "Regulatory Compliance Monitor",
      description: "Comprehensive compliance tracking aligned with global regulatory standards",
      features: ["Audit Readiness", "Regulatory Changes", "Documentation Status", "Inspection Preparation"]
    }
  ];

  const aiCapabilities = [
    {
      title: "Machine Learning Models",
      description: "Advanced ML algorithms trained on pharmaceutical quality data for accurate predictions",
      icon: Brain
    },
    {
      title: "Real-time Processing", 
      description: "Instant data processing and visualization for immediate actionable insights",
      icon: Zap
    },
    {
      title: "Data Integration",
      description: "Seamlessly connect with existing LIMS, ERP, and quality management systems",
      icon: Database
    },
    {
      title: "Visual Analytics",
      description: "Intuitive dashboards with interactive charts, graphs, and trend analysis",
      icon: Eye
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aiDashboardImage} 
            alt="AI Quality Dashboard" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              AI-Powered
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              AI-Integrated Quality
              <span className="text-accent block">Dashboards</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Empower leadership teams with real-time insights, predictive analytics, and intuitive 
              visualization tools for sound, scientific, and data-driven decision making in AI era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link to="/contact">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Link>
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
            {/* Image */}
            <div className="relative animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-hover">
                <img 
                  src={aiDashboardImage} 
                  alt="AI Quality Dashboard Interface"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-accent-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Intelligent Decision Support
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Transform your quality management with AI-powered dashboards that provide real-time 
                  insights, predictive analytics, and actionable intelligence for proactive decision making.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Core Features</h4>
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
          </div>
        </div>
      </section>

      {/* Dashboard Modules */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dashboard Modules
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive suite of intelligent dashboards for every aspect of quality management
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {dashboardModules.map((module, index) => (
              <Card 
                key={index}
                className="group hover:shadow-hover transition-all duration-300 border-card-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {module.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{module.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Metrics:</h4>
                    <div className="space-y-1">
                      {module.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
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

      {/* AI Capabilities */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI-Powered Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced artificial intelligence features that transform raw data into actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiCapabilities.map((capability, index) => {
              const Icon = capability.icon;
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
                      {capability.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Sources & Integration */}
      <section className="py-20 bg-gradient-trust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              System Integration
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seamlessly connect with your existing pharmaceutical systems for unified data insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "LIMS Integration", description: "Laboratory Information Management Systems data integration" },
              { title: "ERP Connectivity", description: "Enterprise Resource Planning system synchronization" },
              { title: "MES Integration", description: "Manufacturing Execution Systems real-time data feeds" },
              { title: "QMS Alignment", description: "Quality Management Systems comprehensive integration" },
              { title: "Regulatory Systems", description: "Regulatory submission and tracking system connections" },
              { title: "Document Management", description: "Electronic document and record management integration" }
            ].map((integration, index) => (
              <Card 
                key={index}
                className="border-card-border animate-fade-in group hover:shadow-hover transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {integration.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {integration.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Security & Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade security with pharmaceutical industry compliance built-in
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "21 CFR Part 11", icon: Shield, description: "Electronic records and signatures compliance" },
              { title: "Data Integrity", icon: Database, description: "ALCOA+ principles implementation" },
              { title: "Audit Trails", icon: Eye, description: "Complete user activity tracking" },
              { title: "Role-Based Access", icon: Brain, description: "Granular permission management" }
            ].map((security, index) => {
              const Icon = security.icon;
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
                      {security.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {security.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Unlock AI-Powered Insights?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Transform your quality management with intelligent dashboards that provide real-time insights 
            and predictive analytics for proactive decision making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link to="/contact">
                <Play className="mr-2 h-4 w-4" />
                Schedule AI Demo
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

export default ProductAIDashboard;