'use client';

import { useEffect, useState } from 'react';

const images = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4s interval

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="text-center mt-8">
      <img
        src={images[current]}
        alt="Hero"
        className="mx-auto max-w-2xl rounded shadow-lg"
      />
      <p className="mt-4 text-sm">
        Announced: Queens of the Stone Age – Alive in the Catacombs
      </p>
      <div className="flex justify-center gap-2 mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? 'bg-gray-900' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
