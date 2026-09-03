let noms = ["Valentin", "Anthony", "Tristan", "Jérôme"];

// affichage sans utilisation de boucle
console.log(noms);
console.table(noms);

console.log(noms[2]);

while(noms.length > 0) {
    // retire le dernier élément de la liste et le renvoie en tant que retour de fonction
    const presentateur = noms.pop();
    console.log(`${presentateur} nous montre son projet`);
    
}

// rajoute à la fin de la liste
noms.push("Guillaume");

// rajoute au début de la liste
noms.unshift("Younès");

// retire le premier élément de la liste et le renvoie en tant que retour de fonction
noms.shift();


noms.push("Thibaut", "Romain", "Lionel");

console.log(noms);
// splice (index de départ, nombre d'élément à retirer, ... liste d'élément à rajouter à cet emplacement)
console.log(noms.splice(1, 1, "Elodie", "Rocio", "Julien", "Benjamin"))
console.log(noms);

const textNoms = noms.join(", ");
console.log(textNoms);
console.log(textNoms.split(", "));

let tab = [5,10,1,2,51,100]

tab.sort() // [1, 10, 100, 2, 5, 51]
// /!\ ordre alhabétique par défaut
tab.sort((a,b)=> a-b);
console.log(tab);

// slice (indice de départ inclus, inice de fin exclus)
console.log(noms.slice(1,3));


console.log(noms.filter((nom) => nom.includes("e")));