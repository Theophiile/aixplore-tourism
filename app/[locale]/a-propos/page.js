'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/Button';
import { useState, useEffect } from 'react';

export default function AProposPage({ params }) {
  const { locale } = params;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Fiona",
      country: "United Kingdom",
      text: "What a wonderful day! Anaïs was a super, knowledgeable and fun guide. The sights were breathtaking!",
      rating: 5
    },
    {
      name: "Célia",
      country: "France",
      text: "Super journée en compagnie de notre guide Anaïs. Elle nous a fait partager toutes ses connaissances avec beaucoup d'humour et de sympathie.",
      rating: 5
    },
    {
      name: "Andres",
      country: "Chili",
      text: "It was awesome! We had the chance to know many iconic places. 100% recommended!",
      rating: 5
    },
    {
      name: "Annie",
      country: "Australia",
      text: "Wonderful day trip. Our guide was so friendly and knowledgeable about the region.",
      rating: 5
    },
    {
      name: "Marie-France",
      country: "France",
      text: "L'animation faite par Anaïs a été fort intéressante ! C'est une personne professionnelle et chaleureuse.",
      rating: 5
    },
    {
      name: "Daniel",
      country: "Switzerland",
      text: "Der Ausflug war einfach wunderbar. Die Reiseleitung zeigte sich äußerst zuvorkommend.",
      rating: 5
    }
  ];

  const values = [
    {
      title: locale === 'fr' ? "Authenticité" : "Authenticity",
      desc: locale === 'fr' ? "Parler vrai, vivre vrai." : "Speaking true, living true."
    },
    {
      title: locale === 'fr' ? "Émerveillement" : "Wonder",
      desc: locale === 'fr' ? "Offrir des instants suspendus." : "Offering suspended moments."
    },
    {
      title: locale === 'fr' ? "Transmission" : "Transmission",
      desc: locale === 'fr' ? "Partager la richesse de la Savoie." : "Sharing Savoie's wealth."
    },
    {
      title: locale === 'fr' ? "Respect" : "Respect",
      desc: locale === 'fr' ? "De la nature et des émotions." : "Of nature and emotions."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen w-screen lg:-ml-56 flex items-center justify-center bg-[#124e78]">
        <div className="text-center text-white/90 px-4 z-10 relative lg:ml-56">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-playfair font-light mb-6 drop-shadow-lg"
          >
            Aixplore Tourism
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-playfair font-light italic max-w-3xl mx-auto drop-shadow-md"
          >
            {locale === 'fr' 
              ? "Entre lac et montagnes, une invitation à ressentir"
              : "Between lake and mountains, an invitation to feel"
            }
          </motion.p>
        </div>
      </section>

      {/* Section Introduction */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl font-playfair italic text-lake mb-6">
              {locale === 'fr' 
                ? "Ici, tout commence par un souffle."
                : "Here, everything begins with a breath."
              }
            </p>
            <div className="space-y-4 font-montserrat font-light text-base text-stone/80 leading-relaxed">
              <p>
                {locale === 'fr'
                  ? "Celui du vent sur le lac du Bourget, celui des forêts du Revard, celui d'une voix qui raconte la Savoie autrement."
                  : "The wind over Lake Bourget, the forests of Revard, the voice that tells Savoie differently."
                }
              </p>
              <p className="font-normal text-stone-dark">
                {locale === 'fr'
                  ? "Nous proposons des excursions intimistes et guidées avec passion, pour que chaque visiteur reparte avec plus qu'un souvenir : une émotion."
                  : "We offer intimate and passionately guided excursions, so that each visitor leaves with more than a memory: an emotion."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section L'esprit Aixplore */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-6 text-center">
              {locale === 'fr' ? "L'esprit Aixplore" : "The Aixplore Spirit"}
            </h2>
            <div className="space-y-4 font-montserrat font-light text-base text-stone/80 leading-relaxed text-center">
              <p>
                {locale === 'fr'
                  ? "Nous croyons qu'explorer, c'est prendre le temps de regarder, d'écouter et de ressentir."
                  : "We believe that exploring means taking the time to look, listen and feel."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Nos excursions mêlent histoire, nature, culture et convivialité — toujours dans une ambiance simple et sincère."
                  : "Our excursions blend history, nature, culture and conviviality — always in a simple and sincere atmosphere."
                }
              </p>
            </div>
            <div className="mt-8 bg-white rounded-xl p-6 border border-lake/20">
              <p className="text-lg font-playfair italic text-stone-dark text-center">
                {locale === 'fr'
                  ? "\"Je ne cherche pas à impressionner, mais à émerveiller.\""
                  : "\"I don't seek to impress, but to inspire wonder.\""
                }
              </p>
              <p className="text-right mt-3 font-montserrat text-sm text-stone/70">
                — Anaïs Husson
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Anaïs Husson */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-6 text-center">
              {locale === 'fr' ? "Une guide, une passion" : "A Guide, A Passion"}
            </h2>
            <div className="space-y-4 font-montserrat font-light text-base text-stone/80 leading-relaxed text-center">
              <p>
                {locale === 'fr'
                  ? "Formée à la médiation culturelle et titulaire du brevet d'accompagnatrice en montagne, Anaïs Husson a créé Aixplore pour partager ce qu'elle aime le plus : la beauté des petits détails."
                  : "Trained in cultural mediation and holding a mountain guide certificate, Anaïs Husson created Aixplore to share what she loves most: the beauty of small details."
                }
              </p>
              <p className="italic text-lake">
                {locale === 'fr'
                  ? "Un rayon de soleil sur les Gorges du Sierroz, le parfum des pins au sommet du Revard..."
                  : "A ray of sunlight on the Gorges du Sierroz, the scent of pines at the summit of Revard..."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Curieuse, souriante et profondément attachée à sa région, Anaïs aime faire découvrir la Savoie autrement, hors des sentiers battus."
                  : "Curious, smiling, and deeply attached to her region, Anaïs loves to reveal Savoie differently, off the beaten path."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-5xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-playfair font-light text-stone-dark mb-8 text-center"
          >
            {locale === 'fr' ? "Nos valeurs" : "Our Values"}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 border border-stone/10 shadow-sm hover:shadow-md hover:border-lake/20 transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-playfair font-normal text-stone-dark mb-2">
                  {value.title}
                </h3>
                <p className="text-sm font-montserrat font-light text-stone/70">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Expériences */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 border border-stone/10 shadow-sm"
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-4 text-center">
              {locale === 'fr' ? "Des expériences à taille humaine" : "Human-Sized Experiences"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-playfair font-light text-lake mb-2">8</p>
                <p className="text-sm font-montserrat font-light text-stone/70">
                  {locale === 'fr' ? "personnes max par groupe" : "people max per group"}
                </p>
              </div>
              <div>
                <p className="text-3xl font-playfair font-light text-lake mb-2">FR/EN</p>
                <p className="text-sm font-montserrat font-light text-stone/70">
                  {locale === 'fr' ? "visites bilingues" : "bilingual tours"}
                </p>
              </div>
              <div>
                <p className="text-3xl font-playfair font-light text-lake mb-2">100%</p>
                <p className="text-sm font-montserrat font-light text-stone/70">
                  {locale === 'fr' ? "local et authentique" : "local and authentic"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-playfair font-light text-stone-dark mb-8 text-center"
          >
            {locale === 'fr' ? "Ils nous ont fait confiance" : "They Trusted Us"}
          </motion.h2>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-6 border border-stone/10 shadow-sm"
              >
                <div className="flex justify-center mb-3">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">★</span>
                  ))}
                </div>
                
                <p className="text-base font-montserrat font-light text-center mb-4 italic text-stone/80">
                  &quot;{testimonials[currentTestimonial].text}&quot;
                </p>
                
                <div className="text-center">
                  <p className="font-playfair font-normal text-stone-dark">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-sm text-stone/50 font-montserrat">
                    {testimonials[currentTestimonial].country}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Indicateurs */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-lake w-6' : 'bg-stone/20'
                  }`}
                  aria-label={locale === 'fr' ? `Voir témoignage ${index + 1}` : `View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 border border-lake/20 shadow-sm"
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-4">
              {locale === 'fr'
                ? "Prêt à ressentir la Savoie autrement ?"
                : "Ready to experience Savoie differently?"
              }
            </h2>
            <p className="text-base text-stone/80 font-montserrat font-light mb-6">
              {locale === 'fr'
                ? "Contactez-nous pour planifier votre prochaine aventure"
                : "Contact us to plan your next adventure"
              }
            </p>
            <Button href={`/${locale}/contact`} variant="gold">
              {locale === 'fr' ? "Nous contacter" : "Contact us"}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
