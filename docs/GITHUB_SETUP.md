# Mise en place GitHub du Sprint 0

Checklist d’administration pour le dépôt `Shonkzi/Projet-Scrum-VBB`.

## Accès équipe

Inviter chaque membre avec le rôle adapté à l’équipe de développement.

## Protection de `main`

Dans **Settings → Rules → Rulesets** (ou **Branches → Branch protection rules**), protéger `main` :

- exiger une pull request avant fusion;
- exiger au moins une approbation;
- invalider les approbations obsolètes lorsqu’un nouveau commit est poussé;
- exiger la résolution des conversations;
- bloquer les push directs et les force-push;
- après la première PR, exiger le statut `Quality checks / check`.

## Validation de T-01 à T-04

- T-01 : dépôt accessible à l’équipe, membres invités, règle de protection active et README avec commandes vérifiées.
- T-02 : `npm run lint`, `npm test` et `npm run check` réussissent; le test `/health` retourne 200.
- T-03 : les données seedées comprennent quatre voisins et huit outils dans au moins trois catégories.
- T-04 : une PR déclenche le workflow `Quality checks` et termine avec succès.
