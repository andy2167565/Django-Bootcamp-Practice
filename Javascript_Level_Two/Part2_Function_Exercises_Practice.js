// PROBLEM 1: SLEEPING IN
function sleepIn(weekday, vacation) {
  return (!weekday || vacation)
}

// PROBLEM 2: MONKEY TROUBLE
function monkeyTrouble(aSmile, bSmile) {
  return ((aSmile && bSmile) || (!aSmile && !bSmile))
}

// PROBLEM 3: STRING TIMES
function stringTimes(str, n) {
  var result = ""
  for (var i = 0; i < n; i++) {
    result += str
  }
  return result
}

// PROBLEM 4: LUCKY SUM
function luckySum(a, b, c){
  if (a === 13) {
    return 0
  } else if (b === 13) {
    return a
  } else if (c === 13) {
    return a + b
  } else {
    return a + b + c
  }
}

// PROBLEM 5:
function caught_speeding(speed, is_birthday){
  if (is_birthday) {
    speed -= 5
  }

  if (speed <= 60) {
    return 0
  } else if (speed > 60 && speed <= 80) {
    return 1
  } else {
    return 2
  }
}

// BONUS: MAKE BRICKS
// Solution 1
function makeBricks(small, big, goal){
  for (var i = 0; i <= small; i++) {
    for (var j = 0; j <= big; j++) {
      if (i + j * 5 === goal) {
        return true
      }
    }
  }
  return false
}

// Solution 2
function makeBricks(small, big, goal){
  // Fail #1 -- not enough bricks
  if (goal > small+big*5) {
    return false
  }

  // Fail #2 -- not enough small bricks
  if (goal%5 > small) {
    return false
  }

  return true
}

// Solution 3
function makeBricks(small, big, goal){
  return goal <= small+big*5 && goal%5 <= small
}
