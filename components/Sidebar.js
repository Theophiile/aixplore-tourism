'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getTranslation } from '@/lib/translations';

const menuItems = [
  { key: 'home', href: '/' },
  { key: 'guidedTours', href: '/visites-guidees' },
  { key: 'privateTours', href: '/visites-privees' },
  { key: 'familyNature', href: '/nature-famille' },
  { key: 'wellnessRetreats', href: '/retraites-bien-etre' },
  { key: 'favorites', href: '/coups-de-coeur' },
  { key: 'about', href: '/a-propos' },
  { key: 'contact', href: '/contact' },
];

function SidebarContent({ locale, pathname, isActive, t, onLanguageChange, isScrolledToBeige }) {
  return (
    <>
      {/* Logo */}
      <div className="p-6 pb-2 flex justify-center">
        <Link href={`/${locale}`} className="block">
          <Image 
            src="/images/logo_aixplore_1.png"
            alt="Aixplore Tourism" 
            width={80} 
            height={24}
            className="w-20 h-auto transition-all duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            priority
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="px-6 pt-1 pb-6">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.key}>
                <Link
                  href={`/${locale}${item.href === '/' ? '' : item.href}`}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 font-montserrat text-[15px] font-light ${
                    active
                      ? 'bg-white/20 text-white shadow-lg font-normal'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{t(item.key)}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Langue */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex gap-2 justify-center mb-3">
          <button
            onClick={() => onLanguageChange('fr')}
            className={`px-4 py-1.5 rounded-lg text-xs font-montserrat font-light transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${
              locale === 'fr'
                ? 'bg-white/20 text-white font-normal'
                : 'text-white/90 hover:bg-white/10'
            }`}
          >
            FR
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className={`px-4 py-1.5 rounded-lg text-xs font-montserrat font-light transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${
              locale === 'en'
                ? 'bg-white/20 text-white font-normal'
                : 'text-white/90 hover:bg-white/10'
            }`}
          >
            EN
          </button>
        </div>
        <div className="flex gap-2 justify-center text-xs">
          <Link 
            href={`/${locale}/cgv`}
            className="font-montserrat font-light transition-all duration-300 text-white/60 hover:text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
          >
            {t('cgv')}
          </Link>
          <span className="transition-all duration-300 text-white/40">•</span>
          <Link 
            href={`/${locale}/mentions-legales`}
            className="font-montserrat font-light transition-all duration-300 text-white/60 hover:text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
          >
            {t('legal')}
          </Link>
        </div>
      </div>
    </>
  );
}

export default function Sidebar({ locale = 'fr' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledToBeige, setIsScrolledToBeige] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Vérifier si on est sur la page d'accueil
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
  
  // Vérifier si on est sur une page d'activité nature-famille
  const isNatureFamilleActivityPage = pathname.includes('/nature-famille/') && 
    (pathname.includes('/chasse-couleurs') ||
     pathname.includes('/chasse-tresor') ||
     pathname.includes('/herbier') ||
     pathname.includes('/ecoute-oiseaux') ||
     pathname.includes('/land-art') ||
     pathname.includes('/disque-celeste') ||
     pathname.includes('/champignons'));

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

  // Gérer le scroll pour changer le style (pour toutes les pages sauf l'accueil et les activités nature-famille)
  useEffect(() => {
    // Réinitialiser l'état quand on change de page
    setIsScrolledToBeige(false);
    
    // Si on est sur la page d'accueil, ne rien faire
    if (isHomePage) {
      return;
    }
    
    // Si on est sur une page d'activité nature-famille, forcer le style bleu
    if (isNatureFamilleActivityPage) {
      setIsScrolledToBeige(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Détecter si on a scrollé (après 60% de la hauteur de l'écran)
      const hasScrolled = currentScrollY >= window.innerHeight * 0.6;
      setIsScrolledToBeige(hasScrolled);
    };

    // Petit délai pour s'assurer que la page est bien chargée
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isHomePage, isNatureFamilleActivityPage, pathname]);

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
        className="fixed top-4 left-4 z-50 lg:hidden bg-white/10 text-white p-3 rounded-full shadow-lg hover:bg-white/20 transition-all"
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
              className="fixed left-0 top-0 h-screen w-56 z-40 overflow-y-auto lg:hidden bg-black/80 backdrop-blur-sm"
            >
              <SidebarContent locale={locale} pathname={pathname} isActive={isActive} t={t} onLanguageChange={handleLanguageChange} isScrolledToBeige={false} />
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
      <aside 
        className={`hidden lg:block fixed left-0 top-0 h-screen w-56 z-40 overflow-y-auto shadow-xl ${
          isNatureFamilleActivityPage ? '' : 'transition-colors duration-300'
        }`}
        style={{ backgroundColor: isScrolledToBeige ? '#124e78' : 'transparent' }}
      >
        <SidebarContent locale={locale} pathname={pathname} isActive={isActive} t={t} onLanguageChange={handleLanguageChange} isScrolledToBeige={isScrolledToBeige} />
      </aside>
    </>
  );
}
