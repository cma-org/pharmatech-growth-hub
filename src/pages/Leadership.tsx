import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  Target, 
  TrendingUp, 
  Award, 
  BookOpen,
  Lightbulb,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import heroImage from "@/assets/training-session.jpg";

const Leadership = () => {
  const programs = [
    {
      title: "Executive Leadership Program",
      description: "Strategic leadership development for senior pharmaceutical executives",
      duration: "6 months",
      format: "Hybrid",
      audience: "C-Suite, VPs, Directors",
      features: [
        "Strategic Vision Development",
        "Change Management",
        "Crisis Leadership",
        "Board Presentation Skills"
      ],
      icon: Award,
      color: "primary"
    },
    {
      title: "Emerging Leaders Program",
      description: "Accelerate your leadership journey from individual contributor to leader",
      duration: "4 months",
      format: "Virtual + In-person",
      audience: "Manager, Senior Manager",
      features: [
        "Leadership Fundamentals",
        "Team Building",
        "Performance Management",
        "Communication Skills"
      ],
      icon: TrendingUp,
      color: "accent"
    },
    {
      title: "Career Transition Mentoring",
      description: "Personalized mentoring for career pivots and advancement",
      duration: "3 months",
      format: "One-on-one",
      audience: "All Levels",
      features: [
        "Career Assessment",
        "Skills Gap Analysis",
        "Personal Branding",
        "Network Building"
      ],
      icon: Target,
      color: "primary"
    }
  ];

  const mentorshipAreas = [
    {
      title: "Unlearn",
      description: "Let go of outdated practices and limiting beliefs that no longer serve your growth",
      icon: BookOpen
    },
    {
      title: "Learn", 
      description: "Acquire new skills, mindsets, and approaches aligned with current industry demands",
      icon: Lightbulb
    },
    {
      title: "Re-learn",
      description: "Continuously adapt and evolve your leadership style for future challenges",
      icon: TrendingUp
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
            alt="Leadership Development" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Leadership Development
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Leadership & Career 
              <span className="text-primary block">Mentorship</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              The future of your leadership begins with the choices you make today. 
              We help you Unlearn, Learn, and Re-learn for sustainable career growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link to="/contact">Start Your Journey</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-card-border" asChild>
                <Link to="/contact">Book Discovery Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Programs */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Development Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive leadership development tailored for pharmaceutical professionals at every career stage
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-hover hover:scale-[1.02] transition-all duration-300 border-card-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      program.color === "primary" ? "bg-primary" : "bg-accent"
                    }`}>
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{program.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-foreground">Duration:</span>
                        <p className="text-muted-foreground">{program.duration}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Format:</span>
                        <p className="text-muted-foreground">{program.format}</p>
                      </div>
                    </div>
                    
                    <div>
                      <span className="font-semibold text-foreground">Target Audience:</span>
                      <p className="text-muted-foreground text-sm">{program.audience}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <span className="font-semibold text-foreground">Key Features:</span>
                      <div className="grid grid-cols-2 gap-1">
                        {program.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <Link to="/contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Unlearn, Learn, Re-learn Philosophy */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Philosophy: Unlearn, Learn, Re-learn
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuous evolution is the key to sustainable leadership success in the pharmaceutical industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mentorshipAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card 
                  key={index}
                  className="text-center group hover:shadow-hover transition-all duration-300 border-card-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-trust">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Leadership Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join successful pharmaceutical leaders who have accelerated their careers through our mentorship programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-card-border" asChild>
              <Link to="/contact">Download Program Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Leadership;