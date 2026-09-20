import React, { useState, useEffect, useRef, useCallback } from 'react';
import ImageSlot from './ImageSlot';
import styles from './TravellerReviews.module.css';

const LeftArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const RightArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const REVIEWS = [
  { id: 'review-01' },
  { id: 'review-02' },
  { id: 'review-03' }
];

const TravellerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const trackRef = useRef(null);
  const autoplayTimer = useRef(null);

  // We add clones to the start and end to create the infinite loop effect.
  // [Clone 06, 01, 02, 03, 04, 05, 06, Clone 01]
  const renderedReviews = [
    REVIEWS[REVIEWS.length - 1],
    ...REVIEWS,
    REVIEWS[0]
  ];

  const totalRealSlides = REVIEWS.length;

  const nextReview = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
    resetAutoplay();
  }, [isTransitioning]);

  const prevReview = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
    resetAutoplay();
  }, [isTransitioning]);

  const resetAutoplay = useCallback(() => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }
    autoplayTimer.current = setInterval(() => {
      if (!isDragging) {
        nextReview();
      }
    }, 5500);
  }, [nextReview, isDragging]);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [resetAutoplay]);

  // Handle the seamless snap when we reach the clones
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(totalRealSlides);
    } else if (currentIndex === totalRealSlides + 1) {
      setCurrentIndex(1);
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
    setDragOffset(0);
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    touchEndX.current = e.targetTouches[0].clientX;
    const diff = touchEndX.current - touchStartX.current;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const distance = touchEndX.current - touchStartX.current;
    const swipeThreshold = 50;

    if (distance > swipeThreshold) {
      prevReview();
    } else if (distance < -swipeThreshold) {
      nextReview();
    }
    
    setDragOffset(0);
    resetAutoplay();
  };

  // Determine current active dot (0-indexed based on real slides)
  let activeDotIndex = currentIndex - 1;
  if (activeDotIndex === -1) activeDotIndex = totalRealSlides - 1;
  if (activeDotIndex === totalRealSlides) activeDotIndex = 0;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>FROM OUR GUESTS</span>
            <h2 className={styles.heading}>STAY STORIES</h2>
          </div>
          
          <div className={styles.controls}>
            <button 
              className={styles.arrowBtn} 
              onClick={prevReview}
              aria-label="Previous review"
            >
              <LeftArrowIcon />
            </button>
            <button 
              className={styles.arrowBtn} 
              onClick={nextReview}
              aria-label="Next review"
            >
              <RightArrowIcon />
            </button>
          </div>
        </div>

        <div 
          className={styles.carouselViewport}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className={styles.carouselTrack}
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translate3d(calc(-${currentIndex} * var(--slide-width, 100%) + ${dragOffset}px), 0, 0)`,
              transition: isTransitioning && !isDragging ? 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'none',
            }}
          >
            {renderedReviews.map((review, index) => (
              <div 
                key={`${review.id}-${index}`} 
                className={styles.cardSlot}
              >
                <div className={styles.innerCard}>
                  <div className={styles.imageFrame}>
                    <ImageSlot
                      id={review.id}
                      alt={`Traveller ${review.id}`}
                      aspectRatio="1.65/1"
                      overlay={false}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.pagination}>
          {REVIEWS.map((_, index) => (
            <div 
              key={index} 
              className={`${styles.dot} ${index === activeDotIndex ? styles.dotActive : ''}`} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TravellerReviews;
