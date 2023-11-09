let submitButton = document.querySelector("button");
let i = 0;
let create = (submitButton.onclick = () => {
  let inputTxt = document.querySelector("input").value;
  console.log(inputTxt);
  let newLiItem = `
                    <div class="toDo">
                        <hr>
                        <li class="listItem">${inputTxt}</li>
                    </div>
`;
  document.querySelector("#toDoList").innerHTML += newLiItem;
  document.querySelector("input").value = "";

  let toDo = document.getElementsByClassName("toDo");

  for (const key in toDo) {
    toDo[key].addEventListener("click", (evt) => {
      console.log(evt.target);
      console.dir(evt.target);
      console.log(evt.target.parentNode);
      let div = evt.target.parentNode;

      div.classList.add("hide");
      document.querySelector("#doneList").append(div);

      let removeHideDone = document.querySelectorAll("#doneList div");
      for (const key in removeHideDone) {
        removeHideDone[key].classList.remove("hide");
        document.querySelectorAll("#doneList div li")[
          key
        ].style.textDecoration = "line-through";
      }

      removeHideDone[key].addEventListener("click", (evt1) => {});
      console.log(doneItem);
    });
  }

  //onclick="removeItem(this.getAttribute('class'));
});

//   console.log(className);
//   let itemToRemove = document.getElementsByClassName(className);
//   document.querySelector("hr").style.display = "none";
//   console.log(itemToRemove);
//   itemToRemove[0].style.display = "none";
