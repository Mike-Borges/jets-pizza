import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// ─── TYPES ────────────────────────────────────────────────────────────────────
export interface CartItem {
  id: string;          // unique id for this cart entry
  name: string;
  image: string;
  price: number;
  quantity: number;
  type: string;
  selections: {
    size?: string;
    crust?: string;
    sauce?: string;
    meats?: string[];
    veggies?: string[];
    cheese?: string[];
    bake?: string;
    turbo?: string;
    dipping?: string;
    dressing?: string;
  };
}

// ─── CONTEXT SHAPE ────────────────────────────────────────────────────────────
interface CartContextType {
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

// ─── CREATE CONTEXT ───────────────────────────────────────────────────────────
const CartContext = createContext<CartContextType | null>(null);

// ─── PROVIDER ─────────────────────────────────────────────────────────────────
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('jets-cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  // ─── PERSIST TO LOCALSTORAGE ─────────────────────────────────────────────────
  useEffect(() => {
    localStorage.setItem('jets-cart', JSON.stringify(cart));
  }, [cart]);

  // ─── COMPUTED VALUES ──────────────────────────────────────────────────────────
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // ─── ACTIONS ──────────────────────────────────────────────────────────────────
  const addItem = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
    setIsOpen(true);
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => setCart([]);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <CartContext.Provider value={{
      cart,
      cartCount,
      cartTotal,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

// ─── HOOK ─────────────────────────────────────────────────────────────────────
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
}