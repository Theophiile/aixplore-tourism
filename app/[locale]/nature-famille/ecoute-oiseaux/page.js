'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';

export default function EcouteOiseaux({ params }) {
  const { locale } = params;

  return (
    <div>
      <section className="relative h-96 w-full flex items-center justify-center bg-[#124e78]">
        <Image
          src="/images/cascade_de_pissieu.webp"
          alt="Cascade de Pissieu"
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
              ? "Cascade de Pissieu – À l'écoute des chants d'oiseaux"
              : "Pissieu Waterfall – Listening to Bird Songs"
            }
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-montserrat font-light drop-shadow-md"
          >
            {locale === 'fr' ? "28 juin 2026" : "June 28, 2026"}
          </motion.p>
        </div>
      </section>

      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "Présentation de la sortie" : "Outing Presentation"}
            </h2>
            <div className="space-y-4 text-base text-stone/80 font-montserrat font-light leading-relaxed">
              <p>{locale === 'fr' ? "Direction le cœur du massif des Bauges, jusqu'à la superbe cascade de Pissieu, pour une sortie à la fois douce, vivante et musicale." : "Head to the heart of the Bauges mountains, to the superb Pissieu waterfall, for an outing that is both gentle, lively and musical."}</p>
              <p>{locale === 'fr' ? "Guidée par Anaïs, cette balade permettra aux familles d'apprendre à reconnaître les chants d'oiseaux qui peuplent les forêts savoyardes." : "Guided by Anaïs, this walk will allow families to learn to recognize the bird songs that populate the Savoyard forests."}</p>
              <p>{locale === 'fr' ? "Les enfants découvriront les sons du merle, du rouge-gorge ou du pinson, et apprendront à écouter attentivement, à observer le comportement des oiseaux et à imiter leurs chants à l'aide de petites flûtes d'oiseaux." : "Children will discover the sounds of the blackbird, robin or finch, and learn to listen carefully, observe bird behavior and imitate their songs using small bird whistles."}</p>
              <p className="font-normal text-stone-dark">{locale === 'fr' ? "Un moment à la fois pédagogique, sensoriel et magique, pour s'ouvrir aux voix de la nature." : "An educational, sensory and magical moment, to open up to the voices of nature."}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "Thématique : Les oiseaux et leurs chants" : "Theme: Birds and Their Songs"}
            </h2>
            <ul className="space-y-3 text-base text-stone/80 font-montserrat font-light">
              <li className="flex items-start gap-3"><span className="flex-shrink-0 text-lake">•</span><span>{locale === 'fr' ? "Apprendre à reconnaître les chants d'oiseaux les plus courants." : "Learn to recognize the most common bird songs."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0 text-lake">•</span><span>{locale === 'fr' ? "Utiliser les flûtes d'imitation pour reproduire leurs sons." : "Use imitation whistles to reproduce their sounds."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0 text-lake">•</span><span>{locale === 'fr' ? "Comprendre pourquoi et comment les oiseaux chantent." : "Understand why and how birds sing."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0 text-lake">•</span><span>{locale === 'fr' ? "Développer l'attention, l'écoute active et la curiosité naturaliste." : "Develop attention, active listening and naturalist curiosity."}</span></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "Activité principale" : "Main Activity"}
            </h2>
            <h3 className="text-xl font-playfair font-normal text-lake mb-4">
              {locale === 'fr' ? "Atelier d'écoute des oiseaux" : "Bird Listening Workshop"}
            </h3>
            <div className="space-y-4 text-base text-stone/80 font-montserrat font-light leading-relaxed">
              <p>{locale === 'fr' ? "Tout au long du parcours menant à la cascade, les enfants seront invités à s'arrêter, écouter et deviner quel oiseau chante." : "Throughout the path leading to the waterfall, children will be invited to stop, listen and guess which bird is singing."}</p>
              <p>{locale === 'fr' ? "À l'aide de flûtes imitant les chants d'oiseaux, Anaïs fera découvrir les sonorités du rouge-gorge, de la mésange ou du merle, dans une atmosphère calme et bienveillante." : "Using whistles imitating bird songs, Anaïs will introduce the sounds of the robin, tit or blackbird, in a calm and caring atmosphere."}</p>
              <p className="italic text-stone/70">{locale === 'fr' ? "Objectif : éveiller l'oreille, aiguiser l'attention et découvrir le langage discret des oiseaux de montagne." : "Objective: awaken the ear, sharpen attention and discover the discreet language of mountain birds."}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-5xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-8 text-center">
              {locale === 'fr' ? "En résumé" : "Summary"}
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-stone/10 overflow-x-auto">
              <table className="w-full font-montserrat font-light text-sm">
                <tbody className="divide-y divide-stone/10">
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Date" : "Date"}</td><td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "Dimanche 28 juin 2026" : "Sunday, June 28, 2026"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Horaires" : "Schedule"}</td><td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "Rendez-vous à 09h00 – retour vers 13h00" : "Meeting at 9:00 AM – return around 1:00 PM"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Lieu" : "Location"}</td><td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "Cascade de Pissieu – Le Châtelard (Massif des Bauges)" : "Pissieu Waterfall – Le Châtelard (Bauges Mountains)"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Distance" : "Distance"}</td><td className="py-4 px-4 text-stone/80">3,5 km</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Durée de marche" : "Walking time"}</td><td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "Environ 2h (balade + atelier + pauses)" : "About 2h (walk + workshop + breaks)"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Dénivelé positif" : "Elevation gain"}</td><td className="py-4 px-4 text-stone/80">+50 m</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Difficulté" : "Difficulty"}</td><td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "Facile – adaptée aux enfants" : "Easy – suitable for children"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Public" : "Audience"}</td><td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "Parents et enfants de 5 à 12 ans (7 familles max)" : "Parents and children aged 5 to 12 (7 families max)"}</td></tr>
                  <tr><td className="py-4 px-4 font-normal text-stone-dark">{locale === 'fr' ? "Tarif" : "Rate"}</td><td className="py-4 px-4 text-stone/80">{locale === 'fr' ? "9 € / adulte – 13 € / enfant – Pack famille : 40 €" : "€9 / adult – €13 / child – Family pack: €40"}</td></tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "Ce que vos enfants vont vivre" : "What Your Children Will Experience"}
            </h2>
            <ul className="space-y-3 text-base text-stone/80 font-montserrat font-light">
              <li className="flex items-start gap-3"><span className="flex-shrink-0 text-lake">•</span><span>{locale === 'fr' ? "Une balade paisible jusqu'à une cascade spectaculaire." : "A peaceful walk to a spectacular waterfall."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0 text-lake">•</span><span>{locale === 'fr' ? "L'apprentissage ludique et sensoriel des chants d'oiseaux de montagne." : "Playful and sensory learning of mountain bird songs."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0 text-lake">•</span><span>{locale === 'fr' ? "Un moment d'écoute, de calme et d'émerveillement partagé." : "A moment of listening, calm and shared wonder."}</span></li>
              <li className="flex items-start gap-3"><span className="flex-shrink-0 text-lake">•</span><span>{locale === 'fr' ? "La joie de découvrir que la forêt… chante vraiment !" : "The joy of discovering that the forest… really sings!"}</span></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-beige-light text-center">
        <div className="container-custom max-w-2xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
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
