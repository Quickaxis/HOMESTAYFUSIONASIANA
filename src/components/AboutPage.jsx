import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import styles from './AboutPage.module.css';
import { useBookingModal } from '../context/BookingContext';

const AboutPage = () => {
  const { openModal } = useBookingModal();
  const pageRef = useRef(null);

  useEffect(() => {
    // Scroll to top instantly
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // SEO updates
    document.title = "About Fusion Asiana | A Homely Stay in Dibrugarh";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Fusion Asiana is a thoughtfully designed homestay in Chowkidingee, Dibrugarh, created for guests who want the comfort of a home while staying close to the city.");
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      // Hero animations
      gsap.from('.hero-anim', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });

      // Story section
      gsap.from('.story-text', {
        scrollTrigger: {
          trigger: `.${styles.storySection}`,
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });

      // Value cards
      gsap.from('.value-card', {
        scrollTrigger: {
          trigger: `.${styles.valuesSection}`,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Location section
      gsap.from('.location-anim', {
        scrollTrigger: {
          trigger: `.${styles.locationSection}`,
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });

      // CTA section
      gsap.from('.cta-anim', {
        scrollTrigger: {
          trigger: `.${styles.ctaSection}`,
          start: 'top 90%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.aboutPage} ref={pageRef}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} section-container`}>
        <div className={styles.heroGrid}>
          <div className={styles.heroLeft}>
            <span className={`eyebrow hero-anim ${styles.eyebrow}`}>ABOUT FUSION ASIANA</span>
            <h1 className={`hero-anim ${styles.mainHeading}`}>
              A HOMELY STAY,<br />
              RIGHT IN THE HEART<br />
              OF DIBRUGARH.
            </h1>
            <p className={`hero-anim ${styles.heroText}`}>
              Fusion Asiana is a thoughtfully designed homestay in Chowkidingee, Dibrugarh, created for guests who want the comfort of a home while staying close to the city.
            </p>
          </div>
          
          <div className={`hero-anim ${styles.heroDecoration}`}>
            <span className={styles.largeOutlineText}>FUSION</span>
            <span className={styles.largeOutlineText}>ASIANA</span>
          </div>
        </div>
      </section>

      {/* About Story */}
      <section className={`${styles.storySection} section-container`}>
        <div className={styles.storyGrid}>
          <div className={styles.storyLeft}>
            <span className={`eyebrow story-text ${styles.eyebrow}`}>MORE THAN A PLACE TO STAY</span>
            <h2 className={`story-text ${styles.storyHeading}`}>
              A PLACE THAT FEELS LIKE HOME.
            </h2>
          </div>
          <div className={styles.storyRight}>
            <p className="story-text">
              Fusion Asiana is a thoughtfully designed homestay in Chowkidingee, Dibrugarh, created for guests who want the comfort of a home while staying close to the city.
            </p>
            <p className="story-text">
              From comfortable rooms and everyday essentials to a convenient location, every part of the stay is designed around simplicity, comfort and a welcoming atmosphere.
            </p>
            <p className="story-text">
              Whether you're visiting Dibrugarh for a short stay, travelling with family, or simply looking for a comfortable place to call home for a few days, Fusion Asiana gives you a relaxed base from which to experience the city.
            </p>
          </div>
        </div>
      </section>

      {/* Three Core Values */}
      <section className={`${styles.valuesSection} section-container`}>
        <div className={styles.valuesHeader}>
          <span className={`eyebrow ${styles.eyebrow}`}>THE FUSION ASIANA EXPERIENCE</span>
          <h2 className={styles.valuesHeading}>SIMPLE THINGS.<br/>DONE THOUGHTFULLY.</h2>
        </div>
        
        <div className={styles.valuesGrid}>
          <div className={`value-card ${styles.valueCard}`}>
            <span className={styles.cardNumber}>01</span>
            <h3 className={styles.cardTitle}>COMFORT</h3>
            <p className={styles.cardText}>Thoughtfully arranged spaces designed for a relaxed stay.</p>
          </div>
          
          <div className={`value-card ${styles.valueCard}`}>
            <span className={styles.cardNumber}>02</span>
            <h3 className={styles.cardTitle}>CONVENIENCE</h3>
            <p className={styles.cardText}>A practical location in Chowkidingee, Dibrugarh.</p>
          </div>
          
          <div className={`value-card ${styles.valueCard}`}>
            <span className={styles.cardNumber}>03</span>
            <h3 className={styles.cardTitle}>HOMELY</h3>
            <p className={styles.cardText}>The warmth and ease of a home, with the essentials you need.</p>
          </div>
        </div>
      </section>

      {/* Location Story */}
      <section className={`${styles.locationSection} section-container`}>
        <div className={styles.locationGrid}>
          <div className={styles.locationContent}>
            <span className={`eyebrow location-anim ${styles.eyebrow}`}>IN THE HEART OF DIBRUGARH</span>
            <h2 className={`location-anim ${styles.locationHeading}`}>
              STAY CLOSE TO THE CITY.
            </h2>
            <p className={`location-anim ${styles.locationText}`}>
              Located in Chowkidingee, Fusion Asiana offers a convenient base for experiencing Dibrugarh while returning to a comfortable and welcoming space at the end of the day.
            </p>
          </div>
          
          <div className={`location-anim ${styles.locationDecoration}`}>
            <span className={styles.largeOutlineTextLocation}>DIBRUGARH</span>
            <span className={styles.smallSolidTextLocation}>ASSAM, INDIA</span>
          </div>
        </div>
      </section>

      {/* Rooms CTA */}
      <section className={`${styles.ctaSection} section-container`}>
        <div className={styles.ctaBox}>
          <span className={`eyebrow cta-anim ${styles.ctaEyebrow}`}>READY TO STAY?</span>
          <h2 className={`cta-anim ${styles.ctaHeading}`}>FIND YOUR ROOM.</h2>
          <p className={`cta-anim ${styles.ctaText}`}>
            Explore the rooms at Fusion Asiana and find the space that suits your stay.
          </p>
          <div className={`cta-anim ${styles.ctaButtons}`}>
            <a href="/rooms" className={`pill-button pill-button-navy ${styles.exploreBtn}`}>
              EXPLORE OUR ROOMS <ArrowRight size={18} />
            </a>
            <button onClick={openModal} className={`pill-button pill-button-white ${styles.bookBtn}`}>
              BOOK YOUR STAY <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
