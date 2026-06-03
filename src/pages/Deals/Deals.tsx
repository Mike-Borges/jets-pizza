import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Deals.module.css";

export default function Deals() {
  return (
    <div className={styles.deals}>
      <Header />
      <section className={styles.dealsHero}>
        <div className={styles.dealsContainer}>
          <h1 className={styles.dealsTitle}>HOT DEALS</h1>
          <h2 className={styles.dealsSubtitle}>Find A Fresh Deal Near You!</h2>
          <p className={styles.dealsText}>
            To see all deals & deal pricing find your local store and click the
            Hot Deals page.
          </p>
        </div>
        <button className={styles.dealsButton}>Find your local Jet's</button>
      </section>
      <Footer />
    </div>
  );
}
