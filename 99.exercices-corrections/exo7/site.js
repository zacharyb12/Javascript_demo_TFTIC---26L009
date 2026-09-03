// Créez une page avec un bouton « Générer » et un conteneur <div id="grille"></div>.
// ● Au clic du bouton, utilisez une boucle for pour générer 25 cases (des <div> stylisés 
// en carré) numérotées de 1 à 25 et les insérer dans la grille.
// ● Utilisez une boucle while pour parcourir les cases générées et colorez en rouge les 
// cases dont le numéro est multiple de 3, en vert les autres.
// ● Ajoutez un bouton « Effacer » qui supprime toutes les cases de la grille.

const grille = document.getElementById("grille");
const btnGenerer = document.getElementById("btn-generer");
const btnEffacer = document.getElementById("btn-effacer");

btnGenerer.addEventListener("click", () => {
    grille.innerHTML = "";

    for (let i = 1; i <= 25; i++) {
        const caseDiv = document.createElement("div");

        caseDiv.textContent = i;

        caseDiv.classList.add("case");

        grille.appendChild(caseDiv);
    }

    const grilleCases =  grille.querySelectorAll(".case");
    // ou alors
    //const grilleCases = grille.children;
    let j = 0;
    while (j < grilleCases.length) {
        const caseDiv = grilleCases[j];
        
        if (caseDiv.textContent % 3 === 0) {
            caseDiv.classList.add("case-rouge");
        }

        j++;
    }
});

btnEffacer.addEventListener("click", () => {
    while (grille.lastChild) {
        grille.lastChild.remove()
    }
    // ou alors
    //grille.innerHTML = "";
});