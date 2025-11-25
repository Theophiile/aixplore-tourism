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
      className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col min-h-[400px] ${className}`}
    >
      {/* Image de fond */}
      {image && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

      {/* Contenu par-dessus */}
      <div className="relative z-10 p-5 flex flex-col justify-between h-full">
        {/* Haut : Date + Titre */}
        <div>
          {date && (
            <p className="text-xs text-gold font-montserrat mb-2 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {date}
            </p>
          )}
          
          <h3 className="text-lg font-playfair font-normal text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {title}
          </h3>
        </div>

        {/* Bas : Bouton */}
        <div>
          {href && (
            <Link
              href={href}
              className="inline-block px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-200 font-montserrat font-light border border-white/30 shadow-md hover:shadow-lg text-xs"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

