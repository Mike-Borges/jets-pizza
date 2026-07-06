# Jet's Pizza Redesign

A full redesign of the Jet's Pizza website, replacing the existing LOKE ordering system with a custom-built ordering experience. Built with a focus on better UX, cleaner UI, and a more intuitive menu browsing and customization flow.

---

## Tech Stack

- **React** — component-based UI
- **TypeScript** — type safety throughout
- **Vite** — fast dev server and build tool
- **React Router** — client-side routing with dynamic slug-based routes
- **CSS Modules** — scoped component styles
- **Node.js / Express** — backend (in progress)
- **MongoDB** — database (in progress)

---

## Features

- 🍕 **Full Menu Page** — browsable menu with sticky nav, intersection observer-based active category tracking, and smooth scroll to sections
- 🛠 **Customize Page** — full-page item customization at `/menu/customize/:slug` with dynamic routing
- 🧭 **Menu Navigation** — top-level category nav + pizza sub-nav (Crust Styles, Jet's Exclusives, Specialty, Featured Deals)
- 🎛 **Smart Customization Flow** — crust must be selected before other options appear; no pre-selected radio buttons
- 🖼 **Left/Right Layout** — image + item info on the left, scrollable options on the right, sticky ADD footer
- 🏠 **Half & Half** — banner at the bottom of the left column for half & half orders
- 📍 **Location Modal** — location selector in the header
- 💚 **Featured Deals** — deals section at the top of the pizza section
- 📱 **Responsive** — media queries for various screen sizes

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/Mike-Borges/jets-pizza.git

# Navigate into the project
cd jets-pizza

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

---

## Project Structure

```
src/
├── assets/          # Images, SVGs, fonts
├── components/      # Reusable components
│   ├── Header/
│   ├── Footer/
│   ├── MenuNav/
│   ├── PizzaNav/
│   ├── MenuCard/
│   ├── MenuCardCustomize/
│   └── LocationModal/
├── data/            # Static data files
│   ├── menuData.ts
│   └── pizzaData.ts
├── pages/           # Page-level components
│   ├── Home/
│   ├── Menu/
│   └── Customize/
├── App.tsx
├── main.tsx
└── index.css
```

---

## Routes

| Path                    | Component       | Description             |
| ----------------------- | --------------- | ----------------------- |
| `/`                     | `Home`          | Landing page            |
| `/menu`                 | `Menu`          | Full menu page          |
| `/menu/customize/:slug` | `CustomizePage` | Item customization page |

---

## Data

Menu items are stored in `src/data/menuData.ts` and exported by category:

- `pizzas` — specialty pizzas
- `exclusives` — 4 & 8 Corner Pizza
- `crusts` — crust styles
- `vegan` / `vegetarian` / `glutenFree` — dietary options
- `sidekicks` — wings, bread, hot slices
- `salads` / `calzones` / `drinks` / `desserts`
- `deals` — featured deals

Each item has a `slug` generated via `toSlug(name)` for dynamic routing.

---

## License

This project is a redesign built for Jet's Pizza. All Jet's Pizza branding, logos, and trademarks belong to their respective owners.
