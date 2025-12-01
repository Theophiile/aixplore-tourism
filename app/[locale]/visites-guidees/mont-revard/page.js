'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function MontRevardPage({ params }) {
  const { locale } = params;

  const discoveries = [
    { text: locale === 'fr' ? "Un coucher de soleil magique sur le lac du Bourget" : "A magical sunset over Lake Bourget" },
    { text: locale === 'fr' ? "Le panorama depuis la passerelle de verre suspendue" : "The panorama from the suspended glass walkway" },
    { text: locale === 'fr' ? "Une dégustation sucrée 100% savoyarde" : "A 100% Savoyard sweet tasting" },
    { text: locale === 'fr' ? "Un moment calme et intime en altitude" : "A calm and intimate moment at altitude" }
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
            {locale === 'fr' ? "Expérience coucher de soleil" : "Sunset Experience"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-light text-stone-dark mb-6"
          >
            {locale === 'fr' ? "Douceurs au sommet" : "Sweetness at the Summit"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-playfair italic text-lake mb-4"
          >
            {locale === 'fr' ? "Coucher de soleil au Mont Revard" : "Sunset at Mont Revard"}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base font-montserrat font-light text-stone/70"
          >
            {locale === 'fr' 
              ? "Une parenthèse suspendue au-dessus du lac"
              : "A suspended moment above the lake"
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
              <p className="font-normal text-stone-dark">
                {locale === 'fr'
                  ? "Dans ce décor spectaculaire, place à la douceur. Un petit moment gourmand autour de spécialités sucrées de Savoie."
                  : "In this spectacular setting, time for sweetness. A gourmet moment with sweet Savoie specialties."
                }
              </p>
              <p className="italic text-lake">
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
                    {locale === 'fr' ? "Très facile (petite marche d'accès)" : "Very easy (short access walk)"}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Prévoir" : "What to bring"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Veste chaude, appareil photo" : "Warm jacket, camera"}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Inclus" : "Included"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Transport, dégustation sucrée, accompagnement" : "Transportation, sweet tasting, guidance"}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Horaires" : "Schedule"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Vendredis (juin-août) – Départ vers 19H30" : "Fridays (June-August) – Departure around 7:30 PM"}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Tarifs" : "Prices"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Adultes : 45 € • Enfants : 38 €" : "Adults: €45 • Children: €38"}
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
