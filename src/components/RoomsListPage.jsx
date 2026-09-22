import React, { useEffect, useRef } from 'react';
import { ArrowRight, Users } from 'lucide-react';
import gsap from 'gsap';
import { roomsData } from '../data/rooms';
import ImageSlot from './ImageSlot';
import SEO from './SEO';
import styles from './RoomsListPage.module.css';

const RoomsListPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline();
    tl.fromTo(pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  return (
    <div className={styles.pageWrapper} ref={pageRef}>
      <SEO 
        title="Rooms at Fusion Asiana | Homestay in Dibrugarh"
        description="Explore the rooms at Fusion Asiana in Chowkidingee, Dibrugarh. Discover comfortable accommodation and essential amenities for your stay."
        path="/rooms"
      />
      <div className={styles.container}>
        
        <div className={styles.header}>
          <span className={styles.eyebrow}>OUR ROOMS</span>
          <h1 className={styles.heading}>A Comfortable Stay<br/>in the Heart of Dibrugarh</h1>
        </div>

        <div className={styles.roomsGrid}>
          {roomsData.map(room => (
            <a key={room.id} href={`/rooms/${room.id}`} className={styles.roomCard}>
              <div className={styles.imageWrapper}>
                <ImageSlot 
                  id={room.images[0]} 
                  alt={`${room.name} at Fusion Asiana Homestay in Dibrugarh`}
                  aspectRatio="16/10"
                  overlay={false}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.roomName}>{room.name}</h3>
                <p className={styles.roomDesc}>{room.description}</p>
                
                <div className={styles.detailsRow}>
                  <div className={styles.guestCount}>
                    <Users size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} />
                    {room.capacity}
                  </div>
                  <div className={styles.price}>₹{room.price}/-</div>
                </div>

                <div className={styles.viewBtn}>
                  VIEW ROOM / DETAILS
                  <ArrowRight size={20} />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RoomsListPage;
