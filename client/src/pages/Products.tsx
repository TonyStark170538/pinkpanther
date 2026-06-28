import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ShoppingCart, Plus, Minus, X, Image as ImageIcon, Search, AlertCircle } from 'lucide-react';
import { useState, useMemo } from 'react';

/**
 * Products Page
 * Comprehensive menu with search, category filters, product images, and nutritional info
 * Design: Dark editorial layout with search/filter bar, product cards with images, detailed modal
 */

interface MenuItem {
  id: number;
  name: string;
  image?: string;
  description: string;
  price: string;
  category: string;
  ingredients?: string[];
  nutrition?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  allergens?: string[];
}

interface CartItem {
  productId: number;
  quantity: number;
  customIngredients: string[];
}

interface CheckoutItem extends CartItem {
  name: string;
  price: string;
  image?: string;
}

const products: MenuItem[] = [
  // Coffee & Tea
  {
    id: 1,
    name: 'Espresso',
    image: '/images/products/Macchiato.png',
    description: 'Single or double shot of premium espresso',
    price: 'kr 45',
    category: 'Coffee & Tea',
    ingredients: ['Single Shot', 'Double Shot'],
    nutrition: { calories: 5, protein: 0.2, carbs: 0.1, fat: 0 },
    allergens: ['None'],
  },
  {
    id: 2,
    name: 'Cappuccino',
    image: '/images/products/Cappuccino.png',
    description: 'Espresso with steamed milk and foam',
    price: 'kr 65',
    category: 'Coffee & Tea',
    ingredients: ['Oat Milk', 'Almond Milk', 'Whole Milk', 'Extra Foam'],
    nutrition: { calories: 120, protein: 8, carbs: 10, fat: 5 },
    allergens: ['Milk'],
  },
  {
    id: 3,
    name: 'Latte',
    image: '/images/products/Flat White.png',
    description: 'Smooth espresso and steamed milk',
    price: 'kr 65',
    category: 'Coffee & Tea',
    ingredients: ['Oat Milk', 'Almond Milk', 'Whole Milk', 'Honey', 'Vanilla'],
    nutrition: { calories: 150, protein: 9, carbs: 15, fat: 6 },
    allergens: ['Milk'],
  },
  {
    id: 4,
    name: 'Americano',
    image: '/images/products/coffee3.png',
    description: 'Espresso with hot water',
    price: 'kr 55',
    category: 'Coffee & Tea',
    ingredients: ['Single Shot', 'Double Shot', 'Extra Hot'],
    nutrition: { calories: 10, protein: 0.5, carbs: 0.2, fat: 0 },
    allergens: ['None'],
  },
  {
    id: 5,
    name: 'Flat White',
    image: '/images/products/coffee1.png',
    description: 'Espresso with velvety microfoam',
    price: 'kr 70',
    category: 'Coffee & Tea',
    ingredients: ['Oat Milk', 'Almond Milk', 'Whole Milk'],
    nutrition: { calories: 130, protein: 8, carbs: 11, fat: 5 },
    allergens: ['Milk'],
  },
  {
    id: 6,
    name: 'Macchiato',
    image: '/images/products/coffee2.png',
    description: 'Espresso marked with milk foam',
    price: 'kr 60',
    category: 'Coffee & Tea',
    ingredients: ['Oat Milk', 'Almond Milk', 'Whole Milk'],
    nutrition: { calories: 80, protein: 5, carbs: 6, fat: 3 },
    allergens: ['Milk'],
  },

  // Fresh Juices
  {
    id: 10,
    name: 'Tropical Blend',
    image: '/images/products/juice1.png',
    description: 'Mango, pineapple, coconut, lime',
    price: 'kr 89',
    category: 'Fresh Juices',
    ingredients: ['Extra Lime', 'No Coconut', 'No Ice'],
    nutrition: { calories: 120, protein: 1, carbs: 28, fat: 1 },
    allergens: ['Coconut'],
  },
  {
    id: 11,
    name: 'Banana Boost',
    image: '/images/products/juice2.png',
    description: 'Mango, pineapple, coconut, lime',
    price: 'kr 89',
    category: 'Fresh Juices',
    ingredients: ['Extra Lime', 'No Coconut', 'No Ice'],
    nutrition: { calories: 120, protein: 1, carbs: 28, fat: 1 },
    allergens: ['Coconut'],
  },

  // Smoothies & Shakes
  {
    id: 13,
    name: 'Protein Shake',
    image: '/images/products/smooz.png',
    description: 'Banana, almond milk, protein powder, honey',
    price: 'kr 79',
    category: 'Smoothies & Shakes',
    ingredients: ['Vanilla Protein', 'Chocolate Protein', 'Extra Honey'],
    nutrition: { calories: 220, protein: 25, carbs: 18, fat: 5 },
    allergens: ['Milk', 'Almonds'],
  },
  {
    id: 14,
    name: 'Green Smoothie',
    image: '/images/products/green.png',
    description: 'Vanilla, apple, almond milk, banana',
    price: 'kr 79',
    category: 'Smoothies & Shakes',
    ingredients: ['Vanilla Protein', 'Chocolate Protein', 'Extra Honey'],
    nutrition: { calories: 220, protein: 25, carbs: 18, fat: 5 },
    allergens: ['Milk', 'Almonds'],
  },
  {
    id: 15,
    name: 'Matcha Latte',
    image: '/images/products/Protein Shake.png',
    description: 'Ceremonial matcha with steamed milk',
    price: 'kr 75',
    category: 'Smoothies & Shakes',
    ingredients: ['Oat Milk', 'Almond Milk', 'Whole Milk', 'Extra Matcha'],
    nutrition: { calories: 140, protein: 7, carbs: 12, fat: 5 },
    allergens: ['Milk'],
  },
  {
    id: 18,
    name: 'Blue Smoothie',
    image: '/images/products/coffee4.png',
    description: 'Spinach, banana, apple, almond milk, chia',
    price: 'kr 79',
    category: 'Smoothies & Shakes',
    ingredients: ['Extra Chia', 'Extra Spinach', 'No Banana'],
    nutrition: { calories: 160, protein: 5, carbs: 28, fat: 4 },
    allergens: ['Almonds'],
  },

  // Sandwiches
  {
    id: 19,
    name: 'Classic Club',
    image: '/images/products/Classic Club.png',
    description: 'Turkey, bacon, lettuce, tomato, mayo',
    price: 'kr 129',
    category: 'Sandwiches',
    ingredients: ['Extra Bacon', 'No Mayo', 'Extra Lettuce'],
    nutrition: { calories: 520, protein: 35, carbs: 42, fat: 22 },
    allergens: ['Gluten', 'Eggs'],
  },
  {
    id: 20,
    name: 'Caprese',
    image: '/images/products/Classic Club.png',
    description: 'Mozzarella, tomato, basil, balsamic',
    price: 'kr 119',
    category: 'Sandwiches',
    ingredients: ['Extra Basil', 'Extra Mozzarella', 'Light Balsamic'],
    nutrition: { calories: 380, protein: 18, carbs: 38, fat: 16 },
    allergens: ['Gluten', 'Milk'],
  },
  {
    id: 21,
    name: 'Spicy Chicken',
    image: '/images/products/Classic Club.png',
    description: 'Grilled chicken, jalapeño, sriracha mayo',
    price: 'kr 119',
    category: 'Sandwiches',
    ingredients: ['Extra Jalapeño', 'Extra Spicy', 'Mild'],
    nutrition: { calories: 450, protein: 38, carbs: 40, fat: 15 },
    allergens: ['Gluten', 'Eggs'],
  },
  {
    id: 22,
    name: 'Veggie Delight',
    image: '/images/products/Classic Club.png',
    description: 'Hummus, cucumber, sprouts, avocado',
    price: 'kr 109',
    category: 'Sandwiches',
    ingredients: ['Extra Avocado', 'Extra Sprouts', 'No Hummus'],
    nutrition: { calories: 380, protein: 12, carbs: 42, fat: 18 },
    allergens: ['Gluten', 'Sesame'],
  },

  // Breakfast
  {
    id: 26,
    name: 'Granola Bowl',
    image: '/images/products/Granola Bowl.png',
    description: 'Yogurt, granola, berries, honey, nuts',
    price: 'kr 89',
    category: 'Breakfast',
    ingredients: ['Extra Granola', 'Extra Honey', 'Extra Berries'],
    nutrition: { calories: 340, protein: 10, carbs: 52, fat: 10 },
    allergens: ['Gluten', 'Milk', 'Nuts'],
  },
  {
    id: 28,
    name: 'Pancakes',
    image: '/images/products/pancakes.png',
    description: 'Fluffy pancakes, maple syrup, berries',
    price: 'kr 99',
    category: 'Breakfast',
    ingredients: ['Extra Syrup', 'Extra Berries', 'Whipped Cream'],
    nutrition: { calories: 480, protein: 12, carbs: 68, fat: 16 },
    allergens: ['Gluten', 'Eggs', 'Milk'],
  },
  {
    id: 29,
    name: 'Smoothie Bowl',
    image: '/images/products/Smoothie Bowl.png',
    description: 'Blended fruit, granola, coconut, seeds',
    price: 'kr 99',
    category: 'Breakfast',
    ingredients: ['Extra Granola', 'Extra Coconut', 'Extra Seeds'],
    nutrition: { calories: 360, protein: 9, carbs: 54, fat: 12 },
    allergens: ['Gluten', 'Coconut', 'Nuts'],
  },
  {
    id: 30,
    name: 'Oatmeal',
    image: '/images/products/Oatmeal.png',
    description: 'Steel cut oats, honey, nuts, berries',
    price: 'kr 79',
    category: 'Breakfast',
    ingredients: ['Extra Honey', 'Extra Nuts', 'Extra Berries'],
    nutrition: { calories: 280, protein: 8, carbs: 48, fat: 6 },
    allergens: ['Gluten', 'Nuts'],
  },
];

