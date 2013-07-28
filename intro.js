// 'window' object is the "GOD" object
// global variables get attached to the window
var startButton;
var stopButton;
var counter;

window.onload = function () {
  // var h1 = document.getElementsByTagName('h1')[0];
  // alert('hey it worked!');
  startButton = document.getElementById('start_counter');
  stopButton = document.getElementById('stop_counter');
  stopButton.style.display = "none";


  startButton.onclick = function () {
    console.log("the button was clicked... nice");
    counter = setInterval(count(), 1000);
    startButton.style.display = "none";
    stopButton.style.display = "inline";
  };


  stopButton.onclick = function () {
    console.log("okay i'll stop");
    clearInterval(counter);
    startButton.style.display = "inline";
    stopButton.style.display = "none";
  };

};

// Primitive datatypes
// these are global variables
var myName = 'Window MAN';
var myAge =  100000;
var isLazy = true;
  // 'global' all caps
var MY_TRUE_LOVE = 'Pashmeena';
// null
var lifting;
// undefined - errors
liftingIsFun = true;

if (liftingIsFun) {
  console.log("i love to lift");
} else {
  console.log("i hate to lift");
}

// if else | else if
if (myAge < 150) {
  //some code
  "I'm alive";
} else if (myAge > 0) {
  // mo code
  "I'm alive";
} else {
  //final code
  "probably dead :(";
}

// does an iteration on myAge from 20 - 150
// while (myAge > 0 && myAge < 150) {
//   myAge++;// myAge = myAge + 1
//   console.log(myAge);
// }

// My Array - looping through
var thingsToDo = ["go to movies", "go shopping", "make dinner", "do laundry"];
for (var i = 0; i < thingsToDo.length; i++) {
  console.log("I have to " + thingsToDo[i]);
}
// function to loop through an array
function listToDo(things) {
  for (var i = 0; i < things.length; i++) {
    console.log("i have to " + things[i]);
  }
}

// Objects

// object literal
  // var person = {
  //   // these are attached
  //   // to person object
  //   name: 'Wes',
  //   age: 20,
  //   isLazy: false,
  //   // embed function in
  //   // person object
  //   greeting: function() {
  //     return "hello";
  //   },
  //   sayName: function() {
  //     return "Hello, my name is " + this.name;
  //   }
  // };

function Person(name, age, isLazy) {
  this.name = name;
  this.age = age;
  this.isLazy = isLazy;
}
// assign methods to objects via prototype
Person.prototype.sayName = function() {
  return "Hello my name is " + this.name;
};

var p1 = new Person("Wes", 20, true);

// class function not instance function
Person.say = function () {
  return "Hello I am of the Person class";
};


// intervals
function count () {
  var timer = 0;
  function tick () {
    timer++;
    console.log(timer);
  }
  return tick;
}

// var counter = setInterval(count(), 100);
// clearInterval(counter);
