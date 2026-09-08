/**
 * JOUR 01 — GUIDE 01
 * Le Permutateur (Variables)
 *
 * OBJECTIF
 * Vous avez deux variables a = 5 et b = 10. Vous devez échanger leurs valeurs pour que a vaille 10 et b vaille 5.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let a = 5;
let b = 10;

console.log("before : ", a, b);
// il ya deux solution
let temp = a;
a = b;
b = temp;

// le dexieme
// [a, b] = [b, a];
console.log("after  : ", a, b);