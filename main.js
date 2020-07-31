function clickOnBeeb() {
  node = document.createElement("BUTTON");
  node.outerHTML = "<button class="boring-button">Click me!</button>";
  document.getElementById("column2").appendChild(node);

}
