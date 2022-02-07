function addNew(arr, name) {
  arr.push(name)
}

function remove(arr, name) {
  var index = arr.indexOf(name)
  if (index > -1) {
    arr.splice(index, 1);
  }
}

function display(arr) {
  console.log(arr);
}

var start = prompt("Would you like to start the roster web app? y/n")
if (start === "y") {
  var roster = []
  while (true) {
    var action = prompt("Please select an action: add, remove, display, or quit.")
    if (action === "add") {
      addNew(roster, prompt("What name would you like to add?"))
    } else if (action === "remove") {
      remove(roster, prompt("What name would you like to remove?"))
    } else if (action === "display") {
      display(roster)
    } else if (action === "quit") {
      break
    }
  }
}
alert("Thanks for using the Web App! Please refresh the page to start over.")
