'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function MontRevardPage({ params }) {
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
            {locale === 'fr' ? "Douceurs au sommet" : "Sweetness at the Summit"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-montserrat italic max-w-3xl mx-auto mb-4"
          >
            {locale === 'fr' ? "Coucher de soleil au Mont Revard" : "Sunset at Mont Revard"}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg font-montserrat font-light"
          >
            {locale === 'fr' 
              ? "Une parenthèse suspendue au-dessus du lac"
              : "A suspended moment above the lake"
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
                  ? "Nous partons en fin de journée pour grimper vers le belvédère du Mont Revard, à plus de 1500 mètres d'altitude."
                  : "We depart at the end of the day to climb towards the Mont Revard viewpoint, at over 1500 meters altitude."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Le moment est simple, majestueux : le ciel se teinte d'or et de rose, le lac du Bourget s'endort lentement sous vos yeux."
                  : "The moment is simple, majestic: the sky takes on hues of gold and pink, Lake Bourget slowly falls asleep before your eyes."
                }
              </p>
              <p className="font-normal text-stone-dark text-xl">
                {locale === 'fr'
                  ? "Dans ce décor spectaculaire, place à la douceur."
                  : "In this spectacular setting, time for sweetness."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Un petit moment gourmand autour de spécialités sucrées de Savoie : le célèbre Saint-Genix aux pralines, du chocolat à la gentiane, des sablés de montagne ou encore un jus de myrtille frais."
                  : "A gourmet moment with sweet Savoie specialties: the famous Saint-Genix with pralines, gentian chocolate, mountain shortbread, or fresh blueberry juice."
                }
              </p>
              <p className="italic text-lake-dark">
                {locale === 'fr'
                  ? "Un instant contemplatif, hors du temps, entre lumière, calme et goût."
                  : "A contemplative moment, timeless, between light, calm and taste."
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
                    ? "Un coucher de soleil magique sur le lac du Bourget"
                    : "A magical sunset over Lake Bourget"
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
                    ? "Le panorama depuis la passerelle de verre suspendue"
                    : "The panorama from the suspended glass walkway"
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
                    ? "Une dégustation sucrée 100% savoyarde"
                    : "A 100% Savoyard sweet tasting"
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
                    ? "Un moment calme et intime en altitude"
                    : "A calm and intimate moment at altitude"
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
                      ? "Très facile (petite marche d'accès au belvédère)"
                      : "Very easy (short walk to the viewpoint)"
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Prévoir" : "What to bring"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr'
                      ? "Pull/veste chaude, appareil photo, lunettes de soleil"
                      : "Warm sweater/jacket, camera, sunglasses"
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Inclus" : "Included"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr'
                      ? "Transport aller-retour, dégustation sucrée, accompagnement"
                      : "Round-trip transportation, sweet tasting, guidance"
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Non inclus" : "Not included"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr' ? "Repas/dîner" : "Meals/dinner"}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Horaires et point de départ" : "Schedule and departure point"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr'
                      ? <>Tous les vendredis entre juin et août (selon météo)<br />Départ d&apos;Aix-les-Bains uniquement<br />Horaire de départ : généralement vers 19H30 (adapté selon l&apos;heure du coucher de soleil)</>
                      : <>Every Friday between June and August (weather permitting)<br />Departure from Aix-les-Bains only<br />Departure time: generally around 7:30 PM (adapted according to sunset time)</>
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-normal text-stone-dark mb-2">
                    {locale === 'fr' ? "Tarifs" : "Prices"}
                  </h3>
                  <p className="text-stone">
                    {locale === 'fr'
                      ? <>• Adultes : 45 €<br />• Enfants : 38 €</>
                      : <>• Adults: €45<br />• Children: €38</>
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
                ? "Réservez votre place pour ce coucher de soleil inoubliable"
                : "Book your spot for this unforgettable sunset"
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
