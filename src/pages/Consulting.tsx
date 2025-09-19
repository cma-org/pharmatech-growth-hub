import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Target, Globe, Award, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Consulting = () => {
  const consultingServices = [
    {
      icon: Target,
      title: "Regulatory Strategy",
      description: "Comprehensive regulatory roadmaps for global market access and compliance optimization."
    },
    {
      icon: Users,
      title: "Process Optimization",
      description: "Streamline operations and enhance efficiency while maintaining GxP compliance standards."
    },
    {
      icon: Globe,
      title: "Global Compliance",
      description: "Navigate international regulatory requirements across FDA, EMA, and WHO guidelines."
    },
    {
      icon: Award,
      title: "Quality Systems",
      description: "Design and implement robust quality management systems for sustainable compliance."
    },
    {
      icon: TrendingUp,
      title: "Performance Improvement",
      description: "Data-driven solutions to enhance operational excellence and regulatory performance."
    },
    {
      icon: CheckCircle,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for pharmaceutical operations."
    }
  ];

  const benefits = [
    "75+ years of combined industry experience",
    "Proven track record with global pharmaceutical companies",
    "Customized solutions for your specific needs",
    "End-to-end project management and support",
    "Cost-effective compliance strategies",
    "Ongoing support and maintenance"
  ];

  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Pharmaceutical Consulting Services
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-white/90">
              Strategic guidance and expert consulting to navigate complex regulatory landscapes 
              and achieve sustainable compliance excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Consulting Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive consulting solutions tailored to your pharmaceutical business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover-scale h-full">
                  <CardHeader className="text-center">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Our Consulting Services?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Partner with industry veterans who understand the complexities of pharmaceutical 
                regulations and have a proven track record of delivering results.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pl-12">
              <Card className="bg-gradient-primary text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="mb-6 text-white/90">
                    Let's discuss how we can help optimize your pharmaceutical operations 
                    and ensure regulatory compliance.
                  </p>
                  <Button variant="secondary" size="lg" className="w-full" asChild>
                    <Link to="/contact">Request Proposal</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Consulting Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach to delivering measurable results and sustainable improvements.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Assessment", desc: "Comprehensive analysis of current state and requirements" },
              { step: "2", title: "Strategy", desc: "Development of tailored solutions and implementation roadmap" },
              { step: "3", title: "Implementation", desc: "Execution of solutions with ongoing support and guidance" },
              { step: "4", title: "Optimization", desc: "Continuous monitoring and improvement for sustained success" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </div>
  );
};

export default Consulting;