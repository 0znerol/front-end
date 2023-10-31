/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeri = {
  num1: 5,
  num2: 10,
};

numeri.num1 = parseInt(prompt("inserisci un numero"));
numeri.num2 = parseInt(prompt("inserisci un altro numero"));

console.log(numeri.num1 + " " + numeri.num2);
if (numeri.num1 > numeri.num2) {
  console.log(numeri.num1 + " è maggiore di " + numeri.num2);
} else if (numeri.num1 < numeri.num2) {
  console.log(numeri.num2 + " è maggiore di " + numeri.num1);
} else if (numeri.num1 == numeri.num2) {
  console.log(numeri.num2 + " è uguale a " + numeri.num1);
}

// /* ESERCIZIO 2
//   Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
let num3 = parseInt(
  prompt("inserisci un numero per controllare se è diverso da 5")
);
if (num3 != 5) {
  console.log("not equal");
} else {
  console.log("equal");
}

// /* ESERCIZIO 3
//   Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
let numEs3 = prompt("inserisci un numero da dividere per 5");
let result = numEs3 % 5;
console.log("numero da dividere per 5: " + numEs3);
if (result == 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}
// /* ESERCIZIO 4
//   Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
let interi = [
  prompt("inserisci un intero"),
  prompt("inserisci un altro intero"),
];

const SOMMA = interi[0] + interi[1];
const SOTTRAZIONE = interi[0] - interi[1];

console.log(interi[0] + " " + interi[1]);
if (interi[0] == 8 || interi[1] == 8) {
  console.log(interi + " uno dei numeri è uguale a 8");
} else if (SOMMA == 8) {
  console.log("la somma di " + interi[0] + " e " + interi[1] + " è uguale a 8");
} else if (SOTTRAZIONE == 8) {
  console.log(
    "la sottrazione di " + interi[0] + " e " + interi[1] + " è uguale a 8"
  );
} else {
  console.log("ne la somma ne la sottrazione ne nessun numero sono uguali a 8");
}
// let int1 = parseInt(prompt("inserisci un intero"));
// let int2 = parseInt(prompt("inserisci un altro intero"));

// /* ESERCIZIO 5
//   Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
//   C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
//   Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
// */
// /* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = parseFloat(prompt("quanto spendi?"));
let spedizione = 10;
if (totalShoppingCart > 50) {
  console.log("hai diritto alla spedizione gratuita");
  console.log("totale: " + totalShoppingCart);
} else {
  console.log("superando i 50 avrai diritto alla spedizione gratuita");
  console.log("totale: " + (totalShoppingCart + spedizione));
}

// /* ESERCIZIO 6
//   Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
//   Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
let sconto = (totalShoppingCart * 20) / 100;
console.log("lo sconto è del 20% è di " + sconto + "€");
let totaleScontato = totalShoppingCart - sconto;
if (totaleScontato > 50) {
  console.log(
    "hai diritto alla spedizione gratuita. totale: " + totaleScontato
  );
} else {
  console.log(
    "non hai diritto alla spedizione gratuita. totale: " +
      (totaleScontato + spedizione)
  );
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let a = parseInt(prompt("inserisci un numero da ordinare"));
let b = parseInt(prompt("inserisci un numero da ordinare"));
let c = parseInt(prompt("inserisci un numero da ordinare"));

if (a < b && b < c) {
  console.log(c + " " + b + " " + a);
} else if (b < a && c < a) {
  if (b < c) {
    console.log(a + " " + c + " " + b);
  } else {
    console.log(a + " " + b + " " + c);
  }
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let val = prompt("verifica del valore");
console.log(typeof val);

// /* ESERCIZIO 9
//   Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
// */
// /* SCRIVI QUI LA TUA RISPOSTA */
let par = prompt("verifica se il valore è pari");
let pari = par % 2;
if (pari == 0) {
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
}

// //ESERCIZIO 10
// //Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
// /* SCRIVI QUI LA TUA RISPOSTA */
let val1 = 7;
if (val1 < 10) {
  console.log("Meno di 10");
} else if (val1 < 5) {
  console.log("Meno di 5");
} else if (val1 >= 10) {
  console.log("Uguale a 10 o maggiore");
}

// /* ESERCIZIO 11
//   Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
// */
// /* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
console.log(me);
me.city = "Toronto";
console.log(me);

// /* ESERCIZIO 12
//   Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
// */
// /* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

// /* ESERCIZIO 13
//   Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);
// /* ESERCIZIO 14
//   Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
let emptyArr = [];
let i = 1;
while (i < 11) {
  emptyArr.push(i);
  i++;
}
console.log(emptyArr);
// /* ESERCIZIO 15
//   Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
emptyArr[9] = 100;
console.log(emptyArr);
