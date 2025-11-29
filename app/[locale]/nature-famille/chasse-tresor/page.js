'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';

export default function ChasseTresor({ params }) {
  const { locale } = params;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 w-full flex items-center justify-center">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/la_croix_des_bergers.webp')" }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
        <div className="text-center text-white px-4 z-10 relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-playfair font-light drop-shadow-2xl mb-4"
          >
            {locale === 'fr' 
              ? "La Croix des Bergers – La grande chasse au trésor nature"
              : "Croix des Bergers – The Great Nature Treasure Hunt"
            }
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-montserrat font-light drop-shadow-lg"
          >
            {locale === 'fr' ? "17 mai 2026" : "May 17, 2026"}
          </motion.p>
        </div>
      </section>

      {/* Présentation */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "Présentation de la sortie" : "Outing Presentation"}
            </h2>
            <div className="space-y-4 text-lg text-stone font-montserrat font-light leading-relaxed">
              <p>
                {locale === 'fr'
                  ? "Au cœur des prairies fleuries et des bois paisibles du versant d'Aix-les-Bains, la Croix des Bergers est un lieu idéal pour vivre une aventure grandeur nature."
                  : "In the heart of flowery meadows and peaceful woods on the Aix-les-Bains hillside, Croix des Bergers is an ideal place to experience a full-scale adventure."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Lors de cette sortie, les familles partiront sur les sentiers à la recherche d'indices dissimulés dans la montagne."
                  : "During this outing, families will set out on the trails in search of clues hidden in the mountain."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Ensemble, parents et enfants devront observer, chercher, résoudre des énigmes et coopérer pour atteindre le trésor final : un goûter nature et convivial, à déguster face au panorama."
                  : "Together, parents and children will have to observe, search, solve riddles and cooperate to reach the final treasure: a nature snack to enjoy facing the panorama."
                }
              </p>
              <p className="font-normal text-stone-dark">
                {locale === 'fr'
                  ? "Encadrée par Anaïs, guide Aixplore, cette balade allie jeu, découverte et complicité, pour reconnecter petits et grands à la nature et au plaisir de marcher ensemble."
                  : "Led by Anaïs, Aixplore guide, this walk combines play, discovery and complicity, to reconnect young and old to nature and the pleasure of walking together."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thématique */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "Thématique : Aventure et observation en pleine nature" : "Theme: Adventure and Observation in Nature"}
            </h2>
            <ul className="space-y-3 text-lg text-stone font-montserrat font-light">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0">•</span>
                <span>{locale === 'fr' ? "Explorer les sentiers autrement, en suivant la piste du trésor." : "Explore trails differently, following the treasure trail."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0">•</span>
                <span>{locale === 'fr' ? "Développer le sens de l'orientation et de l'observation." : "Develop sense of direction and observation."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0">•</span>
                <span>{locale === 'fr' ? "Résoudre des énigmes inspirées de la nature locale." : "Solve riddles inspired by local nature."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0">•</span>
                <span>{locale === 'fr' ? "Célébrer la coopération avec un goûter partagé en plein air." : "Celebrate cooperation with a shared outdoor snack."}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Activité principale */}
      <section className="section-padding bg-gradient-to-br from-lake-light to-gold-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "Activité principale" : "Main Activity"}
            </h2>
            <h3 className="text-2xl font-playfair font-normal text-lake-dark mb-4">
              {locale === 'fr' ? "Grande chasse au trésor nature" : "Great Nature Treasure Hunt"}
            </h3>
            <div className="space-y-4 text-lg text-stone font-montserrat font-light leading-relaxed">
              <p>
                {locale === 'fr'
                  ? "Tout au long du parcours, des indices seront cachés : symboles, objets naturels, petits défis ou messages à décoder."
                  : "Throughout the route, clues will be hidden: symbols, natural objects, small challenges or messages to decode."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Chaque famille avance à son rythme, en équipe, jusqu'à trouver le lieu du trésor final où une pause-goûter nature clôturera la sortie dans la convivialité."
                  : "Each family progresses at their own pace, as a team, until finding the final treasure location where a nature snack will conclude the outing in a friendly atmosphere."
                }
              </p>
              <p className="italic">
                {locale === 'fr'
                  ? "Objectif : apprendre à observer, coopérer, réfléchir et savourer — littéralement !"
                  : "Objective: learn to observe, cooperate, reflect and savor — literally!"
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6 text-center">
              {locale === 'fr' ? "En résumé" : "Summary"}
            </h2>
            
            <div className="bg-white rounded-lg p-8 shadow-xl overflow-x-auto">
              <table className="w-full font-montserrat font-light">
                <tbody className="divide-y divide-stone-light">
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Date" : "Date"}</td>
                    <td className="py-4 px-4 text-stone">{locale === 'fr' ? "Dimanche 17 mai 2026" : "Sunday, May 17, 2026"}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Horaires" : "Schedule"}</td>
                    <td className="py-4 px-4 text-stone">{locale === 'fr' ? "Rendez-vous à 13h00 – retour vers 17h00" : "Meeting at 1:00 PM – return around 5:00 PM"}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Lieu" : "Location"}</td>
                    <td className="py-4 px-4 text-stone">{locale === 'fr' ? "La Croix des Bergers (secteur d'Aix-les-Bains)" : "Croix des Bergers (Aix-les-Bains area)"}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Distance" : "Distance"}</td>
                    <td className="py-4 px-4 text-stone">6,54 km</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Durée de marche" : "Walking time"}</td>
                    <td className="py-4 px-4 text-stone">
                      {locale === 'fr' 
                        ? "Environ 3h (avec pauses et ateliers inclus)"
                        : "About 3h (with breaks and workshops included)"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Dénivelé positif / négatif" : "Elevation gain / loss"}</td>
                    <td className="py-4 px-4 text-stone">+55 m / -55 m</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Difficulté" : "Difficulty"}</td>
                    <td className="py-4 px-4 text-stone">{locale === 'fr' ? "Facile – adaptée aux enfants" : "Easy – suitable for children"}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Public" : "Audience"}</td>
                    <td className="py-4 px-4 text-stone">
                      {locale === 'fr' 
                        ? "Parents et enfants de 5 à 12 ans (7 familles max)"
                        : "Parents and children aged 5 to 12 (7 families max)"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Tarif" : "Rate"}</td>
                    <td className="py-4 px-4 text-stone">
                      {locale === 'fr'
                        ? "9 € / adulte – 13 € / enfant – Pack famille : 40 €"
                        : "€9 / adult – €13 / child – Family pack: €40"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "À prévoir" : "What to bring"}</td>
                    <td className="py-4 px-4 text-stone">
                      {locale === 'fr'
                        ? "Chaussures fermées, eau, coupe-vent léger, curiosité et bonne humeur"
                        : "Closed shoes, water, light windbreaker, curiosity and good mood"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Accès & covoiturage" : "Access & carpooling"}</td>
                    <td className="py-4 px-4 text-stone">
                      {locale === 'fr'
                        ? "Le lieu précis du point de départ sera communiqué quelques jours avant la sortie. Nous privilégions le covoiturage entre familles via un groupe WhatsApp dédié."
                        : "The exact departure point will be communicated a few days before the outing. We encourage carpooling between families via a dedicated WhatsApp group."
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Météo" : "Weather"}</td>
                    <td className="py-4 px-4 text-stone">
                      {locale === 'fr'
                        ? "En cas de pluie, la sortie est reportée ou intégralement remboursée."
                        : "In case of rain, the outing is postponed or fully refunded."
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ce que vos enfants vont vivre */}
      <section className="section-padding bg-beige">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "Ce que vos enfants vont vivre" : "What Your Children Will Experience"}
            </h2>
            <ul className="space-y-3 text-lg text-stone font-montserrat font-light">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0">•</span>
                <span>{locale === 'fr' ? "Une aventure nature à taille d'enfant." : "A child-sized nature adventure."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0">•</span>
                <span>{locale === 'fr' ? "Le plaisir de chercher, réfléchir et trouver ensemble." : "The pleasure of searching, thinking and finding together."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0">•</span>
                <span>{locale === 'fr' ? "Des énigmes inspirées de la faune et de la flore savoyarde." : "Riddles inspired by Savoyard fauna and flora."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0">•</span>
                <span>{locale === 'fr' ? "Une pause-goûter en pleine montagne, en guise de trésor final." : "A snack break in the mountains, as the final treasure."}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-lake to-lake-dark text-white text-center">
        <div className="container-custom max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-playfair font-light mb-6">
              {locale === 'fr' ? "Prêt pour l'aventure ?" : "Ready for the adventure?"}
            </h2>
            <p className="text-lg font-montserrat mb-8">
              {locale === 'fr'
                ? "Réservez dès maintenant votre place pour cette chasse au trésor nature !"
                : "Book your spot now for this nature treasure hunt!"
              }
            </p>
            <Button href={`/${locale}/contact`} variant="gold">
              {locale === 'fr' ? "Réserver cette sortie" : "Book this outing"}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


