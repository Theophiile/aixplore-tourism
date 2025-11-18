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
      title: "À la Découverte des Traces d'Animaux",
      description: "Apprenez à reconnaître les traces et indices de présence de la faune alpine. Une aventure ludique et éducative pour petits et grands.",
      image: "/images/family-tracks.jpg",
      date: "Samedi 15 juin 2025",
      href: `/${locale}/nature-famille/traces-animaux`
    },
    {
      title: "Les Secrets de la Forêt",
      description: "Explorez l'écosystème forestier et découvrez les plantes, arbres et petits habitants de nos forêts alpines.",
      image: "/images/family-forest.jpg",
      date: "Dimanche 23 juin 2025",
      href: `/${locale}/nature-famille/secrets-foret`
    },
    {
      title: "Atelier Construction de Cabanes",
      description: "Un atelier créatif en pleine nature où les enfants apprennent à construire leur cabane avec des matériaux naturels.",
      image: "/images/family-cabins.jpg",
      date: "Samedi 13 juillet 2025",
      href: `/${locale}/nature-famille/cabanes`
    },
    {
      title: "Observation des Oiseaux",
      description: "Initiation à l'ornithologie pour toute la famille. Jumelles fournies pour observer les oiseaux de montagne.",
      image: "/images/family-birds.jpg",
      date: "Dimanche 28 juillet 2025",
      href: `/${locale}/nature-famille/oiseaux`
    },
    {
      title: "Balade au Fil de l'Eau",
      description: "Suivez le cours d'une rivière alpine et découvrez son écosystème fascinant, de la source jusqu'au lac.",
      image: "/images/family-water.jpg",
      date: "Samedi 10 août 2025",
      href: `/${locale}/nature-famille/fil-eau`
    },
    {
      title: "Cueillette et Herbier Alpin",
      description: "Apprenez à reconnaître les plantes comestibles et médicinales des Alpes, et créez votre propre herbier.",
      image: "/images/family-plants.jpg",
      date: "Dimanche 24 août 2025",
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
            Rendez-vous Nature en Famille
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-montserrat max-w-2xl mx-auto"
          >
            Des activités ludiques et éducatives pour découvrir la nature alpine
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
              Éveillez la Curiosité de vos Enfants 🌿
            </h2>
            <p className="text-lg text-stone font-montserrat leading-relaxed mb-8">
              Nos rendez-vous nature sont spécialement conçus pour les familles. À travers des 
              activités interactives et ludiques, vos enfants découvriront les merveilles de la 
              nature alpine tout en s&apos;amusant. Chaque sortie est une aventure éducative 
              adaptée aux enfants de 5 à 12 ans.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
                <h3 className="font-playfair font-bold text-lg text-stone-dark mb-2">
                  Activités familiales
                </h3>
                <p className="text-sm text-stone">Adaptées aux enfants et aux parents</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="font-playfair font-bold text-lg text-stone-dark mb-2">
                  Approche pédagogique
                </h3>
                <p className="text-sm text-stone">Apprendre en s&apos;amusant</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-3">🌲</div>
                <h3 className="font-playfair font-bold text-lg text-stone-dark mb-2">
                  En pleine nature
                </h3>
                <p className="text-sm text-stone">Des lieux magiques et préservés</p>
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
            Nos Prochains Rendez-vous 2025
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
                buttonText="En savoir plus"
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
              Informations Pratiques
            </h3>
            <div className="grid md:grid-cols-2 gap-6 font-montserrat">
              <div>
                <h4 className="font-semibold text-lg text-stone-dark mb-3 flex items-center gap-2">
                  <span>⏰</span> Durée
                </h4>
                <p className="text-stone">Demi-journée (environ 3 heures)</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-stone-dark mb-3 flex items-center gap-2">
                  <span>👶</span> Âge recommandé
                </h4>
                <p className="text-stone">De 5 à 12 ans (accompagnés d&apos;un adulte)</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-stone-dark mb-3 flex items-center gap-2">
                  <span>💰</span> Tarifs
                </h4>
                <p className="text-stone">25€ par enfant, 15€ par adulte accompagnant</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-stone-dark mb-3 flex items-center gap-2">
                  <span>🎒</span> À prévoir
                </h4>
                <p className="text-stone">Chaussures de marche, eau, snack, vêtements adaptés</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-stone-dark mb-3 flex items-center gap-2">
                  <span>👥</span> Groupe
                </h4>
                <p className="text-stone">Maximum 12 enfants par sortie</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-stone-dark mb-3 flex items-center gap-2">
                  <span>☔</span> Météo
                </h4>
                <p className="text-stone">Report en cas de mauvais temps</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

