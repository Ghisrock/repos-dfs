let recetteTotale = 0;
let age = 11;
let billets1500 = 0;
let billets2500 = 0;
let recetteAvecReduction = 0;

do {
     
let prix;
if (age <16 ) {
 prix = 1500;
  Billets1500++;
}else {
    prix = 2500;
    Billets2500++;
}
console.log("age:",age,"ans - prix:",prix,"fcfa");
recetteTotale = recetteTotale + prix;
let reduction = prix;
if (age >= 18) {
    reduction = prix - 500;
}
    Recetteavecreduction = Recetteavecreduction + reduction;
}
console.log("Recette totale:", recetteTotale,"fcfa");
console.log("billets à 1500 fcfa:", Billets1500);
console.log("billets à 2500:", Billets2500);
console.log("recette totale sans reduction:", recetteTotale, "fcfa");
console.log("Recette totale avec réduction (18+):", Recetteavecreduction, "fcfa");