// Calzones.tsx
import MenuCard from '../../MenuCard/MenuCard';
import styles from './Calzones.module.css';

const calzones = [
  { id: 1, name: 'Jet\'s Calzone', price: '$10.00', image: '' },
  { id: 2, name: 'Pepperoni Calzone', price: '$10.00', image: '' },
  { id: 3, name: 'Supreme Calzone', price: '$10.00', image: '' },
  { id: 4, name: 'Meaty Calzone', price: '$10.00', image: '' },
];

export default function Calzones() {
  return (
    <div className={styles.calzones}>
      <section className={styles.calzonesSection}>
        <h2 className={styles.calzonesSectionTitle}>Calzones</h2>
        <div className={styles.calzonesGrid}>
          {calzones.map((item) => (
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