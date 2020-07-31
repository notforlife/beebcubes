beebclicks = 0
node = document.createElement("BUTTON")
node.outerHTML = "<button class="boring-button">Click me!</button>"
function clickOnBeeb() {

  document.getElementById("fake-text").remove()
  document.getElementById("column2").appendChild(node)

}
