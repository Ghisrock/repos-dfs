let objectif = 50000;
let epargne = 4000;
let semaine = 0;
let montant = 0;

while (montant < objectif) {
    montant += epargne;
    semaine++;
}

console.log("il faut " + semaine + " semaines");