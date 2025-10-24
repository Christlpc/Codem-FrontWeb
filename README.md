# CODEM - Site de Déménagement Professionnel au Congo

Un site web moderne et dynamique pour CODEM, entreprise de déménagement au Congo, inspiré de Bolt.eu, construit avec les dernières technologies web.

## 🇨🇬 Charte Graphique CODEM

- **Bleu foncé** : `#001F60` - Texte principal et identité
- **Orange vif** : `#F55D0A` - Couleur primaire et CTAs
- **Jaune-Orangé** : `#F7A81B` - Accents et mise en valeur

## 🚀 Technologies Utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique pour un code robuste
- **Tailwind CSS** - Styling utilitaire moderne
- **Radix UI** - Composants UI accessibles et personnalisables
- **Framer Motion** - Animations fluides et professionnelles
- **Zustand** - Gestion d'état légère et performante
- **TanStack Query** - Gestion des données et cache
- **Mapbox GL JS** - Cartes interactives et calcul d'itinéraires
- **Phosphor Icons** - Bibliothèque d'icônes premium
- **React Hook Form + Zod** - Gestion de formulaires et validation
- **React Day Picker** - Sélecteur de dates premium

## ✨ Fonctionnalités

### Page d'Accueil
- Hero section avec présentation dynamique
- Formulaire de réservation instantané
- Section "Comment ça marche" en 4 étapes
- Présentation des services avec tarifs
- Design responsive et animations fluides

### Formulaire de Réservation Multi-étapes
- **Étape 1** : Type de déménagement (résidentiel, commercial, entreposage)
- **Étape 2** : Adresses de départ et d'arrivée avec suggestions
- **Étape 3** : Choix de la date avec calendrier premium
- **Étape 4** : Sélection détaillée des objets (70+ items organisés en 13 catégories)
- **Étape 5** : Services additionnels (emballage, montage/démontage, etc.)
- **Étape 6** : Récapitulatif et confirmation
- Calcul automatique du volume et estimation du prix en FCFA
- Validation complète avec React Hook Form et Zod

### Carte Interactive (Mapbox)
- Visualisation des points de départ et d'arrivée
- Calcul automatique de l'itinéraire
- Marqueurs animés
- Navigation et zoom

### Gestion d'État (Zustand)
- Persistance des données de réservation
- État global accessible dans toute l'application
- Performance optimisée

## 📦 Installation

1. Clonez le repository
```bash
git clone https://github.com/Christlpc/Codem-FrontWeb.git
cd Codem-FrontWeb
```

2. Installez les dépendances
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Configurez les variables d'environnement
```bash
cp .env.local.example .env.local
```

4. Ajoutez votre token Mapbox dans `.env.local`
```env
NEXT_PUBLIC_MAPBOX_TOKEN=votre_token_mapbox
```

Obtenez votre token gratuit sur [Mapbox](https://account.mapbox.com/access-tokens/)

5. Lancez le serveur de développement
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Structure du Projet

```
├── app/
│   ├── layout.tsx          # Layout principal avec providers
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux
├── components/
│   ├── ui/                 # Composants UI réutilisables (Radix)
│   ├── navigation/         # Header et Footer
│   ├── home/               # Composants de la page d'accueil
│   ├── map/                # Composant de carte Mapbox
│   └── providers.tsx       # Providers React Query
├── store/
│   └── booking-store.ts    # Store Zustand pour réservations
├── lib/
│   └── utils.ts            # Utilitaires (cn, etc.)
└── public/                 # Assets statiques
```

## 🎨 Personnalisation

### Couleurs CODEM
Les couleurs sont configurées dans `tailwind.config.ts` et `app/globals.css` :
- **Primary (Orange)** : `#F55D0A` - Boutons et CTAs
- **Secondary (Bleu foncé)** : `#001F60` - Texte et identité
- **Accent (Jaune-Orangé)** : `#F7A81B` - Mise en valeur et accents
- Mode sombre automatique avec les variantes appropriées

### Animations
Les animations sont configurées dans `tailwind.config.ts` et utilisent Framer Motion.

## 🚢 Déploiement

### ⭐ Vercel (FORTEMENT RECOMMANDÉ - Gratuit)

**La meilleure option pour Next.js** - Simple, rapide et gratuit !

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez votre compte GitHub
3. Importez le repo `Codem-FrontWeb`
4. Cliquez sur "Deploy" ✨

**C'est tout !** Vercel configure tout automatiquement.

### 🔧 Autres Options

Pour plus de détails sur le déploiement (Render, Netlify, etc.), consultez :
📖 **[DEPLOIEMENT.md](./DEPLOIEMENT.md)** - Guide complet de déploiement

### Build manuel
```bash
npm run build
npm start
```

## 📝 Pages à Créer

Le projet inclut la structure pour :
- `/services` - Page détaillée des services
- `/tarifs` - Grille de tarifs complète
- `/comment-ca-marche` - Processus détaillé
- `/contact` - Formulaire de contact
- `/about` - À propos de l'entreprise

## 🔧 Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Build l'application pour la production
- `npm start` - Lance le serveur de production
- `npm run lint` - Vérifie les erreurs ESLint

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

MIT License - Libre d'utilisation

## 🙏 Remerciements

- Inspiré par le design moderne de [Bolt.eu](https://bolt.eu)
- Icônes de [Phosphor Icons](https://phosphoricons.com)
- Composants UI de [Radix UI](https://www.radix-ui.com) et [Shadcn/UI](https://ui.shadcn.com)
- Animations avec [Framer Motion](https://www.framer.com/motion/)

## 🌍 Contexte Congolais

CODEM est adapté pour le marché congolais :
- ✅ Tarifs en **Francs CFA (FCFA)**
- ✅ Références géographiques du **Congo-Brazzaville**
- ✅ Numéros de téléphone au format congolais
- ✅ Adaptation culturelle et linguistique

---

Développé avec ❤️ pour les professionnels du déménagement

