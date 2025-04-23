'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const Card = ({
  title,
  description,
  imageSrc,
  altText,
  lastUpdated,
  isCurrent,
  offset,
  zIndex,
  opacity,
  scale
}) => {
  return (
    <div
      className="card"
      style={{
        maxWidth: '970px',
        width: '100%',
        height: '450px',
        backgroundColor: '#1E1E1E',
        borderRadius: '10px',
        position: 'absolute',
        top: `${offset}px`,
        left: '50%',
        transform: `translateX(-50%) scale(${scale})`,
        opacity: opacity,
        zIndex: zIndex,
        transition: 'transform 0.3s, opacity 0.3s',
      }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <div className="card-body" style={{ padding: '20px' }}>
            <h5 className="card-title text-white" style={{ fontSize: '2rem' }}>{title}</h5>
            <p className="card-text text-light">{description}</p>
            <p className="card-text">
              <small className="text-muted">{lastUpdated}</small>
            </p>
          </div>
        </div>
        <div className="col-md-8">
          <Image
            src={imageSrc}
            alt={altText}
            width={630}
            height={450}
            className="img-fluid rounded-end"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);

  const images = [
    {
      title: "Zuma Agency Branding",
      description: "A modern branding guide featuring a unique logo and professional imagery.",
      imageSrc: "/image 9.png",
      altText: "Zuma Agency Branding",
      lastUpdated: "Last updated 5 mins ago",
    },
    {
      title: "Geometry Portfolio",
      description: "A sleek portfolio showcasing digital art and geometric designs.",
      imageSrc: "/image 10.png",
      altText: "Geometry Portfolio",
      lastUpdated: "Last updated 3 mins ago",
    },
    {
      title: "Mails Manager Mobile UI",
      description: "A mobile UI design for an email management app from 2023.",
      imageSrc: "/image 11.png",
      altText: "Mails Manager Mobile UI",
      lastUpdated: "Last updated 2 mins ago",
    },
    {
      title: "Owca Furniture",
      description: "A creative display of furniture design with a dog companion.",
      imageSrc: "/image 12.png",
      altText: "Owca Furniture",
      lastUpdated: "Last updated 1 min ago",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const cardHeight = 450;
      const newIndex = Math.floor(scrollPosition / cardHeight);
      setCurrentImageIndex(newIndex < 0 ? 0 : Math.min(newIndex, images.length - 1));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [images.length]);

  return (
    <div
      ref={containerRef}
      className="container mt-5"
      style={{
        height: '700px',
        overflowY: 'auto',
        position: 'relative',
        padding: '20px',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <style jsx>{`
        .container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div style={{ height: `${images.length * 450}px`, position: 'relative' }}>
        {images.map((image, index) => {
          const offset = index * 450;  // Stacking offset
          const isCurrent = index === currentImageIndex;
          const isPrevious = index < currentImageIndex;
          const zIndex = isCurrent ? 10 : isPrevious ? 5 : 1;  // Bring current card to front
          const opacity = isCurrent ? 1 : isPrevious ? 0.8 : 0.6;  // Adjust opacity based on position
          const scale = isCurrent ? 1 : isPrevious ? 0.95 : 0.9;  // Scale previous cards smaller

          return (
            <Card
              key={index}
              title={image.title}
              description={image.description}
              imageSrc={image.imageSrc}
              altText={image.altText}
              lastUpdated={image.lastUpdated}
              offset={offset}
              isCurrent={isCurrent}
              zIndex={zIndex}
              opacity={opacity}
              scale={scale}
            />
          );
        })}
      </div>
    </div>
  );
}
