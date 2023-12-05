class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
}
let usr1 = new User("Mario", "Rossi", 88, "Roma");
let usr2 = new User("Paolo", "Verdi", 22, "Milano");

User.prototype.ageDif = () => {
  if (usr1.age > usr2.age) {
    console.log(
      usr1.firstName +
        " " +
        usr1.lastName +
        " è piu grande di " +
        usr2.firstName +
        " " +
        usr2.lastName
    );
  } else {
    console.log(
      usr2.firstName +
        " " +
        usr2.lastName +
        " è piu grande di " +
        usr1.firstName +
        " " +
        " " +
        usr1.lastName
    );
  }
};

console.log(usr1);
console.log(usr2);
console.log(usr1.ageDif());

let submitBtn = document.querySelector("button");
console.log(submitBtn);

class Pets {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breeds = _breed;
  }
}
let petsArr = [];

submitBtn.addEventListener("click", () => {
  document.querySelectorAll("p")[1].innerHTML = "";
  let names = document.querySelectorAll("input");
  let select = document.querySelectorAll("select");
  let printUl = document.querySelector("ul");
  printUl.innerHTML = "";
  if (names[0].value != "" && names[1].value != "") {
    let pet_Name = names[0].value;
    let owner_Name = names[1].value;
    let breed_ = select[1].value;
    let species_ = select[0].value;

    let genPetProt = new Pets(pet_Name, owner_Name, species_, breed_);
    petsArr.push(genPetProt);
    console.log(petsArr);

    addList(printUl);

    genPetProt.ownerCheck();
    names[0].value = "";
    names[1].value = "";
  } else {
    addList(printUl);
    document.querySelectorAll("p")[1].classList.add("text-danger");
    document.querySelectorAll(
      "p"
    )[1].innerHTML = `<strong>RIEMPI FORM</strong>`;
  }
});

function addList(ul) {
  for (const key in petsArr) {
    ul.appendChild(document.createElement("li"));
    let li = document.querySelectorAll("li");
    li[
      key
    ].innerHTML = `<strong>Pet</strong> = ${petsArr[key].petName} <br> <strong>Owner</strong>= ${petsArr[key].ownerName} <br> <strong>Specie</strong>= ${petsArr[key].species}<br> <strong>Breed</strong>= ${petsArr[key].breeds} `;
    li[key].classList.add("list-group-item", "m-2", "border", "p-4");
    document.getElementById(
      "petsPrint"
    ).innerHTML = `<p class="form-control-lg">
        Totale ${Number(key) + 1}
    </p>`;
  }
}
Pets.prototype.ownerCheck = () => {
  for (const key in petsArr) {
    let own = petsArr[key].ownerName;
    for (let n = 0; n < petsArr.length; n++) {
      if (key != n && own === petsArr[n].ownerName) {
        document.querySelector(
          "#sameOwner"
        ).innerHTML = `<p class="form-control-lg">${petsArr[key].petName} e ${petsArr[n].petName} hanno il solito padrone </p>`;
      }
    }
  }
};
