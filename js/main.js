/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

let casualNumber = []; 
const targetDom = document.getElementById('target');

let numeriInseriti = [];
;
for (let i = 0; i < 5; i++) {

    const numeriCasuali = generateUniqueRandomNumber (casualNumber, 1, 999);
    casualNumber.push(numeriCasuali);
    const currentElement = document.createElement('div');
    currentElement.classList.add(`n${i+1}`);
    currentElement.innerHTML = casualNumber[i];
    targetDom.append(currentElement);

}
console.log (casualNumber);

const tempoAttesa = 5;

setTimeout(function() {
    targetDom.classList.add('hide');


    // Il secondo timeout serve ad annullare la proprietà di Hoisting presente nel prompt (dato che all'inserimento del numero erano ancora visibili i numeri casuali)
    setTimeout(function() {
        for (let c = 0; c < 5; c++) {
            
            const emettiNumeri = parseInt(prompt('Inserisci qui il numero'));

            numeriInseriti.push(emettiNumeri);
            console.log (numeriInseriti) ;

            const numeriScelti = document.getElementById (`numeroScelto${c+1}`);
            numeriScelti.innerHTML = `${c+1} Numero scelto = ${emettiNumeri}` ;


            if (casualNumber.includes(emettiNumeri)) {
                console.log (`Il numero ${emettiNumeri} è stato indovinato`);
                numeriScelti.innerHTML = `Il Numero scelto  "${emettiNumeri}" è stato indovintato `;
            } else {
                numeriScelti.innerHTML = `Il Numero scelto  "${emettiNumeri}" è NON stato indovintato `;
            }



        
        }
    }, tempoAttesa * 50);

}, tempoAttesa * 1000);











function generateUniqueRandomNumber(blacklist, min, max) {

    let isValidNumber = false;
    let randomNumber;

    while (!isValidNumber) {
        randomNumber = generateRandomNumber(min, max);
        if (!blacklist.includes(randomNumber)) {
            isValidNumber = true;
        }
    }

    return randomNumber;

}

function generateRandomNumber(min, max) {
    const number = Math.floor(Math.random() * (max - min +1)) + min;
    return number;
}

