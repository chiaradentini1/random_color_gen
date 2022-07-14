//generate random color
function randomColor() {
  var base = "#"; //hexadecimal star always with #
  var num = "123456789ABCDEF"; //hexadecimal have number from 1 to 9 and letters from a to f
  //looping with max 6 (hexadecimal are composed with 6 numbers and letters mix)
  for (let i = 0; i < 6; i++) {
    //pick random numember and letters from my var num
    var index = Math.floor(Math.random() * num.length);
    var random = num[index]; //give to my num variable a random index
    base += random; //using addition assignmente operator for add a value to my variable base
  }
  return base;
}

function print() {
  var mainDiv = document.getElementById("divPalette");
  for (let i = 0; i < 40; i++) {
    var color = randomColor();
    var myDiv = document.createElement("div");
    myDiv.style.backgroundColor = color;
    mainDiv.append(myDiv);
  }
}
print();
