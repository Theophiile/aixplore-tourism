'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';
import ParallaxSection from '@/components/ParallaxSection';
import { getTranslation } from '@/lib/translations';

export default function NatureFamillePage({ params }) {
  const { locale } = params;
  const t = (key) => getTranslation(locale, key);

  const activities = [
    {
      title: locale === 'fr' ? "À la Découverte des Traces d'Animaux" : "Discovering Animal Tracks",
      description: locale === 'fr' 
        ? "Apprenez à reconnaître les traces et indices de présence de la faune alpine. Une aventure ludique et éducative pour petits et grands."
        : "Learn to recognize tracks and signs of alpine wildlife. A fun and educational adventure for young and old.",
      image: "/images/family-tracks.jpg",
      date: locale === 'fr' ? "Samedi 15 juin 2025" : "Saturday June 15, 2025",
      href: `/${locale}/nature-famille/traces-animaux`
    },
    {
      title: locale === 'fr' ? "Les Secrets de la Forêt" : "Secrets of the Forest",
      description: locale === 'fr'
        ? "Explorez l'écosystème forestier et découvrez les plantes, arbres et petits habitants de nos forêts alpines."
        : "Explore the forest ecosystem and discover the plants, trees and small inhabitants of our alpine forests.",
      image: "/images/family-forest.jpg",
      date: locale === 'fr' ? "Dimanche 23 juin 2025" : "Sunday June 23, 2025",
      href: `/${locale}/nature-famille/secrets-foret`
    },
    {
      title: locale === 'fr' ? "Atelier Construction de Cabanes" : "Cabin Building Workshop",
      description: locale === 'fr'
        ? "Un atelier créatif en pleine nature où les enfants apprennent à construire leur cabane avec des matériaux naturels."
        : "A creative outdoor workshop where children learn to build their cabin with natural materials.",
      image: "/images/family-cabins.jpg",
      date: locale === 'fr' ? "Samedi 13 juillet 2025" : "Saturday July 13, 2025",
      href: `/${locale}/nature-famille/cabanes`
    },
    {
      title: locale === 'fr' ? "Observation des Oiseaux" : "Bird Watching",
      description: locale === 'fr'
        ? "Initiation à l'ornithologie pour toute la famille. Jumelles fournies pour observer les oiseaux de montagne."
        : "Introduction to ornithology for the whole family. Binoculars provided to observe mountain birds.",
      image: "/images/family-birds.jpg",
      date: locale === 'fr' ? "Dimanche 28 juillet 2025" : "Sunday July 28, 2025",
      href: `/${locale}/nature-famille/oiseaux`
    },
    {
      title: locale === 'fr' ? "Balade au Fil de l'Eau" : "Walk Along the Water",
      description: locale === 'fr'
        ? "Suivez le cours d'une rivière alpine et découvrez son écosystème fascinant, de la source jusqu'au lac."
        : "Follow the course of an alpine river and discover its fascinating ecosystem, from source to lake.",
      image: "/images/family-water.jpg",
      date: locale === 'fr' ? "Samedi 10 août 2025" : "Saturday August 10, 2025",
      href: `/${locale}/nature-famille/fil-eau`
    },
    {
      title: locale === 'fr' ? "Cueillette et Herbier Alpin" : "Alpine Harvesting & Herbarium",
      description: locale === 'fr'
        ? "Apprenez à reconnaître les plantes comestibles et médicinales des Alpes, et créez votre propre herbier."
        : "Learn to recognize edible and medicinal Alpine plants, and create your own herbarium.",
      image: "/images/family-plants.jpg",
      date: locale === 'fr' ? "Dimanche 24 août 2025" : "Sunday August 24, 2025",
      href: `/${locale}/nature-famille/herbier`
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection 
        image="/images/family-nature-hero.jpg"
        height="h-96"
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-playfair font-bold mb-4"
          >
            {locale === 'fr' ? "Rendez-vous Nature en Famille" : "Family Nature Outings"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-montserrat max-w-2xl mx-auto"
          >
            {locale === 'fr'
              ? "Des activités ludiques et éducatives pour découvrir la nature alpine"
              : "Fun and educational activities to discover alpine nature"
            }
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Section Introduction */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-playfair font-bold text-stone-dark mb-6">
              {locale === 'fr' ? "Éveillez la Curiosité de vos Enfants 🌿" : "Awaken Your Children's Curiosity 🌿"}
            </h2>
            <p className="text-lg text-stone font-montserrat leading-relaxed mb-8">
              {locale === 'fr'
                ? "Nos rendez-vous nature sont spécialement conçus pour les familles. À travers des activités interactives et ludiques, vos enfants découvriront les merveilles de la nature alpine tout en s'amusant. Chaque sortie est une aventure éducative adaptée aux enfants de 5 à 12 ans."
                : "Our nature outings are specially designed for families. Through interactive and fun activities, your children will discover the wonders of alpine nature while having fun. Each outing is an educational adventure adapted for children aged 5 to 12."
              }
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
                <h3 className="font-playfair font-bold text-lg text-stone-dark mb-2">
                  {locale === 'fr' ? "Activités familiales" : "Family Activities"}
                </h3>
                <p className="text-sm text-stone">
                  {locale === 'fr' ? "Adaptées aux enfants et aux parents" : "Suitable for children and parents"}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="font-playfair font-bold text-lg text-stone-dark mb-2">
                  {locale === 'fr' ? "Approche pédagogique" : "Educational Approach"}
                </h3>
                <p className="text-sm text-stone">
                  {locale === 'fr' ? "Apprendre en s'amusant" : "Learning while having fun"}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-3">🌲</div>
                <h3 className="font-playfair font-bold text-lg text-stone-dark mb-2">
                  {locale === 'fr' ? "En pleine nature" : "In the Heart of Nature"}
                </h3>
                <p className="text-sm text-stone">
                  {locale === 'fr' ? "Des lieux magiques et préservés" : "Magical and preserved places"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Activités */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-playfair font-bold text-stone-dark mb-12 text-center"
          >
            {locale === 'fr' ? "Nos Prochains Rendez-vous 2025" : "Our Upcoming Outings 2025"}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                date={item.date}
                href={item.href}
                buttonText={locale === 'fr' ? "En savoir plus" : "Learn more"}
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
            <h3 className="text-3xl font-playfair font-bold text-stone-dark mb-6 text-center">
              {locale === 'fr' ? "Informations Pratiques" : "Practical Information"}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 font-montserrat">
              <div>
                <h4 className="font-semibold text-lg text-stone-dark mb-3 flex items-center gap-2">
                  <span>⏰</span> {locale === 'fr' ? "Durée" : "Duration"}
                </h4>
                <p className="text-stone">
                  {locale === 'fr' ? "Demi-journée (environ 3 heures)" : "Half-day (approximately 3 hours)"}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-stone-dark mb-3 flex items-center gap-2">
                  <span>👶</span> {locale === 'fr' ? "Âge recommandé" : "Recommended Age"}
                </h4>
                <p className="text-stone">
                  {locale === 'fr' 
                    ? "De 5 à 12 ans (accompagnés d'un adulte)"
                    : "5 to 12 years old (accompanied by an adult)"
                  }
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-stone-dark mb-3 flex items-center gap-2">
                  <span>💰</span> {locale === 'fr' ? "Tarifs" : "Rates"}
                </h4>
                <p className="text-stone">
                  {locale === 'fr'
                    ? "25€ par enfant, 15€ par adulte accompagnant"
                    : "€25 per child, €15 per accompanying adult"
                  }
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-stone-dark mb-3 flex items-center gap-2">
                  <span>🎒</span> {locale === 'fr' ? "À prévoir" : "What to Bring"}
                </h4>
                <p className="text-stone">
                  {locale === 'fr'
                    ? "Chaussures de marche, eau, snack, vêtements adaptés"
                    : "Hiking shoes, water, snack, appropriate clothing"
                  }
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-stone-dark mb-3 flex items-center gap-2">
                  <span>👥</span> {locale === 'fr' ? "Groupe" : "Group"}
                </h4>
                <p className="text-stone">
                  {locale === 'fr' ? "Maximum 12 enfants par sortie" : "Maximum 12 children per outing"}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-stone-dark mb-3 flex items-center gap-2">
                  <span>☔</span> {locale === 'fr' ? "Météo" : "Weather"}
                </h4>
                <p className="text-stone">
                  {locale === 'fr' ? "Report en cas de mauvais temps" : "Postponed in case of bad weather"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

