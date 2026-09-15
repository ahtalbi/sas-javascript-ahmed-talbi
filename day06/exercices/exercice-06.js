/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 06 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * EXTRACTION DES VALEURS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Utilisez Object.values() pour récupérer un tableau contenant toutes les valeurs de l'objet, et affichez-le.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-06
 * ▶️ Commande : node day07/exercices/exercice-06.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let utilisateur = {
    nom: "ahmed",
    age: 19,
    estAdmin: true,
}

console.log(Object.values(utilisateur).length);
