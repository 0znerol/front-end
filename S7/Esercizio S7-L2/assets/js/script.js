let input = document.querySelector("input");
let inputButton = document.querySelector("button");
let delButton = document.querySelectorAll("button")[1];
let label = document.querySelector("label");
let timerDiv = document.querySelectorAll("div")[3];
let time = sessionStorage.getItem("time");
sessionStorage.setItem("time", time);
label.innerText = `User : ${localStorage.getItem("usrInput")}`;
if (label.innerText === `User : null`) {
  label.innerText = `User`;
}
inputButton.addEventListener("click", () => {
  let usrInput = input.value;
  let x = usrInput;
  localStorage.setItem("usrInput", x);
  console.log(usrInput);
  label.innerText = `User : ${localStorage.getItem("usrInput")}`;
  input.value = "";
});
delButton.addEventListener("click", () => {
  localStorage.removeItem("usrInput");
  label.innerText = `User`;
});

setInterval(() => {
  time++;
  sessionStorage.setItem("time", time);
  timerDiv.innerHTML = `<p>${time}</p>`;
}, 1000);
