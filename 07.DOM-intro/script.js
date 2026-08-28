// // récupération avec le getByID
 const div = document.getElementById("app")

 console.log(" div getElementById" , div);

// // recupération avec le getByclassName
const divClass = document.getElementsByClassName("myClass")
console.log(" div getElementsByClassName" , divClass);


// // récupération avec le querySelector : id
 const divQS = document.querySelector("#app")

 console.log(" div querySelector Id" , divQS);


// // récupération avec le querySelector : class
const divClassQS = document.querySelector(".myClass")

 console.log(" div querySelectorClass" , divClassQS);



// cibler un enfant
 const enfant1 = document.querySelector(".parent > .text1")
 console.log("enfant" , enfant1);


 const pAll = document.querySelectorAll(".parent-list > p")


 console.log("pAll" , pAll);

// récupération du p enfant de main 
const p = document.querySelector("#main > p")

console.log("p" , p.id);

// modification de l'id d'un élément
p.id = "text"

console.log("p" , p.id);


// modification du texte
p.textContent = "voici le texte ajouter"

// modification des classes
p.className = "bg-red"

// classList

// add : ajoute une classe à la liste
p.classList.add("border")

// toggle ajoute ou retire la classe de la liste de classe
p.classList.toggle("border")
p.classList.toggle("border")

// contains : renvoie un boleen qui indique la présence d'une classe
console.log(p.classList.contains("border"));

// remove : retire une classe 
p.classList.remove("border")


// accès au enfant d'un élément
const parent = document.querySelector("#main")

console.log("parent" , parent);
// premier enfant
console.log("premier enfant" , parent.firstElementChild);
// dernier enfant
console.log("premier enfant" , parent.lastElementChild);


// récupère tout les enfant d'un élément
console.log("all children" , parent.children);


// cibler un input pour récupérer sa valeur
const input = document.querySelector("#input")

// modification de la valeur de l'input
input.value = "nouveau contenu"


// ajouter un evenement sur un element

// cibler le boutton
const btn = document.querySelector("#btn")


// ajouter un écouteur d'évenement 

//  lorsque la souris rentre sur l'element
btn.addEventListener('mouseover',()=>{

const p = document.querySelector("#content-input")
p.textContent = input.value

})

// evenement lors du click
btn.addEventListener('click',()=>{

const p = document.querySelector("#content-input")
p.textContent = input.value

})

// evenement lorsque la souris sort de l'élément
btn.addEventListener('mouseleave',()=>{

const p = document.querySelector("#content-input")
p.textContent = ""

})