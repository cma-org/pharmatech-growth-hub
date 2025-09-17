import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  Trophy, 
  RefreshCw,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  Calendar,
  BookOpen
} from "lucide-react";
import trainingImage from "@/assets/training-session.jpg";

const Training = () => {
  const programs = [
    {
      id: "firstleap",
      title: "FirstLeap",
      subtitle: "For Early-Career Graduates",
      description: "Comprehensive pharma-GMP basics program designed to launch your pharmaceutical career with confidence.",
      icon: GraduationCap,
      audience: "Fresh graduates & entry-level professionals",
      duration: "12 weeks",
      format: "Online + Live Sessions",
      outcomes: [
        "GMP/GxP fundamentals mastery",
        "Industry-ready practical skills",
        "Career guidance & mentorship",
        "Industry certification"
      ],
      features: [
        "Interactive case studies",
        "Live mentor sessions",
        "Peer learning groups",
        "Job placement support"
      ],
      color: "primary"
    },
    {
      id: "uplift",
      title: "Uplift",
      subtitle: "For Working Professionals & Managers",
      description: "Role-aligned upskilling programs covering QA, CSV, Microbiology, and Regulatory Affairs.",
      icon: Users,
      audience: "Working professionals up to managers",
      duration: "8-16 weeks",
      format: "Flexible hybrid delivery",
      outcomes: [
        "Advanced technical expertise",
        "Leadership skill development",
        "Cross-functional knowledge",
        "Career advancement readiness"
      ],
      features: [
        "Specialized tracks (QA/CSV/Micro/RA)",
        "Real-world project work",
        "Industry expert instructors",
        "Flexible scheduling"
      ],
      color: "accent"
    },
    {
      id: "leadership",
      title: "Leadership",
      subtitle: "For Managers & Senior Leaders",
      description: "Advanced GxP/compliance mastery with executive mentorship for pharmaceutical leaders.",
      icon: Trophy,
      audience: "Managers & senior leaders",
      duration: "6 months",
      format: "Executive cohorts",
      outcomes: [
        "Strategic compliance thinking",
        "Advanced regulatory knowledge",
        "Executive leadership skills",
        "Industry network expansion"
      ],
      features: [
        "C-suite mentorship program",
        "Strategic case studies",
        "Peer executive network",
        "Regulatory expert advisory"
      ],
      color: "primary"
    },
    {
      id: "restart",
      title: "Re-Start",
      subtitle: "For Women Returning to Work",
      description: "Comprehensive re-entry program with returnship support for women returning to pharmaceutical careers.",
      icon: RefreshCw,
      audience: "Women returning to pharmaceutical careers",
      duration: "10 weeks + 6 months support",
      format: "Supportive cohort model",
      outcomes: [
        "Updated industry knowledge",
        "Confidence building",
        "Network reconnection",
        "Career re-launch support"
      ],
      features: [
        "Flexible learning schedule",
        "Dedicated career counseling",
        "Returnship opportunities",
        "Ongoing support network"
      ],
      color: "accent"
    }
  ];

  const courseCategories = [
    {
      title: "GMP Certifications",
      description: "Core Good Manufacturing Practice certifications",
      courses: ["GDP Fundamentals", "GMP for Manufacturing", "Quality Control Essentials", "Documentation Systems"]
    },
    {
      title: "International Courses",
      description: "Global regulatory standards and best practices",
      courses: ["USFDA Compliance", "EU-GMP Standards", "WHO Guidelines", "ICH Guidelines"]
    },
    {
      title: "Masterclasses",
      description: "Advanced specialized training sessions",
      courses: ["Data Integrity", "Computer Systems Validation", "Regulatory Inspections", "Risk Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={trainingImage} 
            alt="Professional training session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-accent/20 text-accent-foreground">
              10,000+ Professionals Successfully Trained
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Practice-First GMP & GxP Learning
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Comprehensive training programs across career stages with signature programs designed 
              to advance your pharmaceutical and biotech career.
            </p>
          </div>
        </div>
      </section>

      {/* Signature Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Signature Training Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Career-stage aligned learning paths designed by industry veterans with 75+ years of combined experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <Card key={program.id} className="group hover:shadow-hover transition-all duration-300 border-card-border bg-card">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-${program.color} flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {program.audience}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {program.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-medium mb-4">
                      {program.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Program Details */}
                    <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="text-center">
                        <Clock className="h-5 w-5 text-muted-foreground mx-auto mb-1" />
                        <div className="text-xs text-muted-foreground">Duration</div>
                        <div className="text-sm font-medium">{program.duration}</div>
                      </div>
                      <div className="text-center">
                        <MapPin className="h-5 w-5 text-muted-foreground mx-auto mb-1" />
                        <div className="text-xs text-muted-foreground">Format</div>
                        <div className="text-sm font-medium">{program.format}</div>
                      </div>
                      <div className="text-center">
                        <Users className="h-5 w-5 text-muted-foreground mx-auto mb-1" />
                        <div className="text-xs text-muted-foreground">Audience</div>
                        <div className="text-sm font-medium">All Levels</div>
                      </div>
                    </div>

                    {/* Learning Outcomes */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Learning Outcomes</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {program.outcomes.map((outcome, index) => (
                          <div key={index} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {program.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <ArrowRight className="h-3 w-3 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-4">
                      <Button 
                        variant={program.color === "primary" ? "default" : "secondary"} 
                        className="flex-1"
                        asChild
                      >
                        <Link to={`/training/${program.id}`}>
                          Apply to Program
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to={`/training/${program.id}`}>
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Courses & Masterclasses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized courses covering the latest regulatory requirements and industry best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courseCategories.map((category, index) => (
              <Card key={index} className="bg-card border-card-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <span>{category.title}</span>
                  </CardTitle>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{course}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-6">
                    View All Courses
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Advance Your Pharmaceutical Career?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of professionals who have transformed their careers with our comprehensive training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">
                Get Training Proposal
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;