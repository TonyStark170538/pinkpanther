import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Music as MusicIcon, Play } from 'lucide-react';

/**
 * Music Page
 * Dedicated music and playlist experience
 * Design: Dark editorial layout with premium playlist imagery
 */

export default function Music() {
  const playlists = [
    {
      id: 1,
      name: 'Morning Vibes',
      description: 'Start your day with energy',
      tracks: 45,
      image: '/images/playlists/player0.jpg',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DZ52bnZmIUM36',
    },
    {
      id: 2,
      name: 'Focus Flow',
      description: 'Deep concentration tracks',
      tracks: 38,
      image: '/images/playlists/player1.jpg',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DZ52bnZmIUM36',
    },
    {
      id: 3,
      name: 'Evening Sessions',
      description: 'Smooth sounds for unwinding',
      tracks: 52,
      image: '/images/playlists/player2.jpg',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DZ52bnZmIUM36',
    },
    {
      id: 4,
      name: 'Weekend Energy',
      description: 'Good vibes, perfect weekend',
      tracks: 60,
      image: '/images/playlists/player3.jpg',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DZ52bnZmIUM36',
    },
    {
      id: 5,
      name: 'Late Night Beats',
      description: 'Beats for the after hours',
      tracks: 35,
      image: '/images/playlists/player4.jpg',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DZ52bnZmIUM36',
    },
  ];

  const artists = [
    {
      id: 1,
      name: 'Luna Chen',
      role: 'Photographer & Curator',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663691970076/RyzQ4W4LMFdAgiWFCHvhgA/artist-luna-chen-fbcR39PEY6LYjVXDDvSdpq.webp',
    },
    {
      id: 2,
      name: 'Marcus Groove',
      role: 'Music Director',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663691970076/RyzQ4W4LMFdAgiWFCHvhgA/artist-marcus-groove-hVe2fsWpVZW3ye8dFMvNwA.webp',
    },
    {
      id: 3,
      name: 'Sophia Vibes',
      role: 'Sound Designer',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663691970076/RyzQ4W4LMFdAgiWFCHvhgA/artist-sophia-vibes-76RnwJpY4Z3iBNsLEQNaEV.webp',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-8" style={{backgroundColor: '#000000'}}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <MusicIcon size={64} className="text-accent mb-6" />
          </div>
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Playlists
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Music is culture. Discover the playlists that define Pink Panther. Each curated to enhance your experience, from morning energy to late-night vibes.
          </p>
        </div>
      </section>

      {/* Playlists Grid */}
      <section className="py-16 md:py-24 px-6 md:px-8" style={{backgroundColor: '#000000'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {playlists.map((playlist) => (
              <a
                key={playlist.id}
                href={playlist.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                {/* Playlist Cover */}
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
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">{playlist.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{playlist.description}</p>
                <p className="text-xs text-muted-foreground mb-4">{playlist.tracks} tracks</p>
                <div className="inline-flex items-center text-sm font-semibold text-accent group-hover:text-pink-400 transition-colors duration-300">
                  Open on Spotify
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 border-t border-border" style={{backgroundColor: '#000000'}}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-serif font-bold mb-16 text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Featured Curators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {artists.map((artist) => (
              <div key={artist.id} className="text-center group">
                <div className="mb-6 overflow-hidden rounded-lg aspect-square">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{artist.name}</h3>
                <p className="text-sm text-muted-foreground">{artist.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotify Integration Info */}
      <section className="py-16 md:py-24 px-6 md:px-8 border-t border-border" style={{backgroundColor: '#000000'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Stream Anywhere
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            All our playlists are available on Spotify. Follow us for new additions and exclusive collaborations.
          </p>
          <a
            href="https://open.spotify.com/search/pink%20panther%20playlist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground font-semibold hover:bg-pink-600 transition-colors duration-300 rounded"
          >
            Follow on Spotify
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
