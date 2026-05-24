import styles from './MenuNav.module.css';

const categories = ['Pizza', 'Sidekicks', 'Salads', 'Calzones', 'Drinks', 'Desserts', 'Vegan', 'Vegetarian', 'Gluten Free'];

interface MenuNavProps {
  activeCategory: string;
  onTabClick: (category: string) => void;
}

export default function MenuNav({ activeCategory, onTabClick }: MenuNavProps) {
  return (
    <nav className={styles.menuNav}>
      {categories.map((cat, index) => (
        <div key={cat} className={styles.menuNavItem}>
          <button
            className={`${styles.menuNavBtn} ${activeCategory === cat ? styles.menuNavBtnActive : ''}`}
            onClick={() => onTabClick(cat)}
          >
            {cat.toUpperCase()}
          </button>
          {index < categories.length - 1 && <span className={styles.menuNavDivider}>|</span>}
        </div>
      ))}
    </nav>
  );
}