import { useRef } from 'react';
import Header from '../../components/Header/Header';
import MenuNav from '../../components/MenuNav/MenuNav';
import MenuCard from '../../components/MenuCard/MenuCard';
import Footer from '../../components/Footer/Footer';
import { crustOptions } from '../../data/pizzaData';
import { pizzas, sidekicks, salads, calzones, drinks, desserts } from '../../data/menuData';
import styles from './Menu.module.css';


export default function Menu() {
  const pizzaRef = useRef<HTMLElement>(null);
  const sidekicksRef = useRef<HTMLElement>(null);
  const saladsRef = useRef<HTMLElement>(null);
  const calzonesRef = useRef<HTMLElement>(null);
  const drinksRef = useRef<HTMLElement>(null);
  const dessertsRef = useRef<HTMLElement>(null);

  const sectionRefs = {
    Pizza: pizzaRef,
    Sidekicks: sidekicksRef,
    Salads: saladsRef,
    Calzones: calzonesRef,
    Drinks: drinksRef,
    Desserts: dessertsRef,
  };

  const scrollToSection = (category: string) => {
    sectionRefs[category as keyof typeof sectionRefs]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className={styles.menu}>
      <Header />
      <MenuNav onTabClick={scrollToSection} />

      <section id="pizza" ref={pizzaRef} className={styles.menuSection}>
        <div className={styles.menuSectionHeader}>
          <h2 className={styles.menuSectionTitle}>Pizza</h2>
          <p className={styles.menuSectionDesc}>Delicious crusts, sauces & premium quality ingredients.</p>
        </div>
        <div className={styles.menuSectionCrusts}>
          {crustOptions.map((crust) => (
            <div key={crust.id} className={styles.crustCard}>
              <p className={styles.crustName}>{crust.name}</p>
              <p className={styles.crustDesc}>{crust.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.menuGrid}>
          {pizzas.map((pizza) => (
            <MenuCard key={pizza.id} name={pizza.name} price={pizza.price} image={pizza.image} />
          ))}
        </div>
      </section>

      <section id="sidekicks" ref={sidekicksRef} className={styles.menuSection}>
        <div className={styles.menuSectionHeader}>
          <h2 className={styles.menuSectionTitle}>Sidekicks</h2>
        </div>
        <div className={styles.menuGrid}>
          {sidekicks.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} />
          ))}
        </div>
      </section>

      <section id="salads" ref={saladsRef} className={styles.menuSection}>
        <div className={styles.menuSectionHeader}>
          <h2 className={styles.menuSectionTitle}>Salads</h2>
        </div>
        <div className={styles.menuGrid}>
          {salads.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} />
          ))}
        </div>
      </section>

      <section id="calzones" ref={calzonesRef} className={styles.menuSection}>
        <div className={styles.menuSectionHeader}>
          <h2 className={styles.menuSectionTitle}>Calzones</h2>
        </div>
        <div className={styles.menuGrid}>
          {calzones.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} />
          ))}
        </div>
      </section>

      <section id="drinks" ref={drinksRef} className={styles.menuSection}>
        <div className={styles.menuSectionHeader}>
          <h2 className={styles.menuSectionTitle}>Drinks</h2>
        </div>
        <div className={styles.menuGrid}>
          {drinks.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} />
          ))}
        </div>
      </section>

      <section id="desserts" ref={dessertsRef} className={styles.menuSection}>
        <div className={styles.menuSectionHeader}>
          <h2 className={styles.menuSectionTitle}>Desserts</h2>
          <p className={styles.menuSectionDesc}>Delicious dessert options to finish your meal (or start, we won't judge.)</p>
        </div>
        <div className={styles.menuGrid}>
          {desserts.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}