import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Accessibility Statement
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to digital accessibility for all users
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Commitment</h2>
                <p className="text-muted-foreground">
                  Axygen Pharmatech is committed to ensuring digital accessibility for people with 
                  disabilities. We are continually improving the user experience for everyone and 
                  applying the relevant accessibility standards.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Conformance Standards</h2>
                <p className="text-muted-foreground mb-4">
                  We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. 
                  These guidelines explain how to make web content more accessible for people with 
                  disabilities and user-friendly for everyone.
                </p>
                <p className="text-muted-foreground">
                  Our website has been designed to be compatible with assistive technologies such as 
                  screen readers and keyboard navigation.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Accessibility Features</h2>
                <p className="text-muted-foreground mb-4">
                  Our website includes the following accessibility features:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Semantic HTML structure for screen reader compatibility</li>
                  <li>Keyboard navigation support for all interactive elements</li>
                  <li>Alt text for images and descriptive content</li>
                  <li>High contrast color schemes for better visibility</li>
                  <li>Readable fonts and appropriate text sizing</li>
                  <li>Focus indicators for keyboard users</li>
                  <li>Consistent navigation and layout structure</li>
                  <li>Form labels and error messaging</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Known Limitations</h2>
                <p className="text-muted-foreground mb-4">
                  Despite our efforts, some parts of our website may not be fully accessible. 
                  We are working to address these areas:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Some third-party embedded content may have limited accessibility</li>
                  <li>Complex interactive elements are being evaluated for improvement</li>
                  <li>PDF documents are being reviewed for accessibility compliance</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Assistive Technologies</h2>
                <p className="text-muted-foreground mb-4">
                  Our website is designed to be compatible with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
                  <li>Speech recognition software</li>
                  <li>Keyboard-only navigation</li>
                  <li>Switch navigation</li>
                  <li>Alternative input devices</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Feedback and Support</h2>
                <p className="text-muted-foreground mb-4">
                  We welcome your feedback on the accessibility of our website. If you encounter 
                  accessibility barriers or have suggestions for improvement, please contact us:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> <a href="mailto:hello@axygenpharmatech.com" className="text-primary hover:underline">hello@axygenpharmatech.com</a><br />
                    <strong>Phone:</strong> <a href="tel:+919603978651" className="text-primary hover:underline">+91 96039 78651</a><br />
                    <strong>Subject Line:</strong> Website Accessibility Feedback
                  </p>
                </div>
                <p className="text-muted-foreground mt-4">
                  We aim to respond to accessibility feedback within 5 business days.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Alternative Formats</h2>
                <p className="text-muted-foreground">
                  If you require information from our website in an alternative format, we can provide:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Large print documents</li>
                  <li>Audio descriptions</li>
                  <li>Plain text versions</li>
                  <li>Document summaries</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Please contact us using the information above to request alternative formats.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Ongoing Efforts</h2>
                <p className="text-muted-foreground">
                  We are committed to continuous improvement of our website's accessibility. 
                  Our ongoing efforts include regular accessibility audits, staff training on 
                  accessibility best practices, and incorporating accessibility considerations 
                  into our development process.
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

export default Accessibility;