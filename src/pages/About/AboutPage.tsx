import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import jetLogo from '../../assets/jet-logo.svg';
import jetsTenImage from '../../assets/jet-10.png';
import detroitStyleImage from '../../assets/detroit-style.png';
import pepperoniSliceImage from '../../assets/pepperoni-slice.png';
import styles from './AboutPage.module.css';

const storyParagraphs = [
  'In 1978, Eugene Jetts opened Jet\'s with a simple idea: make pizza worth talking about. What started as a better-house conversation became a recipe built on square slices, quality ingredients, and a crust people could spot from across the room.',
  'As the brand grew with family, friends, and loyal regulars, the focus stayed the same. Fresh dough, premium mozzarella, bold sauce, and a little Detroit attitude still shape the way every store shows up for its neighborhood.',
];

const valuesParagraph =
  'Better, because it has to be. That same standard still guides the menu today, from signature Detroit-style pies to the details that make Jet\'s feel like Jet\'s.';

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <Header />

      <main className={styles.main}>
        <section className={styles.aboutIntroSection}>
          <div className={styles.aboutIntroPanel}>
            <div className={styles.aboutTopRow}>
              <img src={jetLogo} alt="Jet's Pizza" className={styles.aboutLogo} />
              <div className={styles.aboutActions}>
                <Link to="/menu" className={styles.aboutAction}>
                  Menu
                </Link>
                <a href="/deals" className={styles.aboutAction}>
                  Deals
                </a>
              </div>
            </div>

            <div className={styles.aboutContent}>
              <div className={styles.copyColumn}>
                <p className={styles.eyebrow}>About Us</p>
                <h1 className={styles.title}>All About Jet&apos;s</h1>
                <h2 className={styles.subtitle}>
                  Looking for a better house, he found a better pizza.
                </h2>

                <div className={styles.storyCopy}>
                  {storyParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className={styles.cardColumn}>
                <article className={`${styles.storyCard} ${styles.storyCardPrimary}`}>
                  <img src={jetsTenImage} alt="Jet's Pizza box promotion" className={styles.storyCardImage} />
                  <p className={styles.storyCardText}>Stealing hearts in metro Detroit since 1978.</p>
                </article>

                <article className={`${styles.storyCard} ${styles.storyCardSecondary}`}>
                  <img src={detroitStyleImage} alt="Detroit-style pizza" className={styles.storyCardImage} />
                  <p className={styles.storyCardText}>Still serving the square slices that put Jet&apos;s on the map.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.pizzaBand} aria-label="Jet's pizza slices">
          {[1, 2, 3, 4].map((slice) => (
            <div key={slice} className={styles.sliceFrame}>
              <img src={pepperoniSliceImage} alt="" className={styles.sliceImage} />
            </div>
          ))}
        </section>

        <section className={styles.storySection}>
          <div className={styles.storySectionInner}>
            <p className={styles.storyLead}>Better, because it has to be.</p>
            <p className={styles.storyBody}>{valuesParagraph}</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
 
