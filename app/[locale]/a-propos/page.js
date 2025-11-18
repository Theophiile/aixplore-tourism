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
            className="text-5xl md:text-7xl font-playfair font-bold mb-6"
          >
            Aixplore Tourism
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-playfair italic max-w-3xl mx-auto"
          >
            Entre lac et montagnes, une invitation à ressentir
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
              Ici, tout commence par un souffle.
            </p>
            <div className="space-y-4 font-montserrat text-lg text-stone leading-relaxed">
              <p>
                Celui du vent sur le lac du Bourget, celui des forêts du Revard, celui d&apos;une voix qui raconte la Savoie autrement.
              </p>
              <p>
                Aixplore Tourism est né d&apos;un amour profond pour ce territoire singulier, où l&apos;eau, la pierre et la lumière s&apos;unissent dans une même harmonie.
              </p>
              <p className="font-semibold text-stone-dark">
                Nous proposons des excursions intimistes et guidées avec passion, pour que chaque visiteur reparte avec plus qu&apos;un souvenir : une émotion.
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
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-6 flex items-center justify-center gap-3">
              <span>🌿</span> L&apos;esprit Aixplore
            </h2>
            <div className="space-y-4 font-montserrat text-lg text-stone leading-relaxed">
              <p>
                Nous croyons qu&apos;explorer, c&apos;est prendre le temps de regarder, d&apos;écouter et de ressentir.
              </p>
              <p>
                Nos excursions mêlent histoire, nature, culture et convivialité — toujours dans une ambiance simple et sincère.
              </p>
              <p>
                Chaque circuit est imaginé pour raconter la Savoie à travers ses paysages, ses saveurs, ses visages et ses légendes.
              </p>
            </div>
            <div className="mt-8 p-6 bg-lake-light/30 rounded-lg border-l-4 border-lake-dark">
              <p className="text-xl font-playfair italic text-stone-dark">
                &quot;Je ne cherche pas à impressionner, mais à émerveiller. Ce que j&apos;aime, c&apos;est voir les gens s&apos;arrêter, sourire, et se laisser surprendre.&quot;
              </p>
              <p className="text-right mt-4 font-montserrat text-stone">
                — Anaïs Husson, fondatrice et guide d&apos;Aixplore Tourism
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
                <span className="text-9xl">🌸</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-6">
                Une guide, une voix, une passion
              </h2>
              <div className="space-y-4 font-montserrat text-stone leading-relaxed">
                <p>
                  Formée à la médiation culturelle et titulaire du brevet d&apos;accompagnatrice en montagne, <span className="font-semibold text-stone-dark">Anaïs Husson</span> a créé Aixplore pour partager ce qu&apos;elle aime le plus : la beauté des petits détails.
                </p>
                <p className="italic">
                  Un rayon de soleil sur les Gorges du Sierroz, le parfum des pins au sommet du Revard, la voix d&apos;un habitant qui se souvient d&apos;une histoire d&apos;autrefois…
                </p>
                <p>
                  Curieuse, souriante et profondément attachée à sa région, Anaïs aime faire découvrir la Savoie autrement, hors des sentiers battus.
                </p>
                <p>
                  Elle ne se contente pas de raconter : elle écoute, échange, conseille, apprend à connaître ses visiteurs et leur partage toutes ses bonnes adresses pour prolonger la découverte.
                </p>
              </div>
              <div className="mt-6 p-4 bg-white/70 rounded-lg">
                <p className="text-lg font-playfair italic text-stone-dark">
                  &quot;Je ne suis pas seulement la guide qui explique et qui s&apos;en va. Je suis celle qui vit le moment avec vous.&quot;
                </p>
              </div>
              <p className="mt-4 font-montserrat text-stone">
                À travers son humour, son sens du contact et son regard poétique sur les paysages, Anaïs insuffle à chaque excursion une âme singulière — faite de nature, de culture et de rencontres vraies.
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
            <h2 className="text-4xl font-playfair font-bold text-stone-dark mb-6 flex items-center justify-center gap-3">
              <span>🕊</span> Des expériences à taille humaine
            </h2>
            <div className="space-y-4 font-montserrat text-lg text-stone leading-relaxed">
              <p>
                Aixplore Tourism privilégie les petits groupes — <span className="font-semibold text-stone-dark">jusqu&apos;à 8 personnes</span> — pour offrir une atmosphère de confiance et d&apos;échanges.
              </p>
              <p>
                Chaque visite se déroule en <span className="font-semibold">français ou en anglais</span>, dans le respect du lieu et de ceux qui l&apos;habitent.
              </p>
              <p>
                Nos circuits favorisent la découverte locale, la gastronomie régionale, et une forme douce de tourisme, durable et respectueuse.
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
            className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-4 text-center"
          >
            💫 Nos valeurs
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/90 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-2xl font-playfair font-bold text-stone-dark mb-3">
                Authenticité
              </h3>
              <p className="font-montserrat text-stone">
                Parler vrai, vivre vrai.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/90 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-playfair font-bold text-stone-dark mb-3">
                Émerveillement
              </h3>
              <p className="font-montserrat text-stone">
                Offrir des instants suspendus, simples et précieux.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/90 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-2xl font-playfair font-bold text-stone-dark mb-3">
                Transmission
              </h3>
              <p className="font-montserrat text-stone">
                Partager la richesse culturelle et naturelle de la Savoie.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/90 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-2xl font-playfair font-bold text-stone-dark mb-3">
                Respect
              </h3>
              <p className="font-montserrat text-stone">
                De la nature, du rythme, des émotions.
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
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-6 flex items-center justify-center gap-3">
              <span>🌍</span> Une aventure humaine
            </h2>
            <div className="space-y-4 font-montserrat text-lg text-stone leading-relaxed max-w-3xl mx-auto">
              <p>
                Depuis sa création, Aixplore Tourism a accueilli des voyageurs venus des quatre coins du monde.
              </p>
              <p className="font-semibold text-stone-dark">
                Anglais, Canadiens, Allemands, Australiens, Suédois, Thailandais, Américains, Chiliens, Brésiliens, Tchadiens, Français…
              </p>
              <p>
                Tous repartent avec le même sentiment : celui d&apos;avoir vécu une parenthèse sincère, entre découverte et douceur.
              </p>
            </div>
            <div className="mt-8 p-6 bg-beige-light rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-playfair italic text-stone-dark">
                &quot;Il n&apos;y a pas de plus belle récompense que d&apos;entendre un visiteur dire : je me suis senti bien ici.&quot;
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
            className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-center"
          >
            Ils nous ont fait confiance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-beige-light font-montserrat mb-12"
          >
            Témoignages authentiques de nos voyageurs
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
                    <span key={i} className="text-gold text-2xl">⭐</span>
                  ))}
                </div>
                
                <p className="text-lg md:text-xl font-montserrat text-center mb-6 italic">
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
                  aria-label={`Voir témoignage ${index + 1}`}
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
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Prêt à ressentir la Savoie autrement ?
            </h2>
            <p className="text-lg md:text-xl mb-8 font-montserrat">
              Contactez-nous pour planifier votre prochaine aventure entre lac et montagnes
            </p>
            <Button href={`/${locale}/contact`} variant="gold">
              Nous contacter
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

