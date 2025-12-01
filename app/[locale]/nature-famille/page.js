'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/Card';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';
import { getTranslation } from '@/lib/translations';

export default function NatureFamillePage({ params }) {
  const { locale } = params;
  const t = (key) => getTranslation(locale, key);
  const [openEnfants, setOpenEnfants] = useState(false); // État pour la section enfants
  const [openInfos, setOpenInfos] = useState(false); // État pour la section infos

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
      <section className="relative h-screen w-screen lg:-ml-56 flex items-center justify-center bg-[#124e78]">
        {/* Image de fond optimisée */}
        <Image
          src="/images/rendez-vous_nature_en_famille.webp"
          alt="Rendez-vous nature en famille"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay sombre */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
        
        <div className="text-center text-white/90 px-4 z-10 relative lg:ml-56">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-playfair font-light mb-6 drop-shadow-lg"
          >
            {locale === 'fr' ? "Les Rendez-vous Nature en Famille" : "Family Nature Outings"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-playfair italic max-w-3xl mx-auto font-light drop-shadow-md"
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
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4 text-base text-stone/80 font-montserrat font-light leading-relaxed"
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
            <p className="font-medium text-stone-dark">
              {locale === 'fr'
                ? "Dans la forêt, au bord de l'eau ou en montagne, petits et grands découvrent les trésors de la Savoie à travers leurs cinq sens : observer, écouter, toucher, respirer, ressentir."
                : "In the forest, by the water or in the mountains, young and old discover the treasures of Savoie through their five senses: observe, listen, touch, breathe, feel."
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Pourquoi */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-playfair font-light text-stone-dark mb-4">
              {locale === 'fr' ? "Pourquoi ces rendez-vous ?" : "Why These Outings?"}
            </h2>
            <p className="text-lg font-playfair italic text-lake mb-8 font-light">
              {locale === 'fr'
                ? "Parce que la nature est la plus belle salle de classe du monde."
                : "Because nature is the most beautiful classroom in the world."
              }
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-lake/20"
              >
                <p className="text-base text-stone font-montserrat font-light">
                  {locale === 'fr'
                    ? "Une meilleure concentration et mémoire"
                    : "Better concentration and memory"
                  }
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-lake/20"
              >
                <p className="text-base text-stone font-montserrat font-light">
                  {locale === 'fr'
                    ? "Plus de créativité et de confiance en soi"
                    : "More creativity and self-confidence"
                  }
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-lake/20"
              >
                <p className="text-base text-stone font-montserrat font-light">
                  {locale === 'fr'
                    ? "Une connexion profonde à l'environnement"
                    : "A deep connection to the environment"
                  }
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-lake/20"
              >
                <p className="text-base text-stone font-montserrat font-light">
                  {locale === 'fr'
                    ? "Davantage d'empathie et de coopération"
                    : "Greater empathy and cooperation"
                  }
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Programme 2026 */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-playfair font-light text-stone-dark mb-3 text-center"
          >
            {locale === 'fr' ? "Programme 2026" : "2026 Program"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-stone/70 font-montserrat font-light mb-12 max-w-2xl mx-auto text-base"
          >
            {locale === 'fr'
              ? "7 sorties sensorielles et ludiques pour explorer la Savoie en famille"
              : "7 sensory and playful outings to explore Savoie as a family"
            }
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {activities.map((item, index) => (
              <Link key={index} href={item.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden border border-stone/10 hover:border-lake/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer"
                >
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="mb-3">
                      <p className="text-xs text-gold font-montserrat font-medium mb-1">
                        {item.date}
                      </p>
                      <p className="text-xs text-lake font-montserrat font-normal">
                        {item.location}
                      </p>
                    </div>
                    <h3 className="text-lg font-playfair font-normal text-stone-dark mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-stone/80 font-montserrat font-light leading-relaxed text-sm flex-grow">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section Ce que vos enfants vont découvrir & Informations Pratiques */}
      <section className="bg-beige-light">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* Ce que vos enfants vont découvrir */}
              <div className="bg-white rounded-lg border border-lake/20 shadow-sm overflow-hidden">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenEnfants(!openEnfants);
                  }}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-beige-light/30 transition-colors"
                  type="button"
                >
                  <h2 className="text-lg font-playfair font-light text-stone-dark">
                    {locale === 'fr' ? "Ce que vos enfants vont y découvrir" : "What Your Children Will Discover"}
                  </h2>
                  <svg
                    className={`w-5 h-5 text-stone-dark transition-transform duration-300 flex-shrink-0 ml-2 ${
                      openEnfants ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openEnfants ? (
                  <div className="p-5 pt-0 space-y-4">
                    <div className="bg-beige-light rounded-lg p-4">
                      <p className="text-sm text-stone font-montserrat font-light">
                        {locale === 'fr'
                          ? "Le plaisir d'apprendre sans s'en rendre compte, en observant, en jouant, en manipulant"
                          : "The pleasure of learning without realizing it, by observing, playing, manipulating"
                        }
                      </p>
                    </div>
                    <div className="bg-beige-light rounded-lg p-4">
                      <p className="text-sm text-stone font-montserrat font-light">
                        {locale === 'fr'
                          ? "La joie de créer à partir d'éléments naturels : herbiers, œuvres d'art, petits bateaux, trésors cachés"
                          : "The joy of creating from natural elements: herbariums, artworks, small boats, hidden treasures"
                        }
                      </p>
                    </div>
                    <div className="bg-beige-light rounded-lg p-4">
                      <p className="text-sm text-stone font-montserrat font-light">
                        {locale === 'fr'
                          ? "Le bonheur d'être ensemble, dehors, dans la lumière, le vent, la forêt"
                          : "The happiness of being together, outside, in the light, wind, forest"
                        }
                      </p>
                    </div>
                    <div className="bg-beige-light rounded-lg p-4">
                      <p className="text-sm text-stone font-montserrat font-light">
                        {locale === 'fr'
                          ? "Une connexion sensorielle et émotionnelle à la nature, essentielle à leur équilibre"
                          : "A sensory and emotional connection to nature, essential for their balance"
                        }
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Informations pratiques */}
              <div className="bg-white rounded-lg border border-lake/20 shadow-sm overflow-hidden">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenInfos(!openInfos);
                  }}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-beige-light/30 transition-colors"
                  type="button"
                >
                  <h2 className="text-lg font-playfair font-light text-stone-dark">
                    {locale === 'fr' ? "Informations pratiques" : "Practical Information"}
                  </h2>
                  <svg
                    className={`w-5 h-5 text-stone-dark transition-transform duration-300 flex-shrink-0 ml-2 ${
                      openInfos ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openInfos ? (
                  <div className="p-5 pt-0 space-y-4 font-montserrat">
                    <div className="bg-beige-light rounded-lg p-4">
                      <h3 className="text-base font-medium mb-2 text-stone-dark">
                        {locale === 'fr' ? "Durée" : "Duration"}
                      </h3>
                      <p className="text-sm text-stone/80 font-light">{locale === 'fr' ? "environ 3h à 4h" : "approximately 3 to 4 hours"}</p>
                    </div>
                    <div className="bg-beige-light rounded-lg p-4">
                      <h3 className="text-base font-medium mb-2 text-stone-dark">
                        {locale === 'fr' ? "Public" : "Audience"}
                      </h3>
                      <p className="text-sm text-stone/80 font-light">{locale === 'fr' ? "familles avec enfants de 5 à 12 ans" : "families with children aged 5 to 12"}</p>
                    </div>
                    <div className="bg-beige-light rounded-lg p-4">
                      <h3 className="text-base font-medium mb-2 text-stone-dark">
                        {locale === 'fr' ? "Niveau" : "Level"}
                      </h3>
                      <p className="text-sm text-stone/80 font-light">{locale === 'fr' ? "facile, accessible à tous" : "easy, accessible to all"}</p>
                    </div>
                    <div className="bg-beige-light rounded-lg p-4">
                      <h3 className="text-base font-medium mb-2 text-stone-dark">
                        {locale === 'fr' ? "Lieux" : "Locations"}
                      </h3>
                      <p className="text-sm text-stone/80 font-light">
                        {locale === 'fr'
                          ? "autour d'Aix-les-Bains, du lac du Bourget et du massif des Bauges"
                          : "around Aix-les-Bains, Lake Bourget and Bauges mountains"
                        }
                      </p>
                    </div>
                    <div className="bg-beige-light rounded-lg p-4">
                      <h3 className="text-base font-medium mb-2 text-stone-dark">
                        {locale === 'fr' ? "À prévoir" : "What to Bring"}
                      </h3>
                      <p className="text-sm text-stone/80 font-light">
                        {locale === 'fr'
                          ? "chaussures fermées, eau, chapeau, curiosité et bonne humeur !"
                          : "closed shoes, water, hat, curiosity and good mood!"
                        }
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Tarifs */}
      <section className="py-16 bg-beige-light">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-playfair font-light mb-3 text-center text-stone-dark">
              {locale === 'fr' ? "Tarifs & Réservation" : "Rates & Booking"}
            </h2>
            <p className="text-center text-stone/60 font-montserrat font-light text-sm mb-12">
              {locale === 'fr' ? "Des tarifs adaptés pour toute la famille" : "Rates adapted for the whole family"}
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white hover:bg-gradient-to-br hover:from-lake/10 hover:to-gold/10 rounded-xl p-6 text-center border border-stone/10 hover:border-lake/20 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-sm font-montserrat font-medium mb-1 text-stone-dark uppercase tracking-wide">
                  {locale === 'fr' ? "Enfant" : "Child"}
                </h3>
                <p className="text-xs text-stone/60 mb-4 font-montserrat font-light">
                  {locale === 'fr' ? "(5 à 12 ans)" : "(5 to 12 years)"}
                </p>
                <div className="flex items-baseline justify-center">
                  <p className="text-4xl font-playfair font-light text-stone-dark">13</p>
                  <p className="text-xl font-playfair font-light text-stone-dark ml-1">€</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white hover:bg-gradient-to-br hover:from-lake/10 hover:to-gold/10 rounded-xl p-6 text-center border border-stone/10 hover:border-lake/20 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-sm font-montserrat font-medium mb-1 text-stone-dark uppercase tracking-wide">
                  {locale === 'fr' ? "Adulte" : "Adult"}
                </h3>
                <p className="text-xs text-stone/60 mb-4 font-montserrat font-light">
                  {locale === 'fr' ? "accompagnant" : "accompanying"}
                </p>
                <div className="flex items-baseline justify-center">
                  <p className="text-4xl font-playfair font-light text-stone-dark">9</p>
                  <p className="text-xl font-playfair font-light text-stone-dark ml-1">€</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white hover:bg-gradient-to-br hover:from-lake/10 hover:to-gold/10 rounded-xl p-6 text-center border border-stone/10 hover:border-lake/20 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-sm font-montserrat font-medium mb-1 text-stone-dark uppercase tracking-wide">
                  {locale === 'fr' ? "Forfait famille" : "Family Pack"}
                </h3>
                <p className="text-xs text-stone/60 mb-4 font-montserrat font-light">
                  {locale === 'fr' ? "(2 adultes + 2 enfants)" : "(2 adults + 2 children)"}
                </p>
                <div className="flex items-baseline justify-center">
                  <p className="text-4xl font-playfair font-light text-stone-dark">40</p>
                  <p className="text-xl font-playfair font-light text-stone-dark ml-1">€</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white hover:bg-gradient-to-br hover:from-lake/10 hover:to-gold/10 rounded-xl p-6 text-center border border-stone/10 hover:border-lake/20 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-sm font-montserrat font-medium mb-1 text-stone-dark uppercase tracking-wide">
                  {locale === 'fr' ? "Supplément" : "Additional"}
                </h3>
                <p className="text-xs text-stone/60 mb-4 font-montserrat font-light">
                  {locale === 'fr' ? "par participant" : "per participant"}
                </p>
                <div className="flex items-baseline justify-center">
                  <p className="text-4xl font-playfair font-light text-stone-dark">7</p>
                  <p className="text-xl font-playfair font-light text-stone-dark ml-1">€</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-xl p-8 space-y-4 border border-stone/10 shadow-sm max-w-3xl mx-auto"
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-lake flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-stone/80 font-montserrat font-light text-sm">
                  {locale === 'fr'
                    ? "Réservation obligatoire – sorties limitées à 10 familles pour garantir une expérience de qualité."
                    : "Booking required – outings limited to 10 families to ensure a quality experience."
                  }
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-lake flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-stone/80 font-montserrat font-light text-sm">
                  {locale === 'fr'
                    ? "Paiement sécurisé par carte ou virement au moment de la réservation."
                    : "Secure payment by card or bank transfer upon booking."
                  }
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-lake flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-stone/80 font-montserrat font-light text-sm">
                  {locale === 'fr'
                    ? "En cas de météo défavorable : report ou remboursement intégral sans frais."
                    : "In case of unfavorable weather: postponement or full refund without fees."
                  }
                </p>
              </div>
            </motion.div>

            <div className="text-center mt-10">
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
            <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "L'esprit Aixplore" : "The Aixplore Spirit"}
            </h2>
            <div className="space-y-4 text-base text-stone/80 font-montserrat font-light leading-relaxed max-w-3xl mx-auto">
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

            <div className="mt-10 p-8 bg-gradient-to-r from-lake-light to-gold-light rounded-lg shadow-sm border border-lake/10">
              <p className="text-lg font-playfair italic text-stone-dark font-light">
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
