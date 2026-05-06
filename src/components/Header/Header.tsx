import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import jetLogo from '../../assets/jet-logo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={jetLogo} alt="Jet's Pizza" className={styles.logo} />
      <nav className={styles.nav}>
        <Link to="/menu" className={styles.navBtn}>Menu</Link>
        <Link to="/deals" className={styles.navBtn}>Deals</Link>
        <Link to="/signin" className={styles.navBtn}>Sign-In</Link>
      </nav>
    </header>
  );
}