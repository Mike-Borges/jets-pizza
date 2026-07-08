import { useState } from 'react';
import { crustOptions, toppingOptions, turboCrustOptions } from '../../data/pizzaData';
import styles from './MenuCardCustomize.module.css';

const dippingSauces = ['Jet\'s Ranch', 'Pizza Sauce', 'Butter Garlic', 'Blue Cheese', 'Mike\'s Hot Honey'];
const wingsSauces = ['Plain', 'BBQ', 'Honey BBQ', 'Sweet Red Chili', 'Mild Buffalo', 'Hot'];
const saladDressings = ['Greek', 'Ranch', 'Raspberry Vinaigrette', 'Catalina', 'Italian', 'Blue Cheese'];
const bakeOptions = ['Light', 'Regular', 'Well Done'];
const wingsBakeOptions = ['Regular', 'Well Done'];
const drinkSizes = [
  { name: '20oz', price: 2.49 },
  { name: '2-Liter', price: 3.99 },
];
const veganSauces = ['Mama Jetts\' Pizza Sauce', 'BBQ', 'Mild Buffalo'];
const veganVeggies = ['Mushrooms', 'Green Peppers', 'Mild Peppers', 'Jalapeño Peppers', 'Kalamata Olives', 'Pineapple', 'Onions', 'Tomatoes', 'Red Onions', 'Black Olives', 'Spinach'];
const veganCheese = ['Vegan Cheese'];

type CrustOption = typeof crustOptions[0];
type SizeOption = typeof crustOptions[0]['sizes'][0];
type DrinkSize = typeof drinkSizes[0];

interface MenuCardCustomizeProps {
  name: string;
  image: string;
  desc?: string;
  type: string;
  onClose: () => void;
}

