import { useState } from 'react';
import styles from './PizzaNav.module.css';

const subCategories = ['Specialty', 'Crust Styles', "Jet's Exclusives", 'Vegan', 'Vegetarian', 'Gluten Free'];

interface PizzaNavProps {
  onTabClick: (category: string) => void;
}

export default function PizzaNav({ onTabClick }: PizzaNavProps) {
  const [active, setActive] = useState('Specialty');

  return (
    <nav className={styles.pizzaNav}>
      {subCategories.map((cat, index) => (
        <div key={cat} className={styles.pizzaNavItem}>
          <button
            className={`${styles.pizzaNavBtn} ${active === cat ? styles.pizzaNavBtnActive : ''}`}
            onClick={() => {
              setActive(cat);
              onTabClick(cat);
            }}
          >
            {cat.toUpperCase()}
          </button>
          {index < subCategories.length - 1 && <span className={styles.pizzaNavDivider}>|</span>}
        </div>
      ))}
    </nav>
  );
}