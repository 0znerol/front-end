// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array
 di numeri casuali (creati con la funzione "giveMeRandom") e 
 per ogni elemento stampa in console se il suo valore è 
 maggiore di 5 o no. La funzione deve inoltre ritornare la 
 somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let checkArray = (arrayToCheck) => {
  let somma = 0;
  for (let i = 0; i < arrayToCheck.length; i++) {
    if (arrayToCheck[i] > 5) {
      console.log(arrayToCheck[i] + " è maggiore di 5");
      somma += arrayToCheck[i];
    } else {
      console.log(arrayToCheck[i]);
    }
  }
  return somma;
};

let arr = giveMeRandom();

console.log("la somma dei numeri maggiori di 5 è: " + checkArray(arr));
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato 
 "shoppingCart". Ognuno di questi oggetti ha le seguenti 
 proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il 
 totale dovuto al negozio (tenendo conto delle quantità di ogni 
 oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let shoppingCart = [
  {
    price: Math.floor(Math.random() * 40),
    name: "name1",
    Id: Math.floor(Math.random() * 1000),
    quantity: Math.floor(Math.random() * 10),
  },
  {
    price: Math.floor(Math.random() * 40),
    name: "name2",
    Id: Math.floor(Math.random() * 1000),
    quantity: Math.floor(Math.random() * 10),
  },
  {
    price: Math.floor(Math.random() * 40),
    name: "name3",
    Id: Math.floor(Math.random() * 1000),
    quantity: Math.floor(Math.random() * 10),
  },
  {
    price: Math.floor(Math.random() * 40),
    name: "name4",
    Id: Math.floor(Math.random() * 1000),
    quantity: Math.floor(Math.random() * 10),
  },
];
console.log(shoppingCart);
let shoppingCartTotal = () => {
  let somma = 0;
  for (i = 0; i < shoppingCart.length; i++) {
    somma += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return somma;
};

console.log("totale shopping cart : " + shoppingCartTotal());
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato 
 "shoppingCart". Ognuno di questi oggetti ha le seguenti 
 proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un 
 nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" 
 e ritorna il nuovo numero totale degli elementi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let addToShoppingCart = (prezzo, nome, iden, quantita) => {
  let newObj = {
    price: prezzo,
    name: nome,
    id: iden,
    quantity: quantita,
  };
  shoppingCart.push(newObj);
  return shoppingCart.length;
};
console.log(
  addToShoppingCart(
    Math.floor(Math.random() * 40),
    "newItem",
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 10)
  )
);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato 
 "shoppingCart". Ognuno di questi oggetti ha le seguenti 
 proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve 
 l'array "shoppingCart" e ritorna l'oggetto più costoso in 
 esso contenuto.
*/
let maxShoppingCart = () => {
  let piuCostoso = 0;
  let nomePiuCostoso;
  for (i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > piuCostoso) {
      piuCostoso = shoppingCart[i].price;
      nomePiuCostoso = shoppingCart[i].name;
    }
  }
  return nomePiuCostoso;
};
console.log(shoppingCart);
console.log("l'oggetto piu costoso è: " + maxShoppingCart());
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno 
 di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" 
 e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let latestShoppingCart = () => {
  return shoppingCart[shoppingCart.length - 1];
};
console.log(latestShoppingCart());
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let loopUntil = (x) => {
  let i = 0;
  while (i < 3) {
    let n = Math.floor(Math.random() * 9);
    if (n > x) {
      i++;
      console.log(n + " è maggiore di " + x);
    } else {
      console.log(n + " non maggiore di " + x);
    }
  }
};

console.log(loopUntil(4));

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let avgArr = [2, 3, 7, "sticaz", 44, 20];

let average = () => {
  let arrType = typeof avgArr[i];
  console.log(typeof avgArr[i]);

  for (let i = 0; i < avgArr.length; i++) {
    if (arrType === "number") {
    }
  }
};

console.log(average());

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
