/**
 * Footer Component
 * Minimal, editorial footer with brand information
 * Design: Clean typography with generous spacing, dark theme
 */

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 md:py-16 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-lg font-serif font-bold mb-4 text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Pink Panther
            </h3>
            <p className="text-sm text-muted-foreground">
              Coffee, juice, culture, and community. A premium lifestyle brand.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Navigate</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/products" className="hover:text-accent transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/music" className="hover:text-accent transition-colors">
                  Music
                </a>
              </li>
              <li>
                <a href="#locations" onClick={(e) => { e.preventDefault(); const element = document.getElementById('locations'); if (element) element.scrollIntoView({ behavior: 'smooth' }); else window.location.href = '/#locations'; }} className="hover:text-accent transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="/rewards" className="hover:text-accent transition-colors">
                  Rewards
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/about" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Follow</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Spotify
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2026 Pink Panther.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
