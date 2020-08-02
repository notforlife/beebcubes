var beebclicks = 0;
var currentResolution = 0;
var buttonCap = 30;
var logMessages = [];
var n;
var doneYet = false;
var energy = 0;
var power = 0;

function clickOnBeeb() {
  if (beebclicks < buttonCap) {
  power ++
  var node = document.createElement("BUTTON");
  node.className = "button1"
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


function runlock() {

  if (beebclicks >= 30) {

    doneYet = true;
    document.getElementsByClassName("column3").className = "column3a";
    var header1 = document.createElement("h4");
    var header2 = document.createElement("h4");
    header1.innerHTML = "Research";
    header2.innerHTML = "Upgrades";
    document.getElementById("research").appendChild(header1);
    document.getElementById("upgrades").appendChild(header2);

  }

}

function convertClicks() {
  
  energy += (power / 7).toFixed(2)
  power = 0
  document.getElementsByClassName("button1").remove()
  
}

function updateGUI() {
  
  if (beebclicks >= 5) {
      
    document.getElementById("beebclicksAmount").innerHTML = "Beebclicks: " + power;
    document.getElementById("energyAmount").innerHTML = "Energy: " + energy;
  
  } 
  
  
  
}
