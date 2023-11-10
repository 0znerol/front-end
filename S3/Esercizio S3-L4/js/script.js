let estractButton = document.getElementById("estractButton");
let generateTabButton = document.getElementById("genPTab");
window.onload = function () {
  generateExtractionTab();
};
function generateExtractionTab() {
  for (i = 1; i < 77; i++) {
    let elementoTabella = `
                                
                                    <h3>${i}</h3>
                                
        `;
    document.getElementById("tabNumeriEstratti").innerHTML += elementoTabella;
  }
}

generateTabButton.addEventListener("click", (event) => {
  generatePlayerTab();
});

function generatePlayerTab() {
  let playerTabArr = [];

  for (i = 1; i < 25; i++) {
    let playerTabNum = Math.round(Math.random() * 77);
    if (!playerTabArr.includes(playerTabNum)) {
      playerTabArr.push(playerTabNum);
      let elementoTabella = `
                                
            <h3>${playerTabNum}</h3>
        
    `;
      document.getElementById("playerTab").innerHTML += elementoTabella;
    } else {
      i--;
    }
  }
  document.getElementById(
    "playerTab"
  ).innerHTML += `<div class="spacerDiv"></div>`;
}

let rngArr = [];
let estractNumber = (button) => {
  button.addEventListener("click", (evt) => {
    generteNCheck();
  });
};
estractNumber(estractButton);

function generteNCheck() {
  let rng = Math.round(Math.random() * 77);

  if (!rngArr.includes(rng)) {
    rngArr.push(rng);
    changeBG(rng);
  } else {
    generteNCheck();
  }
}

function changeBG(genertedNum) {
  let tabNum = document.querySelectorAll("h3");
  for (const key in tabNum) {
    // console.log(tabNum[key].innerHTML);

    if (tabNum[key].innerHTML === String(genertedNum)) {
      tabNum[key].classList.add("active");
    }
  }
  console.log(genertedNum);
}
