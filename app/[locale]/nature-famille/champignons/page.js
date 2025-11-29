'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';

export default function Champignons({ params }) {
  const { locale } = params;

  return (
    <div>
      <section className="relative h-96 w-full flex items-center justify-center">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/verel-pragondran.webp')" }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
        <div className="text-center text-white px-4 z-10 relative">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-playfair font-light mb-4 drop-shadow-2xl">
            {locale === 'fr' ? "Vérel-Pragondran – Champignons et trésors d'automne" : "Vérel-Pragondran – Mushrooms and Autumn Treasures"}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl font-montserrat font-light drop-shadow-lg">
            {locale === 'fr' ? "18 octobre 2026" : "October 18, 2026"}
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6">{locale === 'fr' ? "Présentation de la sortie" : "Outing Presentation"}</h2>
            <div className="space-y-4 text-lg text-stone font-montserrat leading-relaxed">
              <p>{locale === 'fr' ? "L'automne s'installe, les feuilles craquent sous les pas et la forêt de Vérel-Pragondran s'emplit de parfums de mousse, de noix et de terre humide." : "Autumn settles in, leaves crackle underfoot and the Vérel-Pragondran forest fills with scents of moss, walnuts and damp earth."}</p>
              <p>{locale === 'fr' ? "Lors de cette balade guidée par Anaïs, petits et grands partiront à la découverte du monde des champignons et des secrets de l'automne, avant de terminer la sortie sur une note gourmande avec la dégustation d'une tarte aux noix maison 🥧✨" : "During this walk guided by Anaïs, young and old will discover the world of mushrooms and autumn secrets, before ending the outing on a gourmet note with the tasting of a homemade walnut tart 🥧✨"}</p>
              <p className="font-normal text-stone-dark">{locale === 'fr' ? "Entre jeux d'observation, senteurs de sous-bois et cueillette douce, cette sortie sensorielle mêle découverte, partage et plaisir simple — un vrai moment cocooning en pleine nature." : "Between observation games, forest scents and gentle picking, this sensory outing combines discovery, sharing and simple pleasure — a true cocooning moment in nature."}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6">{locale === 'fr' ? "Thématique : Découvrir, observer, savourer l'automne" : "Theme: Discover, Observe, Savor Autumn"}</h2>
            <ul className="space-y-3 text-lg text-stone font-montserrat font-light">
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "Observer et reconnaître quelques champignons typiques de la forêt savoyarde." : "Observe and recognize some typical mushrooms of the Savoyard forest."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "Ramasser les noix tombées sur le sentier et comprendre leur cycle naturel." : "Collect walnuts fallen on the trail and understand their natural cycle."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "Sentir, toucher, comparer les textures du sol et des feuilles." : "Smell, touch, compare the textures of soil and leaves."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "Partager un goûter convivial à base de noix en fin de balade." : "Share a friendly snack made with walnuts at the end of the walk."}</span></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-lake-light to-gold-light">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6">{locale === 'fr' ? "Activité principale" : "Main Activity"}</h2>
            <h3 className="text-2xl font-playfair font-normal text-lake-dark mb-4">{locale === 'fr' ? "Balade découverte & atelier gourmand" : "Discovery Walk & Gourmet Workshop"}</h3>
            <div className="space-y-4 text-lg text-stone font-montserrat leading-relaxed">
              <p>{locale === 'fr' ? "Tout au long du chemin, les familles seront invitées à observer la forêt : formes, couleurs, odeurs, champignons, feuilles, fruits…" : "Throughout the path, families will be invited to observe the forest: shapes, colors, scents, mushrooms, leaves, fruits…"}</p>
              <p>{locale === 'fr' ? "Les enfants apprendront à repérer les différences entre espèces sans rien cueillir, puis ramasseront les noix tombées naturellement pour les goûter en fin de parcours." : "Children will learn to spot differences between species without picking anything, then collect naturally fallen walnuts to taste at the end of the route."}</p>
              <p className="font-normal text-stone-dark">{locale === 'fr' ? "La sortie se terminera par une pause gourmande : dégustation de noix fraîches et d'une tarte aux noix locale, partagée tous ensemble autour d'un moment chaleureux." : "The outing will end with a gourmet break: tasting fresh walnuts and a local walnut tart, shared together in a warm moment."}</p>
              <p className="italic">{locale === 'fr' ? "Objectif : éveiller les sens, observer la nature d'automne et savourer le plaisir d'être ensemble." : "Objective: awaken the senses, observe autumn nature and savor the pleasure of being together."}</p>
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
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Date" : "Date"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "Dimanche 18 octobre 2026" : "Sunday, October 18, 2026"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Horaires" : "Schedule"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "Rendez-vous à 13h00 – retour vers 17h00" : "Meeting at 1:00 PM – return around 5:00 PM"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Lieu" : "Location"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "Vérel-Pragondran (près d'Aix-les-Bains)" : "Vérel-Pragondran (near Aix-les-Bains)"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Distance" : "Distance"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "Environ 4 km" : "About 4 km"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Durée totale" : "Total duration"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "Environ 2h30 à 3h (balade + atelier + dégustation)" : "About 2h30 to 3h (walk + workshop + tasting)"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Dénivelé positif" : "Elevation gain"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "+70 m environ" : "+70 m approximately"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Difficulté" : "Difficulty"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "Facile – accessible à tous" : "Easy – accessible to all"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Public" : "Audience"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "Parents et enfants de 5 à 12 ans (7 familles max)" : "Parents and children aged 5 to 12 (7 families max)"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Tarif" : "Rate"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "9 € / adulte – 13 € / enfant – Pack famille : 40 €" : "€9 / adult – €13 / child – Family pack: €40"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "À prévoir" : "What to bring"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "Chaussures de marche, eau, coupe-vent, curiosité" : "Hiking shoes, water, windbreaker, curiosity"}</td></tr>
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
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "Une balade automnale douce et parfumée." : "A gentle and fragrant autumn walk."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "L'observation du monde mystérieux des champignons." : "Observation of the mysterious world of mushrooms."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "Le plaisir de ramasser des noix et d'en goûter le fruit." : "The pleasure of collecting walnuts and tasting them."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "Une pause gourmande partagée autour d'une tarte aux noix maison." : "A gourmet break shared around a homemade walnut tart."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "Un moment de convivialité et de découverte à savourer ensemble." : "A moment of conviviality and discovery to savor together."}</span></li>
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


