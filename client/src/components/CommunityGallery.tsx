/**
 * Community Gallery Component
 * Large editorial image gallery showcasing customers, creators, athletes, and events
 * Design: Magazine-style layout with generous whitespace
 */

export default function CommunityGallery() {
  const galleryItems = [
    { id: 1, title: 'Customers', category: 'Community', image: '/images/gallery/customers.jpg' },
    { id: 2, title: 'Creators', category: 'Influencers', image: '/images/gallery/creators.jpg' },
    { id: 3, title: 'Athletes', category: 'Wellness', image: '/images/gallery/athletes.jpg' },
    { id: 4, title: 'Events', category: 'Culture', image: '/images/gallery/events.jpg' },
    { id: 5, title: 'Store Culture', category: 'Lifestyle', image: '/images/gallery/store.jpg' },
    { id: 6, title: 'Collaborations', category: 'Partnerships', image: '/images/gallery/collab.jpg' },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-white" style={{backgroundColor: '#000000'}}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            More Than Juice
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            A community of people who believe in connection, culture, and quality.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="group overflow-hidden cursor-pointer">
              {/* Image Placeholder */}
              <div className="relative mb-4 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              {/* Gallery Item Info */}
              <div className="space-y-2">
                <p className="text-xs tracking-widest text-gray-500 uppercase">
                  {item.category}
                </p>
                <h3 className="text-lg md:text-xl font-serif font-bold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <a
            href="/about"
            className="inline-block px-8 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-300"
          >
            View Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
