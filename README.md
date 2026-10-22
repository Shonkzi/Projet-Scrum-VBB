# BricoLoop

API de démonstration pour le partage d’outils entre voisins, réalisée dans le cadre de l’atelier Scrum EPSI B3.

## Équipe

- Nom de l’équipe : à compléter
- Membres : à compléter avec les noms et prénoms
- Dépôt : https://github.com/Shonkzi/Projet-Scrum-VBB

### Rotation PO / Scrum Master

Compléter les noms réels au lancement. Le Product Owner change à chaque sprint et ne code pas pendant son sprint.

| Séquence | Product Owner | Scrum Master |
| --- | --- | --- |
| Lancement | À compléter | — |
| Sprint 1 | À compléter | À compléter |
| Sprint 2 | À compléter | À compléter |
| Sprint 3 | À compléter | À compléter |

## Prérequis

- Node.js 20.19+, 22.13+ ou 24+
- npm

## Installation et démarrage

```bash
npm install
npm start
```

L’API écoute sur `http://localhost:3000` (ou le port défini par `PORT`).

- `GET /health` vérifie que l’API répond et retourne `{ "status": "ok" }`.
- `GET /api/tools` retourne les outils de démonstration.

## Contrôles qualité

```bash
npm test
npm run lint
npm run check
```

`npm run check` exécute le lint puis les tests.

## Structure Sprint 0

- `src/app.js` configure les routes Express.
- `src/server.js` démarre le serveur HTTP.
- `src/data/seed.js` contient quatre voisins et huit outils de démonstration.
- `test/health.test.js` vérifie la route `/health`.
- `.github/workflows/check.yml` lance les contrôles sur chaque pull request vers `main`.
- `docs/GITHUB_SETUP.md` décrit la configuration GitHub attendue pour le Sprint 0.
