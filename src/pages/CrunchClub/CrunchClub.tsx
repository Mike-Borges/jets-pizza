import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./CrunchClub.module.css";
import crunchClub from "../../assets/crunchClub.png";

export default function CrunchClub() {
  return (
    <div className={styles.crunchClub}>
      <Header />
      <section className={styles.crunchClubHero}>
        <div className={styles.crunchClubSuperContainer}>
          <div className={styles.crunchClubContainer}>
            <img
              src={crunchClub}
              alt="crunch club logo"
              className={styles.crunchClubImage}
            />
            <button className={styles.crunchClubFindButton}>
              FIND YOUR STORE →
            </button>
          </div>
          <div className={styles.crunchClubTextContainer}>
            <h1 className={styles.crunchClubTitle}>
              {"Choose Your Crunch Club Location"}
            </h1>
            <p className={styles.crunchClubText}>
              Become A jets insider! Join the Crunch Club and enjoy special
              location-specific deals and members-only promos sent right to your
              phone. Be the first to access incredible discounts and stay
              updated with exciting news from your local Jet's. Dont miss out on
              great savings and stay connected! Sign up for the Crunch Club
              today. Offered at participating locations only.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
