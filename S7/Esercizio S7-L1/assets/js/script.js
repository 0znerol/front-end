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
  let names = document.querySelectorAll("input");
  let select = document.querySelectorAll("select");
  let printUl = document.querySelector("ul");
  printUl.innerHTML = "";

  let pet_Name = names[0].value;
  let owner_Name = names[1].value;
  let breed_ = select[1].value;
  let species_ = select[0].value;

  let genPetProt = new Pets(pet_Name, owner_Name, species_, breed_);
  petsArr.push(genPetProt);
  console.log(petsArr);

  for (const key in petsArr) {
    printUl.appendChild(document.createElement("li"));
    document.querySelectorAll("li")[
      key
    ].innerHTML = `pet n${key}: <br> Pet name = ${petsArr[key].petName} <br> Owner Name= ${petsArr[key].ownerName} <br> specie= ${petsArr[key].species}<br> breed= ${petsArr[key].breeds} `;
  }
  Pets.prototype.ownerCheck = () => {
    for (const key in petsArr) {
      let own = petsArr[key].ownerName;
      console.log(key);
      console.log(petsArr.length);
      console.log(own);
      for (let n = 0; n < petsArr.length; n++) {
        if (key != n && own === petsArr[n].ownerName) {
          document.querySelector(
            "#sameOwner"
          ).innerHTML = `<p> pet n${key} and pet n${n} hanno il solito padrone </p>`;
        }
      }
    }
  };
  genPetProt.ownerCheck();
  names[0].value = "";
  names[1].value = "";
});
