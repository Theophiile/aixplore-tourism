'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function TalloiresPage({ params }) {
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
            {locale === 'fr' ? "Charme et histoire" : "Charm and History"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-montserrat italic max-w-3xl mx-auto mb-4"
          >
            {locale === 'fr'
              ? "Talloires & château de Menthon-Saint-Bernard"
              : "Talloires & Menthon-Saint-Bernard castle"
            }
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg font-montserrat font-light"
          >
            {locale === 'fr'
              ? "Visite du village et découverte du château, entre patrimoine et paysages de carte postale"
              : "Village visit and castle discovery, between heritage and postcard landscapes"
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
                  ? "Talloires est l'un des plus beaux villages du lac d'Annecy, niché dans une baie paisible au pied des montagnes."
                  : "Talloires is one of the most beautiful villages on Lake Annecy, nestled in a peaceful bay at the foot of the mountains."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Ses ruelles fleuries, son abbaye historique et ses panoramas lacustres en font une étape incontournable pour les amoureux de patrimoine et de nature."
                  : "Its flowered streets, historic abbey and lake panoramas make it an essential stop for lovers of heritage and nature."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Votre guide vous fait découvrir l'histoire du village, de ses origines monastiques à sa renommée actuelle."
                  : "Your guide will introduce you to the village's history, from its monastic origins to its current fame."
                }
              </p>
              <p className="font-normal text-stone-dark text-xl">
                {locale === 'fr'
                  ? "Ensuite, direction le château de Menthon-Saint-Bernard."
                  : "Next, head to the castle of Menthon-Saint-Bernard."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Ce château médiéval, magnifiquement conservé, domine le lac d'Annecy depuis plus de 1000 ans. Perché sur un promontoire rocheux, il offre une vue imprenable sur le lac et les montagnes environnantes."
                  : "This beautifully preserved medieval castle has dominated Lake Annecy for over 1000 years. Perched on a rocky promontory, it offers breathtaking views of the lake and surrounding mountains."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "À l'intérieur, découvrez son architecture remarquable, ses salons d'époque et son histoire fascinante, qui aurait inspiré le château de la Belle au Bois Dormant."
                  : "Inside, discover its remarkable architecture, period salons and fascinating history, said to have inspired Sleeping Beauty's castle."
                }
              </p>
              <p className="italic text-lake-dark">
                {locale === 'fr'
                  ? "Une demi-journée entre charme alpin et histoire médiévale."
                  : "A half-day between alpine charm and medieval history."
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
                    ? "Le village de Talloires et son patrimoine"
                    : "The village of Talloires and its heritage"
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
                    ? "Le château de Menthon-Saint-Bernard et son histoire millénaire"
                    : "Menthon-Saint-Bernard castle and its millennial history"
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
                    ? "Des vues panoramiques sur le lac d'Annecy"
                    : "Panoramic views of Lake Annecy"
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
                    ? "Un cadre enchanteur entre lac et montagnes"
                    : "An enchanting setting between lake and mountains"
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
                      ? "Facile (balade à pied dans le village, visite du château)"
                      : "Easy (walking in the village, castle visit)"
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Prévoir" : "What to bring"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr'
                      ? "Chaussures confortables, appareil photo"
                      : "Comfortable shoes, camera"
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Inclus" : "Included"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr'
                      ? "Transport, visite guidée du village, entrée et visite guidée du château"
                      : "Transportation, guided village tour, castle entry and guided tour"
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
                ? "Réservez votre place pour cette découverte culturelle"
                : "Book your spot for this cultural discovery"
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
