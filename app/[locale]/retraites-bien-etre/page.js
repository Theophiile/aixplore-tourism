'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';
import { getTranslation } from '@/lib/translations';

export default function RetraitesBienEtrePage({ params }) {
  const { locale } = params;
  const t = (key) => getTranslation(locale, key);

  const retreats = [
    {
      title: "🌿 Légèreté",
      description: "Jeûne & légèreté : se libérer du trop-plein, retrouver l'énergie naturelle du corps. Une retraite pour apaiser le mental, alléger le corps et réapprendre à goûter la vie à travers un jeûne de deux jours, la marche, les soins et l'écriture introspective.",
      image: "/images/retreat-spring.jpg",
      date: "Du 1er au 4 mai 2025",
      href: `/${locale}/retraites-bien-etre/legerete`
    },
    {
      title: "🌕 Rayonner",
      description: "Laisser la lumière de la lune éclairer ce que l'on porte encore. Une expérience de libération et de purification : écriture intuitive, cérémonie du feu, danse et rituels de pleine lune.",
      image: "/images/retreat-summer.jpg",
      date: "Du 13 au 16 juin 2025",
      href: `/${locale}/retraites-bien-etre/rayonner`
    },
    {
      title: "🌸 Essence féminine",
      description: "Un voyage intérieur pour accueillir sa vulnérabilité et renouer avec sa joie naturelle. Entre introspection, respiration, écriture et douceur, une parenthèse entre femmes pour se redécouvrir.",
      image: "/images/retreat-autumn.jpg",
      date: "Du 18 au 21 septembre 2025",
      href: `/${locale}/retraites-bien-etre/essence-feminine`
    },
    {
      title: "🌑 Renaissance",
      description: "Silence, intentions et renaissance. Sous la nouvelle lune, un moment pour semer, méditer et s'ouvrir à la vie à travers rituels, soins et écriture d'intentions.",
      image: "/images/retreat-october.jpg",
      date: "Du 9 au 12 octobre 2025",
      href: `/${locale}/retraites-bien-etre/renaissance`
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection 
        image="/images/wellness-retreat-hero.jpg"
        height="h-screen"
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6"
          >
            Retraites Bien-être en Montagne
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl font-playfair italic max-w-3xl mx-auto mb-8"
          >
            Reconnectez-vous à l&apos;essentiel, à la nature et à vous-même
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button href="#retraites-2025" variant="gold">
              Découvrir les Retraites 2025
            </Button>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Section Introduction */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-6 flex items-center justify-center gap-3">
              <span>🌿</span> Une parenthèse pour se retrouver
            </h2>
            <div className="space-y-4 text-lg text-stone font-montserrat leading-relaxed max-w-4xl mx-auto">
              <p>
                Quatre retraites, quatre moments privilégiés pour ralentir, respirer et retrouver la simplicité d&apos;un rythme naturel.
              </p>
              <p>
                Chaque séjour est une bulle hors du temps, mêlant pratiques corporelles douces, soins énergétiques, balades méditatives et introspection.
              </p>
              <p className="font-semibold text-stone-dark">
                Encadrées par Anaïs, Isée et Marie, ces retraites sont une invitation à réapprendre à s&apos;écouter, à libérer le mental et à apaiser le corps.
              </p>
              <p className="italic">
                Chaque édition possède son propre thème – jeûne, pleine lune, féminin, renaissance – mais toutes partagent la même intention :
              </p>
              <p className="text-xl font-playfair font-semibold text-lake-dark">
                se libérer, s&apos;alléger et se reconnecter à soi.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Régime Cétogène */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-6 flex items-center gap-3">
              <span>🍲</span> Pourquoi un régime cétogène doux pendant la retraite ?
            </h2>
            <p className="text-xl font-playfair italic text-stone-dark mb-6">
              On ne peut pas apaiser l&apos;esprit sans prendre soin du corps.
            </p>
            <div className="space-y-4 text-lg text-stone font-montserrat leading-relaxed mb-8">
              <p>
                Durant les retraites, nous adoptons une <span className="font-semibold text-stone-dark">alimentation cétogène douce</span>, pensée pour rééquilibrer les énergies et favoriser la clarté mentale.
              </p>
              <p>
                Le principe : réduire fortement les sucres et augmenter les bons gras pour permettre au corps d&apos;entrer dans un état de cétose, où il puise son énergie dans les graisses plutôt que dans le glucose.
              </p>
              <p className="font-semibold text-lake-dark">
                Résultat : un esprit plus clair, une énergie stable, un véritable recentrage.
              </p>
            </div>

            <div className="bg-gradient-to-br from-beige to-gold-light p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-playfair font-bold text-stone-dark mb-6">
                🌿 Ce que vous retrouverez dans vos assiettes :
              </h3>
              <div className="grid md:grid-cols-2 gap-4 font-montserrat text-stone-dark">
                <div className="flex items-start gap-2">
                  <span>•</span>
                  <p>Viandes et poissons de qualité</p>
                </div>
                <div className="flex items-start gap-2">
                  <span>•</span>
                  <p>Œufs, fromages, crème et yaourts gras</p>
                </div>
                <div className="flex items-start gap-2">
                  <span>•</span>
                  <p>Oléagineux (amandes, noix, noisettes...)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span>•</span>
                  <p>Légumes pauvres en glucides (courgettes, brocolis, épinards...)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span>•</span>
                  <p>Fruits à faible teneur en sucre (baies, citron, avocat...)</p>
                </div>
              </div>
              <p className="mt-6 text-stone italic">
                Les féculents, légumineuses, fruits sucrés et produits à base de glucose sont provisoirement écartés : fini le sucre dans le café et les douceurs du soir.
              </p>
              <p className="mt-4 text-stone-dark font-semibold">
                Ce n&apos;est pas une contrainte, mais un retour à l&apos;essentiel : offrir au corps la paix qu&apos;il mérite pour que l&apos;esprit puisse, lui aussi, se régénérer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Déconnexion Téléphone */}
      <section className="section-padding bg-gradient-to-r from-lake to-lake-dark text-white">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 flex items-center gap-3">
              <span>📵</span> Pourquoi couper le téléphone ?
            </h2>
            <p className="text-xl font-playfair italic mb-6">
              Parce qu&apos;il n&apos;y a pas de pleine présence les yeux sur un écran.
            </p>
            <div className="space-y-4 text-lg font-montserrat leading-relaxed">
              <p>
                Chaque retraite inclut une <span className="font-semibold">déconnexion complète de 9h à 20h</span> : pas de téléphone, pas d&apos;écran, pas de notifications.
              </p>
              <p>
                Cette coupure volontaire vous aide à retrouver la présence, la concentration, la qualité d&apos;écoute et la vraie sérénité.
              </p>
              <p>
                Les écrans fragmentent notre attention, alimentent le stress et empêchent la pleine détente.
              </p>
              <p className="font-semibold">
                Ici, vous apprendrez à respirer sans "scroll", à marcher sans photo, à ressentir sans écran.
              </p>
            </div>
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <p className="text-2xl font-playfair italic text-center">
                &quot;Quand on se débranche du monde, on se rebranche à soi.&quot;
              </p>
            </div>
            <p className="mt-6 text-beige-light text-sm text-center">
              (Les téléphones restent accessibles le soir pour prévenir vos proches si besoin.)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Informations Pratiques */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-6 text-center flex items-center justify-center gap-3">
              <span>💫</span> Informations pratiques communes
            </h2>
            
            <div className="bg-white rounded-lg p-8 shadow-xl overflow-x-auto">
              <table className="w-full font-montserrat">
                <tbody className="divide-y divide-stone-light">
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">Public</td>
                    <td className="py-4 px-4 text-stone">Adultes – débutants ou initiés au jeûne</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">Type de jeûne</td>
                    <td className="py-4 px-4 text-stone">Cétogène doux : tisanes, bouillons, huiles MCT, légumes pauvres en glucides, protéines et bons gras</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">Lieu</td>
                    <td className="py-4 px-4 text-stone">Chalet ou gîte en Savoie – secteur Bauges, Revard ou lac du Bourget</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">Taille du groupe</td>
                    <td className="py-4 px-4 text-stone">8 à 10 participants maximum</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">Déconnexion totale</td>
                    <td className="py-4 px-4 text-stone">Pas de téléphone ni d&apos;écran de 9h à 20h</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">Et s&apos;il pleut ?</td>
                    <td className="py-4 px-4 text-stone italic">Rien n&apos;est annulé, tout se transforme. Une marche sous la pluie devient une purification du corps et de l&apos;esprit. L&apos;eau nettoie, le vent libère, la terre ancre.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">Lectures</td>
                    <td className="py-4 px-4 text-stone">Les livres sont les bienvenus pendant les temps calmes.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Retraites 2025 */}
      <section id="retraites-2025" className="section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-4 text-center"
          >
            Les quatre retraites de l&apos;année 2025
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-stone font-montserrat mb-12 max-w-2xl mx-auto"
          >
            Quatre moments uniques pour vous reconnecter à l&apos;essentiel
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {retreats.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                date={item.date}
                href={item.href}
                buttonText="Découvrir la retraite"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Tarifs */}
      <section className="section-padding bg-gradient-to-br from-stone-dark to-lake-dark text-white">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-12 text-center flex items-center justify-center gap-3">
              <span>💰</span> Tarifs des retraites bien-être en montagne
            </h2>

            {/* Offre de lancement */}
            <div className="mb-12">
              <div className="bg-gold/20 border-2 border-gold rounded-lg p-8 mb-4">
                <h3 className="text-3xl font-playfair font-bold mb-6 text-gold flex items-center gap-2">
                  🌷 Offre de lancement – jusqu&apos;au 1ᵉʳ mai 2025
                </h3>
                <div className="grid md:grid-cols-3 gap-6 font-montserrat">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-4xl mb-3">🛏</div>
                    <h4 className="text-xl font-semibold mb-2">Chambre partagée</h4>
                    <p className="text-sm text-beige-light mb-3">(4 lits simples)</p>
                    <p className="text-3xl font-bold text-gold">450 €</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-4xl mb-3">🌸</div>
                    <h4 className="text-xl font-semibold mb-2">Chambre double</h4>
                    <p className="text-sm text-beige-light mb-3">(offre duo)</p>
                    <p className="text-3xl font-bold text-gold">550 €</p>
                    <p className="text-sm text-beige-light">/ personne</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-4xl mb-3">✨</div>
                    <h4 className="text-xl font-semibold mb-2">Chambre double solo</h4>
                    <p className="text-sm text-beige-light mb-3">&nbsp;</p>
                    <p className="text-3xl font-bold text-gold">590 €</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarifs réguliers */}
            <div className="mb-12">
              <h3 className="text-3xl font-playfair font-bold mb-6 text-beige-light flex items-center gap-2">
                🌿 Tarifs réguliers – à partir du 2 mai 2025
              </h3>
              <div className="grid md:grid-cols-3 gap-6 font-montserrat">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="text-4xl mb-3">🛏</div>
                  <h4 className="text-xl font-semibold mb-2">Chambre partagée</h4>
                  <p className="text-sm text-beige-light mb-3">&nbsp;</p>
                  <p className="text-3xl font-bold">515 €</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="text-4xl mb-3">🌸</div>
                  <h4 className="text-xl font-semibold mb-2">Chambre double</h4>
                  <p className="text-sm text-beige-light mb-3">(offre duo)</p>
                  <p className="text-3xl font-bold">670 €</p>
                  <p className="text-sm text-beige-light">/ personne</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="text-4xl mb-3">✨</div>
                  <h4 className="text-xl font-semibold mb-2">Chambre double solo</h4>
                  <p className="text-sm text-beige-light mb-3">&nbsp;</p>
                  <p className="text-3xl font-bold">640 €</p>
                </div>
              </div>
            </div>

            {/* Informations incluses */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h4 className="text-2xl font-playfair font-bold mb-4 text-center">Ce qui est inclus</h4>
              <div className="grid md:grid-cols-2 gap-4 font-montserrat text-beige-light">
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <p>Hébergement 3 nuits</p>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <p>Tous les repas (régime cétogène doux)</p>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <p>Tous les ateliers et pratiques</p>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <p>Les soins énergétiques</p>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <p>L&apos;accompagnement personnalisé</p>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <p>Le matériel (tapis de yoga, couvertures...)</p>
                </div>
              </div>
              <p className="mt-6 text-center text-beige italic">
                Les retraites sont limitées à 8 à 10 participants pour préserver la qualité et la bienveillance du groupe.
              </p>
            </div>

            <div className="text-center mt-12">
              <Button href={`/${locale}/contact`} variant="gold">
                Réserver votre place
              </Button>
              <p className="mt-4 text-beige-light text-sm">
                Places limitées – Réservation conseillée
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

