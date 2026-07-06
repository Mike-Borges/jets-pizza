import styles from "./Footer.module.css";
import facebookIcon from "../../assets/Facebook.svg";
import instagramIcon from "../../assets/Insta.svg";
import tiktokIcon from "../../assets/TikTok.svg";
import linkedinIcon from "../../assets/LinkedIn.svg";
import youtubeIcon from "../../assets/YouTube.svg";
import googlePlayIcon from "../../assets/google-play.png";
import appStoreIcon from "../../assets/apple-store.png";
import { Link } from "react-router-dom";

// replace a tags with Link
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNav}>
        <a href="/menu" className={styles.footerNavLink}>
          Menu
        </a>
        <a href="/nutrition" className={styles.footerNavLink}>
          Nutrition
        </a>
        <a href="/locations" className={styles.footerNavLink}>
          Locations
        </a>
        <a href="/catering" className={styles.footerNavLink}>
          Catering
        </a>
        <a href="/deals" className={styles.footerNavLink}>
          Deals
        </a>
        <a href="/health-safety" className={styles.footerNavLink}>
          Health & Safety
        </a>
      </nav>
      <div className={styles.footerMiddle}>
        <div className={styles.footerCol}>
          <a href="/order" className={styles.footerLink}>
            Start Your Order
          </a>
          <Link to="/aboutUs" className={styles.footerLink}>
            About Us
          </Link>
          <a href="/employment" className={styles.footerLink}>
            Employment
          </a>
          <a href="/accessibility" className={styles.footerLink}>
            Accessibility
          </a>
          <a href="/crunchClub" className={styles.footerLink}>
            Corner Crunch Blog
          </a>
        </div>
        <div className={styles.footerCol}>
          <a href="/detroit-style" className={styles.footerLink}>
            Jet's Detroit-Style 101
          </a>
          <a href="/coming-soon" className={styles.footerLink}>
            Coming Soon
          </a>
          <a href="/printable-menu" className={styles.footerLink}>
            Printable Menu
          </a>
          <a href="/press" className={styles.footerLink}>
            Press Menu
          </a>
          <a href="/jets-care" className={styles.footerLink}>
            Jet's Care
          </a>
        </div>
        <div className={styles.footerSocial}>
          <div className={styles.footerSocialRow}>
            <p className={styles.footerSocialLabel}>Connect With Us:</p>
            <div className={styles.footerSocialIcons}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialIcon}
              >
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialIcon}
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialIcon}
              >
                <img src={tiktokIcon} alt="TikTok" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialIcon}
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialIcon}
              >
                <img src={youtubeIcon} alt="YouTube" />
              </a>
            </div>
          </div>
          <div className={styles.footerAppRow}>
            <p className={styles.footerSocialLabel}>Get our App:</p>
            <div className={styles.footerAppBtns}>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerAppBtn}
              >
                <img src={googlePlayIcon} alt="Google Play" />
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerAppBtn}
              >
                <img src={appStoreIcon} alt="App Store" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerCopyright}>
          © 2026 Jet's Pizza® All Rights Reserved.
        </p>
        <div className={styles.footerBottomLinks}>
          <a href="/privacy" className={styles.footerBottomLink}>
            Privacy Policy
          </a>
          <span className={styles.footerDivider}>|</span>
          <a href="/contact" className={styles.footerBottomLink}>
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
