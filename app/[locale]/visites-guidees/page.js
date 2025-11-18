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
      title: "Randonnée au Lac d'Annecy",
      description: "Une magnifique randonnée autour du lac le plus pur d'Europe. Découvrez des panoramas à couper le souffle.",
      image: "/images/lac-annecy.jpg",
      href: `/${locale}/visites-guidees/lac-annecy`
    },
    {
      title: "Sentier des Crêtes",
      description: "Parcourez les sommets alpins et admirez les vallées environnantes depuis les hauteurs.",
      image: "/images/cretes.jpg",
      href: `/${locale}/visites-guidees/cretes`
    },
    {
      title: "Ballade en Forêt de Savoie",
      description: "Immergez-vous dans la nature préservée des forêts savoyardes, riches en faune et flore.",
      image: "/images/foret.jpg",
      href: `/${locale}/visites-guidees/foret`
    }
  ];

  const excursions = [
    {
      title: "Chamonix et le Mont-Blanc",
      description: "Journée complète à la découverte du toit de l'Europe et de la vallée de Chamonix.",
      image: "/images/mont-blanc.jpg",
      href: `/${locale}/visites-guidees/chamonix`,
      date: "Disponible toute l'année"
    },
    {
      title: "Villages Authentiques des Alpes",
      description: "Découvrez les villages typiques alpins, leur architecture et leurs traditions.",
      image: "/images/villages.jpg",
      href: `/${locale}/visites-guidees/villages`,
      date: "Demi-journée"
    },
    {
      title: "Cascades et Gorges",
      description: "Explorez les merveilles aquatiques des Alpes : cascades spectaculaires et gorges impressionnantes.",
      image: "/images/cascades.jpg",
      href: `/${locale}/visites-guidees/cascades`,
      date: "Demi-journée"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection 
        image="/images/hiking-hero.jpg"
        height="h-96"
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-playfair font-bold mb-4"
          >
            Visites Guidées
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-montserrat max-w-2xl mx-auto"
          >
            Découvrez les Alpes avec nos guides expérimentés
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Section Randonnées */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-stone-dark mb-4 flex items-center gap-3">
              <span className="text-5xl">🥾</span>
              Randonnées
            </h2>
            <p className="text-lg text-stone font-montserrat">
              Des parcours variés pour tous les niveaux, de la balade familiale à la randonnée sportive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {randonnees.map((item, index) => (
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

      {/* Section Excursions */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-stone-dark mb-4 flex items-center gap-3">
              <span className="text-5xl">🚐</span>
              Excursions Demi-Journée ou Journée
            </h2>
            <p className="text-lg text-stone font-montserrat">
              Des visites organisées pour découvrir les sites emblématiques des Alpes en toute sérénité.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {excursions.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                href={item.href}
                date={item.date}
                buttonText={t('common.discover')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Infos Pratiques */}
      <section className="section-padding bg-lake-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-3xl font-playfair font-bold text-stone-dark mb-6">
              Informations Pratiques
            </h3>
            <div className="space-y-4 font-montserrat text-stone">
              <div>
                <h4 className="font-semibold text-lg text-stone-dark mb-2">Équipement recommandé</h4>
                <p>Chaussures de randonnée, vêtements adaptés à la météo, eau, protection solaire.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-stone-dark mb-2">Niveau requis</h4>
                <p>Nos visites s&apos;adaptent à tous les niveaux. Précisez vos attentes lors de la réservation.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-stone-dark mb-2">Tarifs</h4>
                <p>À partir de 45€ par personne. Tarifs de groupe disponibles.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-stone-dark mb-2">Langues</h4>
                <p>Visites disponibles en français et en anglais.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

