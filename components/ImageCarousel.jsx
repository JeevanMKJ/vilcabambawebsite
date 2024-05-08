// // components/ImageCarousel.js
// import React, { useState, useEffect } from 'react';

// const ImageCarousel = ({ images }) => {
//  const [current, setCurrent] = useState(0);
//  const length = images.length;

//  useEffect(() => {
//     const nextSlide = () => {
//       setCurrent(current === length - 1 ? 0 : current + 1);
//     };

//     const timer = setInterval(nextSlide, 5000); // Change slide every 3 seconds
//     return () => clearInterval(timer);
//  }, [current, length]);

//  return (
//     <section className="relative w-full h-[600px] overflow-hidden">
//       {images.map((image, index) => (
//         <div
//           className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
//           key={index}
//         >
//           <img src={image} alt={`slide ${index + 1}`} className="w-full h-full object-cover" />
//         </div>
//       ))}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`w-11 h-1 rounded-full bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${index === current ? 'bg-gray-800' : ''}`}
//             onClick={() => setCurrent(index)}
//           ></button>
//         ))}
//       </div>
//     </section>
//  );
// };

// export default ImageCarousel;


// components/ImageCarousel.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageCarousel = ({ images }) => {
 const [current, setCurrent] = useState(0);
 const length = images.length;

 useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const timer = setInterval(nextSlide, 5000); // Change slide every 3 seconds
    return () => clearInterval(timer);
 }, [current, length]);

 return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <div
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
          key={index}
        >
          <Image 
            src={image} 
            width={1920}
            height={1080}
            alt={`slide ${index + 1}`} 
            className="w-full h-full object-cover" />
        </div>
      ))}
      {/* Adjusted z-index for buttons */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-11 h-1 rounded-full bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${index === current ? 'bg-gray-800' : ''}`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black bg-opacity-50">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {/* Responsive h1 */}
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white text-center">Vilcabamba</h2>
          {/* Responsive p */}
          <p className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-8 text-white text-center">
            Valle de la Longevidad
          </p>
        </div>
      </div>
    </section>
 );
};

export default ImageCarousel;


