# Aixplore Tourism 🏔️

Site web pour Aixplore Tourism - Découvrez les Alpes autrement

## Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **React 18** - Bibliothèque JavaScript
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Bibliothèque d'animations
- **JavaScript** - Langage de programmation

## Fonctionnalités

### Pages principales

1. **Page d'accueil** - Présentation immersive avec effet parallax
2. **Visites guidées** - Randonnées et excursions (demi-journée/journée)
3. **Visites privées** - Expériences personnalisées sur-mesure
4. **Rendez-vous Nature en Famille** - Activités ludiques et éducatives
5. **Retraites bien-être en montagne** - 4 retraites annuelles (2025)
6. **Nos coups de cœur** - Guide d'inspiration locale
7. **À propos** - Histoire et valeurs + avis clients
8. **Contact** - Formulaire + FAQ

### Caractéristiques

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Barre de navigation latérale élégante
- ✅ Site bilingue (français/anglais)
- ✅ Animations fluides et transitions douces
- ✅ Effet parallax sur les images
- ✅ Composants réutilisables (cartes, boutons)
- ✅ Palette de couleurs naturelles (beige, bleu lac, gris pierre, doré)
- ✅ Typographies : Playfair Display (titres) et Montserrat (textes)

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000 dans votre navigateur
```

## Scripts disponibles

```bash
npm run dev      # Démarre le serveur de développement
npm run build    # Compile l'application pour la production
npm run start    # Démarre le serveur de production
npm run lint     # Vérifie le code avec ESLint
```

## Structure du projet

```
aixplore-tourism/
├── app/
│   ├── [locale]/           # Routes internationalisées
│   │   ├── layout.js       # Layout avec sidebar
│   │   ├── page.js         # Page d'accueil
│   │   ├── visites-guidees/
│   │   ├── visites-privees/
│   │   ├── nature-famille/
│   │   ├── retraites-bien-etre/
│   │   ├── coups-de-coeur/
│   │   ├── a-propos/
│   │   └── contact/
│   ├── layout.js           # Layout racine
│   ├── page.js             # Redirection vers /fr
│   └── globals.css         # Styles globaux
├── components/
│   ├── Sidebar.js          # Barre de navigation latérale
│   ├── Card.js             # Composant carte
│   ├── Button.js           # Composant bouton
│   └── ParallaxSection.js  # Section avec effet parallax
├── lib/
│   ├── translations.js     # Traductions FR/EN
│   └── i18n.js            # Configuration i18n
└── public/
    └── images/            # Images du site (à ajouter)
```

## Configuration des couleurs

Les couleurs du thème sont définies dans `tailwind.config.js` :

- **Beige** : Tons clairs et chaleureux (#F5F1E8, #E8E2D5)
- **Lake** : Bleu lac (#D4E4ED, #A8C5D8, #6B8FA3)
- **Stone** : Gris pierre (#E0DDD8, #9C9A95, #5A5854)
- **Gold** : Doré discret (#F4EFE0, #D4AF37)

## Prochaines étapes

### Images à ajouter dans `/public/images/` :

- hero-alps.jpg
- hiking-hero.jpg
- private-tour-hero.jpg
- family-nature-hero.jpg
- wellness-retreat-hero.jpg
- favorites-hero.jpg
- about-hero.jpg
- Et toutes les images spécifiques à chaque activité/retraite

### Fonctionnalités futures

- [ ] Système de réservation en ligne
- [ ] Intégration d'une carte interactive
- [ ] Blog pour partager des récits d'aventures
- [ ] Galerie photos
- [ ] Système de paiement en ligne
- [ ] Espace client
- [ ] Newsletter

## Références de design

Le site s'inspire de :
- Aix Riviera des Alpes
- Agence 1789
- Château Brachet
- Namastrip (pour les retraites)

## Support navigateurs

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)

## Licence

© 2025 Aixplore Tourism. Tous droits réservés.

## Contact

Pour toute question concernant le développement du site :
- Email : contact@aixplore-tourism.com
- Site web : [à venir]

---

Développé avec ❤️ pour partager la beauté des Alpes
