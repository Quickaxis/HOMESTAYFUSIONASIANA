import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.phone) {
      // Fake success state for now
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: '', phone: '', email: '', message: '' });
      }, 5000);
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={`section-container ${styles.container}`}>
        
        <div className={styles.topContent}>
          <span className={styles.eyebrow}>SAY HELLO</span>
          <h2 className={styles.heading}>TALK TO US</h2>
          <p className={styles.supportingText}>
            Planning your stay in Dibrugarh? Have a question about our rooms, amenities, location, or booking? We’re here to help.
          </p>
        </div>

        <div className={styles.grid}>
          
          {/* Left Column: Contact Cards */}
          <div className={styles.leftCol}>
            
            <a href="tel:+919954587204" className={styles.contactCard}>
              <div className={styles.iconWrapper}>
                <Phone size={24} />
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardEyebrow}>CALL US</span>
                <span className={styles.cardMain}>+91 99545 87204</span>
                <span className={styles.cardSub}>9:00 AM – 9:00 PM</span>
              </div>
            </a>

            <a 
              href="https://wa.me/919954587204" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactCard}
            >
              <div className={styles.iconWrapper}>
                <MessageCircle size={24} />
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardEyebrow}>WHATSAPP</span>
                <span className={styles.cardMain}>Chat with Fusion Asiana</span>
                <span className={styles.cardSub}>Fastest way to reach us</span>
              </div>
            </a>

            <a 
              href="https://www.instagram.com/home_by_fusion_asiana/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactCard}
            >
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardEyebrow}>INSTAGRAM</span>
                <span className={styles.cardMain}>@home_by_fusion_asiana</span>
                <span className={styles.cardSub}>See more from Fusion Asiana</span>
              </div>
            </a>

            <div className={styles.locationCard}>
              <div className={styles.iconWrapper}>
                <MapPin size={24} />
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardEyebrow}>FIND US</span>
                <span className={styles.cardMain}>Chowkidingee, Dibrugarh, Assam</span>
                <span className={styles.cardSub}>A convenient location in the heart of Dibrugarh.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className={styles.rightCol}>
            <div className={styles.formCard}>
              <span className={styles.formEyebrow}>YOUR DETAILS</span>
              
              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>Thank You!</h3>
                  <p>Your enquiry has been received. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">YOUR NAME</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Full name" 
                      required 
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="phone">PHONE / WHATSAPP</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="+91 ..." 
                      required 
                      value={formState.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="email">EMAIL <span className={styles.optional}>(Optional)</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="you@email.com" 
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="message">TELL US ABOUT YOUR STAY</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your stay, preferred dates, number of guests, or anything you would like to know..." 
                      rows="4"
                      value={formState.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    SEND ENQUIRY &rarr;
                  </button>
                  <p className={styles.formNote}>
                    Your enquiry goes directly to Fusion Asiana. We’ll get back to you as soon as possible.
                  </p>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
