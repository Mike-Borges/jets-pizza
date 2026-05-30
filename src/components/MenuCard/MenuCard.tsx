import { useNavigate } from 'react-router-dom';
import styles from './MenuCard.module.css';

interface MenuCardProps {
  image: string;
  name: string;
  price: string;
  desc?: string;
  type: string;
}

const toSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function MenuCard({ image, name, price, desc, type }: MenuCardProps) {
  const navigate = useNavigate();

  const handleCustomize = () => {
    navigate(`/menu/customize/${toSlug(name)}`);
  };

  return (
    <div className={styles.menuCard} onClick={handleCustomize}>
      <img src={image} alt={name} className={styles.menuCardImg} />
      <div className={styles.menuCardInfo}>
        <p className={styles.menuCardName}>{name}</p>
        {desc && <p className={styles.menuCardDesc}>{desc}</p>}
        <p className={styles.menuCardPrice}>{price}</p>
      </div>
      <div className={styles.menuCardActions}>
        <button
          className={styles.menuCardBtn}
          onClick={(e) => { e.stopPropagation(); handleCustomize(); }}
        >
          Customize & Add
        </button>
      </div>
    </div>
  );
}