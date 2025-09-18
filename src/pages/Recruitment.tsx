import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Briefcase, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Recruitment = () => {
  const openPositions = [
    {
      title: "Senior GxP Auditor",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead pharmaceutical quality audits for international clients."
    },
    {
      title: "Regulatory Affairs Specialist",
      location: "Bangalore, India", 
      type: "Full-time",
      experience: "3+ years",
      description: "Support regulatory submissions and compliance activities."
    },
    {
      title: "Training Consultant",
      location: "Remote",
      type: "Contract",
      experience: "4+ years",
      description: "Deliver GxP training programs to pharmaceutical professionals."
    }
  ];

  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Careers & Recruitment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join our team of pharmaceutical quality experts and make a difference in global healthcare compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Expert Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <Briefcase className="h-5 w-5 text-primary" />
              <span>Growth Opportunities</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Global Projects</span>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{position.title}</CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{position.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{position.experience}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Role?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented professionals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Send Your Resume</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
    <Footer />
    </div>
  );
};

export default Recruitment;