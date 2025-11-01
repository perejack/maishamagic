import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, MapPin, Award } from "lucide-react";
import aboutImage from "@/assets/about-construction.jpg";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: Calendar, label: "Years Experience", value: "15+" },
    { icon: MapPin, label: "Counties Served", value: "47" },
    { icon: Award, label: "Quality Certifications", value: "5" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Building Kenya's Future,
              <span className="text-secondary block">One Roof at a Time</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over 15 years, Maisha Mabati has been providing premium quality mabati and roofing 
              solutions to homes and businesses across Kenya.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to excellence, innovation, and customer satisfaction has earned us 
              the trust of thousands of customers who value quality roofing solutions.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="bg-gradient-card border-0 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4 flex items-center space-x-3">
                      <div className="bg-secondary/10 p-2 rounded-lg">
                        <IconComponent className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-secondary">
              <p className="text-foreground font-medium italic">
                "Quality is not an act, it is a habit. At Maisha Mabati, we don't just sell roofing materials - 
                we deliver peace of mind, one roof at a time."
              </p>
              <cite className="text-muted-foreground text-sm mt-2 block">- Maisha Mabati Team</cite>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in-up">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Construction team installing mabati roofing"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Card */}
              <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl border-0 animate-scale-in">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary p-3 rounded-full">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">ISO Certified</div>
                      <div className="text-muted-foreground">Quality Assured</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;