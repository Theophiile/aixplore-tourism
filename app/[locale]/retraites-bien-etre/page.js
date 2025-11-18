'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';
import { getTranslation } from '@/lib/translations';

export default function RetraitesBienEtrePage({ params }) {
  const { locale } = params;
  const t = (key) => getTranslation(locale, key);

  const retreats = [
    {
      title: "Retraite Printemps - Éveil & Renouveau",
      description: "Célébrez le renouveau printanier avec yoga, méditation et randonnées ressourçantes.",
      image: "/images/retreat-spring.jpg",
      date: "23-26 Mai 2025",
      href: `/${locale}/retraites-bien-etre/printemps`
    },
    {
      title: "Retraite Été - Énergie & Vitalité",
      description: "Profitez des longues journées d'été pour vous reconnecter à votre vitalité intérieure.",
      image: "/images/retreat-summer.jpg",
      date: "20-23 Juin 2025",
      href: `/${locale}/retraites-bien-etre/ete`
    },
    {
      title: "Retraite Automne - Introspection & Gratitude",
      description: "Un moment de réflexion et de gratitude au cœur des couleurs automnales.",
      image: "/images/retreat-autumn.jpg",
      date: "12-15 Septembre 2025",
      href: `/${locale}/retraites-bien-etre/automne`
    },
    {
      title: "Retraite Octobre - Ancrage & Sérénité",
      description: "Préparez-vous à l'hiver avec des pratiques d'ancrage et de paix intérieure.",
      image: "/images/retreat-october.jpg",
      date: "10-13 Octobre 2025",
      href: `/${locale}/retraites-bien-etre/octobre`
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection 
        image="/images/wellness-retreat-hero.jpg"
        height="h-screen"
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6"
          >
            Retraites Bien-être en Montagne
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-montserrat max-w-3xl mx-auto mb-8"
          >
            Ressourcez-vous au cœur des Alpes
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button href="#retraites-2025" variant="gold">
              Découvrir les Retraites 2025
            </Button>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Section Introduction */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-6">
              Un Voyage Vers Votre Bien-être
            </h2>
            <p className="text-lg text-stone font-montserrat leading-relaxed max-w-3xl mx-auto">
              Nos retraites bien-être combinent la beauté majestueuse des Alpes avec des pratiques 
              de yoga, méditation et connexion à la nature. Chaque retraite est une invitation à 
              ralentir, à respirer et à vous reconnecter à vous-même dans un cadre exceptionnel.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-lake rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🧘</span>
              </div>
              <h3 className="text-xl font-playfair font-bold text-stone-dark mb-3">
                Yoga & Méditation
              </h3>
              <p className="text-stone font-montserrat">
                Sessions quotidiennes adaptées à tous les niveaux
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-lake rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🏔️</span>
              </div>
              <h3 className="text-xl font-playfair font-bold text-stone-dark mb-3">
                Immersion Nature
              </h3>
              <p className="text-stone font-montserrat">
                Randonnées méditatives dans des lieux préservés
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-lake rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🍃</span>
              </div>
              <h3 className="text-xl font-playfair font-bold text-stone-dark mb-3">
                Alimentation Saine
              </h3>
              <p className="text-stone font-montserrat">
                Repas végétariens bio et locaux
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Retraites 2025 */}
      <section id="retraites-2025" className="section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-12 text-center"
          >
            Nos Retraites 2025
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {retreats.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                date={item.date}
                href={item.href}
                buttonText="Découvrir la retraite"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Programme Type */}
      <section className="section-padding bg-gradient-to-br from-beige-light to-lake-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 md:p-12 shadow-2xl"
          >
            <h3 className="text-3xl font-playfair font-bold text-stone-dark mb-8 text-center">
              Programme Type d&apos;une Journée
            </h3>
            
            <div className="space-y-6 font-montserrat">
              <div className="flex items-start gap-4 pb-6 border-b border-stone-light">
                <span className="text-2xl">🌅</span>
                <div>
                  <h4 className="font-semibold text-lg text-stone-dark">7h00 - Yoga matinal</h4>
                  <p className="text-stone">Session de yoga doux pour réveiller le corps en douceur</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-6 border-b border-stone-light">
                <span className="text-2xl">🥐</span>
                <div>
                  <h4 className="font-semibold text-lg text-stone-dark">8h30 - Petit-déjeuner</h4>
                  <p className="text-stone">Petit-déjeuner bio et local en pleine conscience</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-6 border-b border-stone-light">
                <span className="text-2xl">🥾</span>
                <div>
                  <h4 className="font-semibold text-lg text-stone-dark">10h00 - Randonnée méditative</h4>
                  <p className="text-stone">Marche consciente dans la nature alpine</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-6 border-b border-stone-light">
                <span className="text-2xl">🍽️</span>
                <div>
                  <h4 className="font-semibold text-lg text-stone-dark">13h00 - Déjeuner</h4>
                  <p className="text-stone">Repas végétarien préparé avec des produits locaux</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-6 border-b border-stone-light">
                <span className="text-2xl">🌸</span>
                <div>
                  <h4 className="font-semibold text-lg text-stone-dark">15h00 - Temps libre</h4>
                  <p className="text-stone">Lecture, repos, balade ou atelier créatif</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-6 border-b border-stone-light">
                <span className="text-2xl">🧘‍♀️</span>
                <div>
                  <h4 className="font-semibold text-lg text-stone-dark">17h30 - Yoga & méditation</h4>
                  <p className="text-stone">Session de fin de journée pour se recentrer</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🌙</span>
                <div>
                  <h4 className="font-semibold text-lg text-stone-dark">19h30 - Dîner & soirée</h4>
                  <p className="text-stone">Dîner partagé suivi d&apos;un moment de partage ou cercle de parole</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Infos & Tarifs */}
      <section className="section-padding bg-stone-dark text-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">
              Informations Pratiques
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-playfair font-bold mb-4 flex items-center gap-2">
                  <span>📍</span> Lieu
                </h4>
                <p className="font-montserrat text-beige-light">
                  Hébergement en chalet de montagne confortable avec vue panoramique sur les Alpes. 
                  Chambres partagées ou privées selon disponibilité.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-playfair font-bold mb-4 flex items-center gap-2">
                  <span>💰</span> Tarifs
                </h4>
                <p className="font-montserrat text-beige-light mb-2">
                  <strong>Chambre partagée :</strong> 450€ par personne
                </p>
                <p className="font-montserrat text-beige-light">
                  <strong>Chambre privée :</strong> 580€ par personne
                </p>
                <p className="text-sm text-beige mt-2">Tout compris (hébergement, repas, activités)</p>
              </div>

              <div>
                <h4 className="text-xl font-playfair font-bold mb-4 flex items-center gap-2">
                  <span>👥</span> Groupe
                </h4>
                <p className="font-montserrat text-beige-light">
                  Limité à 12 participants pour préserver l&apos;intimité et la qualité des échanges.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-playfair font-bold mb-4 flex items-center gap-2">
                  <span>🎯</span> Niveau
                </h4>
                <p className="font-montserrat text-beige-light">
                  Tous niveaux bienvenus. Aucune expérience en yoga ou méditation requise.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button href={`/${locale}/contact`} variant="gold">
                Réserver votre place
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

