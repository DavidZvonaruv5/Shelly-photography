import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(selectedImage === index ? null : index);
  };

  return (
    <div className="bg-[whitesmoke] pt-12 pb-12 relative">
      <div
        className={`flex flex-wrap justify-center gap-2 p-2 m-2 ${
          selectedImage !== null ? "filter blur-md" : ""
        }`}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative w-[120px] h-[120px] sm:w-[275px] sm:h-[275px] bg-white border-4 border-black  rounded-md overflow-visible cursor-pointer group"
            onClick={() => handleImageClick(index)}
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div>
            <Image
              src={image}
              width={225}
              height={225}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover sm:object-cover w-full h-full rounded-sm"
            />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <Image
              src={images[selectedImage]}
              width={450}
              height={450}
              alt={`Selected Gallery Image ${selectedImage + 1}`}
              className="rounded-md w-[225px] h-[225px] sm:w-[550px] sm:h-[550px] object-scale-down"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
