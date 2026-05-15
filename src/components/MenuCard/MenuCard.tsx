import styles from './MenuCard.module.css';

interface MenuCardProps {
  image: string;
  name: string;
  price: string;
}

export default function MenuCard({ image, name, price }: MenuCardProps) {
  return (
    <div className={styles.menuCard}>
      <img src={image} alt={name} className={styles.menuCardImg} />
      <div className={styles.menuCardInfo}>
        <p className={styles.menuCardName}>{name}</p>
        <p className={styles.menuCardPrice}>{price}</p>
      </div>
      <div className={styles.menuCardActions}>
        <button className={styles.menuCardBtn}>Add to Cart</button>
        <div className={styles.menuCardQty}>
          <button className={styles.menuCardQtyBtn}>-</button>
          <span className={styles.menuCardQtyNum}>1</span>
          <button className={styles.menuCardQtyBtn}>+</button>
        </div>
      </div>
    </div>
  );
}