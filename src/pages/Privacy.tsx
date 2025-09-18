import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How we collect, use, and protect your personal information
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  request our services, or contact us for support.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Personal identification information (name, email, phone number)</li>
                  <li>Professional information (company, job title, industry)</li>
                  <li>Communication preferences and feedback</li>
                  <li>Usage data and analytics</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to provide, maintain, and improve our services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Deliver training programs and consulting services</li>
                  <li>Send updates about our services and industry insights</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website and service offerings</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties, 
                  except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With trusted service providers who assist in our operations</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the internet is 100% secure.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at:
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

export default Privacy;