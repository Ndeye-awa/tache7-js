// -----------------EXERCICE 1-------------------- 
let afficheNombre = document.getElementById('afficheNombre')
let voirResultat = document.getElementById('voirResultat')
const nombre1 = parseInt(prompt('Entrez le premier nombre')) 
const nombre2 = parseInt(prompt('Entrez le deuxieme nombre')) 


voirResultat.addEventListener('click', function() {
    afficheNombre.innerText += `Le resultat est : ${nombre1*nombre2}`
})
