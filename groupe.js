let recetteTotale = 0;
let age = 11;
let billets1500 = 0;
let billets2500 = 0;
let recetteAvecReduction = 0;
do {
    let prix;
    if (age < 16) {
        prix = 1500;
        billets1500++;
    } else {
        prix = 2500;
        billets2500++;
    }
    console.log("age:", age, "ans - prix:", prix, "fcfa");
    recetteTotale += prix; age++;

    let reduction = prix;
    if (age >= 18) {
        reduction = prix - 500;
    }
    recetteAvecReduction += reduction;
}
while (age <=20);

console.log("Recette totale:", recetteTotale, "fcfa");
console.log("billets à 1500 fcfa:", billets1500);
console.log("billets à 2500:", billets2500);