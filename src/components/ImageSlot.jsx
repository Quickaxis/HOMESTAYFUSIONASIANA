import React from 'react';
import { ImageIcon } from 'lucide-react';
import styles from './ImageSlot.module.css';

/**
 * ImageSlot Component
 * 
 * Reusable image component that acts as a placeholder if no src is provided.
 * 
 * @param {string} id - Unique ID for the slot (e.g., 'room-01')
 * @param {string} src - Image source (empty string triggers placeholder)
 * @param {string} alt - Alt text for SEO and accessibility
 * @param {string} aspectRatio - CSS aspect ratio (e.g., '16/9', '4/5')
 * @param {string} objectPosition - CSS object-position (e.g., 'center', 'top')
 * @param {boolean} lazy - Enable lazy loading
 * @param {boolean} overlay - Add a dark gradient overlay
 * @param {boolean} minimalPlaceholder - If true, hides the text and icon from the placeholder
 * @param {string} className - Additional CSS classes
 */
const ImageSlot = ({
  id,
  src = '',
  alt = 'Fusion Asiana image',
  aspectRatio = 'auto',
  objectPosition = 'center',
  lazy = true,
  overlay = false,
  minimalPlaceholder = false,
  className = '',
  style = {}
}) => {
  const containerStyle = {
    aspectRatio,
    ...style
  };

  const imageMap = {
    'room-01': '/images/pinkroom1.webp',
    'room-01-image-01': '/images/pinkroom1.webp',
    'room-01-image-02': '/images/pinkroom2.webp',
    'room-01-image-03': '/images/pinkroom3.webp',
    'room-01-image-04': '/images/pinkroom4.webp',
    'room-02': '/images/luxuryroom1.webp',
    'room-02-image-01': '/images/luxuryroom1.webp',
    'room-02-image-02': '/images/luxuryroom2.webp',
    'room-02-image-03': '/images/luxuryroom3.webp',
    'room-02-image-04': '/images/luxuryroom4.webp',
    'room-02-image-05': '/images/luxuryroom5.webp',
    'review-01': '/images/reveiew1.webp',
    'review-02': '/images/reveiew2.webp',
    'review-03': '/images/reveiew3.webp'
  };

  const finalSrc = src || imageMap[id] || '';

  if (!finalSrc) {
    return (
      <div 
        className={`${styles.placeholder} ${className}`} 
        style={containerStyle}
        data-slot-id={id}
      >
        {!minimalPlaceholder && (
          <div className={styles.placeholderContent}>
            <ImageIcon size={32} opacity={0.5} />
            <span className={styles.placeholderText}>IMAGE SLOT — {id.toUpperCase()}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`${styles.imageContainer} ${className}`} style={containerStyle}>
      <img
        src={finalSrc}
        alt={alt}
        className={styles.image}
        style={{ objectPosition }}
        loading={lazy ? 'lazy' : 'eager'}
      />
      {overlay && <div className={styles.overlay}></div>}
    </div>
  );
};

export default ImageSlot;
