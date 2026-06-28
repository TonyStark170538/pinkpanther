import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { X } from 'lucide-react';

/**
 * About Page
 * Brand story and mission
 * Design: Dark editorial narrative layout with images and video modals
 */

interface VideoModal {
  title: string;
  description: string;
}

export default function About() {
  const [selectedVideo, setSelectedVideo] = useState<VideoModal | null>(null);

  const values = [
    {
      title: 'Quality',
      description: 'Premium ingredients, carefully sourced and prepared with intention.',
    },
    {
      title: 'Community',
      description: 'Creating spaces where people connect, share, and belong.',
    },
    {
      title: 'Culture',
      description: 'Music, art, and lifestyle are at the heart of everything we do.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-8" style={{backgroundColor: '#000000'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-foreground"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Story
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                More than juice. A lifestyle brand built on connection, culture, and quality.
              </p>
            </div>

            {/* Hero Image */}
            <div className="w-full h-96 border-2 border-border rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/images/about.jpg"
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-16 md:py-24 px-6 md:px-8" style={{backgroundColor: '#000000'}}>
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
          {/* Section 1 */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Founded in Copenhagen
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              In 2002, Pink Panther started as a simple idea: create a space where people could gather, connect, and enjoy premium quality products. What began as a single location in Copenhagen has grown into a global lifestyle brand with over 500 stores worldwide.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that coffee, juice, and community are not just products, but expressions of a lifestyle. Every drink we make, every playlist we curate, and every space we create reflects our commitment to quality and connection.
            </p>
          </div>

          {/* Section 2 - Values with Video Modals */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedVideo(value)}
                  className="p-6 bg-card border border-border rounded-lg hover:border-accent transition-all duration-300 text-left cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
                  <h3 className="font-semibold text-lg mb-3 text-accent">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                  <p className="text-xs text-muted-foreground mt-4">Click to watch video →</p>
                </button>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Global Presence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              With locations across Europe, North America, and beyond, Pink Panther has become a cultural icon in major cities worldwide. Each location is designed as a premium lifestyle destination, not just a place to grab a drink.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of over 5,000 passionate people work every day to deliver exceptional experiences and build meaningful connections with our community.
            </p>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-lg max-w-2xl w-full p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 p-2 hover:bg-border rounded-lg transition-colors"
            >
              <X size={24} className="text-foreground" />
            </button>

            {/* Modal Content */}
            <h3
              className="text-3xl font-serif font-bold mb-4 text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {selectedVideo.title}
            </h3>

            {/* Video Placeholder */}
            <div className="w-full h-96 bg-background border-2 border-dashed border-border rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-6xl mb-4">🎬</div>
                <p className="text-muted-foreground">Video Placeholder</p>
                <p className="text-sm text-muted-foreground mt-2">Upload video URL here</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {selectedVideo.description}
            </p>

            {/* CTA */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="w-full px-6 py-3 bg-accent text-accent-foreground font-semibold hover:bg-pink-600 transition-colors duration-300 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
