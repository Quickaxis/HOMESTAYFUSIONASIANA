import React, { useEffect, useRef } from 'react';
import { ArrowRight, Snowflake, ShowerHead, Flame, Box, Wifi } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { roomsData } from '../data/rooms';
import RoomCarousel from './RoomCarousel';
import ImageSlot from './ImageSlot';
import styles from './RoomDetailPage.module.css';
import { useBookingModal } from '../context/BookingContext';

gsap.registerPlugin(ScrollTrigger);

const RoomDetailPage = ({ roomId }) => {
  const room = roomsData.find(r => r.id === roomId);
  const otherRoomId = roomId === 'room-01' ? 'room-02' : 'room-01';
  const otherRoom = roomsData.find(r => r.id === otherRoomId);

  // The amenity data will be provided later.
  // For now, it remains empty so no incorrect amenities are shown.
  // The structure should be: { name: "Amenity Name", icon: <LucideIcon className={styles.amenityIcon} /> }
  const roomAmenities = room.amenities || [];

  const pageRef = useRef(null);
  const infoRef = useRef(null);
  const { openModal } = useBookingModal();
  
  useEffect(() => {
    window.scrollTo(0, 0);

    // Subtle entrance animation
    const tl = gsap.timeline();
    
    tl.fromTo(pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );
    
    if (infoRef.current) {
      tl.fromTo(infoRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.2"
      );
    }
  }, [roomId]);

  if (!room) return <div className={styles.pageWrapper}>Room not found</div>;

  return (
    <div className={styles.pageWrapper} ref={pageRef}>
      {/* Subtle dashed route curve in background */}
      <svg className={styles.bgCurve} viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid slice">
        <path 
          d="M-100,50 C 300,150 600,0 900,100 C 1200,200 1500,50 1800,100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeDasharray="6 6"
        />
      </svg>

      <div className={styles.container}>
        
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <a href="/">Home</a> &gt; <a href="/rooms">Rooms</a> &gt; <span>{room.name}</span>
        </div>

        {/* Main Grid */}
        <div className={styles.grid}>
          
          {/* Left: Carousel */}
          <div>
            <RoomCarousel roomId={room.id} images={room.images} />
          </div>

          {/* Right: Info */}
          <div className={styles.contentCol} ref={infoRef}>
            <div>
              <div className={styles.eyebrow}>OUR ROOMS</div>
              <h1 className={styles.heading}>{room.name}</h1>
              <p className={styles.description}>{room.description}</p>
            </div>

            <div>
              <h3 className={styles.sectionTitle}>Amenities</h3>
              <div className={styles.amenitiesGrid}>
                {roomAmenities.map((amenity, idx) => (
                  <div key={idx} className={styles.amenityItem}>
                    {amenity.icon}
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className={styles.bookingPanel}>
                <div>
                  <div className={styles.priceLabel}>PRICE PER NIGHT</div>
                  <div className={styles.priceValue}>₹{room.price}/-</div>
                </div>
                <button className={styles.bookBtn} onClick={openModal}>
                  BOOK YOUR STAY <ArrowRight size={16} />
                </button>
              </div>
              <div className={styles.subNote}>♡ Couples are Welcome</div>
            </div>
          </div>
        </div>

        {/* Explore Other Room Section */}
        <div className={styles.exploreSection}>
          <div className={styles.exploreSectionTitle}>
            <div className={styles.eyebrow}>OTHER ROOM</div>
            <h2 className={styles.heading} style={{textAlign: 'center', fontSize: '32px'}}>EXPLORE THE OTHER ROOM</h2>
          </div>
          
          <a href={`/rooms/${otherRoom.id}`} className={styles.exploreCard}>
            <div className={styles.exploreImage}>
              <ImageSlot 
                id={otherRoom.images[0]} 
                alt={otherRoom.name}
                aspectRatio="16/10"
                overlay={false}
              />
            </div>
            <div className={styles.exploreInfo}>
              <h4>{otherRoom.name}</h4>
              <p>{otherRoom.description}</p>
            </div>
            <div className={styles.exploreAction}>
              <div className={styles.price}>₹{otherRoom.price}/-</div>
              <div className={styles.viewBtn}>VIEW DETAILS &rarr;</div>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};

export default RoomDetailPage;
