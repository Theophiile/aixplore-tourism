'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';

export default function LandArt({ params }) {
  const { locale } = params;

  return (
    <div>
      <ParallaxSection image="/images/family-cabins.jpg" height="h-96">
        <div className="text-center text-white px-4">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-playfair font-bold mb-4">
            {locale === 'fr' ? "🎨 Lacs de Chevelu – Le tableau nature" : "🎨 Chevelu Lakes – The Nature Artwork"}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl font-montserrat">
            {locale === 'fr' ? "30 août 2026" : "August 30, 2026"}
          </motion.p>
        </div>
      </ParallaxSection>

      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-playfair font-bold text-stone-dark mb-6">{locale === 'fr' ? "🌿 Présentation de la sortie" : "🌿 Outing Presentation"}</h2>
            <div className="space-y-4 text-lg text-stone font-montserrat leading-relaxed">
              <p>{locale === 'fr' ? "À la fin de l'été, les lacs de Chevelu se parent de reflets dorés et de lumière douce." : "At the end of summer, the Chevelu lakes are adorned with golden reflections and soft light."}</p>
              <p>{locale === 'fr' ? "C'est dans ce cadre apaisant qu'Anaïs, guide Aixplore, vous propose une balade créative autour de la nature et de l'art." : "In this soothing setting, Anaïs, Aixplore guide, offers you a creative walk around nature and art."}</p>
              <p>{locale === 'fr' ? "Tout au long du sentier, les familles observeront les couleurs, les textures et les formes naturelles pour collecter, avec respect, quelques petits éléments : feuilles, fleurs tombées, bois, petits cailloux…" : "Along the trail, families will observe colors, textures and natural shapes to collect, with respect, some small elements: leaves, fallen flowers, wood, small pebbles…"}</p>
              <p>{locale === 'fr' ? "En fin de parcours, chacun réalisera sur toile un tableau inspiré du paysage, uniquement avec ces trésors naturels — sans peinture, ni crayon, mais avec la beauté du vivant." : "At the end of the route, everyone will create on canvas a painting inspired by the landscape, only with these natural treasures — without paint or pencil, but with the beauty of life."}</p>
              <p className="font-semibold text-stone-dark">{locale === 'fr' ? "Une activité calme et poétique, idéale pour développer la sensibilité artistique et le respect de la nature 🌿✨" : "A calm and poetic activity, ideal for developing artistic sensitivity and respect for nature 🌿✨"}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-playfair font-bold text-stone-dark mb-6">{locale === 'fr' ? "🎨 Thématique : Créer avec ce que la nature offre" : "🎨 Theme: Creating with What Nature Offers"}</h2>
            <ul className="space-y-3 text-lg text-stone font-montserrat">
              <li className="flex items-start gap-3"><span className="text-2xl flex-shrink-0">🍂</span><span>{locale === 'fr' ? "Observer les nuances et textures du monde naturel." : "Observe the nuances and textures of the natural world."}</span></li>
              <li className="flex items-start gap-3"><span className="text-2xl flex-shrink-0">🎨</span><span>{locale === 'fr' ? "Créer un paysage sur toile avec des matériaux naturels." : "Create a landscape on canvas with natural materials."}</span></li>
              <li className="flex items-start gap-3"><span className="text-2xl flex-shrink-0">🌾</span><span>{locale === 'fr' ? "Exprimer sa créativité autrement qu'avec des crayons." : "Express creativity differently than with pencils."}</span></li>
              <li className="flex items-start gap-3"><span className="text-2xl flex-shrink-0">💚</span><span>{locale === 'fr' ? "Apprendre à composer sans déranger et en observant." : "Learn to compose without disturbing and by observing."}</span></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-lake-light to-gold-light">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-playfair font-bold text-stone-dark mb-6">{locale === 'fr' ? "🪶 Activité principale" : "🪶 Main Activity"}</h2>
            <h3 className="text-2xl font-playfair font-bold text-lake-dark mb-4">{locale === 'fr' ? "🖼 Atelier \"Tableau nature\"" : "🖼 \"Nature Artwork\" Workshop"}</h3>
            <div className="space-y-4 text-lg text-stone font-montserrat leading-relaxed">
              <p>{locale === 'fr' ? "À la fin de la balade, chaque enfant (accompagné de ses parents) disposera d'une petite toile. À partir des éléments naturels ramassés au fil du sentier, il créera un paysage ou une scène de nature : collages de feuilles, pétales, brins d'herbe, bois ou galets…" : "At the end of the walk, each child (accompanied by their parents) will have a small canvas. Using the natural elements collected along the trail, they will create a landscape or nature scene: collages of leaves, petals, blades of grass, wood or pebbles…"}</p>
              <p>{locale === 'fr' ? "Un moment d'expression libre, où chacun laisse parler son imagination et repart avec son œuvre unique." : "A moment of free expression, where everyone lets their imagination speak and leaves with their unique work."}</p>
              <p className="italic">{locale === 'fr' ? "👉 Objectif : développer la créativité, le sens de l'observation et la connexion à la nature par la création artistique." : "👉 Objective: develop creativity, sense of observation and connection to nature through artistic creation."}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-playfair font-bold text-stone-dark mb-6 text-center">{locale === 'fr' ? "🌸 En résumé" : "🌸 Summary"}</h2>
            <div className="bg-white rounded-lg p-8 shadow-xl overflow-x-auto">
              <table className="w-full font-montserrat">
                <tbody className="divide-y divide-stone-light">
                  <tr><td className="py-4 px-4 font-semibold text-stone-dark">📅 {locale === 'fr' ? "Date" : "Date"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "Dimanche 30 août 2026" : "Sunday, August 30, 2026"}</td></tr>
                  <tr><td className="py-4 px-4 font-semibold text-stone-dark">⏰ {locale === 'fr' ? "Horaires" : "Schedule"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "Rendez-vous à 08H45 – retour vers 13H45" : "Meeting at 8:45 AM – return around 1:45 PM"}</td></tr>
                  <tr><td className="py-4 px-4 font-semibold text-stone-dark">📍 {locale === 'fr' ? "Lieu" : "Location"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "Lacs de Chevelu (près de Yenne)" : "Chevelu Lakes (near Yenne)"}</td></tr>
                  <tr><td className="py-4 px-4 font-semibold text-stone-dark">📏 {locale === 'fr' ? "Distance" : "Distance"}</td><td className="py-4 px-4 text-stone">4,95 km</td></tr>
                  <tr><td className="py-4 px-4 font-semibold text-stone-dark">⏱ {locale === 'fr' ? "Durée moyenne" : "Average duration"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "1h35 de marche + atelier artistique" : "1h35 walk + artistic workshop"}</td></tr>
                  <tr><td className="py-4 px-4 font-semibold text-stone-dark">⛰ {locale === 'fr' ? "Dénivelé positif" : "Elevation gain"}</td><td className="py-4 px-4 text-stone">+63 m</td></tr>
                  <tr><td className="py-4 px-4 font-semibold text-stone-dark">⚙ {locale === 'fr' ? "Difficulté" : "Difficulty"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "Facile – adaptée aux enfants" : "Easy – suitable for children"}</td></tr>
                  <tr><td className="py-4 px-4 font-semibold text-stone-dark">👨‍👩‍👧‍👦 {locale === 'fr' ? "Public" : "Audience"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "Parents et enfants de 5 à 12 ans (7 familles max)" : "Parents and children aged 5 to 12 (7 families max)"}</td></tr>
                  <tr><td className="py-4 px-4 font-semibold text-stone-dark">💰 {locale === 'fr' ? "Tarif" : "Rate"}</td><td className="py-4 px-4 text-stone">{locale === 'fr' ? "9 € / adulte – 13 € / enfant – Pack famille : 40 €" : "€9 / adult – €13 / child – Family pack: €40"}</td></tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-beige">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-playfair font-bold text-stone-dark mb-6">{locale === 'fr' ? "🌼 Ce que vos enfants vont vivre" : "🌼 What Your Children Will Experience"}</h2>
            <ul className="space-y-3 text-lg text-stone font-montserrat">
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "Une balade paisible entre lac, roselières et forêt." : "A peaceful walk between lake, reed beds and forest."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "L'observation attentive des formes et couleurs du monde naturel." : "Careful observation of the shapes and colors of the natural world."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "La création d'un tableau nature sur toile, fait uniquement de feuilles, fleurs et bois." : "Creating a nature painting on canvas, made only from leaves, flowers and wood."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0">•</span><span>{locale === 'fr' ? "Un moment de calme, de partage et de fierté créative." : "A moment of calm, sharing and creative pride."}</span></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-lake to-lake-dark text-white text-center">
        <div className="container-custom max-w-2xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-playfair font-bold mb-6">{locale === 'fr' ? "Prêt pour l'aventure ?" : "Ready for the adventure?"}</h2>
            <Button href={`/${locale}/contact`} variant="gold">{locale === 'fr' ? "Réserver cette sortie" : "Book this outing"}</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


