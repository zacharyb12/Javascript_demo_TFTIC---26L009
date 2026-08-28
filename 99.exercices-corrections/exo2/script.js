// 1 . demander le prix

// let prixString = prompt("Entrez un prix :")

// let prixReel = parseFloat(prixString)

// let prixFormated = prixReel.toFixed(2)

// console.log(`le prix du produit est de : ${prixFormated}€`);


// 2. prenom et nom avec variables

// let nom = prompt("Entrez votre nom :")
// let prenom = prompt("Entrez votre prénom :")

// let result1 = nom + " " + prenom
// let result2 = `${nom} ${prenom}`
// let result3 = nom.concat(' ').concat(prenom)

// console.log(result1);
// console.log(result2);
// console.log(result3);

// 3 . prenom et nom avec objet

// let person = {
//     nom : null,
//     prenom : null
// }

//  person.nom = prompt("Entrez votre nom")
//  person['prenom'] = prompt("Entrez votre prénom")


// let resultObjectConcat = `${person.nom} ${person.prenom}`

// console.log(resultObjectConcat);


// 4 . Creér un objet avec plusieurs propriétés

// let person2 = {
//     nom : "bob",
//     prenom : "doe",
//     age : 40,
//     ville : "new york"
// }

// person2.email = `${person2.nom}${person2.prenom}${person2.age}@mail.com`

// console.log(person2.email);
// console.log(person2.nom);
// console.log(person2['prenom']);
// console.log(person2.age);
// console.log(person2.ville);

// console.log(person2);


//  delete person2.email
// //person2.email = null

// console.log(person2);

// console.log(person2.email);


// 5. création d'identifiant

/*
crée un identifiant en utilisant 
    - les troisième et quatriéme caractère du prénom 
    - les deux premier caractères du nom
    - age
*/

let person3 = {
    nom : "jean-bernard",
    prenom : "doe",
    age : 40,
    ville : "new york"
}
// ando40

console.log("nom : " + person3.nom.slice(2,4));
console.log("prenom : " + person3.prenom.slice(0,2));
console.log(person3.age);


person3.identifiant = `${person3.nom.slice(2,4)}${person3.prenom.slice(0,2)}${person3.age}`

console.log(person3.identifiant);

console.log(person3);

