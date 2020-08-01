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

function changeResolution() {
  
 currentResolution ++
 if (currentResolution > 2) {
  
   currentResolution = 0;
   
 }
  
 if (currentResolution == 1) {
   
  document.getElementById("left-column").className = "column1080 left1080";
  document.getElementById("column2").className = "column1080 right1080";
  document.getElementById("research-column").className = "column righter1080";
  var notice = document.createElement("P");
  notice.innerHTML = "Updated resolution to 1920x1080";
  document.getElementById("log").appendChild(notice);
   
 }
 
 else if (currentResolution == 2) {
   
  document.getElementById("left-column").className = "column720 left720";
  document.getElementById("column2").className = "column720 right720";
  document.getElementById("research-column").className = "column720 righter720";
  var notice = document.createElement("P");
  notice.innerHTML = "Updated resolution to 1280x720";
  document.getElementById("log").appendChild(notice);
   
 }
  
 else if (currentResolution == 0) {
   
  document.getElementById("left-column").className = "column left";
  document.getElementById("column2").className = "column right";
  document.getElementById("research-column").className = "column righter";
  var notice = document.createElement("P");
  notice.innerHTML = "Updated resolution to 3840x2160";
  document.getElementById("log").appendChild(notice);
   
 }
  
}
