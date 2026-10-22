let recetteTotale = 0;
let Billets1500 = 0;;
let Billets2500 = 0;
let Recetteavecreduction = 0;
for (let age =11; age <= 20; age ++) {
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