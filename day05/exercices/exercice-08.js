/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function trouverExtremes(nombres) {
  if (nombres.length === 0) {
    return undefined;
  }

  let minimum = nombres[0];
  let maximum = nombres[0];

  for (const nombre of nombres) {
    if (nombre < minimum) minimum = nombre;
    if (nombre > maximum) maximum = nombre;
  }

  return { minimum, maximum };
}

console.log(trouverExtremes([18, 4, 27, 9, 13]));
