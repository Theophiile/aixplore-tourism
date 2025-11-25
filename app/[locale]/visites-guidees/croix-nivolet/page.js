'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function CroixNivoletPage({ params }) {
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
            {locale === 'fr' ? "Entre ciel et forêt" : "Between Sky and Forest"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-montserrat italic max-w-3xl mx-auto mb-4"
          >
            {locale === 'fr' 
              ? "Randonnée guidée à la Croix du Nivolet"
              : "Guided hike to Croix du Nivolet"
            }
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg font-montserrat font-light"
          >
            {locale === 'fr'
              ? "au départ du Sire – boucle panoramique et sous-bois"
              : "from Le Sire – panoramic loop and forest trails"
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
                  ? "Depuis le plateau du Sire, la marche débute entre clairières et forêts de sapins."
                  : "From the Sire plateau, the hike begins between clearings and fir forests."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Peu à peu, la vue s'ouvre sur le lac du Bourget, puis sur les sommets des Bauges."
                  : "Gradually, the view opens onto Lake Bourget, then onto the Bauges peaks."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Le sentier alterne crêtes panoramiques et passages boisés, au rythme des haltes commentées de votre guide."
                  : "The trail alternates between panoramic ridges and wooded passages, at the rhythm of your guide's commented stops."
                }
              </p>
              <p className="font-normal text-stone-dark text-xl">
                {locale === 'fr'
                  ? "Au sommet, la grande croix du Nivolet se dresse face au vide."
                  : "At the summit, the great cross of Nivolet stands facing the void."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Symbole de la région, elle offre l'un des plus beaux points de vue sur la Savoie."
                  : "A symbol of the region, it offers one of the most beautiful viewpoints over Savoie."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Le retour s'effectue dans la fraîcheur des sous-bois."
                  : "The return takes place in the coolness of the undergrowth."
                }
              </p>
              <p className="italic text-lake-dark">
                {locale === 'fr'
                  ? "Une randonnée vivante, entre nature, légendes et panoramas à couper le souffle."
                  : "A lively hike, between nature, legends and breathtaking panoramas."
                }
              </p>
            </div>
            <p className="mt-6 text-stone text-sm italic">
              {locale === 'fr'
                ? "Sous réserve de conditions météorologiques favorables."
                : "Subject to favorable weather conditions."
              }
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
                    ? "La célèbre croix du Nivolet, symbole de la Savoie"
                    : "The famous Nivolet cross, symbol of Savoie"
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
                    ? "Des vues spectaculaires sur le lac du Bourget et le bassin chambérien"
                    : "Spectacular views of Lake Bourget and the Chambéry basin"
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
                    ? "Les forêts et clairières du massif des Bauges"
                    : "The forests and clearings of the Bauges massif"
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
                    ? "Les histoires et légendes racontées par votre guide"
                    : "The stories and legends told by your guide"
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
                      ? "Intermédiaire (2h de marche environ, dénivelé 330 m)"
                      : "Intermediate (about 2h walking, 330 m elevation)"
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Prévoir" : "What to bring"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr'
                      ? "Chaussures de marche, eau, coupe-vent, appareil photo"
                      : "Hiking shoes, water, windbreaker, camera"
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Inclus" : "Included"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr'
                      ? "Transport, accompagnement guidé, commentaires"
                      : "Transportation, guided accompaniment, commentary"
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Horaires" : "Schedule"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr'
                      ? "Départ les lundi et samedi de 7H40 à 13H00"
                      : "Departure on Mondays and Saturdays from 7:40 AM to 1:00 PM"
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
                ? "Réservez votre place pour cette randonnée panoramique"
                : "Book your spot for this panoramic hike"
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
