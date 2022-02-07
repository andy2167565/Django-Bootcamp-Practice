// Part 6 - Objects Exercise

// PROBLEM 1
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function(){
    console.log(this.name.length);
  }
}

// PROBLEM 2
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  empInfo: function(){
    alert("Name is " + this.name + ", Job is " + this.job + ", Age is " + this.age + ".");
  }
}

// PROBLEM 3
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName: function(){
    console.log(this.name.split(" ")[1]);
  }
}
