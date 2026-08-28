let firstName = null
let age = null


firstName = prompt('Entrez votre nom')
let ageString = prompt("Entrez votre age")

age = parseInt(ageString)


console.log(`firstname : ${firstName} - type : ${typeof(firstName)}`);
console.log(`age : ${age} - type : ${typeof(age)}`);

age = ++age
console.log(`age : ${age} - type : ${typeof(age)}`);

// ===============================================================
const person = {
    firstname : null,
    age : null
}

person.firstname = prompt("Entrez votre nom")
ageObjectStr = prompt("Entrez votre age")

person.age = parseInt(ageObjectStr)

if(person.firstname){

    let identifiant = person.firstname.slice(0,2) + person.age
    
    console.log(identifiant);
}

