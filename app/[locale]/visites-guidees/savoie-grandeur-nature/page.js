'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function SavoieGrandeurNaturePage({ params }) {
  const { locale } = params;

  const discoveries = [
    { text: locale === 'fr' ? "Les gorges du Sierroz et leurs récits méconnus" : "The Sierroz gorges and their unknown stories" },
    { text: locale === 'fr' ? "Le lac du Bourget, ses rives poétiques et ses secrets" : "Lake Bourget, its poetic shores and secrets" },
    { text: locale === 'fr' ? "Le Mont Revard, ses paysages alpins et son histoire thermale" : "Mont Revard, its alpine landscapes and thermal history" },
    { text: locale === 'fr' ? "Une pause au grand air entre patrimoine, nature et contemplation" : "A pause in the open air between heritage, nature and contemplation" }
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
            {locale === 'fr' ? "Journée complète" : "Full Day Tour"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-light text-stone-dark mb-6"
          >
            {locale === 'fr' ? "Savoie Grandeur Nature" : "Savoie Wild Nature"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-playfair italic text-lake mb-4"
          >
            {locale === 'fr' ? "Gorges du Sierroz, lac du Bourget & Mont Revard" : "Sierroz Gorges, Lake Bourget & Mont Revard"}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base font-montserrat font-light text-stone/70"
          >
            {locale === 'fr'
              ? "Une journée au grand air, entre nature sauvage, histoires romantiques et paysages d'altitude"
              : "A full day outdoors, between wild nature, romantic stories and mountain landscapes"
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
                  ? "Tout commence dans les gorges du Sierroz : un canyon oublié, sculpté par le temps et chargé de récits. Légendes locales, amours tragiques, et bruissements de cascade accompagnent la balade."
                  : "It all begins in the Sierroz gorges: a forgotten canyon, sculpted by time and filled with stories. Local legends, tragic loves, and the murmur of waterfalls accompany the walk."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Puis vient le temps de la quiétude, au bord du lac du Bourget. Le plus vaste lac naturel de France déroule ses eaux profondes, celles-là mêmes qui inspirèrent Lamartine."
                  : "Then comes a time of tranquility, by Lake Bourget. France's largest natural lake unfolds its deep waters, the very same that inspired Lamartine."
                }
              </p>
              <p className="font-normal text-stone-dark">
                {locale === 'fr'
                  ? "L'après-midi, on prend de la hauteur. Le mont Revard offre un panorama exceptionnel sur tout le bassin aixois."
                  : "In the afternoon, we gain altitude. Mont Revard offers an exceptional panorama over the entire Aix basin."
                }
              </p>
              <p className="italic text-lake">
                {locale === 'fr'
                  ? "Depuis la passerelle suspendue, le regard glisse sur les Alpes et le lac… jusqu'à se perdre dans l'horizon."
                  : "From the suspended walkway, the gaze slides over the Alps and the lake... until it gets lost in the horizon."
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
                    {locale === 'fr' ? "Modéré (balades, escaliers aux gorges)" : "Moderate (walks, stairs at the gorges)"}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Prévoir" : "What to bring"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Chaussures confortables, eau, lunettes" : "Comfortable shoes, water, sunglasses"}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Inclus" : "Included"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Transport depuis Annecy, visite guidée complète" : "Transportation from Annecy, complete guided tour"}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Horaires" : "Schedule"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Mardis et dimanches – 8H45 à 17H00" : "Tuesdays and Sundays – 8:45 AM to 5:00 PM"}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Tarifs" : "Prices"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Adultes : 65 € • Enfants : 50 €" : "Adults: €65 • Children: €50"}
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
