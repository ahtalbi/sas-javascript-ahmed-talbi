/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day07/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let condidats = [
    {
        "nom": "ahmed",
        "score": 19
    },
    {
        "nom": "hicham",
        "score": 8
    },
    {
        "nom": "someone",
        "score": 0
    }
];

function returnWinners(condidats) {
    let winners = [];
    for (let condidat of condidats) {
        if (condidat.score >= 10) {
            winners.push(condidat);
        }
    }
    return winners;
}

console.log(returnWinners(condidats));
