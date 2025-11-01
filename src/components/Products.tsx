import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ShoppingCart, Eye, Truck } from "lucide-react";
import { products } from "@/types/product";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Premium Products
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our wide range of high-quality roofing materials, 
            each designed to provide exceptional durability and aesthetic appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-card border-0 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0 relative overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isOnSale && (
                    <Badge variant="destructive" className="text-xs font-semibold">
                      SALE!
                    </Badge>
                  )}
                  {product.isLimitedOffer && (
                    <Badge variant="secondary" className="text-xs font-semibold">
                      LIMITED OFFER
                    </Badge>
                  )}
                </div>

                {product.isFreeDelivery && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-success text-success-foreground text-xs font-semibold flex items-center gap-1">
                      <Truck className="h-3 w-3" />
                      Free Delivery
                    </Badge>
                  </div>
                )}
              </CardHeader>

              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs mb-3">
                    {product.category}
                  </Badge>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {product.name}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs text-muted-foreground">Starting from</span>
                    <div className="text-2xl font-bold text-secondary">
                      KSh {product.price.toLocaleString()}
                      <span className="text-sm font-normal text-muted-foreground"> / meter</span>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-3">
                <Link to={`/product/${product.slug}`} className="flex-1">
                  <Button variant="outline" className="w-full group/btn">
                    <Eye className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    View Details
                  </Button>
                </Link>
                
                <Link to={`/product/${product.slug}`} className="flex-1">
                  <Button variant="secondary" className="w-full group/btn">
                    <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Order Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;