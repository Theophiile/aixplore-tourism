'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';

export default function LegeretePage({ params }) {
  const { locale } = params;

  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection 
        image="/images/retreat-spring.jpg"
        height="h-screen"
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6"
          >
            🌿 Retraite "Légèreté"
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl font-playfair italic max-w-4xl mx-auto mb-6"
          >
            Jeûne & légèreté : se libérer du trop-plein, retrouver l&apos;énergie naturelle du corps
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-montserrat mb-8"
          >
            📅 Du 1ᵉʳ au 4 mai 2025 – Savoie
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
      <section className="section-padding bg-beige-light">
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
                Ici, on dépose le quotidien pour revenir à l&apos;essentiel.
              </p>
              <p>
                On prend le temps de respirer, de marcher, de goûter le silence et de laisser le corps se régénérer.
              </p>
              <p>
                Une pause consciente, loin du tumulte, pour retrouver le plaisir d&apos;exister simplement.
              </p>
              <p className="font-semibold text-stone-dark">
                Encadrée par Anaïs, Isée et Marie, cette expérience allie mouvement, nature et introspection dans une ambiance bienveillante et chaleureuse.
              </p>
              <p className="text-xl font-playfair italic text-lake-dark">
                Quatre jours pour vous purifier, respirer, et repartir aligné·e et apaisé·e.
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
                className="bg-gradient-to-br from-beige to-beige-light p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🌄</div>
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-2">
                  Balades méditatives au cœur de la Savoie
                </h3>
                <p className="text-stone font-montserrat">
                  Marches conscientes dans les paysages alpins pour se reconnecter à la nature
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-lake-light to-lake p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🧘</div>
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-2">
                  Pratiques douces : Qi Gong, Tai Chi à l&apos;éventail et Pilates
                </h3>
                <p className="text-stone font-montserrat">
                  Mouvements doux pour réveiller le corps en douceur
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-gold-light to-gold/30 p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-2">
                  Soins individuels : Réflexologie plantaire & Reiki
                </h3>
                <p className="text-stone font-montserrat">
                  Soins énergétiques personnalisés pour libérer les tensions
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-beige to-lake-light p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">✍️</div>
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-2">
                  Écriture introspective : les "3 Lettres du Je(u)ne"
                </h3>
                <p className="text-stone font-montserrat">
                  Moments d&apos;écriture pour explorer ses ressentis
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-stone-light to-beige-light p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-2">
                  Cercles de partage & moments de silence
                </h3>
                <p className="text-stone font-montserrat">
                  Échanges bienveillants et temps calmes pour soi
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-lake to-lake-dark text-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🍵</div>
                <h3 className="text-xl font-playfair font-bold mb-2">
                  Alimentation légère et consciente
                </h3>
                <p className="font-montserrat">
                  Pour retrouver clarté et énergie
                </p>
              </motion.div>
            </div>

            <p className="text-center text-lg text-stone font-montserrat italic mt-8 max-w-3xl mx-auto">
              Un programme pensé pour vous reconnecter à vos sensations, à votre souffle et à votre joie intérieure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section L'expérience */}
      <section className="section-padding bg-gradient-to-r from-lake to-lake-dark text-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
              🌸 L&apos;expérience en quelques mots
            </h2>
            <div className="space-y-4 text-lg font-montserrat leading-relaxed">
              <p>
                Pendant cette retraite, vous vivrez un jeûne doux et accompagné, adapté à chacun, combiné à des moments d&apos;écoute du corps et de la nature.
              </p>
              <p>
                Les téléphones restent au repos une partie de la journée, pour offrir au mental le silence dont il a besoin.
              </p>
              <p className="font-semibold text-gold-light text-xl">
                Ici, on respire vraiment, on rit, on marche, on écrit.
              </p>
              <p className="text-2xl font-playfair italic">
                Le monde s&apos;arrête, le cœur reprend sa place.
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
                    <td className="py-4 px-4 text-stone">Adultes – débutants ou initiés au jeûne</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">Durée</td>
                    <td className="py-4 px-4 text-stone">4 jours / 3 nuits</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-stone-dark">Taille du groupe</td>
                    <td className="py-4 px-4 text-stone">8 à 10 participants</td>
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
                    <td className="py-4 px-4 text-stone italic">Rien n&apos;est annulé : la pluie purifie, le vent libère, la terre ancre.</td>
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

            {/* Offre de lancement */}
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
              Réservation obligatoire – places limitées à 10 participants.
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
                  Et si je n&apos;ai jamais jeûné ?
                </h3>
                <p className="text-stone font-montserrat">
                  Aucun prérequis, tout est guidé et progressif. L&apos;écoute de soi prime sur la performance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-3">
                  Dois-je venir seul(e) ?
                </h3>
                <p className="text-stone font-montserrat">
                  Beaucoup de participants viennent seuls. Vous serez accueilli·e avec bienveillance dans un petit groupe soudé.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-3">
                  Et s&apos;il pleut ?
                </h3>
                <p className="text-stone font-montserrat">
                  Tout continue — la pluie purifie, le vent libère, la terre ancre.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Conclusion */}
      <section className="section-padding bg-gradient-to-r from-lake-dark to-stone-dark text-white">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              🌿
            </h2>
            <p className="text-2xl md:text-3xl font-playfair mb-8">
              Trois jours pour alléger le corps, éclaircir l&apos;esprit et retrouver la joie simple d&apos;être vivant.
            </p>
            <p className="text-xl font-montserrat mb-8">
              Une bulle hors du temps, entre lac et montagne, pour renaître à soi.
            </p>
            <Button href={`/${locale}/contact`} variant="gold">
              Je réserve ma place maintenant
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

