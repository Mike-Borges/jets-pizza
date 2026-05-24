import { useState } from 'react';
import MenuCardCustomize from '../MenuCardCustomize/MenuCardCustomize';
import styles from './MenuCard.module.css';

interface MenuCardProps {
  image: string;
  name: string;
  price: string;
}

export default function MenuCard({ image, name, price }: MenuCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.menuCard} onClick={() => setIsOpen(true)}>
        <img src={image} alt={name} className={styles.menuCardImg} />
        <div className={styles.menuCardInfo}>
          <p className={styles.menuCardName}>{name}</p>
          <p className={styles.menuCardPrice}>{price}</p>
        </div>
        <div className={styles.menuCardActions}>
          <button className={styles.menuCardBtn} onClick={(e) => { e.stopPropagation(); setIsOpen(true); }}>
            Customize & Add
          </button>
        </div>
      </div>
      {isOpen && (
        <MenuCardCustomize
          name={name}
          image={image}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}