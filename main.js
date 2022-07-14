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
  var mainDiv = document.querySelector("#divPalette"); //get div in my html
  for (let i = 0; i < 40; i++) {
    var color = randomColor(); //set a for contain the random color
    var myDiv = document.createElement("div"); //create a div
    myDiv.style.backgroundColor = color; //the background color would be the result of my random color function
    myDiv.setAttribute("data-color", `${color}`); //setting the attribute data- and the value is var color (my random color)
    mainDiv.append(myDiv); //insert in my html
    // console.log(color);
  }
}
print();

var data = document.querySelectorAll("[data-color]"); //take the data- value
var select = document.querySelector("#selection"); // take select from my html
for (let i = 0; i < data.length; i++) {
  const element = data[i];
  myArray.push(element.dataset.color); //create an array with the value of my data-
}
//create option element and add it to my select
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
    const element = data[i]; //take all my elements
    element.classList.remove("hidden");
    if (e.currentTarget.value == "") {
      //if the value of the option click is empty string
      element.classList.remove("hidden"); //remove class hidden (display: none)
    } else if (element.dataset.color !== e.currentTarget.value) {
      //if the value of my data-color is not equal to the value of option
      element.classList.add("hidden"); //ad class hidden to all element who don't have the value
    }
  }
});
