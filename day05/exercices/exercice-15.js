/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * FUSION TRIÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez deux tableaux DÉJÀ triés : [1, 3, 5] et [2, 4, 6]. Écrivez un algorithme pour les fusionner en un seul tableau trié [1, 2, 3, 4, 5, 6] (sans utiliser .sort()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day05/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function fusionnerTries(gauche, droite) {
  const resultat = [];
  let indexGauche = 0;
  let indexDroite = 0;

  while (indexGauche < gauche.length && indexDroite < droite.length) {
    if (gauche[indexGauche] <= droite[indexDroite]) {
      resultat.push(gauche[indexGauche]);
      indexGauche += 1;
    } else {
      resultat.push(droite[indexDroite]);
      indexDroite += 1;
    }
  }

  while (indexGauche < gauche.length) {
    resultat.push(gauche[indexGauche]);
    indexGauche += 1;
  }

  while (indexDroite < droite.length) {
    resultat.push(droite[indexDroite]);
    indexDroite += 1;
  }

  return resultat;
}

console.log(fusionnerTries([1, 3, 5], [2, 4, 6]));
