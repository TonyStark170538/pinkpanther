import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * Menu Page
 * Editorial product showcase with categories
 * Design: Magazine-style layout with large imagery
 */

export default function Menu() {
  const categories = [
    { name: 'Coffee', description: 'Freshly pulled espresso shots' },
    { name: 'Juice', description: 'Cold-pressed daily' },
    { name: 'Sandwiches', description: 'Artisan crafted' },
    { name: 'Shakes', description: 'Nutritious blends' },
  ];

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
            Our Menu
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            Carefully curated offerings made fresh every day with premium ingredients.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {categories.map((category) => (
              <div key={category.name} className="group">
                {/* Category Image Placeholder */}
                <div className="relative mb-6 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 aspect-square">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-2">🍵</div>
                      <p className="text-gray-400 text-sm">{category.name}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>

                {/* Category Info */}
                <h2
                  className="text-3xl md:text-4xl font-serif font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {category.name}
                </h2>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <a
                  href="#"
                  className="inline-block text-sm font-semibold text-pink-500 hover:text-pink-600 transition-colors"
                >
                  View Items →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
