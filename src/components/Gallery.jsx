import React from "react";
import Image from "next/image";

export default function Gallery() {
  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
  ];

  return (
    <div className="bg-[#ffe4c487] pt-12 pb-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-[200px] h-[150px] bg-white border-4 border-black rounded-md overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-black"></div>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-black"></div>
              <Image
                src={image}
                width={200}
                height={150}
                alt={`Gallery Image ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
