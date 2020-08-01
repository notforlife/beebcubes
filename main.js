var beebclicks = 0;
var currentResolution = 0;

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
    document.getElementById("log").appendChild(log);
  }
}

function changeResolution() {
  
 currentResolution ++
 if (currentResolution > 2) {
  
   currentResolution = 0;
   
 }
  
 if (currentResolution == 1) {
   
  document.getElementById("left-column").class = "column left1080";
  document.getElementById("column2").class = "column right1080";
  document.getElementById("research-column").class = "column righter1080";
  var notice = document.createElement("P");
  notice.innerHTML = "Updated resolution to 1920x1080";
  document.getElementById("log").appendChild(notice);
   
 }
 
 if (currentResolution == 2) {
   
  document.getElementById("left-column").class = "column left720";
  document.getElementById("column2").class = "column right720";
  document.getElementById("research-column").class = "column righter720";
  var notice = document.createElement("P");
  notice.innerHTML = "Updated resolution to 1280x720";
  document.getElementById("log").appendChild(notice);
   
 }
  
 else {
   
  document.getElementById("left-column").class = "column left";
  document.getElementById("column2").class = "column right";
  document.getElementById("research-column").class = "column righter";
  var notice = document.createElement("P");
  notice.innerHTML = "Updated resolution to 3840x2160";
  document.getElementById("log").appendChild(notice);
   
 }
  
}
