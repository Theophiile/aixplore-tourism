'use client';

import { motion, AnimatePresence } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';
import { useState, useEffect } from 'react';

export default function AProposPage({ params }) {
  const { locale } = params;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Fiona",
      country: "United Kingdom",
      text: "What a wonderful day! Anaïs was a super, knowledgeable and fun guide (and a great driver) and each part of the trip was beautifully explained and a great balance between organised time and space to explore at your leisure. The route was well thought out and the journey very comfortable. The sights were breathtaking and made us want to explore more of the region. We highly recommend! Thank you Anaïs!",
      rating: 5
    },
    {
      name: "Lajos",
      country: "Hungary",
      text: "Mindhárom meglátogatott hely gyönyörű, megérte odautazni. Ráadásul maga az utazás gyors, kényelmes volt. A guide, egyben sofőr pedig tökéletes: kedves, okos, figyelmes, tájékozott. Külön köszönet jár neki!",
      rating: 5
    },
    {
      name: "Daniel",
      country: "Switzerland",
      text: "Der Ausflug war einfach wunderbar. Die Reiseleitung zeigte sich äußerst zuvorkommend und sorgte jederzeit für eine angenehme Atmosphäre. Die Fahrt erfolgte in einem komfortablen und geräumigen Auto, das den Tag zusätzlich entspannte. Besonders schön: Als bekannt wurde, dass jemand an diesem Tag Geburtstag feierte, organisierte die Reiseleitung kurzfristig sogar eine Kerze und ein kleines Geschenk – eine herzliche Geste, die für strahlende Augen sorgte. Ich kann diesen Ausflug wirklich nur weiterempfehlen!",
      rating: 5
    },
    {
      name: "Célia",
      country: "France",
      text: "Nous avons passé une super journée en compagnie de notre guide Anaïs. Elle nous a fait partager toutes ses connaissances avec beaucoup d'humour et de sympathie. Merci pour ces belles visites, c'était magnifique ! Nous avons fait également de belles rencontres grâce à cette excursion en petit groupe qui aide à faire connaissance avec toutes les personnes. Bonne continuation Anaïs et peut être à bientôt pour de nouvelles visites. Merci pour tout !",
      rating: 5
    },
    {
      name: "Andres",
      country: "Chili",
      text: "It was awesome! We had the chance to know many iconic places, try traditional food and enjoy the magnificent view of Mont Revard. 100% recommended. Our tour guide was really charismatic and explained us everything in English!",
      rating: 5
    },
    {
      name: "Florent",
      country: "France",
      text: "Superbe excursion, pas de pluie et les nuages ont attendu qu'on ait profité du panorama pour venir ! Les gorges sont absolument à faire avec un guide car peu d'explications sur place. Le lac est magnifique, et la vue du mont revard également. La guide Anaïs était souriante et a répondu à toutes nos questions.",
      rating: 5
    },
    {
      name: "Ngartolabaye",
      country: "Tchad",
      text: "Une très belle excursion bien organisée. Du départ d'Annecy à la croisière sur le lac en passant par la visite de Chanaz, tout s'est très bien passé. Nous avons découvert le charme de Chanaz et les paysages magnifiques lors de la croisière. C'était un moment de détente agréable. Merci aux guides qui ont été très compétents et attentionnés.",
      rating: 5
    },
    {
      name: "Pauline",
      country: "France",
      text: "Je recommande vivement ! Super journée passée avec une guide adorable et passionnée, qui nous a fait découvrir plein de choses sur Chanaz et le lac du Bourget. Elle a également su nous conseiller sur des activités et randonnées, aussi bien autour d'Aix-les-Bains que du côté d'Annecy.",
      rating: 5
    },
    {
      name: "Annie",
      country: "Australia",
      text: "Wonderful day trip. Our guide was so friendly and knowledgeable about the region. The boat cruise was delightful - lake was so tranquil - and Chanaz is a gorgeous town. Thoroughly enjoyed the whole day and would highly recommend to anyone visiting Annecy.",
      rating: 5
    },
    {
      name: "Judith",
      country: "Canada",
      text: "Our guide Anais was charming and funny. She is from the area so she has a lot of great information. Unfortunately the weather was terrible for great views from the mountain top (we tried but could see only clouds)! So she made a detour to find a better viewing spot of lac du Bourget. It was spectacular! It's a beautiful area and worth seeing. Anais made it easy and fun. I also loved the small group which makes things more flexible.",
      rating: 5
    },
    {
      name: "Marie-France",
      country: "France",
      text: "L'animation faite par Anaïs à été fort intéressante ! C'est une personne professionnelle dans ses explications. Elle est également agréable et chaleureuse, et elle sait vous mettre à l'aise ! :) Le village de Chanaz nous a dévoilé de jolis paysages et les artisans ont été accueillants. La croisière fut magnifique ! Je recommande à 100% cette excursion !",
      rating: 5
    },
    {
      name: "Eric",
      country: "France",
      text: "Merci Anaïs, pour cette découverte du Mont Revard, du panorama sur le bassin aixois, de toutes ces explications sur les origines de ce lac, etc… Votre bonne humeur et votre gentillesse, nous ont fait passer une très agréable soirée.",
      rating: 5
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
      <ParallaxSection 
        image="/images/about-hero.jpg"
        height="h-screen"
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-light mb-6"
          >
            Aixplore Tourism
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-playfair font-light italic max-w-3xl mx-auto"
          >
            {locale === 'fr' 
              ? "Entre lac et montagnes, une invitation à ressentir"
              : "Between lake and mountains, an invitation to feel"
            }
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Section Introduction Poétique */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-playfair italic text-stone-dark mb-8">
              {locale === 'fr' 
                ? "Ici, tout commence par un souffle."
                : "Here, everything begins with a breath."
              }
            </p>
            <div className="space-y-4 font-montserrat font-light text-lg text-stone leading-relaxed">
              <p>
                {locale === 'fr'
                  ? "Celui du vent sur le lac du Bourget, celui des forêts du Revard, celui d'une voix qui raconte la Savoie autrement."
                  : "The wind over Lake Bourget, the forests of Revard, the voice that tells Savoie differently."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Aixplore Tourism est né d'un amour profond pour ce territoire singulier, où l'eau, la pierre et la lumière s'unissent dans une même harmonie."
                  : "Aixplore Tourism was born from a deep love for this singular territory, where water, stone and light unite in perfect harmony."
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
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-light text-stone-dark mb-6 text-center">
              {locale === 'fr' ? "L'esprit Aixplore" : "The Aixplore Spirit"}
            </h2>
            <div className="space-y-4 font-montserrat font-light text-lg text-stone leading-relaxed">
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
              <p>
                {locale === 'fr'
                  ? "Chaque circuit est imaginé pour raconter la Savoie à travers ses paysages, ses saveurs, ses visages et ses légendes."
                  : "Each tour is designed to tell the story of Savoie through its landscapes, flavors, faces and legends."
                }
              </p>
            </div>
            <div className="mt-8 p-6 bg-lake-light/30 rounded-lg border-l-4 border-lake-dark">
              <p className="text-xl font-playfair italic text-stone-dark">
                {locale === 'fr'
                  ? "\"Je ne cherche pas à impressionner, mais à émerveiller. Ce que j'aime, c'est voir les gens s'arrêter, sourire, et se laisser surprendre.\""
                  : "\"I don't seek to impress, but to inspire wonder. What I love is seeing people stop, smile, and let themselves be surprised.\""
                }
              </p>
              <p className="text-right mt-4 font-montserrat text-stone">
                {locale === 'fr'
                  ? "— Anaïs Husson, fondatrice et guide d'Aixplore Tourism"
                  : "— Anaïs Husson, founder and guide of Aixplore Tourism"
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Anaïs Husson */}
      <section className="section-padding bg-gradient-to-br from-beige to-lake-light">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lake to-gold-light flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-3xl font-playfair font-light">Anaïs Husson</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-light text-stone-dark mb-6">
                {locale === 'fr' 
                  ? "Une guide, une voix, une passion"
                  : "A Guide, A Voice, A Passion"
                }
              </h2>
              <div className="space-y-4 font-montserrat font-light text-stone leading-relaxed">
                <p>
                  {locale === 'fr'
                    ? <>Formée à la médiation culturelle et titulaire du brevet d&apos;accompagnatrice en montagne, <span className="font-semibold text-stone-dark">Anaïs Husson</span> a créé Aixplore pour partager ce qu&apos;elle aime le plus : la beauté des petits détails.</>
                    : <>Trained in cultural mediation and holding a mountain guide certificate, <span className="font-semibold text-stone-dark">Anaïs Husson</span> created Aixplore to share what she loves most: the beauty of small details.</>
                  }
                </p>
                <p className="italic">
                  {locale === 'fr'
                    ? "Un rayon de soleil sur les Gorges du Sierroz, le parfum des pins au sommet du Revard, la voix d'un habitant qui se souvient d'une histoire d'autrefois…"
                    : "A ray of sunlight on the Gorges du Sierroz, the scent of pines at the summit of Revard, the voice of a local remembering a story from long ago…"
                  }
                </p>
                <p>
                  {locale === 'fr'
                    ? "Curieuse, souriante et profondément attachée à sa région, Anaïs aime faire découvrir la Savoie autrement, hors des sentiers battus."
                    : "Curious, smiling, and deeply attached to her region, Anaïs loves to reveal Savoie differently, off the beaten path."
                  }
                </p>
                <p>
                  {locale === 'fr'
                    ? "Elle ne se contente pas de raconter : elle écoute, échange, conseille, apprend à connaître ses visiteurs et leur partage toutes ses bonnes adresses pour prolonger la découverte."
                    : "She doesn't just tell stories: she listens, exchanges, advises, gets to know her visitors and shares all her best local addresses to extend the discovery."
                  }
                </p>
              </div>
              <div className="mt-6 p-4 bg-white/70 rounded-lg">
                <p className="text-lg font-playfair italic text-stone-dark">
                  {locale === 'fr'
                    ? "\"Je ne suis pas seulement la guide qui explique et qui s'en va. Je suis celle qui vit le moment avec vous.\""
                    : "\"I'm not just the guide who explains and leaves. I'm the one who lives the moment with you.\""
                  }
                </p>
              </div>
              <p className="mt-4 font-montserrat text-stone">
                {locale === 'fr'
                  ? "À travers son humour, son sens du contact et son regard poétique sur les paysages, Anaïs insuffle à chaque excursion une âme singulière — faite de nature, de culture et de rencontres vraies."
                  : "Through her humor, her sense of connection and her poetic gaze on landscapes, Anaïs brings a unique soul to each excursion — made of nature, culture and real encounters."
                }
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Expériences à taille humaine */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-playfair font-light text-stone-dark mb-6 text-center">
              {locale === 'fr' ? "Des expériences à taille humaine" : "Human-Sized Experiences"}
            </h2>
            <div className="space-y-4 font-montserrat font-light text-lg text-stone leading-relaxed">
              <p>
                {locale === 'fr'
                  ? <>Aixplore Tourism privilégie les petits groupes — <span className="font-semibold text-stone-dark">jusqu&apos;à 8 personnes</span> — pour offrir une atmosphère de confiance et d&apos;échanges.</>
                  : <>Aixplore Tourism favors small groups — <span className="font-semibold text-stone-dark">up to 8 people</span> — to offer an atmosphere of trust and exchange.</>
                }
              </p>
              <p>
                {locale === 'fr'
                  ? <>Chaque visite se déroule en <span className="font-semibold">français ou en anglais</span>, dans le respect du lieu et de ceux qui l&apos;habitent.</>
                  : <>Each visit takes place in <span className="font-semibold">French or English</span>, respecting the place and those who inhabit it.</>
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Nos circuits favorisent la découverte locale, la gastronomie régionale, et une forme douce de tourisme, durable et respectueuse."
                  : "Our tours favor local discovery, regional gastronomy, and a gentle form of tourism, sustainable and respectful."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="section-padding bg-gradient-to-br from-lake-light to-gold-light">
        <div className="container-custom max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-light text-stone-dark mb-4 text-center"
          >
            {locale === 'fr' ? "Nos valeurs" : "Our Values"}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/90 p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-2xl font-playfair font-normal text-stone-dark mb-3">
                {locale === 'fr' ? "Authenticité" : "Authenticity"}
              </h3>
              <p className="font-montserrat font-light text-stone">
                {locale === 'fr' ? "Parler vrai, vivre vrai." : "Speaking true, living true."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/90 p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-2xl font-playfair font-normal text-stone-dark mb-3">
                {locale === 'fr' ? "Émerveillement" : "Wonder"}
              </h3>
              <p className="font-montserrat font-light text-stone">
                {locale === 'fr' 
                  ? "Offrir des instants suspendus, simples et précieux."
                  : "Offering suspended, simple and precious moments."
                }
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/90 p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-2xl font-playfair font-normal text-stone-dark mb-3">
                {locale === 'fr' ? "Transmission" : "Transmission"}
              </h3>
              <p className="font-montserrat font-light text-stone">
                {locale === 'fr'
                  ? "Partager la richesse culturelle et naturelle de la Savoie."
                  : "Sharing Savoie's cultural and natural wealth."
                }
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/90 p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-2xl font-playfair font-normal text-stone-dark mb-3">
                {locale === 'fr' ? "Respect" : "Respect"}
              </h3>
              <p className="font-montserrat font-light text-stone">
                {locale === 'fr'
                  ? "De la nature, du rythme, des émotions."
                  : "Of nature, of rhythm, of emotions."
                }
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Une aventure humaine */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-light text-stone-dark mb-6 text-center">
              {locale === 'fr' ? "Une aventure humaine" : "A Human Adventure"}
            </h2>
            <div className="space-y-4 font-montserrat font-light text-lg text-stone leading-relaxed max-w-3xl mx-auto">
              <p>
                {locale === 'fr'
                  ? "Depuis sa création, Aixplore Tourism a accueilli des voyageurs venus des quatre coins du monde."
                  : "Since its creation, Aixplore Tourism has welcomed travelers from all over the world."
                }
              </p>
              <p className="font-semibold text-stone-dark">
                {locale === 'fr'
                  ? "Anglais, Canadiens, Allemands, Australiens, Suédois, Thailandais, Américains, Chiliens, Brésiliens, Tchadiens, Français…"
                  : "English, Canadians, Germans, Australians, Swedes, Thais, Americans, Chileans, Brazilians, Chadians, French…"
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Tous repartent avec le même sentiment : celui d'avoir vécu une parenthèse sincère, entre découverte et douceur."
                  : "All leave with the same feeling: having lived a sincere interlude, between discovery and gentleness."
                }
              </p>
            </div>
            <div className="mt-8 p-6 bg-beige-light rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-playfair italic text-stone-dark">
                {locale === 'fr'
                  ? "\"Il n'y a pas de plus belle récompense que d'entendre un visiteur dire : je me suis senti bien ici.\""
                  : "\"There is no greater reward than hearing a visitor say: I felt good here.\""
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="section-padding bg-stone-dark text-white">
        <div className="container-custom max-w-5xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-light mb-4 text-center"
          >
            {locale === 'fr' ? "Ils nous ont fait confiance" : "They Trusted Us"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-beige-light font-montserrat font-light mb-12"
          >
            {locale === 'fr' 
              ? "Témoignages authentiques de nos voyageurs"
              : "Authentic testimonials from our travelers"
            }
          </motion.p>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-gold text-2xl">★</span>
                  ))}
                </div>
                
                <p className="text-lg md:text-xl font-montserrat font-light text-center mb-6 italic">
                  &quot;{testimonials[currentTestimonial].text}&quot;
                </p>
                
                <div className="text-center">
                  <p className="font-playfair font-bold text-xl">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-beige-light font-montserrat">
                    {testimonials[currentTestimonial].country}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Indicateurs */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-gold w-8' : 'bg-white/30'
                  }`}
                  aria-label={locale === 'fr' ? `Voir témoignage ${index + 1}` : `View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="section-padding bg-gradient-to-r from-lake to-lake-dark text-white">
        <div className="container-custom text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-light mb-6">
              {locale === 'fr'
                ? "Prêt à ressentir la Savoie autrement ?"
                : "Ready to experience Savoie differently?"
              }
            </h2>
            <p className="text-lg md:text-xl mb-8 font-montserrat font-light">
              {locale === 'fr'
                ? "Contactez-nous pour planifier votre prochaine aventure entre lac et montagnes"
                : "Contact us to plan your next adventure between lake and mountains"
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

