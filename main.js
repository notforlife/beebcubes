var beebclicks = 0

function clickOnBeeb() {
  beebclicks ++
  var node = document.createElement("BUTTON");
  node.innerHTML = "Click Me";
  document.getElementById("column2").appendChild(node);
}
