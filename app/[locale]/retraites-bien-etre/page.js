'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/Button';

export default function RetraitesBienEtrePage({ params }) {
  const { locale } = params;

  const retreats = [
    {
      title: locale === 'fr' ? "Légèreté" : "Lightness",
      description: locale === 'fr' 
        ? "Jeûne & légèreté : se libérer du trop-plein, retrouver l'énergie naturelle du corps."
        : "Fasting & lightness: free yourself from excess, rediscover the body's natural energy.",
      date: locale === 'fr' ? "1-4 mai 2025" : "May 1-4, 2025",
      href: `/${locale}/retraites-bien-etre/legerete`
    },
    {
      title: locale === 'fr' ? "Rayonner" : "Radiate",
      description: locale === 'fr'
        ? "Laisser la lumière de la lune éclairer ce que l'on porte encore."
        : "Let the moonlight illuminate what we still carry.",
      date: locale === 'fr' ? "13-16 juin 2025" : "June 13-16, 2025",
      href: `/${locale}/retraites-bien-etre/rayonner`
    },
    {
      title: locale === 'fr' ? "Essence féminine" : "Feminine Essence",
      description: locale === 'fr'
        ? "Un voyage intérieur pour accueillir sa vulnérabilité et renouer avec sa joie naturelle."
        : "An inner journey to embrace vulnerability and reconnect with natural joy.",
      date: locale === 'fr' ? "18-21 sept. 2025" : "Sept 18-21, 2025",
      href: `/${locale}/retraites-bien-etre/essence-feminine`
    },
    {
      title: locale === 'fr' ? "Renaissance" : "Rebirth",
      description: locale === 'fr'
        ? "Silence, intentions et renaissance sous la nouvelle lune."
        : "Silence, intentions and rebirth under the new moon.",
      date: locale === 'fr' ? "9-12 oct. 2025" : "Oct 9-12, 2025",
      href: `/${locale}/retraites-bien-etre/renaissance`
    }
  ];

  const plateItems = [
    { text: locale === 'fr' ? "Viandes et poissons de qualité" : "Quality meats and fish" },
    { text: locale === 'fr' ? "Œufs, fromages, crème et yaourts gras" : "Eggs, cheese, cream and full-fat yogurts" },
    { text: locale === 'fr' ? "Oléagineux (amandes, noix, noisettes...)" : "Nuts (almonds, walnuts, hazelnuts...)" },
    { text: locale === 'fr' ? "Légumes pauvres en glucides" : "Low-carb vegetables" },
    { text: locale === 'fr' ? "Fruits à faible teneur en sucre" : "Low-sugar fruits" }
  ];

  const includedItems = [
    { text: locale === 'fr' ? "Hébergement 3 nuits" : "3-night accommodation" },
    { text: locale === 'fr' ? "Tous les repas (régime cétogène doux)" : "All meals (gentle ketogenic diet)" },
    { text: locale === 'fr' ? "Tous les ateliers et pratiques" : "All workshops and practices" },
    { text: locale === 'fr' ? "Les soins énergétiques" : "Energy healing" },
    { text: locale === 'fr' ? "L'accompagnement personnalisé" : "Personalized guidance" },
    { text: locale === 'fr' ? "Le matériel (tapis, couvertures...)" : "Equipment (mats, blankets...)" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen w-screen lg:-ml-56 flex items-center justify-center">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/retraite_bien_etre_en_montagne.webp')" }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
        <div className="text-center text-white/90 px-4 z-10 relative lg:ml-56">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-playfair font-light mb-6 drop-shadow-lg"
          >
            {locale === 'fr' 
              ? "Retraites Bien-être en Montagne"
              : "Mountain Wellness Retreats"
            }
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-playfair italic max-w-3xl mx-auto font-light drop-shadow-md"
          >
            {locale === 'fr'
              ? "Reconnectez-vous à l'essentiel, à la nature et à vous-même"
              : "Reconnect with the essential, with nature and with yourself"
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
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "Une parenthèse pour se retrouver" : "A Pause to Find Yourself"}
            </h2>
            <div className="space-y-4 text-base text-stone/80 font-montserrat font-light leading-relaxed">
              <p>
                {locale === 'fr'
                  ? "Quatre retraites, quatre moments privilégiés pour ralentir, respirer et retrouver la simplicité d'un rythme naturel."
                  : "Four retreats, four privileged moments to slow down, breathe and rediscover the simplicity of a natural rhythm."
                }
              </p>
              <p className="font-normal text-stone-dark">
                {locale === 'fr'
                  ? "Encadrées par Anaïs, Isée et Marie, ces retraites sont une invitation à réapprendre à s'écouter."
                  : "Led by Anaïs, Isée and Marie, these retreats are an invitation to relearn how to listen to yourself."
                }
              </p>
              <p className="italic text-lake">
                {locale === 'fr'
                  ? "Se libérer, s'alléger et se reconnecter à soi."
                  : "To free yourself, lighten up and reconnect with yourself."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Retraites 2025 */}
      <section id="retraites-2025" className="py-12 bg-beige-light">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-8 text-center">
              {locale === 'fr' ? "Les quatre retraites 2025" : "The Four 2025 Retreats"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {retreats.map((item, index) => (
                <Link href={item.href} key={index} className="block">
                  <div className="bg-white p-5 rounded-xl border border-stone/10 shadow-sm hover:shadow-md hover:border-lake/20 transition-all duration-300 h-full">
                    <p className="text-xs text-gold font-montserrat font-medium mb-2 uppercase tracking-wide">
                      {item.date}
                    </p>
                    <h3 className="text-lg font-playfair font-normal text-stone-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone/70 font-montserrat font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Régime Cétogène */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-4 text-center">
              {locale === 'fr' 
                ? "Le régime cétogène doux"
                : "The Gentle Ketogenic Diet"
              }
            </h2>
            <p className="text-base font-playfair italic text-lake mb-6 text-center">
              {locale === 'fr'
                ? "On ne peut pas apaiser l'esprit sans prendre soin du corps."
                : "We cannot soothe the spirit without caring for the body."
              }
            </p>
            <div className="space-y-4 text-base text-stone/80 font-montserrat font-light leading-relaxed mb-8 text-center">
              <p>
                {locale === 'fr'
                  ? "Réduire les sucres et augmenter les bons gras pour permettre au corps d'entrer dans un état de cétose."
                  : "Reduce sugars and increase good fats to allow the body to enter a state of ketosis."
                }
              </p>
              <p className="font-normal text-stone-dark">
                {locale === 'fr'
                  ? "Résultat : un esprit plus clair, une énergie stable, un véritable recentrage."
                  : "Result: a clearer mind, stable energy, true recentering."
                }
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone/10">
              <h3 className="text-lg font-playfair font-light text-stone-dark mb-4 text-center">
                {locale === 'fr' ? "Dans vos assiettes" : "On your plate"}
              </h3>
              <div className="grid md:grid-cols-2 gap-3 font-montserrat text-sm">
                {plateItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-lake">•</span>
                    <p className="text-stone/70 font-light">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Déconnexion */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl p-6 shadow-sm border border-lake/20">
              <h2 className="text-2xl font-playfair font-light text-stone-dark mb-4 text-center">
                {locale === 'fr' ? "Déconnexion totale" : "Total Disconnection"}
              </h2>
              <p className="text-base font-playfair italic text-lake mb-4 text-center">
                {locale === 'fr'
                  ? "Parce qu'il n'y a pas de pleine présence les yeux sur un écran."
                  : "Because there is no full presence with eyes on a screen."
                }
              </p>
              <div className="space-y-3 text-base text-stone/80 font-montserrat font-light leading-relaxed text-center">
                <p>
                  {locale === 'fr'
                    ? "Déconnexion complète de 9h à 20h : pas de téléphone, pas d'écran, pas de notifications."
                    : "Complete disconnection from 9am to 8pm: no phone, no screen, no notifications."
                  }
                </p>
                <p className="font-normal text-stone-dark">
                  {locale === 'fr'
                    ? "Apprendre à respirer sans scroll, à marcher sans photo, à ressentir sans écran."
                    : "Learn to breathe without scrolling, to walk without taking photos, to feel without screens."
                  }
                </p>
              </div>
              <p className="mt-4 text-center text-sm text-stone/50 italic">
                {locale === 'fr'
                  ? "(Téléphones accessibles le soir pour prévenir vos proches)"
                  : "(Phones accessible in the evening to notify loved ones)"
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Informations Pratiques */}
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
                    {locale === 'fr' ? "Public" : "Audience"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Adultes – débutants ou initiés" : "Adults – beginners or experienced"}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Lieu" : "Location"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Chalet en Savoie – Bauges, Revard ou lac du Bourget" : "Chalet in Savoie – Bauges, Revard or Lake Bourget"}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Groupe" : "Group size"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "8 à 10 participants maximum" : "8 to 10 participants maximum"}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lake mb-2">
                    {locale === 'fr' ? "Déconnexion" : "Disconnection"}
                  </h3>
                  <p className="text-stone/70 font-light">
                    {locale === 'fr' ? "Pas d'écran de 9h à 20h" : "No screen from 9am to 8pm"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Tarifs */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-8 text-center">
              {locale === 'fr' ? "Tarifs" : "Pricing"}
            </h2>

            {/* Offre de lancement */}
            <div className="mb-6">
              <p className="text-sm font-montserrat font-medium text-gold uppercase tracking-wide text-center mb-4">
                {locale === 'fr' ? "Offre de lancement – jusqu'au 1er mai 2025" : "Launch Offer – until May 1, 2025"}
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 text-center border border-gold/30 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-sm font-montserrat font-medium text-stone-dark mb-1">
                    {locale === 'fr' ? "Chambre partagée" : "Shared room"}
                  </h3>
                  <p className="text-xs text-stone/50 mb-3">{locale === 'fr' ? "(4 lits)" : "(4 beds)"}</p>
                  <p className="text-3xl font-playfair font-light text-gold">450€</p>
                </div>
                <div className="bg-white rounded-xl p-5 text-center border border-gold/30 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-sm font-montserrat font-medium text-stone-dark mb-1">
                    {locale === 'fr' ? "Chambre double" : "Double room"}
                  </h3>
                  <p className="text-xs text-stone/50 mb-3">{locale === 'fr' ? "(offre duo)" : "(duo offer)"}</p>
                  <p className="text-3xl font-playfair font-light text-gold">550€</p>
                  <p className="text-xs text-stone/50">{locale === 'fr' ? "/ personne" : "/ person"}</p>
                </div>
                <div className="bg-white rounded-xl p-5 text-center border border-gold/30 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-sm font-montserrat font-medium text-stone-dark mb-1">
                    {locale === 'fr' ? "Chambre solo" : "Solo room"}
                  </h3>
                  <p className="text-xs text-stone/50 mb-3">&nbsp;</p>
                  <p className="text-3xl font-playfair font-light text-gold">590€</p>
                </div>
              </div>
            </div>

            {/* Ce qui est inclus */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone/10 mb-8">
              <h3 className="text-lg font-playfair font-light text-stone-dark mb-4 text-center">
                {locale === 'fr' ? "Ce qui est inclus" : "What's Included"}
              </h3>
              <div className="grid md:grid-cols-2 gap-3 font-montserrat text-sm">
                {includedItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-lake">✓</span>
                    <p className="text-stone/70 font-light">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button href={`/${locale}/contact`} variant="gold">
                {locale === 'fr' ? "Réserver votre place" : "Book your spot"}
              </Button>
              <p className="mt-4 text-sm text-stone/50 font-montserrat font-light">
                {locale === 'fr' ? "Places limitées – Réservation conseillée" : "Limited spots – Booking recommended"}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
