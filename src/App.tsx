import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute";
import Index from "./pages/Index";
import Training from "./pages/Training";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auditing from "./pages/Auditing";
import Consulting from "./pages/Consulting";
import TalentManagement from "./pages/TalentManagement";
import Leadership from "./pages/Leadership";
import CSV from "./pages/CSV";
import Product3DLearning from "./pages/Product3DLearning";
import ProductAIDashboard from "./pages/ProductAIDashboard";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Accessibility from "./pages/Accessibility";
import OurWork from "./pages/OurWork";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnRoute />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/training" element={<Training />} />
          <Route path="/auditing" element={<Auditing />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/talent-management" element={<TalentManagement />} />
          
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/csv" element={<CSV />} />
          <Route path="/products/3d-learning" element={<Product3DLearning />} />
          <Route path="/products/ai-dashboard" element={<ProductAIDashboard />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/accessibility" element={<Accessibility />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
