import React, { useState, useEffect, useRef } from 'react';
import clientsData from '../assets/data/clients.json';
import '../assets/styles/ClientCarousel.scss';

interface Client {
  id: number;
  title: string;
  logo: string;
}

const ClientCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const clients: Client[] = clientsData;
  const totalClients = clients.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Advance index safely around the array limits loop
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === totalClients - 1 ? 0 : prev + 1));
  };

  // Manage automated slide rotations interval
  useEffect(() => {
    if (totalClients < 5) return; // Requires at least 5 items to function properly

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4500); // ⏱️ Rotates fluidly every 4.5 seconds

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [totalClients]);

  if (totalClients < 5) return null;

  // 🧮 Enhanced Modulo Index Offsets for a 5-Card Layout
  const getIndex = (offset: number) => {
    const rawIndex = (activeIndex + offset) % totalClients;
    return rawIndex < 0 ? rawIndex + totalClients : rawIndex;
  };

  // Fetching the 5 sequential active items
  const farLeftItem  = clients[getIndex(-2)];
  const leftItem     = clients[getIndex(-1)];
  const centerItem   = clients[getIndex(0)];
  const rightItem    = clients[getIndex(1)];
  const farRightItem = clients[getIndex(2)];

  return (
    <section id="clients" className="clients-section">
      {/* <h2>Clients I've Worked With</h2>*/}
      {/* <p className="clients-subtitle">Trusted by industry leaders worldwide</p>*/}

      <div className="carousel-view-wrapper" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

         {/* Position 1: Far Left (Smallest and lowest opacity) */}
        <div className="client-slot slot-far-left">
          <img src={farLeftItem.logo} alt={farLeftItem.title} />
          <span className="client-title">{farLeftItem.title}</span>
        </div>

        {/* Position 2: Inner Left (Medium) */}
        <div className="client-slot slot-left">
          <img src={leftItem.logo} alt={leftItem.title} />
          <span className="client-title">{leftItem.title}</span>
        </div>

        {/* 🌟 Position 3: Center Highlight Focus (Largest & full color) */}
        <div className="client-slot slot-center">
          <img src={centerItem.logo} alt={centerItem.title} />
          <span className="client-title">{centerItem.title}</span>
        </div>

        {/* Position 4: Inner Right (Medium) */}
        <div className="client-slot slot-right">
          <img src={rightItem.logo} alt={rightItem.title} />
          <span className="client-title">{rightItem.title}</span>
        </div>

        {/* Position 5: Far Right (Smallest and lowest opacity) */}
        <div className="client-slot slot-far-right">
          <img src={farRightItem.logo} alt={farRightItem.title} />
          <span className="client-title">{farRightItem.title}</span>
        </div>

      </div>

      {/* Manual Indicator Indicator Dots */}
      <div className="carousel-indicators">
        {clients.map((_, index) => (
          <span
            key={index}
            className={`indicator-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientCarousel;
