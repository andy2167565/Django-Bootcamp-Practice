var boxes = document.querySelectorAll("td");
var button = document.querySelector("button");

// <=============== Solution 1 ===============>
boxes.forEach(function(box){
  var options = ["X", "O", ""];
  var click = 0;
  // Cycling through options
  box.addEventListener("click", function(){
    box.textContent = options[click%options.length];
    click++;
  })

  // Clear all options
  button.addEventListener("click", function(){
    box.textContent = "";
    click = 0;
  })
})


// <=============== Solution 2 ===============>
// Clear all options
function clearBoard() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].textContent = "";
  }
}
button.addEventListener("click", clearBoard);

// Cycling through options
function changeMarker() {
  if (this.textContent === "") {
    this.textContent = "X";
  } else if (this.textContent === "X") {
    this.textContent = "O";
  } else {
    this.textContent = "";
  }
}

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", changeMarker);
}
