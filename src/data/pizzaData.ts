// pizzaData.ts
export const crustOptions = [
  {
    id: 1,
    name: 'Detroit-Style Deep Dish',
    description: 'Crispy, square, golden crust baked to perfection',
    sizes: [
      { name: '4 Corner Pizza® / Small', inches: '', slices: 4, price: 14.00 },
      { name: 'Large', inches: '', slices: 8, price: 19.50 },
      { name: '8 Corner Pizza®', inches: '', slices: 8, price: 21.50 },
      { name: 'X-Large', inches: '', slices: 12, price: 24.50 },
      { name: 'Party Tray', inches: '', slices: 24, price: 46.00 },
    ],
  },
  {
    id: 2,
    name: 'Hand-Tossed Round',
    description: 'Classic hand-tossed round pizza',
    sizes: [
      { name: 'Small', inches: '10"', slices: 4, price: 14.00 },
      { name: 'Medium', inches: '12"', slices: 8, price: 16.00 },
      { name: 'Large', inches: '14"', slices: 8, price: 19.50 },
    ],
  },
  {
    id: 3,
    name: 'Thin Crust',
    description: 'Light and crispy thin crust',
    sizes: [
      { name: 'Small', inches: '10"', slices: 4, price: 14.00 },
      { name: 'Large', inches: '14"', slices: 8, price: 19.50 },
    ],
  },
  {
    id: 4,
    name: 'NY-Style Round',
    description: 'Large foldable New York style slices',
    sizes: [
      { name: 'Large', inches: '14"', slices: 6, price: 19.50 },
    ],
  },
  {
    id: 5,
    name: 'Seasoned Cauliflower',
    description: 'Light seasoned cauliflower crust option',
    sizes: [
      { name: 'Small', inches: '', slices: 4, price: 14.00 },
    ],
  },
  {
    id: 6,
    name: 'Gluten-Free',
    description: 'Gluten-free crust option. May have been exposed to gluten from other foods in our kitchen.',
    sizes: [
      { name: 'Small', inches: '', slices: 4, price: 14.00 },
    ],
  },
];

export const turboCrustOptions = [
  { id: 1, name: 'Butter' },
  { id: 2, name: 'Garlic' },
  { id: 3, name: 'Romano' },
  { id: 4, name: 'Cajun' },
  { id: 5, name: 'Sesame Seed' },
  { id: 6, name: 'Turbo Crust® (Butter + Garlic + Romano)' },
  { id: 7, name: 'No Crust Flavor' },
];

export const toppingOptions = {
  sauces: [
    'Mama Jetts\' Pizza Sauce',
    'Jet\'s® Ranch',
    'BBQ',
    'Mild Buffalo',
  ],
  cheese: [
    'Premium Mozzarella',
    'Cheddar',
    'Feta',
  ],
  meats: [
    'Pepperoni',
    'Bold Pepperoni',
    'Shredded Pepperoni',
    'Italian Sausage',
    'Grilled Chicken',
    'Hamburger',
    'Bacon',
    'Ham',
    'Anchovies',
  ],
  vegetables: [
    'Mushrooms',
    'Green Peppers',
    'Mild Peppers',
    'Jalapeño Peppers',
    'Kalamata Olives',
    'Lettuce',
    'Pineapple',
    'Onions',
    'Tomatoes',
    'Red Onions',
    'Black Olives',
  ],
};

export const bakePreferences = [
  { id: 1, name: 'Regular' },
  { id: 2, name: 'Light' },
  { id: 3, name: 'Well Done' },
];