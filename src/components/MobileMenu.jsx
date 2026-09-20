import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';
import styles from './MobileMenu.module.css';
import { useBookingModal } from '../context/BookingContext';

const MobileMenu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const linksRef = useRef([]);
  const { openModal } = useBookingModal();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(menuRef.current, {
        x: '0%',
        duration: 0.4,
        ease: 'power3.out'
      });

      gsap.fromTo(linksRef.current, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out', delay: 0.1 }
      );
    } else {
      document.body.style.overflow = '';
      
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.3,
        ease: 'power2.in'
      });
      
      gsap.to(menuRef.current, {
        x: '100%',
        duration: 0.3,
        ease: 'power3.in'
      });
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ROOMS', href: '/rooms' },
    { name: 'ABOUT', href: '/about' },
    { name: 'NEARBY PLACES', href: '/nearby-places' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <>
      <div 
        ref={overlayRef}
        className={styles.overlay} 
        onClick={onClose}
      />
      <div ref={menuRef} className={styles.menuContainer}>
        <div className={styles.header}>
          <div className={styles.logo}>FUSION ASIANA</div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
        
        <div className={styles.links}>
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={styles.link}
              onClick={onClose}
              ref={el => linksRef.current[i] = el}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <div className={styles.footer}>
          <button 
            onClick={() => {
              openModal();
              onClose();
            }} 
            className={`pill-button pill-button-navy ${styles.bookBtn}`} 
            style={{ display: 'inline-flex', border: 'none', cursor: 'pointer' }}
          >
            BOOK A ROOM
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
