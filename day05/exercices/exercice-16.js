/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * SCRAPING : EXTRACTION DE DONNÉES MIXTES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez "scrappé" une page mal codée et obtenu ce tableau : ["Prix", 15.5, null, "Quantite", 3, undefined, "Total", 46.5]. Écrivez une fonction qui filtre ce tableau pour ne garder QUE les nombres valides.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day05/exercices/exercice-16.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function extraireNombres(valeurs) {
  const nombres = [];

  for (const valeur of valeurs) {
    if (typeof valeur === 'number' && Number.isFinite(valeur)) {
      nombres.push(valeur);
    }
  }

  return nombres;
}

const donnees = ['Prix', 15.5, null, 'Quantite', 3, undefined, 'Total', 46.5];
console.log(extraireNombres(donnees));
