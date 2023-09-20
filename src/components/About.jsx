import React from 'react';
import Image from "next/image"
export default function About() {
  return (
    <div className='bg-[#ffe4c487]   pt-12 pb-12'>
      <h1 className='text-center text-3xl md:text-4xl font-bold mb-8'>About Me</h1>

      <div className='flex flex-wrap justify-center mb-8'>
        <div className='m-2'>
          <Image
            src='/1.jpg'
            alt='Me'
            width={75 }
            height={75}
            className='rounded-full w-24 h-24 md:w-32 md:h-32'
          />
        </div>
        <div className='m-2'>
          <Image
            src='/2.jpg'
            alt='Me'
            width={75 }
            height={75}
            className='rounded-full w-24 h-24 md:w-32 md:h-32'
          />
        </div>
        <div className='m-2'>
          <Image
            src='/3.jpg'
            alt='Me'
            width={75 }
            height={75}
            className='rounded-full w-24 h-24 md:w-32 md:h-32'
          />
        </div>
      </div>

     
      <div className='text-center px-4 md:px-0  w-[80%] ml-[10%]'>
        <p className='text-base md:text-lg'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, cumque. Quod, magnam repellat.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, cumque. Quod, magnam repellat.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, cumque. Quod, magnam repellat.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, cumque. Quod, magnam repellat.
        </p>
      </div>
    </div>
  );
}
