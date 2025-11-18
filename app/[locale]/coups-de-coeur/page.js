'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';
import { getTranslation } from '@/lib/translations';

export default function CoupsDeCoeurPage({ params }) {
  const { locale } = params;
  const t = (key) => getTranslation(locale, key);

  const favorites = [
    {
      title: "Le Lac d'Annecy au Lever du Soleil",
      description: "Un moment magique où le lac se pare de couleurs dorées. Idéal pour les photographes et les amoureux de la nature.",
      image: "/images/fav-annecy-sunrise.jpg",
      category: "Points de vue"
    },
    {
      title: "Le Village de Talloires",
      description: "Un village pittoresque au bord du lac, avec ses ruelles fleuries et ses restaurants traditionnels.",
      image: "/images/fav-talloires.jpg",
      category: "Villages"
    },
    {
      title: "La Cascade d'Angon",
      description: "Une randonnée facile menant à une cascade spectaculaire cachée dans la forêt.",
      image: "/images/fav-cascade-angon.jpg",
      category: "Randonnées"
    },
    {
      title: "Le Col de la Forclaz",
      description: "Point de vue époustouflant sur le lac d'Annecy. Parfait pour le parapente !",
      image: "/images/fav-forclaz.jpg",
      category: "Points de vue"
    },
    {
      title: "Les Gorges du Fier",
      description: "Promenade sur passerelles au-dessus d'une gorge impressionnante sculptée par l'eau.",
      image: "/images/fav-gorges-fier.jpg",
      category: "Sites naturels"
    },
    {
      title: "Le Marché de Chambéry",
      description: "Marché authentique où découvrir les produits locaux et l'ambiance savoyarde.",
      image: "/images/fav-marche-chambery.jpg",
      category: "Culture locale"
    },
    {
      title: "Le Semnoz",
      description: "Massif facilement accessible offrant des panoramas à 360° sur les Alpes et le lac.",
      image: "/images/fav-semnoz.jpg",
      category: "Points de vue"
    },
    {
      title: "Château de Menthon-Saint-Bernard",
      description: "Château médiéval dominant le lac, dit avoir inspiré Walt Disney pour La Belle au Bois Dormant.",
      image: "/images/fav-chateau-menthon.jpg",
      category: "Patrimoine"
    },
    {
      title: "Les Jardins du Château d'Annecy",
      description: "Jardin secret au cœur de la vieille ville, parfait pour une pause bucolique.",
      image: "/images/fav-jardins-annecy.jpg",
      category: "Culture locale"
    },
    {
      title: "La Pointe de la Beccaz",
      description: "Randonnée accessible avec vue panoramique sur la Tournette et le lac.",
      image: "/images/fav-beccaz.jpg",
      category: "Randonnées"
    },
    {
      title: "Restaurant Le Belvédère",
      description: "Notre adresse préférée pour déguster une fondue savoyarde avec vue sur les montagnes.",
      image: "/images/fav-belvedere.jpg",
      category: "Gastronomie"
    },
    {
      title: "Le Bout du Lac",
      description: "Partie paisible du lac d'Annecy, idéale pour une balade à vélo ou un pique-nique.",
      image: "/images/fav-bout-lac.jpg",
      category: "Sites naturels"
    }
  ];

  const categories = [...new Set(favorites.map(f => f.category))];

  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection 
        image="/images/favorites-hero.jpg"
        height="h-96"
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-playfair font-bold mb-4"
          >
            💛 Nos Coups de Cœur 💛
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-montserrat max-w-2xl mx-auto"
          >
            Les lieux secrets et incontournables que nous adorons partager
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Section Introduction */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-dark mb-6">
              Notre Guide d&apos;Inspiration Locale
            </h2>
            <p className="text-lg text-stone font-montserrat leading-relaxed">
              Après des années à explorer chaque recoin des Alpes, nous avons sélectionné pour vous 
              nos endroits préférés. Des spots instagrammables aux adresses authentiques que seuls 
              les locaux connaissent, découvrez nos recommandations pour enrichir votre séjour.
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
            className={`section-padding ${catIndex % 2 === 0 ? 'bg-white' : 'bg-beige-light'}`}
          >
            <div className="container-custom">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-playfair font-bold text-stone-dark mb-8"
              >
                {category}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-lake-light/50 to-gold/50 flex items-center justify-center">
                        <span className="text-6xl">📸</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-playfair font-bold text-stone-dark mb-3">
                        {item.title}
                      </h3>
                      <p className="text-stone font-montserrat leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Section Conseils */}
      <section className="section-padding bg-lake text-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Besoin de Conseils Personnalisés ?
            </h2>
            <p className="text-lg font-montserrat mb-8 max-w-2xl mx-auto">
              Nous sommes là pour vous aider à créer votre itinéraire idéal ! 
              Contactez-nous pour des recommandations sur mesure selon vos goûts et le temps dont vous disposez.
            </p>
            <Button href={`/${locale}/contact`} variant="gold">
              Demander des conseils
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section Carte Interactive (Placeholder) */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-playfair font-bold text-stone-dark mb-4">
              Carte Interactive
            </h2>
            <p className="text-stone font-montserrat">
              Retrouvez tous nos coups de cœur géolocalisés pour planifier facilement vos visites
            </p>
          </motion.div>

          <div className="bg-stone-light rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-stone">
              <span className="text-6xl mb-4 block">🗺️</span>
              <p className="font-montserrat">Carte interactive à venir</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

