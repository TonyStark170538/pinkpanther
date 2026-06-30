# Pink Panther Premium Redesign

## Design Philosophy: Minimalist Editorial Luxury

This website reimagines Pink Panther as a premium fashion-forward lifestyle brand, inspired by luxury campaigns from Jacquemus, SKIMS, Rhode, and Aime Leon Dore. The design prioritizes editorial storytelling, generous whitespace, and premium typography over traditional restaurant/coffee shop aesthetics.

---

## Design System

### Color Palette
- **Background**: Pure White (#FFFFFF)
- **Accent Sections**: Warm Off-White (#FAF9F6)
- **Primary Brand Color**: Soft Premium Pink (#FBC9D3)
- **Secondary Accents**: 
  - Matcha Green (#A4C639)
  - Latte Brown (#96694C)
- **Typography**: Black (#000000)

### Typography
- **Headlines**: Playfair Display (serif) - Bold, elegant, editorial
- **Body Text**: Inter (sans-serif) - Clean, readable, modern
- **Font Hierarchy**:
  - H1: 72px-96px (mobile to desktop)
  - H2: 48px-64px
  - H3: 24px-48px
  - Body: 16px-18px with 1.8 line-height

### Spacing & Layout
- **Whitespace**: Generous margins and padding throughout
- **Container**: Max-width 1280px with responsive padding
- **Grid**: 2-column editorial grid for products and content
- **Asymmetric Layouts**: Avoid centered, uniform grids

---

## Pages & Features

### 1. Homepage
**Hero Carousel**
- Full-screen cinematic autoplay carousel
- 6 slides rotating every 6 seconds
- Smooth flow transitions (2s duration)
- Minimal overlay navigation with CTA buttons

**Music Module**
- Compact Spotify-inspired playlist showcase
- 3 featured playlists with play buttons
- Links to open on Spotify
- Editorial layout with color-coded cards

**Featured Products**
- Editorial magazine-style product showcase
- 2-column grid layout
- Large imagery with minimal text
- Category labels and descriptions
- "Learn More" links to menu

**Community Gallery**
- 6-item editorial gallery
- Showcases customers, creators, athletes, events, store culture, collaborations
- Hover effects with subtle overlays
- Links to About page

**Store Locator**
- Interactive store selection
- 3 featured locations (Copenhagen, New York, London)
- Map placeholder (ready for Google Maps integration)
- Store details: address, hours, phone
- "Get Directions" CTA

### 2. Menu Page
- Editorial product categories
- Coffee, Juice, Sandwiches, Shakes
- Large category images
- Descriptions and "View Items" links

### 3. Music Page
- Dedicated playlist showcase
- 6 playlists with track counts
- Color-coded playlist cards
- Spotify integration links
- Editorial layout

### 4. Locations Page
- Store locator with map integration
- Store selection sidebar
- Interactive store details
- Hours, address, phone information

### 5. Rewards Page
- Premium loyalty program showcase
- 3 tier levels: Bronze, Silver, Gold
- Benefits listed for each tier
- "Join" CTAs for each tier
- Icon-based visual hierarchy

### 6. About Page
- Brand story narrative
- Founded in Copenhagen section
- Core values: Quality, Community, Culture
- Global presence information
- Editorial typography and layout

### 7. Order Page
- Streamlined order interface
- Order system placeholder (coming soon)
- 3-step order process explanation
- Links to menu and locations

---

## Navigation

**Minimal Overlaid Design**
- Fixed top navigation
- Logo on left (Playfair Display serif)
- Menu items: Menu, Music, Locations, Rewards, About
- "Order Now" CTA button
- Mobile hamburger menu
- Pink underline for active page

---

## Animation & Motion

### Principles
- **Smooth & Refined**: All animations use ease-out timing
- **Duration**: 300ms-1500ms depending on context
- **GPU-Optimized**: Only transform and opacity animations
- **Premium Feel**: No bounce, flashy, or cheap effects

### Animation Classes
- `animate-fade-in-up`: Elements fade in while moving up
- `animate-fade-in`: Simple fade-in effect
- `animate-slide-in-left`: Elements slide in from left
- Button active state: `scale(0.97)` on click

### Interactive Elements
- Buttons: Smooth color transitions, active scaling
- Links: Smooth hover effects
- Hover overlays: Subtle opacity changes
- Carousel: Crossfade transitions between slides

---

## Premium Design Details

### Hover Effects
- Product cards: Subtle opacity overlay on hover
- Links: Color transitions with smooth timing
- Buttons: Background color changes and scaling
- Images: Gentle zoom effect (100% to 102%)

### Accessibility
- High contrast text (black on white)
- Clear focus states
- Keyboard navigation support
- Semantic HTML structure
- ARIA labels where appropriate

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px (sm), 1024px (lg)
- Flexible typography scaling
- Touch-friendly button sizes
- Optimized image loading

---

## Visual Assets

### Hero Carousel Images
Hero images are stored in `/client/public/images` and referenced by `HeroCarousel.tsx` with public URLs:

1. `/images/ad1.png` - Coffee, juice, and culture campaign
2. `/images/ad3.png` - Community and connection campaign
3. `/images/ad5.jpg` - New-generation lifestyle campaign
4. `/images/ad2.png` - Fresh juice campaign
5. `/images/ad4.png` - Music culture campaign
6. `/images/ad.png` - Lifestyle editorial campaign

All images are:
- High-resolution (2560x1440px)
- Optimized for web delivery
- Bright, minimalist Scandinavian aesthetic
- Editorial magazine quality
- No text overlays

---

## Technical Stack

- **Framework**: React 19 with TypeScript
- **Styling**: TailwindCSS 4 with custom theme
- **Routing**: Wouter (lightweight client-side router)
- **Icons**: Lucide React
- **Components**: shadcn/ui (pre-built components)
- **Fonts**: Google Fonts (Playfair Display, Inter)

---

## Implementation Notes

### For Product Images
The user has mentioned they will add their own product images (PNG without background). Placeholders are provided in:
- Featured Products section
- Menu page categories
- Community gallery items

Simply replace the placeholder divs with actual product images using the CDN asset URLs.

### For Google Maps Integration
The Store Locator component has a placeholder for Google Maps. The Map.tsx component is available in `/client/src/components/Map.tsx` for full Google Maps integration including:
- Geocoding
- Directions
- Places API
- Drawing tools

### For Spotify Integration
Music pages link to Spotify. Update the href values with actual playlist URLs from Spotify.

---

## Brand Guidelines Summary

**Do's**
- Use generous whitespace
- Embrace editorial typography
- Keep layouts asymmetric and interesting
- Use soft pink as primary accent
- Maintain premium, minimal aesthetic
- Smooth, refined animations only

**Don'ts**
- Avoid centered, uniform grids
- Don't use bright, saturated colors
- Avoid playful or bouncy animations
- Don't add unnecessary elements
- Avoid corporate or generic styling
- Don't use multiple font families

---

## Future Enhancements

1. **Google Maps Integration**: Full map functionality in Store Locator
2. **Spotify API Integration**: Real-time playlist data
3. **E-commerce**: Full order and payment system
4. **User Accounts**: Rewards program login
5. **Content Management**: Dynamic product and playlist updates
6. **Analytics**: Track user engagement and conversions
7. **Internationalization**: Multi-language support
8. **Dark Mode**: Optional dark theme variant

---

## Deployment

The website is ready for deployment. Use pnpm for dependency installation and production builds:

```bash
pnpm install
pnpm build
pnpm start
```

The project uses `pnpm-lock.yaml`; do not commit `package-lock.json`.

---

**Design System Version**: 1.0  
**Last Updated**: May 31, 2026  
**Designer Notes**: This premium redesign transforms Pink Panther from a traditional coffee shop into a cultural lifestyle brand. Every design decision prioritizes editorial excellence, premium positioning, and meaningful user connection.
