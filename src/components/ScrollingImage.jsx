'use client'
import React, { useEffect, useRef } from 'react';

export default function ScrollingImage(params) {
  const h1Ref = useRef(null);

  useEffect(() => {
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

    if (h1Ref.current) {
      observer.observe(h1Ref.current);
    }

    return () => {
      if (h1Ref.current) {
        observer.unobserve(h1Ref.current);
      }
    };
  }, []);

  return (
    <div className="flex min-h-[600px] justify-center items-center bg-fixed bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(/${params.image})` }}>
      <h1 ref={h1Ref} className='font-black text-white text-6xl'>Hello</h1>
    </div>
  );
}
