var beebclicks = 0;
var currentResolution = 0;
var buttonCap = 30;
var logMessages = [];
var n;
var doneYet = false;

function clickOnBeeb() {
  if (beebclicks < buttonCap) {
  beebclicks ++
  var node = document.createElement("BUTTON");
  node.innerHTML = "Click Me";
  document.getElementById("column2").appendChild(node);
  }
  else {
    var log = document.createElement("P");
    log.className = "message";
    log.innerHTML = "You have reached your maximum amount of displayable buttons. Research upgrades to increase this cap!";
    document.getElementById("log").appendChild(log);
    }
  }
}

if (beebclicks >= 30) {
  
  doneYet = true;
  document.getElementsByClassName("column3").className = "column3a";
  var header1 = document.createElement("h3");
  var header2 = document.createElement("h3");
  header1.innerHTML = "Research";
  header2.innerHTML = "Upgrades";
  document.getElementById("research").appendChild(header1);
  document.getElementById("upgrades").appendChild(header2);
  
}
