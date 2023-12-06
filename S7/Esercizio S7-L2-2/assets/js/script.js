let input = document.querySelector("input");
let inputButton = document.querySelector("button");
let delButton = document.querySelectorAll("button")[1];
let label = document.querySelector("label");
let todoUl = document.querySelector("ul");
let li = document.querySelectorAll("li");
console.dir(todoUl);
let cc = localStorage.getItem("counter");
let todoArr = [];
let i = 0;
addTodo();
inputButton.addEventListener("click", () => {
  cc++;

  localStorage.setItem("counter", cc);
  let usrInput = input.value;

  todoArr.push[usrInput];
  localStorage.setItem(`${cc}`, usrInput);
  console.dir(localStorage.getItem(`${cc}`));
  console.log(cc);
  console.log(todoArr);

  console.log(localStorage.getItem("counter"));

  input.value = "";
  addTodo();
});
delButton.addEventListener("click", () => {
  console.log("stocaz");
  localStorage.removeItem("0");

  localStorage.removeItem("counter");
  localStorage.removeItem("todoArr");
});
function addTodo() {
  for (i = i; i <= cc; i++) {
    todoArr.push(localStorage.getItem(`${i}`));
    console.log(todoArr);
    todoUl.innerHTML += `<li>${todoArr[i - 1]}</li>`;
    document.querySelector("li").style.display = "none";

    if (i === 0) {
      todoArr.shift();
    }
  }
}
todoUl.addEventListener("click", (event) => {
  console.log(event.target.nodeName);
  console.dir(event.target);
  if (event.target.nodeName === "LI") {
    event.target.style.textDecoration = "line-through";
  }
});
