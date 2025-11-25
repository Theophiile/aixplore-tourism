'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function ChanazPage({ params }) {
  const { locale } = params;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-lake to-lake-dark">
        <div className="text-center text-white px-4 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-playfair font-light drop-shadow-2xl mb-6"
          >
            {locale === 'fr' ? "Au fil de l'eau et du temps" : "Along Water and Time"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-montserrat italic max-w-3xl mx-auto mb-4"
          >
            {locale === 'fr' ? "Chanaz & croisière sur le lac du Bourget" : "Chanaz & Lake Bourget cruise"}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg font-montserrat font-light"
          >
            {locale === 'fr' 
              ? "Balade guidée dans le village, visite du moulin, dégustations locales et croisière commentée"
              : "Guided village walk, mill visit, local tastings and commented cruise"
            }
          </motion.p>
        </div>
      </section>

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
                {locale === 'fr'
                  ? "La demi-journée débute en douceur le long du canal de Savières. De l'écluse jusqu'à Chanaz, suivez votre guide pour une balade entre eau et histoire : architecture traditionnelle, nature préservée, récits de bateliers… le paysage se lit autrement quand on en connaît les secrets."
                  : "The half-day begins gently along the Savières canal. From the lock to Chanaz, follow your guide for a walk between water and history: traditional architecture, preserved nature, boatmen's tales... the landscape reads differently when you know its secrets."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "À l'arrivée, partez à la découverte du vieux moulin, toujours en activité. On y dévoile les secrets de fabrication de l'huile de noix et de noisette, pressée à l'ancienne sous vos yeux — et bien sûr dégustée encore tiède, pour le plaisir des papilles."
                  : "Upon arrival, discover the old mill, still in operation. The secrets of walnut and hazelnut oil production are revealed, pressed in the old-fashioned way before your eyes — and of course tasted while still warm, for the pleasure of your taste buds."
                }
              </p>
              <p className="font-normal text-stone-dark text-xl">
                {locale === 'fr'
                  ? "Enfin, place à la détente : embarquez pour une croisière d'1h30 à travers le canal de Savières et le lac du Bourget."
                  : "Finally, time to relax: embark on a 1.5-hour cruise through the Savières canal and Lake Bourget."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Les berges défilent, les montagnes se reflètent dans l'eau, et le silence des grands paysages s'installe doucement."
                  : "The banks pass by, the mountains reflect in the water, and the silence of grand landscapes settles in gently."
                }
              </p>
            </div>
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
              {locale === 'fr' ? "Ce que vous allez découvrir" : "What you'll discover"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-lake-light to-lake p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  {locale === 'fr' 
                    ? "Le village de Chanaz : artisans, moulin, canal, ruelles pleines de charme"
                    : "Chanaz village: artisans, mill, canal, charming streets"
                  }
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-beige to-gold-light p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  {locale === 'fr'
                    ? "Une croisière commentée d'environ 1h15"
                    : "A commented cruise of about 1h15"
                  }
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-beige-light to-beige p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  {locale === 'fr'
                    ? "Le canal de Savières, trait d'union entre le Rhône et le lac"
                    : "The Savières canal, linking the Rhône river and the lake"
                  }
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-gold-light to-gold/40 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  {locale === 'fr'
                    ? "Le lac du Bourget vu depuis l'eau, dans toute sa majesté"
                    : "Lake Bourget seen from the water, in all its majesty"
                  }
                </h3>
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
              {locale === 'fr' ? "À savoir" : "Good to know"}
            </h2>
            
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <div className="space-y-6 font-montserrat">
                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Niveau physique" : "Physical level"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr' 
                      ? "Facile (balade libre + croisière)"
                      : "Easy (free walk + cruise)"
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Prévoir" : "What to bring"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr'
                      ? "Lunettes de soleil, chapeau, appareil photo"
                      : "Sunglasses, hat, camera"
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Inclus" : "Included"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr'
                      ? "Transport, accompagnement, billet de croisière"
                      : "Transportation, guidance, cruise ticket"
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Horaires et points de départ" : "Schedule and departure points"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr' 
                      ? <>Départ les mercredis et samedis<br />• Départ d&apos;Annecy : 13H<br />• Départ d&apos;Aix-les-Bains : 13H40</>
                      : <>Departure on Wednesdays and Saturdays<br />• Departure from Annecy: 1:00 PM<br />• Departure from Aix-les-Bains: 1:40 PM</>
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Tarifs" : "Prices"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr'
                      ? <>• Adultes : 56 €<br />• Enfants (moins de 12 ans) : 50 €</>
                      : <>• Adults: €56<br />• Children (under 12): €50</>
                    }
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
              {locale === 'fr' ? "Prêt pour cette aventure ?" : "Ready for this adventure?"}
            </h2>
            <p className="text-xl font-montserrat mb-8">
              {locale === 'fr' 
                ? "Réservez votre place pour cette excursion découverte"
                : "Book your spot for this discovery tour"
              }
            </p>
            <Button href={`/${locale}/contact`} variant="gold">
              {locale === 'fr' ? "Réserver maintenant" : "Book now"}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

