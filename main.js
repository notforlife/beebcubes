var beebclicks = 0;
var currentResolution = 0;
var buttonCap = 30

function clickOnBeeb() {
  if (beebclicks < buttonCap) {
  beebclicks ++
  var node = document.createElement("BUTTON");
  node.innerHTML = "Click Me";
  document.getElementById("column2").appendChild(node);
  }
  else {
    var log = document.createElement("P");
    log.innerHTML = "You have reached your maximum amount of displayable buttons. Research upgrades to increase this cap!"
    document.getElementById("log").appendChild(log);
  }
}

