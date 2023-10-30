/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
  let strEs1 = "i datatype di javascript sono: ";
  let numEx = 14;
  let strEx = "testo";
  let bolEx = true;
  let nulEx = undefined;
  console.log(strEs1 + (typeof numEx +": "+numEx+", ")+(typeof strEx +": "+strEx+", ")+(typeof bolEx +": "+bolEx+", ")+(typeof nulEx +": "+nulEx+", ") );
  console.log("number sono numeri, string sono una serie di caratteri, boolean possono essere due valori: true o false mente null o undefined sono vuoti")

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
  let name = "Lorenzo";
  console.log("il mio nome è: " + name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
  let n1 = 12;
  let n2 = 20;
  let somma = n1 + n2
  console.log("risultato somma : " + somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
  let x = n1;
  console.log("x = "+ x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
  const COGNOME = "cognome"
  // COGNOME = "Pezzica" ERRORE!
  name = "Pezzica"; 
  console.log("il mio cognome è: " + name)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
  somma = x - 4; 
  console.log("risultato sottrazione: " + somma);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
  let name1 = "john";
  let name2 = "John";
  nameLower = name2.toLowerCase();
  let controllo

  //TEST CONCATENAZIONE TERNARIA 
  controllo = (name1 === name2 ) ? console.log(name1+" e "+name2+" sono uguali") : controllo = (name1 === nameLower) ? console.log(name1 +" e "+ nameLower +" sono uguali") : console.log(name1 +" e "+ nameLower +" Sono Diversi")

  //FUNZIONANTE
  // controllo = (name1 === name2 ) ? "sono uguali" : "sono diversi";
  // console.log(name1 +" e "+ name2 +" "+ controllo);
  // controllo = (name1 === nameLower) ? "sono uguali" : "sono diversi";
  // console.log(name1 +" e "+ nameLower +" "+ controllo);
