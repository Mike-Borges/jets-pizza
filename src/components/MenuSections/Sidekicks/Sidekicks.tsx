
import MenuCard from '../../MenuCard/MenuCard';
import styles from './Sidekicks.module.css';

const sidekicks = [
  { id: 1, name: 'Cinnamon Stix', price: '$10.00', image: '' },
  { id: 2, name: 'Turbo Stix', price: '$10.00', image: '' },
  { id: 3, name: 'Bread Stix', price: '$10.00', image: '' },
  { id: 4, name: 'Jumbo Wings', price: '$10.00', image: '' },
  { id: 5, name: 'Boneless Wings', price: '$10.00', image: '' },
  { id: 6, name: 'Salad', price: '$10.00', image: '' },
  { id: 7, name: 'Jet Sauce', price: '$2.00', image: '' },
];

export default function Sidekicks() {
  return (
    <div className={styles.sidekicks}>
      <section className={styles.sidekicksSection}>
        <h2 className={styles.sidekicksSectionTitle}>Sidekicks</h2>
        <div className={styles.sidekicksGrid}>
          {sidekicks.map((item) => (
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