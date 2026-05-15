// Salads.tsx
import MenuCard from '../../MenuCard/MenuCard';
import styles from './Salads.module.css';

const salads = [
  { id: 1, name: 'Garden Salad', price: '$10.00', image: '' },
  { id: 2, name: 'Greek Salad', price: '$10.00', image: '' },
  { id: 3, name: 'Caesar Salad', price: '$10.00', image: '' },
  { id: 4, name: 'Chicken Caesar Salad', price: '$10.00', image: '' },
];

export default function Salads() {
  return (
    <div className={styles.salads}>
      <section className={styles.saladsSection}>
        <h2 className={styles.saladsSectionTitle}>Salads</h2>
        <div className={styles.saladsGrid}>
          {salads.map((item) => (
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