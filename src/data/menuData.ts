import cinnamonStix from '../assets/cinnamon-stix.png';
import ccCookie from '../assets/cc-cookie.png';
import ccBrownie from '../assets/cc-brownie.png';
import gardenSalad from '../assets/garden-salad.png';
import greekSalad from '../assets/greek-salad.png';
import ultimatePep from '../assets/ultimate-pep.png';
import hamCheeseBoat from '../assets/ham-cheese-boat.png';
import italianDeliBoat from '../assets/italian-deli-boat.png';
import veggieBoat from '../assets/veggie-boat.png';
import antipastoSalad from '../assets/antipasto-salad.png';
import fourCornerExc from '../assets/four-corner-exc.png';
import eightCornerExc from '../assets/eight-corner-exc.png';
import veganNy from '../assets/vegan-ny.png';
import veganThin from '../assets/vegan-thin.png';
import veganGluten from '../assets/vegan-gluten.png';
import jtsBread from '../assets/jts-bread.png';
import jbBread from '../assets/jb-bread.png';
import ddBread from '../assets/dd-bread.png';
import thin from '../assets/thin.png';
import handTossed from '../assets/hand-tossed.png';
import detroitStyle from '../assets/detroit-style.png';
import nyStyle from '../assets/ny-style.png';
import cauliflower from '../assets/cauliflower.png';
import allMeaty from '../assets/all-meaty.png';
import alohaBBQ from '../assets/aloha-bbq-chicken.png';
import bbqChicken from '../assets/bbq-chicken.png';
import blt from '../assets/blt.png';
import chickenBaconRanch from '../assets/chicken-bacon-ranch.png';
import eugeneSupreme from '../assets/eugene-supreme.png';
import hawaiian from '../assets/hawaiian.png';
import jet10 from '../assets/jet-10.png';
import byoPizzaText from '../assets/byo-pizza-text.png';
import buffaloRanch from '../assets/buffalo-ranch.png';

export const deals = [
  { id: 1, name: 'Large 3 Top Carryout Special', price: '$17.99', desc: 'Large Pizza with Premium Mozzarella & 3 Toppings (Meat & Veggie toppings only) - Carryout Special' },
  { id: 2, name: "Mix 'N' Match Any 2", price: '$8.49', desc: "Choose from a 1-Topping 4 Corner Pizza®, 1-Topping Medium Crust Pizza, Small Salad, 1-Topping Jet's Bread, your choice of Bread with dipping sauce, or a delicious Dessert." },
  { id: 3, name: '$5 Off Any Specialty Pizzas', price: '$5 Off', desc: 'Large Pizza with Premium Mozzarella & 3 Toppings (Meat & Veggie toppings only) - Carryout Special' },
  { id: 4, name: 'Small 1 Topping Pizza', price: '$11.99', desc: 'Small Detroit-Style Pizza with Premium Mozzarella & 1 Topping (Meat and Veggie Only)' },
  { id: 5, name: 'Large 1 Topping Pizza', price: '$15.99', desc: 'Large Detroit-Style Pizza with Premium Mozzarella & 1 Topping (Meat and Veggie Only)' },
  { id: 6, name: 'Medium 1 Topping Pizza', price: '$8.99', desc: 'Medium Hand Tossed Pizza with Premium Mozzarella & 1 Topping (Meat and Veggie Only)' },
];

