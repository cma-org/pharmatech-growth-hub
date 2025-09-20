import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import CountingNumber from "@/components/CountingNumber";
import { 
  Users, 
  Award, 
  Globe, 
  TrendingUp,
  CheckCircle,
  Target,
  Heart,
  Lightbulb,
  Shield,
  Star,
  GraduationCap
} from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: CheckCircle,
      title: "USFDA & EU Inspections",
      description: "Successfully led multiple USFDA, EU and other regulatory inspections"
    },
    {
      icon: Users,
      title: "Greenfield Projects", 
      description: "Built quality systems for greenfield projects across Oral Solid Dosages, Injectables, API, and Biotech facilities"
    },
    {
      icon: GraduationCap,
      title: "10,000+ Professionals Trained",
      description: "Trained pharma professionals in GxP, regulatory trends, and compliance strategies"
    },
    {
      icon: TrendingUp,
      title: "40% Quality Incident Reduction",
      description: "Reduced quality incidents and deviations by up to 40% through QMS improvements"
    },
    {
      icon: Award,
      title: "Faster Market Readiness",
      description: "Enabled clients to achieve faster regulatory approvals and market readiness"
    }
  ];

  const keyStats = [
    { number: 10000, suffix: "+", label: "Professionals Trained" },
    { number: 75, suffix: "+", label: "Years Combined Leadership" },
    { number: 40, suffix: "%", label: "Quality Incident Reduction" }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, delivering solutions that exceed expectations."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with complete transparency and ethical practices, building trust through honest communication."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and methodologies to solve complex pharmaceutical challenges."
    },
    {
      icon: Shield,
      title: "Compliance",
      description: "We ensure all our solutions meet the strictest regulatory requirements and industry standards."
    }
  ];


  const certifications = [
    "USFDA Registered Expert",
    "EU-GMP Certified Auditor",
    "WHO Prequalification Specialist",
    "ICH Guidelines Expert",
    "ISO 9001:2015 Lead Auditor",
    "Computer Systems Validation (CSV) Expert"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-accent/20 text-accent-foreground">
            Part of Fixity Group of Companies
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            AXYGEN PHARMACEUTICAL
          </h1>
          <div className="text-xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              Founded by Quality Assurance veterans with <span className="text-accent font-semibold">75+ years</span> of combined leadership 
              in the pharmaceutical and biotech industries, AXYGEN PHARMACEUTICAL is a 
              <span className="text-accent font-semibold"> GxP Training, Auditing, Quality & Consulting</span> company enabling us to scale our 
              global presence.
            </p>
            <p>
              We bring first-hand knowledge from global regulatory inspections <span className="text-accent font-semibold">(USFDA, 
              EU-GMP, WHO)</span>, greenfield setups, and complex compliance challenges, 
              translating that experience into measurable results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission section with enhanced design */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-card-border shadow-card relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Award className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl font-medium text-center text-foreground leading-relaxed mb-8">
                    "To be a reliable and results-oriented partner supporting pharmaceutical and biotech companies with 
                    <span className="text-primary font-semibold"> customized GxP solutions</span> that foster 
                    <span className="text-accent font-semibold"> compliance</span>, 
                    <span className="text-primary font-semibold">efficiency</span>, 
                    and <span className="text-accent font-semibold">long-term growth</span>."
                  </blockquote>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <span>Quality Excellence</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-5 w-5 text-accent" />
                      <span>Global Impact</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span>Innovation Focus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">Our Values</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on decades of pharmaceutical industry experience, our values guide every solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center border-card-border bg-card hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven results from decades of pharmaceutical industry leadership and regulatory expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="text-center border-card-border bg-card hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg font-bold text-foreground mb-2">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Key Statistics */}
          <div className="grid md:grid-cols-3 gap-8 bg-gradient-trust rounded-2xl p-8">
            {keyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  <CountingNumber 
                    end={stat.number} 
                    suffix={stat.suffix}
                    className="text-4xl font-bold text-primary"
                    duration={2500}
                  />
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Certifications & Credentials */}
      <section className="py-20 bg-gradient-trust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certifications & Credentials
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team holds the highest industry certifications and regulatory credentials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-lg border border-card-border">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Why Choose Us
            </h2>
            
            {/* Hexagonal layout inspired by the uploaded image */}
            <div className="relative max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-card backdrop-blur-sm rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-lg font-semibold text-foreground mb-2">Decades of Hands-On Leadership</div>
                  <p className="text-sm text-muted-foreground">75+ years combined experience in pharmaceutical quality and compliance</p>
                </div>
                <div className="bg-card backdrop-blur-sm rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-lg font-semibold text-foreground mb-2">Deep Knowledge of Global Regulatory Requirements</div>
                  <p className="text-sm text-muted-foreground">Extensive expertise in USFDA, EU-GMP, WHO standards</p>
                </div>
                <div className="bg-card backdrop-blur-sm rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-lg font-semibold text-foreground mb-2">Revolutionary AI & 3D Immersive Learning Models</div>
                  <p className="text-sm text-muted-foreground">Cutting-edge training technology for enhanced learning outcomes</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div className="bg-card backdrop-blur-sm rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-lg font-semibold text-foreground mb-2">Focus on Cost-Effective, Scalable, and Sustainable Solutions</div>
                  <p className="text-sm text-muted-foreground">Tailored approaches that grow with your organization</p>
                </div>
                <div className="bg-card backdrop-blur-sm rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-lg font-semibold text-foreground mb-2">Commitment to Excellence, Integrity, and Impact</div>
                  <p className="text-sm text-muted-foreground">Delivering measurable results with unwavering ethical standards</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/contact">Start Your Partnership</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;