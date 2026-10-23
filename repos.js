let jour = "Mardi";
switch (jour) {
    case "samedi":
    case "dimanche":
        console.log(jour + " est un jour de repos à  la DFS.");
        break;
        case "lundi":
        case"mardi":
        case  "mercredi":
        case "jeudi":
        case "vendredi":
            console.log(jour + " est un jour de travail à la DFS.");
            break;
default:
    console.log("Jour non reconnu.");
}