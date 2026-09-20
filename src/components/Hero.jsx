import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css';

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Initial text reveal animation
    const tl = gsap.timeline();
    
    tl.fromTo(textRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.imageWrapper} data-hero-image>
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/heromobile.webp" />
          <img 
            src="/images/heropc.webp" 
            alt="Fusion Asiana in Chowkidingee, Dibrugarh" 
            className={styles.heroImage}
            fetchpriority="high"
            loading="eager"
            decoding="sync"
          />
        </picture>
        <div className={styles.imageOverlay}></div>
      </div>
      
      <div className={styles.contentOverlay}>
        <div className={styles.textContainer} ref={textRef}>
          <div className={styles.animWrapper}>
            <p className={styles.location}>HOME BY</p>
          </div>
          <div className={styles.animWrapper}>
            <h1 className={styles.titleForeground}>FUSION ASIANA</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
