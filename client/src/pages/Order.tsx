import { useMemo, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle2, Clock, CreditCard, MapPin, ShoppingBag, User } from 'lucide-react';

interface CheckoutItem {
  productId: number;
  quantity: number;
  customIngredients: string[];
  name: string;
  price: string;
  image?: string;
}

interface CheckoutDraft {
  items: CheckoutItem[];
  total: number;
  createdAt: string;
}

const pickupLocations = [
  'Copenhagen Central',
  'New York SoHo',
  'London Covent Garden',
];

const pickupTimes = ['ASAP - 15 min', '20 min', '30 min', '45 min'];

const fallbackDraft: CheckoutDraft = {
  items: [
    {
      productId: 13,
      quantity: 1,
      customIngredients: ['Extra Honey'],
      name: 'Protein Shake',
      price: 'kr 79',
      image: '/images/products/smooz.png',
    },
    {
      productId: 19,
      quantity: 1,
      customIngredients: ['Extra Lettuce'],
      name: 'Classic Club',
      price: 'kr 129',
      image: '/images/products/Classic Club.png',
    },
  ],
  total: 208,
  createdAt: new Date().toISOString(),
};

function getCheckoutDraft(): CheckoutDraft {
  if (typeof window === 'undefined') return fallbackDraft;

  const savedDraft = sessionStorage.getItem('pink-panther-checkout');
  if (!savedDraft) return fallbackDraft;

  try {
    const draft = JSON.parse(savedDraft) as CheckoutDraft;
    if (!draft.items?.length) return fallbackDraft;
    return draft;
  } catch {
    return fallbackDraft;
  }
}

export default function Order() {
  const draft = useMemo(() => getCheckoutDraft(), []);
  const [name, setName] = useState('Guest Customer');
  const [phone, setPhone] = useState('+45 00 00 00 00');
  const [email, setEmail] = useState('guest@pinkpanther.test');
  const [location, setLocation] = useState(pickupLocations[0]);
  const [pickupTime, setPickupTime] = useState(pickupTimes[0]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceFee = 5;
  const total = draft.total + serviceFee;
  const orderNumber = useMemo(() => `PP-${Math.floor(1000 + Math.random() * 9000)}`, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="px-6 pb-10 pt-32 md:px-8 md:pb-14 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Checkout
              </p>
              <h1
                className="mb-5 text-5xl font-bold md:text-7xl lg:text-8xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Finish Your Order
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
                Confirm your pickup details and place a demo order. Payment is skipped for this project model.
              </p>
            </div>
            <div className="w-fit border border-border bg-card px-5 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Order ID</p>
              <p className="mt-1 text-2xl font-bold text-accent">{orderNumber}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[1fr_28rem]">
          <div className="space-y-6">
            {isSubmitted ? (
              <div className="border border-accent bg-accent/10 p-8">
                <CheckCircle2 className="mb-5 h-12 w-12 text-accent" />
                <h2 className="mb-3 text-3xl font-bold">Order placed</h2>
                <p className="max-w-2xl text-muted-foreground">
                  Your mock order is confirmed for {location}. Pick it up {pickupTime.toLowerCase()}.
                </p>
              </div>
            ) : null}

            <div className="border border-border bg-card p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <User className="h-5 w-5 text-accent" />
                <h2 className="text-2xl font-bold">Contact</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm text-muted-foreground">Name</span>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-muted-foreground">Phone</span>
                  <input
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                  />
                </label>
                <label className="space-y-2 md:col-span-2">
                  <span className="text-sm text-muted-foreground">Email</span>
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                  />
                </label>
              </div>
            </div>

            <div className="border border-border bg-card p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <h2 className="text-2xl font-bold">Pickup</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm text-muted-foreground">Location</span>
                  <select
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                  >
                    {pickupLocations.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-muted-foreground">Pickup time</span>
                  <select
                    value={pickupTime}
                    onChange={(event) => setPickupTime(event.target.value)}
                    className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                  >
                    {pickupTimes.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <div className="border border-border bg-card p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-accent" />
                <h2 className="text-2xl font-bold">Payment</h2>
              </div>
              <div className="flex items-start gap-4 bg-background p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold">Demo checkout enabled</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    No bank, card, or payment provider is connected. Placing the order only shows a project confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="h-fit border border-border bg-card p-6 md:p-8 lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-3">
              <ShoppingBag className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-bold">Summary</h2>
            </div>

            <div className="space-y-4">
              {draft.items.map((item, index) => (
                <div key={`${item.productId}-${index}`} className="flex gap-4 border-b border-border pb-4">
                  <div className="h-20 w-20 shrink-0 overflow-hidden bg-muted">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    ) : null}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-semibold leading-tight">{item.name}</p>
                      <p className="shrink-0 text-sm text-accent">{item.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">Qty {item.quantity}</p>
                    {item.customIngredients.length ? (
                      <p className="mt-1 text-xs text-muted-foreground">
                        {item.customIngredients.join(', ')}
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 border-b border-border pb-6 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>kr {draft.total}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Demo service fee</span>
                <span>kr {serviceFee}</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-3xl font-bold text-accent">kr {total}</span>
            </div>

            <div className="mt-6 flex items-center gap-3 bg-background p-4 text-sm text-muted-foreground">
              <Clock className="h-5 w-5 shrink-0 text-accent" />
              <span>Pickup at {location} - {pickupTime}</span>
            </div>

            <button
              onClick={() => setIsSubmitted(true)}
              disabled={isSubmitted || !name.trim() || !phone.trim() || !email.trim()}
              className="mt-6 w-full bg-accent px-6 py-4 font-semibold text-accent-foreground transition-colors duration-300 hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitted ? 'Order Confirmed' : 'Place Demo Order'}
            </button>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}
