import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`section-container ${styles.container}`}>
        
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>FUSION ASIANA</div>
            <p className={styles.description}>
              Fusion Asiana is a comfortable, professionally managed homestay in Chowkidingee, Dibrugarh.
            </p>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4>EXPLORE</h4>
              <a href="/">Home</a>
              <a href="/rooms">Rooms</a>
              <a href="/#nearby">Nearby Places</a>
              <a href="/#faq">FAQ</a>
              <a href="/#about">About Us</a>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>COMPANY</h4>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms & Conditions</a>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>TALK TO US</h4>
              <a href="tel:+919954587204">+91 99545 87204</a>
              <a href="mailto:hello@fusionasiana.com">Email</a>
              <a href="https://wa.me/919954587204" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="https://www.instagram.com/home_by_fusion_asiana/" target="_blank" rel="noopener noreferrer">@home_by_fusion_asiana</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Fusion Asiana. All rights reserved.
          </div>
          <div className={styles.location}>
            Dibrugarh • Assam
          </div>
        </div>
        
      </div>
      
      {/* Decorative Background Element */}
      <div className={styles.decorativeBg}>FA</div>
    </footer>
  );
};

export default Footer;
