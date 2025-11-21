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
            className="text-5xl md:text-7xl font-playfair font-light drop-shadow-2xl mb-6"
          >
            {locale === 'fr' ? "Retraite \"Légèreté\"" : "\"Lightness\" Retreat"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl font-playfair italic max-w-4xl mx-auto mb-6"
          >
            {locale === 'fr'
              ? "Jeûne & légèreté : se libérer du trop-plein, retrouver l'énergie naturelle du corps"
              : "Fasting & lightness: free yourself from excess, rediscover the body's natural energy"
            }
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-montserrat mb-8"
          >
            {locale === 'fr' ? "Du 1ᵉʳ au 4 mai 2025 – Savoie" : "May 1-4, 2025 – Savoie"}
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
      <section className="section-padding bg-beige-light">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-light text-stone-dark mb-6">
              {locale === 'fr' ? "Une parenthèse pour se retrouver" : "A Pause to Find Yourself"}
            </h2>
            <div className="space-y-4 text-lg text-stone font-montserrat leading-relaxed max-w-3xl mx-auto">
              <p>
                {locale === 'fr'
                  ? "Ici, on dépose le quotidien pour revenir à l'essentiel."
                  : "Here, we set aside daily life to return to the essential."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "On prend le temps de respirer, de marcher, de goûter le silence et de laisser le corps se régénérer."
                  : "We take time to breathe, walk, taste the silence and let the body regenerate."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Une pause consciente, loin du tumulte, pour retrouver le plaisir d'exister simplement."
                  : "A conscious pause, far from the tumult, to rediscover the pleasure of simply existing."
                }
              </p>
              <p className="font-normal text-stone-dark">
                {locale === 'fr'
                  ? "Encadrée par Anaïs, Isée et Marie, cette expérience allie mouvement, nature et introspection dans une ambiance bienveillante et chaleureuse."
                  : "Led by Anaïs, Isée and Marie, this experience combines movement, nature and introspection in a kind and warm atmosphere."
                }
              </p>
              <p className="text-xl font-playfair italic text-lake-dark">
                {locale === 'fr'
                  ? "Quatre jours pour vous purifier, respirer, et repartir aligné·e et apaisé·e."
                  : "Four days to purify yourself, breathe, and leave aligned and at peace."
                }
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
              💚 {locale === 'fr' ? "Ce que vous vivrez" : "What You'll Experience"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-beige to-beige-light p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🌄</div>
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  {locale === 'fr' 
                    ? "Balades méditatives au cœur de la Savoie"
                    : "Meditative walks in the heart of Savoie"
                  }
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr'
                    ? "Marches conscientes dans les paysages alpins pour se reconnecter à la nature"
                    : "Conscious walks in alpine landscapes to reconnect with nature"
                  }
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
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  {locale === 'fr'
                    ? "Pratiques douces : Qi Gong, Tai Chi à l'éventail et Pilates"
                    : "Gentle practices: Qi Gong, Fan Tai Chi and Pilates"
                  }
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr'
                    ? "Mouvements doux pour réveiller le corps en douceur"
                    : "Gentle movements to awaken the body softly"
                  }
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
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  {locale === 'fr'
                    ? "Soins individuels : Réflexologie plantaire & Reiki"
                    : "Individual healing: Reflexology & Reiki"
                  }
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr'
                    ? "Soins énergétiques personnalisés pour libérer les tensions"
                    : "Personalized energy healing to release tension"
                  }
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
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  {locale === 'fr'
                    ? "Écriture introspective : les \"3 Lettres du Je(u)ne\""
                    : "Introspective writing: the \"3 Fasting Letters\""
                  }
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr'
                    ? "Moments d'écriture pour explorer ses ressentis"
                    : "Writing moments to explore your feelings"
                  }
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
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  {locale === 'fr'
                    ? "Cercles de partage & moments de silence"
                    : "Sharing circles & silent moments"
                  }
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr'
                    ? "Échanges bienveillants et temps calmes pour soi"
                    : "Kind exchanges and quiet times for yourself"
                  }
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
                <h3 className="text-xl font-playfair font-normal mb-2">
                  {locale === 'fr'
                    ? "Alimentation légère et consciente"
                    : "Light and conscious eating"
                  }
                </h3>
                <p className="font-montserrat">
                  {locale === 'fr'
                    ? "Pour retrouver clarté et énergie"
                    : "To rediscover clarity and energy"
                  }
                </p>
              </motion.div>
            </div>

            <p className="text-center text-lg text-stone font-montserrat italic mt-8 max-w-3xl mx-auto">
              {locale === 'fr'
                ? "Un programme pensé pour vous reconnecter à vos sensations, à votre souffle et à votre joie intérieure."
                : "A program designed to reconnect you with your sensations, your breath and your inner joy."
              }
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
            <h2 className="text-4xl md:text-5xl font-playfair font-light mb-8">
              {locale === 'fr' ? "L'expérience en quelques mots" : "The Experience in a Few Words"}
            </h2>
            <div className="space-y-4 text-lg font-montserrat leading-relaxed">
              <p>
                {locale === 'fr'
                  ? "Pendant cette retraite, vous vivrez un jeûne doux et accompagné, adapté à chacun, combiné à des moments d'écoute du corps et de la nature."
                  : "During this retreat, you'll experience a gentle and guided fast, adapted to each person, combined with moments of listening to the body and nature."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Les téléphones restent au repos une partie de la journée, pour offrir au mental le silence dont il a besoin."
                  : "Phones remain at rest for part of the day, to offer the mind the silence it needs."
                }
              </p>
              <p className="font-normal text-gold-light text-xl">
                {locale === 'fr'
                  ? "Ici, on respire vraiment, on rit, on marche, on écrit."
                  : "Here, we truly breathe, laugh, walk, write."
                }
              </p>
              <p className="text-2xl font-playfair italic">
                {locale === 'fr'
                  ? "Le monde s'arrête, le cœur reprend sa place."
                  : "The world stops, the heart takes its place again."
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
                      {locale === 'fr' 
                        ? "Adultes – débutants ou initiés au jeûne"
                        : "Adults – beginners or experienced in fasting"
                      }
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
                      {locale === 'fr' ? "Taille du groupe" : "Group size"}
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
                        : "Gîte or chalet in Savoie (Bauges, Revard or Lake Bourget area)"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">
                      {locale === 'fr' ? "Déconnexion" : "Disconnection"}
                    </td>
                    <td className="py-4 px-4 text-stone">
                      {locale === 'fr' 
                        ? "Sans téléphone de 9h à 20h"
                        : "No phone from 9am to 8pm"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-normal text-stone-dark">
                      {locale === 'fr' ? "Et s'il pleut ?" : "What if it rains?"}
                    </td>
                    <td className="py-4 px-4 text-stone italic">
                      {locale === 'fr'
                        ? "Rien n'est annulé : la pluie purifie, le vent libère, la terre ancre."
                        : "Nothing is canceled: rain purifies, wind liberates, earth anchors."
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

            {/* Offre de lancement */}
            <div className="mb-12">
              <div className="bg-gold/20 border-2 border-gold rounded-lg p-8 mb-4">
                <h3 className="text-3xl font-playfair font-light mb-6 text-gold">
                  {locale === 'fr'
                    ? "Offre de lancement – jusqu'au 1ᵉʳ mai 2025"
                    : "Launch Offer – until May 1, 2025"
                  }
                </h3>
                <div className="grid md:grid-cols-3 gap-6 font-montserrat">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-4xl mb-3">🛏</div>
                    <h4 className="text-xl font-normal mb-2">{locale === 'fr' ? "Chambre partagée" : "Shared room"}</h4>
                    <p className="text-sm text-beige-light mb-3">{locale === 'fr' ? "(4 lits simples)" : "(4 single beds)"}</p>
                    <p className="text-3xl font-bold text-gold">€450</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-4xl mb-3">🌸</div>
                    <h4 className="text-xl font-normal mb-2">{locale === 'fr' ? "Chambre double" : "Double room"}</h4>
                    <p className="text-sm text-beige-light mb-3">{locale === 'fr' ? "(offre duo)" : "(duo offer)"}</p>
                    <p className="text-3xl font-bold text-gold">€550</p>
                    <p className="text-sm text-beige-light">{locale === 'fr' ? "/ personne" : "/ person"}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-4xl mb-3">✨</div>
                    <h4 className="text-xl font-normal mb-2">{locale === 'fr' ? "Chambre double solo" : "Double room solo"}</h4>
                    <p className="text-sm text-beige-light mb-3">&nbsp;</p>
                    <p className="text-3xl font-bold text-gold">€590</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarifs réguliers */}
            <div className="mb-12">
              <h3 className="text-3xl font-playfair font-light mb-6 text-beige-light">
                {locale === 'fr' ? "Tarifs réguliers – à partir du 2 mai 2025" : "Regular Rates – from May 2, 2025"}
              </h3>
              <div className="grid md:grid-cols-3 gap-6 font-montserrat">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="text-4xl mb-3">🛏</div>
                  <h4 className="text-xl font-normal mb-2">{locale === 'fr' ? "Chambre partagée" : "Shared room"}</h4>
                  <p className="text-sm text-beige-light mb-3">&nbsp;</p>
                  <p className="text-3xl font-bold">€515</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="text-4xl mb-3">🌸</div>
                  <h4 className="text-xl font-normal mb-2">{locale === 'fr' ? "Chambre double" : "Double room"}</h4>
                  <p className="text-sm text-beige-light mb-3">{locale === 'fr' ? "(offre duo)" : "(duo offer)"}</p>
                  <p className="text-3xl font-bold">€670</p>
                  <p className="text-sm text-beige-light">{locale === 'fr' ? "/ personne" : "/ person"}</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="text-4xl mb-3">✨</div>
                  <h4 className="text-xl font-normal mb-2">{locale === 'fr' ? "Chambre double solo" : "Double room solo"}</h4>
                  <p className="text-sm text-beige-light mb-3">&nbsp;</p>
                  <p className="text-3xl font-bold">€640</p>
                </div>
              </div>
            </div>

            <p className="text-center text-beige-light mb-8">
              {locale === 'fr'
                ? <>Hébergement, repas, soins et accompagnement inclus.<br />Réservation obligatoire – places limitées à 10 participants.</>
                : <>Accommodation, meals, healing and guidance included.<br />Booking required – limited to 10 participants.</>
              }
            </p>

            <div className="text-center">
              <Button href={`/${locale}/contact`} variant="gold">
                {locale === 'fr' ? "Je réserve ma place" : "Book my spot"}
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
                  {locale === 'fr' ? "Et si je n'ai jamais jeûné ?" : "What if I've never fasted before?"}
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr'
                    ? "Aucun prérequis, tout est guidé et progressif. L'écoute de soi prime sur la performance."
                    : "No prerequisites, everything is guided and progressive. Listening to yourself comes before performance."
                  }
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-3">
                  {locale === 'fr' ? "Dois-je venir seul(e) ?" : "Should I come alone?"}
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr'
                    ? "Beaucoup de participants viennent seuls. Vous serez accueilli·e avec bienveillance dans un petit groupe soudé."
                    : "Many participants come alone. You'll be welcomed with kindness in a close-knit small group."
                  }
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-3">
                  {locale === 'fr' ? "Et s'il pleut ?" : "What if it rains?"}
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr'
                    ? "Tout continue — la pluie purifie, le vent libère, la terre ancre."
                    : "Everything continues — rain purifies, wind liberates, earth anchors."
                  }
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
            <h2 className="text-4xl md:text-5xl font-playfair font-light mb-6">
              🌿
            </h2>
            <p className="text-2xl md:text-3xl font-playfair mb-8">
              {locale === 'fr'
                ? "Trois jours pour alléger le corps, éclaircir l'esprit et retrouver la joie simple d'être vivant."
                : "Three days to lighten the body, clear the mind and rediscover the simple joy of being alive."
              }
            </p>
            <p className="text-xl font-montserrat mb-8">
              {locale === 'fr'
                ? "Une bulle hors du temps, entre lac et montagne, pour renaître à soi."
                : "A bubble out of time, between lake and mountain, to be reborn to yourself."
              }
            </p>
            <Button href={`/${locale}/contact`} variant="gold">
              {locale === 'fr' ? "Je réserve ma place maintenant" : "Book my spot now"}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

