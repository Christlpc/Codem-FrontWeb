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
- **Lucide React** - Icônes modernes

## ✨ Fonctionnalités

### Page d'Accueil
- Hero section avec présentation dynamique
- Formulaire de réservation instantané
- Section "Comment ça marche" en 4 étapes
- Présentation des services avec tarifs
- Design responsive et animations fluides

### Formulaire de Réservation
- Sélection du type de déménagement (studio, appartement, maison, bureau)
- Saisie des adresses de départ et d'arrivée
- Choix de la date
- Configuration des étages
- Calcul de devis instantané

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
git clone <votre-repo>
cd demenagement-pro
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

### Couleurs
Modifiez les couleurs dans `tailwind.config.ts` et `app/globals.css` :
- Primary: Vert (#10b981) - Couleur principale de la marque
- Secondary: Gris clair - Backgrounds secondaires
- Accent: Couleurs d'accentuation

### Animations
Les animations sont configurées dans `tailwind.config.ts` et utilisent Framer Motion.

## 🚢 Déploiement

### Vercel (Recommandé)
```bash
npm run build
vercel deploy
```

### Autres plateformes
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

- Inspiré par le design moderne de Bolt.eu
- Icônes de [Lucide](https://lucide.dev)
- Composants UI de [Radix UI](https://www.radix-ui.com)

---

Développé avec ❤️ pour les professionnels du déménagement

