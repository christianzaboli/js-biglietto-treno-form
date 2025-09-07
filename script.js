// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero sulla base di queste regole:


// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// variabili statiche
const trainPriceform = document.querySelector('form');

// variabili input dell'utente
const nomeUtente = document.getElementById('userName');
const distanza = document.getElementById('distance');
const ageGroup = document.getElementById('ageGroup');

// variabili output
const userNameSent = document.getElementById('userNameSent');
const distanceSent = document.getElementById('distanceSent');
const ageGroupSent = document.getElementById('ageGroupSent');
const ticketPrice = document.getElementById('ageGroupSent')
const finalTicket = document.getElementById('ticketPrice')

// variabili utili per la funzione del calcolo del biglietto
const kmTariff = 0.21;

// output finale 
trainPriceform.addEventListener('submit', 
    function(event) {
        
        // prevent di reset della pagina al submit
        event.preventDefault();
        
        // output dettaglio del passeggero
        userNameSent.innerHTML = nomeUtente.value;
        distanceSent.innerHTML = distanza.value;
        ageGroupSent.innerHTML = parseInt(ageGroup.value);
        
        // if else calcolo prezzo
        const underageDiscount = ((100 - 20) / 100);
        const elderlyDiscount = ((100 - 40) / 100);
        let baseTicketPrice = ((parseInt(distanceSent.innerText) * kmTariff)).toFixed(2);
        if (ageGroupSent.innerText === '10')  {
            finalTicket.innerHTML = (underageDiscount * baseTicketPrice).toFixed(2)
        } else if (ageGroupSent.innerText === '100') {
            finalTicket.innerHTML = (elderlyDiscount * baseTicketPrice).toFixed(2)
        } else {
            finalTicket.innerHTML = (parseInt(baseTicketPrice).toFixed(2)) + '€'
        }
        
    }
)
