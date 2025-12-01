'use client';

import { motion } from 'framer-motion';

export default function CGVPage({ params }) {
  const { locale } = params;

  return (
    <div className="min-h-screen bg-beige-light">
      {/* Hero Section */}
      <section className="relative h-screen w-screen lg:-ml-56 flex items-center justify-center bg-[#124e78]">
        <div className="text-center text-white/90 px-4 z-10 relative lg:ml-56">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-playfair font-light mb-4 drop-shadow-lg"
          >
            {locale === 'fr' ? "Conditions Générales de Vente" : "Terms and Conditions"}
          </motion.h1>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <div className="bg-white p-6 md:p-8 rounded-xl border border-stone/10 shadow-sm">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4">1. Identité de l&apos;entreprise</h2>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                <strong className="font-medium text-stone-dark">Aixplore Tourism</strong><br />
                Statut : Micro-entreprise<br />
                SIRET : 94355517700014<br />
                Adresse : 6 Avenue d&apos;Albion 73100 AIX-LES-BAINS<br />
                E-mail : contact@aixplore-tourism.com
              </p>

              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4 mt-8">2. Prestations proposées</h2>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Aixplore Tourism propose des visites guidées culturelles et nature en petit groupe (maximum 8 personnes), autour du lac du Bourget et dans la région d&apos;Aix-les-Bains.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Les visites sont encadrées en français ou en anglais, et incluent le transport en minibus pour certains circuits.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Chaque visite est détaillée sur le site internet, avec les éléments inclus ou non (transport, entrées éventuelles, repas, etc.).
              </p>

              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4 mt-8">3. Réservation et paiement</h2>
              
              <h3 className="text-lg font-playfair font-normal text-lake mb-3 mt-6">Réservation</h3>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Les réservations s&apos;effectuent exclusivement en ligne, via le site internet d&apos;Aixplore Tourism et les plateformes partenaires.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Les jours de visite sont à choisir par le client lors de la réservation, en fonction des disponibilités.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Une confirmation de réservation est envoyée par e-mail dès que le nombre minimum de participants (3 personnes) est atteint.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Aixplore Tourism se réserve le droit d&apos;annuler ou de reporter une visite si ce seuil n&apos;est pas atteint (voir article 6).
              </p>

              <h3 className="text-lg font-playfair font-normal text-lake mb-3 mt-6">Paiement</h3>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Le paiement complet est exigé au moment de la réservation, par carte bancaire uniquement.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Aucun acompte ni paiement sur place n&apos;est accepté.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Le paiement en ligne est sécurisé via une plateforme conforme aux normes en vigueur.
              </p>

              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4 mt-8">4. Conditions de participation</h2>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                <strong className="font-medium text-stone-dark">Âge minimum :</strong> 5 ans
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                <strong className="font-medium text-stone-dark">Niveau physique requis :</strong> marche, montées légères, station debout. Les personnes avec canne ou handicap léger sont les bienvenues si elles peuvent suivre l&apos;ensemble du parcours.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                <strong className="font-medium text-stone-dark">Accessibilité :</strong> certaines visites peuvent ne pas convenir aux personnes à mobilité réduite. Merci de nous contacter en amont pour toute question.
              </p>

              <h3 className="text-lg font-playfair font-normal text-lake mb-3 mt-6">Ponctualité et retard</h3>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Les participants doivent se présenter 15 minutes avant le départ au lieu de rendez-vous indiqué.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Le minibus partira à l&apos;heure prévue. En cas de retard ou d&apos;absence non justifiés, aucun remboursement ne sera effectué.
              </p>

              <h3 className="text-lg font-playfair font-normal text-lake mb-3 mt-6">Comportement attendu</h3>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Pour le bon déroulement de la visite :
              </p>
              <ul className="list-disc pl-6 font-montserrat font-light text-sm text-stone/80 mb-3 space-y-1">
                <li>Respecter les horaires de retour au minibus après les temps libres</li>
                <li>Respecter les autres participants (politesse, courtoisie, pas de vulgarité)</li>
                <li>Aucun mégot ou plastique dans la nature : comportement écologique exigé</li>
              </ul>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Aixplore Tourism se réserve le droit d&apos;exclure toute personne perturbant la visite.
              </p>

              <h3 className="text-lg font-playfair font-normal text-lake mb-3 mt-6">Photos pendant les visites</h3>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Des photos peuvent être prises par le guide à des fins de communication (site, réseaux sociaux). Si vous ne souhaitez pas apparaître sur les images, merci de le signaler avant le début de la visite.
              </p>

              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4 mt-8">5. Responsabilités et assurances</h2>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Aixplore Tourism ne pourra être tenu responsable :
              </p>
              <ul className="list-disc pl-6 font-montserrat font-light text-sm text-stone/80 mb-3 space-y-1">
                <li>des accidents ou incidents survenus hors de son encadrement direct</li>
                <li>des pertes, vols ou dommages aux effets personnels</li>
              </ul>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Il appartient aux participants de porter une tenue adaptée à la météo et à la marche.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Aixplore Tourism dispose d&apos;une assurance Responsabilité Civile Professionnelle (RC Pro) couvrant ses activités de guide-accompagnateur.
              </p>

              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4 mt-8">6. Annulation et modification</h2>
              
              <h3 className="text-lg font-playfair font-normal text-lake mb-3 mt-6">Par Aixplore Tourism</h3>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Aixplore Tourism se réserve le droit d&apos;annuler ou reporter une visite en cas de : conditions météorologiques extrêmes, impossibilité d&apos;accès au site, maladie de la guide, nombre de participants insuffisant, etc.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Le client pourra choisir entre : le report de la visite ou le remboursement intégral.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Aucune indemnité complémentaire ne pourra être exigée.
              </p>

              <h3 className="text-lg font-playfair font-normal text-lake mb-3 mt-6">Par le client</h3>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Toute annulation doit être envoyée par écrit (e-mail ou message).
              </p>
              <ul className="list-disc pl-6 font-montserrat font-light text-sm text-stone/80 mb-3 space-y-1">
                <li>Jusqu&apos;à 7 jours avant : remboursement intégral</li>
                <li>Entre 7 jours et 48 heures avant : remboursement à 50 %</li>
                <li>Moins de 48 heures ou non-présentation : aucun remboursement, sauf cas de force majeure justifié</li>
              </ul>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Les visites sont maintenues même en cas de météo défavorable (pluie légère, ciel couvert, températures basses). Aucun remboursement ne sera effectué pour cause météo si la visite est maintenue.
              </p>

              <h3 className="text-lg font-playfair font-normal text-lake mb-3 mt-6">Assurance annulation</h3>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Aixplore Tourism n&apos;inclut pas d&apos;assurance annulation. Il est recommandé de souscrire une assurance voyage personnelle.
              </p>

              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4 mt-8">7. Propriété intellectuelle</h2>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Tous les contenus du site d&apos;Aixplore Tourism sont la propriété exclusive de l&apos;entreprise :
              </p>
              <ul className="list-disc pl-6 font-montserrat font-light text-sm text-stone/80 mb-3 space-y-1">
                <li>textes, idées de circuits, anecdotes</li>
                <li>photos professionnelles réalisées pour le site</li>
                <li>logo, nom Aixplore, visuels Instagram</li>
              </ul>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Toute reproduction ou usage sans autorisation écrite est strictement interdit et peut faire l&apos;objet de poursuites judiciaires.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Le contenu publié sur le compte Instagram @aixplore_tourism est également protégé. Aucune réutilisation à des fins personnelles ou commerciales n&apos;est autorisée sans accord explicite.
              </p>

              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4 mt-8">8. Protection des données personnelles</h2>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Aixplore Tourism collecte uniquement les données nécessaires à la gestion des réservations (nom, e-mail, téléphone, etc.). Ces données ne sont jamais transmises ou revendues.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Conformément au RGPD, chaque client dispose d&apos;un droit :
              </p>
              <ul className="list-disc pl-6 font-montserrat font-light text-sm text-stone/80 mb-3 space-y-1">
                <li>d&apos;accès</li>
                <li>de rectification</li>
                <li>de suppression</li>
              </ul>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Ces droits peuvent être exercés à tout moment par e-mail à : contact@aixplore-tourism.com
              </p>

              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4 mt-8">9. Litiges et droit applicable</h2>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Les présentes CGV sont soumises au droit français.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                En cas de litige, une tentative de résolution amiable sera privilégiée. Le client peut recourir gratuitement à un médiateur de la consommation.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80">
                À défaut, les tribunaux compétents du siège de l&apos;entreprise seront saisis.
              </p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
