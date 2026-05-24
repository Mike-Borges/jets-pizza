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

export const pizzas = [
  { id: 1, name: 'Build Your Own Pizza', price: '$10.00', image: '' },
  { id: 2, name: 'Ultimate Pepperoni', price: '$10.00', image: ultimatePep },
  { id: 3, name: 'All Meaty®', price: '$10.00', image: '' },
  { id: 4, name: 'Aloha BBQ Chicken', price: '$10.00', image: '' },
  { id: 5, name: 'BLT', price: '$10.00', image: '' },
  { id: 6, name: 'BBQ Chicken', price: '$10.00', image: '' },
  { id: 7, name: 'Hawaiian', price: '$10.00', image: '' },
  { id: 8, name: 'Jet 10®', price: '$10.00', image: '' },
];

export const exclusives = [
  { id: 1, name: '4 Corner Pizza®', price: '$21.50', image: fourCornerExc },
  { id: 2, name: '8 Corner Pizza®', price: '$21.50', image: eightCornerExc },
];

export const vegan = [
  { id: 1, name: 'NY Style', price: '$10.00', image: veganNy },
  { id: 2, name: 'Thin Crust', price: '$10.00', image: veganThin },
  { id: 3, name: 'Gluten-Free Pizza', price: '$10.00', image: veganGluten },
];

export const vegetarian = [
  { id: 1, name: 'Detroit-Style Deep Dish', price: '$10.00', image: detroitStyle },
  { id: 2, name: 'Hand-Tossed Round', price: '$10.00', image: handTossed },
  { id: 3, name: 'Thin Crust', price: '$10.00', image: thin },
];

export const glutenFree = [
  { id: 1, name: 'Gluten-Free Pizza', price: '$10.00', image: veganGluten },
];

export const sidekicks = [
  { id: 1, name: "Triple Cheese Turbo Stix®", price: '$10.00', image: jtsBread },
  { id: 2, name: "Jet's Bread®", price: '$10.00', image: jbBread },
  { id: 3, name: 'Deep Dish Bread®', price: '$10.00', image: ddBread },
  { id: 4, name: 'Jumbo Wings', price: '$10.00', image: '' },
  { id: 5, name: 'Boneless Wings', price: '$10.00', image: '' },
  { id: 6, name: 'Jet Sauce', price: '$2.00', image: '' },
];

export const salads = [
  { id: 1, name: 'Garden Salad', price: '$10.00', image: gardenSalad },
  { id: 2, name: 'Greek Salad', price: '$10.00', image: greekSalad },
  { id: 3, name: 'Antipasto Salad', price: '$10.00', image: antipastoSalad },
  { id: 4, name: 'Chicken Caesar Salad', price: '$10.00', image: '' },
];

export const calzones = [
  { id: 1, name: 'Ham & Cheese Boat', price: '$10.00', image: hamCheeseBoat },
  { id: 2, name: 'Italian Deli Boat', price: '$10.00', image: italianDeliBoat },
  { id: 3, name: 'Veggie Boat', price: '$10.00', image: veggieBoat },
];

export const drinks = [
  { id: 1, name: '2-Liter Pepsi', price: '$3.00', image: '' },
  { id: 2, name: '2-Liter Diet Pepsi', price: '$3.00', image: '' },
  { id: 3, name: '2-Liter Sierra Mist', price: '$3.00', image: '' },
  { id: 4, name: '2-Liter Mountain Dew', price: '$3.00', image: '' },
  { id: 5, name: '2-Liter Root Beer', price: '$3.00', image: '' },
];

export const desserts = [
  { id: 1, name: 'Cinnamon Stix', price: '$10.00', image: cinnamonStix },
  { id: 2, name: 'Chocolate Chip Cookie', price: '$10.00', image: ccCookie },
  { id: 3, name: 'Chocolate Chip Brownie', price: '$10.00', image: ccBrownie },
];