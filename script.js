// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero sulla base di queste regole:


// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// variabili statiche
const trainPriceform = document.querySelector('form');
const annulla = document.getElementById('annulla');
// variabili input dell'utente
const nomeUtente = document.getElementById('userName');
const distanza = document.getElementById('distance');
const ageGroup = document.getElementById('ageGroup');

// variabili output
const userNameSent = document.getElementById('userNameSent');
const distanceSent = document.getElementById('distanceSent');
const ageGroupSent = document.getElementById('ageGroupSent');
const ticketPrice = document.getElementById('ageGroupSent');
const finalTicket = document.getElementById('ticketPrice');
const randomCarrozza = document.getElementById('randomCarrozza');
const randonCP = document.getElementById('randomCP');
const result = document.getElementById('result').classList;

// variabili utili per la funzione del calcolo del biglietto
const kmTariff = 0.21;

// output finale 
trainPriceform.addEventListener('submit', 
    function(event) {
        // prevent di reset della pagina al submit
        event.preventDefault();
        
        // output dettaglio del passeggero
        userNameSent.innerHTML = nomeUtente.value;
        ageGroupSent.innerHTML = ageGroup.value;
        randomCarrozza.innerHTML = Math.floor(Math.random() * 7) + 1;
        randonCP.innerHTML = Math.floor(Math.random() * 99999);
        const distanceCalc = distanza.value;
        result.remove('d-none');
        
        // if else calcolo prezzo
        const underageDiscount = ((100 - 20) / 100);
        const elderlyDiscount = ((100 - 40) / 100);
        let baseTicketPrice = distanceCalc * kmTariff;
        if (ageGroupSent.innerText === 'Minorenne')  {
            finalTicket.innerHTML = (underageDiscount * baseTicketPrice).toFixed(2) + '€';
        } else if (ageGroupSent.innerText === 'Anziani') {
            finalTicket.innerHTML = (elderlyDiscount * baseTicketPrice).toFixed (2) + '€';
        } else {
            finalTicket.innerHTML = baseTicketPrice.toFixed(2) + '€';
        }
        
    }
)

// tasto annulla
annulla.addEventListener('click',
    function() {
        location.reload()
    }
)