const categories = [
  'All',
  'Coffee & Tea',
  'Fresh Juices',
  'Smoothies & Shakes',
  'Sandwiches',
  'Breakfast',
];

export default function Products() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [modalQuantity, setModalQuantity] = useState(1);
  const [modalIngredients, setModalIngredients] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleProductClick = (product: MenuItem) => {
    setSelectedProduct(product);
    setModalQuantity(1);
    setModalIngredients([]);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      setCart([
        ...cart,
        {
          productId: selectedProduct.id,
          quantity: modalQuantity,
          customIngredients: modalIngredients,
        },
      ]);
      setSelectedProduct(null);
      setModalQuantity(1);
      setModalIngredients([]);
    }
  };

  const handleToggleIngredient = (ingredient: string) => {
    setModalIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleRemoveFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const getPriceValue = (price: string) => Number(price.replace(/[^\d.]/g, ''));

  const cartTotal = cart.reduce((total, item) => {
    const product = products.find((p) => p.id === item.productId);
    return total + (product ? getPriceValue(product.price) * item.quantity : 0);
  }, 0);

  const handleCheckout = () => {
    const items: CheckoutItem[] = cart.flatMap((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return [];
      return [{
        ...item,
        name: product.name,
        price: product.price,
        image: product.image,
      }];
    });

    sessionStorage.setItem(
      'pink-panther-checkout',
      JSON.stringify({
        items,
        total: cartTotal,
        createdAt: new Date().toISOString(),
      })
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Menu
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Search and browse our complete selection of premium products.
          </p>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="sticky top-24 bg-background/95 backdrop-blur-md border-b border-border py-6 px-6 md:px-8 z-30">
        <div className="max-w-7xl mx-auto space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-card border border-border text-foreground hover:border-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 px-6 md:px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className="group p-6 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 text-left cursor-pointer flex gap-6"
                >
                  {/* Left: Product Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <ShoppingCart size={24} className="text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.category}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-lg font-bold text-accent">{product.price}</span>
                      <span className="text-xs text-muted-foreground">Click to customize</span>
                    </div>
                  </div>
                  {/* Right: Product Image */}
                  <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 border border-border bg-muted">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ImageIcon size={32} className="text-muted-foreground" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No products found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-card border border-border rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
              <h2
                className="text-2xl md:text-3xl font-serif font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {selectedProduct.name}
              </h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 hover:bg-muted rounded transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
            {/* Product Image */}
            <div className="w-full h-80 rounded-lg overflow-hidden bg-muted border border-border">
              {selectedProduct.image ? (
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon size={64} className="text-muted-foreground" />
                </div>
              )}
            </div>

              {/* Description */}
              <div>
                <p className="text-muted-foreground">{selectedProduct.description}</p>
              </div>

              {/* Nutritional Information */}
              {selectedProduct.nutrition && (
                <div className="border-t border-border pt-6">
                  <p className="text-sm font-semibold mb-4 uppercase text-muted-foreground">Nutritional Information</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-muted/30 p-4 rounded">
                      <p className="text-xs text-muted-foreground mb-1">Calories</p>
                      <p className="text-2xl font-bold">{selectedProduct.nutrition.calories}</p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded">
                      <p className="text-xs text-muted-foreground mb-1">Protein</p>
                      <p className="text-2xl font-bold">{selectedProduct.nutrition.protein}g</p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded">
                      <p className="text-xs text-muted-foreground mb-1">Carbs</p>
                      <p className="text-2xl font-bold">{selectedProduct.nutrition.carbs}g</p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded">
                      <p className="text-xs text-muted-foreground mb-1">Fat</p>
                      <p className="text-2xl font-bold">{selectedProduct.nutrition.fat}g</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Allergen Information */}
              {selectedProduct.allergens && selectedProduct.allergens.length > 0 && (
                <div className="border-t border-border pt-6 bg-destructive/10 p-4 rounded-lg flex gap-3">
                  <AlertCircle size={20} className="text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold mb-2">Allergen Information</p>
                    <p className="text-sm text-muted-foreground">
                      {selectedProduct.allergens.join(', ')}
                    </p>
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="border-t border-border pt-6">
                <p className="text-sm font-semibold mb-4 uppercase text-muted-foreground">Quantity</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setModalQuantity(Math.max(1, modalQuantity - 1))}
                    className="p-2 bg-muted rounded hover:bg-muted/80 transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="text-2xl font-bold w-12 text-center">{modalQuantity}</span>
                  <button
                    onClick={() => setModalQuantity(modalQuantity + 1)}
                    className="p-2 bg-muted rounded hover:bg-muted/80 transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              {/* Ingredients Customization */}
              {selectedProduct.ingredients && selectedProduct.ingredients.length > 0 && (
                <div className="border-t border-border pt-6">
                  <p className="text-sm font-semibold mb-4 uppercase text-muted-foreground">Customize</p>
                  <div className="space-y-2">
                    {selectedProduct.ingredients.map((ingredient) => (
                      <button
                        key={ingredient}
                        onClick={() => handleToggleIngredient(ingredient)}
                        className={`w-full text-left px-4 py-3 rounded transition-colors duration-300 flex items-center gap-3 ${
                          modalIngredients.includes(ingredient)
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-muted text-foreground hover:bg-muted/80'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={modalIngredients.includes(ingredient)}
                          readOnly
                          className="w-4 h-4"
                        />
                        <span>{ingredient}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Price and Add Button */}
              <div className="border-t border-border pt-6 flex items-center justify-between">
                <span className="text-2xl font-bold text-accent">{selectedProduct.price}</span>
                <button
                  onClick={handleAddToCart}
                  className="px-8 py-3 bg-accent text-accent-foreground font-semibold hover:bg-pink-600 transition-colors duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Summary */}
      {cart.length > 0 && (
        <section className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-6">
          <div className="max-w-7xl mx-auto">
            {/* Cart Items Preview */}
            <div className="mb-4 space-y-2">
              {cart.map((item, index) => {
                const product = products.find((p) => p.id === item.productId);
                return (
                  <div key={index} className="flex items-center justify-between bg-muted/30 p-3 rounded">
                    <div>
                      <p className="font-semibold">{product?.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(index)}
                      className="p-2 hover:bg-destructive/20 rounded transition-colors"
                    >
                      <X size={18} className="text-destructive" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Checkout */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total items</p>
                <p className="text-2xl font-bold">{cart.length}</p>
                <p className="text-sm text-accent">kr {cartTotal}</p>
              </div>
              <a
                href="/order"
                onClick={handleCheckout}
                className="px-8 py-3 bg-accent text-accent-foreground font-semibold hover:bg-pink-600 transition-colors duration-300"
              >
                Proceed to Checkout
              </a>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
