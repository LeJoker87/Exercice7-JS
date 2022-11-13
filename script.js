var saisie =[];
var prenom = 0;
var comptage = 0;

saisie[prenom] = prompt("Saisir un prénom")
while (saisie[prenom] != null) 
{
    document.write(saisie[prenom] + " ");
    prenom++;
    comptage++;
    saisie[prenom] = prompt("Saisir un prénom")
}

document.write("Il y as " + comptage + " Prénoms");