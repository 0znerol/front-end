let input = document.querySelector("input");
let inputButton = document.querySelector("button");
let delButton = document.querySelectorAll("button")[1];
let label = document.querySelector("label");
let todoUl = document.querySelector("ul");
let buttonUl = document.querySelectorAll("ul")[1];
let li = document.querySelectorAll("li");
let cc = localStorage.getItem("counter");
let todoArr = [];
let btArr = [];
let strikeCc = localStorage.getItem("strikeCc");
let i = 0;
console.log(cc);
addTodo();
inputButton.addEventListener("click", () => {
  if (input.value != "") {
    cc++;
    localStorage.setItem("counter", cc);
    let usrInput = input.value;
    todoArr.push[usrInput];
    localStorage.setItem(`${cc}`, usrInput);
    // console.dir(localStorage.getItem(`${cc}`));
    // console.log(cc);
    // console.log(todoArr);
    // console.log(localStorage.getItem("counter"));
    input.value = "";
    // buttonUl.innerHTML += `<li><button><i class="bi bi-trash"></i></button></li>`;

    addTodo();
  } else {
    alert("sticazi");
  }
});
delButton.addEventListener("click", () => {
  localStorage.removeItem("counter");
  localStorage.removeItem("todoArr");
});
function addTodo() {
  for (i = i; i <= cc; i++) {
    todoArr.push(localStorage.getItem(`${i}`));
    btArr.push(localStorage.getItem(`${i}`));

    console.log(todoArr);
    if (todoArr[i - 1] != undefined) {
      todoUl.innerHTML += `<li class="d-flex justify-content-between border rounded p-1">
      ${todoArr[i - 1]}
    <button class="btn btn-outline-danger"><i class="bi bi-trash"></i></button> </li>`;
    } else {
    }
    if (i === 0) {
      todoArr.shift();
    }
  }
}
todoUl.addEventListener("click", (event) => {
  console.log(event.target.nodeName);
  console.dir(event.target);

  if (event.target.nodeName === "LI") {
    strikeCc++;
    localStorage.setItem("counter", cc);
    event.target.style.textDecoration = "line-through";
  }
});
