'use client';
import React, { useEffect, useRef } from 'react';

export default function ScrollingImage(params) {
  const h1Ref = useRef(null);

  useEffect(() => {
    const element = h1Ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts.

  return (
    <div className="flex min-h-[600px] justify-center items-center bg-fixed bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(/${params.image})` }}>
      <h1 ref={h1Ref} className='font-black text-white text-3xl md:text-6xl'>Hello</h1>
    </div>
  );
}
