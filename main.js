//crea function for getRandomInt

function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max-min+1) + min);
    
}

console.log(getRandomInt(1,5))


//generare 5 numeri random in un array da 1-100


//creo un array vuoto per ospitare i numeri generati
const numeriGenerati = [];

//usare ciclo while per generare 5 numeri diversi uno dall'altro

while (numeriGenerati.length < 5) {
    const numeroCasuale = getRandomInt(1,100);

    if (!numeriGenerati.includes(numeroCasuale)) {
        numeriGenerati.push(numeroCasuale);
    }
}

//stampare risultato

console.log(numeriGenerati)

const messaggio = document.getElementById('messaggio');
const numeri = document.getElementById('numeri')

numeri.innerHTML = numeriGenerati;
messaggio.innerHTML = 'Osserva i seguenti numeri per 30 secondi.'

//dopo 30 secondi sparisce l'array dall'HTML

const ritardo = 30;
setTimeout(resetMessaggio, ritardo*1000);

//dopo 1 secondo, crea 5 prompt per chiedere all'utente 5 numeri diverse tra loro che hanno ricordato dall'array

setTimeout(function () {
    const numeriInseriti = getNumeriUtente();
    console.log(numeriInseriti)
    //stampare i numeri che sono uguali in entrambi array

    const numeriIndovinati = verificaNumeriIndovinati(numeriGenerati,numeriInseriti);
    stampaNumeriIndovinati(numeriIndovinati);
    console.log(numeriIndovinati)

}, (ritardo + 1) * 1000);







//definire le function

//reset messaggio
function resetMessaggio () {
    numeri.innerHTML = '';
    messaggio.innerHTML = '';
}

//get Numeri Utente
function getNumeriUtente () {
    //creo un'array vuoto dove andranno i numeri inseriti
    const NumeriUtente = [];

    //uso ciclo while per assicurare che i numeri non si ripetano tra loro e che sono numeri da 1-100
    while (NumeriUtente.length < 5) {
        const numero = parseInt(prompt('Inserisci un numero:'));
        if (!NumeriUtente.includes(numero) && (!isNaN(numero)) && (numero < 100 || numero > 0)); {
        NumeriUtente.push(numero);
        }
    };

    return NumeriUtente;
    
};

//verifica numeri indovinati


function verificaNumeriIndovinati(arrayGenerati,arrayInseriti) {
    const indovinati = [];

    console.log('arrayGenerati' + arrayGenerati,'arrayInseriti' + arrayInseriti);

    for (let i = 0; i < arrayInseriti.length; i++) {
        if (arrayGenerati.includes(arrayInseriti[i])) {
            indovinati.push(arrayInseriti[i]);
            console.log('indovinati ' + indovinati)
        }
      console.log(i)
    }
    return indovinati;
};

//stampare risultati in video

function stampaNumeriIndovinati (arrayNumInd) {
    const qtaNumInd = arrayNumInd.length;
    
    let text = qtaNumInd == 1?'numero':'numeri'
    messaggio.innerHTML = 'Hai indovinato ' + qtaNumInd + '  ' + text + '.'; 
    numeri.innerHTML = arrayNumInd 
}




