import MenuCard from '../../MenuCard/MenuCard';
import styles from './Pizza.module.css';

const pizzas = [
  { id: 1, name: 'Build Your Own Pizza', price: '$10.00', image: '' },
  { id: 2, name: 'Ultimate Pepperoni', price: '$10.00', image: '' },
  { id: 3, name: 'Popcorn BBQ Chicken', price: '$10.00', image: '' },
  { id: 4, name: 'All Meaty®', price: '$10.00', image: '' },
  { id: 5, name: 'Aloha BBQ Chicken', price: '$10.00', image: '' },
  { id: 6, name: 'BLT', price: '$10.00', image: '' },
  { id: 7, name: 'BBQ Chicken', price: '$10.00', image: '' },
  { id: 8, name: 'Hawaiian', price: '$10.00', image: '' },
  { id: 9, name: 'Jet 10®', price: '$10.00', image: '' },
];

export default function Pizza() {
  return (
    <div className={styles.pizza}>
      <section className={styles.pizzaSignature}>
        <h2 className={styles.pizzaSectionTitle}>Our Signature Pizzas</h2>
        <p className={styles.pizzaSectionDesc}>Delicious crusts, sauces, & premium quality ingredients.</p>
        <div className={styles.pizzaGrid}>
          {pizzas.map((pizza) => (
            <MenuCard
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              image={pizza.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}