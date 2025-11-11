import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicePillars from "@/components/ServicePillars";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { EventSection } from "../components/EventSection";
import { EVENT } from "../event.config";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main>
        <Hero />
        <EventSection
          title={EVENT.title}
          subtitle={EVENT.subtitle}
          startISO={EVENT.startISO}
          location={EVENT.location}
          ctaLabel={EVENT.ctaLabel}
          ctaHref={EVENT.ctaHref}
        />
        <AboutSection />
        <ServicePillars />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
