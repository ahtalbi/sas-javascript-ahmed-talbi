/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 14 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * ROTATION DE TABLEAU
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Prenez [1, 2, 3]. Décalez tout vers la droite pour obtenir [3, 1, 2]. (Indice : enlevez le dernier et ajoutez-le au début).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-14
 * ▶️ Commande : node day05/exercices/exercice-14.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
const nombres = [1, 2, 3];
const dernier = nombres.pop();
nombres.unshift(dernier);

console.log(nombres);
