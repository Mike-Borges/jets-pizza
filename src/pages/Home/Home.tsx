import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import heroGif from '../../assets/jet-home-ani.gif';
import heroGifBorder from '../../assets/jet-home-ani-bx.png';
import homeRewardsImg from '../../assets/home-reward.png';
import homeGearUpImg from '../../assets/home-gearup.png';
import homeFranchiseImg from '../../assets/home-franchise.png';
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
      <div className={styles.homeTopBanner}>
        <p className={styles.homeTopBannerText}>Earn Points and Get Rewarded</p>
        <button className={styles.homeTopBannerBtn}>Sign Up Now</button>
      </div>
      <section className={styles.homeRewards}>
        <img src={heroGifBorder} alt="Green decorative border" className={styles.homeRewardsGreen} />
        <div className={styles.homeRewardsImgBox}>
          <img src={homeRewardsImg} alt="Variety of Jet's food" className={styles.homeRewardsImg} />
        </div>
        <div className={styles.homeRewardsTxtBox}>
          <h2 className={styles.homeRewardsTitle}>JET' REWARDS</h2>
          <h3 className={styles.homeRewardsSubtitle}>10 points just for signing up</h3>
          <p className={styles.homeRewardsDesc}>Use your points for exclusive Rewards like <br /> FREE Cinnamon Stix or <br /> FREE Delivery</p>
        </div>
      </section>
      <div className={styles.homeBtmBanner}>
        <p className={styles.homeBtmBannerText}>Gear Up with Jet's</p>
        <button className={styles.homeBtmBannerBtn}>Shop</button>
      </div>
      <section className={styles.homeGearUp}>
        <div className={styles.homeGearUpTxtBox}>
          <h2 className={styles.homeGearUpTitle}>Jet's Pizza Branded Products</h2>
          <p className={styles.homeGearUpDesc}>* $5.00 from every shirt <br /> will go to Autism Speaks! *</p>
        </div>
        <img src={heroGifBorder} alt="Green decorative border" className={styles.homeGearUpGreen} />
        <div className={styles.homeGearUpImgBox}>
          <img src={homeGearUpImg} alt="Jet's Pizza teeshirt modeling" className={styles.homeGearUpImg} />
        </div>
      </section>
      <div className={styles.homeTopBanner}>
        <p className={styles.homeTopBannerText}>Earn Points and Get Rewarded</p>
        <button className={styles.homeTopBannerBtn}>Sign Up Now</button>
      </div>
      <section className={styles.homeFranchise}>
        <img src={heroGifBorder} alt="Green decorative border" className={styles.homeRewardsGreen} />
        <div className={styles.homeFranchiseImgBox}>
          <img src={homeFranchiseImg} alt="Variety of Jet's food" className={styles.homeRewardsImg} />
        </div>
        <div className={styles.homeFranchiseTxtBox}>
          <h2 className={styles.homeFranchiseTitle}>"Don't Wait For Opportunity... <br /> Create It!"</h2>
          <p className={styles.homeFranchiseDesc}>-Eugene Jetts</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}