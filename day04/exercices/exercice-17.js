/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * LE CHIFFRE DE CÉSAR (CRYPTOGRAPHIE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction chiffrerCesar(texte, decalage) qui décale chaque lettre de l'alphabet. Par exemple, avec un décalage de 1, "ABC" devient "BCD".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day05/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function chiffrerCesar(texte, decalage) {
    let res = "";

    for (let c of texte) {

        if (c >= 'a' && c <= 'z') {
            c = String.fromCharCode((c.charCodeAt(0) - 'a'.charCodeAt(0) + decalage) % 26 + 'a'.charCodeAt(0));
        } else if (c >= 'A' && c <= 'Z') {
            c = String.fromCharCode((c.charCodeAt(0) - 'A'.charCodeAt(0) + decalage) % 26 + 'A'.charCodeAt(0));
        }

        res += c;
    }

    return res;
}