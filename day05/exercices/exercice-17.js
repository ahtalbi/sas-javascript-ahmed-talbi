/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * OCCURRENCES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de mots ["pomme", "banane", "pomme", "orange", "banane", "pomme"]. Comptez combien de fois chaque élément apparaît. (Vous pouvez afficher : "pomme: 3, banane: 2, orange: 1").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day05/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function compterOccurrences(mots) {
  const occurrences = {};

  for (const mot of mots) {
    if (occurrences[mot] === undefined) {
      occurrences[mot] = 1;
    } else {
      occurrences[mot] += 1;
    }
  }

  return occurrences;
}

const occurrences = compterOccurrences([
  'pomme', 'banane', 'pomme', 'orange', 'banane', 'pomme',
]);
for (const [mot, nombre] of Object.entries(occurrences)) {
  console.log(`${mot}: ${nombre}`);
}
