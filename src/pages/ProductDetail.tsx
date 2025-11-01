import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageCircle, 
  Phone, 
  Shield, 
  Truck, 
  Award, 
  CheckCircle,
  ArrowLeft,
  Star
} from "lucide-react";
import { products } from "@/types/product";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollToTop } from "@/utils/scrollToTop";

const ProductDetail = () => {
  useScrollToTop();
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/">
            <Button variant="secondary">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const phoneNumber = "+254762569206";
  const whatsappMessage = `Hi! I'm interested in ${product.name}. Can you provide more details and pricing?`;
  
  const handleWhatsAppOrder = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const features = [
    { icon: Shield, title: "Quality Guaranteed", description: "Premium materials only" },
    { icon: Truck, title: "Free Delivery", description: "Nationwide coverage" },
    { icon: Award, title: "ISO Certified", description: "Quality assured" },
    { icon: CheckCircle, title: "Satisfaction Guarantee", description: "100% guaranteed" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/#products" className="text-muted-foreground hover:text-foreground">
                Products
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Products
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="animate-fade-in-left">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    {product.isOnSale && (
                      <Badge variant="destructive" className="text-sm font-semibold">
                        SALE!
                      </Badge>
                    )}
                    {product.isLimitedOffer && (
                      <Badge variant="secondary" className="text-sm font-semibold">
                        LIMITED OFFER
                      </Badge>
                    )}
                  </div>

                  {product.isFreeDelivery && (
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-success text-success-foreground text-sm font-semibold flex items-center gap-1">
                        <Truck className="h-4 w-4" />
                        Free Delivery
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="animate-fade-in-up">
                <Badge variant="outline" className="mb-4">
                  {product.category}
                </Badge>
                
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>

                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-muted-foreground">(500+ reviews)</span>
                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Pricing */}
                <div className="bg-muted/50 p-6 rounded-lg mb-8">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-sm text-muted-foreground">Starting from</span>
                  </div>
                  <div className="text-4xl font-bold text-secondary mb-2">
                    KSh {product.price.toLocaleString()}
                    <span className="text-lg font-normal text-muted-foreground"> / meter</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    * Final pricing may vary based on quantity and specifications
                  </p>
                </div>

                {/* Order Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    onClick={handleWhatsAppOrder}
                    variant="whatsapp" 
                    size="lg" 
                    className="flex-1"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Order via WhatsApp
                  </Button>
                  
                  <Button 
                    onClick={handlePhoneCall}
                    variant="secondary" 
                    size="lg" 
                    className="flex-1"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call: {phoneNumber}
                  </Button>
                </div>

                {/* Features */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Product Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg">
                        <IconComponent className="h-6 w-6 text-secondary flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-sm">{feature.title}</div>
                          <div className="text-xs text-muted-foreground">{feature.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Other Products You Might Like
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.filter(p => p.id !== product.id).slice(0, 3).map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{relatedProduct.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{relatedProduct.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-secondary">
                          KSh {relatedProduct.price.toLocaleString()}/m
                        </span>
                        <Link to={`/product/${relatedProduct.slug}`}>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
