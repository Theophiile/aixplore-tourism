'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function ChanazPage({ params }) {
  const { locale } = params;

  const discoveries = [
    { text: locale === 'fr' ? "Le village de Chanaz : artisans, moulin, canal, ruelles pleines de charme" : "Chanaz village: artisans, mill, canal, charming streets" },
    { text: locale === 'fr' ? "Une croisière commentée d'environ 1h15" : "A commented cruise of about 1h15" },
    { text: locale === 'fr' ? "Le canal de Savières, trait d'union entre le Rhône et le lac" : "The Savières canal, linking the Rhône river and the lake" },
    { text: locale === 'fr' ? "Le lac du Bourget vu depuis l'eau, dans toute sa majesté" : "Lake Bourget seen from the water, in all its majesty" }
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
            {locale === 'fr' ? "Visite guidée" : "Guided Tour"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-light text-stone-dark mb-6"
          >
            {locale === 'fr' ? "Au fil de l'eau et du temps" : "Along Water and Time"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-playfair italic text-lake mb-4"
          >
            {locale === 'fr' ? "Chanaz & croisière sur le lac du Bourget" : "Chanaz & Lake Bourget cruise"}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base font-montserrat font-light text-stone/70"
          >
            {locale === 'fr' 
              ? "Balade guidée dans le village, visite du moulin, dégustations locales et croisière commentée"
              : "Guided village walk, mill visit, local tastings and commented cruise"
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
                  ? "La demi-journée débute en douceur le long du canal de Savières. De l'écluse jusqu'à Chanaz, suivez votre guide pour une balade entre eau et histoire : architecture traditionnelle, nature préservée, récits de bateliers… le paysage se lit autrement quand on en connaît les secrets."
                  : "The half-day begins gently along the Savières canal. From the lock to Chanaz, follow your guide for a walk between water and history: traditional architecture, preserved nature, boatmen's tales... the landscape reads differently when you know its secrets."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "À l'arrivée, partez à la découverte du vieux moulin, toujours en activité. On y dévoile les secrets de fabrication de l'huile de noix et de noisette, pressée à l'ancienne sous vos yeux — et bien sûr dégustée encore tiède."
                  : "Upon arrival, discover the old mill, still in operation. The secrets of walnut and hazelnut oil production are revealed, pressed in the old-fashioned way before your eyes — and of course tasted while still warm."
                }
              </p>
              <p className="font-normal text-stone-dark">
                {locale === 'fr'
                  ? "Enfin, place à la détente : embarquez pour une croisière d'1h30 à travers le canal de Savières et le lac du Bourget."
                  : "Finally, time to relax: embark on a 1.5-hour cruise through the Savières canal and Lake Bourget."
                }
              </p>
              <p className="italic text-lake">
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
                    {locale === 'fr' ? "Facile (balade libre + croisière)" : "Easy (free walk + cruise)"}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Prévoir" : "What to bring"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Lunettes de soleil, chapeau, appareil photo" : "Sunglasses, hat, camera"}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Inclus" : "Included"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Transport, accompagnement, billet de croisière" : "Transportation, guidance, cruise ticket"}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Horaires" : "Schedule"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' 
                      ? "Mercredis et samedis – Départ 13H (Annecy) / 13H40 (Aix)"
                      : "Wednesdays and Saturdays – Departure 1PM (Annecy) / 1:40PM (Aix)"
                    }
                  </p>
                </div>

                <div className="md:col-span-2">
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Tarifs" : "Prices"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr'
                      ? "Adultes : 56 € • Enfants (moins de 12 ans) : 50 €"
                      : "Adults: €56 • Children (under 12): €50"
                    }
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
