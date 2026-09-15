/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 04 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * VÉRIFICATION D'EXISTENCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction possedePropriete(obj, cle) qui retourne true si la clé existe dans l'objet, sinon false. *(Indice : vous pouvez utiliser l'opérateur in ou vérifier si c'est !== undefined)*.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-04
 * ▶️ Commande : node day07/exercices/exercice-04.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let utilisateur = {
    nom: "ahmed",
    age: 19,
    estAdmin: true,
}

utilisateur["age"] += 1;
utilisateur["email"] = "contact@hexops.pro";

delete utilisateur.estAdmin;

function possedePropriete(obj, cle) {
    return Object.hasOwn(obj, cle);
}

console.log(possedePropriete(utilisateur, "age"));
console.log(possedePropriete(utilisateur, "estAdmin"));
