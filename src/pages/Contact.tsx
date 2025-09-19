import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  Calendar,
  FileText,
  Users,
  Microscope,
  Brain
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: [
        "#1st floor, Legend Platinum",
        "Jubilee Enclave, Hitech City",
        "Hyderabad, India"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+91 9603978651",
        "+91 9553732228"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "hello@axygenpharmatech.com"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 10:00 AM - 6:00 PM"
      ]
    }
  ];

  const serviceTypes = [
    { value: "training", label: "Training Programs", icon: Users },
    { value: "auditing", label: "Quality Auditing", icon: Microscope },
    { value: "consulting", label: "Consulting Services", icon: FileText },
    { value: "products", label: "AI Products Demo", icon: Brain },
    { value: "talent", label: "Talent Solutions", icon: Users },
    { value: "general", label: "General Inquiry", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Ready to advance your pharmaceutical quality journey? 
            Contact us today to discuss your training, auditing, or consulting needs.
          </p>
        </div>
      </section>

      {/* Contact Forms and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Forms */}
            <div className="lg:col-span-2">
              <Card className="border-card-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    How Can We Help You?
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Choose the service you're interested in and we'll connect you with the right expert.
                  </p>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="general" className="space-y-6">
                    <TabsList className="grid grid-cols-3 lg:grid-cols-6 w-full">
                      {serviceTypes.map((service) => {
                        const Icon = service.icon;
                        return (
                          <TabsTrigger 
                            key={service.value} 
                            value={service.value}
                            className="text-xs p-2 flex flex-col items-center space-y-1"
                          >
                            <Icon className="h-4 w-4" />
                            <span className="hidden sm:inline">{service.label.split(' ')[0]}</span>
                          </TabsTrigger>
                        );
                      })}
                    </TabsList>

                    {/* General Inquiry Form */}
                    <TabsContent value="general" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" placeholder="Your full name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" placeholder="your.email@company.com" required />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="+91 98765 43210" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company/Organization</Label>
                          <Input id="company" placeholder="Your company name" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="How can we help you?" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your requirements, challenges, or questions..."
                          className="min-h-[120px]"
                          required 
                        />
                      </div>
                      <Button className="w-full" size="lg">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </TabsContent>

                    {/* Training Form */}
                    <TabsContent value="training" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="train-name">Full Name *</Label>
                          <Input id="train-name" placeholder="Your full name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="train-email">Email Address *</Label>
                          <Input id="train-email" type="email" placeholder="your.email@company.com" required />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="train-phone">Phone Number</Label>
                          <Input id="train-phone" placeholder="+91 98765 43210" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="experience">Experience Level</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your experience" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fresh">Fresh Graduate</SelectItem>
                              <SelectItem value="entry">1-3 Years</SelectItem>
                              <SelectItem value="mid">3-7 Years</SelectItem>
                              <SelectItem value="senior">7+ Years</SelectItem>
                              <SelectItem value="manager">Manager/Lead</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="program">Program of Interest</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a program" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="firstleap">FirstLeap (Entry Level)</SelectItem>
                            <SelectItem value="uplift">Uplift (Professional Development)</SelectItem>
                            <SelectItem value="leadership">Leadership (Management)</SelectItem>
                            <SelectItem value="restart">Re-Start (Career Return)</SelectItem>
                            <SelectItem value="gmp">GMP Certifications</SelectItem>
                            <SelectItem value="masterclass">Masterclasses</SelectItem>
                            <SelectItem value="enterprise">Enterprise Training</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="train-message">Additional Information</Label>
                        <Textarea 
                          id="train-message" 
                          placeholder="Tell us about your career goals, preferred schedule, or specific training needs..."
                          className="min-h-[100px]"
                        />
                      </div>
                      <Button className="w-full" size="lg">
                        <Calendar className="mr-2 h-4 w-4" />
                        Apply for Training
                      </Button>
                    </TabsContent>

                    {/* Auditing RFP Form */}
                    <TabsContent value="auditing" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="audit-name">Contact Name *</Label>
                          <Input id="audit-name" placeholder="Your full name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="audit-email">Email Address *</Label>
                          <Input id="audit-email" type="email" placeholder="your.email@company.com" required />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="audit-company">Company Name *</Label>
                          <Input id="audit-company" placeholder="Your company name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="audit-location">Site Location(s)</Label>
                          <Input id="audit-location" placeholder="Manufacturing site locations" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="audit-type">Audit Type *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select audit type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="quality-system">Quality System Audit</SelectItem>
                            <SelectItem value="data-integrity">Data Integrity Audit</SelectItem>
                            <SelectItem value="compliance">Compliance Audit</SelectItem>
                            <SelectItem value="vendor">Third-Party/Vendor Audit</SelectItem>
                            <SelectItem value="internal">Internal Audit</SelectItem>
                            <SelectItem value="readiness">Regulatory Readiness Assessment</SelectItem>
                            <SelectItem value="gap">Gap Analysis</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="standards">Regulatory Standards</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select standards" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="usfda">USFDA</SelectItem>
                              <SelectItem value="eu-gmp">EU-GMP</SelectItem>
                              <SelectItem value="who">WHO</SelectItem>
                              <SelectItem value="ich">ICH Guidelines</SelectItem>
                              <SelectItem value="multiple">Multiple Standards</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timeline">Target Timeline</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="When do you need this?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="urgent">Within 2 weeks</SelectItem>
                              <SelectItem value="month">Within 1 month</SelectItem>
                              <SelectItem value="quarter">Within 3 months</SelectItem>
                              <SelectItem value="flexible">Flexible timeline</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="audit-scope">Scope Description *</Label>
                        <Textarea 
                          id="audit-scope" 
                          placeholder="Describe the scope of audit, specific areas of focus, products, processes, or systems to be audited..."
                          className="min-h-[120px]"
                          required 
                        />
                      </div>
                      <Button className="w-full" size="lg">
                        <FileText className="mr-2 h-4 w-4" />
                        Request Audit Proposal
                      </Button>
                    </TabsContent>

                    {/* Product Demo Form */}
                    <TabsContent value="products" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="demo-name">Full Name *</Label>
                          <Input id="demo-name" placeholder="Your full name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="demo-email">Email Address *</Label>
                          <Input id="demo-email" type="email" placeholder="your.email@company.com" required />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="demo-company">Company Name</Label>
                          <Input id="demo-company" placeholder="Your company name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="demo-role">Your Role</Label>
                          <Input id="demo-role" placeholder="Your job title/role" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="product-interest">Product Interest *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Which product interests you?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ai-dashboard">AI-Integrated Quality Dashboards</SelectItem>
                            <SelectItem value="3d-learning">3D Immersive Learning Modules</SelectItem>
                            <SelectItem value="both">Both Products</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="demo-message">Use Case & Requirements</Label>
                        <Textarea 
                          id="demo-message" 
                          placeholder="Tell us about your specific use case, current challenges, and what you'd like to see in the demo..."
                          className="min-h-[100px]"
                        />
                      </div>
                      <Button className="w-full" size="lg">
                        <Brain className="mr-2 h-4 w-4" />
                        Request Product Demo
                      </Button>
                    </TabsContent>

                    {/* Other tabs follow similar patterns... */}
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="border-card-border bg-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center space-x-3 text-lg">
                        <Icon className="h-5 w-5 text-primary" />
                        <span>{info.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {info.details.map((detail, detIndex) => (
                        <p key={detIndex} className="text-muted-foreground text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
