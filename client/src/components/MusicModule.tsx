import { Music, Play } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Music Module Component
 * Premium music section integrated into homepage
 * Design: Editorial layout with premium playlist artwork
 * Inspired by luxury lifestyle brand music integrations
 */

export default function MusicModule() {
  const featuredPlaylists = [
    {
      id: 1,
      name: 'Morning Vibes',
      description: 'Start your day with energy',
      image: '/images/playlists/player5.jpg',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DZ52bnZmIUM36',
    },
    {
      id: 2,
      name: 'Focus Flow',
      description: 'Deep concentration tracks',
      image: '/images/playlists/player6.jpg',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DZ52bnZmIUM36',
    },
    {
      id: 3,
      name: 'Evening Sessions',
      description: 'Smooth sounds for unwinding',
      image: '/images/playlists/player7.jpg',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DZ52bnZmIUM36',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8" style={{backgroundColor: '#000000'}}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Listen To What We Listen To
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Music is culture. Discover the playlists that define Pink Panther.
          </p>
        </div>

        {/* Music Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {featuredPlaylists.map((playlist) => (
            <a
              key={playlist.id}
              href={playlist.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              {/* Playlist Card */}
              <div className="relative mb-6 overflow-hidden bg-card border border-border rounded-lg aspect-square hover:border-accent transition-all duration-300">
                {/* Premium Playlist Image */}
                <img
                  src={playlist.image}
                  alt={playlist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                
                {/* Play Button */}
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300 shadow-lg">
                    <Play size={32} className="text-accent-foreground fill-accent-foreground" />
                  </div>
                </button>
              </div>

              {/* Playlist Info */}
              <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                {playlist.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {playlist.description}
              </p>
              <div className="inline-block mt-4 text-sm font-semibold text-accent group-hover:text-pink-400 transition-colors duration-300">
                Open on Spotify →
              </div>
            </a>
          ))}
        </div>

        {/* CTA to Music Page */}
        <div className="mt-12 md:mt-16 text-center">
          <Link
            href="/music"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground font-semibold hover:bg-pink-600 transition-colors duration-300 rounded"
          >
            Explore All Playlists
          </Link>
        </div>
      </div>
    </section>
  );
}
