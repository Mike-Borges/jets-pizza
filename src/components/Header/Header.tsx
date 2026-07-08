import { useState } from "react";
import { Link } from "react-router-dom";
import LocationModal from "../LocationModal/LocationModal";
import AuthModal from "../AuthModal/AuthModal";
import { useCart } from "../../context/CartContext";
import jetLogo from "../../assets/jet-logo.svg";
import styles from "./Header.module.css";

export default function Header() {
  const [showLocation, setShowLocation] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const { cartCount, openCart } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.logoGroup}>
        <Link to="/">
          <img src={jetLogo} alt="Jet's Pizza" className={styles.logo} />
        </Link>
        <button
          className={styles.locationBtn}
          onClick={() => setShowLocation(true)}
        >
          📍 My Jet's: 2306 S Colorado Blvd
        </button>
      </div>
      <nav className={styles.nav}>
        <Link to="/menu" className={styles.navBtn}>Menu</Link>
        <Link to="/deals" className={styles.navBtn}>Deals</Link>
        <button className={styles.navBtn} onClick={() => setShowAuth(true)}>Sign In</button>
        <button className={styles.cartBtn} onClick={openCart}>
          🛒
          {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
        </button>
      </nav>
      {showLocation && <LocationModal onClose={() => setShowLocation(false)} />}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </header>
  );
}