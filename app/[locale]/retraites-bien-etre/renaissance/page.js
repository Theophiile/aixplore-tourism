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
            className="text-5xl md:text-7xl font-playfair font-light drop-shadow-2xl mb-6"
          >
            {locale === 'fr' ? "Retraite \"Renaissance\"" : "\"Rebirth\" Retreat"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl font-playfair italic max-w-4xl mx-auto mb-6"
          >
            {locale === 'fr'
              ? "Sous la nouvelle lune, un temps pour semer, méditer et renaître à soi"
              : "Under the new moon, a time to plant seeds, meditate and be reborn to yourself"
            }
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-montserrat mb-8"
          >
            {locale === 'fr' ? "Du 9 au 12 octobre 2025 – Savoie" : "October 9-12, 2025 – Savoie"}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button href={`/${locale}/contact`} variant="gold">
              {locale === 'fr' ? "Je réserve ma place" : "Book my spot"}
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
            <h2 className="text-4xl md:text-5xl font-playfair font-light text-stone-dark mb-6">
              ✨ Une parenthèse pour se retrouver
            </h2>
            <div className="space-y-4 text-lg text-stone font-montserrat leading-relaxed max-w-3xl mx-auto">
              <p>
                Quand la lune disparaît, tout devient plus calme, plus intérieur.
              </p>
              <p>
                C&apos;est le moment parfait pour se recentrer, faire le vide, écouter ce qui pousse à l&apos;intérieur.
              </p>
              <p className="font-normal text-stone-dark">
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
            <h2 className="text-4xl md:text-5xl font-playfair font-light text-stone-dark mb-12 text-center">
              {locale === 'fr' ? "Ce que vous vivrez" : "What You'll Experience"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-stone-dark to-lake-dark text-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🌑</div>
                <h3 className="text-xl font-playfair font-normal mb-2">
                  {locale === 'fr' ? "Rituel de Nouvelle Lune" : "New Moon Ritual"}
                </h3>
                <p className="font-montserrat">
                  {locale === 'fr' ? "Méditation, intentions et eau lunaire" : "Meditation, intentions and moon water"}
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
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  {locale === 'fr' ? "Écriture d'intentions" : "Intention Writing"}
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr' ? "Ce que j'ai envie de semer" : "What I want to seed"}
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
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  {locale === 'fr' ? "Pratiques corporelles douces" : "Gentle Body Practices"}
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr' ? "Qi Gong, Pilates et Tai Chi à l'éventail" : "Qi Gong, Pilates and Fan Tai Chi"}
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
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  {locale === 'fr' ? "Soins individuels" : "Individual Healing"}
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr' ? "Reiki et Réflexologie plantaire" : "Reiki and Reflexology"}
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
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  {locale === 'fr' ? "Balades méditatives et temps de silence" : "Meditative Walks & Silent Times"}
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr' ? "Marches contemplatives dans la nature" : "Contemplative walks in nature"}
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
                <h3 className="text-xl font-playfair font-normal mb-2">
                  {locale === 'fr' ? "Cercle de partage et danse lente" : "Sharing Circle & Slow Dance"}
                </h3>
                <p className="font-montserrat">
                  {locale === 'fr' ? "\"Je m'ouvre à la vie\"" : "\"I open myself to life\""}
                </p>
              </motion.div>
            </div>

            <p className="text-center text-lg text-stone font-montserrat italic mt-8 max-w-3xl mx-auto">
              {locale === 'fr'
                ? "Un séjour pour ralentir, clarifier l'esprit et planter les graines du renouveau."
                : "A retreat to slow down, clarify the mind and plant the seeds of renewal."
              }
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
            <h2 className="text-4xl md:text-5xl font-playfair font-light mb-8 text-stone-dark">
              {locale === 'fr' ? "L'expérience en quelques mots" : "The Experience in a Few Words"}
            </h2>
            <div className="space-y-4 text-lg font-montserrat leading-relaxed text-stone-dark">
              <p>
                {locale === 'fr'
                  ? "À chaque nouvelle lune, tout recommence."
                  : "With each new moon, everything begins again."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Cette retraite vous invite à tourner la page, à écrire la suite, à honorer votre propre cycle de transformation."
                  : "This retreat invites you to turn the page, write the next chapter, and honor your own cycle of transformation."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "On se reconnecte à la terre, à l'eau, à la douceur du silence."
                  : "We reconnect with the earth, water, and the softness of silence."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Petit à petit, la clarté revient, et la lumière intérieure renaît."
                  : "Little by little, clarity returns, and the inner light is reborn."
                }
              </p>
              <p className="text-2xl font-playfair italic text-lake-dark">
                {locale === 'fr'
                  ? "Un retour à soi, simple, sincère, puissant."
                  : "A return to oneself, simple, sincere, powerful."
                }
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
            <h2 className="text-4xl font-playfair font-light text-stone-dark mb-8 text-center">
              {locale === 'fr' ? "📋 À savoir" : "📋 Good to Know"}
            </h2>
            
            <div className="bg-white rounded-lg p-8 shadow-xl overflow-x-auto">
              <table className="w-full font-montserrat font-light">
                <tbody className="divide-y divide-stone-light">
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">
                      {locale === 'fr' ? "Public" : "Audience"}
                    </td>
                    <td className="py-4 px-4 text-stone">
                      {locale === 'fr' ? "Adultes – accessible à tous" : "Adults – accessible to all"}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">
                      {locale === 'fr' ? "Durée" : "Duration"}
                    </td>
                    <td className="py-4 px-4 text-stone">
                      {locale === 'fr' ? "4 jours / 3 nuits" : "4 days / 3 nights"}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">
                      {locale === 'fr' ? "Taille du groupe" : "Group Size"}
                    </td>
                    <td className="py-4 px-4 text-stone">
                      {locale === 'fr' ? "8 à 10 participants" : "8 to 10 participants"}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">
                      {locale === 'fr' ? "Lieu" : "Location"}
                    </td>
                    <td className="py-4 px-4 text-stone">
                      {locale === 'fr' 
                        ? "Gîte ou chalet en Savoie (secteur Bauges, Revard ou lac du Bourget)"
                        : "Lodge or chalet in Savoie (Bauges, Revard or Lake Bourget area)"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">
                      {locale === 'fr' ? "Déconnexion" : "Disconnection"}
                    </td>
                    <td className="py-4 px-4 text-stone">
                      {locale === 'fr' ? "Sans téléphone de 9h à 20h" : "No phone from 9am to 8pm"}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">
                      {locale === 'fr' ? "Et s'il pleut ?" : "What if it rains?"}
                    </td>
                    <td className="py-4 px-4 text-stone italic">
                      {locale === 'fr'
                        ? "Les rituels s'adaptent, la nature reste guide : l'eau nettoie, le vent libère, la terre ancre."
                        : "Rituals adapt, nature remains guide: water cleanses, wind liberates, earth anchors."
                      }
                    </td>
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
            <h2 className="text-4xl md:text-5xl font-playfair font-light mb-12 text-center">
              {locale === 'fr' ? "Tarifs & Réservation" : "Pricing & Booking"}
            </h2>

            <div className="mb-12">
              <div className="bg-gold/20 border-2 border-gold rounded-lg p-8 mb-4">
                <h3 className="text-3xl font-playfair font-light mb-6 text-gold">
                  {locale === 'fr' 
                    ? "Offre de lancement – jusqu'au 1ᵉʳ mai 2025"
                    : "Launch Offer – until May 1st, 2025"
                  }
                </h3>
                <div className="grid md:grid-cols-3 gap-6 font-montserrat">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-4xl mb-3">🛏</div>
                    <h4 className="text-xl font-normal mb-2">
                      {locale === 'fr' ? "Chambre partagée" : "Shared Room"}
                    </h4>
                    <p className="text-sm text-beige-light mb-3">
                      {locale === 'fr' ? "(4 lits simples)" : "(4 single beds)"}
                    </p>
                    <p className="text-3xl font-bold text-gold">480 €</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-4xl mb-3">🌸</div>
                    <h4 className="text-xl font-normal mb-2">
                      {locale === 'fr' ? "Chambre double" : "Double Room"}
                    </h4>
                    <p className="text-sm text-beige-light mb-3">
                      {locale === 'fr' ? "(offre duo)" : "(duo offer)"}
                    </p>
                    <p className="text-3xl font-bold text-gold">550 €</p>
                    <p className="text-sm text-beige-light">
                      {locale === 'fr' ? "/ personne" : "/ person"}
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-4xl mb-3">✨</div>
                    <h4 className="text-xl font-normal mb-2">
                      {locale === 'fr' ? "Chambre double solo" : "Double Room Solo"}
                    </h4>
                    <p className="text-sm text-beige-light mb-3">&nbsp;</p>
                    <p className="text-3xl font-bold text-gold">590 €</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-3xl font-playfair font-light mb-6 text-beige-light">
                {locale === 'fr'
                  ? "Tarifs réguliers – à partir du 2 mai 2025"
                  : "Regular Rates – from May 2nd, 2025"
                }
              </h3>
              <div className="grid md:grid-cols-3 gap-6 font-montserrat">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="text-4xl mb-3">🛏</div>
                  <h4 className="text-xl font-normal mb-2">
                    {locale === 'fr' ? "Chambre partagée" : "Shared Room"}
                  </h4>
                  <p className="text-sm text-beige-light mb-3">&nbsp;</p>
                  <p className="text-3xl font-bold">515 €</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="text-4xl mb-3">🌸</div>
                  <h4 className="text-xl font-normal mb-2">
                    {locale === 'fr' ? "Chambre double" : "Double Room"}
                  </h4>
                  <p className="text-sm text-beige-light mb-3">
                    {locale === 'fr' ? "(offre duo)" : "(duo offer)"}
                  </p>
                  <p className="text-3xl font-bold">670 €</p>
                  <p className="text-sm text-beige-light">
                    {locale === 'fr' ? "/ personne" : "/ person"}
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="text-4xl mb-3">✨</div>
                  <h4 className="text-xl font-normal mb-2">
                    {locale === 'fr' ? "Chambre double solo" : "Double Room Solo"}
                  </h4>
                  <p className="text-sm text-beige-light mb-3">&nbsp;</p>
                  <p className="text-3xl font-bold">640 €</p>
                </div>
              </div>
            </div>

            <p className="text-center text-beige-light mb-8">
              {locale === 'fr'
                ? "Hébergement, repas, soins et accompagnement inclus."
                : "Accommodation, meals, treatments and guidance included."
              }
              <br />
              {locale === 'fr'
                ? "Réservation obligatoire – 10 participants maximum."
                : "Booking required – maximum 10 participants."
              }
            </p>

            <div className="text-center">
              <Button href={`/${locale}/contact`} variant="gold">
                {locale === 'fr' ? "Je réserve ma place" : "Book My Spot"}
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
            <h2 className="text-4xl font-playfair font-light text-stone-dark mb-12 text-center">
              {locale === 'fr' ? "❓ Questions fréquentes" : "❓ Frequently Asked Questions"}
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-3">
                  {locale === 'fr'
                    ? "Dois-je avoir déjà fait une retraite ou connaître la méditation ?"
                    : "Do I need to have done a retreat before or know meditation?"
                  }
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr'
                    ? "Pas du tout. Cette retraite est accessible à tous, chacun avance à son rythme."
                    : "Not at all. This retreat is accessible to everyone, each person progresses at their own pace."
                  }
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-3">
                  {locale === 'fr'
                    ? "Et si je ne souhaite pas partager mes intentions ?"
                    : "What if I don't want to share my intentions?"
                  }
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr'
                    ? "Rien n'est imposé. Le partage est toujours libre et bienveillant."
                    : "Nothing is imposed. Sharing is always free and benevolent."
                  }
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-3">
                  {locale === 'fr' ? "Et s'il pleut ?" : "What if it rains?"}
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr'
                    ? "La pluie devient un élément du rituel. Rien ne s'arrête : tout se transforme."
                    : "The rain becomes part of the ritual. Nothing stops: everything transforms."
                  }
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
            <h2 className="text-4xl md:text-5xl font-playfair font-light mb-6">
              🌿
            </h2>
            <p className="text-2xl md:text-3xl font-playfair mb-6">
              {locale === 'fr'
                ? "Sous la nouvelle lune, tout redevient possible."
                : "Under the new moon, everything becomes possible again."
              }
            </p>
            <p className="text-xl font-montserrat mb-8">
              {locale === 'fr'
                ? "On respire, on écrit, on médite, on renaît."
                : "We breathe, we write, we meditate, we are reborn."
              }
              <br />
              {locale === 'fr'
                ? "Une retraite tout en douceur pour accueillir le changement et s'ouvrir à la vie."
                : "A gentle retreat to welcome change and open up to life."
              }
            </p>
            <Button href={`/${locale}/contact`} variant="gold">
              {locale === 'fr' ? "Je réserve ma place maintenant" : "Book My Spot Now"}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

