'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';
import { getTranslation } from '@/lib/translations';

export default function VisitesPriveesPage({ params }) {
  const { locale } = params;
  const t = (key) => getTranslation(locale, key);

  const privateVisits = [
    {
      title: "Tour Privé du Mont-Blanc",
      description: "Une journée exclusive à la découverte du massif du Mont-Blanc, adaptée à vos envies.",
      image: "/images/private-mont-blanc.jpg",
      href: `/${locale}/visites-privees/mont-blanc`
    },
    {
      title: "Découverte Personnalisée d'Annecy",
      description: "Explorez Annecy et ses environs à votre rythme avec un guide dédié.",
      image: "/images/private-annecy.jpg",
      href: `/${locale}/visites-privees/annecy`
    },
    {
      title: "Randonnée Sur-Mesure",
      description: "Créez votre propre itinéraire de randonnée avec l'accompagnement d'un guide expert.",
      image: "/images/private-hiking.jpg",
      href: `/${locale}/visites-privees/sur-mesure`
    },
    {
      title: "Escapade Gastronomique Alpine",
      description: "Découvrez les spécialités savoyardes dans les meilleurs établissements de la région.",
      image: "/images/private-gastro.jpg",
      href: `/${locale}/visites-privees/gastronomie`
    },
    {
      title: "Photographie en Montagne",
      description: "Une visite spécialement conçue pour les passionnés de photographie de paysages.",
      image: "/images/private-photo.jpg",
      href: `/${locale}/visites-privees/photographie`
    },
    {
      title: "Transfert Aéroport + Visite",
      description: "Profitez d'une visite guidée dès votre arrivée à l'aéroport de Genève.",
      image: "/images/private-airport.jpg",
      href: `/${locale}/visites-privees/transfert`
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection 
        image="/images/private-tour-hero.jpg"
        height="h-96"
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-playfair font-bold mb-4"
          >
            Visites Privées
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-montserrat max-w-2xl mx-auto"
          >
            Des expériences sur-mesure, rien que pour vous
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Section Introduction */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-lake-light to-white rounded-lg p-8 shadow-lg border-l-4 border-lake"
          >
            <h2 className="text-3xl font-playfair font-bold text-stone-dark mb-4">
              Une Expérience Entièrement Personnalisée
            </h2>
            <div className="space-y-4 font-montserrat text-stone">
              <p>
                Nos visites privées sont conçues pour répondre à vos attentes spécifiques. 
                Que vous voyagiez en famille, entre amis ou en couple, nous créons l&apos;itinéraire 
                parfait pour vous.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <h4 className="font-semibold text-stone-dark">Durée flexible</h4>
                    <p className="text-sm">Demi-journée, journée complète ou plusieurs jours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🗺️</span>
                  <div>
                    <h4 className="font-semibold text-stone-dark">Itinéraire sur-mesure</h4>
                    <p className="text-sm">Personnalisez chaque étape de votre visite</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <h4 className="font-semibold text-stone-dark">Multilingue</h4>
                    <p className="text-sm">Français, anglais et autres langues sur demande</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👥</span>
                  <div>
                    <h4 className="font-semibold text-stone-dark">Groupe privé</h4>
                    <p className="text-sm">De 1 à 8 participants</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Prestations */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-playfair font-bold text-stone-dark mb-12 text-center"
          >
            Nos Prestations Privées
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {privateVisits.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                href={item.href}
                buttonText={t('common.discover')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="section-padding bg-stone-dark text-white">
        <div className="container-custom text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Créons Ensemble Votre Expérience Idéale
            </h2>
            <p className="text-lg mb-8 font-montserrat">
              Contactez-nous pour discuter de vos envies et recevoir un devis personnalisé 
              sous 24 heures.
            </p>
            <Button href={`/${locale}/contact`} variant="gold">
              Demander un Devis
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

