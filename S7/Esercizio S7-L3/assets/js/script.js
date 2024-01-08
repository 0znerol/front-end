let i = 0;
let xhr = new XMLHttpRequest();
xhr.open("GET", `https://striveschool-api.herokuapp.com/books`); //definisco method e url
xhr.send(); //eseguo chiamata
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let json = xhr.responseText;
    let jsonArr = JSON.parse(json);
    console.log(jsonArr);
    addCard(jsonArr);
  }
};
function addCard(jsonArr) {
  let cardDivs = document.querySelectorAll(".col-3");
  let cartUl = document.querySelector(".dropdown-menu");
  //   console.log(discardBt);
  cardDivs.forEach((element) => {
    if (jsonArr[i].title.length > 40) {
      console.dir(jsonArr[i].title);
      jsonArr[i].title = jsonArr[i].title.slice(0, 40) + "...";
    }
    element.innerHTML = `<div class="card" style="width: 300px; height: 30em">
                                <div>
    
                                    <img src="${jsonArr[i].img}" class="card-img-top" style="height: 20em" alt="...">
    
                                </div>
                                <div class="card-body row">
                                    <div class="row h-50">
                                        <h5 class="card-title">${jsonArr[i].title}</h5>
                                    </div>
                                    <div class="row">
                                        <p class="card-text">${jsonArr[i].price}€</p>
                                    </div>
                                    <div class="col text-center"><button class="btn btn-primary m-1">Compra</button><button class="btn btn-danger m-1">Elimina</button></div>
                                </div>`;
    let delBtn = document.querySelectorAll(".btn-danger")[i];
    delBtn.addEventListener("click", (event) => {
      console.log("test");
      console.log(event.target.parentNode.parentNode.parentNode);
      event.target.parentNode.parentNode.parentNode.parentNode.remove();
    });
    let cartBtn = document.querySelectorAll(".btn-primary")[i];
    let h5 = document.querySelectorAll("h5")[i];
    let percent = (h5.innerText.length / 100) * 45;
    console.log(percent);
    let titles = h5.innerText.slice(0, percent);
    console.log(titles);
    let price = document.querySelectorAll(".card-text")[i];
    cartBtn.addEventListener("click", (event) => {
      cartUl.innerHTML += `<li class="row"><span class="col-6 border">${titles}...</span><span class="col-4 text-center border">${price.innerText}</span></li>`;
    });
    i++;
  });
}
// document.addEventListener("DOMContentLoaded", () => {});
// window.onload = () => {
//   console.log("aooo");
//   let cartBtn = document.querySelectorAll(".btn-primary");
//   console.log(cartBtn[1]);
// };
