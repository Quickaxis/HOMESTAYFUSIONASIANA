import React from 'react';
import { ArrowRight } from 'lucide-react';
import { businessesData } from '../data/businesses';
import ImageSlot from './ImageSlot';
import styles from './OtherBusinesses.module.css';

const BusinessCard = ({ business }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <ImageSlot
          id={business.imageSlot}
          src={business.src}
          alt={business.alt}
          aspectRatio="1/1"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{business.name}</h3>
        <p className={styles.desc}>{business.description}</p>
        <button className={styles.exploreBtn}>
          EXPLORE <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

const OtherBusinesses = () => {
  return (
    <section className={styles.section}>
      <div className={`section-container ${styles.container}`}>
        <div className={styles.header}>
          <span className="eyebrow">OUR OTHER BUSINESSES</span>
        </div>
        
        <div className={styles.grid}>
          {businessesData.map(business => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherBusinesses;
