'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';

export default function EssenceFemininePage({ params }) {
  const { locale } = params;

  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection 
        image="/images/retreat-autumn.jpg"
        height="h-screen"
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6"
          >
            🌸 Retraite "Essence féminine"
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl font-playfair italic max-w-4xl mx-auto mb-6"
          >
            Un voyage intérieur pour accueillir sa vulnérabilité et renouer avec sa joie naturelle
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-montserrat mb-8"
          >
            📅 Du 18 au 21 septembre 2025 – Savoie
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button href={`/${locale}/contact`} variant="gold">
              Je réserve ma place
            </Button>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Section Introduction */}
      <section className="section-padding bg-gradient-to-br from-beige-light to-lake-light">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-6">
              ✨ Une parenthèse pour se retrouver
            </h2>
            <div className="space-y-4 text-lg text-stone font-montserrat leading-relaxed max-w-3xl mx-auto">
              <p>
                Ici, tout commence par l&apos;écoute.
              </p>
              <p>
                Celle du corps, du cœur, du souffle.
              </p>
              <p>
                Une pause entre femmes, pour se redécouvrir en douceur, loin des rôles, des attentes et des jugements.
              </p>
              <p className="font-semibold text-stone-dark">
                Guidée par Anaïs, Isée et Marie, cette retraite est un espace bienveillant pour s&apos;explorer, se déposer, et retrouver le plaisir simple d&apos;être soi.
              </p>
              <p className="text-xl font-playfair italic text-lake-dark">
                Quatre jours pour se reconnecter à son essence, sa douceur et sa force.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Ce que vous vivrez */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-dark mb-12 text-center">
              💚 Ce que vous vivrez
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-lake-light to-lake p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🌺</div>
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-2">
                  Pratiques corporelles douces
                </h3>
                <p className="text-stone font-montserrat">
                  Qi Gong, Pilates, Tai Chi à l&apos;éventail
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-gold-light to-gold/40 p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-2">
                  Soins individuels
                </h3>
                <p className="text-stone font-montserrat">
                  Reiki et Réflexologie plantaire
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-beige to-beige-light p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">✍️</div>
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-2">
                  Ateliers introspectifs
                </h3>
                <p className="text-stone font-montserrat mb-2">
                  "Qui suis-je hors du regard des autres ?"
                </p>
                <p className="text-stone font-montserrat">
                  "Créer sa liste de désirs"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-stone-light to-lake-light p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-2">
                  Cercles de parole et moments de sororité
                </h3>
                <p className="text-stone font-montserrat">
                  Échanges entre femmes dans la bienveillance
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-beige-light to-gold-light p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🌸</div>
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-2">
                  Balades méditatives & instants d&apos;écriture libre
                </h3>
                <p className="text-stone font-montserrat">
                  Nature et expression créative
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-lake to-lake-dark text-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🕯</div>
                <h3 className="text-xl font-playfair font-bold mb-2">
                  Méditations du soir
                </h3>
                <p className="font-montserrat">
                  Autour de la vulnérabilité et de la gratitude
                </p>
              </motion.div>
            </div>

            <p className="text-center text-lg text-stone font-montserrat italic mt-8 max-w-3xl mx-auto">
              Un espace pour respirer, partager, rire et se redécouvrir sans masque.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section L'expérience */}
      <section className="section-padding bg-gradient-to-br from-lake-light to-beige">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-stone-dark">
              🌷 L&apos;expérience en quelques mots
            </h2>
            <div className="space-y-4 text-lg font-montserrat leading-relaxed text-stone-dark">
              <p>
                Pendant ces quatre jours, on laisse tomber les armures.
              </p>
              <p>
                On apprend à se voir autrement — avec bienveillance, tendresse et humour.
              </p>
              <p>
                Les échanges, les rires, les silences : tout devient chemin vers soi.
              </p>
              <p className="text-2xl font-playfair italic text-lake-dark">
                Ici, on se célèbre autant qu&apos;on se libère.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section À savoir */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-stone-dark mb-8 text-center">
              📋 À savoir
            </h2>
            
            <div className="bg-white rounded-lg p-8 shadow-xl overflow-x-auto">
              <table className="w-full font-montserrat">
                <tbody className="divide-y divide-stone-light">
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">Public</td>
                    <td className="py-4 px-4 text-stone font-semibold">Réservé aux femmes</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">Durée</td>
                    <td className="py-4 px-4 text-stone">4 jours / 3 nuits</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">Taille du groupe</td>
                    <td className="py-4 px-4 text-stone">8 à 10 participantes</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">Lieu</td>
                    <td className="py-4 px-4 text-stone">Gîte ou chalet en Savoie (secteur Bauges, Revard ou lac du Bourget)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">Déconnexion</td>
                    <td className="py-4 px-4 text-stone">Sans téléphone de 9h à 20h</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">Et s&apos;il pleut ?</td>
                    <td className="py-4 px-4 text-stone italic">Les activités s&apos;adaptent — la nature reste notre alliée.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-12 text-center">
              💰 Tarifs & Réservation
            </h2>

            <div className="mb-12">
              <div className="bg-gold/20 border-2 border-gold rounded-lg p-8 mb-4">
                <h3 className="text-3xl font-playfair font-bold mb-6 text-gold">
                  🌷 Offre de lancement – jusqu&apos;au 1ᵉʳ mai 2025
                </h3>
                <div className="grid md:grid-cols-3 gap-6 font-montserrat">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-4xl mb-3">🛏</div>
                    <h4 className="text-xl font-semibold mb-2">Chambre partagée</h4>
                    <p className="text-sm text-beige-light mb-3">(4 lits simples)</p>
                    <p className="text-3xl font-bold text-gold">480 €</p>
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

            <div className="mb-12">
              <h3 className="text-3xl font-playfair font-bold mb-6 text-beige-light">
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

            <p className="text-center text-beige-light mb-8">
              Hébergement, repas, soins et accompagnement inclus.<br />
              Réservation obligatoire – 10 participantes maximum.
            </p>

            <div className="text-center">
              <Button href={`/${locale}/contact`} variant="gold">
                Je réserve ma place
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-stone-dark mb-12 text-center">
              ❓ Questions fréquentes
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-3">
                  Dois-je venir seule ?
                </h3>
                <p className="text-stone font-montserrat">
                  Beaucoup viennent seules, et repartent avec de vraies amitiés.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-3">
                  Faut-il être à l&apos;aise pour parler en groupe ?
                </h3>
                <p className="text-stone font-montserrat">
                  Non, rien n&apos;est forcé. Chacune participe à son rythme, dans le respect de son espace.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-3">
                  Y a-t-il un thème particulier ?
                </h3>
                <p className="text-stone font-montserrat">
                  Oui : mieux se connaître, s&apos;honorer et oser rayonner tel qu&apos;on est.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Conclusion */}
      <section className="section-padding bg-gradient-to-br from-lake-light to-gold-light">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-stone-dark">
              🌿
            </h2>
            <p className="text-2xl md:text-3xl font-playfair mb-6 text-stone-dark">
              Une bulle entre femmes, pour se redécouvrir sans filtre.
            </p>
            <p className="text-xl font-montserrat mb-8 text-stone-dark">
              Des respirations, des rires, des mots et des silences qui apaisent.<br />
              Un moment pour vous retrouver, vous aimer et repartir un peu plus libre.
            </p>
            <Button href={`/${locale}/contact`} variant="primary">
              Je réserve ma place maintenant
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

