// =====================================================
//  1. RÉCUPÉRATION D'ÉLÉMENTS DU DOM
// =====================================================

// --- Par id : getElementById ---
const div = document.getElementById("app");
console.log("div getElementById :", div);

// --- Par classe : getElementsByClassName (renvoie une HTMLCollection) ---
const divClass = document.getElementsByClassName("myClass");
console.log("div getElementsByClassName :", divClass);

// --- querySelector avec un id (#) ---
const divQS = document.querySelector("#app");
console.log("div querySelector id :", divQS);

// --- querySelector avec une classe (.) ---
const divClassQS = document.querySelector(".myClass");
console.log("div querySelector classe :", divClassQS);


// =====================================================
//  2. SÉLECTEURS ENFANTS
// =====================================================

// Cibler un enfant direct : parent > enfant
const enfant1 = document.querySelector(".parent > .text1");
console.log("enfant :", enfant1);

// querySelectorAll : TOUS les <p> enfants directs (renvoie une NodeList)
const pAll = document.querySelectorAll(".parent-list > p");
console.log("pAll :", pAll);


// =====================================================
//  3. MODIFICATION D'UN ÉLÉMENT
// =====================================================

// Récupération du premier <p> enfant de #main
const p = document.querySelector("#main > p");
console.log("id avant :", p.id); // "paragraphe"

// Modification de l'id
p.id = "text";
console.log("id après :", p.id); // "text"

// Modification du texte
p.textContent = "voici le texte ajouté";

// Modification des classes (remplace TOUTES les classes)
p.className = "bg-red";


// =====================================================
//  4. classList : GÉRER LES CLASSES UNE PAR UNE
// =====================================================

// add : ajoute une classe
p.classList.add("border");

// toggle : ajoute la classe si absente, la retire si présente
p.classList.toggle("border"); // retirée
p.classList.toggle("border"); // remise

// contains : renvoie un booléen indiquant la présence d'une classe
console.log("contient 'border' ?", p.classList.contains("border")); // true

// remove : retire une classe
p.classList.remove("border");


// =====================================================
//  5. NAVIGATION DANS LES ENFANTS
// =====================================================

const parent = document.querySelector("#main");
console.log("parent :", parent);

// Premier et dernier enfant (versions "Element" : ignorent les nœuds texte)
console.log("premier enfant :", parent.firstElementChild);
console.log("dernier enfant :", parent.lastElementChild);

// Tous les enfants (HTMLCollection → pas de forEach, mais for...of ok)
console.log("tous les enfants :", parent.children);


// =====================================================
//  6. INPUTS ET ÉVÉNEMENTS
// =====================================================

// Cibler l'input et modifier sa valeur
const input = document.querySelector("#input");
input.value = "nouveau contenu";

// Le <p> où on affiche le contenu de l'input (récupéré UNE fois)
const contentInput = document.querySelector("#content-input");

// --- Bouton "Désactiver" : désactive l'input au clic ---
const btnDesactive = document.querySelector("#desactive");

btnDesactive.addEventListener("click", () => {
  input.disabled = true;
});

// --- Bouton "Log" : plusieurs écouteurs sur le même élément ---
const btn = document.querySelector("#btn");

// mouseenter : la souris ENTRE sur l'élément
btn.addEventListener("mouseenter", () => {
  contentInput.textContent = input.value;
});

// click
btn.addEventListener("click", () => {
  contentInput.textContent = input.value;
});

// mouseleave : la souris SORT de l'élément
btn.addEventListener("mouseleave", () => {
  contentInput.textContent = "";
});