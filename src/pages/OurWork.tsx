import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Users, 
  Award, 
  Target, 
  CheckCircle, 
  Calendar,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const OurWork = () => {
  const projects = [
    {
      title: "Global Pharma Giant - FDA Compliance Transformation",
      client: "Fortune 500 Pharmaceutical Company",
      duration: "18 Months",
      team: "25+ Specialists",
      description: "Complete overhaul of quality management systems to ensure FDA compliance across 15 manufacturing facilities.",
      results: [
        "100% FDA audit success rate",
        "Zero critical observations in 2 years",
        "40% reduction in quality incidents",
        "15,000+ employees trained"
      ],
      technologies: ["GxP Training", "Quality Auditing", "Computer System Validation"],
      category: "Compliance"
    },
    {
      title: "Biotech Startup - Quality Foundation Setup",
      client: "Series B Biotech Startup",
      duration: "6 Months", 
      team: "8 Consultants",
      description: "Established complete quality infrastructure from ground up for cell therapy manufacturing.",
      results: [
        "Successful regulatory approval",
        "Zero delays in clinical trials",
        "Complete quality system implementation",
        "Team of 50+ trained professionals"
      ],
      technologies: ["Consulting", "Leadership Development", "GxP Training"],
      category: "Setup"
    },
    {
      title: "Multi-Site Training Excellence Program",
      client: "International Pharmaceutical Network",
      duration: "12 Months",
      team: "15 Trainers",
      description: "Standardized training programs across 8 countries with AI-powered learning management.",
      results: [
        "98% training completion rate",
        "85% improvement in knowledge retention",
        "Unified global standards",
        "2,500+ employees certified"
      ],
      technologies: ["3D Learning", "AI Dashboards", "Global Training"],
      category: "Training"
    },
    {
      title: "Legacy System Digital Transformation",
      client: "European Pharmaceutical Manufacturer",
      duration: "24 Months",
      team: "30+ Experts",
      description: "Modernized 20-year-old quality systems with cutting-edge digital solutions and AI integration.",
      results: [
        "70% reduction in documentation time",
        "Real-time quality monitoring",
        "Predictive quality analytics",
        "Seamless regulatory compliance"
      ],
      technologies: ["AI Quality Dashboards", "Computer System Validation", "Digital Transformation"],
      category: "Modernization"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Target },
    { number: "50,000+", label: "Professionals Trained", icon: Users },
    { number: "25+", label: "Countries Served", icon: Building2 },
    { number: "100%", label: "Success Rate", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Our Work & Impact
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in">
              Transforming pharmaceutical excellence through innovative solutions, comprehensive training, 
              and regulatory expertise across global markets.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary-foreground">{stat.number}</div>
                  <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                See Our Impact in Action
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Watch how our solutions transform pharmaceutical operations and deliver measurable results
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-card bg-card border border-card-border">
                <div className="aspect-video">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster="/videos/video-thumbnail.jpg"
                  >
                    <source src="/videos/showcase-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-card rounded-lg border border-card-border">
                  <div className="text-2xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="p-6 bg-card rounded-lg border border-card-border">
                  <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Expert Support</div>
                </div>
                <div className="p-6 bg-card rounded-lg border border-card-border">
                  <div className="text-2xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Case Studies & Success Stories
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore how we've helped organizations achieve regulatory excellence and operational efficiency
                through our comprehensive solutions and expertise.
              </p>
            </div>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <Card key={project.title} className="p-8 shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Project Details */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="secondary" className="mb-2">
                          {project.category}
                        </Badge>
                      </div>
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl text-foreground mb-2">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-base text-muted-foreground">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <div className="grid sm:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center space-x-2 text-sm">
                          <Building2 className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{project.client}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{project.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{project.team}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-gradient-card p-6 rounded-lg border border-card-border">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center">
                        <Award className="h-5 w-5 text-accent mr-2" />
                        Key Results
                      </h4>
                      <ul className="space-y-3">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* Call to Action */}
        <section className="bg-gradient-primary py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Let us help you achieve regulatory excellence and operational efficiency with our proven methodologies and expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-scale" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default OurWork;