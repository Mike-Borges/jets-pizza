import { useRef, useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import MenuNav from '../../components/MenuNav/MenuNav';
import PizzaNav from '../../components/PizzaNav/PizzaNav';
import MenuCard from '../../components/MenuCard/MenuCard';
import Footer from '../../components/Footer/Footer';
import MenuCardCustomize from '../../components/MenuCardCustomize/MenuCardCustomize';
import { pizzas, exclusives, crusts, vegan, vegetarian, glutenFree, sidekicks, salads, calzones, drinks, desserts } from '../../data/menuData';
import styles from './Menu.module.css';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Pizza');
  const [activePizzaCategory, setActivePizzaCategory] = useState('Specialty');
  const [selectedCrustModal, setSelectedCrustModal] = useState<string | null>(null);

  const pizzaRef = useRef<HTMLElement>(null);
  const sidekicksRef = useRef<HTMLElement>(null);
  const saladsRef = useRef<HTMLElement>(null);
  const calzonesRef = useRef<HTMLElement>(null);
  const drinksRef = useRef<HTMLElement>(null);
  const dessertsRef = useRef<HTMLElement>(null);
  const veganRef = useRef<HTMLElement>(null);
  const vegetarianRef = useRef<HTMLElement>(null);
  const glutenFreeRef = useRef<HTMLElement>(null);

  const specialtyRef = useRef<HTMLDivElement>(null);
  const crustRef = useRef<HTMLDivElement>(null);
  const exclusivesRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    Pizza: pizzaRef,
    Sidekicks: sidekicksRef,
    Salads: saladsRef,
    Calzones: calzonesRef,
    Drinks: drinksRef,
    Desserts: dessertsRef,
    Vegan: veganRef,
    Vegetarian: vegetarianRef,
    'Gluten Free': glutenFreeRef,
  };

  const pizzaSubRefs = {
    Specialty: specialtyRef,
    'Crust Styles': crustRef,
    "Jet's Exclusives": exclusivesRef,
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const options = { threshold: 0, rootMargin: '-10% 0px -80% 0px' };

    const refs = {
      Pizza: pizzaRef,
      Sidekicks: sidekicksRef,
      Salads: saladsRef,
      Calzones: calzonesRef,
      Drinks: drinksRef,
      Desserts: dessertsRef,
      Vegan: veganRef,
      Vegetarian: vegetarianRef,
      'Gluten Free': glutenFreeRef,
    };

    const pizzaRefs = {
      Specialty: specialtyRef,
      'Crust Styles': crustRef,
      "Jet's Exclusives": exclusivesRef,
    };

    Object.entries(refs).forEach(([category, ref]) => {
      if (ref.current) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveCategory(category);
          });
        }, options);
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    Object.entries(pizzaRefs).forEach(([category, ref]) => {
      if (ref.current) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActivePizzaCategory(category);
          });
        }, options);
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (category: string) => {
    setActiveCategory(category);
    sectionRefs[category as keyof typeof sectionRefs]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToPizzaSection = (category: string) => {
    pizzaSubRefs[category as keyof typeof pizzaSubRefs]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.menu}>
      <Header />
      <MenuNav activeCategory={activeCategory} onTabClick={scrollToSection} />
      {activeCategory === 'Pizza' && <PizzaNav activeCategory={activePizzaCategory} onTabClick={scrollToPizzaSection} />}

      <section id="pizza" ref={pizzaRef} className={styles.menuSection}>
        <div className={styles.menuSectionHeader}>
          <h2 className={styles.menuSectionTitle}>Pizza</h2>
          <p className={styles.menuSectionDesc}>Delicious crusts, sauces & premium quality ingredients.</p>
        </div>

        <div ref={specialtyRef} className={styles.menuSubSection}>
          <h3 className={styles.menuSubTitle}>Specialty Pizzas</h3>
          <div className={styles.menuGrid}>
            {pizzas.map((item) => (
              <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} desc={item.desc} type={item.type} />
            ))}
          </div>
        </div>

       <div ref={crustRef} className={styles.menuSubSection}>
  <h3 className={styles.menuSubTitle}>Crust Styles</h3>
  <div className={styles.menuSectionCrusts}>
    {crusts.map((crust) => (
      <div
        key={crust.id}
        className={styles.crustCard}
        onClick={() => setSelectedCrustModal(crust.name)}
      >
        <div className={styles.crustCardImg}>
          <img src={crust.image} alt={crust.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <p className={styles.crustName}>{crust.name}</p>
        <p className={styles.crustDesc}>{crust.description}</p>
        <button className={styles.crustBtn}>Customize & Add</button>
      </div>
    ))}
  </div>
</div>



        <div ref={exclusivesRef} className={styles.menuSubSection}>
          <h3 className={styles.menuSubTitle}>Jet's Exclusives</h3>
          <div className={styles.menuGrid}>
            {exclusives.map((item) => (
              <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} desc={item.desc} type={item.type} />
            ))}
          </div>
        </div>
      </section>

      <section id="sidekicks" ref={sidekicksRef} className={styles.menuSection}>
        <div className={styles.menuSectionHeader}>
          <h2 className={styles.menuSectionTitle}>Sidekicks</h2>
        </div>
        <div className={styles.menuGrid}>
          {sidekicks.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} desc={item.desc} type={item.type} />
          ))}
        </div>
      </section>

      <section id="salads" ref={saladsRef} className={styles.menuSection}>
        <div className={styles.menuSectionHeader}>
          <h2 className={styles.menuSectionTitle}>Salads</h2>
        </div>
        <div className={styles.menuGrid}>
          {salads.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} desc={item.desc} type={item.type} />
          ))}
        </div>
      </section>

      <section id="calzones" ref={calzonesRef} className={styles.menuSection}>
        <div className={styles.menuSectionHeader}>
          <h2 className={styles.menuSectionTitle}>Calzones</h2>
        </div>
        <div className={styles.menuGrid}>
          {calzones.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} desc={item.desc} type={item.type} />
          ))}
        </div>
      </section>

      <section id="drinks" ref={drinksRef} className={styles.menuSection}>
        <div className={styles.menuSectionHeader}>
          <h2 className={styles.menuSectionTitle}>Drinks</h2>
        </div>
        <div className={styles.menuGrid}>
          {drinks.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} type={item.type} />
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
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} desc={item.desc} type={item.type} />
          ))}
        </div>
      </section>

      <section id="vegan" ref={veganRef} className={styles.menuSection}>
        <div className={styles.menuSectionHeader}>
          <h2 className={styles.menuSectionTitle}>Vegan</h2>
          <p className={styles.menuSectionDesc}>Vegans, we've got something special just for you!</p>
        </div>
        <div className={styles.menuGrid}>
          {vegan.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} desc={item.desc} type={item.type} />
          ))}
        </div>
      </section>

      <section id="vegetarian" ref={vegetarianRef} className={styles.menuSection}>
        <div className={styles.menuSectionHeader}>
          <h2 className={styles.menuSectionTitle}>Vegetarian</h2>
          <p className={styles.menuSectionDesc}>Lover of all things veggie? You're in the right place!</p>
        </div>
        <div className={styles.menuGrid}>
          {vegetarian.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} desc={item.desc} type={item.type} />
          ))}
        </div>
      </section>

      <section id="gluten-free" ref={glutenFreeRef} className={styles.menuSection}>
        <div className={styles.menuSectionHeader}>
          <h2 className={styles.menuSectionTitle}>Gluten Free</h2>
          <p className={styles.menuSectionDesc}>Calling all gluten-free pizza fans!</p>
        </div>
        <div className={styles.menuGrid}>
          {glutenFree.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} desc={item.desc} type={item.type} />
          ))}
        </div>
      </section>
 {selectedCrustModal && (
        <MenuCardCustomize
          name={selectedCrustModal}
          image=""
          type="pizza-byo"
          preSelectedCrust={selectedCrustModal}
          onClose={() => setSelectedCrustModal(null)}
        />
      )}
      <Footer />
    </div>
  );
}