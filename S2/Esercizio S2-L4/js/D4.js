/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(base, altezza) {
  calcolo = base * altezza;
  return calcolo;
}
console.log(area(12, 11));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve 
 due numeri interi come parametri. La funzione deve 
 ritornare la somma dei due parametri, ma se il 
 valore dei due parametri è il medesimo deve invece 
 tornare la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(sumNum1, sumNum2) {
  let result;
  if (sumNum1 === sumNum2) {
    result = 3 * (sumNum1 + sumNum2);
    return result;
  } else {
    result = sumNum1 + sumNum2;
    return result;
  }
}

console.log(
  crazySum(
    parseInt(prompt("inserisci un numero intero")),
    parseInt(prompt("inserisci un altro numero intero"))
  )
);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola 
 la differenza assoluta tra un numero fornito come 
 parametro e 19. Deve inoltre tornare la differenza 
 assoluta moltiplicata per tre qualora il numero 
 fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(difNum) {
  if (difNum > 19) {
    return (difNum - 19) * 3;
  } else {
    return difNum - 19;
  }
}
console.log(
  crazyDiff(parseInt(prompt("inserisci un intero per la differenza")))
);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta 
 un numero intero n come parametro, e ritorna true 
 se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let n = parseInt(prompt("check boundry"));

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(parseInt(prompt("check boundary"))));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una
 stringa come parametro. La funzione deve aggiungere
 la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" 
 allora deve ritornare la stringa originale senza 
 alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function epify(string) {
  let parole = string.split(" ");
  let index = parole.indexOf("EPICODE");

  if (index === 0) {
    return string;
  } else if (index > 0) {
    parole.splice(index, 1);
    parole.unshift("EPICODE");
    return parole.join(" ");
  } else {
    return "EPICODE " + string;
  }
}

console.log(epify("epify this string EPICODE "));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che 
 accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia 
 un multiplo di 3 o di 7. 
 (Suggerimento: usa l'operatore modulo)
*/
function check3and7(check) {
  if (check % 3 === 0 || check % 7 === 0) {
    console.log("multipo di 3 o 7");
  } else {
    console.log("non multiplo di 3 o 7");
  }
}
check3and7(parseInt(prompt("controllo multiplo 3 o 7")));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", 
 il cui scopo è invertire una stringa fornita come 
 parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let reverse = (stringToReverse) => {
  let reversed = stringToReverse.split("").reverse().join("");
  return reversed;
};

console.log(reverse("stringa da invertire"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve
 come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima 
 lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let upperFirst = (stringToUpper) => {
  const ARR = stringToUpper.split(" ");
  for (let i = 0; i < ARR.length; i++) {
    ARR[i] = ARR[i].charAt(0).toUpperCase() + ARR[i].slice(1);
  }
  const UPPERSTRING = ARR.join(" ");
  return UPPERSTRING;
};
console.log(upperFirst("stringa in cui capitalizzare ogni prima lettera"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve
 come parametro una stringa. La funzione deve creare 
 una nuova stringa senza il primo e l'ultimo 
 carattere della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let cutString = (stringToCut) => {
  let cutStr = stringToCut.slice(1, -1);
  return cutStr;
};
console.log(cutString("stringa da cui rimuovere la prima e l'ultima lettera"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", 
 che accetta come parametro un numero n e ritorna 
 un'array contenente n numeri casuali inclusi tra
 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let randomArr = [];
let randomNum;
function giveMeRandom(n) {
  for (i = 0; i < n; i++) {
    randomNum = Math.floor(Math.random() * 20);
    //console.log(randomNum);
    if (randomNum <= 10) {
      randomArr.push(randomNum);
    } else {
      i--;
    }
  }
  return randomArr;
}
giveMeRandom(parseInt(prompt("quanti numeri aggiungere all'array?")));
let randomArrResult = giveMeRandom();
console.log(randomArrResult);
