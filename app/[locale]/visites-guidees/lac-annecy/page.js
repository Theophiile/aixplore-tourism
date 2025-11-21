'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';

export default function LacAnnecyPage({ params }) {
  const { locale } = params;

  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection 
        image="/images/lac-annecy.jpg"
        height="h-screen"
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-playfair font-light drop-shadow-2xl mb-6"
          >
            Contes et reflets du lac
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-montserrat italic max-w-3xl mx-auto mb-4"
          >
            Balade panoramique autour du lac d&apos;Annecy
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg font-montserrat font-light"
          >
            Boucle depuis les Puisots – entre forêts et belvédères
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
                À quelques minutes du centre d&apos;Annecy, le plateau des Puisots offre une échappée douce loin du tumulte du lac.
              </p>
              <p>
                La balade débute à travers une forêt de hêtres et d&apos;épicéas, où la lumière filtre entre les troncs et les oiseaux accompagnent vos pas.
              </p>
              <p>
                Peu à peu, la pente s&apos;adoucit et la vue se dégage : le lac d&apos;Annecy se révèle, éclatant de bleu, encadré par les silhouettes de la Tournette et du Roc de Chère.
              </p>
              <p>
                Votre guide partage les secrets de ce paysage millénaire : formation du lac, légendes locales et histoires de montagne.
              </p>
              <p className="font-normal text-stone-dark text-xl">
                Le chemin forme une boucle panoramique, agréable et accessible à tous, idéale pour ressentir la douceur de la Haute-Savoie entre nature et contemplation.
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
                <div className="text-4xl mb-4">🏔️</div>
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  Vues spectaculaires
                </h3>
                <p className="text-stone font-montserrat">
                  Sur le lac d&apos;Annecy et ses sommets
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-beige to-gold-light p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🌲</div>
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  Balade forestière paisible
                </h3>
                <p className="text-stone font-montserrat">
                  Au départ des Puisots
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-beige-light to-beige p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  Histoire naturelle et géologique
                </h3>
                <p className="text-stone font-montserrat">
                  Du lac d&apos;Annecy
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
                  Anecdotes locales
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
                    Facile à modéré (environ 2h30 – 250 m de dénivelé)
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2 flex items-center gap-2">
                    <span>🎒</span> Prévoir
                  </h3>
                  <p className="text-stone">
                    Chaussures de marche, eau, chapeau ou coupe-vent selon la saison
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2 flex items-center gap-2">
                    <span>✅</span> Inclus
                  </h3>
                  <p className="text-stone">
                    Transport, accompagnement guidé et commentaires
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="section-padding bg-gradient-to-br from-lake-light to-lake text-white">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-light mb-6">
              Découvrez la beauté du lac d&apos;Annecy
            </h2>
            <p className="text-xl font-montserrat mb-8">
              Une balade paisible accessible à tous
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

