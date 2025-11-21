'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Button({ 
  href, 
  children, 
  variant = 'primary',
  onClick,
  className = '',
  ...props 
}) {
  const baseClasses = "inline-block px-8 py-3.5 rounded-full font-montserrat font-light transition-all duration-300";
  
  const variants = {
    primary: "bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm",
    secondary: "bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm",
    gold: "bg-gold/80 text-white border border-gold/40 hover:bg-gold/90",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
}

