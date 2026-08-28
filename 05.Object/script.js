// les objets

// il est possible de modifier le contenu de l'objet même si c'est une constante
const object1 = {
    name : "john"
}

object1.name = "Doe"

console.log(object1.name);

// il est possible d'ajouter des propriétés à un objet 
object1.info = "informations de l'objet"

console.log(object1.info);


// création avec le constructeur
const object2 = new Object()
object2.name = "object2"
console.log(object2.name);


// création avec la methode create

const object3 = Object.create(null)
object3.name = "object3"
console.log(object3.name);


// ================================================================

// accéder à une valuer de l'objet par la clé
const objectDemo = {
    name : "john",
    age : 40,
    active : true
}

console.log(objectDemo.name);
console.log(objectDemo['name']);

// modification du contenu de l'objet
objectDemo['name'] = "jane"
objectDemo.name = "jane"


console.log(objectDemo['name']);


// ajouter une propriété à l'objet
objectDemo.adresse = "quelque part"
console.log(objectDemo['adresse']);


// supprimer une propriété de l'objet
delete objectDemo['adresse']
console.log(objectDemo['adresse']);


// erreur lors de la tentative d'acces à une propriété null
let person = null

console.log(person?.name);

console.log(person.name); // erreur l'objet n'est pas instancié


