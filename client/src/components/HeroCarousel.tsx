import { useState, useEffect } from 'react';

/**
 * Hero Carousel Component
 * Cinematic autoplay carousel with smooth flow transition
 * Design: Full-screen hero with minimal overlay navigation
 * Animations: Smooth flow transition (2s), slide-in effect
 */

interface CarouselSlide {
  id: number;
  headline: string;
  image: string;
  description?: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    headline: 'Coffee. Juice. Culture.',
    image: '/images/ad1.png',
    description: 'Freshly prepared espresso shots',
  },
  {
    id: 2,
    headline: 'Made For Connection.',
    image: '/images/ad3.png',
    description: 'Young people socializing',
  },
  {
    id: 6,
    headline: 'New generation.',
    image: '/images/ad5.jpg',
    description: 'Next-generation lifestyle campaign',
  },
  {
    id: 3,
    headline: 'Get crazy.',
    image: '/images/ad2.png',
    description: 'Fresh juice preparation',
  },
  {
    id: 4,
    headline: 'Listen To What We Listen To.',
    image: '/images/ad4.png',
    description: 'Music and playlist culture',
  },
  {
    id: 5,
    headline: 'More Than Juice.',
    image: '/images/ad.png',
    description: 'Editorial lifestyle campaign',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setNextSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 2000); // 2 seconds transition duration
    }, 6000); // 6 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];
  const nextSlideData = slides[nextSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {/* Current Slide - Flow Out */}
        <div
          className={`absolute inset-0 transition-all duration-2000 ease-out ${
            isTransitioning ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Next Slide - Flow In */}
        <div
          className={`absolute inset-0 transition-all duration-2000 ease-out ${
            isTransitioning ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <img
            src={nextSlideData.image}
            alt={nextSlideData.headline}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content Overlay - Current Slide Text */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center px-6 md:px-8 transition-all duration-2000 ease-out ${
            isTransitioning ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <div className="text-center max-w-4xl">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-white font-serif font-bold mb-6 md:mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {slide.headline}
            </h1>
            {slide.description && (
              <p className="text-lg md:text-xl text-white/80 mb-8 md:mb-12">
                {slide.description}
              </p>
            )}
          </div>
        </div>

        {/* Content Overlay - Next Slide Text */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center px-6 md:px-8 transition-all duration-2000 ease-out ${
            isTransitioning ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <div className="text-center max-w-4xl">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-white font-serif font-bold mb-6 md:mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {nextSlideData.headline}
            </h1>
            {nextSlideData.description && (
              <p className="text-lg md:text-xl text-white/80 mb-8 md:mb-12">
                {nextSlideData.description}
              </p>
            )}
          </div>
        </div>

        {/* CTA Button - Bottom Overlay */}
        <div className="absolute bottom-8 md:bottom-12 left-0 right-0 flex justify-center px-6">
          <a
            href="/products"
            className="px-8 py-3 bg-accent text-accent-foreground font-semibold text-sm md:text-base hover:bg-pink-600 transition-colors duration-300"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Slide Indicators - Minimal Dots */}
      <div className="absolute bottom-32 md:bottom-40 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-1 transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
