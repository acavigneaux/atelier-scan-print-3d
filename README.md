# Atelier Scan & Print 3D - Site Web One-Page

Site vitrine professionnel pour activité de scan 3D, impression 3D et modélisation 3D.

## 📁 Structure du projet

```
/
├── index.html          # Structure HTML complète
├── style.css           # Styles CSS (design, responsive)
├── script.js           # Interactions JavaScript
└── README.md           # Ce fichier
```

## 🚀 Mise en ligne

Le site est 100% statique (HTML/CSS/JS). Vous pouvez le déployer sur :

- **GitHub Pages** (gratuit)
- **Netlify** (gratuit, recommandé)
- **Vercel** (gratuit)
- **Votre serveur web** (Apache, Nginx)

### Déploiement rapide sur Netlify

1. Créer un compte sur [netlify.com](https://www.netlify.com)
2. Glisser-déposer le dossier complet sur Netlify
3. Votre site est en ligne !

## 🎨 Personnalisation

### 1. Couleurs

Modifiez les variables CSS dans `style.css` (lignes 6-11) :

```css
:root {
    --color-primary: #1B4332;        /* Vert foncé principal */
    --color-primary-light: #52B788;  /* Vert clair accent */
    --color-white: #FFFFFF;
    --color-background: #F8F9FA;
    --color-text: #2D3748;
}
```

### 2. Contenu texte

Modifiez directement dans `index.html` :

- **Titres et sous-titres** : Sections `hero-title`, `hero-subtitle`
- **Services** : Cartes `.service-card`
- **Process** : Étapes `.process-step`
- **Contact** : Email dans `href="mailto:votre@email.fr"`

### 3. Images

Pour remplacer les placeholders :

1. Ajoutez vos images dans un dossier `/images`
2. Dans `index.html`, remplacez :

```html
<!-- Avant -->
<div class="placeholder-img"></div>

<!-- Après -->
<img src="images/votre-image.jpg" alt="Description" loading="lazy">
```

### 4. Typographie

Modifiez la police dans `style.css` (ligne 20) :

```css
--font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

Pour une police Google Fonts :

1. Ajoutez dans `<head>` de `index.html` :
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
```

2. Modifiez dans `style.css` :
```css
--font-family: 'Inter', sans-serif;
```

## 📧 Configuration du contact

Actuellement configuré avec `mailto:` :

```html
<a href="mailto:contact@atelier-scan3d.fr" class="btn btn-primary">Demander un devis</a>
```

### Options alternatives :

1. **Formulaire de contact** : Intégrer FormSpree, Netlify Forms ou Typeform
2. **Calendrier de rendez-vous** : Calendly, Cal.com
3. **Chat en direct** : Crisp, Tawk.to

## 🎯 Sections du site

1. **Hero** - Titre principal et appel à l'action
2. **Services** - Scan 3D, Impression 3D, Modélisation
3. **Confiance** - 4 arguments de réassurance
4. **Process** - 4 étapes du workflow
5. **Réalisations** - Grille de 6 projets (placeholders)
6. **Contact** - CTA final avec bouton email
7. **Footer** - Informations légales

## 📱 Responsive

Le site est optimisé pour :
- **Desktop** : > 1024px
- **Tablette** : 768px - 1024px
- **Mobile** : < 768px

Testez sur différents appareils ou avec les DevTools Chrome (F12).

## ⚡ Fonctionnalités JavaScript

- **Smooth scroll** : Navigation fluide entre sections
- **Animations au scroll** : Apparition progressive des cartes
- **Lazy loading** : Prêt pour charger les images à la demande
- **Accessibility** : Respect de `prefers-reduced-motion`

## 🔧 Améliorations futures

### Court terme
- [ ] Ajouter vos vraies images de réalisations
- [ ] Personnaliser l'email de contact
- [ ] Ajouter un logo dans le hero
- [ ] Configurer les meta tags Open Graph pour les réseaux sociaux

### Moyen terme
- [ ] Intégrer Google Analytics ou Plausible
- [ ] Ajouter un formulaire de contact fonctionnel
- [ ] Créer une page mentions légales
- [ ] Optimiser les images (WebP, compression)

### Long terme
- [ ] Blog ou actualités
- [ ] Galerie de projets détaillée
- [ ] Configurateur de devis en ligne
- [ ] Espace client

## 📊 SEO

Pour améliorer le référencement :

1. **Meta tags** (déjà présents dans `<head>`) :
   - `description`, `title`

2. **À ajouter** dans `<head>` :

```html
<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:title" content="Atelier Scan & Print 3D">
<meta property="og:description" content="Scan 3D, impression 3D et modélisation professionnelle">
<meta property="og:image" content="https://votresite.fr/images/og-image.jpg">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">

<!-- Favicon -->
<link rel="icon" type="image/png" href="images/favicon.png">
```

3. **Google Search Console** : Soumettre votre sitemap

## 🛠 Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Design moderne (Grid, Flexbox, Custom Properties)
- **JavaScript ES6** - Interactions (Intersection Observer API)
- **Aucune dépendance externe** - Site ultra-léger et performant

## 📞 Support

Pour toute question ou personnalisation avancée :
- Référez-vous aux commentaires dans le code
- Testez les modifications en local avant de déployer
- Utilisez les DevTools du navigateur (F12) pour déboguer

## ✅ Checklist avant mise en ligne

- [ ] Remplacer les placeholders par vos images
- [ ] Modifier l'email de contact
- [ ] Personnaliser les textes
- [ ] Tester sur mobile
- [ ] Vérifier tous les liens
- [ ] Optimiser les images (< 200kb chacune)
- [ ] Ajouter un favicon
- [ ] Configurer les meta tags
- [ ] Tester les formulaires/emails
- [ ] Vérifier l'orthographe

---

**Bon lancement ! 🚀**
