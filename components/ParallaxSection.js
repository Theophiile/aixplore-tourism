'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ParallaxSection({ 
  image, 
  children, 
  height = 'h-screen',
  overlay = true 
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      {/* Image avec effet parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        {image && (
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            priority
          />
        )}
      </motion.div>

      {/* Overlay */}
      {overlay && (
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 bg-black bg-opacity-40"
        />
      )}

      {/* Contenu */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

