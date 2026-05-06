import Header from '../../components/Header/Header';
import heroGif from '../../assets/jet-home-ani.gif';
import heroGifBorder from '../../assets/jet-home-ani-bx.png';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <section className={styles.homeHero}>
        <div className={styles.homeTitleBx}>
          <h1 className={styles.homeTitle}>
            <span className={styles.homeTitleOrder}>ORDER</span>
            <span className={styles.homeTitleFresh}>FRESH PIZZA</span>
            <span className={styles.homeTitleNear}>NEAR YOU!</span>
          </h1>
          <label className={styles.homeLocationTitle}>Find Your Nearest Location:
            <input type="text" className={styles.homeLocationText} placeholder="Enter city, state, or ZIP" />
          </label>
          <a href="https://www.youtube.com/watch?v=apC53f4aoH4" target="_blank" rel="noopener noreferrer" className={styles.homeSongBtn}>Listen to Jet's Song on YouTube ♪</a>
        </div>
        <img src={heroGifBorder} alt="Green decorative border" className={styles.homeHeroGreen} />
        <div className={styles.homeHeroImgBx}>
          <img src={heroGif} alt="Jet's Pizza rotating pizza animation" className={styles.homeHeroImg} />
        </div>
      </section>
      <div className={styles.homeBtmBanner}>
        <p className={styles.homeBtmBannerText}>Jet's Signature Detroit-Style Pizza</p>
        <button className={styles.homeBtmBannerBtn}>Order Now</button>
      </div>
      <section className={styles.homeUltimatePep}>
        <div className={styles.homeUltimatePepTextBx}>
          <div>
            <h2 className={styles.homeUltimatePepTitle}>Ultimate Pepperoni</h2>
            <p className={styles.homeUltimatePepDesc}>Shredded, Bold & Traditional- A crispy, square, golden crust that is baked to perfection.</p>
          </div>
          <button className={styles.homeUltimatePepBtn}>Order Now</button>
        </div>
      </section>
    </div>
  );
}