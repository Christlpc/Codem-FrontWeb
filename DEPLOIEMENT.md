# 🚀 Guide de Déploiement CODEM

## ✅ Option 1 : Vercel (RECOMMANDÉE)

**Vercel** est la plateforme officielle de Next.js - gratuite, rapide et sans configuration !

### Étapes :

1. **Créez un compte** sur [vercel.com](https://vercel.com)
2. **Connectez votre GitHub**
3. **Importez** le repo `Codem-FrontWeb`
4. **Cliquez sur Deploy** ✨

### Avantages :
- ✅ Gratuit
- ✅ Déploiement en 1 clic
- ✅ SSL automatique
- ✅ CDN mondial
- ✅ Performance optimale
- ✅ Déploiement automatique à chaque push

---

## 🔧 Option 2 : Render (Web Service)

Si vous préférez Render, suivez ces étapes :

### Configuration Render :

1. Allez sur [render.com](https://render.com)
2. Créez un nouveau **Web Service** (PAS Static Site)
3. Connectez votre repo GitHub `Codem-FrontWeb`

### Paramètres :

```
Environment: Node
Region: Frankfurt (ou Oregon)
Branch: main
Build Command: npm install && npm run build
Start Command: npm start
```

### Variables d'environnement :

```
NODE_VERSION=18.17.0
NODE_ENV=production
```

### ⚠️ Limitations du plan gratuit Render :
- Peut être lent au démarrage (cold start)
- Peut se mettre en veille après 15min d'inactivité
- Moins optimisé pour Next.js que Vercel

---

## 🌐 Option 3 : Netlify

Netlify supporte aussi Next.js avec quelques configurations.

### Étapes :

1. Allez sur [netlify.com](https://netlify.com)
2. Importez le repo depuis GitHub
3. Netlify détectera automatiquement Next.js

### Configuration automatique :
- Build Command: `npm run build`
- Publish Directory: `.next`

---

## 📦 Variables d'environnement (si nécessaire)

Si vous utilisez Mapbox ou d'autres services, ajoutez :

```
NEXT_PUBLIC_MAPBOX_TOKEN=votre_token_ici
```

---

## 🔥 Recommandation

**Utilisez Vercel** pour :
- ✅ Déploiement le plus simple
- ✅ Meilleures performances
- ✅ Gratuit sans limitations
- ✅ Support officiel Next.js
- ✅ HTTPS automatique
- ✅ Domaine personnalisé gratuit

---

## 📱 Après le déploiement

Votre site sera accessible à :
- **Vercel** : `https://codem-frontweb.vercel.app`
- **Render** : `https://codem-frontweb.onrender.com`
- **Netlify** : `https://codem-frontweb.netlify.app`

Vous pouvez ensuite configurer un domaine personnalisé comme `codem.cg` !

---

## 🐛 Dépannage

### Erreur "Static Site" sur Render
❌ Ne pas utiliser "Static Site" - Next.js nécessite un serveur Node.js
✅ Utilisez "Web Service"

### Site lent sur Render
C'est normal avec le plan gratuit Render (cold start).
→ **Solution** : Passez à Vercel (gratuit ET rapide)

### Erreur de build
Vérifiez que :
- `NODE_VERSION=18.17.0` est défini
- Les commandes de build sont correctes
- Toutes les dépendances sont dans `package.json`

---

## 📞 Support

Pour plus d'aide :
- Documentation Vercel : https://vercel.com/docs
- Documentation Render : https://render.com/docs
- Documentation Next.js : https://nextjs.org/docs/deployment

