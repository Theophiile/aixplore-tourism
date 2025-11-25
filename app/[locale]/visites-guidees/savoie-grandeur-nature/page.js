'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function SavoieGrandeurNaturePage({ params }) {
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
            {locale === 'fr' ? "Savoie Grandeur Nature" : "Savoie Wild Nature"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-montserrat italic max-w-3xl mx-auto mb-4"
          >
            {locale === 'fr' 
              ? "Gorges du Sierroz, lac du Bourget & Mont Revard"
              : "Sierroz Gorges, Lake Bourget & Mont Revard"
            }
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg font-montserrat font-light"
          >
            {locale === 'fr'
              ? "Une journée au grand air, entre nature sauvage, histoires romantiques et paysages d'altitude"
              : "A full day outdoors, between wild nature, romantic stories and mountain landscapes"
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
                  ? "Tout commence dans les gorges du Sierroz : un canyon oublié, sculpté par le temps et chargé de récits. Légendes locales, amours tragiques, et bruissements de cascade accompagnent la balade."
                  : "It all begins in the Sierroz gorges: a forgotten canyon, sculpted by time and filled with stories. Local legends, tragic loves, and the murmur of waterfalls accompany the walk."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Puis vient le temps de la quiétude, au bord du lac du Bourget. Le plus vaste lac naturel de France déroule ses eaux profondes, celles-là mêmes qui inspirèrent Lamartine. Moment de pause, de contemplation, peut-être même de rêverie."
                  : "Then comes a time of tranquility, by Lake Bourget. France's largest natural lake unfolds its deep waters, the very same that inspired Lamartine. A moment of pause, contemplation, perhaps even reverie."
                }
              </p>
              <p className="font-normal text-stone-dark text-xl">
                {locale === 'fr'
                  ? "L'après-midi, on prend de la hauteur."
                  : "In the afternoon, we gain altitude."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Le mont Revard offre un panorama exceptionnel sur tout le bassin aixois. Depuis la passerelle suspendue, le regard glisse sur les Alpes et le lac… jusqu'à se perdre dans l'horizon."
                  : "Mont Revard offers an exceptional panorama over the entire Aix basin. From the suspended walkway, the gaze slides over the Alps and the lake... until it gets lost in the horizon."
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
                    ? "Les gorges du Sierroz et leurs récits méconnus"
                    : "The Sierroz gorges and their unknown stories"
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
                    ? "Le lac du Bourget, ses rives poétiques et ses secrets"
                    : "Lake Bourget, its poetic shores and secrets"
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
                    ? "Le Mont Revard, ses paysages alpins et son histoire thermale"
                    : "Mont Revard, its alpine landscapes and thermal history"
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
                    ? "Une pause au grand air entre patrimoine, nature et contemplation"
                    : "A pause in the open air between heritage, nature and contemplation"
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
                      ? "Modéré (balades, escaliers aux gorges, peu de marche au Revard)"
                      : "Moderate (walks, stairs at the gorges, little walking at Revard)"
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Prévoir" : "What to bring"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr'
                      ? "Chaussures confortables, eau, lunettes de soleil, appareil photo !"
                      : "Comfortable shoes, water, sunglasses, camera!"
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Inclus" : "Included"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr'
                      ? "Transport depuis Annecy, visite guidée complète"
                      : "Transportation from Annecy, complete guided tour"
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Non inclus" : "Not included"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr' ? "Repas / collations" : "Meals / snacks"}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Horaires et point de départ" : "Schedule and departure point"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr'
                      ? <>Tous les mardis et dimanches<br />Départ d&apos;Annecy : 8H45 à 17H00</>
                      : <>Every Tuesday and Sunday<br />Departure from Annecy: 8:45 AM to 5:00 PM</>
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Tarifs" : "Prices"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr'
                      ? <>• Adultes : 65 €<br />• Enfants : 50 €</>
                      : <>• Adults: €65<br />• Children: €50</>
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
                ? "Réservez votre place pour cette journée complète en Savoie"
                : "Book your spot for this full day in Savoie"
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
