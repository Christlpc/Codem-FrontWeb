# 📦 Installation et Configuration

## Étapes d'installation

### 1. Installer les dépendances

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 2. Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```bash
# Mapbox (obligatoire pour la carte)
NEXT_PUBLIC_MAPBOX_TOKEN=votre_token_mapbox_ici

# API Backend (déjà configuré)
NEXT_PUBLIC_API_URL=https://codemback-1.onrender.com/api
```

#### Obtenir votre token Mapbox :

1. Créez un compte gratuit sur [mapbox.com](https://account.mapbox.com/auth/signup/)
2. Allez dans [Access Tokens](https://account.mapbox.com/access-tokens/)
3. Copiez votre token par défaut ou créez-en un nouveau
4. Collez-le dans `.env.local`

### 3. Lancer le serveur de développement

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🎯 Nouvelles fonctionnalités ajoutées

### Page de Réservation (`/reserver`)

Formulaire multi-étapes complet avec :
- ✅ Validation avec Zod et React Hook Form
- ✅ 4 étapes : Adresses, Logement, Objets, Contact
- ✅ Sélecteur d'objets interactif avec recherche
- ✅ Stepper visuel avec progression
- ✅ Intégration avec l'API backend
- ✅ Gestion des messages de succès/erreur
- ✅ Store Zustand pour la persistance

### Composants UI supplémentaires

- `Checkbox` - Cases à cocher Radix UI
- `Textarea` - Zone de texte multiligne
- `Alert` - Composant d'alerte pour messages
- `StepperNav` - Navigation par étapes
- `ItemSelector` - Sélecteur d'objets avec compteurs

### Stores Zustand

- `booking-store.ts` - Gestion des réservations (existant)
- `devis-store.ts` - Gestion des demandes de devis (nouveau)

### Pages créées

1. `/reserver` - Formulaire de réservation complet
2. `/services` - Détails des services
3. `/tarifs` - Grille de tarifs et calculateur
4. `/contact` - Formulaire de contact
5. `/comment-ca-marche` - Processus détaillé

## 📚 Nouvelles dépendances

```json
{
  "@hookform/resolvers": "^3.3.4",
  "@radix-ui/react-checkbox": "^1.0.4",
  "react-hook-form": "^7.51.3",
  "zod": "^3.23.6"
}
```

## 🔗 Navigation mise à jour

Tous les boutons "Réserver maintenant" redirigent maintenant vers `/reserver` :
- Hero section
- Navbar (desktop et mobile)
- Cartes de services
- Pages de tarifs

## 🎨 Cartes Services - Style Bolt

Les cartes de la section services ont été redesignées avec :
- Images en plein écran avec overlay gradient
- Layout vertical (titre en haut, CTA en bas)
- Effets hover avec scale et shadow
- Hauteur fixe de 500px
- Design moderne et impactant

## 🚀 Pour déployer

### Vercel (recommandé)

1. Connectez votre repository GitHub
2. Configurez les variables d'environnement dans Vercel
3. Déployez automatiquement

### Autres plateformes

```bash
npm run build
npm start
```

## 📝 Structure des fichiers ajoutés

```
app/
├── reserver/
│   └── page.tsx                    # Page de réservation
├── comment-ca-marche/
│   └── page.tsx                    # Comment ça marche

components/
├── booking/
│   ├── item-selector.tsx           # Sélecteur d'objets
│   └── stepper-nav.tsx             # Navigation par étapes
├── how-it-works/
│   └── how-it-works-detail.tsx     # Détails du processus
└── ui/
    ├── checkbox.tsx                # Nouveau composant
    ├── textarea.tsx                # Nouveau composant
    └── alert.tsx                   # Nouveau composant

store/
└── devis-store.ts                  # Nouveau store

lib/
└── api.ts                          # Configuration API
```

## 🧪 Tester la réservation

1. Allez sur `/reserver`
2. Remplissez le formulaire en 4 étapes
3. La soumission envoie les données à l'API backend
4. Un message de succès avec référence s'affiche

## ⚠️ Notes importantes

- Le token Mapbox est **obligatoire** pour la carte interactive
- L'API backend est déjà configurée sur `https://codemback-1.onrender.com/api`
- Les images Unsplash sont utilisées pour les cartes de services
- Le site est 100% responsive (mobile, tablet, desktop)

## 🆘 Support

Pour toute question ou problème :
- Vérifiez que toutes les dépendances sont installées
- Vérifiez que le fichier `.env.local` est configuré
- Consultez les logs de la console pour les erreurs

Bon déménagement ! 🚚✨

