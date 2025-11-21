'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '@/components/Button';

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
    // Logique d'envoi du formulaire à implémenter
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
        ? "Nous acceptons les paiements par virement bancaire, carte bancaire (via système sécurisé), chèques et espèces. Un acompte de 30% est demandé à la réservation."
        : "We accept payments by bank transfer, credit card (via secure system), checks and cash. A 30% deposit is required upon booking."
    },
    {
      question: locale === 'fr' ? "Quelle est la taille des groupes ?" : "What is the group size?",
      answer: locale === 'fr'
        ? "Pour les visites guidées, nous limitons les groupes à 8-10 personnes maximum pour garantir une expérience de qualité. Les retraites bien-être accueillent jusqu'à 12 participants. Les visites privées sont adaptées à votre groupe (1-8 personnes)."
        : "For guided tours, we limit groups to 8-10 people maximum to ensure a quality experience. Wellness retreats accommodate up to 12 participants. Private tours are adapted to your group (1-8 people)."
    },
    {
      question: locale === 'fr' ? "Que se passe-t-il en cas de mauvais temps ?" : "What happens in bad weather?",
      answer: locale === 'fr'
        ? "Votre sécurité est notre priorité. En cas de conditions météorologiques défavorables, nous proposons soit une date de report, soit une activité alternative adaptée. Les annulations météo sont gratuites et sans frais."
        : "Your safety is our priority. In case of unfavorable weather conditions, we offer either a postponement date or an adapted alternative activity. Weather cancellations are free and without charge."
    },
    {
      question: locale === 'fr' ? "Proposez-vous des visites en d'autres langues que le français et l'anglais ?" : "Do you offer tours in languages other than French and English?",
      answer: locale === 'fr'
        ? "Nous proposons principalement nos services en français et anglais. Pour d'autres langues (allemand, espagnol, italien), merci de nous contacter à l'avance. Nous pouvons faire appel à des guides partenaires selon disponibilité."
        : "We mainly offer our services in French and English. For other languages (German, Spanish, Italian), please contact us in advance. We can call upon partner guides depending on availability."
    },
    {
      question: locale === 'fr' ? "Quel niveau physique est requis pour les randonnées ?" : "What fitness level is required for hikes?",
      answer: locale === 'fr'
        ? "Nous proposons des randonnées pour tous les niveaux, de la balade familiale facile aux randonnées plus sportives. Le niveau de difficulté est toujours indiqué dans la description. N'hésitez pas à nous contacter pour des conseils personnalisés."
        : "We offer hikes for all levels, from easy family walks to more athletic hikes. The difficulty level is always indicated in the description. Feel free to contact us for personalized advice."
    },
    {
      question: locale === 'fr' ? "Faut-il avoir son propre équipement ?" : "Do I need my own equipment?",
      answer: locale === 'fr'
        ? "Pour les randonnées, il faut prévoir de bonnes chaussures de marche et des vêtements adaptés. Nous fournissons les bâtons de marche si nécessaire. Pour les retraites bien-être, les tapis de yoga sont fournis."
        : "For hikes, you need good hiking shoes and appropriate clothing. We provide walking poles if necessary. For wellness retreats, yoga mats are provided."
    },
    {
      question: locale === 'fr' ? "Puis-je annuler ou modifier ma réservation ?" : "Can I cancel or modify my booking?",
      answer: locale === 'fr'
        ? "Les annulations jusqu'à 15 jours avant la date prévue sont remboursées à 100% (hors frais de dossier de 20€). Entre 15 et 7 jours : 50% de remboursement. Moins de 7 jours : aucun remboursement sauf cas de force majeure."
        : "Cancellations up to 15 days before the scheduled date are 100% refunded (excluding €20 processing fee). Between 15 and 7 days: 50% refund. Less than 7 days: no refund except in cases of force majeure."
    },
    {
      question: locale === 'fr' ? "Les enfants sont-ils les bienvenus ?" : "Are children welcome?",
      answer: locale === 'fr'
        ? "Absolument ! Nous avons des activités spécialement conçues pour les familles (Rendez-vous Nature en Famille). Pour les autres visites, l'âge minimum recommandé varie selon l'activité. Contactez-nous pour des recommandations adaptées."
        : "Absolutely! We have activities specially designed for families (Family Nature Outings). For other tours, the minimum recommended age varies by activity. Contact us for suitable recommendations."
    },
    {
      question: locale === 'fr' ? "Proposez-vous un service de transfert depuis l'aéroport ?" : "Do you offer airport transfer service?",
      answer: locale === 'fr'
        ? "Oui, nous proposons des transferts depuis l'aéroport de Genève avec possibilité de visite guidée en cours de route. Ce service est disponible sur réservation pour les visites privées et les retraites."
        : "Yes, we offer transfers from Geneva airport with the possibility of a guided tour along the way. This service is available by reservation for private tours and retreats."
    },
    {
      question: locale === 'fr' ? "Peut-on personnaliser les itinéraires ?" : "Can we customize itineraries?",
      answer: locale === 'fr'
        ? "Oui ! Les visites privées sont entièrement personnalisables selon vos envies, votre rythme et vos centres d'intérêt. Contactez-nous pour créer ensemble votre expérience sur-mesure."
        : "Yes! Private tours are fully customizable according to your desires, pace and interests. Contact us to create your tailor-made experience together."
    }
  ];

  return (
    <div className="min-h-screen bg-beige-light">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-lake to-lake-dark text-white">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-playfair font-light mb-4"
          >
            {locale === 'fr' ? "Contactez-Nous" : "Contact Us"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-montserrat font-light max-w-2xl mx-auto"
          >
            {locale === 'fr'
              ? "Une question ? Un projet de visite ? Nous sommes là pour vous répondre"
              : "A question? A tour project? We're here to answer you"
            }
          </motion.p>
        </div>
      </section>

      {/* Section Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-playfair font-light text-stone-dark mb-6">
                {locale === 'fr' ? "Envoyez-nous un message" : "Send us a message"}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-montserrat font-semibold text-stone-dark mb-2">
                    {locale === 'fr' ? "Nom complet *" : "Full name *"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-light rounded-lg focus:outline-none focus:ring-2 focus:ring-lake font-montserrat"
                    placeholder={locale === 'fr' ? "Votre nom" : "Your name"}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-montserrat font-semibold text-stone-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-light rounded-lg focus:outline-none focus:ring-2 focus:ring-lake font-montserrat"
                    placeholder={locale === 'fr' ? "votre@email.com" : "your@email.com"}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-montserrat font-semibold text-stone-dark mb-2">
                    {locale === 'fr' ? "Téléphone" : "Phone"}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-light rounded-lg focus:outline-none focus:ring-2 focus:ring-lake font-montserrat"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-montserrat font-semibold text-stone-dark mb-2">
                    {locale === 'fr' ? "Sujet *" : "Subject *"}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-light rounded-lg focus:outline-none focus:ring-2 focus:ring-lake font-montserrat"
                  >
                    <option value="">
                      {locale === 'fr' ? "Choisissez une option" : "Choose an option"}
                    </option>
                    <option value="informations-excursion">
                      {locale === 'fr' 
                        ? "Obtenir des informations sur une excursion (accessibilité / organisation...)" 
                        : "Get information about an excursion (accessibility / organization...)"}
                    </option>
                    <option value="devis-groupe">
                      {locale === 'fr' 
                        ? "Demande de devis pour un groupe ou une visite privée" 
                        : "Quote request for a group or private tour"}
                    </option>
                    <option value="partenariat">
                      {locale === 'fr' 
                        ? "Proposition de partenariat (hôtel, presse, agence...)" 
                        : "Partnership proposal (hotel, press, agency...)"}
                    </option>
                    <option value="autre">
                      {locale === 'fr' ? "Autre demande" : "Other request"}
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-montserrat font-semibold text-stone-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-stone-light rounded-lg focus:outline-none focus:ring-2 focus:ring-lake font-montserrat resize-none"
                    placeholder={locale === 'fr' ? "Parlez-nous de votre projet..." : "Tell us about your project..."}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-lake text-white py-3 px-6 rounded-lg font-montserrat font-semibold hover:bg-lake-dark transition-all duration-300 shadow-md hover:shadow-lg"
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
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-playfair font-light text-stone-dark mb-6">
                  {locale === 'fr' ? "Informations de contact" : "Contact Information"}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-montserrat font-semibold text-stone-dark mb-1">Email</h4>
                    <a href="mailto:contact@aixplore-tourism.com" className="text-lake hover:text-lake-dark font-montserrat font-light">
                      contact@aixplore-tourism.com
                    </a>
                  </div>

                  <div>
                    <h4 className="font-montserrat font-semibold text-stone-dark mb-1">
                      {locale === 'fr' ? "Téléphone" : "Phone"}
                    </h4>
                    <a href="tel:+33612345678" className="text-lake hover:text-lake-dark font-montserrat font-light">
                      +33 6 12 34 56 78
                    </a>
                  </div>

                  <div>
                    <h4 className="font-montserrat font-semibold text-stone-dark mb-1">
                      {locale === 'fr' ? "Localisation" : "Location"}
                    </h4>
                    <p className="text-stone font-montserrat font-light">
                      Annecy, Haute-Savoie<br />
                      Auvergne-Rhône-Alpes, France
                    </p>
                  </div>

                  <div>
                    <h4 className="font-montserrat font-semibold text-stone-dark mb-1">
                      {locale === 'fr' ? "Horaires" : "Hours"}
                    </h4>
                    <p className="text-stone font-montserrat font-light">
                      {locale === 'fr'
                        ? <>Lun - Sam : 9h00 - 19h00<br />Dimanche : Sur rendez-vous</>
                        : <>Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: By appointment</>
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-gradient-to-br from-lake-light to-gold-light p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-playfair font-light text-stone-dark mb-4">
                  {locale === 'fr' ? "Suivez-nous" : "Follow us"}
                </h3>
                <p className="text-stone font-montserrat font-light mb-6">
                  {locale === 'fr'
                    ? "Découvrez nos dernières aventures et conseils sur les réseaux sociaux"
                    : "Discover our latest adventures and tips on social media"
                  }
                </p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="px-6 py-2 bg-white rounded-full hover:bg-lake hover:text-white transition-all duration-300 shadow-md font-montserrat"
                    aria-label="Facebook"
                  >
                    Facebook
                  </a>
                  <a 
                    href="#" 
                    className="px-6 py-2 bg-white rounded-full hover:bg-lake hover:text-white transition-all duration-300 shadow-md font-montserrat"
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
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-light text-stone-dark mb-4">
              {locale === 'fr' ? "Questions Fréquentes" : "Frequently Asked Questions"}
            </h2>
            <p className="text-lg text-stone font-montserrat font-light">
              {locale === 'fr'
                ? "Trouvez rapidement les réponses à vos questions"
                : "Quickly find answers to your questions"
              }
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-stone-light rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-beige-light hover:bg-beige transition-colors"
                >
                  <span className="font-montserrat font-semibold text-stone-dark text-left">
                    {item.question}
                  </span>
                  <span className="text-2xl text-lake flex-shrink-0 ml-4">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 py-4 bg-white"
                  >
                    <p className="text-stone font-montserrat font-light leading-relaxed">
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

