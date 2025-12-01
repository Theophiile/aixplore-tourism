'use client';

import { motion } from 'framer-motion';

export default function MentionsLegalesPage({ params }) {
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
            {locale === 'fr' ? "Mentions Légales" : "Legal Notice"}
          </motion.h1>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <div className="bg-white p-6 md:p-8 rounded-xl border border-stone/10 shadow-sm">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4">Définitions</h2>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                <strong className="font-medium text-stone-dark">Client :</strong> tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                <strong className="font-medium text-stone-dark">Prestations et Services :</strong> https://aixplore-tourism.com met à disposition des Clients
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                <strong className="font-medium text-stone-dark">Contenu :</strong> Ensemble des éléments constituants l&apos;information présente sur le Site, notamment textes, images, vidéos.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                <strong className="font-medium text-stone-dark">Informations clients :</strong> Données personnelles susceptibles d&apos;être détenues par https://aixplore-tourism.com pour la gestion de votre compte, de la relation client et à des fins d&apos;analyses et de statistiques.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                <strong className="font-medium text-stone-dark">Utilisateur :</strong> Internaute se connectant, utilisant le site susnommé.
              </p>

              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4 mt-8">1. Présentation du site internet</h2>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, il est précisé aux utilisateurs du site internet https://aixplore-tourism.com l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi:
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                <strong className="font-medium text-stone-dark">Propriétaire :</strong> Anaïs HUSSON - 6 Avenue d&apos;Albion 73100 AIX-LES-BAINS<br />
                <strong className="font-medium text-stone-dark">Responsable publication :</strong> Anaïs HUSSON - contact@aixploretourism.fr<br />
                <strong className="font-medium text-stone-dark">Webmaster :</strong> Anaïs HUSSON - contact@aixploretourism.fr<br />
                <strong className="font-medium text-stone-dark">Hébergeur :</strong> O2 Switch - Chemin des Pardiaux 63000 Clermont-Ferrand 04 44 44 60 40<br />
                <strong className="font-medium text-stone-dark">Délégué à la protection des données :</strong> Anaïs HUSSON - contact@aixploretourism.fr
              </p>

              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4 mt-8">2. Conditions générales d&apos;utilisation du site et des services proposés</h2>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Le Site constitue une oeuvre de l&apos;esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables. Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                L&apos;utilisation du site https://aixplore-tourism.com implique l&apos;acceptation pleine et entière des conditions générales d&apos;utilisation ci-après décrites. Ces conditions d&apos;utilisation sont susceptibles d&apos;être modifiées ou complétées à tout moment, les utilisateurs du site https://aixplore-tourism.com sont donc invités à les consulter de manière régulière.
              </p>

              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4 mt-8">3. Description des services fournis</h2>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Le site internet https://aixplore-tourism.com a pour objet de fournir une information concernant l&apos;ensemble des activités de la société. https://aixplore-tourism.com s&apos;efforce de fournir sur le site https://aixplore-tourism.com des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>

              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4 mt-8">4. Limitations contractuelles sur les données techniques</h2>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l&apos;utilisation du site. De plus, l&apos;utilisateur du site s&apos;engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Le site https://aixplore-tourism.com est hébergé chez un prestataire sur le territoire de l&apos;Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
              </p>

              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4 mt-8">5. Propriété intellectuelle et contrefaçons</h2>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                https://aixplore-tourism.com est propriétaire des droits de propriété intellectuelle et détient les droits d&apos;usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : https://aixplore-tourism.com.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>

              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4 mt-8">6. Limitations de responsabilité</h2>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                https://aixplore-tourism.com agit en tant qu&apos;éditeur du site. https://aixplore-tourism.com est responsable de la qualité et de la véracité du Contenu qu&apos;il publie.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                https://aixplore-tourism.com ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l&apos;utilisateur, lors de l&apos;accès au site internet https://aixplore-tourism.com, et résultant soit de l&apos;utilisation d&apos;un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.
              </p>

              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4 mt-8">7. Gestion des données personnelles</h2>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Le Client est informé des réglementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l&apos;Economie Numérique, la Loi Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
              </p>

              <h3 className="text-lg font-playfair font-normal text-lake mb-3 mt-6">7.1 Responsables de la collecte des données personnelles</h3>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de l&apos;Utilisateur et de sa navigation sur le Site, le responsable du traitement des Données Personnelles est : Anaïs HUSSON. https://aixplore-tourism.com est représenté par Anaïs HUSSON, son représentant légal.
              </p>

              <h3 className="text-lg font-playfair font-normal text-lake mb-3 mt-6">7.2 Finalité des données collectées</h3>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                https://aixplore-tourism.com est susceptible de traiter tout ou partie des données :
              </p>
              <ul className="list-disc pl-6 font-montserrat font-light text-sm text-stone/80 mb-3 space-y-1">
                <li>pour permettre la navigation sur le Site et la gestion et la traçabilité des prestations et services commandés par l&apos;utilisateur</li>
                <li>pour prévenir et lutter contre la fraude informatique (spamming, hacking)</li>
                <li>pour améliorer la navigation sur le Site</li>
                <li>pour mener des enquêtes de satisfaction facultatives sur https://aixplore-tourism.com</li>
                <li>pour mener des campagnes de communication (sms, mail)</li>
              </ul>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                https://aixplore-tourism.com ne commercialise pas vos données personnelles qui sont donc uniquement utilisées par nécessité ou à des fins statistiques et d&apos;analyses.
              </p>

              <h3 className="text-lg font-playfair font-normal text-lake mb-3 mt-6">7.3 Droit d&apos;accès, de rectification et d&apos;opposition</h3>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Conformément à la réglementation européenne en vigueur, les Utilisateurs de https://aixplore-tourism.com disposent des droits suivants :
              </p>
              <ul className="list-disc pl-6 font-montserrat font-light text-sm text-stone/80 mb-3 space-y-1">
                <li>droit d&apos;accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude des données des Utilisateurs</li>
                <li>droit de verrouillage ou d&apos;effacement des données des Utilisateurs à caractère personnel (article 17 du RGPD)</li>
                <li>droit de retirer à tout moment un consentement (article 13-2c RGPD)</li>
                <li>droit à la limitation du traitement des données des Utilisateurs (article 18 RGPD)</li>
                <li>droit d&apos;opposition au traitement des données des Utilisateurs (article 21 RGPD)</li>
                <li>droit à la portabilité des données (article 20 RGPD)</li>
                <li>droit de définir le sort des données des Utilisateurs après leur mort</li>
              </ul>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Pour exercer ces droits, l&apos;Utilisateur peut contacter https://aixplore-tourism.com par écrit à l&apos;adresse suivante :
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Anaïs HUSSON - DPO<br />
                6 Avenue d&apos;Albion 73100 AIX-LES-BAINS
              </p>

              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4 mt-8">8. Notification d&apos;incident</h2>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et aucune méthode de stockage électronique n&apos;est complètement sûre. Nous ne pouvons en conséquence pas garantir une sécurité absolue. Si nous prenions connaissance d&apos;une brèche de la sécurité, nous avertirions les utilisateurs concernés afin qu&apos;ils puissent prendre les mesures appropriées.
              </p>

              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4 mt-8">9. Liens hypertextes, cookies et balises internet</h2>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                Le site https://aixplore-tourism.com contient un certain nombre de liens hypertextes vers d&apos;autres sites, mis en place avec l&apos;autorisation de https://aixplore-tourism.com. Cependant, https://aixplore-tourism.com n&apos;a pas la possibilité de vérifier le contenu des sites ainsi visités, et n&apos;assumera en conséquence aucune responsabilité de ce fait.
              </p>

              <h3 className="text-lg font-playfair font-normal text-lake mb-3 mt-6">9.1 Cookies</h3>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-3">
                Un cookie est un petit fichier d&apos;information envoyé sur le navigateur de l&apos;Utilisateur et enregistré au sein du terminal de l&apos;Utilisateur (ex : ordinateur, smartphone). Ce fichier comprend des informations telles que le nom de domaine de l&apos;Utilisateur, le fournisseur d&apos;accès Internet de l&apos;Utilisateur, le système d&apos;exploitation de l&apos;Utilisateur, ainsi que la date et l&apos;heure d&apos;accès.
              </p>
              <p className="font-montserrat font-light text-sm text-stone/80 mb-4">
                https://aixplore-tourism.com est susceptible de traiter les informations de l&apos;Utilisateur concernant sa visite du Site, telles que les pages consultées, les recherches effectuées. Ces informations permettent à https://aixplore-tourism.com d&apos;améliorer le contenu du Site, de la navigation de l&apos;Utilisateur.
              </p>

              <h2 className="text-xl font-playfair font-light text-stone-dark mb-4 mt-8">10. Droit applicable et attribution de juridiction</h2>
              <p className="font-montserrat font-light text-sm text-stone/80">
                Tout litige en relation avec l&apos;utilisation du site https://aixplore-tourism.com est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de CHAMBERY.
              </p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
