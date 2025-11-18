'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';

export default function RayonnerPage({ params }) {
  const { locale } = params;

  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection 
        image="/images/retreat-summer.jpg"
        height="h-screen"
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6"
          >
            🌕 Retraite "Rayonner"
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl font-playfair italic max-w-4xl mx-auto mb-6"
          >
            Sous la lumière de la lune, laisser partir ce qui ne sert plus et accueillir la clarté
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-montserrat mb-8"
          >
            📅 Du 13 au 16 juin 2025 – Savoie
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
                Ici, on s&apos;offre le droit de ralentir.
              </p>
              <p>
                De respirer un peu plus profondément.
              </p>
              <p>
                De laisser la lumière de la lune nous rappeler qu&apos;après chaque obscurité, il y a toujours un renouveau.
              </p>
              <p className="font-semibold text-stone-dark">
                Accompagné·e par Anaïs, Isée et Marie, vous vivrez un moment de libération et d&apos;ancrage, entre nature, mouvement et écriture intuitive.
              </p>
              <p className="text-xl font-playfair italic text-lake-dark">
                Une retraite pour éclairer ce que l&apos;on porte encore et retrouver la joie simple de rayonner.
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
                className="bg-gradient-to-br from-gold-light to-gold/40 p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🌕</div>
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-2">
                  Cérémonie de Pleine Lune
                </h3>
                <p className="text-stone font-montserrat">
                  Feu, intentions et libération symbolique
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-beige to-beige-light p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">✍️</div>
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-2">
                  Écriture intuitive
                </h3>
                <p className="text-stone font-montserrat">
                  "Ce que je choisis de laisser partir"
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
                  Pratiques corporelles
                </h3>
                <p className="text-stone font-montserrat">
                  Qi Gong, Pilates, Tai Chi à l&apos;éventail
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-beige-light to-gold-light p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-2">
                  Soins individuels
                </h3>
                <p className="text-stone font-montserrat">
                  Réflexologie plantaire & Reiki
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-stone-light to-beige p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🌄</div>
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-2">
                  Balades méditatives au lever du jour
                </h3>
                <p className="text-stone font-montserrat">
                  Connexion à la nature dès l&apos;aube
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-gold to-gold-light p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-2">
                  Cercles de partage et rituels de gratitude
                </h3>
                <p className="text-stone font-montserrat">
                  Moments d&apos;échanges et de reconnaissance
                </p>
              </motion.div>
            </div>

            <p className="text-center text-lg text-stone font-montserrat italic mt-8 max-w-3xl mx-auto">
              Un séjour sous le signe de la clarté, de la lumière et de la douceur intérieure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section L'expérience */}
      <section className="section-padding bg-gradient-to-r from-gold to-gold-light">
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
                La pleine lune éclaire ce qui restait dans l&apos;ombre.
              </p>
              <p>
                Pendant ces quatre jours, on libère, on écrit, on bouge et on respire — pour laisser partir ce qui encombre et faire place à ce qui veut naître.
              </p>
              <p>
                Le cadre naturel et la bienveillance du groupe offrent un espace sûr pour se déposer et s&apos;alléger.
              </p>
              <p className="text-xl font-playfair italic">
                Ce n&apos;est pas une retraite pour "changer de vie", mais pour retrouver la vôtre — plus apaisée, plus claire, plus légère.
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
                  Et si je n&apos;ai jamais fait de retraite ?
                </h3>
                <p className="text-stone font-montserrat">
                  Tout est guidé et progressif, chacun vit l&apos;expérience à son rythme.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-3">
                  Dois-je venir seul(e) ?
                </h3>
                <p className="text-stone font-montserrat">
                  Beaucoup de participants viennent seuls. Le lien se crée naturellement dès le premier soir.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-playfair font-bold text-stone-dark mb-3">
                  Faut-il connaître les rituels de lune ?
                </h3>
                <p className="text-stone font-montserrat">
                  Non, tout est expliqué avec simplicité. Ici, il suffit juste d&apos;avoir envie de se déposer.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Conclusion */}
      <section className="section-padding bg-gradient-to-r from-gold to-gold-light">
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
              Sous la lumière de la lune, on libère, on rit, on respire.
            </p>
            <p className="text-xl font-montserrat mb-8 text-stone-dark">
              On laisse le passé se dissoudre et on accueille la clarté du présent.<br />
              Une expérience lumineuse, entre nature, douceur et renaissance.
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

