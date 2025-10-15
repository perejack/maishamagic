export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  features: string[];
  isOnSale?: boolean;
  isLimitedOffer?: boolean;
  isFreeDelivery?: boolean;
  slug: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "BOX PROFILE",
    description: "Premium box profile mabati roofing sheets with superior durability and modern aesthetic appeal",
    price: 470,
    image: "/src/assets/products/box-profile.jpg",
    category: "Profile Sheets",
    features: [
      "Superior water resistance",
      "Modern box profile design",
      "Long-lasting coating",
      "Easy installation",
      "Weather resistant"
    ],
    isFreeDelivery: true,
    slug: "box-profile"
  },
  {
    id: "2",
    name: "VERSATILE",
    description: "Versatile premium roofing solution that adapts to various architectural styles",
    price: 555,
    image: "/src/assets/products/versatile.jpg",
    category: "Premium Tiles",
    features: [
      "Versatile design options",
      "Premium quality finish",
      "Multi-architectural compatibility",
      "Enhanced durability",
      "Professional appearance"
    ],
    isOnSale: true,
    isLimitedOffer: true,
    isFreeDelivery: true,
    slug: "versatile"
  },
  {
    id: "3",
    name: "ROMANTILE",
    description: "Classic Roman tile design bringing elegance and traditional charm to your roof",
    price: 550,
    image: "/src/assets/products/romantile.jpg",
    category: "Decorative Tiles",
    features: [
      "Classic Roman design",
      "Elegant appearance",
      "Traditional charm",
      "High-quality materials",
      "Timeless appeal"
    ],
    isOnSale: true,
    isLimitedOffer: true,
    isFreeDelivery: true,
    slug: "romantile"
  },
  {
    id: "4",
    name: "CORRUGATED IRON SHEET",
    description: "Standard corrugated iron sheets offering reliable protection and value for money",
    price: 390,
    image: "/src/assets/products/corrugated-iron-sheet.jpg",
    category: "Standard Sheets",
    features: [
      "Proven reliability",
      "Cost-effective solution",
      "Standard corrugated design",
      "Easy maintenance",
      "Wide availability"
    ],
    isLimitedOffer: true,
    isFreeDelivery: true,
    slug: "corrugated-iron-sheet"
  },
  {
    id: "5",
    name: "MAISHA ALU-ZINC MABATI",
    description: "Advanced aluminum-zinc coated roofing for superior corrosion resistance",
    price: 390,
    image: "/src/assets/products/alu-zinc-mabati.jpg",
    category: "Premium Sheets",
    features: [
      "Aluminum-zinc coating",
      "Superior corrosion resistance",
      "Extended lifespan",
      "Industrial grade quality",
      "Cost-effective premium option"
    ],
    isLimitedOffer: true,
    isFreeDelivery: true,
    slug: "maisha-alu-zinc-mabati"
  },
  {
    id: "6",
    name: "MAISHA TILE",
    description: "Royal tile roofing combining aesthetic appeal with practical functionality",
    price: 520,
    image: "/src/assets/products/maisha-tile.jpg",
    category: "Royal Tiles",
    features: [
      "Royal tile design",
      "Premium aesthetics",
      "Functional excellence",
      "Architectural enhancement",
      "Professional finish"
    ],
    isOnSale: true,
    isLimitedOffer: true,
    isFreeDelivery: true,
    slug: "maisha-tile"
  }
];