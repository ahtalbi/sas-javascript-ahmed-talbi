/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * RECHERCHE BINAIRE (CONCEPT DE BASE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Contrairement à la recherche linéaire (parcourir tout le tableau un par un), la recherche binaire cherche un élément dans un tableau TRIÉ en coupant l'espace de recherche en deux à chaque fois. Essayez de comprendre et d'implémenter ce concept pour trouver l'index de 45 dans [10, 20, 30, 40, 45, 50, 60].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day05/exercices/exercice-19.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function rechercheBinaire(nombres, cible) {
  let debut = 0;
  let fin = nombres.length - 1;

  while (debut <= fin) {
    const milieu = Math.floor((debut + fin) / 2);

    if (nombres[milieu] === cible) return milieu;
    if (nombres[milieu] < cible) {
      debut = milieu + 1;
    } else {
      fin = milieu - 1;
    }
  }

  return -1;
}

console.log(rechercheBinaire([10, 20, 30, 40, 45, 50, 60], 45));
