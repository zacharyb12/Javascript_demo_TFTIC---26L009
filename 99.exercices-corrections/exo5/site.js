// Créez une page HTML avec plusieurs zones d'affichage.
// ● Déclarez dans le JavaScript la date du jour et une date de naissance.
// ● Calculez et affichez l'âge en années dans la page.
// ● Affichez la date du prochain anniversaire dans un format lisible où le mois apparaît
// en toutes lettres (ex : 25 juin 2025).
// ● Bonus : Calculez et affichez le nombre de jours restants avant ce prochain
// anniversaire.
// NB : Les résultats doivent apparaître au chargement de la page.

const today = new Date();
const birthDate = new Date (2000, 9, 5);

const ageText = document.getElementById("ageText");
const nextBirthDateText = document.getElementById("nextBirthDateText");
const dayUntilNextBirthDateText = document.getElementById("dayUntilNextBirthDateText");


// Le calcul du prochain anniversaire
let nextBirthDate = new Date (today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

if (nextBirthDate < today) {
    nextBirthDate.setFullYear(nextBirthDate.getFullYear()+1);
}
// affichage du prochain anniversaire
nextBirthDateText.textContent = nextBirthDate.toLocaleDateString("FR-fr", {
    day: "numeric",
    month: "long",
    year: "numeric"
});


// calcul du nombre de jour avant le prochain anniversaire
const dayUntilNextBirthDate = nextBirthDate.getTime() - today.getTime();
dayUntilNextBirthDateText.textContent = `${Math.round(dayUntilNextBirthDate/(1000*60*60*24))} jours`;


// calcul de l'age en année
const age = nextBirthDate.getFullYear() - birthDate.getFullYear() - 1;
ageText.textContent = `${age} ans`