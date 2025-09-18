import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicePillars from "@/components/ServicePillars";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main>
        <Hero />
        <ServicePillars />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
