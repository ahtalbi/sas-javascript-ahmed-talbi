/**
 * JOUR 05 — GUIDE 03
 * Remplacement global
 *
 * OBJECTIF
 * Vous avez une URL mal formatée : "youcode-safi-2024". Remplacez tous les tirets par des espaces.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let url = "youcode-safi-2024";
url = url.replaceAll("-", " ");
console.log(url);