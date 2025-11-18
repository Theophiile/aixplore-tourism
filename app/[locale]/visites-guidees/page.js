'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';
import ParallaxSection from '@/components/ParallaxSection';
import { getTranslation } from '@/lib/translations';

export default function VisitesGuideesPage({ params }) {
  const { locale } = params;
  const t = (key) => getTranslation(locale, key);

  const randonnees = [
    {
      title: "Entre ciel et forêt",
      description: "Randonnée guidée à la Croix du Nivolet. Boucle depuis le Sire, entre forêts et belvédères, jusqu'à la grande croix dominant le lac du Bourget.",
      image: "/images/cretes.jpg",
      href: `/${locale}/visites-guidees/croix-nivolet`
    },
    {
      title: "Contes et reflets du lac",
      description: "Balade panoramique autour du lac d'Annecy. Depuis les Puisots, une boucle paisible à travers les bois et les points de vue sur le lac et les montagnes.",
      image: "/images/lac-annecy.jpg",
      href: `/${locale}/visites-guidees/lac-annecy`
    }
  ];

  const excursions = [
    {
      title: "Au fil de l'eau et du temps",
      description: "Chanaz & croisière sur le lac du Bourget. Balade guidée dans le village, visite du moulin, dégustations locales et croisière commentée.",
      image: "/images/villages.jpg",
      href: `/${locale}/visites-guidees/chanaz`,
      date: "Journée"
    },
    {
      title: "Douceurs au sommet",
      description: "Coucher de soleil au Mont Revard — apéritif savoyard inclus. Panorama magique sur le lac, dégustation de produits locaux et ambiance conviviale au sommet.",
      image: "/images/mont-blanc.jpg",
      href: `/${locale}/visites-guidees/mont-revard`,
      date: "Demi-journée"
    },
    {
      title: "Charme et histoire",
      description: "Talloires & château de Menthon-Saint-Bernard. Visite du village et découverte du château, entre patrimoine et paysages de carte postale.",
      image: "/images/villages.jpg",
      href: `/${locale}/visites-guidees/talloires`,
      date: "Demi-journée"
    },
    {
      title: "Savoie Grandeur Nature",
      description: "Gorges du Sierroz, lac du Bourget & Mont Revard. De la rivière à la montagne, une journée complète entre nature, histoire et panoramas.",
      image: "/images/cascades.jpg",
      href: `/${locale}/visites-guidees/savoie-grandeur-nature`,
      date: "Journée complète"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection 
        image="/images/hiking-hero.jpg"
        height="h-screen"
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6"
          >
            🧭 Nos visites guidées
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-montserrat max-w-3xl mx-auto"
          >
            Découvrez la Savoie autrement, entre lac et montagnes
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
            className="text-center"
          >
            <div className="space-y-4 text-lg text-stone font-montserrat leading-relaxed">
              <p>
                Toutes nos excursions sont guidées par <span className="font-semibold text-stone-dark">Anaïs, guide locale passionnée</span>, en petit groupe (8 personnes maximum).
              </p>
              <p>
                Chaque sortie allie nature, culture et émotion, pour explorer la région à un rythme doux et inspiré.
              </p>
            </div>
            <div className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
              <p className="text-xl font-playfair italic text-stone-dark">
                &quot;Chaque sortie est une rencontre : avec un lieu, une histoire, une émotion.&quot;
              </p>
              <p className="text-right mt-2 font-montserrat text-stone">
                — Aixplore Tourism
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Randonnées */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-4 flex items-center gap-3">
              <span className="text-5xl">🥾</span>
              Balades & randonnées panoramiques
            </h2>
            <p className="text-lg text-stone font-montserrat">
              Pour prendre de la hauteur et savourer la beauté des paysages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {randonnees.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                href={item.href}
                buttonText="Découvrir la fiche"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Excursions */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-4 flex items-center gap-3">
              <span className="text-5xl">🌅</span>
              Journées & demi-journées découverte
            </h2>
            <p className="text-lg text-stone font-montserrat">
              Entre villages, panoramas et moments gourmands.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {excursions.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                href={item.href}
                date={item.date}
                buttonText="Découvrir la fiche"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section À savoir */}
      <section className="section-padding bg-gradient-to-br from-lake to-lake-dark text-white">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-12 text-center">
              ✨ À savoir
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <div className="text-3xl mb-3">🗣️</div>
                <h3 className="text-xl font-playfair font-bold mb-2">Langues</h3>
                <p className="font-montserrat">
                  Toutes les visites sont guidées en français ou en anglais
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <div className="text-3xl mb-3">👥</div>
                <h3 className="text-xl font-playfair font-bold mb-2">Petit groupe</h3>
                <p className="font-montserrat">
                  Groupes de 8 personnes maximum
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-xl font-playfair font-bold mb-2">Départs garantis</h3>
                <p className="font-montserrat">
                  À partir de 3 participants
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <div className="text-3xl mb-3">💳</div>
                <h3 className="text-xl font-playfair font-bold mb-2">Réservation</h3>
                <p className="font-montserrat">
                  Paiement sécurisé à la réservation
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:col-span-2"
              >
                <div className="text-3xl mb-3">🚗</div>
                <h3 className="text-xl font-playfair font-bold mb-2">Transport</h3>
                <p className="font-montserrat">
                  Transport inclus selon l&apos;excursion
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

