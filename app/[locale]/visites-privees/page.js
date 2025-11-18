'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';

export default function VisitesPriveesPage({ params }) {
  const { locale } = params;

  const privateVisits = [
    {
      emoji: "🌅",
      title: locale === 'fr' ? "Coucher de soleil au Mont Revard" : "Sunset at Mont Revard",
      subtitle: locale === 'fr' ? "Apéritif savoyard inclus" : "Savoyard aperitif included",
      description: locale === 'fr'
        ? "Une expérience inoubliable au-dessus du lac du Bourget. Dégustez un apéritif local (vin d'Apremont, tomme de Savoie, saucisson, pain de campagne) en admirant la lumière dorée sur les sommets."
        : "An unforgettable experience above Lake Bourget. Enjoy a local aperitif (Apremont wine, Savoie tomme, sausage, country bread) while admiring the golden light on the peaks."
    },
    {
      emoji: "❄️",
      title: locale === 'fr' ? "Balade ou randonnée en raquettes" : "Snowshoe Walk or Hike",
      subtitle: locale === 'fr' ? "Les Bauges ou le Revard" : "Bauges or Revard",
      description: locale === 'fr'
        ? "En hiver, découvrez la montagne autrement : un décor silencieux, une nature intacte et la douceur d'une aventure enneigée, adaptée à votre niveau."
        : "In winter, discover the mountains differently: a silent setting, pristine nature and the gentleness of a snowy adventure, adapted to your level."
    },
    {
      emoji: "🌊",
      title: locale === 'fr' ? "Annecy et Talloires" : "Annecy and Talloires",
      subtitle: locale === 'fr' ? "Élégance et nature" : "Elegance and nature",
      description: locale === 'fr'
        ? "Partez à la découverte de la \"Venise des Alpes\", puis flânez à Talloires entre lac et abbaye. Possibilité de prolonger la visite jusqu'au col de la Forclaz, pour une vue grandiose sur le lac et les parapentes."
        : "Discover the \"Venice of the Alps\", then stroll in Talloires between lake and abbey. Option to extend the visit to Col de la Forclaz for a stunning view of the lake and paragliders."
    },
    {
      emoji: "🍽️",
      title: locale === 'fr' ? "Dîner ou apéritif au sommet" : "Dinner or Aperitif at the Summit",
      subtitle: locale === 'fr' ? "Expérience exclusive" : "Exclusive experience",
      description: locale === 'fr'
        ? "Une expérience exclusive pour célébrer un moment spécial : dîner privé, apéritif de montagne ou pique-nique chic, dans un cadre naturel et confidentiel. Ambiance sur mesure, décor et saveurs locales inclus."
        : "An exclusive experience to celebrate a special moment: private dinner, mountain aperitif or chic picnic, in a natural and intimate setting. Custom atmosphere, decor and local flavors included."
    },
    {
      emoji: "⛵",
      title: locale === 'fr' ? "Chanaz et le canal de Savières" : "Chanaz and the Savières Canal",
      subtitle: locale === 'fr' ? "Le petit Venise savoyard" : "The little Savoyard Venice",
      description: locale === 'fr'
        ? "Découvrez le charme du \"petit Venise savoyard\" : ses ruelles, son moulin et sa ruche flottante. Possibilité d'ajouter une croisière privée sur le lac du Bourget pour compléter l'expérience."
        : "Discover the charm of the \"little Savoyard Venice\": its alleys, mill and floating beehive. Option to add a private cruise on Lake Bourget to complete the experience."
    },
    {
      emoji: "🏞️",
      title: locale === 'fr' ? "Col de la Chambotte" : "Col de la Chambotte",
      subtitle: locale === 'fr' ? "Panorama sur le lac du Bourget" : "Panorama over Lake Bourget",
      description: locale === 'fr'
        ? "Un belvédère incontournable offrant une vue spectaculaire. Idéal pour une halte contemplative, une séance photo ou un moment calme face à la nature."
        : "An unmissable viewpoint offering a spectacular view. Ideal for a contemplative stop, a photo session or a quiet moment facing nature."
    },
    {
      emoji: "🍷",
      title: locale === 'fr' ? "Dégustations & produits locaux savoyards" : "Tastings & Local Savoyard Products",
      subtitle: locale === 'fr' ? "Explorer la Savoie par les sens" : "Explore Savoie through the senses",
      description: locale === 'fr'
        ? "Vins d'Apremont ou de Mondeuse, fromages fermiers, miel ou charcuteries locales. Des moments simples et vrais, partagés dans un cadre authentique."
        : "Apremont or Mondeuse wines, farm cheeses, honey or local charcuterie. Simple and authentic moments, shared in a genuine setting."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection 
        image="/images/private-tour-hero.jpg"
        height="h-screen"
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6"
          >
            {locale === 'fr' ? "🌿 Visite privée" : "🌿 Private Tour"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl font-playfair italic max-w-4xl mx-auto mb-4"
          >
            {locale === 'fr'
              ? "L'expérience sur mesure signée Aixplore Tourism"
              : "The tailor-made experience by Aixplore Tourism"
            }
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl font-montserrat max-w-3xl mx-auto"
          >
            {locale === 'fr'
              ? "Et si vous viviez la Savoie à votre rythme ?"
              : "What if you experienced Savoie at your own pace?"
            }
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Section Introduction */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="space-y-4 text-lg text-stone font-montserrat leading-relaxed mb-8">
              <p>
                {locale === 'fr'
                  ? "Une balade privée au bord du lac du Bourget, un dîner au sommet des montagnes, ou un coucher de soleil au Revard…"
                  : "A private walk along Lake Bourget, a dinner at the mountain summit, or a sunset at Revard…"
                }
              </p>
              <p className="font-semibold text-stone-dark">
                {locale === 'fr'
                  ? "Avec Aixplore Tourism, chaque visite devient une expérience unique, façonnée autour de vous."
                  : "With Aixplore Tourism, each visit becomes a unique experience, crafted around you."
                }
              </p>
              <p className="italic text-lake-dark">
                {locale === 'fr'
                  ? "Un moment privilégié, entre nature, culture et émotions partagées."
                  : "A privileged moment, between nature, culture and shared emotions."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Une visite rien que pour vous */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-6 text-center">
              {locale === 'fr' ? "✨ Une visite rien que pour vous" : "✨ A Tour Just for You"}
            </h2>
            <p className="text-lg text-stone font-montserrat leading-relaxed max-w-4xl mx-auto mb-8 text-center">
              {locale === 'fr'
                ? "Les visites privées s'adressent aux couples, familles, groupes d'amis ou entreprises qui souhaitent découvrir la région dans la sérénité et la liberté."
                : "Private tours are designed for couples, families, groups of friends or companies who wish to discover the region in serenity and freedom."
              }
            </p>
            
            <div className="bg-gradient-to-br from-lake-light to-beige-light rounded-lg p-8 shadow-xl mb-8">
              <h3 className="text-2xl font-playfair font-bold text-stone-dark mb-4">
                {locale === 'fr'
                  ? "Chaque parcours est imaginé selon vos envies :"
                  : "Each itinerary is designed according to your wishes:"
                }
              </h3>
              <div className="grid md:grid-cols-3 gap-6 font-montserrat">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">📍</span>
                  <div>
                    <h4 className="font-semibold text-stone-dark mb-1">
                      {locale === 'fr' ? "Choix du lieu" : "Location Choice"}
                    </h4>
                    <p className="text-stone">
                      {locale === 'fr' 
                        ? "Lac, montagne, village ou nature sauvage"
                        : "Lake, mountain, village or wild nature"
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">⏰</span>
                  <div>
                    <h4 className="font-semibold text-stone-dark mb-1">
                      {locale === 'fr' ? "Durée modulable" : "Flexible Duration"}
                    </h4>
                    <p className="text-stone">
                      {locale === 'fr'
                        ? "De 2h à la journée complète"
                        : "From 2 hours to a full day"
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🎨</span>
                  <div>
                    <h4 className="font-semibold text-stone-dark mb-1">
                      {locale === 'fr' ? "Contenu personnalisé" : "Customized Content"}
                    </h4>
                    <p className="text-stone">
                      {locale === 'fr'
                        ? "Patrimoine, gastronomie, randonnée, photographie, détente..."
                        : "Heritage, gastronomy, hiking, photography, relaxation..."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
              <p className="text-xl font-playfair italic text-stone-dark">
                {locale === 'fr'
                  ? "\"Chaque groupe a son rythme, chaque instant sa lumière. Mon rôle, c'est de créer un moment qui vous ressemble.\""
                  : "\"Each group has its own rhythm, each moment its own light. My role is to create a moment that reflects you.\""
                }
              </p>
              <p className="text-right mt-4 font-montserrat text-stone">
                {locale === 'fr'
                  ? "— Anaïs Husson, guide et fondatrice d'Aixplore Tourism"
                  : "— Anaïs Husson, guide and founder of Aixplore Tourism"
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Inspirations */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-12 text-center">
              {locale === 'fr'
                ? "🗺️ Quelques inspirations de visites privées"
                : "🗺️ Private Tour Inspiration Ideas"
              }
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {privateVisits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-5xl mb-4">{item.emoji}</div>
                  <h3 className="text-2xl font-playfair font-bold text-stone-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-lake-dark mb-3 italic">
                    {item.subtitle}
                  </p>
                  <p className="text-stone font-montserrat leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Langues et accompagnement */}
      <section className="section-padding bg-gradient-to-r from-lake to-lake-dark text-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">
              {locale === 'fr' ? "💬 Langues et accompagnement" : "💬 Languages & Guidance"}
            </h2>
            <div className="space-y-4 text-lg font-montserrat leading-relaxed">
              <p>
                {locale === 'fr'
                  ? <>Toutes les visites sont proposées en <span className="font-semibold">français ou en anglais</span>, dans un esprit convivial et raffiné.</>
                  : <>All tours are offered in <span className="font-semibold">French or English</span>, in a friendly and refined spirit.</>
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Anaïs partage avec passion l'histoire, les légendes et la vie locale, en adaptant chaque expérience à vos attentes."
                  : "Anaïs passionately shares history, legends and local life, adapting each experience to your expectations."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Offrir une expérience */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-6 text-center">
              {locale === 'fr' ? "🎁 Offrez une expérience à part" : "🎁 Give a Unique Experience"}
            </h2>
            <p className="text-lg text-stone font-montserrat leading-relaxed max-w-3xl mx-auto mb-8 text-center">
              {locale === 'fr'
                ? "Une visite privée Aixplore, c'est aussi une idée cadeau élégante et originale :"
                : "An Aixplore private tour is also an elegant and original gift idea:"
              }
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-beige to-gold-light p-6 rounded-lg shadow-lg flex items-start gap-3">
                <span className="text-3xl">🎂</span>
                <div className="font-montserrat">
                  <h4 className="font-semibold text-stone-dark">
                    {locale === 'fr' ? "Anniversaire ou escapade romantique" : "Birthday or romantic getaway"}
                  </h4>
                </div>
              </div>
              <div className="bg-gradient-to-br from-lake-light to-lake p-6 rounded-lg shadow-lg flex items-start gap-3">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
                <div className="font-montserrat">
                  <h4 className="font-semibold text-stone-dark">
                    {locale === 'fr' ? "Séjour en famille ou entre amis" : "Family stay or with friends"}
                  </h4>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gold-light to-beige p-6 rounded-lg shadow-lg flex items-start gap-3">
                <span className="text-3xl">💍</span>
                <div className="font-montserrat">
                  <h4 className="font-semibold text-stone-dark">
                    {locale === 'fr' ? "Dîner-surprise ou demande en mariage" : "Surprise dinner or marriage proposal"}
                  </h4>
                </div>
              </div>
              <div className="bg-gradient-to-br from-stone-light to-beige-light p-6 rounded-lg shadow-lg flex items-start gap-3">
                <span className="text-3xl">🏢</span>
                <div className="font-montserrat">
                  <h4 className="font-semibold text-stone-dark">
                    {locale === 'fr' ? "Cadeau d'entreprise ou d'équipe" : "Corporate or team gift"}
                  </h4>
                </div>
              </div>
            </div>

            <p className="text-center text-stone font-montserrat italic">
              {locale === 'fr'
                ? "Sur demande, une carte-cadeau personnalisée vous sera créée, valable sur l'ensemble des expériences Aixplore Tourism."
                : "Upon request, a personalized gift card will be created for you, valid for all Aixplore Tourism experiences."
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Réservation */}
      <section className="section-padding bg-gradient-to-br from-stone-dark to-lake-dark text-white">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              {locale === 'fr' ? "📍 Réserver votre visite privée" : "📍 Book Your Private Tour"}
            </h2>
            <div className="space-y-4 text-lg font-montserrat leading-relaxed mb-8">
              <p>
                {locale === 'fr'
                  ? "Départs possibles depuis Aix-les-Bains, Annecy ou votre lieu d'hébergement, selon accessibilité."
                  : "Departures possible from Aix-les-Bains, Annecy or your accommodation, depending on accessibility."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Les tarifs varient selon la durée, la saison et le type d'expérience."
                  : "Rates vary according to duration, season and type of experience."
                }
              </p>
              <p className="font-semibold text-gold-light">
                {locale === 'fr' ? "Demandez votre devis sur mesure" : "Request your custom quote"}
              </p>
            </div>
            <Button href={`/${locale}/contact`} variant="gold">
              {locale === 'fr' ? "Demander un devis personnalisé" : "Request a personalized quote"}
            </Button>
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg max-w-2xl mx-auto">
              <p className="text-2xl font-playfair italic">
                {locale === 'fr'
                  ? "\"Vivre la Savoie autrement, c'est choisir la liberté d'un moment rien qu'à soi.\""
                  : "\"Experiencing Savoie differently means choosing the freedom of a moment just for yourself.\""
                }
              </p>
              <p className="text-right mt-2 text-beige-light">
                — Aixplore Tourism
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

