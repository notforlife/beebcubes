var beebclicks = 0

function clickOnBeeb() {
  if (beebclicks < 100) {
  beebclicks ++
  var node = document.createElement("BUTTON");
  node.innerHTML = "Click Me";
  document.getElementById("column2").appendChild(node);
  }
  else {
    var log = document.createElement("P");
    log.innerHTML = "You have reached your maximum amount of displayable buttons. Research upgrades to increase this cap!"
    document.getElementById("left-column").appendChild(log);
  }
}
