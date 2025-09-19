import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  BarChart3, 
  CheckCircle, 
  TrendingUp,
  Eye,
  Zap,
  Shield
} from "lucide-react";
import dashboardImage from "@/assets/ai-dashboard.jpg";

const ProductAIDashboard = () => {
  const features = [
    {
      icon: Eye,
      title: "Real-time Insights",
      description: "Instant visibility into quality metrics and performance indicators across your operations"
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "AI-powered forecasting to identify potential quality issues before they occur"
    },
    {
      icon: BarChart3,
      title: "Intuitive Visualization",
      description: "Beautiful, easy-to-understand charts and graphs for complex quality data"
    },
    {
      icon: Zap,
      title: "Automated Reporting",
      description: "Intelligent report generation with actionable insights and recommendations"
    }
  ];

  const benefits = [
    "Reduce quality incidents by up to 40% through predictive analytics",
    "Accelerate decision-making with real-time data visualization",
    "Improve regulatory compliance with automated monitoring",
    "Enhance team collaboration through shared insights",
    "Streamline quality processes with intelligent automation",
    "Enable data-driven strategic planning and resource allocation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <Badge className="mb-6 bg-accent/20 text-accent-foreground">
                AI-Powered Quality Intelligence
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                AI-Integrated Quality Dashboards
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Empower your leadership teams with real-time insights, predictive analytics, 
                and intuitive visualization tools for sound, scientific, and data-driven decision making in the AI era.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-primary-foreground/10 border-primary-foreground hover:bg-primary-foreground/20" asChild>
                  <Link to="/consulting">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={dashboardImage} 
                alt="AI Quality Dashboard Interface"
                className="rounded-lg shadow-card w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Intelligent Dashboard Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your quality data into actionable insights with our AI-powered dashboard technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-card-border bg-card hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Drive operational excellence and regulatory compliance with data-driven insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 bg-card p-6 rounded-lg border border-card-border hover:shadow-card transition-all duration-300">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Harness AI for Quality Excellence?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Transform your quality operations with intelligent dashboards that provide actionable insights 
            and predictive analytics. Contact us to see the future of quality management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/contact">Schedule Demo</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-primary-foreground/10 border-primary-foreground hover:bg-primary-foreground/20" asChild>
              <Link to="/consulting">Learn More</Link>
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