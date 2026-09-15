/**
 * JOUR 07 — GUIDE 02
 * L'accès dynamique
 *
 * OBJECTIF
 * On vous donne une variable let cleRecherche = "modele";. Comment utiliser cette variable pour afficher la valeur correspondante dans l'objet voiture ?
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let voiture = {
    "marque" : "Toyota",
    "modele" : "Corolla",
    "l'année": 2020
}

let cleRecherche = "modele";

console.log(voiture[cleRecherche]);
