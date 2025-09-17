import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Shield, 
  CheckCircle, 
  FileText, 
  Search,
  Users,
  Globe,
  TrendingUp,
  Calendar,
  Download
} from "lucide-react";
import auditImage from "@/assets/audit-quality.jpg";

const Auditing = () => {
  const auditServices = [
    {
      title: "Quality System Audits",
      description: "Comprehensive assessment of your quality management system against regulatory standards.",
      features: ["QMS evaluation", "Documentation review", "Process assessment", "CAPA recommendations"],
      standards: ["USFDA", "EU-GMP", "WHO", "ICH"]
    },
    {
      title: "Data Integrity Audits", 
      description: "Thorough evaluation of data lifecycle management and electronic record systems.",
      features: ["ALCOA+ principles", "Electronic systems", "Data governance", "Audit trail review"],
      standards: ["FDA Guidance", "EU Annex 11", "MHRA", "PIC/S"]
    },
    {
      title: "Compliance Audits",
      description: "Regulatory compliance assessment for specific pharmaceutical operations.",
      features: ["Regulatory alignment", "Gap identification", "Risk assessment", "Compliance roadmap"],
      standards: ["USFDA 21 CFR", "EU GMP", "WHO TRS", "Local regulations"]
    },
    {
      title: "Third-Party/Vendor Audits",
      description: "External supplier and vendor qualification and compliance audits.",
      features: ["Supplier qualification", "Contract manufacturer audit", "API supplier assessment", "Risk-based approach"],
      standards: ["ICH Q10", "GDP guidelines", "Vendor agreements", "Quality agreements"]
    },
    {
      title: "Internal Audits",
      description: "Self-assessment audits to prepare for regulatory inspections and maintain compliance.",
      features: ["Mock inspections", "Internal assessment", "Self-inspection", "Readiness evaluation"],
      standards: ["Internal procedures", "Regulatory requirements", "Industry best practices", "Quality standards"]
    },
    {
      title: "Regulatory Readiness Assessment",
      description: "Comprehensive preparation for upcoming regulatory inspections and submissions.",
      features: ["Inspection readiness", "Documentation review", "Staff training", "Response preparation"],
      standards: ["Inspection guidelines", "Regulatory expectations", "Historical findings", "Current trends"]
    }
  ];

  const methodology = [
    {
      step: "1",
      title: "Scope Definition",
      description: "Collaborate to define audit objectives, scope, and success criteria"
    },
    {
      step: "2", 
      title: "Pre-Audit Planning",
      description: "Review documentation, prepare audit plan, and coordinate logistics"
    },
    {
      step: "3",
      title: "On-site/Remote Audit",
      description: "Conduct systematic audit using risk-based approach with experienced auditors"
    },
    {
      step: "4",
      title: "Evidence Review",
      description: "Analyze findings, assess compliance gaps, and prioritize risks"
    },
    {
      step: "5",
      title: "Report Delivery", 
      description: "Provide detailed product-specific report aligned to current guidelines"
    },
    {
      step: "6",
      title: "CAPA Support",
      description: "Assist with corrective action planning and implementation guidance"
    },
    {
      step: "7",
      title: "Re-audit Readiness",
      description: "Follow-up support to ensure effective implementation of improvements"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={auditImage} 
            alt="Professional pharmaceutical audit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-accent/20 text-accent-foreground">
              Regulatory Inspection Veterans
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Quality Auditing & Compliance (CQO)
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Product-specific audits aligned to current guidelines with CAPA support. 
              Led by veterans with USFDA, EU-GMP, and WHO regulatory inspection experience.
            </p>
          </div>
        </div>
      </section>

      {/* Audit Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Audit Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From quality system assessments to regulatory readiness, our audit services 
              provide the insights you need to maintain compliance and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditServices.map((service, index) => (
              <Card key={index} className="border-card-border bg-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Key Features</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Standards Covered</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.standards.map((standard, standardIndex) => (
                        <Badge key={standardIndex} variant="outline" className="text-xs">
                          {standard}
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

      {/* Methodology */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Audit Methodology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic, risk-based approach that delivers actionable insights 
              and sustainable compliance improvements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.slice(0, 4).map((step, index) => (
              <Card key={index} className="text-center border-card-border bg-card relative">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6">
                    <div className="w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-primary border-t-transparent"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {methodology.slice(4).map((step, index) => (
              <Card key={index + 4} className="text-center border-card-border bg-card">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What You Get
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Every audit engagement delivers comprehensive documentation and 
                actionable recommendations aligned to current regulatory guidelines.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Detailed Audit Report</h3>
                    <p className="text-muted-foreground">Product-specific report aligned to current guidelines with findings, risk assessment, and compliance status.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">CAPA Recommendations</h3>
                    <p className="text-muted-foreground">Prioritized corrective and preventive action plan with implementation guidance and timelines.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Follow-up Support</h3>
                    <p className="text-muted-foreground">Ongoing consultation for CAPA implementation and re-audit readiness assessment.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Regulatory Alignment</h3>
                    <p className="text-muted-foreground">Recommendations aligned to USFDA, EU-GMP, WHO, and other international standards.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Sample Report Preview
              </h3>
              <div className="space-y-4">
                <div className="bg-card p-4 rounded-lg border border-card-border">
                  <h4 className="font-semibold text-foreground mb-2">Executive Summary</h4>
                  <div className="h-2 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-2 bg-muted rounded w-1/2"></div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-card-border">
                  <h4 className="font-semibold text-foreground mb-2">Findings & Observations</h4>
                  <div className="h-2 bg-muted rounded w-full mb-2"></div>
                  <div className="h-2 bg-muted rounded w-2/3"></div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-card-border">
                  <h4 className="font-semibold text-foreground mb-2">CAPA Recommendations</h4>
                  <div className="h-2 bg-muted rounded w-5/6 mb-2"></div>
                  <div className="h-2 bg-muted rounded w-3/4"></div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-6" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Sample Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready for Your Next Audit?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Partner with regulatory inspection veterans to ensure your pharmaceutical 
            operations meet the highest compliance standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/contact">
                Request Audit Proposal
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Auditing;