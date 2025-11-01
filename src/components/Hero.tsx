import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";
import heroImage from "@/assets/hero-house.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Premium
              <span className="text-accent block">Mabati Roofing</span>
              Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Transform your home with our high-quality, durable roofing materials. 
              Trusted by thousands across Kenya for over a decade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="accent" 
                size="xl"
                onClick={scrollToProducts}
                className="group"
              >
                Shop Products
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => window.open('tel:+254762569206', '_self')}
                className="group"
              >
                📞 Call to Order
              </Button>
            </div>

            {/* Phone Number Display */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 max-w-sm mb-8">
              <div className="text-white/80 text-sm font-medium mb-1">Call us directly</div>
              <div className="text-white text-xl font-bold tracking-wide">+254 762 569 206</div>
              <div className="text-white/70 text-sm mt-1">Available 24/7 for orders</div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              <div className="flex items-center space-x-3 text-white/90">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Quality Guaranteed</div>
                  <div className="text-sm opacity-75">Premium materials only</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-white/90">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Free Delivery</div>
                  <div className="text-sm opacity-75">Nationwide coverage</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-white/90">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Expert Service</div>
                  <div className="text-sm opacity-75">Professional support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
