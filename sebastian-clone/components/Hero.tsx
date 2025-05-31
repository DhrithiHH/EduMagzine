'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.line', {
        y: 100,
        opacity: 0,
        ease: 'power4.out',
        duration: 1.4,
        stagger: 0.15,
      });
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        ref={textRef}
        className="text-6xl md:text-8xl font-bold leading-tight space-y-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="overflow-hidden">
          <div className="line">Creative</div>
        </div>
        <div className="overflow-hidden">
          <div className="line">Developer</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
