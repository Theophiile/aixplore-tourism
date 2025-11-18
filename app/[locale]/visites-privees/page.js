'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';

export default function VisitesPriveesPage({ params }) {
  const { locale } = params;

  const privateVisits = [
    {
      emoji: "🌅",
      title: "Coucher de soleil au Mont Revard",
      subtitle: "Apéritif savoyard inclus",
      description: "Une expérience inoubliable au-dessus du lac du Bourget. Dégustez un apéritif local (vin d'Apremont, tomme de Savoie, saucisson, pain de campagne) en admirant la lumière dorée sur les sommets."
    },
    {
      emoji: "❄️",
      title: "Balade ou randonnée en raquettes",
      subtitle: "Les Bauges ou le Revard",
      description: "En hiver, découvrez la montagne autrement : un décor silencieux, une nature intacte et la douceur d'une aventure enneigée, adaptée à votre niveau."
    },
    {
      emoji: "🌊",
      title: "Annecy et Talloires",
      subtitle: "Élégance et nature",
      description: "Partez à la découverte de la \"Venise des Alpes\", puis flânez à Talloires entre lac et abbaye. Possibilité de prolonger la visite jusqu'au col de la Forclaz, pour une vue grandiose sur le lac et les parapentes."
    },
    {
      emoji: "🍽️",
      title: "Dîner ou apéritif au sommet",
      subtitle: "Expérience exclusive",
      description: "Une expérience exclusive pour célébrer un moment spécial : dîner privé, apéritif de montagne ou pique-nique chic, dans un cadre naturel et confidentiel. Ambiance sur mesure, décor et saveurs locales inclus."
    },
    {
      emoji: "⛵",
      title: "Chanaz et le canal de Savières",
      subtitle: "Le petit Venise savoyard",
      description: "Découvrez le charme du \"petit Venise savoyard\" : ses ruelles, son moulin et sa ruche flottante. Possibilité d'ajouter une croisière privée sur le lac du Bourget pour compléter l'expérience."
    },
    {
      emoji: "🏞️",
      title: "Col de la Chambotte",
      subtitle: "Panorama sur le lac du Bourget",
      description: "Un belvédère incontournable offrant une vue spectaculaire. Idéal pour une halte contemplative, une séance photo ou un moment calme face à la nature."
    },
    {
      emoji: "🍷",
      title: "Dégustations & produits locaux savoyards",
      subtitle: "Explorer la Savoie par les sens",
      description: "Vins d'Apremont ou de Mondeuse, fromages fermiers, miel ou charcuteries locales. Des moments simples et vrais, partagés dans un cadre authentique."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection 
        image="/images/private-tour-hero.jpg"
        height="h-screen"
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6"
          >
            🌿 Visite privée
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl font-playfair italic max-w-4xl mx-auto mb-4"
          >
            L&apos;expérience sur mesure signée Aixplore Tourism
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl font-montserrat max-w-3xl mx-auto"
          >
            Et si vous viviez la Savoie à votre rythme ?
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Section Introduction */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="space-y-4 text-lg text-stone font-montserrat leading-relaxed mb-8">
              <p>
                Une balade privée au bord du lac du Bourget, un dîner au sommet des montagnes, ou un coucher de soleil au Revard…
              </p>
              <p className="font-semibold text-stone-dark">
                Avec Aixplore Tourism, chaque visite devient une expérience unique, façonnée autour de vous.
              </p>
              <p className="italic text-lake-dark">
                Un moment privilégié, entre nature, culture et émotions partagées.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Une visite rien que pour vous */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-6 text-center">
              ✨ Une visite rien que pour vous
            </h2>
            <p className="text-lg text-stone font-montserrat leading-relaxed max-w-4xl mx-auto mb-8 text-center">
              Les visites privées s&apos;adressent aux couples, familles, groupes d&apos;amis ou entreprises qui souhaitent découvrir la région dans la sérénité et la liberté.
            </p>
            
            <div className="bg-gradient-to-br from-lake-light to-beige-light rounded-lg p-8 shadow-xl mb-8">
              <h3 className="text-2xl font-playfair font-bold text-stone-dark mb-4">
                Chaque parcours est imaginé selon vos envies :
              </h3>
              <div className="grid md:grid-cols-3 gap-6 font-montserrat">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">📍</span>
                  <div>
                    <h4 className="font-semibold text-stone-dark mb-1">Choix du lieu</h4>
                    <p className="text-stone">Lac, montagne, village ou nature sauvage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">⏰</span>
                  <div>
                    <h4 className="font-semibold text-stone-dark mb-1">Durée modulable</h4>
                    <p className="text-stone">De 2h à la journée complète</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🎨</span>
                  <div>
                    <h4 className="font-semibold text-stone-dark mb-1">Contenu personnalisé</h4>
                    <p className="text-stone">Patrimoine, gastronomie, randonnée, photographie, détente...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
              <p className="text-xl font-playfair italic text-stone-dark">
                &quot;Chaque groupe a son rythme, chaque instant sa lumière. Mon rôle, c&apos;est de créer un moment qui vous ressemble.&quot;
              </p>
              <p className="text-right mt-4 font-montserrat text-stone">
                — Anaïs Husson, guide et fondatrice d&apos;Aixplore Tourism
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Inspirations */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-12 text-center">
              🗺️ Quelques inspirations de visites privées
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {privateVisits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-5xl mb-4">{item.emoji}</div>
                  <h3 className="text-2xl font-playfair font-bold text-stone-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-lake-dark mb-3 italic">
                    {item.subtitle}
                  </p>
                  <p className="text-stone font-montserrat leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Langues et accompagnement */}
      <section className="section-padding bg-gradient-to-r from-lake to-lake-dark text-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">
              💬 Langues et accompagnement
            </h2>
            <div className="space-y-4 text-lg font-montserrat leading-relaxed">
              <p>
                Toutes les visites sont proposées en <span className="font-semibold">français ou en anglais</span>, dans un esprit convivial et raffiné.
              </p>
              <p>
                Anaïs partage avec passion l&apos;histoire, les légendes et la vie locale, en adaptant chaque expérience à vos attentes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Offrir une expérience */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-6 text-center">
              🎁 Offrez une expérience à part
            </h2>
            <p className="text-lg text-stone font-montserrat leading-relaxed max-w-3xl mx-auto mb-8 text-center">
              Une visite privée Aixplore, c&apos;est aussi une idée cadeau élégante et originale :
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-beige to-gold-light p-6 rounded-lg shadow-lg flex items-start gap-3">
                <span className="text-3xl">🎂</span>
                <div className="font-montserrat">
                  <h4 className="font-semibold text-stone-dark">Anniversaire ou escapade romantique</h4>
                </div>
              </div>
              <div className="bg-gradient-to-br from-lake-light to-lake p-6 rounded-lg shadow-lg flex items-start gap-3">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
                <div className="font-montserrat">
                  <h4 className="font-semibold text-stone-dark">Séjour en famille ou entre amis</h4>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gold-light to-beige p-6 rounded-lg shadow-lg flex items-start gap-3">
                <span className="text-3xl">💍</span>
                <div className="font-montserrat">
                  <h4 className="font-semibold text-stone-dark">Dîner-surprise ou demande en mariage</h4>
                </div>
              </div>
              <div className="bg-gradient-to-br from-stone-light to-beige-light p-6 rounded-lg shadow-lg flex items-start gap-3">
                <span className="text-3xl">🏢</span>
                <div className="font-montserrat">
                  <h4 className="font-semibold text-stone-dark">Cadeau d&apos;entreprise ou d&apos;équipe</h4>
                </div>
              </div>
            </div>

            <p className="text-center text-stone font-montserrat italic">
              Sur demande, une carte-cadeau personnalisée vous sera créée, valable sur l&apos;ensemble des expériences Aixplore Tourism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Réservation */}
      <section className="section-padding bg-gradient-to-br from-stone-dark to-lake-dark text-white">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              📍 Réserver votre visite privée
            </h2>
            <div className="space-y-4 text-lg font-montserrat leading-relaxed mb-8">
              <p>
                Départs possibles depuis Aix-les-Bains, Annecy ou votre lieu d&apos;hébergement, selon accessibilité.
              </p>
              <p>
                Les tarifs varient selon la durée, la saison et le type d&apos;expérience.
              </p>
              <p className="font-semibold text-gold-light">
                Demandez votre devis sur mesure
              </p>
            </div>
            <Button href={`/${locale}/contact`} variant="gold">
              Demander un devis personnalisé
            </Button>
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg max-w-2xl mx-auto">
              <p className="text-2xl font-playfair italic">
                &quot;Vivre la Savoie autrement, c&apos;est choisir la liberté d&apos;un moment rien qu&apos;à soi.&quot;
              </p>
              <p className="text-right mt-2 text-beige-light">
                — Aixplore Tourism
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

