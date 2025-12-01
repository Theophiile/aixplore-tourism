'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function TalloiresPage({ params }) {
  const { locale } = params;

  const discoveries = [
    { text: locale === 'fr' ? "Le village de Talloires et son patrimoine" : "The village of Talloires and its heritage" },
    { text: locale === 'fr' ? "Le château de Menthon-Saint-Bernard et son histoire millénaire" : "Menthon-Saint-Bernard castle and its millennial history" },
    { text: locale === 'fr' ? "Des vues panoramiques sur le lac d'Annecy" : "Panoramic views of Lake Annecy" },
    { text: locale === 'fr' ? "Un cadre enchanteur entre lac et montagnes" : "An enchanting setting between lake and mountains" }
  ];

  return (
    <div className="bg-beige-light">
      {/* Hero Section */}
      <section className="py-20 bg-beige-light">
        <div className="container-custom max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-montserrat font-medium text-gold uppercase tracking-widest mb-4"
          >
            {locale === 'fr' ? "Visite culturelle" : "Cultural Visit"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-light text-stone-dark mb-6"
          >
            {locale === 'fr' ? "Charme et histoire" : "Charm and History"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-playfair italic text-lake mb-4"
          >
            {locale === 'fr' ? "Talloires & château de Menthon-Saint-Bernard" : "Talloires & Menthon-Saint-Bernard castle"}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base font-montserrat font-light text-stone/70"
          >
            {locale === 'fr'
              ? "Visite du village et découverte du château, entre patrimoine et paysages de carte postale"
              : "Village visit and castle discovery, between heritage and postcard landscapes"
            }
          </motion.p>
        </div>
      </section>

      {/* Section Description */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 text-base text-stone/80 font-montserrat font-light leading-relaxed">
              <p>
                {locale === 'fr'
                  ? "Talloires est l'un des plus beaux villages du lac d'Annecy, niché dans une baie paisible au pied des montagnes. Ses ruelles fleuries, son abbaye historique et ses panoramas lacustres en font une étape incontournable."
                  : "Talloires is one of the most beautiful villages on Lake Annecy, nestled in a peaceful bay at the foot of the mountains. Its flowered streets, historic abbey and lake panoramas make it an essential stop."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Votre guide vous fait découvrir l'histoire du village, de ses origines monastiques à sa renommée actuelle."
                  : "Your guide will introduce you to the village's history, from its monastic origins to its current fame."
                }
              </p>
              <p className="font-normal text-stone-dark">
                {locale === 'fr'
                  ? "Ensuite, direction le château de Menthon-Saint-Bernard. Ce château médiéval, magnifiquement conservé, domine le lac d'Annecy depuis plus de 1000 ans."
                  : "Next, head to the castle of Menthon-Saint-Bernard. This beautifully preserved medieval castle has dominated Lake Annecy for over 1000 years."
                }
              </p>
              <p className="italic text-lake">
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
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-8 text-center">
              {locale === 'fr' ? "Ce que vous allez découvrir" : "What you'll discover"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {discoveries.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl border border-stone/10 shadow-sm hover:shadow-md hover:border-lake/20 transition-all duration-300"
                >
                  <p className="text-sm font-montserrat font-light text-stone-dark leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section À savoir */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-8 text-center">
              {locale === 'fr' ? "Informations pratiques" : "Practical Information"}
            </h2>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone/10">
              <div className="grid md:grid-cols-2 gap-6 font-montserrat text-sm">
                <div>
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Niveau physique" : "Physical level"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Facile (balade à pied, visite du château)" : "Easy (walking, castle visit)"}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Prévoir" : "What to bring"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Chaussures confortables, appareil photo" : "Comfortable shoes, camera"}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Inclus" : "Included"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Transport, visite guidée du village, entrée et visite guidée du château" : "Transportation, guided village tour, castle entry and guided tour"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-beige-light">
        <div className="container-custom max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-4">
              {locale === 'fr' ? "Prêt pour cette aventure ?" : "Ready for this adventure?"}
            </h2>
            <p className="text-base font-montserrat font-light text-stone/70 mb-8">
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
