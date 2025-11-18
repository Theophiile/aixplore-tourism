# Guide pour le Site Bilingue FR/EN

## 📋 État Actuel

### ✅ Ce qui est déjà bilingue
- Navigation (Sidebar)
- Structure des routes (`/fr` et `/en`)
- Fichier `translations.js` avec traductions de base

### 📝 Ce qui reste en français uniquement
La plupart du contenu des pages est actuellement **hardcodé en français** directement dans les composants React.

## 🌍 Options pour Rendre le Site Bilingue

### Option 1 : Refactoriser avec le système de traductions (Recommandé)
**Avantages :**
- Maintenance plus facile
- Un seul fichier par page
- Changement de langue dynamique

**Comment faire :**
1. Ajouter toutes les traductions dans `lib/translations.js`
2. Remplacer le texte hardcodé par des clés de traduction
3. Utiliser `getTranslation(locale, 'key')` partout

**Exemple :**
```javascript
// Avant
<h1>Retraites Bien-être en Montagne</h1>

// Après  
<h1>{t('retreats.title')}</h1>
```

### Option 2 : Pages séparées par langue
**Avantages :**
- Plus simple à mettre en place
- Pas besoin de refactoriser

**Comment faire :**
1. Dupliquer les pages
2. Traduire le contenu manuellement
3. Utiliser des conditions sur `locale` pour afficher le bon contenu

**Exemple :**
```javascript
{locale === 'fr' ? (
  <p>Texte en français</p>
) : (
  <p>English text</p>
)}
```

### Option 3 : Utiliser le fichier de référence
**Utilisation :**
Le fichier `TRANSLATIONS_REFERENCE.md` contient **toutes les traductions en anglais** du contenu principal.

Vous pouvez l'utiliser pour :
- Créer manuellement les versions anglaises
- Référence pour une future refactorisation
- Documentation pour traducteurs

## 📄 Fichier TRANSLATIONS_REFERENCE.md

Ce fichier contient les traductions complètes pour :

### Page À propos
- Introduction poétique
- L'esprit Aixplore
- Présentation d'Anaïs Husson
- Les 4 valeurs
- Témoignages (gardés dans leur langue d'origine)

### Page Retraites bien-être
- Introduction
- Régime cétogène
- Déconnexion numérique
- Les 4 retraites (Légèreté, Rayonner, Essence féminine, Renaissance)
- Tarifs

### Page Visites guidées
- Introduction
- 2 randonnées (Croix du Nivolet, Lac d'Annecy)
- 4 excursions
- Informations pratiques

### Page Visites privées
- Introduction
- 7 inspirations de visites
- Langues et accompagnement
- Offrir une expérience
- Réservation

## 🚀 Marche à Suivre Recommandée

### Étape 1 : Décider de l'approche
Choisir entre Option 1 (refactorisation) ou Option 2 (pages séparées)

### Étape 2 : Commencer par une page test
Par exemple, la page d'accueil qui est plus simple

### Étape 3 : Utiliser le fichier de référence
Copier-coller les traductions depuis `TRANSLATIONS_REFERENCE.md`

### Étape 4 : Tester
Vérifier que tout fonctionne en naviguant entre `/fr` et `/en`

### Étape 5 : Répéter pour toutes les pages
Appliquer la même méthode aux autres pages

## 📋 Checklist des Pages à Traduire

- [ ] Page d'accueil (`/[locale]/page.js`)
- [ ] À propos (`/[locale]/a-propos/page.js`)
- [ ] Visites guidées (`/[locale]/visites-guidees/page.js`)
  - [ ] Croix du Nivolet (`/[locale]/visites-guidees/croix-nivolet/page.js`)
  - [ ] Lac d'Annecy (`/[locale]/visites-guidees/lac-annecy/page.js`)
- [ ] Visites privées (`/[locale]/visites-privees/page.js`)
- [ ] Retraites bien-être (`/[locale]/retraites-bien-etre/page.js`)
  - [ ] Légèreté (`/[locale]/retraites-bien-etre/legerete/page.js`)
  - [ ] Rayonner (`/[locale]/retraites-bien-etre/rayonner/page.js`)
  - [ ] Essence féminine (`/[locale]/retraites-bien-etre/essence-feminine/page.js`)
  - [ ] Renaissance (`/[locale]/retraites-bien-etre/renaissance/page.js`)
- [ ] Nature en famille (`/[locale]/nature-famille/page.js`)
- [ ] Coups de cœur (`/[locale]/coups-de-coeur/page.js`)
- [ ] Contact (`/[locale]/contact/page.js`)

## 💡 Conseils

### Pour les témoignages
Les témoignages sont **authentiques** et dans leur langue d'origine.  
**Ne pas les traduire** - les garder tels quels.

### Pour les citations d'Anaïs
Soit :
- Les traduire en anglais
- Soit les garder en français avec une note "Originally in French"

### Pour les emojis
Les emojis sont **universels** - les garder identiques dans les deux langues.

### Pour les noms propres
- Noms de lieux : **ne pas traduire** (Mont Revard, Lac d'Annecy, etc.)
- Noms de personnes : **ne pas traduire** (Anaïs Husson)
- Noms d'entreprises : **ne pas traduire** (Aixplore Tourism)

## 🔗 Ressources

- `lib/translations.js` - Fichier de traductions actuel
- `TRANSLATIONS_REFERENCE.md` - Toutes les traductions en anglais
- Next.js i18n documentation : https://nextjs.org/docs/app/building-your-application/routing/internationalization

## 📞 Besoin d'Aide ?

Si vous avez besoin d'aide pour implémenter les traductions, n'hésitez pas !

---

**Créé le :** 18 novembre 2025  
**Statut :** Documentation complète disponible  
**Prochaine étape :** Choisir l'approche et commencer l'implémentation

