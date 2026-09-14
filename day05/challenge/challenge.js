/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · CHALLENGE
 * GESTION DE PANIER E-COMMERCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous codez la logique du panier d'achat d'une boutique en ligne.
 *
 * Consignes :
 * 1. Vous avez un tableau représentant les ID des articles dans le panier : panier = [101, 105, 101, 102].
 * 2. Créez une fonction ajouterAuPanier(id) qui ajoute l'article au tableau.
 * 3. Créez une fonction retirerDuPanier(id) qui retire Toutes les occurrences de cet ID du panier (ex: retirer 101).
 * 4. (Bonus) Créez une fonction afficherQuantites() qui compte et affiche le panier sous forme : Article 101 : 2 exemplaires, Article 105 : 1 exemplaire...
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day05/challenge/challenge.js
 */
'use strict';

const panier = [101, 105, 101, 102];

function ajouterAuPanier(id) {
  panier.push(id);
}

function retirerDuPanier(id) {
  for (let ind = panier.length - 1; ind >= 0; ind -= 1) {
    if (panier[ind] === id) panier.splice(ind, 1);
  }
}

function afficherQuantites() {
  const quantites = {};

  for (const id of panier) {
    quantites[id] = (quantites[id] || 0) + 1;
  }

  for (const [id, quantite] of Object.entries(quantites)) {
    const unite = quantite === 1 ? 'exemplaire' : 'exemplaires';
    console.log(`Article ${id} : ${quantite} ${unite}`);
  }
}

ajouterAuPanier(105);
retirerDuPanier(101);
console.log(panier);
afficherQuantites();
