// Change h3 text
function changeText(oldText, newText) {
  $('h3').text($('h3').text().replace(oldText, newText));
}

// Return button color in rgb
function returnColor(rowIndex, colIndex) {
  return $('table tr').eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

// Change button color
function changeColor(rowIndex, colIndex, color) {
  return $('table tr').eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}

// Check color match
function colorMatchCheck(one, two, three, four) {
  return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}

// Check wins horizontally
function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row, col), returnColor(row, col+1), returnColor(row, col+2), returnColor(row, col+3))) {
        console.log("You won starting at (row=" + row + ", col=" + col + ") horizontally");
        return true;
      } else {
        continue;
      }
    }
  }
}

// Check wins vertically
function verticalWinCheck() {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(returnColor(row, col), returnColor(row+1, col), returnColor(row+2, col), returnColor(row+3, col))) {
        console.log("You won starting at (row=" + row + ", col=" + col + ") vertically");
        return true;
      } else {
        continue;
      }
    }
  }
}

// Check wins diagonally
function diagonalWinCheck() {
  for (var col = 0; col < 4; col++) {
    for (var row = 0; row < 6; row++) {
      if (colorMatchCheck(returnColor(row, col), returnColor(row+1, col+1), returnColor(row+2, col+2), returnColor(row+3, col+3))) {
        console.log("You won starting at (row=" + row + ", col=" + col + ") diagonally");
        return true;
      } else if (colorMatchCheck(returnColor(row, col), returnColor(row-1, col+1), returnColor(row-2, col+2), returnColor(row-3, col+3))) {
        console.log("You won starting at (row=" + row + ", col=" + col + ") diagonally");
        return true;
      } else {
        continue;
      }
    }
  }
}

var player1 = prompt("Player One: Enter Your Name, you will be Blue");
var player2 = prompt("Player Two: Enter Your Name, you will be Red");

$('h3').text(player1 + ": it is your turn, please pick a column to drop your blue chip.");

players = [player1, player2];
colors = ["blue", "red"];
var click = 1;
$('button').click(function(){
  var colId = $(this).closest('td').index();
  var curRowId = $(this).closest('td').parent().index();
  // Check color from the bottom
  for (var rowId = 5; rowId >= 0; rowId--) {
    if (returnColor(rowId, colId) === 'rgb(128, 128, 128)') {
      // Only change color when click on gray button
      if (rowId >= curRowId) {
        changeColor(rowId, colId, colors[Math.abs(click%2-1)]);

        // Change the instruction line
        changeText(players[Math.abs(click%2-1)], players[click%2]);
        changeText(colors[Math.abs(click%2-1)], colors[click%2]);

        click++;
        break;
      }
    }
  }

  // Check win or not
  if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
    $('h3').fadeOut('fast');
    $('h2').fadeOut('fast');
    $('h1').text(players[click%2] + " has won! Refresh your browser to play again!").css("fontSize", "50px");
    $('button').each(function(){
      $(this).off("click");
    })
  }
})
