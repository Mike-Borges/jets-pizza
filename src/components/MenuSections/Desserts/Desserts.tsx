import MenuCard from '../../MenuCard/MenuCard';
import styles from './Desserts.module.css';

const desserts = [
  { id: 1, name: 'Cinnamon Stix', price: '$10.00', image: '' },
  { id: 2, name: 'Chocolate Chip Cookie', price: '$10.00', image: '' },
  { id: 3, name: 'Chocolate Chip Brownie', price: '$10.00', image: '' },
];

export default function Desserts() {
  return (
    <div className={styles.desserts}>
      <section className={styles.dessertsSection}>
        <div className={styles.dessertsBanner}>
          <h2 className={styles.dessertsBannerText}>Delicious dessert options to finish your meal (or start, we won't judge.)</h2>
        </div>
        <div className={styles.dessertsGrid}>
          {desserts.map((dessert) => (
            <MenuCard
              key={dessert.id}
              name={dessert.name}
              price={dessert.price}
              image={dessert.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}