'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';
import Button from '@/components/Button';

export default function RayonnerPage({ params }) {
  const { locale } = params;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-lake to-lake-dark">
        <div className="text-center text-white px-4 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-light drop-shadow-2xl mb-6"
          >
            {locale === 'fr' ? "Retraite \"Rayonner\"" : "\"Radiate\" Retreat"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl font-playfair italic max-w-4xl mx-auto mb-6"
          >
            {locale === 'fr'
              ? "Sous la lumière de la lune, laisser partir ce qui ne sert plus et accueillir la clarté"
              : "Under the moonlight, let go of what no longer serves and welcome clarity"
            }
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-montserrat mb-8"
          >
            {locale === 'fr' ? "Du 13 au 16 juin 2025 – Savoie" : "June 13-16, 2025 – Savoie"}
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
      </section>

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
              <p>{locale === 'fr' ? "Ici, on s'offre le droit de ralentir." : "Here, we allow ourselves to slow down."}</p>
              <p>{locale === 'fr' ? "De respirer un peu plus profondément." : "To breathe a little more deeply."}</p>
              <p>{locale === 'fr' ? "De laisser la lumière de la lune nous rappeler qu'après chaque obscurité, il y a toujours un renouveau." : "To let the moonlight remind us that after every darkness, there is always renewal."}</p>
              <p className="font-normal text-stone-dark">
                {locale === 'fr' 
                  ? "Accompagné·e par Anaïs, Isée et Marie, vous vivrez un moment de libération et d'ancrage, entre nature, mouvement et écriture intuitive."
                  : "Accompanied by Anaïs, Isée and Marie, you'll experience a moment of liberation and grounding, between nature, movement and intuitive writing."
                }
              </p>
              <p className="text-xl font-playfair italic text-lake-dark">
                {locale === 'fr'
                  ? "Une retraite pour éclairer ce que l'on porte encore et retrouver la joie simple de rayonner."
                  : "A retreat to illuminate what we still carry and rediscover the simple joy of radiating."
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
              {locale === 'fr' ? "Ce que vous vivrez" : "What You'll Experience"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gold-light to-gold/40 p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🌕</div>
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  {locale === 'fr' ? "Cérémonie de Pleine Lune" : "Full Moon Ceremony"}
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr' ? "Feu, intentions et libération symbolique" : "Fire, intentions and symbolic release"}
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
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  {locale === 'fr' ? "Écriture intuitive" : "Intuitive Writing"}
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr' ? "\"Ce que je choisis de laisser partir\"" : "\"What I choose to let go\""}
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
                  {locale === 'fr' ? "Pratiques corporelles" : "Body Practices"}
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr' ? "Qi Gong, Pilates, Tai Chi à l'éventail" : "Qi Gong, Pilates, Fan Tai Chi"}
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
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  {locale === 'fr' ? "Soins individuels" : "Individual Healing"}
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr' ? "Réflexologie plantaire & Reiki" : "Reflexology & Reiki"}
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
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  {locale === 'fr' ? "Balades méditatives au lever du jour" : "Meditative Walks at Dawn"}
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr' ? "Connexion à la nature dès l'aube" : "Connection to nature from dawn"}
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
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-2">
                  {locale === 'fr' ? "Cercles de partage et rituels de gratitude" : "Sharing Circles & Gratitude Rituals"}
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr' ? "Moments d'échanges et de reconnaissance" : "Moments of exchange and recognition"}
                </p>
              </motion.div>
            </div>

            <p className="text-center text-lg text-stone font-montserrat italic mt-8 max-w-3xl mx-auto">
              {locale === 'fr' 
                ? "Un séjour sous le signe de la clarté, de la lumière et de la douceur intérieure."
                : "A retreat under the sign of clarity, light and inner softness."
              }
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
            <h2 className="text-4xl md:text-5xl font-playfair font-light mb-8 text-stone-dark">
              {locale === 'fr' ? "L'expérience en quelques mots" : "The Experience in a Few Words"}
            </h2>
            <div className="space-y-4 text-lg font-montserrat leading-relaxed text-stone-dark">
              <p>
                {locale === 'fr' 
                  ? "La pleine lune éclaire ce qui restait dans l'ombre."
                  : "The full moon illuminates what remained in the shadows."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Pendant ces quatre jours, on libère, on écrit, on bouge et on respire — pour laisser partir ce qui encombre et faire place à ce qui veut naître."
                  : "During these four days, we release, we write, we move and we breathe — to let go of what clutters and make room for what wants to be born."
                }
              </p>
              <p>
                {locale === 'fr'
                  ? "Le cadre naturel et la bienveillance du groupe offrent un espace sûr pour se déposer et s'alléger."
                  : "The natural setting and the benevolence of the group offer a safe space to let go and lighten."
                }
              </p>
              <p className="text-xl font-playfair italic">
                {locale === 'fr'
                  ? "Ce n'est pas une retraite pour \"changer de vie\", mais pour retrouver la vôtre — plus apaisée, plus claire, plus légère."
                  : "This is not a retreat to \"change your life\", but to find yours again — more peaceful, clearer, lighter."
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
                ? "Réservation obligatoire – places limitées à 10 participants."
                : "Booking required – limited to 10 participants."
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
                    ? "Et si je n'ai jamais fait de retraite ?"
                    : "What if I've never been on a retreat?"
                  }
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr'
                    ? "Tout est guidé et progressif, chacun vit l'expérience à son rythme."
                    : "Everything is guided and progressive, everyone experiences it at their own pace."
                  }
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-3">
                  {locale === 'fr'
                    ? "Dois-je venir seul(e) ?"
                    : "Should I come alone?"
                  }
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr'
                    ? "Beaucoup de participants viennent seuls. Le lien se crée naturellement dès le premier soir."
                    : "Many participants come alone. Connections form naturally from the first evening."
                  }
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-playfair font-normal text-stone-dark mb-3">
                  {locale === 'fr'
                    ? "Faut-il connaître les rituels de lune ?"
                    : "Do I need to know about moon rituals?"
                  }
                </h3>
                <p className="text-stone font-montserrat">
                  {locale === 'fr'
                    ? "Non, tout est expliqué avec simplicité. Ici, il suffit juste d'avoir envie de se déposer."
                    : "No, everything is explained simply. Here, you just need the desire to let go."
                  }
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
            <h2 className="text-4xl md:text-5xl font-playfair font-light mb-6 text-stone-dark">
              🌿
            </h2>
            <p className="text-2xl md:text-3xl font-playfair mb-6 text-stone-dark">
              {locale === 'fr'
                ? "Sous la lumière de la lune, on libère, on rit, on respire."
                : "Under the moonlight, we release, we laugh, we breathe."
              }
            </p>
            <p className="text-xl font-montserrat mb-8 text-stone-dark">
              {locale === 'fr'
                ? "On laisse le passé se dissoudre et on accueille la clarté du présent."
                : "We let the past dissolve and welcome the clarity of the present."
              }
              <br />
              {locale === 'fr'
                ? "Une expérience lumineuse, entre nature, douceur et renaissance."
                : "A luminous experience, between nature, softness and rebirth."
              }
            </p>
            <Button href={`/${locale}/contact`} variant="primary">
              {locale === 'fr' ? "Je réserve ma place maintenant" : "Book My Spot Now"}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

