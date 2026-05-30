import { useParams, useNavigate } from 'react-router-dom';
import { getItemBySlug } from '../../data/menuData';
import MenuCardCustomize from '../../components/MenuCardCustomize/MenuCardCustomize';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './CustomizePage.module.css';

export default function CustomizePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const item = slug ? getItemBySlug(slug) : null;

  if (!item) {
    return (
      <>
        <Header />
        <div className={styles.notFound}>
          <p>Item not found.</p>
          <button onClick={() => navigate('/menu')}>Back to Menu</button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.main}>
        <MenuCardCustomize
          name={item.name}
          image={item.image}
          type={item.type}
          onClose={() => navigate('/menu')}
        />
      </main>
      <Footer />
    </div>
  );
}