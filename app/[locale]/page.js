'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { getTranslation } from '@/lib/translations';

export default function HomePage({ params }) {
  const { locale } = params;
  const t = (key) => getTranslation(locale, key);

  const highlights = [
    {
      title: t('nav.guidedTours'),
      description: t('home.guidedToursDesc'),
      href: `/${locale}/visites-guidees`
    },
    {
      title: t('nav.wellnessRetreats'),
      description: t('home.wellnessDesc'),
      href: `/${locale}/retraites-bien-etre`
    },
    {
      title: t('nav.familyNature'),
      description: t('home.familyDesc'),
      href: `/${locale}/nature-famille`
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Vidéo d'arrière-plan en position fixe pour couvrir toute la page */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-screen h-screen object-cover -z-10"
      >
        <source src="/images/accueil.webm" type="video/webm" />
      </video>
      
      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="fixed top-0 left-0 w-screen h-screen bg-black/30 -z-10"></div>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div className="container-custom text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-playfair font-light mb-6 drop-shadow-2xl"
          >
            {t('home.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-montserrat font-light mb-8 max-w-3xl mx-auto drop-shadow-lg"
          >
            {t('home.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button href={`/${locale}/retraites-bien-etre`} variant="gold">
              {t('home.ctaRetreats')}
            </Button>
            <Button href={`/${locale}/contact`} variant="secondary">
              {t('common.contact')}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section Description */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-light text-white mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            {t('home.exploreAlps')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/95 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            {t('home.description')}
          </motion.p>
        </div>
      </section>

      {/* Section Highlights */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-playfair font-light text-white mb-12 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            {t('home.experiences')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/15 p-10 rounded-xl shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300 text-center border border-white/20 flex flex-col h-full"
              >
                <h3 className="text-2xl font-playfair font-normal text-white mb-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {item.title}
                </h3>
                <p className="text-white/95 mb-8 font-montserrat font-light leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] flex-grow">
                  {item.description}
                </p>
                <div className="mt-auto pt-2">
                  <Button href={item.href} variant="primary">
                    {t('common.discover')}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="section-padding text-white">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-light mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            {t('home.readyForAdventure')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            {t('home.contactForNext')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button href={`/${locale}/contact`} variant="gold">
              {t('common.contact')}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

