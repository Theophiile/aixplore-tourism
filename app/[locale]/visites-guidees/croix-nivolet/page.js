'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';

export default function CroixNivoletPage({ params }) {
  const { locale } = params;

  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection 
        image="/images/cretes.jpg"
        height="h-screen"
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-playfair font-light drop-shadow-2xl mb-6"
          >
            Entre ciel et forêt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-montserrat italic max-w-3xl mx-auto mb-4"
          >
            Randonnée guidée à la Croix du Nivolet
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg font-montserrat font-light"
          >
            au départ du Sire – boucle panoramique et sous-bois
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Section Description */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 text-lg text-stone font-montserrat font-light leading-relaxed">
              <p>
                Depuis le plateau du Sire, la marche débute entre clairières et forêts de sapins.
              </p>
              <p>
                Peu à peu, la vue s&apos;ouvre sur le lac du Bourget, puis sur les sommets des Bauges.
              </p>
              <p>
                Le sentier alterne crêtes panoramiques et passages boisés, au rythme des haltes commentées de votre guide.
              </p>
              <p className="font-normal text-stone-dark text-xl">
                Au sommet, la grande croix du Nivolet se dresse face au vide.
              </p>
              <p>
                Symbole de la région, elle offre l&apos;un des plus beaux points de vue sur la Savoie — jusqu&apos;au Mont-Blanc par temps clair.
              </p>
              <p>
                Le retour s&apos;effectue en boucle, dans la fraîcheur des sous-bois.
              </p>
              <p className="italic text-lake-dark">
                Une randonnée vivante, entre nature, légendes et panoramas à couper le souffle.
              </p>
            </div>
            <p className="mt-6 text-stone text-sm italic">
              Sous réserve de conditions météorologiques favorables.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Ce que vous allez découvrir */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-light text-stone-dark mb-12 text-center">
              🏞 Ce que vous allez découvrir
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-lake-light to-lake p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">⛪</div>
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  La célèbre croix du Nivolet
                </h3>
                <p className="text-stone font-montserrat">
                  Symbole de la Savoie
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-beige to-gold-light p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  Vues spectaculaires
                </h3>
                <p className="text-stone font-montserrat">
                  Sur le lac du Bourget et le bassin chambérien
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-beige-light to-beige p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🌲</div>
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  Forêts et clairières
                </h3>
                <p className="text-stone font-montserrat">
                  Du massif des Bauges
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-gold-light to-gold/40 p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  Histoires et légendes
                </h3>
                <p className="text-stone font-montserrat">
                  Racontées par votre guide
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section À savoir */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-light text-stone-dark mb-8 text-center">
              ℹ️ À savoir
            </h2>
            
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <div className="space-y-6 font-montserrat">
                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2 flex items-center gap-2">
                    <span>💪</span> Niveau physique
                  </h3>
                  <p className="text-stone">
                    Intermédiaire (3h de marche environ, dénivelé 330 m)
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2 flex items-center gap-2">
                    <span>🎒</span> Prévoir
                  </h3>
                  <p className="text-stone">
                    Chaussures de marche, eau, coupe-vent, appareil photo
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2 flex items-center gap-2">
                    <span>✅</span> Inclus
                  </h3>
                  <p className="text-stone">
                    Transport, accompagnement guidé, commentaires
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="section-padding bg-gradient-to-r from-lake to-lake-dark text-white">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-light mb-6">
              Prêt pour cette aventure ?
            </h2>
            <p className="text-xl font-montserrat mb-8">
              Réservez votre place pour cette randonnée panoramique
            </p>
            <Button href={`/${locale}/contact`} variant="gold">
              Réserver maintenant
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

