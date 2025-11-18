'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';

export default function RenaissancePage({ params }) {
  const { locale } = params;

  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection 
        image="/images/retreat-october.jpg"
        height="h-screen"
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6"
          >
            🌑 Retraite "Renaissance"
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl font-playfair italic max-w-4xl mx-auto mb-6"
          >
            Sous la nouvelle lune, un temps pour semer, méditer et renaître à soi
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-montserrat mb-8"
          >
            📅 Du 9 au 12 octobre 2025 – Savoie
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
      <section className="section-padding bg-gradient-to-br from-stone-light to-beige-light">
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
                Quand la lune disparaît, tout devient plus calme, plus intérieur.
              </p>
              <p>
                C&apos;est le moment parfait pour se recentrer, faire le vide, écouter ce qui pousse à l&apos;intérieur.
              </p>
              <p className="font-semibold text-stone-dark">
                Aux côtés d&apos;Anaïs, Isée et Marie, vous vivrez quatre jours de silence, d&apos;intentions et de renaissance.
              </p>
              <p className="text-xl font-playfair italic text-lake-dark">
                Une expérience pour repartir plus claire, plus légère, plus ancrée.
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
                className="bg-gradient-to-br from-stone-dark to-lake-dark text-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🌑</div>
                <h3 className="text-xl font-playfair font-bold mb-2">
                  Rituel de Nouvelle Lune
                </h3>
                <p className="font-montserrat">
                  Méditation, intentions et eau lunaire
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-beige to-gold-light p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">✍️</div>
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-2">
                  Écriture d&apos;intentions
                </h3>
                <p className="text-stone font-montserrat">
                  Ce que j&apos;ai envie de semer
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-lake-light to-lake p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🧘</div>
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-2">
                  Pratiques corporelles douces
                </h3>
                <p className="text-stone font-montserrat">
                  Qi Gong, Pilates et Tai Chi à l&apos;éventail
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-gold to-gold-light p-6 rounded-lg shadow-lg"
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
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-beige-light to-stone-light p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🌾</div>
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-2">
                  Balades méditatives et temps de silence
                </h3>
                <p className="text-stone font-montserrat">
                  Marches contemplatives dans la nature
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-lake to-stone-dark text-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-playfair font-bold mb-2">
                  Cercle de partage et danse lente
                </h3>
                <p className="font-montserrat">
                  "Je m&apos;ouvre à la vie"
                </p>
              </motion.div>
            </div>

            <p className="text-center text-lg text-stone font-montserrat italic mt-8 max-w-3xl mx-auto">
              Un séjour pour ralentir, clarifier l&apos;esprit et planter les graines du renouveau.
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
              🌸 L&apos;expérience en quelques mots
            </h2>
            <div className="space-y-4 text-lg font-montserrat leading-relaxed text-stone-dark">
              <p>
                À chaque nouvelle lune, tout recommence.
              </p>
              <p>
                Cette retraite vous invite à tourner la page, à écrire la suite, à honorer votre propre cycle de transformation.
              </p>
              <p>
                On se reconnecte à la terre, à l&apos;eau, à la douceur du silence.
              </p>
              <p>
                Petit à petit, la clarté revient, et la lumière intérieure renaît.
              </p>
              <p className="text-2xl font-playfair italic text-lake-dark">
                Un retour à soi, simple, sincère, puissant.
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
                    <td className="py-4 px-4 text-stone">Adultes – accessible à tous</td>
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
                    <td className="py-4 px-4 text-stone italic">Les rituels s&apos;adaptent, la nature reste guide : l&apos;eau nettoie, le vent libère, la terre ancre.</td>
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
              Réservation obligatoire – 10 participants maximum.
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
                  Dois-je avoir déjà fait une retraite ou connaître la méditation ?
                </h3>
                <p className="text-stone font-montserrat">
                  Pas du tout. Cette retraite est accessible à tous, chacun avance à son rythme.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-3">
                  Et si je ne souhaite pas partager mes intentions ?
                </h3>
                <p className="text-stone font-montserrat">
                  Rien n&apos;est imposé. Le partage est toujours libre et bienveillant.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-3">
                  Et s&apos;il pleut ?
                </h3>
                <p className="text-stone font-montserrat">
                  La pluie devient un élément du rituel. Rien ne s&apos;arrête : tout se transforme.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Conclusion */}
      <section className="section-padding bg-gradient-to-r from-stone-dark to-lake-dark text-white">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              🌿
            </h2>
            <p className="text-2xl md:text-3xl font-playfair mb-6">
              Sous la nouvelle lune, tout redevient possible.
            </p>
            <p className="text-xl font-montserrat mb-8">
              On respire, on écrit, on médite, on renaît.<br />
              Une retraite tout en douceur pour accueillir le changement et s&apos;ouvrir à la vie.
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

