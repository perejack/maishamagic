import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollToTop } from "@/utils/scrollToTop";

const Index = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <WhyChooseUs />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
