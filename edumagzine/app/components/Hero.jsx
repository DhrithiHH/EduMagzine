// 'use client';

// import { useEffect, useState } from 'react';

// const images = [
//   '/image1.jpg',
//   '/image2.webp',
//   '/image3.png',
//   '/images4.jpeg',
// ];

// export default function Hero() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 4000); // 4s interval

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="sticky top-0 z-10 bg-white text-center">
//   <div className="flex items-center justify-center mx-auto max-w-4xl h-[80vh] overflow-hidden">
//     <img
//       src={images[current]}
//       alt="Hero"
//       className="w-[80%] h-[80%] object-cover"
//     />
//   </div>

//   <p className="mt-0 text-sm">
//     Announced: Queens of the Stone Age – Alive in the Catacombs
//   </p>

//   <div className="flex justify-center gap-2 mt-2">
//     {images.map((_, index) => (
//       <div
//         key={index}
//         className={`w-3 h-3 rounded-full ${
//           current === index ? 'bg-gray-900' : 'bg-gray-300'
//         }`}
//       />
//     ))}
//   </div>
// </section>

//   );
// }

'use client';

import { useEffect, useState } from 'react';

const images = [
  '/image1.jpg',
  '/image2.webp',
  '/image3.png',
  '/images4.jpeg',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="sticky top-0 z-10 bg-white text-center overflow-hidden">
      <div className="relative w-full max-w-4xl h-[80vh] mx-auto overflow-hidden flex items-center justify-center">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: '100%', height: '80vh' }}
            >
              <img
                src={src}
                alt={`Slide ${index}`}
                className="h-[80%] w-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-0 text-sm">
        Announced: Queens of the Stone Age – Alive in the Catacombs
      </p>

      <div className="flex justify-center gap-2 mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              current === index ? 'bg-gray-900' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
