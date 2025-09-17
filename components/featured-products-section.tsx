import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Star } from "lucide-react"
import { SocialShare } from "./social-share"
import Image from "next/image"

const featuredProducts = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    description: "Premium sound quality with noise cancellation. Perfect for music lovers and professionals.",
    image: "/placeholder.svg?key=gkj9c",
    originalPrice: "₹4,999",
    salePrice: "₹1,999",
    discount: "60% OFF",
    rating: 4.5,
    reviews: 1250,
    affiliate: "Amazon",
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    description: "Track your health and fitness goals with this feature-packed smartwatch.",
    image: "/placeholder.svg?key=n8etf",
    originalPrice: "₹8,999",
    salePrice: "₹3,499",
    discount: "61% OFF",
    rating: 4.3,
    reviews: 890,
    affiliate: "Flipkart",
  },
  {
    id: 3,
    title: "Portable Power Bank 20000mAh",
    description: "Fast charging power bank with multiple ports. Never run out of battery again.",
    image: "/placeholder.svg?key=4flyi",
    originalPrice: "₹2,999",
    salePrice: "₹999",
    discount: "67% OFF",
    rating: 4.6,
    reviews: 2100,
    affiliate: "Meesho",
  },
  {
    id: 4,
    title: "LED Desk Lamp with USB Charging",
    description: "Adjustable brightness desk lamp with built-in USB charging port for convenience.",
    image: "/placeholder.svg?key=dxokt",
    originalPrice: "₹1,999",
    salePrice: "₹699",
    discount: "65% OFF",
    rating: 4.4,
    reviews: 650,
    affiliate: "Amazon",
  },
  {
    id: 5,
    title: "Wireless Phone Charger Pad",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    image: "/placeholder.svg?key=v28vo",
    originalPrice: "₹1,499",
    salePrice: "₹599",
    discount: "60% OFF",
    rating: 4.2,
    reviews: 420,
    affiliate: "Flipkart",
  },
  {
    id: 6,
    title: "Bluetooth Speaker Waterproof",
    description: "Portable waterproof speaker with amazing bass and 12-hour battery life.",
    image: "/placeholder.svg?key=cv7ol",
    originalPrice: "₹3,999",
    salePrice: "₹1,299",
    discount: "68% OFF",
    rating: 4.7,
    reviews: 1800,
    affiliate: "Meesho",
  },
]

export function FeaturedProductsSection() {
  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Deals Today</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't miss these incredible deals! Limited time offers from top brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
                    {product.discount}
                  </Badge>
                  <Badge variant="outline" className="absolute top-2 right-2 bg-background/90">
                    {product.affiliate}
                  </Badge>
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="font-heading font-semibold text-lg line-clamp-1">{product.title}</h3>

                  <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-medium ml-1">{product.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-primary">{product.salePrice}</span>
                        <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                      </div>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-primary hover:bg-primary/90" size="sm">
  <a
    href="/go/revenuecpm"
    target="_blank"
    rel="noopener noreferrer nofollow"

  >
    View Deal
    <ExternalLink className="ml-2 h-4 w-4" />
  </a>
</Button>

                  <div className="pt-2 border-t border-border">
                    <SocialShare
                      url={`/deals/${product.id}`}
                      title={`${product.title} - ${product.discount}`}
                      description={`Amazing deal: ${product.title} at ${product.salePrice} (was ${product.originalPrice})`}
                      variant="compact"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            View All Deals
          </Button>
        </div>
      </div>
    </section>
  )
}
