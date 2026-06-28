import { useState } from 'react';
import { useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: 'Products', href: '/products' },
    { label: 'Music', href: '/music' },
    { label: 'Home', href: '#locations' },
    { label: 'Rewards', href: '/rewards' },
    { label: 'About', href: '/about' },
  ];

  const isActive = (href: string) => {
    if (href === '#locations') return false;
    return location === href;
  };

  const handleLocationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location === '/') {
      // Already on homepage, scroll to locations
      const element = document.getElementById('locations');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage and scroll to locations
      window.location.href = '/#locations';
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 md:px-8 py-6 md:py-8 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-lg md:text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <span className="font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
              Pink
            </span>
          {/* Logo */}
          <img
            src="/images/logo-pink-panther.png"
            alt="Pink Panther logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0"
          />
            <span className="text-xs md:text-sm inline-block px-2 py-1" style={{color: '#fbc9d3', backgroundColor: 'transparent'}}>Panther</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={item.href === '#locations' ? handleLocationClick : undefined}
                className={`text-sm tracking-wide transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-accent font-semibold border-b-2 border-accent'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-4">
            <a
              href="/products"
              className="px-6 py-2 bg-accent text-accent-foreground text-sm font-semibold hover:bg-pink-600 transition-colors duration-300"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border py-6 px-6 mt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    if (item.href === '#locations') {
                      handleLocationClick(e);
                    }
                  }}
                  className={`text-sm tracking-wide transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-accent font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/products"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-accent text-accent-foreground text-sm font-semibold hover:bg-pink-600 transition-colors duration-300 text-center"
              >
                Order Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
