'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'

export default function Banner() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/1.jpg", "/2.jpg", "/3.jpg"]; // Your image paths

  const goLeft = () => {
    setCurrentImage((prevCurrent) => (prevCurrent - 1 + images.length) % images.length);
  };

  const goRight = () => {
    setCurrentImage((prevCurrent) => (prevCurrent + 1) % images.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 z-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="min-w-full h-full flex-none" key={index}>
            <img src={img} alt="Banner" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute left-4 top-1/2 z-10">
      <button onClick={goLeft} className="bg-transparent p-2 rounded-full">
  <Image src="/left-arrow.png" height={25} width={25} alt='left arrow' />
</button>

      </div>

      <div className="absolute right-4 top-1/2 z-10">
        <button onClick={goRight} className="bg-transperent p-2 rounded-full">
        <Image src="/right-arrow.png" height={25} width={25} alt='left arrow' />
        </button>
      </div>
    </div>
  );
}


