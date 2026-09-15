/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * REGROUPEMENT (GROUP BY)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau [{nom: "A", groupe: 1}, {nom: "B", groupe: 2}, {nom: "C", groupe: 1}]. Créez une fonction qui retourne un objet regroupant ces données : { 1: [{nom: "A"}, {nom: "C"}], 2: [{nom: "B"}] }.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day07/exercices/exercice-19.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function turnToGroups(list) {
    let res = {};
    for (let i = 0; i < list.length; i++) {
        let groupe = list[i].groupe;
        if (Object.hasOwn(res, groupe)) {
            res[groupe].push({nom: list[i].nom});
        } else {
            res[groupe] = [{nom: list[i].nom}];
        }
    }
    return res;
}

let list = [{nom: "A", groupe: 1}, {nom: "B", groupe: 2}, {nom: "C", groupe: 1}];

console.log(turnToGroups(list));
