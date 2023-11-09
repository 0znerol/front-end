/* ESERCIZIO 1
         Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
      */
console.log(document.body);
console.dir(document.body);
console.log(document.body.textContent);

const changeTitle = function () {
  document.getElementById("title").innerText = "titolo cambiato";
};
changeTitle();
/* ESERCIZIO 2
Scrivi una funzione per aggiungere al titolo della pagina una classe
"myHeading"
          */

const addClassToTitle = function () {
  document.getElementById("title").classList.add("myHeading");
};
addClassToTitle();

/* ESERCIZIO 3
             Scrivi una funzione che cambi il testo dei p figli di un div
            */

const changePcontent = function () {
  let pInDiv = document.querySelectorAll("div p");
  for (const key in pInDiv) {
    pInDiv[key].innerText = "testo cambiato con js";
  }
  console.log(pInDiv);
  console.dir(pInDiv);
};
changePcontent();

/* ESERCIZIO 4
             Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
            */

const changeUrls = function () {
  let everyLink = document.querySelectorAll("a");
  everyLink[0].href = "https://www.google.com";
  console.log(everyLink);
  console.dir(everyLink);
};
changeUrls();
/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
 */
let allUl = document.querySelectorAll("ul");
const addToTheSecond = function () {
  let newLi = document.createElement("li");
  newLi.innerText = "aggiunto con js";
  allUl[1].appendChild(newLi);
};
addToTheSecond();
/* ESERCIZIO 6
         Scrivi una funzione che aggiunga un paragrafo al primo div
          */

const addParagraph = function () {
  let firstDiv = document.querySelector("div");
  let newP = document.createElement("p");
  newP.innerText =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur incidunt laborum, recusandae reprehenderit deserunt, minima molestiae fuga earum vel exercitationem sit rerum. Exercitationem corporis earum neque dolorem maiores velit.";
  firstDiv.appendChild(newP);
  console.dir(firstDiv);
  console.log(firstDiv);
};
addParagraph();
/* ESERCIZIO 7
             Scrivi una funzione che faccia scomparire la prima lista non ordinata
          */

const hideFirstUl = function () {
  allUl[0].style.display = "none";
};
hideFirstUl();
/* ESERCIZIO 8
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
  allUl.forEach((liste) => {
    liste.style.backgroundColor = "green";
  });
};
paintItGreen();
/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/
let h1 = document.getElementById("title");
h1.onclick = function () {
  let testo = h1.innerText.slice(h1.length, -1);
  h1.innerText = testo;
  console.log(testo);
};
/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come 
 contenuto di un alert()
*/
let foot = document.querySelector("footer");
foot.onclick = function () {
  let footLink = document.querySelector("footer h3 a");
  alert(footLink.href);
  console.log(footLink);
};
/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea".
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, 
 prezzo
*/
let tableArea = document.querySelector("#tableArea");
let table = document.createElement("table");
const generateTable = function () {
  table.border = "1";
  table.innerHTML = `
              <thead>
                <th>Immagine</th>
                <th>Nome prodotto</th>
                <th>Quantità</th>
                <th>Prezzo</th>
              </thead>
              `;
  for (i = 0; i < 5; i++) {
    let tableElement = `
                <tr>
                  <td style="text-align: center"><img src="https://i0.wp.com/www.gktoday.in/wp-content/uploads/2016/04/Product-in-Marketing.png?w=1140&ssl=1" alt="productImg" style="width: 150px"></td>
                  <td>prodotto${i}</td>
                  <td>${Math.floor(Math.random() * 10)}</td>
                  <td>${Math.floor(Math.random() * 10)}</td>
                </tr>
            `;
    table.innerHTML += tableElement;
  }
  tableArea.appendChild(table);
  console.log(table);
};
generateTable();
/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella 
 precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function (prodName, amount, price) {
  let newRow = `
                <tr>
                  <td style="text-align: center"><img src="https://i0.wp.com/www.gktoday.in/wp-content/uploads/2016/04/Product-in-Marketing.png?w=1140&ssl=1" alt="productImg" style="width: 150px"></td>
                  <td>${prodName}</td>
                  <td>${amount}</td>
                  <td>${price}</td>
                </tr>
            `;
  table.innerHTML += newRow;
};
addRow("prodotto es12", 99, 100);
/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando 
eseguita
*/

const hideAllImages = function () {
  let allImg = document.querySelectorAll("img");
  allImg.forEach((img) => {
    img.style.display = "none";
  });
  console.log(allImg);
};
// hideAllImages();
/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un 
colore random ad ogni click ricevuto
*/
let h2 = document.getElementById("changeMyColor");
h2.onclick = function () {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  h2.style.color = `#${randomColor}`;
  console.log(h2);
};

/* EXTRA ESERCIZIO 16
Crea una funzione che elimini le vocali da ogni elemento testuale della pagina 
(puoi aiutarti con i nuovi metodi degli array di ES6)
*/

let arrVocali = ["a", "e", "i", "o", "u"];
const deleteVowels = function () {
  let bodyTxt = document.body.textContent;
  let newBodyTxt = bodyTxt.replace(/[aeiou]/g, "");
  console.log(newBodyTxt);
  document.body.textContent = newBodyTxt;
  console.log(document.body.textContent);
};
// deleteVowels();
