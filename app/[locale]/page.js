'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { getTranslation } from '@/lib/translations';

export default function HomePage({ params }) {
  const { locale } = params;
  const t = (key) => getTranslation(locale, key);

  const highlights = [
    {
      title: t('nav.guidedTours'),
      description: 'Découvrez les plus beaux sentiers des Alpes avec nos guides expérimentés',
      href: `/${locale}/visites-guidees`,
      icon: '🚶‍♀️'
    },
    {
      title: t('nav.wellnessRetreats'),
      description: 'Ressourcez-vous lors de nos retraites bien-être en montagne',
      href: `/${locale}/retraites-bien-etre`,
      icon: '🏔️'
    },
    {
      title: t('nav.familyNature'),
      description: 'Des activités nature ludiques et éducatives pour toute la famille',
      href: `/${locale}/nature-famille`,
      icon: '🌿'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section avec Parallax */}
      <ParallaxSection 
        image="/images/hero-alps.jpg"
        height="h-screen"
      >
        <div className="container-custom text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6"
          >
            {t('home.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-montserrat mb-8 max-w-3xl mx-auto"
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
      </ParallaxSection>

      {/* Section Description */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-6"
          >
            Explorez les Alpes autrement
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone max-w-3xl mx-auto leading-relaxed"
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
            className="text-4xl font-playfair font-bold text-stone-dark mb-12 text-center"
          >
            Nos Expériences
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-playfair font-bold text-stone-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-stone mb-6 font-montserrat">
                  {item.description}
                </p>
                <Button href={item.href} variant="primary">
                  {t('common.discover')}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="section-padding bg-lake text-white">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold mb-6"
          >
            Prêt pour l&apos;aventure ?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Contactez-nous pour planifier votre prochaine expérience dans les Alpes
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

