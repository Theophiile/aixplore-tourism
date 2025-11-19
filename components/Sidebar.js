'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getTranslation } from '@/lib/translations';

const menuItems = [
  { key: 'home', href: '/', icon: '🏡' },
  { key: 'guidedTours', href: '/visites-guidees', icon: '🚶‍♀️' },
  { key: 'privateTours', href: '/visites-privees', icon: '🚐' },
  { key: 'familyNature', href: '/nature-famille', icon: '🌿' },
  { key: 'wellnessRetreats', href: '/retraites-bien-etre', icon: '🏔️' },
  { key: 'favorites', href: '/coups-de-coeur', icon: '💛' },
  { key: 'about', href: '/a-propos', icon: '👩‍💼' },
  { key: 'contact', href: '/contact', icon: '💬' },
];

function SidebarContent({ locale, pathname, isActive, t, onLanguageChange }) {
  return (
    <>
      {/* Logo */}
      <div className="p-6 border-b border-stone-light">
        <Link href={`/${locale}`} className="block">
          <h1 className="text-2xl font-playfair font-bold text-stone-dark">
            Aixplore Tourism
          </h1>
          <p className="text-sm text-stone mt-1 font-montserrat">
            Découvrez les Alpes
          </p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.key}>
                <Link
                  href={`/${locale}${item.href === '/' ? '' : item.href}`}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-montserrat ${
                    active
                      ? 'bg-lake text-white shadow-md'
                      : 'text-stone-dark hover:bg-beige hover:text-lake-dark'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm">{t(item.key)}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Langue */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-stone-light bg-beige-light">
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => onLanguageChange('fr')}
            className={`px-4 py-2 rounded-lg text-sm font-montserrat transition-all ${
              locale === 'fr'
                ? 'bg-lake text-white'
                : 'text-stone hover:bg-beige'
            }`}
          >
            FR
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className={`px-4 py-2 rounded-lg text-sm font-montserrat transition-all ${
              locale === 'en'
                ? 'bg-lake text-white'
                : 'text-stone hover:bg-beige'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </>
  );
}

export default function Sidebar({ locale = 'fr' }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Restaurer la position de scroll au chargement et lors du changement de locale
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      // Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
      });
      sessionStorage.removeItem('scrollPosition');
    }
  }, [locale, pathname]);

  const isActive = (href) => {
    if (href === '/') {
      return pathname === `/${locale}` || pathname === '/';
    }
    return pathname.includes(href);
  };

  const handleLanguageChange = (newLocale) => {
    // Sauvegarder la position de scroll actuelle
    const scrollPosition = window.scrollY;
    sessionStorage.setItem('scrollPosition', scrollPosition.toString());
    
    // Construire la nouvelle URL avec le nouveau locale
    const newPath = `/${newLocale}${pathname.replace(/^\/(fr|en)/, '')}`;
    
    // Naviguer vers la nouvelle page SANS scroller en haut
    router.push(newPath, { scroll: false });
    
    // Restaurer immédiatement la position (backup au cas où)
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 0);
  };

  const t = (key) => getTranslation(locale, `nav.${key}`);

  return (
    <>
      {/* Bouton toggle pour mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-stone text-white p-3 rounded-full shadow-lg"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {!isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          )}
        </svg>
      </button>

      {/* Sidebar Mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed left-0 top-0 h-screen w-64 bg-beige-light border-r border-stone-light shadow-xl z-40 overflow-y-auto lg:hidden"
            >
              <SidebarContent locale={locale} pathname={pathname} isActive={isActive} t={t} onLanguageChange={handleLanguageChange} />
            </motion.aside>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>

      {/* Sidebar Desktop */}
      <aside className="hidden lg:block fixed left-0 top-0 h-screen w-64 bg-beige-light border-r border-stone-light shadow-xl z-40 overflow-y-auto">
        <SidebarContent locale={locale} pathname={pathname} isActive={isActive} t={t} onLanguageChange={handleLanguageChange} />
      </aside>
    </>
  );
}
