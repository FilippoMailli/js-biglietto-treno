/*
Impostare il prezzo del biglietto in base a km ed età del viaggiatore

Impostiamo le variabili, ossia:

    - età
    - km
    - prezzoconst = 0,21
    - scontomin = 80%
    - scontomax = 60%
    - prezzosconto
    - prezzotot
    - arrotonda

Chiediamo all'utente di inserire la propria età e i chilometri da percorrere.

Definiamo lo sconto da applicare sulla base del prezzoconst.

Calcoliamo il prezzosconto con l'operazione: scontomin || scontomax * prezzoconst.

Definiamo il prezzotot con la moltiplicazione dei km con il prezzosconto.
*/

var eta, km, prezzosconto, prezzotot;
var prezzoconst = 0.21;
var scontomin = 0.8;
var scontomax= 0.6;
var arrotonda;

var km = prompt('Inserisci i chilometri da percorrere: ');
console.log(km);
document.getElementById('chilometri').innerHTML = km;
var eta = prompt('Inserisci la tua età: ');
console.log(eta);
document.getElementById('anni').innerHTML = eta;

//Abbiamo inserito i chilometri e l'età del passeggiero

if (eta <= 18) {
    var prezzosconto = prezzoconst * scontomin;
}
else if (eta >= 65) {
    var prezzosconto = prezzoconst * scontomax;
}
else {
    var prezzosconto = prezzoconst;
}
console.log(prezzosconto);
//Definiamo il prezzo da applicare in base all'età

var prezzotot = prezzosconto * km;
//Arrotondiamo al secondo decimale dopo la virgola
var arrotonda = prezzotot.toFixed(2);
console.log(arrotonda);
document.getElementById('totale').innerHTML = arrotonda;

//Mostro i dati del biglietto in HTML
document.getElementById('container').setAttribute('class','visible');
