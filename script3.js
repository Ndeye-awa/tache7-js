// -----------------EXERCICE 3-------------------- 

function calculFactoriel() {
    const nombre = parseInt(prompt('Entrez un nombre'))


if (isNaN(nombre) || nombre < 0) {
    alert ('entrez un nombre valide positif ou zero');
    return;
}


let factoriel = 1;
    for (let i = 1; i <= nombre; i++) {
        factoriel *= i;
    }

const resultat = `La factorielle de ${nombre} est ${factoriel}`;
document.getElementById('resultatFactoriel').innerText = resultat;
}