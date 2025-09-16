
import { AnnouncementBar } from "@/components/announcement-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { HighlightsSection } from "@/components/highlights-section"
import { FeaturedProductsSection } from "@/components/featured-products-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogPreviewSection } from "@/components/blog-preview-section"
import { CtaBanner } from "@/components/cta-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <HighlightsSection />
        <FeaturedProductsSection />
        <TestimonialsSection />
        <BlogPreviewSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
