let compteur = 0;
// vérification de la condition avant de commencer
while (compteur < 10) {
    console.log(compteur);

    if (compteur == 8) {

        compteur++;
        // passe la suite des instructions pour l'itération en cours
        continue;
    }

    compteur ++;
}

let choixUtilisateur = "";

// Effectue une première fois les instructions avant de tester la condition
do {
    choixUtilisateur = prompt("Quel est votre age ?");
} while(!choixUtilisateur || isNaN(choixUtilisateur));

console.log(`vous avez ${choixUtilisateur} ans`);

// boucle (éléments de départ; condition de sortie; modification entre chaque itération)
console.log("---for---")
let estFini = false;
for (let i = 0; !estFini; i++) {
    if (i == 8) {
        continue;
    }
    if (i == 9) {
        estFini = true;
    }

    if (i == 10) {
        // sortie de la boucle même la condition principale n'est pas remplie
        break;
    }
    console.log(i);
    
}

boucleFor(0,10);

// spolier: une fonction
function boucleFor(depart, fin) {
    console.log("dans ma fonction")
    for (let i = depart;; i++) {
        console.log(i)
        if (i == fin) {
            // sortie de la fonction
            // indirectement sortie de la boucle
            return;
        }
    }
    console.log("fin de la fonction")
}