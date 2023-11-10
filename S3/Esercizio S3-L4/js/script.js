let estractButton = document.getElementById("estractButton");

window.onload = function () {
  for (i = 1; i < 77; i++) {
    let elementoTabella = `
                            
                                <h3>${i}</h3>
                            
    `;
    document.getElementById("tabNumeriEstratti").innerHTML += elementoTabella;
  }
};

console.dir(estractButton);
let estractNumber = (button) => {
  button.addEventListener("click", (evt) => {
    let rng = Math.round(Math.random() * 77);
    numCheck(rng);
  });
};
estractNumber(estractButton);

function numCheck(genertedNum) {
  let tabNum = document.querySelectorAll("h3");
  for (const key in tabNum) {
    console.log(tabNum[key].innerHTML);

    if (tabNum[key].innerHTML === String(genertedNum)) {
      tabNum[key].classList.add("active");
    }
  }
  console.log(genertedNum);
}
