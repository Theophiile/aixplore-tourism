'use client';

import Image from 'next/image';

export default function HeroImage({ src, alt = "Hero background" }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      quality={85}
      sizes="100vw"
      className="object-cover"
      style={{ objectPosition: 'center' }}
    />
  );
}

