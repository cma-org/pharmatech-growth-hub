import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  Search, 
  UserCheck, 
  Award,
  Building,
  Target,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

const TalentManagement = () => {
  const services = [
    {
      icon: Search,
      title: "Talent Acquisition",
      description: "Strategic recruitment of GxP-ready professionals across Quality Assurance, Quality Control, Manufacturing, Validation, and Regulatory Affairs."
    },
    {
      icon: UserCheck,
      title: "Skills Assessment",
      description: "Comprehensive evaluation of technical competencies and regulatory knowledge to ensure perfect role alignment."
    },
    {
      icon: Award,
      title: "Executive Search",
      description: "Specialized placement of senior leadership and subject matter experts with proven pharmaceutical industry expertise."
    },
    {
      icon: Building,
      title: "Contract Staffing",
      description: "Flexible staffing solutions for project-based needs, temporary assignments, and interim leadership roles."
    },
    {
      icon: Target,
      title: "Succession Planning",
      description: "Strategic workforce planning to build robust talent pipelines and ensure business continuity."
    },
    {
      icon: TrendingUp,
      title: "Career Development",
      description: "Talent retention strategies and career advancement programs to nurture existing pharmaceutical professionals."
    }
  ];

  const specializations = [
    "Quality Assurance (QA)",
    "Quality Control (QC)", 
    "Manufacturing Operations",
    "Computer System Validation",
    "Regulatory Affairs",
    "Clinical Operations",
    "Process Development",
    "Compliance & Audit",
    "Technical Writing",
    "Project Management"
  ];

  const advantages = [
    {
      icon: ShieldCheck,
      title: "GxP Expertise",
      description: "Deep understanding of pharmaceutical regulations and compliance requirements across global markets."
    },
    {
      icon: Users,
      title: "Extensive Network",
      description: "Access to a curated pool of pre-vetted pharmaceutical professionals with verified industry experience."
    },
    {
      icon: Target,
      title: "Precise Matching",
      description: "Advanced assessment methodologies ensure optimal candidate-role alignment for long-term success."
    },
    {
      icon: TrendingUp,
      title: "Industry Insights",
      description: "Market intelligence and salary benchmarking to make informed hiring decisions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-primary text-primary-foreground py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Talent Management Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Connecting organizations with GxP-ready talent for QA, QC, Manufacturing, Validation, and Regulatory Affairs roles.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Talent Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive talent management services tailored for the pharmaceutical industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations Section */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Specializations
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We focus exclusively on pharmaceutical and life sciences roles
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {specializations.map((spec, index) => (
                <Badge key={index} variant="secondary" className="p-3 text-center justify-center h-auto">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Talent Solutions?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Leverage our pharmaceutical industry expertise for superior talent outcomes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="text-center border-2 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <advantage.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Pharmaceutical Team?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our talent experts connect you with the right professionals for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link to="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
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

export default TalentManagement;