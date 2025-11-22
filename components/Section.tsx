import React, { useEffect, useRef, useState } from 'react';
import { SectionProps } from '../types';

export const Section: React.FC<SectionProps> = ({ id, className = "", children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`min-h-screen w-full flex flex-col justify-center px-4 py-16 md:px-12 lg:px-24 ${className}`}
    >
      <div className={`max-w-7xl mx-auto w-full transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        {children}
      </div>
    </section>
  );
};