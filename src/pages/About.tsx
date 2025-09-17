import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
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
  Star
} from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Users,
      number: "10,000+",
      title: "Professionals Trained",
      description: "Successfully trained across pharmaceutical and biotech industries"
    },
    {
      icon: Award,
      number: "75+",
      title: "Years Combined Leadership",
      description: "Decades of hands-on pharmaceutical industry experience"
    },
    {
      icon: Globe,
      number: "3",
      title: "Regulatory Standards",
      description: "USFDA, EU-GMP, and WHO regulatory inspection expertise"
    },
    {
      icon: TrendingUp,
      number: "40%",
      title: "Quality Incident Reduction",
      description: "Average reduction in quality incidents through our QMS improvements"
    }
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

  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & CEO",
      credentials: "Ph.D. Pharmaceutical Sciences, 25+ years USFDA experience",
      specialties: ["Quality Systems", "Regulatory Compliance", "Strategic Leadership"],
      achievements: "Led 50+ successful FDA inspections"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Head of Learning & Development",
      credentials: "Ph.D. Biotechnology, 20+ years training experience",
      specialties: ["GMP Training", "Curriculum Design", "Adult Learning"],
      achievements: "Designed training programs for 5,000+ professionals"
    },
    {
      name: "Amit Patel",
      role: "Quality Compliance Officer",
      credentials: "M.S. Quality Management, 18+ years audit experience",
      specialties: ["Data Integrity", "Computer Systems Validation", "Gap Analysis"],
      achievements: "Conducted 200+ compliance audits globally"
    },
    {
      name: "Dr. Sunita Reddy",
      role: "Senior Consultant",
      credentials: "Ph.D. Microbiology, 22+ years industry experience",
      specialties: ["Microbiology", "Sterile Manufacturing", "Environmental Monitoring"],
      achievements: "Expert in WHO and EU-GMP standards"
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
            Reliable Partner in Pharmaceutical Quality Excellence
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            We provide customized GxP solutions that foster compliance, efficiency, and long-term growth. 
            Our mission is to be your trusted partner in achieving pharmaceutical and biotech quality excellence.
          </p>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Mission & Values
            </h2>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="text-center border-card-border bg-card">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">
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
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quality Assurance veterans with combined 75+ years of leadership experience 
              from global regulatory inspections and greenfield setups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-card-border bg-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground mb-1">
                        {member.name}
                      </CardTitle>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <p className="text-sm text-muted-foreground mb-3">{member.credentials}</p>
                      <Badge variant="outline" className="text-xs">
                        <Star className="h-3 w-3 mr-1" />
                        {member.achievements}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specIndex) => (
                        <Badge key={specIndex} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
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
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Why Choose Axygen Pharmatech?
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
              <div className="text-primary-foreground">
                <div className="text-lg font-semibold mb-2">Decades of Experience</div>
                <p className="text-sm text-primary-foreground/80">75+ years combined hands-on leadership</p>
              </div>
              <div className="text-primary-foreground">
                <div className="text-lg font-semibold mb-2">Global Regulatory Knowledge</div>
                <p className="text-sm text-primary-foreground/80">Deep knowledge of international requirements</p>
              </div>
              <div className="text-primary-foreground">
                <div className="text-lg font-semibold mb-2">Scalable Solutions</div>
                <p className="text-sm text-primary-foreground/80">Cost-effective, sustainable approaches</p>
              </div>
              <div className="text-primary-foreground">
                <div className="text-lg font-semibold mb-2">Innovation</div>
                <p className="text-sm text-primary-foreground/80">AI & 3D immersive learning models</p>
              </div>
              <div className="text-primary-foreground">
                <div className="text-lg font-semibold mb-2">Commitment</div>
                <p className="text-sm text-primary-foreground/80">Excellence, integrity, and measurable impact</p>
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
    </div>
  );
};

export default About;