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
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-shadow duration-300 ${className}`}
      style={{ height: '350px', display: 'flex', flexDirection: 'column' }}
    >
      {/* Image de fond */}
      {image && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Overlay sombre avec gradient plus prononcé */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

      {/* Contenu par-dessus */}
      <div className="relative z-10 p-6 flex flex-col justify-between flex-1">
        {/* Haut : Date + Titre */}
        <div>
          {date && (
            <p className="text-xs text-gold font-montserrat mb-2 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {date}
            </p>
          )}
          
          <h3 className="text-xl font-playfair font-normal text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {title}
          </h3>
        </div>

        {/* Bas : Bouton */}
        <div>
          {href && (
            <Link
              href={href}
              className="inline-block px-5 py-2.5 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-200 font-montserrat font-light border border-white/30 shadow-md hover:shadow-lg text-sm backdrop-blur-sm"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

