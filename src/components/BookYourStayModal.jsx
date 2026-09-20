import React, { useEffect, useRef } from 'react';
import { X, MessageCircle, Phone } from 'lucide-react';
import { useBookingModal } from '../context/BookingContext';
import styles from './BookYourStayModal.module.css';

const BookYourStayModal = () => {
  const { isModalOpen, closeModal } = useBookingModal();
  const modalRef = useRef(null);
  
  // WhatsApp and Phone
  const WHATSAPP_NUMBER = '919954587204';
  const PHONE_NUMBER = '+919954587204';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Optional: shift focus to modal here
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, closeModal]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isModalOpen) return null;

  return (
    <div 
      className={styles.backdrop} 
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className={styles.modal} ref={modalRef}>
        <button 
          className={styles.closeBtn} 
          onClick={closeModal}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        
        <h2 id="booking-modal-title" className={styles.title}>
          BOOK YOUR STAY
        </h2>
        <p className={styles.subtitle}>
          Bookings are available 24×7
        </p>
        <p className={styles.scheduleText}>
          Bookings over Call & WhatsApp: 9:00 AM to 9:00 PM only.
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.bookNowBtn}>
            BOOK NOW
          </button>
          
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.whatsappBtn}
          >
            <MessageCircle size={18} /> MESSAGE ON WHATSAPP
          </a>
          
          <a 
            href={`tel:${PHONE_NUMBER}`} 
            className={styles.callBtn}
          >
            <div className={styles.callContent}>
              <Phone size={18} /> CALL US
            </div>
            <span className={styles.callSubtext}>(9:00 AM to 9:00 PM only)</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookYourStayModal;
