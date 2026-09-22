import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import gsap from 'gsap';
import styles from './Navbar.module.css';
import MobileMenu from './MobileMenu';
import { useBookingModal } from '../context/BookingContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useBookingModal();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion && navRef.current) {
        gsap.from(navRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all'
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <nav ref={navRef} className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navbarInner}>
          <div className={styles.logo}>FUSION ASIANA</div>
          
          <div className={styles.desktopMenu}>
            <a href="/">HOME</a>
            <a href="/rooms">ROOMS</a>
            <a href="/about">ABOUT</a>
            <a href="/nearby-places">NEARBY PLACES</a>
            <a href="/contact">CONTACT</a>
          </div>

          <div className={styles.actions}>
            <button 
              onClick={openModal} 
              className={`pill-button pill-button-white ${styles.bookBtn}`} 
              style={{ display: 'inline-flex', border: 'none', cursor: 'pointer' }}
            >
              BOOK A ROOM
            </button>
            <button 
              className={styles.mobileMenuBtn}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Navbar;
