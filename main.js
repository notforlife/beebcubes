var beebclicks = 0;
var currentResolution = 0;
var buttonCap = 31;
var logMessages = [];
var n;
var energy = 0;
var power = 0;
var efficiency = 0.16

function clickOnBeeb() {
  beebclicks ++
  if (power < buttonCap) {
    power ++
    var node = document.createElement("BUTTON");
    node.className = "button1"
    node.onclick = "runlock()"
    node.innerHTML = "Click Me";
    document.getElementById("column2").appendChild(node);
  } else {
    var log = document.createElement("P");
    log.className = "message";
    log.innerHTML = "You have reached your maximum amount of displayable buttons. Research upgrades to increase this cap!";
    document.getElementById("log").appendChild(log);
  }
}


function runlock() {

  if (beebclicks >= 30) {

    document.getElementById("research-column").style.border = "rgb(202,202,202)";
    document.getElementById("research-column").style.color = "rgb(22,22,22)";
    document.getElementById("research").style.height = "30%"
    document.getElementById("upgrades").style.height = "65%"
    document.getElementById("research-header").innerHTML = "Research"
    document.getElementById("upgrades-header").innerHTML = "Upgrades"

  }

}

function convertClicks() {
  
  energy += (power * efficiency).toFixed(2);
  power = 0;
  document.getElementsByClassName("button1").remove();
  
}

if (beebclicks >= 5) {
  
    var energybutton = document.createElement("BUTTON");
    energybutton.onclick = "convertClicks()";
    energybutton.value = "Convert Beebclicks";
    document.getElementById("information-viewer").append(energybutton); 
  
}

function updateGUI() {
  
  if (beebclicks >= 5) {
      
    document.getElementById("beebclicksAmount").textContent = "Beebclicks: " + power;
    document.getElementById("energyAmount").textContent = "Energy: " + energy;
    
  } 
    
}

function loop() {
  
  updateGUI();
  
}

setInterval(loop, 10);
