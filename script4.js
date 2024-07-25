const afficheMoyenne = document.getElementById('moyClasse')
let noteSuperieur = document.getElementById('noteSup')
const tab = [];

function saisirNote() {
    let nombreDeNotes = parseInt(prompt('entrez le nombre de notes'));
    for(let i = 0; i <= nombreDeNotes; i++){
        const noteEleve = parseFloat(prompt(`Entrez la note ${i + 1}`));
        tab.push(noteEleve)
    }
    return tab;
}


function calculMoyenne(tab) {
    let somme = tab.reduce(function (acc, val) {
        return acc + val;
    }, 0)
    let moyenne = somme / tab.length;
    return moyenne;
}


function noteSup(tab, moyenne) {
    let sup = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > moyenne){
            sup++
        }
    }
    return sup;
}

function main() {
    let note = saisirNote()
    let moyennes = calculMoyenne(note)
    let noteSupEleve = noteSup(note, moyennes)
    afficheMoyenne.innerText = `La moyenne de la classe est ${moyennes}`
    noteSuperieur.innerText = `Le nombre d'élève qui ont une note supérieur à la moyenne de la classe est: ${noteSupEleve}`;

}
main()