/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day07/exercices/exercice-08.js
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


function returnWinner(condidats) {
    let winner = {
        "nom": "",
        "score": 0
    };
    for (let condidat of condidats) {
        if (condidat.score > winner.score) {
            winner.score = condidat.score;
            winner.nom = condidat.nom;
        }
        return winner.nom;
    }
}

console.log(returnWinner(condidats));
