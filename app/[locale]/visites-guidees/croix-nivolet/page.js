'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function CroixNivoletPage({ params }) {
  const { locale } = params;

  const discoveries = [
    { text: locale === 'fr' ? "La célèbre croix du Nivolet, symbole de la Savoie" : "The famous Nivolet cross, symbol of Savoie" },
    { text: locale === 'fr' ? "Des vues spectaculaires sur le lac du Bourget et le bassin chambérien" : "Spectacular views of Lake Bourget and the Chambéry basin" },
    { text: locale === 'fr' ? "Les forêts et clairières du massif des Bauges" : "The forests and clearings of the Bauges massif" },
    { text: locale === 'fr' ? "Les histoires et légendes racontées par votre guide" : "The stories and legends told by your guide" }
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
            {locale === 'fr' ? "Randonnée guidée" : "Guided Hike"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-light text-stone-dark mb-6"
          >
            {locale === 'fr' ? "Entre ciel et forêt" : "Between Sky and Forest"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-playfair italic text-lake mb-4"
          >
            {locale === 'fr' ? "Randonnée guidée à la Croix du Nivolet" : "Guided hike to Croix du Nivolet"}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base font-montserrat font-light text-stone/70"
          >
            {locale === 'fr'
              ? "Au départ du Sire – boucle panoramique et sous-bois"
              : "From Le Sire – panoramic loop and forest trails"
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
                  ? "Depuis le plateau du Sire, la marche débute entre clairières et forêts de sapins. Peu à peu, la vue s'ouvre sur le lac du Bourget, puis sur les sommets des Bauges."
                  : "From the Sire plateau, the hike begins between clearings and fir forests. Gradually, the view opens onto Lake Bourget, then onto the Bauges peaks."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Le sentier alterne crêtes panoramiques et passages boisés, au rythme des haltes commentées de votre guide."
                  : "The trail alternates between panoramic ridges and wooded passages, at the rhythm of your guide's commented stops."
                }
              </p>
              <p className="font-normal text-stone-dark">
                {locale === 'fr'
                  ? "Au sommet, la grande croix du Nivolet se dresse face au vide. Symbole de la région, elle offre l'un des plus beaux points de vue sur la Savoie."
                  : "At the summit, the great cross of Nivolet stands facing the void. A symbol of the region, it offers one of the most beautiful viewpoints over Savoie."
                }
              </p>
              <p className="italic text-lake">
                {locale === 'fr'
                  ? "Une randonnée vivante, entre nature, légendes et panoramas à couper le souffle."
                  : "A lively hike, between nature, legends and breathtaking panoramas."
                }
              </p>
            </div>
            <p className="mt-6 text-stone/60 text-sm italic">
              {locale === 'fr'
                ? "Sous réserve de conditions météorologiques favorables."
                : "Subject to favorable weather conditions."
              }
            </p>
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
                    {locale === 'fr' ? "Intermédiaire (2h de marche, dénivelé 330 m)" : "Intermediate (2h walking, 330 m elevation)"}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Prévoir" : "What to bring"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Chaussures de marche, eau, coupe-vent" : "Hiking shoes, water, windbreaker"}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Inclus" : "Included"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Transport, accompagnement guidé, commentaires" : "Transportation, guided accompaniment, commentary"}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Horaires" : "Schedule"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Lundis et samedis – 7H40 à 13H00" : "Mondays and Saturdays – 7:40 AM to 1:00 PM"}
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
