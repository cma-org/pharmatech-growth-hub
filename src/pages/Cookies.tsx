import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How we use cookies and similar technologies
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">What Are Cookies?</h2>
                <p className="text-muted-foreground">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  analyzing how you use our site.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-foreground">Essential Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies are necessary for the website to function properly. They enable core 
                      functionality such as security, network management, and accessibility.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2 text-foreground">Performance Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies help us understand how visitors interact with our website by 
                      collecting and reporting information anonymously. This helps us improve our 
                      website's performance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2 text-foreground">Functional Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies remember your preferences and settings to provide a more 
                      personalized experience. They may be set by us or by third-party providers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2 text-foreground">Marketing Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies track your browsing habits to enable us to show advertising 
                      which is more likely to be of interest to you. They may be used to build 
                      a profile of your interests.
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  We may use third-party services that set cookies on our website:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Google Analytics - for website analytics and performance monitoring</li>
                  <li>Social media plugins - for social sharing functionality</li>
                  <li>Marketing platforms - for targeted advertising and lead generation</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Managing Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  You can control and manage cookies in various ways:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Browser settings - Most browsers allow you to control cookies through settings</li>
                  <li>Cookie consent banner - Use our preference center to manage cookie categories</li>
                  <li>Opt-out tools - Use industry opt-out tools for marketing cookies</li>
                  <li>Privacy settings - Adjust privacy settings on social media platforms</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Please note that blocking certain cookies may affect the functionality of our website.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Cookie Retention</h2>
                <p className="text-muted-foreground">
                  Cookies are retained for different periods depending on their purpose:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Session cookies - Deleted when you close your browser</li>
                  <li>Persistent cookies - Remain until expiry or deletion (typically 1-24 months)</li>
                  <li>Marketing cookies - Usually expire after 30-365 days</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Updates to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Cookie Policy from time to time. We will notify you of any 
                  significant changes by posting a notice on our website or sending you an email.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about our use of cookies, please contact us:
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

export default Cookies;