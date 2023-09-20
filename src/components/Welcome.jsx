import React from 'react';

export default function About() {
  return (
    <div className='bg-[#ffe4c487] pt-[50px]'>
      <h1 className='text-center text-4xl mb-[35px]'>Welcome</h1>
      <div className='flex flex-col'>
        <section className='px-8 py-4 text-center text-sm w-[90%] mx-auto'>
        Emily Smith is not just any photographer; she is an artist with a camera. With over a decade of experience, Emily has mastered the art of capturing moments that tell compelling stories. Her journey started as a teenager with a simple point-and-shoot camera, but her passion for visual storytelling led her to a professional career that has taken her around the world. 

Her style is uniquely her own, seamlessly blending classical techniques with modern digital artistry. To Emily, photography is not just about capturing light; it&apos;s about catching the right light that can illuminate a person&apos;s inner character. She&apos;s deft at portrait photography, capturing the essence of her subjects with seemingly effortless grace. Whether it&apos;s a candid shot or a posed portrait, Emily&apos;s work reflects the intimacy and uniqueness of each individual.
        </section>
        <hr className='border-black w-[80%] ml-[10%] mb-4' />
        <div className='grid grid-cols-1 sm:grid-cols-3 text-center ml-[10%] justify-center items-center'>
          <div className='text-center mb-3'>
            <span className='text-xl font-bold'>Item 1</span>
            <p>Your Text Below Item 1</p>
          </div>
          <div className='text-center mb-3'>
            <span className='text-xl font-bold'>Item 2</span>
            <p>Your Text Below Item 2</p>
          </div>
          <div className='text-center mb-3'>
            <span className='text-xl font-bold'>Item 3</span>
            <p>Your Text Below Item 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
