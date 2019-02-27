/* 
Activité : gestion des contacts
*/

/**global variable */
var repertoire = [];
let features = ['Lister les contacts', 'Ajouter un contact', 'Quiter'];
let choose;

/**contact gestion */
var contact = class {
    constructor(nom, prenom,tel) {
        this.nom = nom;
        this.prenom = prenom;
        this.tel = tel;
    }
}

repertoire.push(new contact('Lévisse', 'Carole','697698659'));
repertoire.push(new contact('Nelsonne', 'Mélodie','669233757'));

/**function */
function afficherContact() {
    for (let i = 0; i < repertoire.length; i++) {
        console.log('Nom : ' + repertoire[i].nom + ' , prénom : ' + repertoire[i].prenom);
    }
}
function addContact() {
    let nom,prenom,tel;
    nom = window.prompt('Entrer le nom du nouveau contact');
    prenom = window.prompt('Entrer le prénom du nouveau contact');
    tel = window.prompt('Entrer le numéro de telephone du nouveau contact');
    repertoire.push(new contact(nom, prenom,tel));
    console.log('Le nouveau contact a été ajouté');
}

/**main */
console.log('Bienvenue dans le gestionnaire des contacts !');
do {
    for (let i = 0; i < features.length; i++) {
        console.log(i + 1 + ' : ' + features[i]);
    }
    choose = window.prompt('Choississez une option');

    if (choose == '1' || choose == '2' || choose == '3') {

        if (choose == '1') {
            console.log('');
            console.log('Voici la liste de tous vos contacts :');
            afficherContact();
        }
        if (choose == '2') {
            addContact(),
            console.log('');
            console.log('Le nouveau contact a été ajouté');
            document.cookie='repertoire:'+repertoire;
        }
        if (choose == '3') {
            console.log('');
            console.log('Au revoir');
        }
    } else {
        console.error('Veuiller saisir un numéro d\'option valide');
    }

} while (choose != 3);




