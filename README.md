# BricoLoop

**Équipe 7**

## Présentation

BricoLoop est une plateforme collaborative qui favorise le partage d’outils entre voisins. Une perceuse, une ponceuse ou un taille-haie sont souvent utilisés seulement quelques heures par an.

BricoLoop permet de les mettre à disposition de la communauté locale afin de réduire les achats inutiles et encourager l’économie de partage.

L’application permet de rechercher des outils disponibles, de demander leur emprunt et de gérer les prêts grâce à un système de demandes et de validation par le propriétaire.

## Membres de l’équipe

- Valentin
- Benjamin
- Bastien

## Rotation des rôles

| Sprint | Product Owner | Développeurs |
| --- | --- | --- |
| Sprint 1 | Valentin | Benjamin, Bastien |
| Sprint 2 | Benjamin | Valentin, Bastien |
| Sprint 3 | Bastien | Valentin, Benjamin |

## Installation et lancement

Prérequis : Node.js 20.19+, 22.13+ ou 24+, et npm.

```bash
npm install
npm start
```

L’API écoute sur `http://localhost:3000` (ou le port défini par `PORT`).

## Vérification et tests

- `GET /health` retourne `{ "status": "ok" }` si l’API répond.
- `GET /api/tools` retourne les outils de démonstration.

```bash
npm test
npm run lint
npm run check
```

`npm run check` exécute le lint puis les tests.

## Stories réalisées

| Story | Description | Pull request |
| --- | --- | --- |
| US-01 | Consulter le catalogue des outils | # |
| US-02 | Proposer un outil au prêt | # |
| US-03 | Voir le détail d’un outil | # |

## Socle technique Sprint 0

- `src/app.js` configure les routes Express.
- `src/server.js` démarre le serveur HTTP.
- `src/data/seed.js` contient quatre voisins et huit outils de démonstration.
- `test/health.test.js` vérifie la route `/health`.
- `.github/workflows/check.yml` lance lint et tests sur chaque pull request vers `main`.
- `docs/GITHUB_SETUP.md` décrit la configuration GitHub attendue pour le Sprint 0.
