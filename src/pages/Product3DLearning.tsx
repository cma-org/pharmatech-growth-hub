import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  CheckCircle, 
  TrendingUp,
  Monitor,
  Target,
  Award
} from "lucide-react";
import learningImage from "@/assets/3d-learning-modules.jpg";

const Product3DLearning = () => {
  const features = [
    {
      icon: Monitor,
      title: "Virtual Reality Environment",
      description: "Immersive 3D environments that replicate real pharmaceutical facilities and operations"
    },
    {
      icon: Users,
      title: "Team-based Training",
      description: "Collaborative learning experiences where teams can train together in virtual scenarios"
    },
    {
      icon: Target,
      title: "Critical Task Practice",
      description: "Hands-on practice of critical GxP tasks without operational risk"
    },
    {
      icon: Award,
      title: "Performance Tracking",
      description: "Real-time assessment and progress tracking for enhanced learning outcomes"
    }
  ];

  const benefits = [
    "Risk-free training environment for critical operations",
    "Significant reduction in training time and costs",
    "Enhanced knowledge retention through immersive learning",
    "Standardized training across global teams",
    "Real-world scenario simulation for better preparedness",
    "Immediate feedback and performance analytics"
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
                Revolutionary Training Technology
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                3D Immersive Learning Modules
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Transform your GxP training with cutting-edge virtual reality technology. 
                Practice critical tasks in risk-free virtual environments that replicate real-world pharmaceutical operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-primary-foreground/10 border-primary-foreground hover:bg-primary-foreground/20" asChild>
                  <Link to="/training">View Training Programs</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={learningImage} 
                alt="3D Immersive Learning Environment"
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
              Advanced Training Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of pharmaceutical training with our immersive 3D learning technology.
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
              Training Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionize your team's training experience with measurable outcomes and enhanced learning retention.
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
            Ready to Transform Your Training?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Experience the future of pharmaceutical training with our 3D immersive learning modules. 
            Contact us today to schedule a demonstration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/contact">Schedule Demo</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-primary-foreground/10 border-primary-foreground hover:bg-primary-foreground/20" asChild>
              <Link to="/training">View All Programs</Link>
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