import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Terms and conditions for using our services
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using Axygen Pharmatech services, you accept and agree to be bound 
                  by the terms and provision of this agreement. If you do not agree to abide by the 
                  above, please do not use this service.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Service Description</h2>
                <p className="text-muted-foreground mb-4">
                  Axygen Pharmatech provides professional training, consulting, and auditing services 
                  for the pharmaceutical and biotechnology industries. Our services include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>GxP training programs</li>
                  <li>Quality auditing services</li>
                  <li>Regulatory consulting</li>
                  <li>Professional recruitment services</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">User Obligations</h2>
                <p className="text-muted-foreground mb-4">
                  By using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information</li>
                  <li>Use services for lawful purposes only</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain confidentiality of proprietary information</li>
                  <li>Pay all fees and charges as agreed</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Payment terms are specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Training program fees are due before commencement</li>
                  <li>Consulting services are billed according to agreed schedules</li>
                  <li>Late payment may result in service suspension</li>
                  <li>Refund policies vary by service type</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, materials, and methodologies provided by Axygen Pharmatech remain our 
                  intellectual property. Clients receive limited rights to use materials for their 
                  internal purposes only, unless otherwise specified in writing.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  Axygen Pharmatech shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages, including but not limited to loss of profits, 
                  data, or use, incurred by you or any third party.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Termination</h2>
                <p className="text-muted-foreground">
                  Either party may terminate services with appropriate notice as specified in 
                  individual agreements. Termination does not relieve parties of obligations 
                  incurred prior to termination.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions regarding these terms, please contact:
                </p>
                <p className="text-muted-foreground mt-2">
                  Email: <a href="mailto:hello@axygenpharmatech.com" className="text-primary hover:underline">hello@axygenpharmatech.com</a><br />
                  Phone: <a href="tel:+919603978651" className="text-primary hover:underline">+91 96039 78651</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;