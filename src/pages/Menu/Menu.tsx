import { useRef, useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import MenuNav from '../../components/MenuNav/MenuNav';
import PizzaNav from '../../components/PizzaNav/PizzaNav';
import MenuCard from '../../components/MenuCard/MenuCard';
import Footer from '../../components/Footer/Footer';
import MenuCardCustomize from '../../components/MenuCardCustomize/MenuCardCustomize';
import { pizzas, exclusives, crusts, vegan, vegetarian, glutenFree, sidekicks, salads, calzones, drinks, desserts, deals } from '../../data/menuData';
import styles from './Menu.module.css';

const DEFAULT_DESC = 'Choose your own pizza with your choice of delicious crusts, sauces, and premium quality ingredients. You can even Flavorize Your Crust For Free!®';

export default function Menu() {
  // ─── STATE ───────────────────────────────────────────────────────────────────
  const [activeCategory, setActiveCategory] = useState('Pizza');
  const [activePizzaCategory, setActivePizzaCategory] = useState('Specialty');
  const [selectedCrustModal, setSelectedCrustModal] = useState<string | null>(null);

  // ─── SECTION REFS ─────────────────────────────────────────────────────────────
  const pizzaRef = useRef<HTMLElement>(null);
  const sidekicksRef = useRef<HTMLElement>(null);
  const saladsRef = useRef<HTMLElement>(null);
  const calzonesRef = useRef<HTMLElement>(null);
  const drinksRef = useRef<HTMLElement>(null);
  const dessertsRef = useRef<HTMLElement>(null);
  const veganRef = useRef<HTMLElement>(null);
  const vegetarianRef = useRef<HTMLElement>(null);
  const glutenFreeRef = useRef<HTMLElement>(null);

  // ─── PIZZA SUB-SECTION REFS ───────────────────────────────────────────────────
  const specialtyRef = useRef<HTMLDivElement>(null);
  const crustRef = useRef<HTMLDivElement>(null);
  const exclusivesRef = useRef<HTMLDivElement>(null);
  const featuredDealsRef = useRef<HTMLDivElement>(null);

  // ─── REF MAPS ─────────────────────────────────────────────────────────────────
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
    'Featured Deals': featuredDealsRef,
  };

  // ─── INTERSECTION OBSERVERS ───────────────────────────────────────────────────
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
      'Featured Deals': featuredDealsRef,
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

  // ─── SCROLL HANDLERS ──────────────────────────────────────────────────────────
  const scrollToSection = (category: string) => {
    setActiveCategory(category);
    sectionRefs[category as keyof typeof sectionRefs]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToPizzaSection = (category: string) => {
    pizzaSubRefs[category as keyof typeof pizzaSubRefs]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // ─── RENDER ───────────────────────────────────────────────────────────────────
  return (
    <div className={styles.menu}>

      {/* NAVIGATION */}
      <Header />
      <MenuNav activeCategory={activeCategory} onTabClick={scrollToSection} />
      {activeCategory === 'Pizza' && <PizzaNav activeCategory={activePizzaCategory} onTabClick={scrollToPizzaSection} />}

      {/* ── PIZZA ── */}
      <section id="pizza" ref={pizzaRef} className={styles.menuSection}>

        {/* ── FEATURED DEALS ── */}
        <div ref={featuredDealsRef} className={styles.menuSubSection}>
          <div className={styles.menuSubHeader}>
            <h3 className={styles.menuSubTitle}>Featured Deals</h3>
            <p className={styles.menuSubDesc}>Check out our latest deals and save big on your next order!</p>
          </div>
          <div className={styles.dealsGrid}>
            {deals.map((deal) => (
              <div key={deal.id} className={styles.dealCard}>
                <p className={styles.dealName}>{deal.name}</p>
                <p className={styles.dealDesc}>{deal.desc}</p>
                <p className={styles.dealPrice}>{deal.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Crust Styles */}
        <div ref={crustRef} className={styles.menuSubSection}>
          <div className={styles.menuSubHeader}>
            <h3 className={styles.menuSubTitle}>Crust Styles</h3>
            <p className={styles.menuSubDesc}>Choose your own pizza with your choice of delicious crusts, sauces, and premium quality ingredients. You can even Flavorize Your Crust For Free!®</p>
          </div>
          <div className={styles.menuSectionCrusts}>
            {crusts.map((crust) => (
              <MenuCard
                key={crust.id}
                name={crust.name}
                price=""
                image={crust.image}
                desc={crust.description}
                type="pizza-byo"
              />
            ))}
          </div>
        </div>

        {/* Jet's Exclusives */}
        <div ref={exclusivesRef} className={styles.menuSubSection}>
          <div className={styles.menuSubHeader}>
            <h3 className={styles.menuSubTitle}>Jet's Exclusives</h3>
            <p className={styles.menuSubDesc}>{DEFAULT_DESC}</p>
          </div>
          <div className={styles.exclusiveGrid}>
            {exclusives.map((item) => (
              <div key={item.id} className={styles.exclusiveCard}>
                <div className={styles.exclusiveCardImg}>
                  <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p className={styles.exclusiveName}>{item.name}</p>
                <button className={styles.exclusiveBtn}>Customize & Add</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Pizzas */}
      <div ref={specialtyRef} className={styles.menuSubSection}>
        <div className={styles.menuSubHeader}>
          <h3 className={styles.menuSubTitle}>Specialty Pizzas</h3>
          <p className={styles.menuSubDesc}>{DEFAULT_DESC}</p>
        </div>
        <div className={styles.menuGrid}>
          {pizzas.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} desc={item.desc} type={item.type} />
          ))}
        </div>
      </div>

      {/* ── SIDEKICKS ── */}
      <section id="sidekicks" ref={sidekicksRef} className={styles.menuSection}>
        <div className={styles.menuSubHeader}>
          <h2 className={styles.menuSectionTitle}>Sidekicks</h2>
          <p className={styles.menuSubDesc}>{DEFAULT_DESC}</p>
        </div>
        <div className={styles.menuGrid}>
          {sidekicks.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} desc={item.desc} type={item.type} />
          ))}
        </div>
      </section>

      {/* ── SALADS ── */}
      <section id="salads" ref={saladsRef} className={styles.menuSection}>
        <div className={styles.menuSubHeader}>
          <h2 className={styles.menuSectionTitle}>Salads</h2>
          <p className={styles.menuSubDesc}>{DEFAULT_DESC}</p>
        </div>
        <div className={styles.menuGrid}>
          {salads.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} desc={item.desc} type={item.type} />
          ))}
        </div>
      </section>

      {/* ── CALZONES ── */}
      <section id="calzones" ref={calzonesRef} className={styles.menuSection}>
        <div className={styles.menuSubHeader}>
          <h2 className={styles.menuSectionTitle}>Calzones</h2>
          <p className={styles.menuSubDesc}>{DEFAULT_DESC}</p>
        </div>
        <div className={styles.menuGrid}>
          {calzones.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} desc={item.desc} type={item.type} />
          ))}
        </div>
      </section>

      {/* ── DRINKS ── */}
      <section id="drinks" ref={drinksRef} className={styles.menuSection}>
        <div className={styles.menuSubHeader}>
          <h2 className={styles.menuSectionTitle}>Drinks</h2>
          <p className={styles.menuSubDesc}>{DEFAULT_DESC}</p>
        </div>
        <div className={styles.menuGrid}>
          {drinks.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} type={item.type} />
          ))}
        </div>
      </section>

      {/* ── DESSERTS ── */}
      <section id="desserts" ref={dessertsRef} className={styles.menuSection}>
        <div className={styles.menuSubHeader}>
          <h2 className={styles.menuSectionTitle}>Desserts</h2>
          <p className={styles.menuSubDesc}>{DEFAULT_DESC}</p>
        </div>
        <div className={styles.menuGrid}>
          {desserts.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} desc={item.desc} type={item.type} />
          ))}
        </div>
      </section>

      {/* ── VEGAN ── */}
      <section id="vegan" ref={veganRef} className={styles.menuSection}>
        <div className={styles.menuSubHeader}>
          <h2 className={styles.menuSectionTitle}>Vegan</h2>
          <p className={styles.menuSubDesc}>{DEFAULT_DESC}</p>
        </div>
        <div className={styles.menuGrid}>
          {vegan.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} desc={item.desc} type={item.type} />
          ))}
        </div>
      </section>

      {/* ── VEGETARIAN ── */}
      <section id="vegetarian" ref={vegetarianRef} className={styles.menuSection}>
        <div className={styles.menuSubHeader}>
          <h2 className={styles.menuSectionTitle}>Vegetarian</h2>
          <p className={styles.menuSubDesc}>{DEFAULT_DESC}</p>
        </div>
        <div className={styles.menuGrid}>
          {vegetarian.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} desc={item.desc} type={item.type} />
          ))}
        </div>
      </section>

      {/* ── GLUTEN FREE ── */}
      <section id="gluten-free" ref={glutenFreeRef} className={styles.menuSection}>
        <div className={styles.menuSubHeader}>
          <h2 className={styles.menuSectionTitle}>Gluten Free</h2>
          <p className={styles.menuSubDesc}>{DEFAULT_DESC}</p>
        </div>
        <div className={styles.menuGrid}>
          {glutenFree.map((item) => (
            <MenuCard key={item.id} name={item.name} price={item.price} image={item.image} desc={item.desc} type={item.type} />
          ))}
        </div>
      </section>

      {/* ── CRUST MODAL ── */}
      {selectedCrustModal && (
        <MenuCardCustomize
          name={selectedCrustModal}
          image=""
          type="pizza-byo"
          preSelectedCrust={selectedCrustModal}
          onClose={() => setSelectedCrustModal(null)}
        />
      )}

      {/* FOOTER */}
      <Footer />

    </div>
  );
}