export const translations = {
  fr: {
    nav: {
      home: "Page d'accueil",
      guidedTours: "Visites guidées",
      privateTours: "Visites privées",
      familyNature: "Rendez-vous Nature en Famille",
      wellnessRetreats: "Retraites bien-être en montagne",
      favorites: "Nos coups de cœur",
      about: "À propos",
      contact: "Nous contacter"
    },
    home: {
      title: "Aixplore Tourism",
      subtitle: "Découvrez les Alpes autrement",
      description: "Explorez la beauté des Alpes françaises à travers nos visites guidées, retraites bien-être et activités nature en famille.",
      ctaRetreats: "Voir les prochaines retraites",
      experiences: "Nos Expériences",
      readyForAdventure: "Prêt pour l'aventure ?",
      contactForNext: "Contactez-nous pour planifier votre prochaine expérience dans les Alpes"
    },
    common: {
      discover: "Découvrir",
      bookNow: "Réserver maintenant",
      learnMore: "En savoir plus",
      contact: "Contactez-nous",
      readMore: "Lire la suite"
    },
    guidedTours: {
      title: "Visites Guidées",
      subtitle: "Découvrez les Alpes avec nos guides expérimentés",
      hiking: "Randonnées",
      excursions: "Excursions Demi-Journée ou Journée"
    },
    privateTours: {
      title: "Visites Privées",
      subtitle: "Des expériences sur-mesure, rien que pour vous"
    },
    familyNature: {
      title: "Rendez-vous Nature en Famille",
      subtitle: "Des activités ludiques et éducatives pour découvrir la nature alpine"
    },
    retreats: {
      title: "Retraites Bien-être en Montagne",
      subtitle: "Ressourcez-vous au cœur des Alpes"
    },
    favorites: {
      title: "Nos Coups de Cœur",
      subtitle: "Les lieux secrets et incontournables que nous adorons partager"
    },
    about: {
      title: "À Propos",
      subtitle: "L'histoire d'une passion pour les Alpes"
    },
    contact: {
      title: "Contactez-Nous",
      subtitle: "Une question ? Un projet de visite ? Nous sommes là pour vous répondre"
    }
  },
  en: {
    nav: {
      home: "Home",
      guidedTours: "Guided Tours",
      privateTours: "Private Tours",
      familyNature: "Family Nature Outings",
      wellnessRetreats: "Mountain Wellness Retreats",
      favorites: "Our Favorites",
      about: "About",
      contact: "Contact Us"
    },
    home: {
      title: "Aixplore Tourism",
      subtitle: "Discover the Alps differently",
      description: "Explore the beauty of the French Alps through our guided tours, wellness retreats and family nature activities.",
      ctaRetreats: "View upcoming retreats",
      experiences: "Our Experiences",
      readyForAdventure: "Ready for adventure?",
      contactForNext: "Contact us to plan your next Alpine experience"
    },
    common: {
      discover: "Discover",
      bookNow: "Book now",
      learnMore: "Learn more",
      contact: "Contact us",
      readMore: "Read more"
    },
    guidedTours: {
      title: "Guided Tours",
      subtitle: "Discover the Alps with our experienced guides",
      hiking: "Hiking",
      excursions: "Half-Day or Full-Day Excursions"
    },
    privateTours: {
      title: "Private Tours",
      subtitle: "Tailor-made experiences, just for you"
    },
    familyNature: {
      title: "Family Nature Outings",
      subtitle: "Fun and educational activities to discover Alpine nature"
    },
    retreats: {
      title: "Mountain Wellness Retreats",
      subtitle: "Recharge in the heart of the Alps"
    },
    favorites: {
      title: "Our Favorites",
      subtitle: "Secret and must-see places we love to share"
    },
    about: {
      title: "About",
      subtitle: "The story of a passion for the Alps"
    },
    contact: {
      title: "Contact Us",
      subtitle: "A question? A visit project? We're here to answer"
    }
  }
};

export function getTranslation(locale, key) {
  const keys = key.split('.');
  let value = translations[locale];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

