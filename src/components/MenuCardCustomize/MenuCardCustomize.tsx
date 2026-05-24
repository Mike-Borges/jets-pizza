import { useState } from 'react';
import { crustOptions, toppingOptions, bakePreferences, turboCrustOptions } from '../../data/pizzaData';
import styles from './MenuCardCustomize.module.css';

interface MenuCardCustomizeProps {
  name: string;
  image: string;
  onClose: () => void;
}

export default function MenuCardCustomize({ name, image, onClose }: MenuCardCustomizeProps) {
  const [selectedCrust, setSelectedCrust] = useState(crustOptions[0]);
  const [selectedSize, setSelectedSize] = useState(crustOptions[0].sizes[0]);
  const [selectedSauce, setSelectedSauce] = useState(toppingOptions.sauces[0]);
  const [selectedMeats, setSelectedMeats] = useState<string[]>([]);
  const [selectedVeggies, setSelectedVeggies] = useState<string[]>([]);
  const [selectedCheese, setSelectedCheese] = useState<string[]>([]);
  const [selectedBake, setSelectedBake] = useState(bakePreferences[0].name);
  const [selectedTurbo, setSelectedTurbo] = useState(turboCrustOptions[3].name);
  const [quantity, setQuantity] = useState(1);

  const handleCrustChange = (crust: typeof crustOptions[0]) => {
    setSelectedCrust(crust);
    setSelectedSize(crust.sizes[0]);
  };

  const toggleTopping = (topping: string, list: string[], setList: (l: string[]) => void) => {
    if (list.includes(topping)) {
      setList(list.filter((t) => t !== topping));
    } else {
      setList([...list, topping]);
    }
  };

  const total = (selectedSize.price * quantity).toFixed(2);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        <div className={styles.modalLeft}>
          <img src={image} alt={name} className={styles.modalImg} />
          <h2 className={styles.modalName}>{name}</h2>
        </div>
        <div className={styles.modalRight}>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3>CRUST</h3>
              <span>CHOOSE 1</span>
            </div>
            {crustOptions.map((crust) => (
              <label key={crust.id} className={styles.radioRow}>
                <span>{crust.name}</span>
                <input
                  type="radio"
                  name="crust"
                  checked={selectedCrust.id === crust.id}
                  onChange={() => handleCrustChange(crust)}
                />
              </label>
            ))}
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3>SIZE</h3>
              <span>CHOOSE 1</span>
            </div>
            {selectedCrust.sizes.map((size) => (
              <label key={size.name} className={styles.radioRow}>
                <span>{size.name} {size.inches} — ${size.price}</span>
                <input
                  type="radio"
                  name="size"
                  checked={selectedSize.name === size.name}
                  onChange={() => setSelectedSize(size)}
                />
              </label>
            ))}
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3>SAUCE</h3>
              <span>CHOOSE 1</span>
            </div>
            {toppingOptions.sauces.map((sauce) => (
              <label key={sauce} className={styles.radioRow}>
                <span>{sauce}</span>
                <input
                  type="radio"
                  name="sauce"
                  checked={selectedSauce === sauce}
                  onChange={() => setSelectedSauce(sauce)}
                />
              </label>
            ))}
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3>MEAT TOPPINGS</h3>
              <span>CHOOSE UP TO 8</span>
            </div>
            {toppingOptions.meats.map((meat) => (
              <label key={meat} className={styles.checkRow}>
                <span>{meat}</span>
                <input
                  type="checkbox"
                  checked={selectedMeats.includes(meat)}
                  onChange={() => toggleTopping(meat, selectedMeats, setSelectedMeats)}
                />
              </label>
            ))}
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3>VEGGIE TOPPINGS</h3>
              <span>CHOOSE UP TO 8</span>
            </div>
            {toppingOptions.vegetables.map((veg) => (
              <label key={veg} className={styles.checkRow}>
                <span>{veg}</span>
                <input
                  type="checkbox"
                  checked={selectedVeggies.includes(veg)}
                  onChange={() => toggleTopping(veg, selectedVeggies, setSelectedVeggies)}
                />
              </label>
            ))}
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3>CHEESE</h3>
              <span>CHOOSE UP TO 4</span>
            </div>
            {toppingOptions.cheese.map((cheese) => (
              <label key={cheese} className={styles.checkRow}>
                <span>{cheese}</span>
                <input
                  type="checkbox"
                  checked={selectedCheese.includes(cheese)}
                  onChange={() => toggleTopping(cheese, selectedCheese, setSelectedCheese)}
                />
              </label>
            ))}
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3>BAKE PREFERENCE</h3>
              <span>CHOOSE 1</span>
            </div>
            {bakePreferences.map((bake) => (
              <label key={bake.id} className={styles.radioRow}>
                <span>{bake.name}</span>
                <input
                  type="radio"
                  name="bake"
                  checked={selectedBake === bake.name}
                  onChange={() => setSelectedBake(bake.name)}
                />
              </label>
            ))}
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3>TURBO CRUST</h3>
              <span>CHOOSE 1</span>
            </div>
            {turboCrustOptions.map((turbo) => (
              <label key={turbo.id} className={styles.radioRow}>
                <span>{turbo.name}</span>
                <input
                  type="radio"
                  name="turbo"
                  checked={selectedTurbo === turbo.name}
                  onChange={() => setSelectedTurbo(turbo.name)}
                />
              </label>
            ))}
          </div>

          <div className={styles.modalFooter}>
            <div className={styles.qtyControl}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className={styles.addBtn}>ADD (${total})</button>
          </div>

        </div>
      </div>
    </div>
  );
}