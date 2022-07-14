var myArray = [];
//generate random color
function randomColor() {
  var base = "#"; //hexadecimal star always with #
  var num = "123456789ABCDEF"; //hexadecimal have number from 1 to 9 and letters from a to f
  //loop with max 6 (hexadecimal are composed with 6 numbers and letters mix)
  for (let i = 0; i < 6; i++) {
    //pick random numember and letters from my var num
    var index = Math.floor(Math.random() * num.length);
    var random = num[index]; //give to my num variable a random index
    base += random; //using addition assignmente operator for add a value to my variable base
  }
  return base;
}

function print() {
  var mainDiv = document.querySelector("#divPalette");
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

var data = document.querySelectorAll("[data-color]");
var select = document.querySelector("#selection");
for (let i = 0; i < data.length; i++) {
  const element = data[i];
  myArray.push(element.dataset.color);
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
