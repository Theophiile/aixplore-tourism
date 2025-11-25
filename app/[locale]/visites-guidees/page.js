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
      title: locale === 'fr' ? "Entre ciel et forêt" : "Between Sky and Forest",
      description: locale === 'fr' 
        ? "Randonnée guidée à la Croix du Nivolet. Boucle depuis le Sire, entre forêts et belvédères, jusqu'à la grande croix dominant le lac du Bourget."
        : "Guided hike to Croix du Nivolet. Loop from Le Sire, between forests and viewpoints, to the great cross overlooking Lake Bourget.",
      image: "/images/cretes.jpg",
      href: `/${locale}/visites-guidees/croix-nivolet`
    }
  ];

  const excursions = [
    {
      title: locale === 'fr' ? "Au fil de l'eau et du temps" : "Along Water and Time",
      description: locale === 'fr'
        ? "Chanaz & croisière sur le lac du Bourget. Balade guidée dans le village, visite du moulin, dégustations locales et croisière commentée."
        : "Chanaz & Lake Bourget cruise. Guided village walk, mill visit, local tastings and commented cruise.",
      image: "/images/au_fil_de_leau.webp",
      href: `/${locale}/visites-guidees/chanaz`,
      date: locale === 'fr' ? "Journée complète" : "Full day"
    },
    {
      title: locale === 'fr' ? "Douceurs au sommet" : "Sweetness at the Summit",
      description: locale === 'fr'
        ? "Coucher de soleil au Mont Revard — apéritif savoyard inclus. Panorama magique sur le lac, dégustation de produits locaux et ambiance conviviale au sommet."
        : "Sunset at Mont Revard — Savoyard aperitif included. Magical panorama over the lake, local products tasting and convivial atmosphere at the summit.",
      image: "/images/douceurs_au_sommet.webp",
      href: `/${locale}/visites-guidees/mont-revard`,
      date: locale === 'fr' ? "Demi-journée" : "Half day"
    },
    {
      title: locale === 'fr' ? "Charme et histoire" : "Charm and History",
      description: locale === 'fr'
        ? "Talloires & château de Menthon-Saint-Bernard. Visite du village et découverte du château, entre patrimoine et paysages de carte postale."
        : "Talloires & Menthon-Saint-Bernard castle. Village visit and castle discovery, between heritage and postcard landscapes.",
      image: "/images/charme_et_histoire.webp",
      href: `/${locale}/visites-guidees/talloires`,
      date: locale === 'fr' ? "Demi-journée" : "Half day"
    },
    {
      title: locale === 'fr' ? "Savoie Grandeur Nature" : "Savoie Wild Nature",
      description: locale === 'fr'
        ? "Gorges du Sierroz, lac du Bourget & Mont Revard. De la rivière à la montagne, une journée complète entre nature, histoire et panoramas."
        : "Gorges du Sierroz, Lake Bourget & Mont Revard. From river to mountain, a full day between nature, history and panoramas.",
      image: "/images/savoie_grandeur_nature.webp",
      href: `/${locale}/visites-guidees/savoie-grandeur-nature`,
      date: locale === 'fr' ? "Journée complète" : "Full day"
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Image de fond fixe */}
      <div 
        className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/images/visites_guidées.webp')" }}
      />
      {/* Overlay sombre */}
      <div className="fixed top-0 left-0 w-screen h-screen bg-black/40 -z-10" />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div className="text-center text-white px-4 z-10 relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-playfair font-light mb-6 drop-shadow-2xl"
          >
            {locale === 'fr' ? "Nos visites guidées" : "Our Guided Tours"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-montserrat font-light max-w-3xl mx-auto drop-shadow-lg"
          >
            {locale === 'fr'
              ? "Découvrez la Savoie autrement, entre lac et montagnes"
              : "Discover Savoie differently, between lake and mountains"
            }
          </motion.p>
        </div>
      </section>

      {/* Section Introduction */}
      <section className="py-12 md:py-16">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-lg text-white font-montserrat font-light leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              <p className="mb-3">
                {locale === 'fr'
                  ? <>Toutes nos excursions sont guidées par <span className="font-semibold text-white">Anaïs, guide locale passionnée</span>, en petit groupe (8 personnes maximum).</>
                  : <>All our excursions are guided by <span className="font-semibold text-white">Anaïs, passionate local guide</span>, in small groups (maximum 8 people).</>
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Chaque sortie allie nature, culture et émotion, pour explorer la région à un rythme doux et inspiré."
                  : "Each outing combines nature, culture and emotion, to explore the region at a gentle and inspired pace."
                }
              </p>
            </div>
            <div className="mt-6 p-6 bg-white/10 rounded-lg shadow-lg max-w-2xl mx-auto border border-white/20">
              <p className="text-xl font-playfair italic text-white font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {locale === 'fr'
                  ? "\"Chaque sortie est une rencontre : avec un lieu, une histoire, une émotion.\""
                  : "\"Each outing is an encounter: with a place, a story, an emotion.\""
                }
              </p>
              <p className="text-right mt-2 font-montserrat font-light text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                — Aixplore Tourism
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Randonnées */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-light text-white mb-4 flex items-center gap-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {locale === 'fr' 
                ? "Balades & randonnées panoramiques"
                : "Walks & Panoramic Hikes"
              }
            </h2>
            <p className="text-lg text-white font-montserrat font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {locale === 'fr'
                ? "Pour prendre de la hauteur et savourer la beauté des paysages."
                : "To gain height and savor the beauty of the landscapes."
              }
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
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
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-light text-white mb-4 flex items-center gap-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {locale === 'fr'
                ? "Journées & demi-journées découverte"
                : "Full & Half-Day Discovery Tours"
              }
            </h2>
            <p className="text-lg text-white font-montserrat font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {locale === 'fr'
                ? "Entre villages, panoramas et moments gourmands."
                : "Between villages, panoramas and gourmet moments."
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
      <section className="section-padding text-white">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-light mb-12 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {locale === 'fr' ? "À savoir" : "Good to Know"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/30 rounded-lg p-6 border border-white/30"
              >
                <h3 className="text-xl font-playfair font-normal mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {locale === 'fr' ? "Langues" : "Languages"}
                </h3>
                <p className="font-montserrat font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                  {locale === 'fr'
                    ? "Toutes les visites sont guidées en français ou en anglais"
                    : "All tours are guided in French or English"
                  }
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/30 rounded-lg p-6 border border-white/30"
              >
                <h3 className="text-xl font-playfair font-normal mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {locale === 'fr' ? "Petit groupe" : "Small Group"}
                </h3>
                <p className="font-montserrat font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                  {locale === 'fr'
                    ? "Groupes de 8 personnes maximum"
                    : "Groups of 8 people maximum"
                  }
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/30 rounded-lg p-6 border border-white/30"
              >
                <h3 className="text-xl font-playfair font-normal mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {locale === 'fr' ? "Départs garantis" : "Guaranteed Departures"}
                </h3>
                <p className="font-montserrat font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                  {locale === 'fr'
                    ? "À partir de 3 participants"
                    : "From 3 participants"
                  }
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/30 rounded-lg p-6 border border-white/30"
              >
                <h3 className="text-xl font-playfair font-normal mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {locale === 'fr' ? "Réservation" : "Booking"}
                </h3>
                <p className="font-montserrat font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                  {locale === 'fr'
                    ? "Paiement sécurisé à la réservation"
                    : "Secure payment upon booking"
                  }
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/30 rounded-lg p-6 md:col-span-2 border border-white/30"
              >
                <h3 className="text-xl font-playfair font-normal mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {locale === 'fr' ? "Transport" : "Transportation"}
                </h3>
                <p className="font-montserrat font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                  {locale === 'fr'
                    ? "Transport inclus selon l'excursion"
                    : "Transportation included depending on the tour"
                  }
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