export const pizzas = [
  { id: 1, name: 'All Meaty®', price: '$18.77', image: allMeaty, desc: 'Pizza sauce, premium mozzarella, pepperoni, ham, bacon, Italian sausage & hamburger', type: 'pizza-specialty' },
  { id: 2, name: 'Aloha BBQ Chicken', price: '$18.77', image: alohaBBQ, desc: 'BBQ sauce, premium mozzarella, grilled chicken, pineapple & bacon', type: 'pizza-specialty' },
  { id: 3, name: 'BBQ Chicken', price: '$18.77', image: bbqChicken, desc: 'BBQ sauce, premium mozzarella, grilled chicken, bacon & red onions', type: 'pizza-specialty' },
  { id: 4, name: 'BLT', price: '$18.77', image: blt, desc: 'Premium mozzarella, bacon, lettuce, tomatoes & mayo', type: 'pizza-specialty' },
  { id: 5, name: 'Buffalo Ranch Chicken', price: '$18.77', image: buffaloRanch, desc: 'Jet\'s® Ranch, premium mozzarella, grilled chicken, bacon & red onions, topped with mild buffalo sauce', type: 'pizza-specialty' },
  { id: 6, name: 'Chicken Bacon Ranch', price: '$18.77', image: chickenBaconRanch, desc: 'Jet\'s® Ranch, premium mozzarella, cheddar, grilled chicken & bacon', type: 'pizza-specialty' },
  { id: 7, name: 'Eugene Supreme®', price: '$18.77', image: eugeneSupreme, desc: 'Pizza sauce, premium mozzarella, Italian sausage, onions, green peppers & mild peppers', type: 'pizza-specialty' },
  { id: 8, name: 'Hawaiian', price: '$18.77', image: hawaiian, desc: 'Pizza sauce, premium mozzarella, ham, bacon & pineapple', type: 'pizza-specialty' },
  { id: 9, name: 'Super Special', price: '$18.77', image: '', desc: 'Pizza sauce, premium mozzarella, pepperoni, ham, mushrooms, onions & green peppers', type: 'pizza-specialty' },
  { id: 10, name: 'Ultimate Pepperoni', price: '$18.77', image: ultimatePep, desc: 'Pizza sauce, premium mozzarella, traditional, bold & shredded pepperoni', type: 'pizza-specialty' },
  { id: 11, name: 'Veggie', price: '$18.77', image: '', desc: 'Pizza sauce, premium mozzarella, mushrooms, onions, green peppers, black olives & tomatoes', type: 'pizza-specialty' },
  { id: 12, name: 'Jet 10®', price: '$19.36', image: jet10, desc: 'Pizza sauce, premium mozzarella, pepperoni, hamburger, Italian sausage, bacon, mushrooms, onions, green peppers & black olives', type: 'pizza-specialty' },
  { id: 13, name: 'Build Your Own Pizza', price: '$14.00', image: byoPizzaText, desc: 'Create your pizza with a choice of delicious crusts, sauces & premium quality ingredients', type: 'pizza-byo' },
];

export const exclusives = [
  { id: 1, name: '4 Corner Pizza®', price: '$18.77', image: fourCornerExc, desc: 'Detroit-style deep dish with 4 crispy corners', type: 'pizza-exclusive' },
  { id: 2, name: '8 Corner Pizza®', price: '$21.50', image: eightCornerExc, desc: 'Detroit-style deep dish with 8 crispy corners', type: 'pizza-exclusive' },
];

export const crusts = [
  { id: 1, name: 'Detroit-Style Deep Dish', image: detroitStyle, description: 'Crispy square golden crust with a fluffy interior' },
  { id: 2, name: 'Hand-Tossed Round', image: handTossed, description: 'Classic hand-tossed round with a golden crust' },
  { id: 3, name: 'Thin Crust', image: thin, description: 'Light and crispy thin crust' },
  { id: 4, name: 'NY Style', image: nyStyle, description: 'Large foldable NY style pizza crust' },
  { id: 5, name: 'Seasoned Cauliflower', image: cauliflower, description: 'Cauliflower crust seasoned with herbs and spices. ' },
  { id: 6, name: 'Gluten-Free', image: veganGluten, description: 'Small gluten-free crust. ' },
]

export const vegan = [
  { id: 1, name: 'NY Style', price: '$19.50', image: veganNy, desc: 'Large foldable NY style pizza with vegan toppings', type: 'pizza-dietary' },
  { id: 2, name: 'Thin Crust', price: '$14.00', image: veganThin, desc: 'Light and crispy thin crust with vegan toppings', type: 'pizza-dietary' },
  { id: 3, name: 'Gluten-Free', price: '$14.00', image: veganGluten, desc: 'Gluten-free crust with vegan toppings', type: 'pizza-gf' },
];

export const vegetarian = [
  { id: 1, name: 'Detroit-Style Deep Dish', price: '$14.00', image: detroitStyle, desc: 'Crispy square golden crust with vegetarian toppings', type: 'pizza-dietary' },
  { id: 2, name: 'Hand-Tossed Round', price: '$14.00', image: handTossed, desc: 'Classic hand-tossed round with vegetarian toppings', type: 'pizza-dietary' },
  { id: 3, name: 'Thin Crust', price: '$14.00', image: thin, desc: 'Light crispy thin crust with vegetarian toppings', type: 'pizza-dietary' },
];

