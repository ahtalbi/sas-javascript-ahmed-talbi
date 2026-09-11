/**
 * JOUR 05 — GUIDE 02
 * Recherche de mot-clé (Sensibilité à la casse)
 *
 * OBJECTIF
 * Vérifiez si le mot "javascript" est présent dans la phrase "J'apprends le JavaScript à YouCode". La recherche doit ignorer les majuscules/minuscules.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';


let phrase = "J'apprends le JavaScript à YouCode";
phrase = phrase.split(" ");
console.log(phrase.some(mot => mot.toLowerCase() === "javascript"));
