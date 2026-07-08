import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
  const { cart, cartTotal, cartCount, isOpen, closeCart, removeItem, updateQuantity } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <>
      {/* BACKDROP */}
      <div className={styles.backdrop} onClick={closeCart} />

      {/* DRAWER */}
      <div className={styles.drawer}>

        {/* HEADER */}
        <div className={styles.header}>
          <h2 className={styles.title}>Your Order</h2>
          <button className={styles.closeBtn} onClick={closeCart}>✕</button>
        </div>

        {/* ITEMS */}
        <div className={styles.items}>
          {cart.length === 0 ? (
            <div className={styles.empty}>
              <p>Your cart is empty.</p>
              <button className={styles.browseBtn} onClick= {() => { closeCart(); navigate('/menu'); }}>
                Browse Menu
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className={styles.item}>
                <img src={item.image} alt={item.name} className={styles.itemImg} />
                <div className={styles.itemInfo}>
                  <p className={styles.itemName}>{item.name}</p>
                  <div className={styles.itemDetails}>
                    {item.selections.size && <span>{item.selections.size}</span>}
                    {item.selections.crust && <span>{item.selections.crust}</span>}
                    {item.selections.sauce && <span>{item.selections.sauce}</span>}
                    {item.selections.meats && item.selections.meats.length > 0 && (
                      <span>{item.selections.meats.join(', ')}</span>
                    )}
                    {item.selections.cheese && item.selections.cheese.length > 0 && (
                      <span>{item.selections.cheese.join(', ')}</span>
                    )}
                  </div>
                  <div className={styles.itemFooter}>
                    <div className={styles.qtyControl}>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <p className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</p>
                    <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>🗑</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        {cart.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.total}>
              <span>Total ({cartCount} {cartCount === 1 ? 'item' : 'items'})</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <button className={styles.checkoutBtn} onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}

      </div>
    </>
  );
}