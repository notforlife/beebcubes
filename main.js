
function clickOnBeeb() {
  node = document.createElement("BUTTON")
  node.outerHTML = "<button class="boring-button">Click me!</button>"
  document.getElementById("fake-text").remove()
  document.getElementById("column2").appendChild(node)

}
