function randomColor() {
  var base = "#";
  var num = "123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    var indice = Math.floor(Math.random() * num.length);
    var random = num[indice];
    base += random;
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
