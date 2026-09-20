import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoomSection from './components/RoomSection';
import NearbyPlacesSection from './components/NearbyPlacesSection';
import FAQSection from './components/FAQSection';
import WhyChooseUs from './components/WhyChooseUs';
import TravellerReviews from './components/TravellerReviews';
import BookingCTA from './components/BookingCTA';
import ContactPage from './components/ContactPage';
import GallerySection from './components/GallerySection';
import OtherBusinesses from './components/OtherBusinesses';
import Footer from './components/Footer';
import RoomDetailPage from './components/RoomDetailPage';
import RoomsListPage from './components/RoomsListPage';
import { BookingProvider } from './context/BookingContext';
import BookYourStayModal from './components/BookYourStayModal';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Intercept local links to use History API
  useEffect(() => {
    const handleLinkClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.href && target.href.startsWith(window.location.origin) && !target.getAttribute('target')) {
        const url = new URL(target.href);
        // If it's just a hash link on the same path, let default behavior handle it (scroll)
        if (url.pathname === window.location.pathname && url.hash) {
          return;
        }
        
        e.preventDefault();
        window.history.pushState({}, '', url.pathname + url.search + url.hash);
        setCurrentPath(url.pathname);
        window.scrollTo(0, 0);
        
        // Handle hash scrolling if navigating to a new page with a hash
        if (url.hash) {
          setTimeout(() => {
            const el = document.querySelector(url.hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  const isRoomDetailPage = currentPath.startsWith('/rooms/') && currentPath.length > 7;
  const isRoomsListPage = currentPath === '/rooms' || currentPath === '/rooms/';
  const isContactPage = currentPath === '/contact' || currentPath === '/contact/';
  const roomId = isRoomDetailPage ? currentPath.split('/').pop() : null;

  return (
    <BookingProvider>
      <div className="texture-bg"></div>
      <Navbar />
      
      {(!isRoomDetailPage && !isRoomsListPage && !isContactPage) && <Hero />}
      
      <main className={`content-layer ${(!isRoomDetailPage && !isRoomsListPage && !isContactPage) ? 'homepage-layer' : ''}`}>
        {isRoomDetailPage ? (
          <RoomDetailPage roomId={roomId} />
        ) : isRoomsListPage ? (
          <RoomsListPage />
        ) : isContactPage ? (
          <ContactPage />
        ) : (
          <>
            <RoomSection />
            <NearbyPlacesSection />
            <FAQSection />
            <WhyChooseUs />
            <TravellerReviews />
            <BookingCTA />
            <GallerySection />
            <OtherBusinesses />
          </>
        )}
        <Footer />
      </main>
      
      <BookYourStayModal />
    </BookingProvider>
  );
}

export default App;
