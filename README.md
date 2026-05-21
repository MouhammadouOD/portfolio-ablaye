# Portfolio — Abdoulaye Sonko Touré

Portfolio web bilingue (FR/EN) pour Abdoulaye Sonko Touré, étudiant en droit des
affaires et fiscalité. Construit avec React + Vite, sans dépendance d'animation externe.

## Démarrage

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## Modifier le contenu

Tout le contenu vit dans **un seul fichier** : `src/data/profile.js`.
Aucune donnée personnelle n'est codée en dur dans les composants.

À compléter / mettre à jour quand l'information sera disponible :

- `linkedin` : passer de `null` au lien du profil, puis retirer `linkedinSoon`.
- Stage à Mbour : remplir la `period` et détailler les `bullets`.
- Mandat étudiant : préciser les partenaires et l'ampleur des activités co-organisées.
- `cvPath` : déposer le CV PDF dans `public/assets/cv.pdf` (déjà prévu).
- `photo` : optionnel — déposer une photo dans `public/assets/` et renseigner le chemin.

Les textes d'interface (labels, menus) sont dans `src/i18n/translations.js`.

## Déploiement

```bash
npm run deploy   # build + publication sur la branche gh-pages
```

## Structure

```
src/
├── data/profile.js        ← source de vérité unique
├── i18n/translations.js   ← chaînes d'interface FR/EN
├── components/            ← une section par fichier
├── hooks/useReveal.js     ← apparition au scroll (IntersectionObserver)
└── styles/                ← tokens, base, app
```
