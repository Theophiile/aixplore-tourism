'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';
import { getTranslation } from '@/lib/translations';

export default function NatureFamillePage({ params }) {
  const { locale } = params;
  const t = (key) => getTranslation(locale, key);

  const activities = [
    {
      title: locale === 'fr' ? "Chasse aux couleurs" : "Color Hunt",
      description: locale === 'fr' 
        ? "Observer les teintes du printemps et trouver dans la nature les éléments correspondant à chaque couleur."
        : "Observe the spring hues and find natural elements matching each color.",
      image: "/images/family-tracks.jpg",
      date: locale === 'fr' ? "19 avril 2026" : "April 19, 2026",
      location: locale === 'fr' ? "Le Mollard Noir" : "Le Mollard Noir",
      href: `/${locale}/nature-famille/chasse-couleurs`
    },
    {
      title: locale === 'fr' ? "Chasse au trésor nature" : "Nature Treasure Hunt",
      description: locale === 'fr'
        ? "Résoudre des énigmes, suivre des indices et redécouvrir la montagne en jouant."
        : "Solve riddles, follow clues and rediscover the mountain while playing.",
      image: "/images/family-forest.jpg",
      date: locale === 'fr' ? "17 mai 2026" : "May 17, 2026",
      location: locale === 'fr' ? "Croix des Bergers" : "Croix des Bergers",
      href: `/${locale}/nature-famille/chasse-tresor`
    },
    {
      title: locale === 'fr' ? "Herbier coloré" : "Colorful Herbarium",
      description: locale === 'fr'
        ? "Créer un herbier artistique à partir des fleurs et feuilles ramassées sur le chemin."
        : "Create an artistic herbarium from flowers and leaves collected along the way.",
      image: "/images/family-plants.jpg",
      date: locale === 'fr' ? "14 juin 2026" : "June 14, 2026",
      location: locale === 'fr' ? "Lac de Lathuile" : "Lake Lathuile",
      href: `/${locale}/nature-famille/herbier`
    },
    {
      title: locale === 'fr' ? "Écoute sensorielle" : "Sensory Listening",
      description: locale === 'fr'
        ? "Se poser, fermer les yeux, écouter la cascade et reconnaître les sons des oiseaux."
        : "Pause, close your eyes, listen to the waterfall and recognize bird sounds.",
      image: "/images/family-water.jpg",
      date: locale === 'fr' ? "28 juin 2026" : "June 28, 2026",
      location: locale === 'fr' ? "Cascade de Pissieu" : "Pissieu Waterfall",
      href: `/${locale}/nature-famille/ecoute-oiseaux`
    },
    {
      title: locale === 'fr' ? "Land Art & Nature" : "Land Art & Nature",
      description: locale === 'fr'
        ? "Réaliser un tableau naturel à partir de bois, pierres, feuilles et terre."
        : "Create a natural artwork using wood, stones, leaves and earth.",
      image: "/images/family-cabins.jpg",
      date: locale === 'fr' ? "30 août 2026" : "August 30, 2026",
      location: locale === 'fr' ? "Lacs de Chevelu" : "Chevelu Lakes",
      href: `/${locale}/nature-famille/land-art`
    },
    {
      title: locale === 'fr' ? "Le mystère du disque céleste" : "The Celestial Disc Mystery",
      description: locale === 'fr'
        ? "Jeu d'observation et d'imaginaire autour des étoiles et des légendes anciennes."
        : "Observation and imagination game around stars and ancient legends.",
      image: "/images/family-birds.jpg",
      date: locale === 'fr' ? "13 septembre 2026" : "September 13, 2026",
      location: locale === 'fr' ? "Grotte du Loup (Nances)" : "Wolf Cave (Nances)",
      href: `/${locale}/nature-famille/disque-celeste`
    },
    {
      title: locale === 'fr' ? "Les secrets des champignons" : "Mushroom Secrets",
      description: locale === 'fr'
        ? "Jeu \"cherche et trouve\" et découverte de la vie du sol."
        : "\"Seek and find\" game and discover life in the soil.",
      image: "/images/family-forest.jpg",
      date: locale === 'fr' ? "18 octobre 2026" : "October 18, 2026",
      location: locale === 'fr' ? "Verel Pragondran" : "Verel Pragondran",
      href: `/${locale}/nature-famille/champignons`
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-lake to-lake-dark">
        <div className="text-center text-white px-4 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-light mb-6 drop-shadow-2xl"
          >
            {locale === 'fr' ? "Les Rendez-vous Nature en Famille" : "Family Nature Outings"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl font-playfair italic max-w-3xl mx-auto font-light drop-shadow-lg"
          >
            {locale === 'fr'
              ? "Grandir ensemble, les pieds dans l'herbe et les yeux grands ouverts"
              : "Growing together, feet in the grass and eyes wide open"
            }
          </motion.p>
        </div>
      </section>

      {/* Section Introduction */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-stone font-montserrat font-light leading-relaxed"
          >
            <p>
              {locale === 'fr'
                ? "Et si, le temps d'une matinée, on laissait les écrans de côté pour écouter le vent, toucher les feuilles, sentir la mousse et rire en famille ?"
                : "What if, for a morning, we put screens aside to listen to the wind, touch the leaves, smell the moss and laugh together as a family?"
              }
            </p>
            <p>
              {locale === 'fr'
                ? "Les Rendez-vous Nature en Famille d'Aixplore Tourism sont des sorties sensorielles et ludiques pensées pour les enfants de 5 à 12 ans et leurs parents."
                : "Aixplore Tourism's Family Nature Outings are sensory and playful outings designed for children aged 5 to 12 and their parents."
              }
            </p>
            <p>
              {locale === 'fr'
                ? "Chaque rencontre est une invitation à explorer la nature autrement, à stimuler la curiosité, à apprendre en s'amusant et à vivre ensemble des émotions simples et vraies."
                : "Each outing is an invitation to explore nature differently, stimulate curiosity, learn while having fun and experience simple and true emotions together."
              }
            </p>
            <p className="font-semibold text-stone-dark">
              {locale === 'fr'
                ? "Dans la forêt, au bord de l'eau ou en montagne, petits et grands découvrent les trésors de la Savoie à travers leurs cinq sens : observer, écouter, toucher, respirer, ressentir."
                : "In the forest, by the water or in the mountains, young and old discover the treasures of Savoie through their five senses: observe, listen, touch, breathe, feel."
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Pourquoi */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "Pourquoi ces rendez-vous ?" : "Why These Outings?"}
            </h2>
            <p className="text-2xl font-playfair italic text-lake-dark mb-6 font-light">
              {locale === 'fr'
                ? "Parce que la nature est la plus belle salle de classe du monde."
                : "Because nature is the most beautiful classroom in the world."
              }
            </p>
            <p className="text-lg text-stone font-montserrat font-light mb-4">
              {locale === 'fr'
                ? "Les études montrent que les enfants qui passent du temps dehors développent :"
                : "Studies show that children who spend time outdoors develop:"
              }
            </p>
            <ul className="space-y-2 text-lg text-stone font-montserrat font-light ml-6">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>
                  {locale === 'fr'
                    ? "une meilleure concentration et mémoire,"
                    : "better concentration and memory,"
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>
                  {locale === 'fr'
                    ? "plus de créativité et de confiance en eux,"
                    : "more creativity and self-confidence,"
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>
                  {locale === 'fr'
                    ? "une connexion profonde à leur environnement,"
                    : "a deep connection to their environment,"
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>
                  {locale === 'fr'
                    ? "et davantage d'empathie et de coopération."
                    : "and greater empathy and cooperation."
                  }
                </span>
              </li>
            </ul>
            <p className="text-lg text-stone font-montserrat font-light mt-6">
              {locale === 'fr'
                ? "Ces matinées sont conçues comme des bulles d'éveil et de bien-être, où chaque famille retrouve le plaisir de marcher, jouer et créer ensemble, loin des sollicitations du quotidien."
                : "These mornings are designed as bubbles of awakening and well-being, where each family rediscovers the pleasure of walking, playing and creating together, away from daily demands."
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Programme 2025-2026 */}
      <section className="section-padding bg-gradient-to-br from-lake-light to-beige-light">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-light text-stone-dark mb-4 text-center"
          >
            {locale === 'fr' ? "Programme 2026" : "2026 Program"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-stone font-montserrat font-light mb-12 max-w-2xl mx-auto text-lg"
          >
            {locale === 'fr'
              ? "7 sorties sensorielles et ludiques pour explorer la Savoie en famille"
              : "7 sensory and playful outings to explore Savoie as a family"
            }
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-lake-light/50 to-gold/50 flex items-center justify-center">
                    <span className="text-6xl">{item.title.split(' ')[0]}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-gold font-montserrat font-normal mb-1">
                    {item.date}
                  </p>
                  <p className="text-sm text-lake font-montserrat font-normal mb-3">
                    {item.location}
                  </p>
                  <h3 className="text-xl font-playfair font-normal text-stone-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-stone font-montserrat font-light leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="mt-auto">
                    <Button href={item.href} variant="lake">
                      {locale === 'fr' ? "En savoir plus" : "Learn more"}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Ce que vos enfants vont découvrir */}
      <section className="section-padding bg-beige">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-light text-stone-dark mb-8 text-center">
              {locale === 'fr' ? "Ce que vos enfants vont y découvrir" : "What Your Children Will Discover"}
            </h2>
            <ul className="space-y-4 text-lg text-stone font-montserrat font-light">
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">•</span>
                <span>
                  {locale === 'fr'
                    ? "Le plaisir d'apprendre sans s'en rendre compte, en observant, en jouant, en manipulant."
                    : "The pleasure of learning without realizing it, by observing, playing, manipulating."
                  }
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">•</span>
                <span>
                  {locale === 'fr'
                    ? "La joie de créer à partir d'éléments naturels : herbiers, œuvres d'art, petits bateaux, trésors cachés."
                    : "The joy of creating from natural elements: herbariums, artworks, small boats, hidden treasures."
                  }
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">•</span>
                <span>
                  {locale === 'fr'
                    ? "Le bonheur d'être ensemble, dehors, dans la lumière, le vent, la forêt."
                    : "The happiness of being together, outside, in the light, wind, forest."
                  }
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">•</span>
                <span>
                  {locale === 'fr'
                    ? "Une connexion sensorielle et émotionnelle à la nature, essentielle à leur équilibre."
                    : "A sensory and emotional connection to nature, essential for their balance."
                  }
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Section Informations Pratiques */}
      <section className="section-padding bg-lake text-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-light mb-4">
              {locale === 'fr' ? "Informations pratiques" : "Practical Information"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 font-montserrat">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-normal mb-2 flex items-center gap-2">
                {locale === 'fr' ? "Durée" : "Duration"}
              </h3>
              <p>{locale === 'fr' ? "environ 3h à 4h" : "approximately 3 to 4 hours"}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-normal mb-2 flex items-center gap-2">
                {locale === 'fr' ? "Public" : "Audience"}
              </h3>
              <p>{locale === 'fr' ? "familles avec enfants de 5 à 12 ans" : "families with children aged 5 to 12"}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-normal mb-2 flex items-center gap-2">
                {locale === 'fr' ? "Niveau" : "Level"}
              </h3>
              <p>{locale === 'fr' ? "facile, accessible à tous" : "easy, accessible to all"}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-normal mb-2 flex items-center gap-2">
                {locale === 'fr' ? "Lieux" : "Locations"}
              </h3>
              <p>
                {locale === 'fr'
                  ? "autour d'Aix-les-Bains, du lac du Bourget et du massif des Bauges"
                  : "around Aix-les-Bains, Lake Bourget and Bauges mountains"
                }
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-normal mb-4 flex items-center gap-2">
              {locale === 'fr' ? "À prévoir" : "What to Bring"}
            </h3>
            <p className="text-beige-light font-light">
              {locale === 'fr'
                ? "chaussures fermées, eau, chapeau, curiosité et bonne humeur !"
                : "closed shoes, water, hat, curiosity and good mood!"
              }
            </p>
          </div>
        </div>
      </section>

      {/* Section Tarifs */}
      <section className="section-padding bg-gradient-to-br from-stone-dark to-lake-dark text-white">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-light mb-8 text-center">
              {locale === 'fr' ? "Tarifs & Réservation" : "Rates & Booking"}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="text-xl font-normal mb-2">
                  {locale === 'fr' ? "Enfant" : "Child"}
                </h3>
                <p className="text-sm text-beige-light mb-2">
                  {locale === 'fr' ? "(5 à 12 ans)" : "(5 to 12 years)"}
                </p>
                <p className="text-3xl font-bold text-gold">€13</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="text-xl font-normal mb-2">
                  {locale === 'fr' ? "Adulte" : "Adult"}
                </h3>
                <p className="text-sm text-beige-light mb-2">
                  {locale === 'fr' ? "accompagnant" : "accompanying"}
                </p>
                <p className="text-3xl font-bold text-gold">€9</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="text-xl font-normal mb-2">
                  {locale === 'fr' ? "Forfait famille" : "Family Package"}
                </h3>
                <p className="text-sm text-beige-light mb-2">
                  {locale === 'fr' ? "(2 adultes + 2 enfants)" : "(2 adults + 2 children)"}
                </p>
                <p className="text-3xl font-bold text-gold">€40</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="text-xl font-normal mb-2">
                  {locale === 'fr' ? "Supplémentaire" : "Additional"}
                </h3>
                <p className="text-sm text-beige-light mb-2">
                  {locale === 'fr' ? "participant" : "participant"}
                </p>
                <p className="text-3xl font-bold text-gold">€7</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 space-y-4">
              <p className="text-beige-light font-montserrat font-light">
                {locale === 'fr'
                  ? "Réservation obligatoire – les places sont limitées pour préserver la qualité du moment partagé."
                  : "Booking required – spots are limited to preserve the quality of the shared moment."
                }
              </p>
              <p className="text-beige-light font-montserrat font-light">
                {locale === 'fr'
                  ? "Réservation obligatoire – sorties limitées à 10 familles."
                  : "Booking required – outings limited to 10 families."
                }
              </p>
              <p className="text-beige-light font-montserrat font-light">
                {locale === 'fr'
                  ? "Paiement par carte ou virement au moment de la réservation."
                  : "Payment by card or bank transfer upon booking."
                }
              </p>
              <p className="text-beige-light font-montserrat font-light">
                {locale === 'fr'
                  ? "En cas de météo défavorable : Si la sortie ne peut pas être maintenue, une autre date vous sera proposée, ou vous pourrez choisir un remboursement intégral."
                  : "In case of unfavorable weather: If the outing cannot be maintained, another date will be offered, or you can choose a full refund."
                }
              </p>
            </div>

            <div className="text-center mt-8">
              <Button href={`/${locale}/contact`} variant="gold">
                {locale === 'fr' ? "Réserver maintenant" : "Book now"}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section L'esprit Aixplore */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-8">
              {locale === 'fr' ? "L'esprit Aixplore" : "The Aixplore Spirit"}
            </h2>
            <div className="space-y-4 text-lg text-stone font-montserrat font-light leading-relaxed">
              <p className="italic">
                {locale === 'fr'
                  ? "Parce qu'un souvenir d'enfance commence souvent par une promenade dans la nature."
                  : "Because a childhood memory often begins with a walk in nature."
                }
              </p>
              <p className="italic">
                {locale === 'fr'
                  ? "Parce que grandir, c'est aussi apprendre à regarder le monde autrement."
                  : "Because growing up also means learning to see the world differently."
                }
              </p>
              <p className="font-normal text-stone-dark">
                {locale === 'fr'
                  ? "Ces balades sont des moments de complicité, d'émerveillement et de lenteur, où chaque rire résonne entre les arbres et chaque pas devient une découverte."
                  : "These walks are moments of complicity, wonder and slowness, where every laugh resonates through the trees and every step becomes a discovery."
                }
              </p>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-lake-light to-gold-light rounded-lg">
              <p className="text-2xl font-playfair italic text-stone-dark font-light">
                {locale === 'fr'
                  ? "Rejoignez les Petits Explorateurs d'Aixplore et offrez à vos enfants le plus beau des cadeaux : le temps de s'émerveiller."
                  : "Join the Little Explorers of Aixplore and give your children the most beautiful gift: time to wonder."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
