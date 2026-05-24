import { useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import MenuNav from '../../components/MenuNav/MenuNav';
import PizzaNav from '../../components/PizzaNav/PizzaNav';
import MenuCard from '../../components/MenuCard/MenuCard';
import Footer from '../../components/Footer/Footer';
import { crustOptions } from '../../data/pizzaData';
import { pizzas, sidekicks, salads, calzones, drinks, desserts } from '../../data/menuData';
import styles from './Menu.module.css';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Pizza');

  const pizzaRef = useRef<HTMLElement>(null);
  const sidekicksRef = useRef<HTMLElement>(null);
  const saladsRef = useRef<HTMLElement>(null);
  const calzonesRef = useRef<HTMLElement>(null);
  const drinksRef = useRef<HTMLElement>(null);
  const dessertsRef = useRef<HTMLElement>(null);

  const specialtyRef = useRef<HTMLDivElement>(null);
  const crustRef = useRef<HTMLDivElement>(null);
  const exclusivesRef = useRef<HTMLDivElement>(null);
  const veganRef = useRef<HTMLDivElement>(null);
  const vegetarianRef = useRef<HTMLDivElement>(null);
  const glutenFreeRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    Pizza: pizzaRef,
    Sidekicks: sidekicksRef,
    Salads: saladsRef,
    Calzones: calzonesRef,
    Drinks: drinksRef,
    Desserts: dessertsRef,
  };

  const pizzaSubRefs = {
    Specialty: specialtyRef,
    'Crust Styles': crustRef,
    "Jet's Exclusives": exclusivesRef,
    Vegan: veganRef,
    Vegetarian: vegetarianRef,
    'Gluten Free': glutenFreeRef,
  };

  const scrollToSection = (category: string) => {
    setActiveCategory(category);
    sectionRefs[category as keyof typeof sectionRefs]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scrollToPizzaSection = (category: string) => {
    pizzaSubRefs[category as keyof typeof pizzaSubRefs]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className={styles.menu}>
      <Header />
      <MenuNav onTabClick={scrollToSection} />
     {activeCategory === 'Pizza' && <PizzaNav onTabClick={scrollToPizzaSection} />}

      <section id="pizza" ref={pizzaRef} className={styles.menuSection}>
        <div className={styles.menuSectionHeader}>
          <h2 className={styles.menuSectionTitle}>Pizza</h2>
          <p className={styles.menuSectionDesc}>Delicious crusts, sauces & premium quality ingredients.</p>
        </div>

        <div ref={specialtyRef} className={styles.menuSubSection}>
          <h3 className={styles.menuSubTitle}>Specialty Pizzas</h3>
          <div className={styles.menuGrid}>
            {pizzas.map((pizza) => (
              <MenuCard key={pizza.id} name={pizza.name} price={pizza.price} image={pizza.image} />
            ))}
          </div>
        </div>

        <div ref={crustRef} className={styles.menuSubSection}>
          <h3 className={styles.menuSubTitle}>Crust Styles</h3>
          <div className={styles.menuSectionCrusts}>
            {crustOptions.map((crust) => (
              <div key={crust.id} className={styles.crustCard}>
                <p className={styles.crustName}>{crust.name}</p>
                <p className={styles.crustDesc}>{crust.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={exclusivesRef} className={styles.menuSubSection}>
          <h3 className={styles.menuSubTitle}>Jet's Exclusives</h3>
          <div className={styles.menuGrid}>
          </div>
        </div>

        <div ref={veganRef} className={styles.menuSubSection}>
          <h3 className={styles.menuSubTitle}>Vegan</h3>
          <div className={styles.menuGrid}>
          </div>
        </div>

        <div ref={vegetarianRef} className={styles.menuSubSection}>
          <h3 className={styles.menuSubTitle}>Vegetarian</h3>
          <div className={styles.menuGrid}>
          </div>
        </div>

        <div ref={glutenFreeRef} className={styles.menuSubSection}>
          <h3 className={styles.menuSubTitle}>Gluten Free</h3>
          <div className={styles.menuGrid}>
          </div>
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