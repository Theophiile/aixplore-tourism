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
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
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
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: "Nous acceptons les paiements par virement bancaire, carte bancaire (via système sécurisé), chèques et espèces. Un acompte de 30% est demandé à la réservation."
    },
    {
      question: "Quelle est la taille des groupes ?",
      answer: "Pour les visites guidées, nous limitons les groupes à 8-10 personnes maximum pour garantir une expérience de qualité. Les retraites bien-être accueillent jusqu'à 12 participants. Les visites privées sont adaptées à votre groupe (1-8 personnes)."
    },
    {
      question: "Que se passe-t-il en cas de mauvais temps ?",
      answer: "Votre sécurité est notre priorité. En cas de conditions météorologiques défavorables, nous proposons soit une date de report, soit une activité alternative adaptée. Les annulations météo sont gratuites et sans frais."
    },
    {
      question: "Proposez-vous des visites en d'autres langues que le français et l'anglais ?",
      answer: "Nous proposons principalement nos services en français et anglais. Pour d'autres langues (allemand, espagnol, italien), merci de nous contacter à l'avance. Nous pouvons faire appel à des guides partenaires selon disponibilité."
    },
    {
      question: "Quel niveau physique est requis pour les randonnées ?",
      answer: "Nous proposons des randonnées pour tous les niveaux, de la balade familiale facile aux randonnées plus sportives. Le niveau de difficulté est toujours indiqué dans la description. N'hésitez pas à nous contacter pour des conseils personnalisés."
    },
    {
      question: "Faut-il avoir son propre équipement ?",
      answer: "Pour les randonnées, il faut prévoir de bonnes chaussures de marche et des vêtements adaptés. Nous fournissons les bâtons de marche si nécessaire. Pour les retraites bien-être, les tapis de yoga sont fournis."
    },
    {
      question: "Puis-je annuler ou modifier ma réservation ?",
      answer: "Les annulations jusqu'à 15 jours avant la date prévue sont remboursées à 100% (hors frais de dossier de 20€). Entre 15 et 7 jours : 50% de remboursement. Moins de 7 jours : aucun remboursement sauf cas de force majeure."
    },
    {
      question: "Les enfants sont-ils les bienvenus ?",
      answer: "Absolument ! Nous avons des activités spécialement conçues pour les familles (Rendez-vous Nature en Famille). Pour les autres visites, l'âge minimum recommandé varie selon l'activité. Contactez-nous pour des recommandations adaptées."
    },
    {
      question: "Proposez-vous un service de transfert depuis l'aéroport ?",
      answer: "Oui, nous proposons des transferts depuis l'aéroport de Genève avec possibilité de visite guidée en cours de route. Ce service est disponible sur réservation pour les visites privées et les retraites."
    },
    {
      question: "Peut-on personnaliser les itinéraires ?",
      answer: "Oui ! Les visites privées sont entièrement personnalisables selon vos envies, votre rythme et vos centres d'intérêt. Contactez-nous pour créer ensemble votre expérience sur-mesure."
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
            className="text-5xl md:text-6xl font-playfair font-bold mb-4"
          >
            Contactez-Nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-montserrat max-w-2xl mx-auto"
          >
            Une question ? Un projet de visite ? Nous sommes là pour vous répondre
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
              <h2 className="text-3xl font-playfair font-bold text-stone-dark mb-6">
                Envoyez-nous un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-montserrat font-semibold text-stone-dark mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-light rounded-lg focus:outline-none focus:ring-2 focus:ring-lake font-montserrat"
                    placeholder="Votre nom"
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
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-montserrat font-semibold text-stone-dark mb-2">
                    Téléphone
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
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-light rounded-lg focus:outline-none focus:ring-2 focus:ring-lake font-montserrat"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="visite-guidee">Visite guidée</option>
                    <option value="visite-privee">Visite privée</option>
                    <option value="nature-famille">Rendez-vous Nature en Famille</option>
                    <option value="retraite">Retraite bien-être</option>
                    <option value="autre">Autre demande</option>
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
                    placeholder="Parlez-nous de votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-lake text-white py-3 px-6 rounded-lg font-montserrat font-semibold hover:bg-lake-dark transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Envoyer le message
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
                <h3 className="text-2xl font-playfair font-bold text-stone-dark mb-6">
                  Informations de contact
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-lake rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-stone-dark mb-1">Email</h4>
                      <a href="mailto:contact@aixplore-tourism.com" className="text-lake hover:text-lake-dark font-montserrat">
                        contact@aixplore-tourism.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-lake rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-stone-dark mb-1">Téléphone</h4>
                      <a href="tel:+33612345678" className="text-lake hover:text-lake-dark font-montserrat">
                        +33 6 12 34 56 78
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-lake rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-stone-dark mb-1">Localisation</h4>
                      <p className="text-stone font-montserrat">
                        Annecy, Haute-Savoie<br />
                        Auvergne-Rhône-Alpes, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-lake rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-stone-dark mb-1">Horaires</h4>
                      <p className="text-stone font-montserrat">
                        Lun - Sam : 9h00 - 19h00<br />
                        Dimanche : Sur rendez-vous
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-gradient-to-br from-lake-light to-gold-light p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-playfair font-bold text-stone-dark mb-4">
                  Suivez-nous
                </h3>
                <p className="text-stone font-montserrat mb-6">
                  Découvrez nos dernières aventures et conseils sur les réseaux sociaux
                </p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-lake hover:text-white transition-all duration-300 shadow-md"
                    aria-label="Facebook"
                  >
                    <span className="text-2xl">f</span>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-lake hover:text-white transition-all duration-300 shadow-md"
                    aria-label="Instagram"
                  >
                    <span className="text-2xl">📷</span>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-lake hover:text-white transition-all duration-300 shadow-md"
                    aria-label="YouTube"
                  >
                    <span className="text-2xl">▶</span>
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
            <h2 className="text-4xl font-playfair font-bold text-stone-dark mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-lg text-stone font-montserrat">
              Trouvez rapidement les réponses à vos questions
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
                    <p className="text-stone font-montserrat leading-relaxed">
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

