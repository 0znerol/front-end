let submitButton = document.querySelector("button");
let i = 0;
let create = (submitButton.onclick = () => {
  let inputTxt = document.querySelector("input").value;
  let newLiItem = `
                    <div class="toDo">
                        <hr>
                        <li class="listItem">${inputTxt}</li>
                    </div>
`;
  console.log(inputTxt.length);
  if (inputTxt.length > 2) {
    document.querySelector("#toDoList").innerHTML += newLiItem;
    document.querySelector("input").value = "";
    console.log(newLiItem);
  }
  doneFun();

  //onclick="removeItem(this.getAttribute('class'));
});

function doneFun() {
  let toDo = document.getElementsByClassName("toDo");

  for (const key in toDo) {
    toDo[key].addEventListener("click", (evt) => {
      let div = evt.target.parentNode;
      console.log(div);
      document.querySelector("#doneList").append(div);

      let removeHideDone = document.querySelectorAll("#doneList div");
      for (const key in removeHideDone) {
        i++;
        document.querySelectorAll("#doneList div li")[
          key
        ].style.textDecoration = "line-through";
      }
    });
  }
}
//   console.log(className);
//   let itemToRemove = document.getElementsByClassName(className);
//   document.querySelector("hr").style.display = "none";
//   console.log(itemToRemove);
//   itemToRemove[0].style.display = "none";
