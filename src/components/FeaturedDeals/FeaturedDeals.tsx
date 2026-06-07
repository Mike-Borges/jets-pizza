 import React from 'react';
 import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './FeaturedDeals.module.css';
import { deals } from '../../data/menuData';

interface FeaturedDealsProps {
    sectionRef?: React.RefObject<HTMLDivElement | null>;
}

 export default function FeaturedDeals ({ sectionRef }: FeaturedDealsProps) {
    return (
 
        <div ref={sectionRef} className={styles.menuSubSection}>
          <SectionHeader title="Featured Deals" desc="Check out our latest deals and save big on your next order!" />
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