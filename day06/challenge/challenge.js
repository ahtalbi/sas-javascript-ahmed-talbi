/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · CHALLENGE
 * LE POKEDEX (ANNUAIRE DE DONNÉES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer une mini-base de données d'utilisateurs.
 *
 * Consignes :
 * 1. Vous avez un tableau utilisateurs = [].
 * 2. Créez une fonction ajouterUtilisateur(nom, email) qui crée un objet { id, nom, email } (générez un ID unique simple) et l'ajoute au tableau.
 * 3. Créez une fonction trouverParEmail(email) qui retourne l'objet utilisateur correspondant.
 * 4. Créez une fonction supprimerParId(id) qui supprime l'utilisateur du tableau.
 * 5. Créez une fonction afficherAnnuaire() qui affiche joliment la liste complète dans la console.
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day07/challenge/challenge.js
 */
'use strict';

let utilisateurs = [];

let id = 1;
function ajouterUtilisateur(nom, email) {
    utilisateurs.push({id: id, nom: nom, email: email});
    id++;
}

function trouverParEmail(email) {
    let res = {};
    for (let user of utilisateurs) {
        if (user.email === email) {
            return user;
        }
    }
    return null;
}

function supprimerParId(id) {
    let res = [];
    for (let i = 0; i < utilisateurs.length; i++) {
        if (utilisateurs[i].id !== id) {
            res.push(utilisateurs[i]);
        }
    }
    utilisateurs = [...res];
}

function afficherAnnuaire() {
    if (utilisateurs.length === 0) console.log("L'annuaire est vide.");
    for (let user of utilisateurs) {
        console.log(`ID: ${user.id} | Nom: ${user.nom} | Email: ${user.email}`);
    }
}

ajouterUtilisateur("rania", "rania@email.com");
ajouterUtilisateur("ahmed", "ahmed@email.com");
ajouterUtilisateur("zohir", "zohir@email.com");
console.log(utilisateurs);

console.log(trouverParEmail("ahmed@email.com"));

supprimerParId(1);
console.log(utilisateurs);

afficherAnnuaire();