export const glutenFree = [
  { id: 1, name: 'Gluten-Free Pizza', price: '$14.00', image: veganGluten, desc: 'Small gluten-free crust. May have been exposed to gluten.', type: 'pizza-gf' },
];

export const sidekicks = [
  { id: 1, name: 'Jet\'s Wings (8pcs.)', price: '$11.99', image: '', desc: 'Plain, BBQ, Honey BBQ, Sweet Red Chili, Mild Buffalo or Hot', type: 'wings' },
  { id: 2, name: 'Boneless Chicken (10oz)', price: '$11.99', image: '', desc: 'Plain, BBQ, Honey BBQ, Sweet Red Chili, Mild Buffalo or Hot', type: 'wings' },
  { id: 3, name: 'Jet\'s Bread®', price: '$9.99', image: jtsBread, desc: 'Served with your choice of dipping sauce (12 pcs.)', type: 'bread' },
  { id: 4, name: 'Deep Dish Bread®', price: '$9.99', image: ddBread, desc: 'Served with your choice of dipping sauce (12 pcs.)', type: 'bread' },
  { id: 5, name: 'Triple Cheese Turbo Stix', price: '$9.99', image: jbBread, desc: 'Served with your choice of dipping sauce (12 pcs.)', type: 'bread' },
  { id: 6, name: 'Hot Slices', price: '$5.99', image: '', desc: 'Jet\'s Detroit-Style slices with premium mozzarella & pepperoni', type: 'slice' },
];

export const salads = [
  { id: 1, name: 'Antipasto Salad', price: '$9.99', image: antipastoSalad, desc: 'Served with your choice of dressing', type: 'salad' },
  { id: 2, name: 'Garden Salad', price: '$9.99', image: gardenSalad, desc: 'Served with your choice of dressing', type: 'salad' },
  { id: 3, name: 'Greek Salad', price: '$9.99', image: greekSalad, desc: 'Served with your choice of dressing', type: 'salad' },
];

export const calzones = [
  { id: 1, name: 'Italian Deli Boat®', price: '$9.99', image: italianDeliBoat, desc: 'Calzone style sandwich with Italian dressing', type: 'calzone' },
  { id: 2, name: 'Ham & Cheese Boat®', price: '$9.99', image: hamCheeseBoat, desc: 'Calzone style sandwich with Italian dressing', type: 'calzone' },
  { id: 3, name: 'Veggie Boat®', price: '$9.99', image: veggieBoat, desc: 'Calzone style sandwich with Italian dressing', type: 'calzone' },
  { id: 4, name: 'Jet\'s Boat®', price: '$9.99', image: '', desc: 'Calzone style sandwich with pizza sauce', type: 'calzone' },
];

export const drinks = [
  { id: 1, name: 'Coca-Cola', price: '$2.49', image: '', type: 'drink' },
  { id: 2, name: 'Diet Coke', price: '$2.49', image: '', type: 'drink' },
  { id: 3, name: 'Sprite', price: '$2.49', image: '', type: 'drink' },
  { id: 4, name: 'Barq\'s Root Beer', price: '$2.49', image: '', type: 'drink' },
  { id: 5, name: 'Minute Maid Lemonade', price: '$2.49', image: '', type: 'drink' },
];

export const desserts = [
  { id: 1, name: 'Cinnamon Stix (12pcs.)', price: '$8.99', image: cinnamonStix, desc: '130 cal.', type: 'dessert' },
  { id: 2, name: '8" Chocolate Chip Cookie (8pcs.)', price: '$8.99', image: ccCookie, desc: '150 cal.', type: 'dessert' },
  { id: 3, name: '8" Chocolate Chip Brownie (8pcs.)', price: '$8.99', image: ccBrownie, desc: '150 cal.', type: 'dessert' },
];

// Helper: converts a name to a URL slug e.g. "All Meaty®" → "all-meaty"
export const toSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
 
// Flat list of every customizable item across all categories
export const allItems = [
  ...pizzas,
  ...exclusives,
  ...vegan,
  ...vegetarian,
  ...glutenFree,
  ...sidekicks,
  ...salads,
  ...calzones,
  ...drinks,
  ...desserts,
];
 
// Look up any item by its slug
export const getItemBySlug = (slug: string) =>
  allItems.find((item) => toSlug(item.name) === slug) ?? null;