// MenuNav.tsx
import styles from './MenuNav.module.css';

const categories = ['Pizza', 'Sidekicks', 'Salads', 'Calzones', 'Drinks', 'Desserts'];

interface MenuNavProps {
  active: string;
  setActive: (cat: string) => void;
}

export default function MenuNav({ active, setActive }: MenuNavProps) {
  return (
    <nav className={styles.menuNav}>
      {categories.map((cat, index) => (
        <div key={cat} className={styles.menuNavItem}>
          <button
            className={`${styles.menuNavBtn} ${active === cat ? styles.menuNavBtnActive : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat.toUpperCase()}
          </button>
          {index < categories.length - 1 && <span className={styles.menuNavDivider}>|</span>}
        </div>
      ))}
    </nav>
  );
}