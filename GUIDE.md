# Guide de Démarrage - Aixplore Tourism

## 🚀 Démarrage rapide

### 1. Installation des dépendances

```bash
cd ~/Desktop/aixplore-tourism
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur : **http://localhost:3000**

Il vous redirigera automatiquement vers la version française : **http://localhost:3000/fr**

## 📁 Ajout d'images

Pour que le site affiche correctement les images, vous devez ajouter vos photos dans le dossier `/public/images/`.

### Images requises :

#### Hero Images (images principales)
- `hero-alps.jpg` - Page d'accueil
- `hiking-hero.jpg` - Visites guidées
- `private-tour-hero.jpg` - Visites privées
- `family-nature-hero.jpg` - Nature en famille
- `wellness-retreat-hero.jpg` - Retraites bien-être
- `favorites-hero.jpg` - Coups de cœur
- `about-hero.jpg` - À propos

#### Visites Guidées
- `lac-annecy.jpg`
- `cretes.jpg`
- `foret.jpg`
- `mont-blanc.jpg`
- `villages.jpg`
- `cascades.jpg`

#### Visites Privées
- `private-mont-blanc.jpg`
- `private-annecy.jpg`
- `private-hiking.jpg`
- `private-gastro.jpg`
- `private-photo.jpg`
- `private-airport.jpg`

#### Nature en Famille
- `family-tracks.jpg`
- `family-forest.jpg`
- `family-cabins.jpg`
- `family-birds.jpg`
- `family-water.jpg`
- `family-plants.jpg`

#### Retraites Bien-être
- `retreat-spring.jpg`
- `retreat-summer.jpg`
- `retreat-autumn.jpg`
- `retreat-october.jpg`

#### Coups de Cœur
- `fav-annecy-sunrise.jpg`
- `fav-talloires.jpg`
- `fav-cascade-angon.jpg`
- `fav-forclaz.jpg`
- `fav-gorges-fier.jpg`
- `fav-marche-chambery.jpg`
- `fav-semnoz.jpg`
- `fav-chateau-menthon.jpg`
- `fav-jardins-annecy.jpg`
- `fav-beccaz.jpg`
- `fav-belvedere.jpg`
- `fav-bout-lac.jpg`

**Format recommandé :** JPEG ou WebP, dimensions entre 1920x1080 et 2560x1440 pour les hero images, 800x600 minimum pour les cartes.

## 🌐 Navigation entre les langues

Le site est disponible en français et anglais :
- **Français** : http://localhost:3000/fr
- **Anglais** : http://localhost:3000/en

Le changement de langue se fait via les boutons FR/EN en bas de la sidebar.

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `tailwind.config.js`. Vous pouvez les modifier :

```javascript
colors: {
  beige: {
    light: '#F5F1E8',
    DEFAULT: '#E8E2D5',
  },
  lake: {
    light: '#D4E4ED',
    DEFAULT: '#A8C5D8',
    dark: '#6B8FA3',
  },
  // ...
}
```

### Traductions

Toutes les traductions sont dans `/lib/translations.js`. Pour ajouter ou modifier du texte :

```javascript
export const translations = {
  fr: {
    // Vos traductions françaises
  },
  en: {
    // Vos traductions anglaises
  }
};
```

### Contenu des pages

Chaque page se trouve dans `/app/[locale]/nom-de-la-page/page.js`. Vous pouvez modifier le contenu directement dans ces fichiers.

## 📱 Navigation Mobile

Sur mobile, le menu est accessible via le bouton hamburger en haut à gauche.

## 🔧 Structure des composants

### Card Component
Utilisé pour afficher les activités/visites :
```javascript
<Card
  title="Titre"
  description="Description"
  image="/images/mon-image.jpg"
  href="/fr/ma-page"
  date="Date optionnelle"
  buttonText="Texte du bouton"
/>
```

### Button Component
Bouton réutilisable avec plusieurs variantes :
```javascript
<Button href="/fr/contact" variant="primary">
  Contactez-nous
</Button>
```

Variantes : `primary`, `secondary`, `gold`

### ParallaxSection Component
Section avec effet parallax :
```javascript
<ParallaxSection image="/images/hero.jpg" height="h-screen">
  <div>Votre contenu ici</div>
</ParallaxSection>
```

## 🚢 Déploiement

### Build de production

```bash
npm run build
```

### Démarrer en production

```bash
npm start
```

### Déploiement sur Vercel

Le plus simple pour déployer Next.js :

1. Créez un compte sur [Vercel](https://vercel.com)
2. Connectez votre repository GitHub
3. Vercel détectera automatiquement Next.js
4. Cliquez sur "Deploy"

## 📞 Informations de contact à personnaliser

N'oubliez pas de personnaliser les informations de contact dans la page Contact :
- Email
- Téléphone
- Adresse
- Réseaux sociaux

## ⚠️ Notes importantes

1. Les images utilisées actuellement sont des placeholders. Remplacez-les par vos vraies photos.
2. Le formulaire de contact envoie uniquement une alerte pour l'instant. Vous devrez intégrer un service d'envoi d'emails (comme EmailJS ou SendGrid).
3. Les liens des réseaux sociaux dans le footer pointent vers "#" - remplacez-les par vos vrais liens.

## 🐛 Résolution de problèmes

### Le site ne démarre pas
```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Les images ne s'affichent pas
- Vérifiez que les images sont bien dans `/public/images/`
- Vérifiez que les noms de fichiers correspondent exactement
- Next.js est sensible à la casse : `Hero.jpg` ≠ `hero.jpg`

### Erreur de build
```bash
# Nettoyez le cache Next.js
rm -rf .next
npm run dev
```

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation Framer Motion](https://www.framer.com/motion/)

---

Bon développement ! 🏔️✨

