import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StoreLocator from '@/components/StoreLocator';

/**
 * Locations Page
 * Dedicated store locator page
 * Design: Editorial layout with map and store information
 */

export default function Locations() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Find Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            Visit one of our premium locations around the world.
          </p>
        </div>
      </section>

      {/* Store Locator */}
      <StoreLocator />

      <Footer />
    </div>
  );
}
