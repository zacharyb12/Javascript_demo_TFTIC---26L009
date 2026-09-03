// Créez une page HTML avec un <input id="input-fruit" type="text"> pour saisir le nom d'un
// fruit, un bouton "Ajouter" et une liste vide <ul id="ma-liste"></ul>.
// ● Au clic du bouton, récupérez la valeur de l'input :
//  ○ Si le champ est vide, affichez un message d'erreur dans la page ou via alert.
//  ○ Si le champ est rempli, ajoutez dynamiquement un <li> et videz l’input.
// ● Ajoutez un bouton "Tout supprimer" qui vide la liste entière.
// ● Bonus : Ajoutez un bouton "Supprimer" sur chaque <li> qui retire l'élément.


const btnAjouter = document.getElementById("btn-ajouter");
const btnToutSupprimer = document.getElementById("btn-tout-supprimer");
const inputFruit = document.getElementById("input-fruit");
const listFruit = document.getElementById("ma-liste");

btnAjouter.addEventListener("click", () => {
    const value = inputFruit.value.trim();

    if (!value) {
        alert("erreur: veuillez entrer une valeur.");
    } else {
        const li = document.createElement("li");
        li.innerText = value;

        const btnSupprimer = document.createElement("button");
        btnSupprimer.textContent = "Supprimer";
        
        btnSupprimer.addEventListener("click", ()=> {
            li.remove();
        })
        
        li.appendChild(btnSupprimer);
        listFruit.appendChild(li);

        inputFruit.value = "";
    }
});

btnToutSupprimer.addEventListener("click", () => {
    while (listFruit.hasChildNodes()) {
        listFruit.removeChild(listFruit.firstChild);
    }

    // ou alors
    //listFruit.innerHTML = "";
});


// listFruit.addEventListener("click", (event) => {
//     if (event.target.matches("button")) {
//         event.target.parentNode.remove();
//     }
// });