var beebclicks = 0

function clickOnBeeb() {
  beebclicks = beebclicks + 1
  var node = document.createElement("BUTTON");
  node.innerHTML = "Click Me";
  document.getElementById("column2").appendChild(node);
}
