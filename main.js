var myArray = [];
//genero una funzione che mi ritorna numeri e lettere mischiati randomicamente
function randomColor() {
  var base = "#";
  var num = "123456789ABCDEF"; //gli esadecimali sono composti da numeri (1-9) e lettere (a-f)
  for (let i = 0; i < 6; i++) {
    //prendo randomicamente numeri e lettere dalla variabile
    var index = Math.floor(Math.random() * num.length);
    var random = num[index];
    base += random;
  }
  return base;
}

function print() {
  var mainDiv = document.querySelector("#div-palette");
  for (let i = 0; i < 40; i++) {
    var color = randomColor();
    var myDiv = document.createElement("div");
    myDiv.style.backgroundColor = color;
    myDiv.setAttribute("data-color", `${color}`);
    mainDiv.append(myDiv);
    // console.log(color);
  }
}
print();

var data = document.querySelectorAll("[data-color]"); //prendo il valore del data-color
var select = document.querySelector("#selection");
for (let i = 0; i < data.length; i++) {
  const element = data[i];
  myArray.push(element.dataset.color); //creo un array popolato dai valori del data-color
}

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  var option = document.createElement("option");
  option.innerText = element;
  option.value = element;
  select.appendChild(option);
}
select.addEventListener("change", (e) => {
  // console.log(e.currentTarget.value);
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    element.classList.remove("hidden");
    if (e.currentTarget.value == "") {
      element.classList.remove("hidden");
    } else if (element.dataset.color !== e.currentTarget.value) {
      element.classList.add("hidden");
    }
  }
});

//hamburger menù
function dropDown() {
  let dropdownBtn = document.querySelector(".mobile-menu-btn");
  let dropdownUl = document.querySelector(".menu-container");
  dropdownBtn.addEventListener("click", function () {
    dropdownUl.classList.toggle("hidden");
  });
}
dropDown();
