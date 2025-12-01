'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function VisitesPriveesPage({ params }) {
  const { locale } = params;

  const privateVisits = [
    {
      title: locale === 'fr' ? "Coucher de soleil au Mont Revard" : "Sunset at Mont Revard",
      subtitle: locale === 'fr' ? "Apéritif savoyard inclus" : "Savoyard aperitif included",
      description: locale === 'fr'
        ? "Une expérience inoubliable au-dessus du lac du Bourget. Dégustez un apéritif local en admirant la lumière dorée sur les sommets."
        : "An unforgettable experience above Lake Bourget. Enjoy a local aperitif while admiring the golden light on the peaks."
    },
    {
      title: locale === 'fr' ? "Balade ou randonnée en raquettes" : "Snowshoe Walk or Hike",
      subtitle: locale === 'fr' ? "Les Bauges ou le Revard" : "Bauges or Revard",
      description: locale === 'fr'
        ? "En hiver, découvrez la montagne autrement : un décor silencieux, une nature intacte et la douceur d'une aventure enneigée."
        : "In winter, discover the mountains differently: a silent setting, pristine nature and the gentleness of a snowy adventure."
    },
    {
      title: locale === 'fr' ? "Annecy et Talloires" : "Annecy and Talloires",
      subtitle: locale === 'fr' ? "Élégance et nature" : "Elegance and nature",
      description: locale === 'fr'
        ? "Partez à la découverte de la \"Venise des Alpes\", puis flânez à Talloires entre lac et abbaye."
        : "Discover the \"Venice of the Alps\", then stroll in Talloires between lake and abbey."
    },
    {
      title: locale === 'fr' ? "Dîner ou apéritif au sommet" : "Dinner or Aperitif at the Summit",
      subtitle: locale === 'fr' ? "Expérience exclusive" : "Exclusive experience",
      description: locale === 'fr'
        ? "Une expérience exclusive pour célébrer un moment spécial : dîner privé, apéritif de montagne ou pique-nique chic."
        : "An exclusive experience to celebrate a special moment: private dinner, mountain aperitif or chic picnic."
    },
    {
      title: locale === 'fr' ? "Chanaz et le canal de Savières" : "Chanaz and the Savières Canal",
      subtitle: locale === 'fr' ? "Le petit Venise savoyard" : "The little Savoyard Venice",
      description: locale === 'fr'
        ? "Découvrez le charme du \"petit Venise savoyard\" : ses ruelles, son moulin et sa ruche flottante."
        : "Discover the charm of the \"little Savoyard Venice\": its alleys, mill and floating beehive."
    },
    {
      title: locale === 'fr' ? "Col de la Chambotte" : "Col de la Chambotte",
      subtitle: locale === 'fr' ? "Panorama sur le lac du Bourget" : "Panorama over Lake Bourget",
      description: locale === 'fr'
        ? "Un belvédère incontournable offrant une vue spectaculaire. Idéal pour une halte contemplative."
        : "An unmissable viewpoint offering a spectacular view. Ideal for a contemplative stop."
    }
  ];

  const occasions = [
    { text: locale === 'fr' ? "Anniversaire ou escapade romantique" : "Birthday or romantic getaway" },
    { text: locale === 'fr' ? "Séjour en famille ou entre amis" : "Family stay or with friends" },
    { text: locale === 'fr' ? "Dîner-surprise ou demande en mariage" : "Surprise dinner or marriage proposal" },
    { text: locale === 'fr' ? "Cadeau d'entreprise ou d'équipe" : "Corporate or team gift" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen w-screen lg:-ml-56 flex items-center justify-center bg-[#124e78]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/visite-privée.webp')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="text-center text-white/90 px-4 z-10 relative lg:ml-56">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-playfair font-light mb-6 drop-shadow-lg"
          >
            {locale === 'fr' ? "Visites privées" : "Private Tours"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-playfair italic max-w-3xl mx-auto font-light drop-shadow-md"
          >
            {locale === 'fr'
              ? "L'expérience sur mesure signée Aixplore Tourism"
              : "The tailor-made experience by Aixplore Tourism"
            }
          </motion.p>
        </div>
      </section>

      {/* Section Introduction */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-base text-stone/80 font-montserrat font-light leading-relaxed mb-4">
              {locale === 'fr'
                ? "Une balade privée au bord du lac du Bourget, un dîner au sommet des montagnes, ou un coucher de soleil au Revard…"
                : "A private walk along Lake Bourget, a dinner at the mountain summit, or a sunset at Revard…"
              }
            </p>
            <p className="text-base font-normal text-stone-dark font-montserrat mb-4">
              {locale === 'fr'
                ? "Avec Aixplore Tourism, chaque visite devient une expérience unique, façonnée autour de vous."
                : "With Aixplore Tourism, each visit becomes a unique experience, crafted around you."
              }
            </p>
            <p className="text-base italic text-lake font-montserrat font-light">
              {locale === 'fr'
                ? "Un moment privilégié, entre nature, culture et émotions partagées."
                : "A privileged moment, between nature, culture and shared emotions."
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Une visite rien que pour vous */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-6 text-center">
              {locale === 'fr' ? "Une visite rien que pour vous" : "A Tour Just for You"}
            </h2>
            <p className="text-base text-stone/80 font-montserrat font-light leading-relaxed max-w-3xl mx-auto mb-8 text-center">
              {locale === 'fr'
                ? "Les visites privées s'adressent aux couples, familles, groupes d'amis ou entreprises qui souhaitent découvrir la région dans la sérénité et la liberté."
                : "Private tours are designed for couples, families, groups of friends or companies who wish to discover the region in serenity and freedom."
              }
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone/10 mb-8">
              <h3 className="text-lg font-playfair font-normal text-stone-dark mb-4 text-center">
                {locale === 'fr'
                  ? "Chaque parcours est imaginé selon vos envies"
                  : "Each itinerary is designed according to your wishes"
                }
              </h3>
              <div className="grid md:grid-cols-3 gap-6 font-montserrat text-sm">
                <div className="text-center">
                  <h4 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Choix du lieu" : "Location Choice"}
                  </h4>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' 
                      ? "Lac, montagne, village ou nature sauvage"
                      : "Lake, mountain, village or wild nature"
                    }
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Durée modulable" : "Flexible Duration"}
                  </h4>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr'
                      ? "De 2h à la journée complète"
                      : "From 2 hours to a full day"
                    }
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Contenu personnalisé" : "Customized Content"}
                  </h4>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr'
                      ? "Patrimoine, gastronomie, randonnée, détente..."
                      : "Heritage, gastronomy, hiking, relaxation..."
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-lake/20 max-w-2xl mx-auto">
              <p className="text-base font-playfair italic text-stone-dark text-center">
                {locale === 'fr'
                  ? "\"Chaque groupe a son rythme, chaque instant sa lumière. Mon rôle, c'est de créer un moment qui vous ressemble.\""
                  : "\"Each group has its own rhythm, each moment its own light. My role is to create a moment that reflects you.\""
                }
              </p>
              <p className="text-right mt-3 font-montserrat text-sm text-stone/60 font-light">
                {locale === 'fr'
                  ? "— Anaïs Husson, guide Aixplore"
                  : "— Anaïs Husson, Aixplore guide"
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Inspirations */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-8 text-center">
              {locale === 'fr'
                ? "Quelques inspirations"
                : "Some Inspirations"
              }
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {privateVisits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-5 rounded-xl border border-stone/10 shadow-sm hover:shadow-md hover:border-lake/20 transition-all duration-300"
                >
                  <p className="text-xs text-gold font-montserrat font-medium mb-1 uppercase tracking-wide">
                    {item.subtitle}
                  </p>
                  <h3 className="text-lg font-playfair font-normal text-stone-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone/70 font-montserrat font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Langues */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone/10">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl">🇫🇷</span>
                <span className="text-2xl">🇬🇧</span>
              </div>
              <h3 className="text-lg font-playfair font-light text-stone-dark mb-3 text-center">
                {locale === 'fr' ? "Langues et accompagnement" : "Languages & Guidance"}
              </h3>
              <p className="text-sm text-stone/70 font-montserrat font-light leading-relaxed text-center">
                {locale === 'fr'
                  ? "Toutes les visites sont proposées en français ou en anglais, dans un esprit convivial et raffiné. Anaïs partage avec passion l'histoire, les légendes et la vie locale."
                  : "All tours are offered in French or English, in a friendly and refined spirit. Anaïs passionately shares history, legends and local life."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Offrir une expérience */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-6 text-center">
              {locale === 'fr' ? "Offrez une expérience à part" : "Give a Unique Experience"}
            </h2>
            <p className="text-base text-stone/80 font-montserrat font-light leading-relaxed max-w-2xl mx-auto mb-6 text-center">
              {locale === 'fr'
                ? "Une visite privée Aixplore, c'est aussi une idée cadeau élégante et originale."
                : "An Aixplore private tour is also an elegant and original gift idea."
              }
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {occasions.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="bg-white rounded-xl p-4 text-center border border-stone/10 shadow-sm hover:bg-gradient-to-br hover:from-lake/10 hover:to-gold/10 hover:border-lake/20 hover:shadow-md transition-all duration-300"
                >
                  <p className="text-sm font-montserrat font-light text-stone-dark">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-sm text-stone/60 font-montserrat font-light italic">
              {locale === 'fr'
                ? "Sur demande, une carte-cadeau personnalisée vous sera créée."
                : "Upon request, a personalized gift card will be created for you."
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Réservation */}
      <section className="py-16 bg-beige-light">
        <div className="container-custom max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "Réserver votre visite privée" : "Book Your Private Tour"}
            </h2>
            <div className="space-y-3 text-sm font-montserrat font-light leading-relaxed mb-8 text-stone/70">
              <p>
                {locale === 'fr'
                  ? "Départs possibles depuis Aix-les-Bains, Annecy ou votre lieu d'hébergement."
                  : "Departures possible from Aix-les-Bains, Annecy or your accommodation."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Les tarifs varient selon la durée, la saison et le type d'expérience."
                  : "Rates vary according to duration, season and type of experience."
                }
              </p>
            </div>
            <Button href={`/${locale}/contact`} variant="gold">
              {locale === 'fr' ? "Demander un devis personnalisé" : "Request a personalized quote"}
            </Button>
            
            <div className="mt-10 bg-white rounded-xl p-6 shadow-sm border border-lake/20 max-w-xl mx-auto">
              <p className="text-base font-playfair italic text-stone-dark">
                {locale === 'fr'
                  ? "\"Vivre la Savoie autrement, c'est choisir la liberté d'un moment rien qu'à soi.\""
                  : "\"Experiencing Savoie differently means choosing the freedom of a moment just for yourself.\""
                }
              </p>
              <p className="text-right mt-2 text-sm text-stone/50 font-montserrat font-light">
                — Aixplore Tourism
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
