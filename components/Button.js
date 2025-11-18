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
  const baseClasses = "inline-block px-6 py-3 rounded-lg font-montserrat transition-all duration-300 shadow-md hover:shadow-lg";
  
  const variants = {
    primary: "bg-lake text-white hover:bg-lake-dark",
    secondary: "bg-beige text-stone-dark hover:bg-beige-light border-2 border-stone-light",
    gold: "bg-gold text-white hover:bg-gold-light hover:text-stone-dark",
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

