import { useState } from 'react';
import styles from './MenuNav.module.css';

const categories = ['Pizza', 'Sidekicks', 'Salads', 'Calzones', 'Drinks', 'Desserts'];

interface MenuNavProps {
  onTabClick: (category: string) => void;
}

export default function MenuNav({ onTabClick }: MenuNavProps) {
  const [active, setActive] = useState('Pizza');

  return (
    <nav className={styles.menuNav}>
      {categories.map((cat, index) => (
        <div key={cat} className={styles.menuNavItem}>
          <button
            className={`${styles.menuNavBtn} ${active === cat ? styles.menuNavBtnActive : ''}`}
            onClick={() => {
              setActive(cat);
              onTabClick(cat);
            }}
          >
            {cat.toUpperCase()}
          </button>
          {index < categories.length - 1 && <span className={styles.menuNavDivider}>|</span>}
        </div>
      ))}
    </nav>
  );
}