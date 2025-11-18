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
      title: locale === 'fr' ? "Le Lac d'Annecy au Lever du Soleil" : "Lake Annecy at Sunrise",
      description: locale === 'fr'
        ? "Un moment magique où le lac se pare de couleurs dorées. Idéal pour les photographes et les amoureux de la nature."
        : "A magical moment when the lake is adorned with golden colors. Perfect for photographers and nature lovers.",
      image: "/images/fav-annecy-sunrise.jpg",
      category: locale === 'fr' ? "Points de vue" : "Viewpoints"
    },
    {
      title: locale === 'fr' ? "Le Village de Talloires" : "Talloires Village",
      description: locale === 'fr'
        ? "Un village pittoresque au bord du lac, avec ses ruelles fleuries et ses restaurants traditionnels."
        : "A picturesque lakeside village with flowering streets and traditional restaurants.",
      image: "/images/fav-talloires.jpg",
      category: locale === 'fr' ? "Villages" : "Villages"
    },
    {
      title: locale === 'fr' ? "La Cascade d'Angon" : "Angon Waterfall",
      description: locale === 'fr'
        ? "Une randonnée facile menant à une cascade spectaculaire cachée dans la forêt."
        : "An easy hike leading to a spectacular waterfall hidden in the forest.",
      image: "/images/fav-cascade-angon.jpg",
      category: locale === 'fr' ? "Randonnées" : "Hikes"
    },
    {
      title: locale === 'fr' ? "Le Col de la Forclaz" : "Col de la Forclaz",
      description: locale === 'fr'
        ? "Point de vue époustouflant sur le lac d'Annecy. Parfait pour le parapente !"
        : "Breathtaking viewpoint over Lake Annecy. Perfect for paragliding!",
      image: "/images/fav-forclaz.jpg",
      category: locale === 'fr' ? "Points de vue" : "Viewpoints"
    },
    {
      title: locale === 'fr' ? "Les Gorges du Fier" : "Gorges du Fier",
      description: locale === 'fr'
        ? "Promenade sur passerelles au-dessus d'une gorge impressionnante sculptée par l'eau."
        : "Walk on footbridges above an impressive gorge sculpted by water.",
      image: "/images/fav-gorges-fier.jpg",
      category: locale === 'fr' ? "Sites naturels" : "Natural Sites"
    },
    {
      title: locale === 'fr' ? "Le Marché de Chambéry" : "Chambéry Market",
      description: locale === 'fr'
        ? "Marché authentique où découvrir les produits locaux et l'ambiance savoyarde."
        : "Authentic market to discover local products and Savoyard atmosphere.",
      image: "/images/fav-marche-chambery.jpg",
      category: locale === 'fr' ? "Culture locale" : "Local Culture"
    },
    {
      title: locale === 'fr' ? "Le Semnoz" : "Le Semnoz",
      description: locale === 'fr'
        ? "Massif facilement accessible offrant des panoramas à 360° sur les Alpes et le lac."
        : "Easily accessible mountain range offering 360° panoramas of the Alps and the lake.",
      image: "/images/fav-semnoz.jpg",
      category: locale === 'fr' ? "Points de vue" : "Viewpoints"
    },
    {
      title: locale === 'fr' ? "Château de Menthon-Saint-Bernard" : "Menthon-Saint-Bernard Castle",
      description: locale === 'fr'
        ? "Château médiéval dominant le lac, dit avoir inspiré Walt Disney pour La Belle au Bois Dormant."
        : "Medieval castle overlooking the lake, said to have inspired Walt Disney for Sleeping Beauty.",
      image: "/images/fav-chateau-menthon.jpg",
      category: locale === 'fr' ? "Patrimoine" : "Heritage"
    },
    {
      title: locale === 'fr' ? "Les Jardins du Château d'Annecy" : "Annecy Castle Gardens",
      description: locale === 'fr'
        ? "Jardin secret au cœur de la vieille ville, parfait pour une pause bucolique."
        : "Secret garden in the heart of the old town, perfect for a bucolic break.",
      image: "/images/fav-jardins-annecy.jpg",
      category: locale === 'fr' ? "Culture locale" : "Local Culture"
    },
    {
      title: locale === 'fr' ? "La Pointe de la Beccaz" : "Pointe de la Beccaz",
      description: locale === 'fr'
        ? "Randonnée accessible avec vue panoramique sur la Tournette et le lac."
        : "Accessible hike with panoramic views of La Tournette and the lake.",
      image: "/images/fav-beccaz.jpg",
      category: locale === 'fr' ? "Randonnées" : "Hikes"
    },
    {
      title: locale === 'fr' ? "Restaurant Le Belvédère" : "Le Belvédère Restaurant",
      description: locale === 'fr'
        ? "Notre adresse préférée pour déguster une fondue savoyarde avec vue sur les montagnes."
        : "Our favorite place to enjoy a Savoyard fondue with mountain views.",
      image: "/images/fav-belvedere.jpg",
      category: locale === 'fr' ? "Gastronomie" : "Gastronomy"
    },
    {
      title: locale === 'fr' ? "Le Bout du Lac" : "Le Bout du Lac",
      description: locale === 'fr'
        ? "Partie paisible du lac d'Annecy, idéale pour une balade à vélo ou un pique-nique."
        : "Peaceful part of Lake Annecy, ideal for a bike ride or picnic.",
      image: "/images/fav-bout-lac.jpg",
      category: locale === 'fr' ? "Sites naturels" : "Natural Sites"
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
            {locale === 'fr' ? "💛 Nos Coups de Cœur 💛" : "💛 Our Favorite Places 💛"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-montserrat max-w-2xl mx-auto"
          >
            {locale === 'fr'
              ? "Les lieux secrets et incontournables que nous adorons partager"
              : "Secret and must-see places we love to share"
            }
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
              {locale === 'fr' ? "Notre Guide d'Inspiration Locale" : "Our Local Inspiration Guide"}
            </h2>
            <p className="text-lg text-stone font-montserrat leading-relaxed">
              {locale === 'fr'
                ? "Après des années à explorer chaque recoin des Alpes, nous avons sélectionné pour vous nos endroits préférés. Des spots instagrammables aux adresses authentiques que seuls les locaux connaissent, découvrez nos recommandations pour enrichir votre séjour."
                : "After years of exploring every corner of the Alps, we've selected our favorite places for you. From Instagram-worthy spots to authentic addresses that only locals know, discover our recommendations to enrich your stay."
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
              {locale === 'fr' ? "Besoin de Conseils Personnalisés ?" : "Need Personalized Advice?"}
            </h2>
            <p className="text-lg font-montserrat mb-8 max-w-2xl mx-auto">
              {locale === 'fr'
                ? "Nous sommes là pour vous aider à créer votre itinéraire idéal ! Contactez-nous pour des recommandations sur mesure selon vos goûts et le temps dont vous disposez."
                : "We're here to help you create your ideal itinerary! Contact us for personalized recommendations based on your tastes and available time."
              }
            </p>
            <Button href={`/${locale}/contact`} variant="gold">
              {locale === 'fr' ? "Demander des conseils" : "Request advice"}
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
              {locale === 'fr' ? "Carte Interactive" : "Interactive Map"}
            </h2>
            <p className="text-stone font-montserrat">
              {locale === 'fr'
                ? "Retrouvez tous nos coups de cœur géolocalisés pour planifier facilement vos visites"
                : "Find all our favorite geolocated places to easily plan your visits"
              }
            </p>
          </motion.div>

          <div className="bg-stone-light rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-stone">
              <span className="text-6xl mb-4 block">🗺️</span>
              <p className="font-montserrat">
                {locale === 'fr' ? "Carte interactive à venir" : "Interactive map coming soon"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

