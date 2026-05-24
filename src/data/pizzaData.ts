export const crustOptions = [
  {
    id: 1,
    name: 'Detroit-Style Deep Dish',
    description: 'Crispy, square, golden crust baked to perfection',
    sizes: [
      { name: 'Small', inches: '8"', slices: 4, price: 10.99 },
      { name: 'Medium', inches: '10"', slices: 6, price: 13.99 },
      { name: 'Large', inches: '12"', slices: 8, price: 16.99 },
      { name: 'X-Large', inches: '14"', slices: 10, price: 19.99 },
    ],
  },
  {
    id: 2,
    name: 'Hand-Tossed Round',
    description: 'Classic hand-tossed round pizza',
    sizes: [
      { name: 'Small', inches: '10"', slices: 6, price: 9.99 },
      { name: 'Medium', inches: '12"', slices: 8, price: 12.99 },
      { name: 'Large', inches: '14"', slices: 10, price: 15.99 },
    ],
  },
  {
    id: 3,
    name: 'Thin Crust',
    description: 'Light and crispy thin crust',
    sizes: [
      { name: 'Small', inches: '10"', slices: 6, price: 9.99 },
      { name: 'Medium', inches: '12"', slices: 8, price: 12.99 },
      { name: 'Large', inches: '14"', slices: 10, price: 15.99 },
    ],
  },
  {
    id: 4,
    name: 'NY Style',
    description: 'Large foldable New York style slices',
    sizes: [
      { name: 'Large', inches: '14"', slices: 8, price: 15.99 },
      { name: 'X-Large', inches: '16"', slices: 10, price: 18.99 },
    ],
  },
  {
    id: 5,
    name: 'Cauliflower',
    description: 'Light cauliflower crust option',
    sizes: [
      { name: 'Small', inches: '10"', slices: 6, price: 12.99 },
    ],
  },
  {
    id: 6,
    name: 'Gluten-Free',
    description: 'Gluten-free crust option',
    sizes: [
      { name: 'Small', inches: '10"', slices: 6, price: 12.99 },
    ],
  },
];

export const turboCrustOptions = [
  { id: 1, name: 'Butter Garlic Romano' },
  { id: 2, name: 'Cajun' },
  { id: 3, name: 'Poppy Seed' },
  { id: 4, name: 'No Turbo Crust' },
];

export const toppingOptions = {
  meats: [
    'Pepperoni',
    'Italian Sausage',
    'Ham',
    'Bacon',
    'Chicken',
    'Beef',
    'Anchovies',
  ],
  vegetables: [
    'Mushrooms',
    'Green Peppers',
    'Onions',
    'Black Olives',
    'Banana Peppers',
    'Jalapeños',
    'Tomatoes',
    'Spinach',
    'Pineapple',
  ],
  cheese: [
    'Extra Cheese',
    'Premium Mozzarella',
    'Feta',
    'Cheddar',
  ],
  sauces: [
    'Jet Sauce',
    'Tomato Sauce',
    'Garlic Butter',
    'BBQ Sauce',
    'Buffalo Sauce',
    'Ranch',
    'No Sauce',
  ],
};

export const bakePreferences = [
  { id: 1, name: 'Regular' },
  { id: 2, name: 'Light' },
  { id: 3, name: 'Well Done' },
];