export default function MenuCardCustomize({ name, image, desc, type, onClose }: MenuCardCustomizeProps) {

  // ─── STATE ───────────────────────────────────────────────────────────────────
  const [crustChosen, setCrustChosen] = useState(false);
  const [selectedCrust, setSelectedCrust] = useState<CrustOption | null>(null);
  const [selectedSize, setSelectedSize] = useState<SizeOption | null>(null);
  const [selectedSauce, setSelectedSauce] = useState<string | null>(null);
  const [selectedMeats, setSelectedMeats] = useState<string[]>([]);
  const [selectedVeggies, setSelectedVeggies] = useState<string[]>([]);
  const [selectedCheese, setSelectedCheese] = useState<string[]>([]);
  const [selectedBake, setSelectedBake] = useState<string | null>(null);
  const [selectedTurbo, setSelectedTurbo] = useState<string | null>(null);
  const [selectedDipping, setSelectedDipping] = useState<string | null>(null);
  const [selectedWingsSauce, setSelectedWingsSauce] = useState<string | null>(null);
  const [selectedDressing, setSelectedDressing] = useState<string | null>(null);
  const [selectedCalzoneToppings, setSelectedCalzoneToppings] = useState<string[]>([]);
  const [selectedCalzoneCheese, setSelectedCalzoneCheese] = useState<string[]>([]);
  const [selectedCalzoneDressing, setSelectedCalzoneDressing] = useState<string | null>(null);
  const [selectedBreadToppings, setSelectedBreadToppings] = useState<string[]>([]);
  const [selectedBreadCheese, setSelectedBreadCheese] = useState<string[]>([]);
  const [selectedVeganSauce, setSelectedVeganSauce] = useState<string | null>(null);
  const [selectedVeganVeggies, setSelectedVeganVeggies] = useState<string[]>([]);
  const [selectedVeganCheese, setSelectedVeganCheese] = useState<string[]>([]);
  const [selectedDrinkSize, setSelectedDrinkSize] = useState<DrinkSize | null>(null);
  const [quantity, setQuantity] = useState(1);

  // ─── HANDLERS ────────────────────────────────────────────────────────────────
  const handleCrustChange = (crust: CrustOption) => {
    setSelectedCrust(crust);
    setSelectedSize(null);
    setCrustChosen(true);
  };

  const toggle = (item: string, list: string[], setList: (l: string[]) => void) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const getPrice = () => {
    if (['pizza-byo', 'pizza-specialty', 'pizza-exclusive', 'pizza-dietary'].includes(type)) {
      return selectedSize ? (selectedSize.price * quantity).toFixed(2) : '0.00';
    }
    if (type === 'drink') return selectedDrinkSize ? (selectedDrinkSize.price * quantity).toFixed(2) : '0.00';
    return 'See Total';
  };

  const isPizza = ['pizza-byo', 'pizza-specialty', 'pizza-exclusive', 'pizza-dietary', 'pizza-gf'].includes(type);

  // ─── RENDER ──────────────────────────────────────────────────────────────────
  return (
    <div className={styles.page}>

      {/* LEFT COLUMN */}
      <div className={styles.leftColumn}>
      <div className={styles.left}>
        <img src={image} alt={name} className={styles.image} />
        <h2 className={styles.name}>{name}</h2>
        {desc && <p className={styles.desc}>{desc}</p>}
        
      </div>
      {isPizza && (
          <div className={styles.halfBanner}>
            <button className={styles.halfBtn}>GO TO HALF & HALF</button>
          </div>
        )}
        </div>

      {/* RIGHT COLUMN */}
      <div className={styles.rightColumn}>
      <div className={styles.rightWrapper}>
        <button className={styles.backBtn} onClick={onClose}>← Back to Menu</button>

        <div className={styles.options}>

          {/* CRUST — BYO, Specialty, Dietary */}
          {['pizza-byo', 'pizza-specialty', 'pizza-dietary'].includes(type) && (
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
                    checked={selectedCrust?.id === crust.id}
                    onChange={() => handleCrustChange(crust)}
                  />
                </label>
              ))}
            </div>
          )}

          {/* EVERYTHING ELSE — only shown after crust is chosen */}
          {crustChosen && (
            <>

              {/* SIZE — BYO, Specialty, Dietary */}
              {['pizza-byo', 'pizza-specialty', 'pizza-dietary'].includes(type) && selectedCrust && (
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
                        checked={selectedSize?.name === size.name}
                        onChange={() => setSelectedSize(size)}
                      />
                    </label>
                  ))}
                </div>
              )}

              {/* SAUCE — Pizza types */}
              {['pizza-byo', 'pizza-specialty', 'pizza-exclusive'].includes(type) && (
                <div className={styles.section}>
                  <div className={styles.sectionHeader}>
                    <h3>SAUCE</h3>
                    <span>CHOOSE 1</span>
                  </div>
                  {toppingOptions.sauces.map((sauce) => (
                    <label key={sauce} className={styles.radioRow}>
                      <span>{sauce}</span>
                      <input type="radio" name="sauce" checked={selectedSauce === sauce} onChange={() => setSelectedSauce(sauce)} />
                    </label>
                  ))}
                </div>
              )}

              {/* SAUCE — Vegan/Dietary */}
              {type === 'pizza-dietary' && (
                <div className={styles.section}>
                  <div className={styles.sectionHeader}>
                    <h3>SAUCE</h3>
                    <span>CHOOSE 1</span>
                  </div>
                  {veganSauces.map((sauce) => (
                    <label key={sauce} className={styles.radioRow}>
                      <span>{sauce}</span>
                      <input type="radio" name="sauce" checked={selectedVeganSauce === sauce} onChange={() => setSelectedVeganSauce(sauce)} />
                    </label>
                  ))}
                </div>
              )}

              {/* SAUCE — Gluten Free */}
              {type === 'pizza-gf' && (
                <div className={styles.section}>
                  <div className={styles.sectionHeader}>
                    <h3>SAUCE</h3>
                    <span>CHOOSE 1</span>
                  </div>
                  {toppingOptions.sauces.map((sauce) => (
                    <label key={sauce} className={styles.radioRow}>
                      <span>{sauce}</span>
                      <input type="radio" name="sauce" checked={selectedSauce === sauce} onChange={() => setSelectedSauce(sauce)} />
                    </label>
                  ))}
                </div>
              )}

              {/* MEAT TOPPINGS — Pizza types */}
              {['pizza-byo', 'pizza-specialty', 'pizza-exclusive', 'pizza-gf'].includes(type) && (
                <div className={styles.section}>
                  <div className={styles.sectionHeader}>
                    <h3>MEAT TOPPINGS</h3>
                    <span>CHOOSE UP TO 8</span>
                  </div>
                  {toppingOptions.meats.map((meat) => (
                    <label key={meat} className={styles.checkRow}>
                      <span>{meat}</span>
                      <input type="checkbox" checked={selectedMeats.includes(meat)} onChange={() => toggle(meat, selectedMeats, setSelectedMeats)} />
                    </label>
                  ))}
                </div>
              )}

              {/* VEGGIE TOPPINGS — Pizza types */}
              {['pizza-byo', 'pizza-specialty', 'pizza-exclusive', 'pizza-gf'].includes(type) && (
                <div className={styles.section}>
                  <div className={styles.sectionHeader}>
                    <h3>VEGGIE TOPPINGS</h3>
                    <span>CHOOSE UP TO 8</span>
                  </div>
                  {toppingOptions.vegetables.map((veg) => (
                    <label key={veg} className={styles.checkRow}>
                      <span>{veg}</span>
                      <input type="checkbox" checked={selectedVeggies.includes(veg)} onChange={() => toggle(veg, selectedVeggies, setSelectedVeggies)} />
                    </label>
                  ))}
                </div>
              )}

              {/* VEGGIE TOPPINGS — Dietary/Vegan */}
              {type === 'pizza-dietary' && (
                <div className={styles.section}>
                  <div className={styles.sectionHeader}>
                    <h3>VEGGIE TOPPINGS</h3>
                    <span>CHOOSE UP TO 8</span>
                  </div>
                  {veganVeggies.map((veg) => (
                    <label key={veg} className={styles.checkRow}>
                      <span>{veg}</span>
                      <input type="checkbox" checked={selectedVeganVeggies.includes(veg)} onChange={() => toggle(veg, selectedVeganVeggies, setSelectedVeganVeggies)} />
                    </label>
                  ))}
                </div>
              )}

              {/* CHEESE — Pizza types */}
              {['pizza-byo', 'pizza-specialty', 'pizza-exclusive', 'pizza-gf'].includes(type) && (
                <div className={styles.section}>
                  <div className={styles.sectionHeader}>
                    <h3>CHEESE</h3>
                    <span>CHOOSE UP TO 3</span>
                  </div>
                  {toppingOptions.cheese.map((cheese) => (
                    <label key={cheese} className={styles.checkRow}>
                      <span>{cheese}</span>
                      <input type="checkbox" checked={selectedCheese.includes(cheese)} onChange={() => toggle(cheese, selectedCheese, setSelectedCheese)} />
                    </label>
                  ))}
                </div>
              )}

              {/* CHEESE — Dietary/Vegan */}
              {type === 'pizza-dietary' && (
                <div className={styles.section}>
                  <div className={styles.sectionHeader}>
                    <h3>CHEESE</h3>
                    <span>CHOOSE UP TO 1</span>
                  </div>
                  {veganCheese.map((cheese) => (
                    <label key={cheese} className={styles.checkRow}>
                      <span>{cheese}</span>
                      <input type="checkbox" checked={selectedVeganCheese.includes(cheese)} onChange={() => toggle(cheese, selectedVeganCheese, setSelectedVeganCheese)} />
                    </label>
                  ))}
                </div>
              )}

              {/* BAKE — Pizza types except GF */}
              {isPizza && type !== 'pizza-gf' && (
                <div className={styles.section}>
                  <div className={styles.sectionHeader}>
                    <h3>BAKE PREFERENCE</h3>
                    <span>CHOOSE 1</span>
                  </div>
                  {bakeOptions.map((bake) => (
                    <label key={bake} className={styles.radioRow}>
                      <span>{bake}</span>
                      <input type="radio" name="bake" checked={selectedBake === bake} onChange={() => setSelectedBake(bake)} />
                    </label>
                  ))}
                </div>
              )}

              {/* TURBO CRUST — Pizza types except GF */}
              {['pizza-byo', 'pizza-specialty', 'pizza-exclusive', 'pizza-dietary'].includes(type) && (
                <div className={styles.section}>
                  <div className={styles.sectionHeader}>
                    <h3>TURBO CRUST</h3>
                    <span>CHOOSE 1 — FREE</span>
                  </div>
                  {turboCrustOptions.map((turbo) => (
                    <label key={turbo.id} className={styles.radioRow}>
                      <span>{turbo.name}</span>
                      <input type="radio" name="turbo" checked={selectedTurbo === turbo.name} onChange={() => setSelectedTurbo(turbo.name)} />
                    </label>
                  ))}
                </div>
              )}

            </>
          )}

          {/* WINGS */}
          {type === 'wings' && (
            <>
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <h3>SAUCE</h3>
                  <span>CHOOSE 1</span>
                </div>
                {wingsSauces.map((sauce) => (
                  <label key={sauce} className={styles.radioRow}>
                    <span>{sauce}</span>
                    <input type="radio" name="wingsSauce" checked={selectedWingsSauce === sauce} onChange={() => setSelectedWingsSauce(sauce)} />
                  </label>
                ))}
              </div>
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <h3>BAKE PREFERENCE</h3>
                  <span>CHOOSE 1</span>
                </div>
                {wingsBakeOptions.map((bake) => (
                  <label key={bake} className={styles.radioRow}>
                    <span>{bake}</span>
                    <input type="radio" name="bake" checked={selectedBake === bake} onChange={() => setSelectedBake(bake)} />
                  </label>
                ))}
              </div>
            </>
          )}

          {/* BREAD */}
          {type === 'bread' && (
            <>
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <h3>DIPPING SAUCE</h3>
                  <span>CHOOSE 1</span>
                </div>
                {dippingSauces.map((sauce) => (
                  <label key={sauce} className={styles.radioRow}>
                    <span>{sauce}</span>
                    <input type="radio" name="dipping" checked={selectedDipping === sauce} onChange={() => setSelectedDipping(sauce)} />
                  </label>
                ))}
              </div>
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <h3>MEAT TOPPINGS</h3>
                  <span>CHOOSE UP TO 4</span>
                </div>
                {toppingOptions.meats.map((meat) => (
                  <label key={meat} className={styles.checkRow}>
                    <span>{meat}</span>
                    <input type="checkbox" checked={selectedBreadToppings.includes(meat)} onChange={() => toggle(meat, selectedBreadToppings, setSelectedBreadToppings)} />
                  </label>
                ))}
              </div>
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <h3>VEGGIE TOPPINGS</h3>
                  <span>CHOOSE UP TO 4</span>
                </div>
                {toppingOptions.vegetables.map((veg) => (
                  <label key={veg} className={styles.checkRow}>
                    <span>{veg}</span>
                    <input type="checkbox" checked={selectedBreadToppings.includes(veg)} onChange={() => toggle(veg, selectedBreadToppings, setSelectedBreadToppings)} />
                  </label>
                ))}
              </div>
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <h3>CHEESE</h3>
                  <span>CHOOSE UP TO 3</span>
                </div>
                {toppingOptions.cheese.map((cheese) => (
                  <label key={cheese} className={styles.checkRow}>
                    <span>{cheese}</span>
                    <input type="checkbox" checked={selectedBreadCheese.includes(cheese)} onChange={() => toggle(cheese, selectedBreadCheese, setSelectedBreadCheese)} />
                  </label>
                ))}
              </div>
            </>
          )}

          {/* SALAD */}
          {type === 'salad' && (
            <>
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <h3>DRESSING</h3>
                  <span>CHOOSE 1</span>
                </div>
                {saladDressings.map((dressing) => (
                  <label key={dressing} className={styles.radioRow}>
                    <span>{dressing}</span>
                    <input type="radio" name="dressing" checked={selectedDressing === dressing} onChange={() => setSelectedDressing(dressing)} />
                  </label>
                ))}
              </div>
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <h3>ADD TOPPINGS</h3>
                  <span>OPTIONAL</span>
                </div>
                {toppingOptions.vegetables.map((veg) => (
                  <label key={veg} className={styles.checkRow}>
                    <span>{veg}</span>
                    <input type="checkbox" checked={selectedVeggies.includes(veg)} onChange={() => toggle(veg, selectedVeggies, setSelectedVeggies)} />
                  </label>
                ))}
              </div>
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <h3>CHEESE</h3>
                  <span>OPTIONAL</span>
                </div>
                {toppingOptions.cheese.map((cheese) => (
                  <label key={cheese} className={styles.checkRow}>
                    <span>{cheese}</span>
                    <input type="checkbox" checked={selectedCheese.includes(cheese)} onChange={() => toggle(cheese, selectedCheese, setSelectedCheese)} />
                  </label>
                ))}
              </div>
            </>
          )}

          {/* CALZONE */}
          {type === 'calzone' && (
            <>
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <h3>DRESSING</h3>
                  <span>CHOOSE 1</span>
                </div>
                {saladDressings.map((dressing) => (
                  <label key={dressing} className={styles.radioRow}>
                    <span>{dressing}</span>
                    <input type="radio" name="calzoneDressing" checked={selectedCalzoneDressing === dressing} onChange={() => setSelectedCalzoneDressing(dressing)} />
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
                    <input type="checkbox" checked={selectedCalzoneToppings.includes(meat)} onChange={() => toggle(meat, selectedCalzoneToppings, setSelectedCalzoneToppings)} />
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
                    <input type="checkbox" checked={selectedCalzoneToppings.includes(veg)} onChange={() => toggle(veg, selectedCalzoneToppings, setSelectedCalzoneToppings)} />
                  </label>
                ))}
              </div>
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <h3>CHEESE</h3>
                  <span>CHOOSE UP TO 3</span>
                </div>
                {toppingOptions.cheese.map((cheese) => (
                  <label key={cheese} className={styles.checkRow}>
                    <span>{cheese}</span>
                    <input type="checkbox" checked={selectedCalzoneCheese.includes(cheese)} onChange={() => toggle(cheese, selectedCalzoneCheese, setSelectedCalzoneCheese)} />
                  </label>
                ))}
              </div>
            </>
          )}

          {/* DRINKS */}
          {type === 'drink' && (
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h3>SIZE</h3>
                <span>CHOOSE 1</span>
              </div>
              {drinkSizes.map((size) => (
                <label key={size.name} className={styles.radioRow}>
                  <span>{size.name} — ${size.price}</span>
                  <input type="radio" name="drinkSize" checked={selectedDrinkSize?.name === size.name} onChange={() => setSelectedDrinkSize(size)} />
                </label>
              ))}
            </div>
          )}

        </div>

      

      </div>
        {/* STICKY FOOTER */}
        <div className={styles.footer}>
          <div className={styles.qtyControl}>
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button className={styles.addBtn}>ADD ({getPrice()})</button>
        </div>
        </div>
    </div>
  );
}