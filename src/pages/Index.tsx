import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicePillars from "@/components/ServicePillars";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";
import { useLoading } from "@/hooks/useLoading";

const Index = () => {
  const { isLoading, progress } = useLoading({ duration: 4000 });

  return (
    <>
      <LoadingScreen isVisible={isLoading} progress={progress} />
      <div className={`min-h-screen bg-background transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100 animate-fade-in'}`}>
        <Header />
        <main>
          <Hero />
          <ServicePillars />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
