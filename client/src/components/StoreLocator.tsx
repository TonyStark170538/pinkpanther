import { useEffect, useState } from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import { DivIcon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface Store {
  id: number;
  name: string;
  address: string;
  hours: string;
  phone: string;
  lat: number;
  lng: number;
}

const stores: Store[] = [
  {
    id: 1,
    name: 'Copenhagen Central',
    address: '123 Stroget, Copenhagen, Denmark',
    hours: 'Mon-Sun: 7am - 8pm',
    phone: '+45 33 11 22 33',
    lat: 55.6761,
    lng: 12.5683,
  },
  {
    id: 2,
    name: 'New York SoHo',
    address: '456 Lafayette St, New York, NY 10012',
    hours: 'Mon-Sun: 6am - 9pm',
    phone: '+1 (212) 555-0123',
    lat: 40.7226,
    lng: -74.0023,
  },
  {
    id: 3,
    name: 'London Covent Garden',
    address: '789 Long Acre, London, UK WC2E 9RA',
    hours: 'Mon-Sun: 7am - 8pm',
    phone: '+44 20 7946 0958',
    lat: 51.5137,
    lng: -0.1236,
  },
];

const storeIcon = new DivIcon({
  className: '',
  html: '<div class="grid h-9 w-9 place-items-center rounded-full border-2 border-black bg-[#FBC9D3] text-black shadow-lg"><span class="h-3 w-3 rounded-full bg-black"></span></div>',
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -18],
});

function FlyToStore({ store }: { store: Store }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo([store.lat, store.lng], 13, { duration: 0.8 });
  }, [map, store]);

  return null;
}

export default function StoreLocator() {
  const [selectedStore, setSelectedStore] = useState<Store>(stores[0]);

  return (
    <section className="bg-background px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 md:mb-16">
          <h2
            className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Find Your Store
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Discover Pink Panther locations near you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            {stores.map((store) => (
              <button
                key={store.id}
                onClick={() => setSelectedStore(store)}
                className={`w-full rounded border p-6 text-left transition-all duration-300 ${
                  selectedStore.id === store.id
                    ? 'border-accent bg-accent/10 text-foreground'
                    : 'border-border bg-card text-muted-foreground hover:border-accent'
                }`}
              >
                <h3 className="mb-2 text-lg font-semibold text-foreground">{store.name}</h3>
                <p className="mb-3 text-sm">{store.address}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{store.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>{store.phone}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="relative min-h-[28rem] overflow-hidden rounded border border-border bg-card">
              <MapContainer
                center={[selectedStore.lat, selectedStore.lng]}
                zoom={13}
                scrollWheelZoom={false}
                className="absolute inset-0 z-0 h-full w-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <FlyToStore store={selectedStore} />
                {stores.map((store) => (
                  <Marker
                    key={store.id}
                    position={[store.lat, store.lng]}
                    icon={storeIcon}
                    eventHandlers={{ click: () => setSelectedStore(store) }}
                  >
                    <Popup>
                      <div className="space-y-1">
                        <p className="m-0 text-sm font-semibold text-black">{store.name}</p>
                        <p className="m-0 text-xs text-gray-700">{store.address}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
              <div className="pointer-events-none absolute left-4 top-4 z-[500] max-w-[calc(100%-2rem)] rounded border border-border bg-black/85 px-4 py-3 text-white shadow-xl backdrop-blur">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-base font-semibold leading-tight">{selectedStore.name}</p>
                    <p className="mt-1 text-sm leading-snug text-white/75">
                      {selectedStore.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
