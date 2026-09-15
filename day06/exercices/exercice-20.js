/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * DEEP COPY VS SHALLOW COPY
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet contenant un autre objet imbriqué. 
 * Clonez-le avec le Spread operator (...).
 * Montrez (avec console.log) 
 * que modifier l'objet imbriqué dans la copie modifie AUSSI l'original.
 * Expliquez pourquoi en commentaire,
 * et donnez la solution moderne (ex: structuredClone ou JSON parse/stringify).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day07/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let miniObject = {
    prop: "hello world",
}

let utilisateur = {
    nom: "ahmed",
    age: 19,
    obj: miniObject,
}

let clone = {...utilisateur};
clone.obj["why"] = "me";
console.log(clone);
console.log(utilisateur);

// its gonna change if we clone it like this because even if we does ... 
// the sperad operators its gonna be the changed cause 
// it does not go recursive over the object in object it just clone the top layer without repeating.
// so the best way to do it is (ex: structuredClone ou JSON parse/stringify)

clone = JSON.parse(JSON.stringify(utilisateur));
clone.obj["new"] = "me";
console.log(clone);
console.log(utilisateur);