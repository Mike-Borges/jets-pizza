// Drinks.tsx
import MenuCard from '../../MenuCard/MenuCard';
import styles from './Drinks.module.css';

const drinks = [
  { id: 1, name: '2-Liter Pepsi', price: '$3.00', image: '' },
  { id: 2, name: '2-Liter Diet Pepsi', price: '$3.00', image: '' },
  { id: 3, name: '2-Liter Sierra Mist', price: '$3.00', image: '' },
  { id: 4, name: '2-Liter Mountain Dew', price: '$3.00', image: '' },
  { id: 5, name: '2-Liter Root Beer', price: '$3.00', image: '' },
  { id: 6, name: '2-Liter Orange Crush', price: '$3.00', image: '' },
];

export default function Drinks() {
  return (
    <div className={styles.drinks}>
      <section className={styles.drinksSection}>
        <h2 className={styles.drinksSectionTitle}>Drinks</h2>
        <div className={styles.drinksGrid}>
          {drinks.map((item) => (
            <MenuCard
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}