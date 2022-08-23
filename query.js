var query = document.querySelector("nav ul li");
console.log("Affichage de query");
console.log(query);

var queryAll_1 = document.querySelectorAll(".menu li");
console.log("Affichage de queryAll_1");
console.log(queryAll_1);

console.log("Affichage de chaque éléments de queryAll_1 par appels successifs")
console.log(queryAll_1[0]);
console.log(queryAll_1[1]);
console.log(queryAll_1[2]);

var queryAll_2 = document.querySelectorAll("nav ul li");
// selection de tous les éléments LI contenu dans un UL lui même dans un NAV
console.log("Affichage de queryAll_2");
// cela affiche trois éléments LI trouvés par la requête
console.log(queryAll_2);

console.log('Affichage de chaque éléments de queryAll_1 avec une boucle pour : ');
for (let index = 0; index < queryAll_2.length; index=index+1)
// queryAll_2.length vaut trois, car il y a trois LI trouvés
{
    console.log("index="+index);
    const element = queryAll_2[index];
    console.log(element);
}
