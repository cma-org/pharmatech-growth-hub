import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicePillars from "@/components/ServicePillars";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServicePillars />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
