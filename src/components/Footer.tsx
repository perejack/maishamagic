import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/maisha-logo.png";

const Footer = () => {
  const productCategories = [
    { name: "Box Profile", href: "/product/box-profile" },
    { name: "Versatile", href: "/product/versatile" },
    { name: "Romantile", href: "/product/romantile" },
    { name: "Corrugated Iron Sheet", href: "/product/corrugated-iron-sheet" },
    { name: "Alu-Zinc Mabati", href: "/product/maisha-alu-zinc-mabati" },
    { name: "Maisha Tile", href: "/product/maisha-tile" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img 
                src={logo} 
                alt="Maisha Mabati" 
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Premium roofing solutions provider in Kenya. Quality, durability, 
              and customer satisfaction are at the heart of everything we do.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Products</h3>
            <ul className="space-y-3">
              {productCategories.map((product, index) => (
                <li key={index}>
                  <Link
                    to={product.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+254762569206"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    +254762569206
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:info@maishamabati.com" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    info@maishamabati.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    Nairobi, Kenya<br />
                    Serving all 47 Counties
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Maisha Mabati. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy.html" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service.html" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
