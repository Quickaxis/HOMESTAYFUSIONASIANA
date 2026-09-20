import React, { useRef } from 'react';
import { galleryData } from '../data/gallery';
import ImageSlot from './ImageSlot';
import styles from './GallerySection.module.css';

const GalleryCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <ImageSlot
          id={item.imageSlot}
          src={item.src}
          alt={item.alt}
          aspectRatio="3/4"
          overlay={true}
        />
      </div>
    </div>
  );
};

const GallerySection = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className={styles.section}>
      <div className="section-container">
        <div className={styles.header}>
          <span className="eyebrow">FROM FUSION ASIANA</span>
          <h2 className={styles.heading}>A GLIMPSE OF YOUR STAY</h2>
        </div>
      </div>
      
      <div className={styles.galleryTrackWrapper}>
        <div className={styles.galleryTrack}>
          <div className={styles.carouselSet}>
            {galleryData.map(item => (
              <GalleryCard key={`set1-${item.id}`} item={item} />
            ))}
          </div>
          <div className={styles.carouselSet}>
            {galleryData.map(item => (
              <GalleryCard key={`set2-${item.id}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
