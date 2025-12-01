'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';

export default function ChasseCouleurs({ params }) {
  const { locale } = params;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 w-full flex items-center justify-center bg-[#124e78]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/le_mollard_noir.webp')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="text-center text-white px-4 z-10 relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-playfair font-light drop-shadow-lg mb-4"
          >
            {locale === 'fr' 
              ? "Le Mollard Noir – La chasse aux couleurs de la nature"
              : "Le Mollard Noir – The Nature Color Hunt"
            }
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-montserrat font-light drop-shadow-md"
          >
            {locale === 'fr' ? "19 avril 2026" : "April 19, 2026"}
          </motion.p>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "Présentation de la sortie" : "Outing Presentation"}
            </h2>
            <div className="space-y-4 text-base text-stone/80 font-montserrat font-light leading-relaxed">
              <p>
                {locale === 'fr'
                  ? "Le printemps s'installe, la forêt s'éveille et les couleurs explosent !"
                  : "Spring arrives, the forest awakens and colors explode!"
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Pour ce premier Rendez-vous Nature en Famille de la saison 2026, partez avec Anaïs, guide Aixplore, à la découverte du Mollard Noir, un lieu paisible entre lac et montagne."
                  : "For this first Family Nature Outing of the 2026 season, join Anaïs, Aixplore guide, to discover Le Mollard Noir, a peaceful place between lake and mountain."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Les enfants deviendront de véritables chasseurs de couleurs : ils apprendront à observer autrement, à reconnaître les nuances du vivant et à s'émerveiller des petits détails de la forêt."
                  : "Children will become true color hunters: they will learn to observe differently, recognize the nuances of life and marvel at the small details of the forest."
                }
              </p>
              <p className="font-normal text-stone-dark">
                {locale === 'fr'
                  ? "Une expérience sensorielle, ludique et complice, à vivre ensemble, loin des écrans."
                  : "A sensory, playful and bonding experience, to live together, away from screens."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thématique */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "Thématique : La nature en couleurs" : "Theme: Nature in Colors"}
            </h2>
            <ul className="space-y-3 text-base text-stone/80 font-montserrat font-light">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-lake">•</span>
                <span>{locale === 'fr' ? "Observer la forêt qui renaît au printemps." : "Observe the forest coming back to life in spring."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-lake">•</span>
                <span>{locale === 'fr' ? "Identifier les teintes de la végétation, du sol et du ciel." : "Identify the shades of vegetation, soil and sky."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-lake">•</span>
                <span>{locale === 'fr' ? "Apprendre à regarder autrement et à remarquer l'invisible." : "Learn to look differently and notice the invisible."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-lake">•</span>
                <span>{locale === 'fr' ? "Développer l'attention, la curiosité et la créativité des enfants." : "Develop children's attention, curiosity and creativity."}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Activité principale */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "Activité principale" : "Main Activity"}
            </h2>
            <h3 className="text-xl font-playfair font-normal text-lake mb-4">
              {locale === 'fr' ? "Chasse aux couleurs nature" : "Nature Color Hunt"}
            </h3>
            <div className="space-y-4 text-base text-stone/80 font-montserrat font-light leading-relaxed">
              <p>
                {locale === 'fr'
                  ? "Chaque enfant reçoit une petite carte colorée avec différentes nuances à retrouver dans la nature : vert tendre, brun d'écorce, jaune de fleur, gris de pierre, bleu du ciel…"
                  : "Each child receives a small colored card with different shades to find in nature: tender green, bark brown, flower yellow, stone gray, sky blue…"
                }
              </p>
              <p className="font-normal text-stone-dark">
                {locale === 'fr'
                  ? "La mission ? Trouver un élément naturel qui correspond à chaque teinte."
                  : "The mission? Find a natural element that matches each shade."
                }
              </p>
              <p className="italic">
                {locale === 'fr'
                  ? "Objectif : éveiller les sens, encourager l'observation fine et savourer le plaisir d'explorer."
                  : "Objective: awaken the senses, encourage fine observation and savor the pleasure of exploring."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Les parents participent aussi : ici, tout le monde joue, cherche et s'émerveille !"
                  : "Parents participate too: here, everyone plays, searches and marvels!"
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-8 text-center">
              {locale === 'fr' ? "En résumé" : "Summary"}
            </h2>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-stone/10 overflow-x-auto">
              <table className="w-full font-montserrat font-light text-sm">
                <tbody className="divide-y divide-stone/10">
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Date" : "Date"}</td>
                    <td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "Dimanche 19 avril 2026" : "Sunday, April 19, 2026"}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Horaires" : "Schedule"}</td>
                    <td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "Rendez-vous à 13h00 – retour vers 17h00" : "Meeting at 1:00 PM – return around 5:00 PM"}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Lieu" : "Location"}</td>
                    <td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "Le Mollard Noir (Aix-les-Bains)" : "Le Mollard Noir (Aix-les-Bains)"}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Distance" : "Distance"}</td>
                    <td className="py-4 px-4 text-stone/80">2,76 km</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Dénivelé positif" : "Elevation gain"}</td>
                    <td className="py-4 px-4 text-stone/80">+113 m</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Durée de marche" : "Walking time"}</td>
                    <td className="py-4 px-4 text-stone/80">
                      {locale === 'fr' 
                        ? "Environ 1h de marche, entrecoupée d'ateliers et pauses"
                        : "About 1h walk, interspersed with workshops and breaks"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Difficulté" : "Difficulty"}</td>
                    <td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "Facile – adaptée aux enfants" : "Easy – suitable for children"}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Public" : "Audience"}</td>
                    <td className="py-4 px-4 text-stone/80">
                      {locale === 'fr' 
                        ? "Parents et enfants de 5 à 12 ans (7 familles max)"
                        : "Parents and children aged 5 to 12 (7 families max)"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Tarif" : "Rate"}</td>
                    <td className="py-4 px-4 text-stone/80">
                      {locale === 'fr'
                        ? "9 € / adulte – 13 € / enfant – Pack famille : 40 €"
                        : "€9 / adult – €13 / child – Family pack: €40"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "À prévoir" : "What to bring"}</td>
                    <td className="py-4 px-4 text-stone/80">
                      {locale === 'fr'
                        ? "Chaussures fermées, eau, coupe-vent léger, curiosité et bonne humeur"
                        : "Closed shoes, water, light windbreaker, curiosity and good mood"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Accès & covoiturage" : "Access & carpooling"}</td>
                    <td className="py-4 px-4 text-stone/80">
                      {locale === 'fr'
                        ? "Le lieu précis sera communiqué quelques jours avant la sortie. Nous privilégions le covoiturage entre familles via un groupe WhatsApp dédié, créé avant la sortie pour échanger et recevoir toutes les infos utiles."
                        : "The exact location will be communicated a few days before the outing. We encourage carpooling between families via a dedicated WhatsApp group, created before the outing to exchange and receive all useful information."
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Météo" : "Weather"}</td>
                    <td className="py-4 px-4 text-stone/80">
                      {locale === 'fr'
                        ? "En cas de pluie, la sortie est reportée ou remboursée intégralement."
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
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "Ce que vos enfants vont vivre" : "What Your Children Will Experience"}
            </h2>
            <ul className="space-y-3 text-base text-stone/80 font-montserrat font-light">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-lake">•</span>
                <span>{locale === 'fr' ? "Une balade paisible et colorée au cœur de la nature." : "A peaceful and colorful walk in the heart of nature."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-lake">•</span>
                <span>{locale === 'fr' ? "Des jeux d'observation et d'attention." : "Observation and attention games."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-lake">•</span>
                <span>{locale === 'fr' ? "Une expérience sensorielle : regarder, toucher, sentir, comparer." : "A sensory experience: look, touch, smell, compare."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-lake">•</span>
                <span>{locale === 'fr' ? "Un moment de complicité et de partage en famille." : "A moment of complicity and sharing as a family."}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-beige-light text-center">
        <div className="container-custom max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light mb-6 text-stone-dark">
              {locale === 'fr' ? "Prêt pour l'aventure ?" : "Ready for the adventure?"}
            </h2>
            <p className="text-base font-montserrat mb-8 text-stone/70 font-light">
              {locale === 'fr'
                ? "Réservez dès maintenant votre place pour cette sortie nature en famille !"
                : "Book your spot now for this family nature outing!"
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


