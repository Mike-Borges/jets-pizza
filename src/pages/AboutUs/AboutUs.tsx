import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./AboutUs.module.css";
import redSpray from "../../assets/redSpray.svg";
import greenSpray from "../../assets/greenSpray.svg";
import truck from "../../assets/truckImage.png";
import sterling from "../../assets/sterlingHeights.png";
import pepperoni from "../../assets/pepperoni-pizza.png";

export default function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <Header />
      <section className={styles.aboutUsHero}>
        <div className={styles.aboutUsSuperContainer}>
          <div className={styles.aboutUsContainer}>
            <h1 className={styles.aboutUsTitle}>All About Jet's</h1>
            <h2 className={styles.aboutUsHeadline}>
              Looking For A Better House, He Found A Better Looking Pizza
            </h2>
            <p className={styles.aboutUsText}>
              In 1978, Jet’s Pizza® founder Eugene Jetts was about to buy a new
              home. But on the way there, his passion for pizza took over.
              Instead, he signed a lease on a space that would become the first
              Jet’s® location. Along with his brother and partner John, they
              opened the doors to Jetts Party Shoppe & Pizzeria in Sterling
              Heights, MI. The pizza world would never be the same. They were
              about to make deep dish history by offering a truly, better pizza.
              That first location has grown to hundreds of locations in 22
              states. Jet’s offers more than famous Detroit-style pizzas, like
              hand-tossed round, thin-crust, and NY-Style pizzas, fresh salads,
              breads, and desserts. One thing that will never change is their
              commitment to quality ingredients.
            </p>
          </div>
          <div className={styles.aboutUsImageContainer}>
            <img
              src={sterling}
              alt="michigan location"
              className={styles.sterling}
            />
            <img
              src={redSpray}
              alt="red spray paint"
              className={styles.redPaint}
            />
            <img src={truck} alt="truck ad" className={styles.truck} />
            <img
              src={greenSpray}
              alt="green spray paint"
              className={styles.greenPaint}
            />
          </div>
        </div>
        <div className={styles.pepperoni}>
          <img
            src={pepperoni}
            alt="slice of pepperoni pizza"
            className={styles.pepperoniImage}
          />
        </div>
        <div className={styles.aboutUsLowerTextContainer}>
          <h1 className={styles.aboutUsLowerTitle}>
            Better, because it has to be.
          </h1>
          <p className={styles.aboutUsLowerText}>
            To this day, Jet’s® stands for the freshest vine-ripened tomatoes,
            Italian herbs and spices, dough prepared by hand each day, and
            hand-grated, premium mozzarella cheese. Of course, a few things have
            changed. That first location has grown to more than 400 in 22
            states.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
