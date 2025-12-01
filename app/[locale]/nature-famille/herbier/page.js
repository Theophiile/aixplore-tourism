'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';

export default function Herbier({ params }) {
  const { locale } = params;

  return (
    <div>
      <section className="relative h-96 w-full flex items-center justify-center bg-[#124e78]">
        <Image
          src="/images/lac_de_la_thuile.webp"
          alt="Lac de la Thuile"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
        <div className="text-center text-white px-4 z-10 relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-playfair font-light drop-shadow-lg mb-4"
          >
            {locale === 'fr' 
              ? "Lac de La Thuile – L'herbier coloré du bord de l'eau"
              : "Lake La Thuile – The Colorful Waterside Herbarium"
            }
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-montserrat font-light drop-shadow-md"
          >
            {locale === 'fr' ? "14 juin 2026" : "June 14, 2026"}
          </motion.p>
        </div>
      </section>

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
                  ? "Entre forêt et montagne, le lac de La Thuile est un petit bijou naturel niché dans un écrin de verdure."
                  : "Between forest and mountain, Lake La Thuile is a small natural gem nestled in a green setting."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Autour de ce lac paisible, les familles partiront pour une balade sensorielle et créative animée par Anaïs, guide Aixplore."
                  : "Around this peaceful lake, families will go on a sensory and creative walk led by Anaïs, Aixplore guide."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Au programme : observer, toucher, sentir, cueillir avec douceur et créer un herbier coloré, souvenir fleuri de cette promenade."
                  : "On the program: observe, touch, smell, gently pick and create a colorful herbarium, a flowery memory of this walk."
                }
              </p>
              <p className="font-normal text-stone-dark">
                {locale === 'fr'
                  ? "Cette activité allie découverte botanique, éveil des sens et créativité — une expérience idéale pour les enfants curieux et les parents aimant apprendre ensemble, au rythme tranquille de la nature."
                  : "This activity combines botanical discovery, sensory awakening and creativity — an ideal experience for curious children and parents who love learning together, at nature's peaceful pace."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "Thématique : La nature comme palette de couleurs" : "Theme: Nature as a Color Palette"}
            </h2>
            <ul className="space-y-3 text-base text-stone/80 font-montserrat font-light">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-lake">•</span>
                <span>{locale === 'fr' ? "Découvrir la flore du bord du lac et ses secrets." : "Discover the lakeside flora and its secrets."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-lake">•</span>
                <span>{locale === 'fr' ? "Apprendre à reconnaître quelques fleurs et feuilles simples." : "Learn to recognize some simple flowers and leaves."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-lake">•</span>
                <span>{locale === 'fr' ? "Créer un herbier coloré et poétique à rapporter à la maison." : "Create a colorful and poetic herbarium to take home."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-lake">•</span>
                <span>{locale === 'fr' ? "Développer la créativité et le respect du vivant." : "Develop creativity and respect for living things."}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

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
              {locale === 'fr' ? "Création d'un herbier coloré" : "Creating a Colorful Herbarium"}
            </h3>
            <div className="space-y-4 text-base text-stone/80 font-montserrat font-light leading-relaxed">
              <p>
                {locale === 'fr'
                  ? "Les enfants partiront avec un carnet nature et apprendront à observer les formes, les textures et les couleurs des plantes rencontrées."
                  : "Children will set out with a nature notebook and learn to observe the shapes, textures and colors of the plants they encounter."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Les éléments récoltés (avec soin et modération) serviront à composer un herbier artistique, symbole de leur regard unique sur la nature."
                  : "The elements collected (with care and moderation) will be used to compose an artistic herbarium, symbol of their unique view of nature."
                }
              </p>
              <p className="italic text-stone/70">
                {locale === 'fr'
                  ? "Objectif : éveiller la curiosité, développer la motricité fine et sensibiliser à la biodiversité par la création."
                  : "Objective: awaken curiosity, develop fine motor skills and raise awareness of biodiversity through creation."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
                    <td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "Dimanche 14 juin 2026" : "Sunday, June 14, 2026"}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Horaires" : "Schedule"}</td>
                    <td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "Rendez-vous à 10h00 – retour vers 15h00" : "Meeting at 10:00 AM – return around 3:00 PM"}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Lieu" : "Location"}</td>
                    <td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "Lac de La Thuile" : "Lake La Thuile"}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Longueur" : "Length"}</td>
                    <td className="py-4 px-4 text-stone/80">2 km</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Durée de marche" : "Walking time"}</td>
                    <td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "Environ 2H (balade + atelier + pauses)" : "About 2H (walk + workshop + breaks)"}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Dénivelé positif" : "Elevation gain"}</td>
                    <td className="py-4 px-4 text-stone/80">+40 m</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Difficulté" : "Difficulty"}</td>
                    <td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "Randonnée facile – adaptée aux enfants" : "Easy hike – suitable for children"}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Public" : "Audience"}</td>
                    <td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "Parents et enfants de 5 à 12 ans (7 familles max)" : "Parents and children aged 5 to 12 (7 families max)"}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Tarif" : "Rate"}</td>
                    <td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "9 € / adulte – 13 € / enfant – Pack famille : 40 €" : "€9 / adult – €13 / child – Family pack: €40"}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "À prévoir" : "What to bring"}</td>
                    <td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "Chaussures fermées, eau, chapeau, ciseaux à bout rond (facultatif), curiosité et bonne humeur" : "Closed shoes, water, hat, round-tip scissors (optional), curiosity and good mood"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

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
              <li className="flex items-start gap-3"><span className="flex-shrink-0 text-lake">•</span><span>{locale === 'fr' ? "Une balade paisible autour d'un lac de montagne." : "A peaceful walk around a mountain lake."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0 text-lake">•</span><span>{locale === 'fr' ? "L'observation des plantes, couleurs et textures de la nature." : "Observation of plants, colors and textures of nature."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0 text-lake">•</span><span>{locale === 'fr' ? "La création d'un herbier coloré et personnel, souvenir de leur sortie." : "Creating a colorful and personal herbarium, a memory of their outing."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0 text-lake">•</span><span>{locale === 'fr' ? "Un moment de calme, de partage et d'émerveillement familial." : "A moment of calm, sharing and family wonder."}</span></li>
            </ul>
          </motion.div>
        </div>
      </section>

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
