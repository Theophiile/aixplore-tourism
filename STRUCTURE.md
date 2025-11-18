# Structure du Projet Aixplore Tourism

```
aixplore-tourism/
│
├── 📄 Configuration
│   ├── .eslintrc.json          # Configuration ESLint
│   ├── jsconfig.json            # Configuration JavaScript
│   ├── next.config.mjs          # Configuration Next.js
│   ├── postcss.config.mjs       # Configuration PostCSS
│   ├── tailwind.config.js       # Configuration Tailwind (couleurs personnalisées)
│   ├── package.json             # Dépendances du projet
│   └── .gitignore              # Fichiers à ignorer par Git
│
├── 📚 Documentation
│   ├── README.md               # Documentation technique
│   ├── GUIDE.md                # Guide de démarrage
│   ├── TERMINE.md              # Résumé du projet terminé
│   └── STRUCTURE.md            # Ce fichier
│
├── 🎨 App (Pages Next.js)
│   ├── layout.js               # Layout racine (fonts, metadata)
│   ├── page.js                 # Redirection vers /fr
│   ├── globals.css             # Styles globaux
│   │
│   └── [locale]/               # Routes internationalisées (fr/en)
│       ├── layout.js           # Layout avec Sidebar
│       ├── page.js             # Page d'accueil
│       │
│       ├── visites-guidees/
│       │   └── page.js         # Randonnées + Excursions
│       │
│       ├── visites-privees/
│       │   └── page.js         # Visites sur-mesure
│       │
│       ├── nature-famille/
│       │   └── page.js         # Activités famille
│       │
│       ├── retraites-bien-etre/
│       │   └── page.js         # 4 retraites 2025
│       │
│       ├── coups-de-coeur/
│       │   └── page.js         # Guide local
│       │
│       ├── a-propos/
│       │   └── page.js         # Histoire + Témoignages
│       │
│       └── contact/
│           └── page.js         # Formulaire + FAQ
│
├── 🧩 Components (Composants réutilisables)
│   ├── Sidebar.js              # Navigation latérale (mobile + desktop)
│   ├── Card.js                 # Carte pour activités/visites
│   ├── Button.js               # Bouton avec 3 variantes
│   └── ParallaxSection.js      # Section avec effet parallax
│
├── 🌍 Lib (Bibliothèques)
│   ├── translations.js         # Traductions FR/EN
│   └── i18n.js                 # Configuration i18n
│
├── 📁 Public
│   └── images/                 # Images du site (à remplir)
│       └── .gitkeep
│
└── 🔧 Utils (Utilitaires)
    └── (vide pour l'instant)
```

## 📊 Statistiques

- **Total pages** : 8 pages × 2 langues = 16 pages
- **Composants** : 4 composants réutilisables
- **Lignes de code** : ~2500 lignes
- **Taille du build** : ~145 KB par page
- **Images requises** : ~40 images

## 🎯 Fonctionnalités par page

### 1. Page d'accueil (/)
- Hero avec effet parallax
- Section descriptive
- 3 cartes highlights
- CTA vers retraites et contact

### 2. Visites guidées
- Hero section
- 2 sections : Randonnées + Excursions
- 6 cartes d'activités
- Infos pratiques

### 3. Visites privées
- Hero section
- Encadré de personnalisation
- 6 prestations privées
- CTA devis

### 4. Nature en Famille
- Hero section
- Introduction avec 3 avantages
- 6 activités 2025
- Infos pratiques détaillées

### 5. Retraites bien-être
- Hero fullscreen avec CTA
- 3 piliers (yoga, nature, alimentation)
- 4 retraites 2025
- Programme type journée
- Infos & tarifs

### 6. Coups de cœur
- Hero section
- Introduction
- 12 lieux par catégories
- Carte interactive (placeholder)
- CTA conseils

### 7. À propos
- Hero section
- Histoire + photo
- 3 valeurs
- Certifications
- Témoignages défilants (6)
- CTA contact

### 8. Contact
- Hero section
- Formulaire complet (5 champs)
- Informations de contact
- Réseaux sociaux
- FAQ (10 questions)

## 🎨 Design System

### Couleurs
```javascript
beige: {
  light: '#F5F1E8',
  DEFAULT: '#E8E2D5'
}
lake: {
  light: '#D4E4ED',
  DEFAULT: '#A8C5D8',
  dark: '#6B8FA3'
}
stone: {
  light: '#E0DDD8',
  DEFAULT: '#9C9A95',
  dark: '#5A5854'
}
gold: {
  light: '#F4EFE0',
  DEFAULT: '#D4AF37'
}
```

### Typographies
- **Titres** : Playfair Display
- **Textes** : Montserrat

### Animations
- Framer Motion
- Fade in/out
- Slide in/out
- Parallax scroll
- Hover effects

## 🚀 Routes disponibles

### Français
- `/fr` - Accueil
- `/fr/visites-guidees`
- `/fr/visites-privees`
- `/fr/nature-famille`
- `/fr/retraites-bien-etre`
- `/fr/coups-de-coeur`
- `/fr/a-propos`
- `/fr/contact`

### Anglais
- `/en` - Home
- `/en/visites-guidees`
- `/en/visites-privees`
- `/en/nature-famille`
- `/en/retraites-bien-etre`
- `/en/coups-de-coeur`
- `/en/a-propos`
- `/en/contact`

## 📦 Dépendances

```json
{
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.33",
    "framer-motion": "^11.18.2"
  },
  "devDependencies": {
    "eslint": "^8",
    "eslint-config-next": "14.2.33",
    "postcss": "^8",
    "tailwindcss": "^3.4.1"
  }
}
```

## ✅ Checklist de completion

- [x] Configuration Next.js 14
- [x] Tailwind CSS configuré
- [x] Framer Motion installé
- [x] 8 pages créées
- [x] Système bilingue (FR/EN)
- [x] Sidebar responsive
- [x] 4 composants réutilisables
- [x] Animations et effets
- [x] Build sans erreur
- [x] Documentation complète
- [ ] Images à ajouter
- [ ] Formulaire email à configurer
- [ ] Déploiement

---

**Projet créé le** : 15 novembre 2025  
**Status** : ✅ Terminé et fonctionnel  
**Prêt pour** : Personnalisation et déploiement

