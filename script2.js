// -----------------EXERCICE 2-------------------- 
const n = parseInt(prompt('Entrez un nombre'))
const modulo = n % 4

let resultat = `Si l'on divise ${n} par 4, le reste est de ${modulo}`;
document.getElementById('resultatModulo').innerText = resultat