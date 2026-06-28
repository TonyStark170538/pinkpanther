import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import MusicModule from '@/components/MusicModule';
import FeaturedProducts from '@/components/FeaturedProducts';
import CommunityGallery from '@/components/CommunityGallery';
import StoreLocator from '@/components/StoreLocator';
import Footer from '@/components/Footer';

/**
 * Home Page
 * Premium editorial lifestyle brand experience
 * Design: Minimalist Editorial Luxury with generous whitespace
 */

export default function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Music Module */}
      <MusicModule />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Community Gallery */}
      <CommunityGallery />

      {/* Store Locator */}
      <div id="locations">
        <StoreLocator />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
