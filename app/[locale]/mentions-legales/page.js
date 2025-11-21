'use client';

import { motion } from 'framer-motion';

export default function MentionsLegalesPage({ params }) {
  const { locale } = params;

  return (
    <div className="min-h-screen bg-beige-light">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-lake to-lake-dark text-white">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-playfair font-light mb-4"
          >
            {locale === 'fr' ? "Mentions Légales" : "Legal Notice"}
          </motion.h1>
        </div>
      </section>

      {/* Contenu */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6">Définitions</h2>
              <p className="font-montserrat font-light text-stone mb-4">
                <strong className="font-normal">Client :</strong> tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.
              </p>
              <p className="font-montserrat font-light text-stone mb-4">
                <strong className="font-normal">Prestations et Services :</strong> https://aixplore-tourism.com met à disposition des Clients
              </p>
              <p className="font-montserrat font-light text-stone mb-4">
                <strong className="font-normal">Contenu :</strong> Ensemble des éléments constituants l'information présente sur le Site, notamment textes – images – vidéos.
              </p>
              <p className="font-montserrat font-light text-stone mb-4">
                <strong className="font-normal">Informations clients :</strong> Ci après dénommé « Information (s) » qui correspondent à l'ensemble des données personnelles susceptibles d'être détenues par https://aixplore-tourism.com pour la gestion de votre compte, de la gestion de la relation client et à des fins d'analyses et de statistiques.
              </p>
              <p className="font-montserrat font-light text-stone mb-4">
                <strong className="font-normal">Utilisateur :</strong> Internaute se connectant, utilisant le site susnommé.
              </p>

              <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6 mt-12">1. Présentation du site internet</h2>
              <p className="font-montserrat font-light text-stone mb-4">
                En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet https://aixplore-tourism.com l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:
              </p>
              <p className="font-montserrat font-light text-stone mb-4">
                <strong className="font-normal">Propriétaire :</strong> Anaïs HUSSON – 6 Avenue d'Albion 73100 AIX-LES-BAINS<br />
                <strong className="font-normal">Responsable publication :</strong> Anaïs HUSSON – contact@aixploretourism.fr<br />
                <strong className="font-normal">Webmaster :</strong> Anaïs HUSSON – contact@aixploretourism.fr<br />
                <strong className="font-normal">Hébergeur :</strong> O2 Switch – Chemin des Pardiaux 63000 Clermont-Ferrand 04 44 44 60 40<br />
                <strong className="font-normal">Délégué à la protection des données :</strong> Anaïs HUSSON – contact@aixploretourism.fr
              </p>

              <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6 mt-12">2. Conditions générales d'utilisation du site et des services proposés</h2>
              <p className="font-montserrat font-light text-stone mb-4">
                Le Site constitue une œuvre de l'esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables. Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.
              </p>
              <p className="font-montserrat font-light text-stone mb-4">
                L'utilisation du site https://aixplore-tourism.com implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, les utilisateurs du site https://aixplore-tourism.com sont donc invités à les consulter de manière régulière.
              </p>

              <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6 mt-12">3. Description des services fournis</h2>
              <p className="font-montserrat font-light text-stone mb-4">
                Le site internet https://aixplore-tourism.com a pour objet de fournir une information concernant l'ensemble des activités de la société. https://aixplore-tourism.com s'efforce de fournir sur le site https://aixplore-tourism.com des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>

              <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6 mt-12">4. Limitations contractuelles sur les données techniques</h2>
              <p className="font-montserrat font-light text-stone mb-4">
                Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l'utilisation du site. De plus, l'utilisateur du site s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.
              </p>
              <p className="font-montserrat font-light text-stone mb-4">
                Le site https://aixplore-tourism.com est hébergé chez un prestataire sur le territoire de l'Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
              </p>

              <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6 mt-12">5. Propriété intellectuelle et contrefaçons</h2>
              <p className="font-montserrat font-light text-stone mb-4">
                https://aixplore-tourism.com est propriétaire des droits de propriété intellectuelle et détient les droits d'usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : https://aixplore-tourism.com.
              </p>
              <p className="font-montserrat font-light text-stone mb-4">
                Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>

              <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6 mt-12">6. Limitations de responsabilité</h2>
              <p className="font-montserrat font-light text-stone mb-4">
                https://aixplore-tourism.com agit en tant qu'éditeur du site. https://aixplore-tourism.com est responsable de la qualité et de la véracité du Contenu qu'il publie.
              </p>
              <p className="font-montserrat font-light text-stone mb-4">
                https://aixplore-tourism.com ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site internet https://aixplore-tourism.com, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l'apparition d'un bug ou d'une incompatibilité.
              </p>

              <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6 mt-12">7. Gestion des données personnelles</h2>
              <p className="font-montserrat font-light text-stone mb-4">
                Le Client est informé des réglementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l'Economie Numérique, la Loi Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
              </p>

              <h3 className="text-2xl font-playfair font-normal text-stone-dark mb-4 mt-8">7.1 Responsables de la collecte des données personnelles</h3>
              <p className="font-montserrat font-light text-stone mb-4">
                Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de l'Utilisateur et de sa navigation sur le Site, le responsable du traitement des Données Personnelles est : Anaïs HUSSON. https://aixplore-tourism.com est représenté par Anaïs HUSSON, son représentant légal.
              </p>

              <h3 className="text-2xl font-playfair font-normal text-stone-dark mb-4 mt-8">7.2 Finalité des données collectées</h3>
              <p className="font-montserrat font-light text-stone mb-4">
                https://aixplore-tourism.com est susceptible de traiter tout ou partie des données :
              </p>
              <ul className="list-disc pl-6 font-montserrat font-light text-stone mb-4">
                <li>pour permettre la navigation sur le Site et la gestion et la traçabilité des prestations et services commandés par l'utilisateur</li>
                <li>pour prévenir et lutter contre la fraude informatique (spamming, hacking…)</li>
                <li>pour améliorer la navigation sur le Site</li>
                <li>pour mener des enquêtes de satisfaction facultatives sur https://aixplore-tourism.com</li>
                <li>pour mener des campagnes de communication (sms, mail)</li>
              </ul>
              <p className="font-montserrat font-light text-stone mb-4">
                https://aixplore-tourism.com ne commercialise pas vos données personnelles qui sont donc uniquement utilisées par nécessité ou à des fins statistiques et d'analyses.
              </p>

              <h3 className="text-2xl font-playfair font-normal text-stone-dark mb-4 mt-8">7.3 Droit d'accès, de rectification et d'opposition</h3>
              <p className="font-montserrat font-light text-stone mb-4">
                Conformément à la réglementation européenne en vigueur, les Utilisateurs de https://aixplore-tourism.com disposent des droits suivants :
              </p>
              <ul className="list-disc pl-6 font-montserrat font-light text-stone mb-4">
                <li>droit d'accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude des données des Utilisateurs</li>
                <li>droit de verrouillage ou d'effacement des données des Utilisateurs à caractère personnel (article 17 du RGPD)</li>
                <li>droit de retirer à tout moment un consentement (article 13-2c RGPD)</li>
                <li>droit à la limitation du traitement des données des Utilisateurs (article 18 RGPD)</li>
                <li>droit d'opposition au traitement des données des Utilisateurs (article 21 RGPD)</li>
                <li>droit à la portabilité des données (article 20 RGPD)</li>
                <li>droit de définir le sort des données des Utilisateurs après leur mort</li>
              </ul>
              <p className="font-montserrat font-light text-stone mb-4">
                Pour exercer ces droits, l'Utilisateur peut contacter https://aixplore-tourism.com par écrit à l'adresse suivante :
              </p>
              <p className="font-montserrat font-light text-stone mb-4">
                Anaïs HUSSON – DPO<br />
                6 Avenue d'Albion 73100 AIX-LES-BAINS
              </p>

              <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6 mt-12">8. Notification d'incident</h2>
              <p className="font-montserrat font-light text-stone mb-4">
                Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et aucune méthode de stockage électronique n'est complètement sûre. Nous ne pouvons en conséquence pas garantir une sécurité absolue. Si nous prenions connaissance d'une brèche de la sécurité, nous avertirions les utilisateurs concernés afin qu'ils puissent prendre les mesures appropriées.
              </p>

              <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6 mt-12">9. Liens hypertextes « cookies » et balises ("tags") internet</h2>
              <p className="font-montserrat font-light text-stone mb-4">
                Le site https://aixplore-tourism.com contient un certain nombre de liens hypertextes vers d'autres sites, mis en place avec l'autorisation de https://aixplore-tourism.com. Cependant, https://aixplore-tourism.com n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.
              </p>

              <h3 className="text-2xl font-playfair font-normal text-stone-dark mb-4 mt-8">9.1 « COOKIES »</h3>
              <p className="font-montserrat font-light text-stone mb-4">
                Un « cookie » est un petit fichier d'information envoyé sur le navigateur de l'Utilisateur et enregistré au sein du terminal de l'Utilisateur (ex : ordinateur, smartphone). Ce fichier comprend des informations telles que le nom de domaine de l'Utilisateur, le fournisseur d'accès Internet de l'Utilisateur, le système d'exploitation de l'Utilisateur, ainsi que la date et l'heure d'accès.
              </p>
              <p className="font-montserrat font-light text-stone mb-4">
                https://aixplore-tourism.com est susceptible de traiter les informations de l'Utilisateur concernant sa visite du Site, telles que les pages consultées, les recherches effectuées. Ces informations permettent à https://aixplore-tourism.com d'améliorer le contenu du Site, de la navigation de l'Utilisateur.
              </p>

              <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6 mt-12">10. Droit applicable et attribution de juridiction</h2>
              <p className="font-montserrat font-light text-stone mb-4">
                Tout litige en relation avec l'utilisation du site https://aixplore-tourism.com est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de CHAMBERY.
              </p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

