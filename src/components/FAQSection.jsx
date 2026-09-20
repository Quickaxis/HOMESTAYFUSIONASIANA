import React, { useState, useRef, useEffect } from 'react';
import { Plus, X } from 'lucide-react';
import gsap from 'gsap';
import { faqData } from '../data/faq';
import styles from './FAQSection.module.css';

const FAQItem = ({ faq, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        duration: 0.4,
        ease: 'power2.out'
      });
      gsap.to(contentRef.current, {
        opacity: 1,
        duration: 0.3,
        delay: 0.1,
        ease: 'power2.out'
      });
    } else {
      gsap.to(contentRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in'
      });
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.4,
        ease: 'power2.inOut'
      });
    }
  }, [isOpen]);

  return (
    <div className={styles.faqItem}>
      <button 
        className={styles.faqQuestionBtn} 
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className={styles.questionText}>{faq.question}</h3>
        <div className={`${styles.iconWrapper} ${isOpen ? styles.iconOpen : ''}`}>
          {isOpen ? <X size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <div 
        ref={contentRef} 
        className={styles.faqAnswerWrapper}
        style={{ height: 0, opacity: 0, overflow: 'hidden' }}
      >
        <p className={styles.answerText}>{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="faq" className={styles.section}>
      <div className={`section-container ${styles.container}`}>
        
        <div className={styles.leftCol}>
          <span className="eyebrow">BEFORE YOU STAY</span>
          <h2 className={styles.heading}>THE QUESTIONS EVERYONE ASKS US</h2>
          <p className={styles.supportingText}>
            Give guests straightforward answers before booking.
          </p>
          
          <div className={styles.actionButtons}>
            <button className="pill-button pill-button-navy">
              ASK US ANYTHING
            </button>
            <a 
              href="https://wa.me/919954587204" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`pill-button ${styles.outlineBtn}`}
              style={{textDecoration: 'none', display: 'inline-flex'}}
            >
              WHATSAPP US
            </a>
          </div>
        </div>
        
        <div className={styles.rightCol}>
          <div className={styles.accordion}>
            {faqData.map((faq) => (
              <FAQItem 
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FAQSection;
