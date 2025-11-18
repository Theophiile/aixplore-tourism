'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';
import { getTranslation } from '@/lib/translations';

export default function RetraitesBienEtrePage({ params }) {
  const { locale } = params;
  const t = (key) => getTranslation(locale, key);

  const retreats = [
    {
      title: locale === 'fr' ? "🌿 Légèreté" : "🌿 Lightness",
      description: locale === 'fr' 
        ? "Jeûne & légèreté : se libérer du trop-plein, retrouver l'énergie naturelle du corps. Une retraite pour apaiser le mental, alléger le corps et réapprendre à goûter la vie à travers un jeûne de deux jours, la marche, les soins et l'écriture introspective."
        : "Fasting & lightness: free yourself from excess, rediscover the body's natural energy. A retreat to soothe the mind, lighten the body and relearn to taste life through a two-day fast, walking, healing and introspective writing.",
      image: "/images/retreat-spring.jpg",
      date: locale === 'fr' ? "Du 1er au 4 mai 2025" : "May 1-4, 2025",
      href: `/${locale}/retraites-bien-etre/legerete`
    },
    {
      title: locale === 'fr' ? "🌕 Rayonner" : "🌕 Radiate",
      description: locale === 'fr'
        ? "Laisser la lumière de la lune éclairer ce que l'on porte encore. Une expérience de libération et de purification : écriture intuitive, cérémonie du feu, danse et rituels de pleine lune."
        : "Let the moonlight illuminate what we still carry. An experience of release and purification: intuitive writing, fire ceremony, dance and full moon rituals.",
      image: "/images/retreat-summer.jpg",
      date: locale === 'fr' ? "Du 13 au 16 juin 2025" : "June 13-16, 2025",
      href: `/${locale}/retraites-bien-etre/rayonner`
    },
    {
      title: locale === 'fr' ? "🌸 Essence féminine" : "🌸 Feminine Essence",
      description: locale === 'fr'
        ? "Un voyage intérieur pour accueillir sa vulnérabilité et renouer avec sa joie naturelle. Entre introspection, respiration, écriture et douceur, une parenthèse entre femmes pour se redécouvrir."
        : "An inner journey to embrace vulnerability and reconnect with natural joy. Between introspection, breath, writing and gentleness, a pause among women to rediscover ourselves.",
      image: "/images/retreat-autumn.jpg",
      date: locale === 'fr' ? "Du 18 au 21 septembre 2025" : "September 18-21, 2025",
      href: `/${locale}/retraites-bien-etre/essence-feminine`
    },
    {
      title: locale === 'fr' ? "🌑 Renaissance" : "🌑 Rebirth",
      description: locale === 'fr'
        ? "Silence, intentions et renaissance. Sous la nouvelle lune, un moment pour semer, méditer et s'ouvrir à la vie à travers rituels, soins et écriture d'intentions."
        : "Silence, intentions and rebirth. Under the new moon, a moment to plant seeds, meditate and open to life through rituals, healing and intention writing.",
      image: "/images/retreat-october.jpg",
      date: locale === 'fr' ? "Du 9 au 12 octobre 2025" : "October 9-12, 2025",
      href: `/${locale}/retraites-bien-etre/renaissance`
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection 
        image="/images/wellness-retreat-hero.jpg"
        height="h-screen"
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6"
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
            className="text-xl md:text-3xl font-playfair italic max-w-3xl mx-auto mb-8"
          >
            {locale === 'fr'
              ? "Reconnectez-vous à l'essentiel, à la nature et à vous-même"
              : "Reconnect with the essential, with nature and with yourself"
            }
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button href="#retraites-2025" variant="gold">
              {locale === 'fr'
                ? "Découvrir les Retraites 2025"
                : "Discover the 2025 Retreats"
              }
            </Button>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Section Introduction */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-6 flex items-center justify-center gap-3">
              <span>🌿</span> {locale === 'fr' ? "Une parenthèse pour se retrouver" : "A Pause to Find Yourself"}
            </h2>
            <div className="space-y-4 text-lg text-stone font-montserrat leading-relaxed max-w-4xl mx-auto">
              <p>
                {locale === 'fr'
                  ? "Quatre retraites, quatre moments privilégiés pour ralentir, respirer et retrouver la simplicité d'un rythme naturel."
                  : "Four retreats, four privileged moments to slow down, breathe and rediscover the simplicity of a natural rhythm."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Chaque séjour est une bulle hors du temps, mêlant pratiques corporelles douces, soins énergétiques, balades méditatives et introspection."
                  : "Each stay is a bubble out of time, blending gentle body practices, energy healing, meditative walks and introspection."
                }
              </p>
              <p className="font-semibold text-stone-dark">
                {locale === 'fr'
                  ? "Encadrées par Anaïs, Isée et Marie, ces retraites sont une invitation à réapprendre à s'écouter, à libérer le mental et à apaiser le corps."
                  : "Led by Anaïs, Isée and Marie, these retreats are an invitation to relearn how to listen to yourself, free your mind and soothe your body."
                }
              </p>
              <p className="italic">
                {locale === 'fr'
                  ? "Chaque édition possède son propre thème – jeûne, pleine lune, féminin, renaissance – mais toutes partagent la même intention :"
                  : "Each edition has its own theme — fasting, full moon, feminine, rebirth — but all share the same intention:"
                }
              </p>
              <p className="text-xl font-playfair font-semibold text-lake-dark">
                {locale === 'fr'
                  ? "se libérer, s'alléger et se reconnecter à soi."
                  : "to free yourself, lighten up and reconnect with yourself."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Régime Cétogène */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-6 flex items-center gap-3">
              <span>🍲</span> {locale === 'fr' 
                ? "Pourquoi un régime cétogène doux pendant la retraite ?"
                : "Why a Gentle Ketogenic Diet During the Retreat?"
              }
            </h2>
            <p className="text-xl font-playfair italic text-stone-dark mb-6">
              {locale === 'fr'
                ? "On ne peut pas apaiser l'esprit sans prendre soin du corps."
                : "We cannot soothe the spirit without caring for the body."
              }
            </p>
            <div className="space-y-4 text-lg text-stone font-montserrat leading-relaxed mb-8">
              <p>
                {locale === 'fr'
                  ? <>Durant les retraites, nous adoptons une <span className="font-semibold text-stone-dark">alimentation cétogène douce</span>, pensée pour rééquilibrer les énergies et favoriser la clarté mentale.</>
                  : <>During retreats, we adopt a <span className="font-semibold text-stone-dark">gentle ketogenic diet</span>, designed to rebalance energies and promote mental clarity.</>
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Le principe : réduire fortement les sucres et augmenter les bons gras pour permettre au corps d'entrer dans un état de cétose, où il puise son énergie dans les graisses plutôt que dans le glucose."
                  : "The principle: greatly reduce sugars and increase good fats to allow the body to enter a state of ketosis, where it draws energy from fats rather than glucose."
                }
              </p>
              <p className="font-semibold text-lake-dark">
                {locale === 'fr'
                  ? "Résultat : un esprit plus clair, une énergie stable, un véritable recentrage."
                  : "Result: a clearer mind, stable energy, true recentering."
                }
              </p>
            </div>

            <div className="bg-gradient-to-br from-beige to-gold-light p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-playfair font-bold text-stone-dark mb-6">
                🌿 {locale === 'fr' 
                  ? "Ce que vous retrouverez dans vos assiettes :"
                  : "What you'll find on your plate:"
                }
              </h3>
              <div className="grid md:grid-cols-2 gap-4 font-montserrat text-stone-dark">
                <div className="flex items-start gap-2">
                  <span>•</span>
                  <p>{locale === 'fr' ? "Viandes et poissons de qualité" : "Quality meats and fish"}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span>•</span>
                  <p>{locale === 'fr' ? "Œufs, fromages, crème et yaourts gras" : "Eggs, cheese, cream and full-fat yogurts"}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span>•</span>
                  <p>{locale === 'fr' ? "Oléagineux (amandes, noix, noisettes...)" : "Nuts (almonds, walnuts, hazelnuts...)"}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span>•</span>
                  <p>{locale === 'fr' ? "Légumes pauvres en glucides (courgettes, brocolis, épinards...)" : "Low-carb vegetables (zucchini, broccoli, spinach...)"}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span>•</span>
                  <p>{locale === 'fr' ? "Fruits à faible teneur en sucre (baies, citron, avocat...)" : "Low-sugar fruits (berries, lemon, avocado...)"}</p>
                </div>
              </div>
              <p className="mt-6 text-stone italic">
                {locale === 'fr'
                  ? "Les féculents, légumineuses, fruits sucrés et produits à base de glucose sont provisoirement écartés : fini le sucre dans le café et les douceurs du soir."
                  : "Starches, legumes, sweet fruits and glucose-based products are temporarily set aside: no more sugar in coffee and evening treats."
                }
              </p>
              <p className="mt-4 text-stone-dark font-semibold">
                {locale === 'fr'
                  ? "Ce n'est pas une contrainte, mais un retour à l'essentiel : offrir au corps la paix qu'il mérite pour que l'esprit puisse, lui aussi, se régénérer."
                  : "It's not a constraint, but a return to the essential: offering the body the peace it deserves so that the mind can also regenerate."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Déconnexion Téléphone */}
      <section className="section-padding bg-gradient-to-r from-lake to-lake-dark text-white">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 flex items-center gap-3">
              <span>📵</span> {locale === 'fr' ? "Pourquoi couper le téléphone ?" : "Why Disconnect from Phones?"}
            </h2>
            <p className="text-xl font-playfair italic mb-6">
              {locale === 'fr'
                ? "Parce qu'il n'y a pas de pleine présence les yeux sur un écran."
                : "Because there is no full presence with eyes on a screen."
              }
            </p>
            <div className="space-y-4 text-lg font-montserrat leading-relaxed">
              <p>
                {locale === 'fr'
                  ? <>Chaque retraite inclut une <span className="font-semibold">déconnexion complète de 9h à 20h</span> : pas de téléphone, pas d&apos;écran, pas de notifications.</>
                  : <>Each retreat includes <span className="font-semibold">complete disconnection from 9am to 8pm</span>: no phone, no screen, no notifications.</>
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Cette coupure volontaire vous aide à retrouver la présence, la concentration, la qualité d'écoute et la vraie sérénité."
                  : "This voluntary break helps you rediscover presence, concentration, listening quality and true serenity."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Les écrans fragmentent notre attention, alimentent le stress et empêchent la pleine détente."
                  : "Screens fragment our attention, fuel stress and prevent full relaxation."
                }
              </p>
              <p className="font-semibold">
                {locale === 'fr'
                  ? "Ici, vous apprendrez à respirer sans \"scroll\", à marcher sans photo, à ressentir sans écran."
                  : "Here, you'll learn to breathe without scrolling, to walk without taking photos, to feel without screens."
                }
              </p>
            </div>
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <p className="text-2xl font-playfair italic text-center">
                {locale === 'fr'
                  ? "\"Quand on se débranche du monde, on se rebranche à soi.\""
                  : "\"When you unplug from the world, you plug back into yourself.\""
                }
              </p>
            </div>
            <p className="mt-6 text-beige-light text-sm text-center">
              {locale === 'fr'
                ? "(Les téléphones restent accessibles le soir pour prévenir vos proches si besoin.)"
                : "(Phones remain accessible in the evening to notify loved ones if needed.)"
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Informations Pratiques */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-6 text-center flex items-center justify-center gap-3">
              <span>💫</span> {locale === 'fr' ? "Informations pratiques communes" : "Common Practical Information"}
            </h2>
            
            <div className="bg-white rounded-lg p-8 shadow-xl overflow-x-auto">
              <table className="w-full font-montserrat">
                <tbody className="divide-y divide-stone-light">
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">
                      {locale === 'fr' ? "Public" : "Audience"}
                    </td>
                    <td className="py-4 px-4 text-stone">
                      {locale === 'fr' 
                        ? "Adultes – débutants ou initiés au jeûne"
                        : "Adults – beginners or experienced in fasting"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">
                      {locale === 'fr' ? "Type de jeûne" : "Type of fast"}
                    </td>
                    <td className="py-4 px-4 text-stone">
                      {locale === 'fr'
                        ? "Cétogène doux : tisanes, bouillons, huiles MCT, légumes pauvres en glucides, protéines et bons gras"
                        : "Gentle ketogenic: herbal teas, broths, MCT oils, low-carb vegetables, proteins and good fats"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">
                      {locale === 'fr' ? "Lieu" : "Location"}
                    </td>
                    <td className="py-4 px-4 text-stone">
                      {locale === 'fr'
                        ? "Chalet ou gîte en Savoie – secteur Bauges, Revard ou lac du Bourget"
                        : "Chalet or gîte in Savoie – Bauges, Revard or Lake Bourget area"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">
                      {locale === 'fr' ? "Taille du groupe" : "Group size"}
                    </td>
                    <td className="py-4 px-4 text-stone">
                      {locale === 'fr'
                        ? "8 à 10 participants maximum"
                        : "8 to 10 participants maximum"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">
                      {locale === 'fr' ? "Déconnexion totale" : "Total disconnection"}
                    </td>
                    <td className="py-4 px-4 text-stone">
                      {locale === 'fr'
                        ? "Pas de téléphone ni d'écran de 9h à 20h"
                        : "No phone or screen from 9am to 8pm"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">
                      {locale === 'fr' ? "Et s'il pleut ?" : "What if it rains?"}
                    </td>
                    <td className="py-4 px-4 text-stone italic">
                      {locale === 'fr'
                        ? "Rien n'est annulé, tout se transforme. Une marche sous la pluie devient une purification du corps et de l'esprit. L'eau nettoie, le vent libère, la terre ancre."
                        : "Nothing is canceled, everything transforms. Rain purifies, wind liberates, earth anchors."
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">
                      {locale === 'fr' ? "Lectures" : "Reading"}
                    </td>
                    <td className="py-4 px-4 text-stone">
                      {locale === 'fr'
                        ? "Les livres sont les bienvenus pendant les temps calmes."
                        : "Books are welcome during quiet times."
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Retraites 2025 */}
      <section id="retraites-2025" className="section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-4 text-center"
          >
            {locale === 'fr'
              ? "Les quatre retraites de l'année 2025"
              : "The Four Retreats of 2025"
            }
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-stone font-montserrat mb-12 max-w-2xl mx-auto"
          >
            {locale === 'fr'
              ? "Quatre moments uniques pour vous reconnecter à l'essentiel"
              : "Four unique moments to reconnect with the essential"
            }
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {retreats.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                date={item.date}
                href={item.href}
                buttonText={locale === 'fr' ? "Découvrir la retraite" : "Discover the retreat"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Tarifs */}
      <section className="section-padding bg-gradient-to-br from-stone-dark to-lake-dark text-white">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-12 text-center flex items-center justify-center gap-3">
              <span>💰</span> {locale === 'fr' 
                ? "Tarifs des retraites bien-être en montagne"
                : "Mountain Wellness Retreat Pricing"
              }
            </h2>

            {/* Offre de lancement */}
            <div className="mb-12">
              <div className="bg-gold/20 border-2 border-gold rounded-lg p-8 mb-4">
                <h3 className="text-3xl font-playfair font-bold mb-6 text-gold flex items-center gap-2">
                  🌷 {locale === 'fr'
                    ? "Offre de lancement – jusqu'au 1ᵉʳ mai 2025"
                    : "Launch Offer – until May 1, 2025"
                  }
                </h3>
                <div className="grid md:grid-cols-3 gap-6 font-montserrat">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-4xl mb-3">🛏</div>
                    <h4 className="text-xl font-semibold mb-2">
                      {locale === 'fr' ? "Chambre partagée" : "Shared room"}
                    </h4>
                    <p className="text-sm text-beige-light mb-3">
                      {locale === 'fr' ? "(4 lits simples)" : "(4 single beds)"}
                    </p>
                    <p className="text-3xl font-bold text-gold">€450</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-4xl mb-3">🌸</div>
                    <h4 className="text-xl font-semibold mb-2">
                      {locale === 'fr' ? "Chambre double" : "Double room"}
                    </h4>
                    <p className="text-sm text-beige-light mb-3">
                      {locale === 'fr' ? "(offre duo)" : "(duo offer)"}
                    </p>
                    <p className="text-3xl font-bold text-gold">€550</p>
                    <p className="text-sm text-beige-light">
                      {locale === 'fr' ? "/ personne" : "/ person"}
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-4xl mb-3">✨</div>
                    <h4 className="text-xl font-semibold mb-2">
                      {locale === 'fr' ? "Chambre double solo" : "Double room solo"}
                    </h4>
                    <p className="text-sm text-beige-light mb-3">&nbsp;</p>
                    <p className="text-3xl font-bold text-gold">€590</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarifs réguliers */}
            <div className="mb-12">
              <h3 className="text-3xl font-playfair font-bold mb-6 text-beige-light flex items-center gap-2">
                🌿 {locale === 'fr'
                  ? "Tarifs réguliers – à partir du 2 mai 2025"
                  : "Regular Rates – from May 2, 2025"
                }
              </h3>
              <div className="grid md:grid-cols-3 gap-6 font-montserrat">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="text-4xl mb-3">🛏</div>
                  <h4 className="text-xl font-semibold mb-2">
                    {locale === 'fr' ? "Chambre partagée" : "Shared room"}
                  </h4>
                  <p className="text-sm text-beige-light mb-3">&nbsp;</p>
                  <p className="text-3xl font-bold">€515</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="text-4xl mb-3">🌸</div>
                  <h4 className="text-xl font-semibold mb-2">
                    {locale === 'fr' ? "Chambre double" : "Double room"}
                  </h4>
                  <p className="text-sm text-beige-light mb-3">
                    {locale === 'fr' ? "(offre duo)" : "(duo offer)"}
                  </p>
                  <p className="text-3xl font-bold">€670</p>
                  <p className="text-sm text-beige-light">
                    {locale === 'fr' ? "/ personne" : "/ person"}
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="text-4xl mb-3">✨</div>
                  <h4 className="text-xl font-semibold mb-2">
                    {locale === 'fr' ? "Chambre double solo" : "Double room solo"}
                  </h4>
                  <p className="text-sm text-beige-light mb-3">&nbsp;</p>
                  <p className="text-3xl font-bold">€640</p>
                </div>
              </div>
            </div>

            {/* Informations incluses */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h4 className="text-2xl font-playfair font-bold mb-4 text-center">
                {locale === 'fr' ? "Ce qui est inclus" : "What's Included"}
              </h4>
              <div className="grid md:grid-cols-2 gap-4 font-montserrat text-beige-light">
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <p>{locale === 'fr' ? "Hébergement 3 nuits" : "3-night accommodation"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <p>{locale === 'fr' ? "Tous les repas (régime cétogène doux)" : "All meals (gentle ketogenic diet)"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <p>{locale === 'fr' ? "Tous les ateliers et pratiques" : "All workshops and practices"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <p>{locale === 'fr' ? "Les soins énergétiques" : "Energy healing"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <p>{locale === 'fr' ? "L'accompagnement personnalisé" : "Personalized guidance"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <p>{locale === 'fr' ? "Le matériel (tapis de yoga, couvertures...)" : "Equipment (yoga mats, blankets...)"}</p>
                </div>
              </div>
              <p className="mt-6 text-center text-beige italic">
                {locale === 'fr'
                  ? "Les retraites sont limitées à 8 à 10 participants pour préserver la qualité et la bienveillance du groupe."
                  : "Retreats are limited to 8 to 10 participants to preserve the quality and kindness of the group."
                }
              </p>
            </div>

            <div className="text-center mt-12">
              <Button href={`/${locale}/contact`} variant="gold">
                {locale === 'fr' ? "Réserver votre place" : "Book your spot"}
              </Button>
              <p className="mt-4 text-beige-light text-sm">
                {locale === 'fr'
                  ? "Places limitées – Réservation conseillée"
                  : "Limited spots – Booking recommended"
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

