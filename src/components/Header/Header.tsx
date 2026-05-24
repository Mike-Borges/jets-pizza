import { useState } from 'react';
import { Link } from 'react-router-dom';
import LocationModal from '../LocationModal/LocationModal';
import jetLogo from '../../assets/jet-logo.svg';
import styles from './Header.module.css';

export default function Header() {
  const [showLocation, setShowLocation] = useState(false);

  return (
   <header className={styles.header}>
  <div className={styles.logoGroup}>
    <Link to="/">
      <img src={jetLogo} alt="Jet's Pizza" className={styles.logo} />
    </Link>
    <button className={styles.locationBtn} onClick={() => setShowLocation(true)}>
      📍 My Jet's: 2306 S Colorado Blvd
    </button>
  </div>
  <nav className={styles.nav}>
    <Link to="/menu" className={styles.navBtn}>Menu</Link>
    <Link to="/deals" className={styles.navBtn}>Deals</Link>
    <Link to="/signin" className={styles.navBtn}>Sign In</Link>
  </nav>
  {showLocation && <LocationModal onClose={() => setShowLocation(false)} />}
</header>
  );
}