'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/Button';

export default function CoupsDeCoeurPage({ params }) {
  const { locale } = params;

  const favorites = [
    {
      title: locale === 'fr' ? "Le Lac d'Annecy au Lever du Soleil" : "Lake Annecy at Sunrise",
      description: locale === 'fr'
        ? "Un moment magique où le lac se pare de couleurs dorées."
        : "A magical moment when the lake is adorned with golden colors.",
      category: locale === 'fr' ? "Points de vue" : "Viewpoints"
    },
    {
      title: locale === 'fr' ? "Le Village de Talloires" : "Talloires Village",
      description: locale === 'fr'
        ? "Un village pittoresque au bord du lac, avec ses ruelles fleuries."
        : "A picturesque lakeside village with flowering streets.",
      category: locale === 'fr' ? "Villages" : "Villages"
    },
    {
      title: locale === 'fr' ? "La Cascade d'Angon" : "Angon Waterfall",
      description: locale === 'fr'
        ? "Une randonnée facile menant à une cascade spectaculaire."
        : "An easy hike leading to a spectacular waterfall.",
      category: locale === 'fr' ? "Randonnées" : "Hikes"
    },
    {
      title: locale === 'fr' ? "Le Col de la Forclaz" : "Col de la Forclaz",
      description: locale === 'fr'
        ? "Point de vue époustouflant sur le lac d'Annecy."
        : "Breathtaking viewpoint over Lake Annecy.",
      category: locale === 'fr' ? "Points de vue" : "Viewpoints"
    },
    {
      title: locale === 'fr' ? "Les Gorges du Fier" : "Gorges du Fier",
      description: locale === 'fr'
        ? "Promenade sur passerelles au-dessus d'une gorge impressionnante."
        : "Walk on footbridges above an impressive gorge.",
      category: locale === 'fr' ? "Sites naturels" : "Natural Sites"
    },
    {
      title: locale === 'fr' ? "Le Marché de Chambéry" : "Chambéry Market",
      description: locale === 'fr'
        ? "Marché authentique où découvrir les produits locaux."
        : "Authentic market to discover local products.",
      category: locale === 'fr' ? "Culture locale" : "Local Culture"
    },
    {
      title: locale === 'fr' ? "Le Semnoz" : "Le Semnoz",
      description: locale === 'fr'
        ? "Massif offrant des panoramas à 360° sur les Alpes et le lac."
        : "Mountain range offering 360° panoramas of the Alps and the lake.",
      category: locale === 'fr' ? "Points de vue" : "Viewpoints"
    },
    {
      title: locale === 'fr' ? "Château de Menthon-Saint-Bernard" : "Menthon-Saint-Bernard Castle",
      description: locale === 'fr'
        ? "Château médiéval dominant le lac, dit avoir inspiré Walt Disney."
        : "Medieval castle overlooking the lake, said to have inspired Walt Disney.",
      category: locale === 'fr' ? "Patrimoine" : "Heritage"
    },
    {
      title: locale === 'fr' ? "Les Jardins du Château d'Annecy" : "Annecy Castle Gardens",
      description: locale === 'fr'
        ? "Jardin secret au cœur de la vieille ville."
        : "Secret garden in the heart of the old town.",
      category: locale === 'fr' ? "Culture locale" : "Local Culture"
    },
    {
      title: locale === 'fr' ? "La Pointe de la Beccaz" : "Pointe de la Beccaz",
      description: locale === 'fr'
        ? "Randonnée accessible avec vue panoramique sur la Tournette."
        : "Accessible hike with panoramic views of La Tournette.",
      category: locale === 'fr' ? "Randonnées" : "Hikes"
    },
    {
      title: locale === 'fr' ? "Restaurant Le Belvédère" : "Le Belvédère Restaurant",
      description: locale === 'fr'
        ? "Notre adresse préférée pour une fondue avec vue."
        : "Our favorite place for fondue with a view.",
      category: locale === 'fr' ? "Gastronomie" : "Gastronomy"
    },
    {
      title: locale === 'fr' ? "Le Bout du Lac" : "Le Bout du Lac",
      description: locale === 'fr'
        ? "Partie paisible du lac, idéale pour un pique-nique."
        : "Peaceful part of the lake, ideal for a picnic.",
      category: locale === 'fr' ? "Sites naturels" : "Natural Sites"
    }
  ];

  const categories = [...new Set(favorites.map(f => f.category))];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen w-screen lg:-ml-56 flex items-center justify-center bg-[#124e78]">
        <div className="text-center text-white/90 px-4 z-10 relative lg:ml-56">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-montserrat font-light mb-6"
          >
            {locale === 'fr' ? "Nos recommandations" : "Our recommendations"}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-light mb-6 drop-shadow-lg"
          >
            {locale === 'fr' ? "Nos Coups de Cœur" : "Our Favorite Places"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-playfair italic max-w-3xl mx-auto font-light drop-shadow-md"
          >
            {locale === 'fr'
              ? "Les lieux secrets et incontournables que nous adorons partager"
              : "Secret and must-see places we love to share"
            }
          </motion.p>
        </div>
      </section>

      {/* Section Introduction */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "Notre Guide d'Inspiration" : "Our Inspiration Guide"}
            </h2>
            <p className="text-base text-stone/80 font-montserrat font-light leading-relaxed">
              {locale === 'fr'
                ? "Après des années à explorer chaque recoin des Alpes, nous avons sélectionné pour vous nos endroits préférés. Des spots instagrammables aux adresses authentiques que seuls les locaux connaissent."
                : "After years of exploring every corner of the Alps, we've selected our favorite places for you. From Instagram-worthy spots to authentic addresses that only locals know."
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section par Catégories */}
      {categories.map((category, catIndex) => {
        const items = favorites.filter(f => f.category === category);
        return (
          <section 
            key={category} 
            className="py-12 bg-beige-light"
          >
            <div className="container-custom max-w-5xl">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xl font-playfair font-light text-lake mb-6"
              >
                {category}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-5 border border-stone/10 shadow-sm hover:shadow-md hover:border-lake/20 transition-all duration-300"
                  >
                    <h3 className="text-lg font-playfair font-normal text-stone-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone/70 font-montserrat font-light leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Section Conseils */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white rounded-xl p-8 border border-lake/20 shadow-sm">
              <h2 className="text-2xl font-playfair font-light text-stone-dark mb-4">
                {locale === 'fr' ? "Besoin de Conseils Personnalisés ?" : "Need Personalized Advice?"}
              </h2>
              <p className="text-base text-stone/80 font-montserrat font-light mb-6 max-w-2xl mx-auto">
                {locale === 'fr'
                  ? "Nous sommes là pour vous aider à créer votre itinéraire idéal ! Contactez-nous pour des recommandations sur mesure."
                  : "We're here to help you create your ideal itinerary! Contact us for personalized recommendations."
                }
              </p>
              <Button href={`/${locale}/contact`} variant="gold">
                {locale === 'fr' ? "Demander des conseils" : "Request advice"}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
