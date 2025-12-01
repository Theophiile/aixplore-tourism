'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage({ params }) {
  const { locale } = params;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const thankYouMessage = locale === 'fr'
      ? 'Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.'
      : 'Thank you for your message! We will get back to you as soon as possible.';
    alert(thankYouMessage);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqItems = [
    {
      question: locale === 'fr' ? "Quels sont les moyens de paiement acceptés ?" : "What payment methods are accepted?",
      answer: locale === 'fr'
        ? "Virement bancaire, carte bancaire, chèques et espèces. Acompte de 30% à la réservation."
        : "Bank transfer, credit card, checks and cash. 30% deposit upon booking."
    },
    {
      question: locale === 'fr' ? "Quelle est la taille des groupes ?" : "What is the group size?",
      answer: locale === 'fr'
        ? "8-10 personnes max pour les visites guidées. Visites privées adaptées à votre groupe (1-8 personnes)."
        : "8-10 people max for guided tours. Private tours adapted to your group (1-8 people)."
    },
    {
      question: locale === 'fr' ? "Que se passe-t-il en cas de mauvais temps ?" : "What happens in bad weather?",
      answer: locale === 'fr'
        ? "Report ou activité alternative. Annulations météo gratuites."
        : "Postponement or alternative activity. Weather cancellations are free."
    },
    {
      question: locale === 'fr' ? "Quel niveau physique est requis ?" : "What fitness level is required?",
      answer: locale === 'fr'
        ? "Randonnées pour tous les niveaux, de la balade familiale aux randonnées sportives."
        : "Hikes for all levels, from easy family walks to athletic hikes."
    },
    {
      question: locale === 'fr' ? "Puis-je annuler ma réservation ?" : "Can I cancel my booking?",
      answer: locale === 'fr'
        ? "Jusqu'à 15 jours avant : 100% remboursé. 15-7 jours : 50%. Moins de 7 jours : aucun remboursement."
        : "Up to 15 days before: 100% refund. 15-7 days: 50%. Less than 7 days: no refund."
    },
    {
      question: locale === 'fr' ? "Les enfants sont-ils les bienvenus ?" : "Are children welcome?",
      answer: locale === 'fr'
        ? "Oui ! Activités spéciales pour les familles (Rendez-vous Nature en Famille)."
        : "Yes! Special activities for families (Family Nature Outings)."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen w-screen lg:-ml-56 flex items-center justify-center bg-[#124e78]">
        <div className="text-center text-white/90 px-4 z-10 relative lg:ml-56">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-playfair font-light mb-6 drop-shadow-lg"
          >
            {locale === 'fr' ? "Contactez-Nous" : "Contact Us"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-playfair italic max-w-3xl mx-auto font-light drop-shadow-md"
          >
            {locale === 'fr'
              ? "Une question ? Un projet de visite ? Nous sommes là pour vous"
              : "A question? A tour project? We're here for you"
            }
          </motion.p>
        </div>
      </section>

      {/* Section Contact Form & Info */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-stone/10 shadow-sm"
            >
              <h2 className="text-xl font-playfair font-light text-stone-dark mb-6">
                {locale === 'fr' ? "Envoyez-nous un message" : "Send us a message"}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-montserrat text-sm font-medium text-stone-dark mb-1">
                    {locale === 'fr' ? "Nom complet *" : "Full name *"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-stone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lake/50 font-montserrat text-sm"
                    placeholder={locale === 'fr' ? "Votre nom" : "Your name"}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-montserrat text-sm font-medium text-stone-dark mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-stone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lake/50 font-montserrat text-sm"
                    placeholder={locale === 'fr' ? "votre@email.com" : "your@email.com"}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-montserrat text-sm font-medium text-stone-dark mb-1">
                    {locale === 'fr' ? "Téléphone" : "Phone"}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-stone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lake/50 font-montserrat text-sm"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-montserrat text-sm font-medium text-stone-dark mb-1">
                    {locale === 'fr' ? "Sujet *" : "Subject *"}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-stone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lake/50 font-montserrat text-sm"
                  >
                    <option value="">
                      {locale === 'fr' ? "Choisissez une option" : "Choose an option"}
                    </option>
                    <option value="informations-excursion">
                      {locale === 'fr' ? "Informations sur une excursion" : "Information about an excursion"}
                    </option>
                    <option value="devis-groupe">
                      {locale === 'fr' ? "Devis groupe ou visite privée" : "Group or private tour quote"}
                    </option>
                    <option value="partenariat">
                      {locale === 'fr' ? "Proposition de partenariat" : "Partnership proposal"}
                    </option>
                    <option value="autre">
                      {locale === 'fr' ? "Autre demande" : "Other request"}
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-montserrat text-sm font-medium text-stone-dark mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 border border-stone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lake/50 font-montserrat text-sm resize-none"
                    placeholder={locale === 'fr' ? "Parlez-nous de votre projet..." : "Tell us about your project..."}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-lake text-white py-3 px-6 rounded-lg font-montserrat text-sm font-medium hover:bg-lake-dark transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {locale === 'fr' ? "Envoyer le message" : "Send message"}
                </button>
              </form>
            </motion.div>

            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-xl border border-stone/10 shadow-sm">
                <h3 className="text-lg font-playfair font-light text-stone-dark mb-4">
                  {locale === 'fr' ? "Informations de contact" : "Contact Information"}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-montserrat text-sm font-medium text-lake mb-1">Email</h4>
                    <a href="mailto:contact@aixplore-tourism.com" className="text-stone/70 hover:text-lake font-montserrat text-sm font-light">
                      contact@aixplore-tourism.com
                    </a>
                  </div>

                  <div>
                    <h4 className="font-montserrat text-sm font-medium text-lake mb-1">
                      {locale === 'fr' ? "Téléphone" : "Phone"}
                    </h4>
                    <a href="tel:+33612345678" className="text-stone/70 hover:text-lake font-montserrat text-sm font-light">
                      +33 6 12 34 56 78
                    </a>
                  </div>

                  <div>
                    <h4 className="font-montserrat text-sm font-medium text-lake mb-1">
                      {locale === 'fr' ? "Localisation" : "Location"}
                    </h4>
                    <p className="text-stone/70 font-montserrat text-sm font-light">
                      Annecy, Haute-Savoie<br />
                      Auvergne-Rhône-Alpes, France
                    </p>
                  </div>

                  <div>
                    <h4 className="font-montserrat text-sm font-medium text-lake mb-1">
                      {locale === 'fr' ? "Horaires" : "Hours"}
                    </h4>
                    <p className="text-stone/70 font-montserrat text-sm font-light">
                      {locale === 'fr'
                        ? <>Lun - Sam : 9h - 19h<br />Dimanche : Sur rendez-vous</>
                        : <>Mon - Sat: 9AM - 7PM<br />Sunday: By appointment</>
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-white p-6 rounded-xl border border-lake/20 shadow-sm">
                <h3 className="text-lg font-playfair font-light text-stone-dark mb-3">
                  {locale === 'fr' ? "Suivez-nous" : "Follow us"}
                </h3>
                <p className="text-sm text-stone/70 font-montserrat font-light mb-4">
                  {locale === 'fr'
                    ? "Découvrez nos dernières aventures sur les réseaux"
                    : "Discover our latest adventures on social media"
                  }
                </p>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="px-5 py-2 bg-beige-light rounded-lg hover:bg-lake hover:text-white transition-all duration-300 font-montserrat text-sm"
                    aria-label="Facebook"
                  >
                    Facebook
                  </a>
                  <a 
                    href="#" 
                    className="px-5 py-2 bg-beige-light rounded-lg hover:bg-lake hover:text-white transition-all duration-300 font-montserrat text-sm"
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-12 bg-beige-light">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-playfair font-light text-stone-dark mb-2">
              {locale === 'fr' ? "Questions Fréquentes" : "Frequently Asked Questions"}
            </h2>
            <p className="text-sm text-stone/70 font-montserrat font-light">
              {locale === 'fr'
                ? "Trouvez rapidement les réponses à vos questions"
                : "Quickly find answers to your questions"
              }
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl border border-stone/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between hover:bg-beige-light/50 transition-colors"
                >
                  <span className="font-montserrat text-sm font-medium text-stone-dark text-left">
                    {item.question}
                  </span>
                  <span className="text-xl text-lake flex-shrink-0 ml-4">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-4"
                  >
                    <p className="text-sm text-stone/70 font-montserrat font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
