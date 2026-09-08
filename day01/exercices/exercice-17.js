/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * JEU : PIERRE, PAPIER, CISEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Déclarez deux variables joueur1 = "Pierre" et joueur2 = "Ciseaux". En utilisant des conditions, 
 * déterminez qui a gagné. (Gérez tous les cas possibles ou utilisez une logique optimisée).
 *
 * RÉSULTAT ATTENDU
 * Joueur 1 gagne !
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day01/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let jouer1 = "Pierre";
let jouer2 = "Ciseaux";

if (jouer1 == "Pierre") {
    if (jouer2 == "Ciseaux") {
        console.log("Joueur 1 gagne !");
    } else if (jouer2 == "Pierre") {
        console.log("dessiner");
    } else {
        console.log("Joueur 2 gagne !");
    }
} else if (jouer1 == "Ciseaux") {
    if (jouer2 == "Ciseaux") {
        console.log("dessiner");
    } else if (jouer2 == "Pierre") {
        console.log("Joueur 2 gagne !");
    } else {
        console.log("Joueur 1 gagne !");
    }
} else {
    if (jouer2 == "Ciseaux") {
        console.log("Joueur 1 gagne !");
    } else if (jouer2 == "Pierre") {
        console.log("Joueur 2 gagne !");
    } else {
        console.log("dessiner");
    }
}