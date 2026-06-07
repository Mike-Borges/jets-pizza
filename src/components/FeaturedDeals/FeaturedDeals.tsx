 import React from 'react';
import styles from './FeaturedDeals.module.css';
import { deals } from '../../data/menuData';

interface FeaturedDealsProps {
    sectionRef?: React.RefObject<HTMLDivElement | null>;
}

 export default function FeaturedDeals ({ sectionRef }: FeaturedDealsProps) {
    return (
 
        <div ref={sectionRef} className={styles.menuSubSection}>
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
        </div> );}