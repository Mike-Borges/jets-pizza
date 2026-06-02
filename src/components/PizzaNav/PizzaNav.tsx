import styles from './PizzaNav.module.css';

const subCategories = ['Featured Deals', 'Crust Styles', "Jet's Exclusives",'Specialty' ];

interface PizzaNavProps {
  activeCategory: string;
  onTabClick: (category: string) => void;
}

export default function PizzaNav({ activeCategory, onTabClick }: PizzaNavProps) {
  return (
    <nav className={styles.pizzaNav}>
      {subCategories.map((cat, index) => (
        <div key={cat} className={styles.pizzaNavItem}>
          <button
            className={`${styles.pizzaNavBtn} ${activeCategory === cat ? styles.pizzaNavBtnActive : ''}`}
            onClick={() => onTabClick(cat)}
          >
            {cat.toUpperCase()}
          </button>
          {index < subCategories.length - 1 && <span className={styles.pizzaNavDivider}>|</span>}
        </div>
      ))}
    </nav>
  );
}