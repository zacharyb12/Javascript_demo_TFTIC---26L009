"use strict";
/*
Les bases de javascript
*/

// un commentaire sur une ligne 

/*
un commentaire
sur plusieurs
lignes
*/


//=======================================================================
// Console : afficher des informations dans la console du navigateur

console.log("une valeur simple")
console.debug("une valeur pour le débug")
console.warn("un message d'avetissement")
console.error("un message d'erreur")


//=======================================================================
// afficher un popup sur le navigateur


// afficher un message avec un boutton ok pour fermer la fenêtre
//alert("bonjour vous êtes bien sur le sites")



// permettre à l'utilisateur de saisir une information que l'on peut récupérer
// const age = prompt("Quel age avez-vous?")
// console.log(age)


// demander confirmation à l'utilisateur
// const confirmation = confirm("voulez-vous quitter la page ?")
//  console.log(confirmation)

// ====================================================================================

// Les variables 

// à ne pas utiliser sa portée est globale
var valeurVar 

// déclarer une variable qui peut être modifer
let valeurLet

// déclarer une constante qui ne peut pas être modifié et doit être initialiser
const valeurConst = ""

// Convention de nommage ============================================

/*
Le nom d’une variable peut contenir les caractères suivants :
● des caractères alphanumériques
● des underscores
● des dollars
Le nom de la variable doit commencer par un dollar, un underscore ou une lettre.
La convention de nommage pour les variables est le « camelCase »
*/

let _maVariable1 = "valeur test"

// Typage dynamique ====================================================================

let a = 1

a = "valeur 1"

a = true

// Number
let myNumberEntier = 12
console.log("myNumberEntier : " + typeof(myNumberEntier) )

let myNumberReel = 12.05
console.log("myNumberRel : " + typeof(myNumberReel) )

// String
let myMessage = "hello world"
console.log("myMessage : " + typeof(myMessage) )

// booleen
let myBooleen = true
console.log("myBooleen : " + typeof(myBooleen) )


// undefined
let valueUndefined = undefined
console.log("valueUndefined : " + typeof(valueUndefined) )


// null
let valueNull = null
console.log("valueNull : " + typeof(valueNull) )

// object
let myObject = {
    name : "bob"
}

console.log("myObject : " + typeof(myObject) )

// Date

let myDate = new Date()

console.log("Type de Date");

console.log(typeof(myDate)); // object
console.log(myDate.constructor.name); // Date
console.log(myDate instanceof Date); // true


// NAN
console.log("NaN")
console.log(undefined + 1)
console.log(undefined + 1 === NaN) // False
console.log(isNaN(undefined + 1 )) // true

// infinity

let value = Infinity
console.log("infinity")
console.log(value  === Infinity);
console.log(Infinity * 5)


