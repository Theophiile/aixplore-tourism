'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({ 
  title, 
  description, 
  image, 
  href, 
  buttonText = "Découvrir",
  date,
  className = ""
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      {/* Image */}
      {image && (
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}

      {/* Contenu */}
      <div className="p-6">
        {date && (
          <p className="text-sm text-gold font-montserrat mb-2 font-semibold">
            {date}
          </p>
        )}
        
        <h3 className="text-2xl font-playfair font-bold text-stone-dark mb-3">
          {title}
        </h3>
        
        {description && (
          <p className="text-stone mb-4 font-montserrat leading-relaxed">
            {description}
          </p>
        )}
        
        {href && (
          <Link
            href={href}
            className="inline-block px-6 py-3 bg-lake text-white rounded-lg hover:bg-lake-dark transition-all duration-200 font-montserrat shadow-md hover:shadow-lg"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </motion.div>
  );
}

