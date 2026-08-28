let age = prompt("Entrez votre age")

console.log(`valeur : ${age} - type : ${typeof(age)}`);

// effectuer une conversion entière ===================================

let ageNumber = parseInt(age)

console.log(`valeur : ${ageNumber} - type : ${typeof(ageNumber)}`);
console.log(ageNumber + ageNumber);

// effectuer une conversion Réel =======================================

let ageNumberReel = parseFloat(age)

console.log(`valeur : ${ageNumberReel} - type : ${typeof(ageNumberReel)}`);
console.log(ageNumberReel + ageNumberReel);

// Effectuer une conversion avec le constructeur Number ================

let ageNumberCtor = Number(age)

console.log(`valeur : ${ageNumberCtor} - type : ${typeof(ageNumberCtor)}`);
console.log(ageNumberCtor + ageNumberCtor);


// verification NaN
console.log(parseInt(age) === NaN);
console.log(isNaN(parseInt(age)));


// ========================================================================

// opérateur arithmétiques
let resultDiv = 5 / 5

let resultAdd = 5 + 5

let resultSoust = 5 - 5

let resultMult = 5 * 5

let resultMod = 5 % 2

let resultExp = 5 ** 2

// raccourci d'ecriture

let value = 5
let resultIncAfter = value++ // 5
let resultIncBefore = ++value // 6

let resultSousAfter = value-- // 5
let resultSousBefore = --value  // 4


// lors du dépassement passe à infinity
console.log('-----------------------------');

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2);

console.log('-----------------------------');
// lors du dépassement perd en précision 
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);

console.log(Number.MAX_VALUE * 1.1);
console.log(Number.MAX_SAFE_INTEGER * 1.1);

console.log('-----------------------------');
console.log(Number.EPSILON);

console.log(0.1 + 0.2 === 0.3); 

let resultEps = Math.abs((0.1 + 0.2) - 0.3 ) < Number.EPSILON

console.log(resultEps);

// Number et ses methodes

// verifie si la valeur est un entier
let isInt = Number.isInteger(42)
console.log(isInt);


let isIntSafe = Number.isSafeInteger(42)
console.log(isIntSafe);


let isFinite = Number.isFinite(42)
console.log(isFinite);


let valueIsNaN = Number.isNaN(NaN)
console.log(valueIsNaN);


// Math ==========================================

Math.PI

Math.round() // arrondi mathématique
Math.floor() // arrondi à inférieur ou égale
Math.ceil() // arrondi supérieur ou égale


Math.abs() // retourne la valeur absolue d'un nombre

Math.random() // génère un nombre aléatoire 


// BigInt ===========================================

// Conversion en BigInt
// BigInt a un symbole n 
const bigIntValue = BigInt(13_000_000_000_000_123n)
console.log(bigIntValue);
console.log(typeof(bigIntValue));

// console.log(bigIntValue + 13_000_000_000_000_123); erreur les types ne correspondnt pas 


