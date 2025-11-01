import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Truck, 
  HeadphonesIcon, 
  Award, 
  Clock, 
  CheckCircle,
  Star,
  Wrench
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "All our mabati products undergo rigorous quality testing to ensure durability and longevity.",
      color: "text-blue-600"
    },
    {
      icon: Truck,
      title: "Free Nationwide Delivery",
      description: "Enjoy free delivery to all 47 counties across Kenya. We bring quality roofing to your doorstep.",
      color: "text-green-600"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Customer Support",
      description: "Our expert team is always ready to assist you with product selection and technical guidance.",
      color: "text-purple-600"
    },
    {
      icon: Award,
      title: "ISO Certified",
      description: "Certified quality management systems ensuring consistent excellence in all our products.",
      color: "text-yellow-600"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick order processing and prompt delivery ensure you get your materials when you need them.",
      color: "text-red-600"
    },
    {
      icon: CheckCircle,
      title: "Satisfaction Guarantee",
      description: "100% satisfaction guarantee on all purchases. Your happiness is our priority.",
      color: "text-green-600"
    },
    {
      icon: Star,
      title: "Trusted by Thousands",
      description: "Over 10,000 satisfied customers trust us for their roofing needs across Kenya.",
      color: "text-orange-600"
    },
    {
      icon: Wrench,
      title: "Expert Installation",
      description: "Access to certified installers and comprehensive installation support services.",
      color: "text-indigo-600"
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose 
            <span className="text-secondary"> Maisha Mabati?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference with our premium roofing solutions. 
            Quality, reliability, and customer satisfaction are at the heart of everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-card border-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-3 rounded-full bg-secondary/10 w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 text-secondary`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="font-display text-2xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their homes with our premium roofing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+254762569206"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Call Us Now: +254762569206
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              Browse Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
