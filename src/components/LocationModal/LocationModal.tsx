import styles from './LocationModal.module.css';

interface LocationModalProps {
  onClose: () => void;
}

export default function LocationModal({ onClose }: LocationModalProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.modalHeaderLeft}>
            <span className={styles.modalHeaderPin}>📍</span>
            <span className={styles.modalHeaderTitle}>MY JET'S:</span>
            <span className={styles.modalHeaderAddress}>2306 S Colorado Blvd</span>
          </div>
          <button className={styles.modalCloseBtn} onClick={onClose}>✕</button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.modalSearch}>
            <div className={styles.modalSearchInput}>
              <span className={styles.modalSearchPin}>📍</span>
              <input type="text" placeholder="Search by city, state, or zip" className={styles.modalSearchText} />
            </div>
            <button className={styles.modalSearchBtn}>🔍</button>
          </div>

          <div className={styles.modalContent}>
            <div className={styles.modalLeft}>
              <h2 className={styles.modalNearestTitle}>Nearest To You</h2>
              <div className={styles.modalStore}>
                <h3 className={styles.modalStoreName}>2306 S Colorado Blvd</h3>
                <p className={styles.modalStoreDesc}>"University Park - Colorado Boulevard and Iliff"</p>
                <p className={styles.modalStoreCity}>Denver, CO 80222 (CO-007)</p>
                <p className={styles.modalStoreHours}>Open Today Until <span>10:00 PM MDT</span></p>
                <div className={styles.modalStoreLinks}>
                  <a href="#" className={styles.modalStoreLink}>Get Directions</a>
                  <a href="#" className={styles.modalStoreLink}>Store Details</a>
                </div>
                <button className={styles.modalApplyBtn}>Apply to Work at This Store</button>
              </div>
            </div>

            <div className={styles.modalRight}>
              <div className={styles.modalActions}>
                <button className={styles.modalDirectionsBtn}>
                  <span>📍</span> Get Directions
                </button>
                <button className={styles.modalOrderBtn}>Order Online</button>
                <button className={styles.modalPhoneBtn}>
                  <span>📞</span> (303) 757-5387
                </button>
                <button className={styles.modalTextBtn}>Text to Order</button>
                <p className={styles.modalTextNote}>Text your order to get 15% off menu-priced pizza</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.modalFooterClose} onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}