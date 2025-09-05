// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero sulla base di queste regole:


// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// chiediamo all'utente la sua etá
const userAge = parseInt(prompt('inserisci la tua etá'))
console.log("etá dell'utente: " + userAge);

// chiediamo all'utente quanti km deve percorrere
const userKm = parseInt(prompt('Quanti Chilometri devi percorrere?'))
console.log("Distanza in Km da percorrere: " + userKm);

// variabili necessarie per continuare il programma
const kmTariff = 0.21;
const underageDiscount = ((100 - 20) / 100);
const elderlyDiscount = ((100 - 40) / 100);

let discountTicketPrice;

// check di quanto costerá il biglietto senza sconti
let baseTicketPrice = ((userKm * kmTariff)).toFixed(2);
console.log('Costo del biglietto: ' + baseTicketPrice + ' €');

// applichiamo uno sconto del 20% nel caso dovesse essere minorenne
if (userAge < 18)  {
    let discountTicketPrice = (underageDiscount * baseTicketPrice).toFixed(2)
    console.log("Costo del biglietto con sconto giovani applicato " + discountTicketPrice + ' €');
    alert('il tuo biglietto costerá: ' + discountTicketPrice + ' €')
} 

// applichiamo uno sconto del 40% nel caso dovesse essere over 65
else if (userAge > 65) {
    let discountTicketPrice = (elderlyDiscount * baseTicketPrice).toFixed(2)
    console.log("Costo del biglietto con sconto anziani applicato " + discountTicketPrice + ' €')
    alert('il tuo biglietto costerá: ' + discountTicketPrice + ' €')
}

// infine il biglietto nel resto dei casi
else {
    alert('il tuo biglietto costerá: ' + baseTicketPrice + ' €')
}

