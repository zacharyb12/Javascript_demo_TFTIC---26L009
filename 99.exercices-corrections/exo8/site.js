// Partez du tableau : [5, 12, 3, 8, 1, 2, 7]
// ● Ajoutez la valeur 15 à la fin et la valeur 9 au début.
// ● Triez le tableau par ordre croissant, puis inversez-le.
// ● Retirez le dernier élément et le premier élément.
// ● Vérifiez si le tableau contient la valeur 8
// ● Créer une copie du tableau qui contiendra le double des nombres du tableau 
// original inférieur à 10.
// ● Trouvez la position du premier nombre entre 5 à 10 dans les deux tableaux.
// ● Affichez les tableaux en console avec « console.table() ».

let tab = [5, 12, 3, 8, 1, 2, 7];
tab.push(15);
tab.unshift(9);

tab.sort((a,b) => a - b);
tab.reverse();

tab.shift();
tab.pop();

console.log(tab.includes(8));

const tab2 = tab.map(value => {
    if (value < 10) {
        return value *2;
    } else {
        return value;
    }
});
console.log(tab2);

console.log(tab.findIndex((value) => value >= 5 && value <= 10));
console.log(tab2.findIndex((value) => value >= 5 && value <= 10));

console.table(tab);
