let message1 = " voici l'information "
let message2 = ' voici l\'information '

let value = "l'information"
let message3 = `voici ${value}`

// for (const lettre of message3) {
//     console.log(lettre);
// }

// récupère la taille de la chaine de caractère
console.log(message3.length);

// accéder à un élément par son index
[0,1,2,3]
console.log(message3[2]);

// sépare la chaine de caractère à la première occurence trouvé du paramètre passé à split
const resultSplit = message3.split(" ")
console.log(resultSplit)
console.log(typeof(resultSplit));

// passe un string en majuscule
const resultUpperCase = message3.toUpperCase()
console.log(resultUpperCase);

// passe un string en minuscule
const resultLowerCase = message3.toLowerCase()
console.log(resultLowerCase);

// vérifie la présence d'un caractère dans le string
const resultIncludes = message3.includes('x')
console.log(resultIncludes);


// slice : découper une chaine de caractère 

// slice(position de départ , nombre de char à prendre)
let resultSlice = message3.slice(0,5)
console.log(resultSlice);

// slice (limite en partant de la fin)
let resultSliceNegatif = message3.slice(-5)
console.log(resultSliceNegatif);

