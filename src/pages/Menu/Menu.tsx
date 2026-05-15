// Menu.tsx
import { useState } from 'react';
import Header from '../../components/Header/Header';
import MenuNav from '../../components/MenuNav/MenuNav';
import Pizza from '../../components/MenuSections/Pizza/Pizza';
import Sidekicks from '../../components/MenuSections/Sidekicks/Sidekicks';
import Salads from '../../components/MenuSections/Salads/Salads';
import Calzones from '../../components/MenuSections/Calzones/Calzones';
import Drinks from '../../components/MenuSections/Drinks/Drinks';
import Desserts from '../../components/MenuSections/Desserts/Desserts';
import styles from './Menu.module.css';

export default function Menu() {
  const [active, setActive] = useState('Pizza');

  return (
    <div className={styles.menu}>
      <Header />
      <MenuNav active={active} setActive={setActive} />
      {active === 'Pizza' && <Pizza />}
      {active === 'Sidekicks' && <Sidekicks />}
      {active === 'Salads' && <Salads />}
      {active === 'Calzones' && <Calzones />}
      {active === 'Drinks' && <Drinks />}
      {active === 'Desserts' && <Desserts />}
    </div>
  );
}