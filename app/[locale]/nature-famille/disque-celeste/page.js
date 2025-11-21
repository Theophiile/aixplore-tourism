'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';

export default function DisqueCeleste({ params }) {
  const { locale } = params;

  return (
    <div>
      <ParallaxSection image="/images/family-birds.jpg" height="h-96">
        <div className="text-center text-white px-4">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-playfair font-light drop-shadow-2xl mb-4">
            {locale === 'fr' ? "🌌 Grotte du Loup – Le mystère du disque céleste" : "🌌 Wolf Cave – The Celestial Disc Mystery"}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl font-montserrat font-light drop-shadow-lg">
            {locale === 'fr' ? "13 septembre 2026" : "September 13, 2026"}
          </motion.p>
        </div>
      </ParallaxSection>

      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6">{locale === 'fr' ? "Présentation de la sortie" : "Outing Presentation"}</h2>
            <div className="space-y-4 text-lg text-stone font-montserrat font-light leading-relaxed">
              <p>{locale === 'fr' ? "À deux pas du lac d'Aiguebelette, le petit village de Nances cache un sentier fascinant, plongeant dans une forêt dense et verdoyante." : "A stone's throw from Lake Aiguebelette, the small village of Nances hides a fascinating trail, plunging into a dense, lush forest."}</p>
              <p>{locale === 'fr' ? "C'est là que se niche la Grotte du Loup, un lieu plein de mystères et de légendes…" : "This is where the Wolf Cave is nestled, a place full of mysteries and legends…"}</p>
              <p>{locale === 'fr' ? "Pour cette sortie automnale, Anaïs, guide Aixplore, vous propose une balade d'aventure et de réflexion : un parcours d'orientation pour retrouver la trace du fameux \"disque céleste\" — un objet mystérieux lié aux étoiles et aux croyances anciennes." : "For this autumn outing, Anaïs, Aixplore guide, offers you an adventure and reflection walk: an orienteering course to find the trace of the famous \"celestial disc\" — a mysterious object linked to stars and ancient beliefs."}</p>
              <p className="font-normal text-stone-dark">{locale === 'fr' ? "Entre exploration, observation et énigmes, les familles deviendront de véritables archéologues du ciel !" : "Between exploration, observation and riddles, families will become true archaeologists of the sky!"}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6">{locale === 'fr' ? "🌠 Thématique : Aventure, astronomie et légendes" : "🌠 Theme: Adventure, Astronomy and Legends"}</h2>
            <ul className="space-y-3 text-lg text-stone font-montserrat font-light">
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "Découvrir la forêt de Nances à l'aide d'un parcours d'orientation." : "Discover the Nances forest using an orienteering course."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "Résoudre des énigmes inspirées du ciel et des légendes locales." : "Solve riddles inspired by the sky and local legends."}</span></li>
              <li className="flex items-start gap-3"><span className="text-2xl flex-shrink-0">🌌</span><span>{locale === 'fr' ? "Observer la lumière, les ombres et les formes du paysage." : "Observe light, shadows and landscape shapes."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "Stimuler la curiosité, l'imagination et l'esprit d'équipe." : "Stimulate curiosity, imagination and team spirit."}</span></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-lake-light to-gold-light">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6">{locale === 'fr' ? "Activité principale" : "Main Activity"}</h2>
            <h3 className="text-2xl font-playfair font-normal text-lake-dark mb-4">{locale === 'fr' ? "Parcours d'orientation \"Le mystère du disque céleste\"" : "\"Celestial Disc Mystery\" Orienteering Course"}</h3>
            <div className="space-y-4 text-lg text-stone font-montserrat font-light leading-relaxed">
              <p>{locale === 'fr' ? "Grâce à des balises et à une carte fournie par Anaïs, les familles suivront un parcours d'orientation facile, jalonné d'indices." : "Using markers and a map provided by Anaïs, families will follow an easy orienteering course, marked with clues."}</p>
              <p>{locale === 'fr' ? "Chaque étape proposera une petite énigme liée au thème du ciel, des étoiles et des croyances anciennes. L'aventure mènera jusqu'à la Grotte du Loup, but mystérieux de la sortie, où les enfants découvriront une petite surprise symbolique." : "Each stage will offer a small riddle related to the theme of the sky, stars and ancient beliefs. The adventure will lead to the Wolf Cave, the mysterious goal of the outing, where children will discover a small symbolic surprise."}</p>
              <p className="italic">{locale === 'fr' ? "Objectif : explorer, coopérer et s'émerveiller en découvrant les liens entre nature, histoire et imagination." : "Objective: explore, cooperate and marvel by discovering the links between nature, history and imagination."}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6 text-center">{locale === 'fr' ? "En résumé" : "Summary"}</h2>
            <div className="bg-white rounded-lg p-8 shadow-xl overflow-x-auto">
              <table className="w-full font-montserrat font-light">
                <tbody className="divide-y divide-stone-light">
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Date" : "Date"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "Dimanche 13 septembre 2026" : "Sunday, September 13, 2026"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Horaires" : "Schedule"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "Rendez-vous à 13h00 – retour vers 17h00" : "Meeting at 1:00 PM – return around 5:00 PM"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Lieu" : "Location"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "Grotte du Loup – Nances (près du lac d'Aiguebelette)" : "Wolf Cave – Nances (near Lake Aiguebelette)"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Distance" : "Distance"}</td><td className="py-4 px-4 text-stone">2,5 km</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Durée estimée" : "Estimated duration"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "1h de marche + atelier d'orientation et pauses" : "1h walk + orienteering workshop and breaks"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Dénivelé positif" : "Elevation gain"}</td><td className="py-4 px-4 text-stone">+101 m</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Difficulté" : "Difficulty"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "Facile – adaptée aux enfants (chemin parfois irrégulier)" : "Easy – suitable for children (sometimes uneven path)"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Public" : "Audience"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "Parents et enfants de 5 à 12 ans (7 familles max)" : "Parents and children aged 5 to 12 (7 families max)"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Tarif" : "Rate"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "9 € / adulte – 13 € / enfant – Pack famille : 40 € (le matériel d'orientation est fourni)" : "€9 / adult – €13 / child – Family pack: €40 (orienteering equipment provided)"}</td></tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-beige">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6">{locale === 'fr' ? "Ce que vos enfants vont vivre" : "What Your Children Will Experience"}</h2>
            <ul className="space-y-3 text-lg text-stone font-montserrat font-light">
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "Une aventure nature entre forêt et mystère." : "A nature adventure between forest and mystery."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "L'apprentissage de l'orientation et de la lecture de carte." : "Learning orientation and map reading."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "La découverte d'un lieu géologique fascinant." : "Discovery of a fascinating geological site."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "Le plaisir de résoudre des énigmes en famille et d'imaginer ensemble des histoires d'étoiles et de loups." : "The pleasure of solving riddles as a family and imagining stories of stars and wolves together."}</span></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-lake to-lake-dark text-white text-center">
        <div className="container-custom max-w-2xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-playfair font-light mb-6">{locale === 'fr' ? "Prêt pour l'aventure ?" : "Ready for the adventure?"}</h2>
            <Button href={`/${locale}/contact`} variant="gold">{locale === 'fr' ? "Réserver cette sortie" : "Book this outing"}</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


