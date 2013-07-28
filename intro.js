// 'window' object is the "GOD" object
// global variables get attached to the window
window.onload = function () {
  var h1 = document.getElementsByTagName('h1')[0];
  alert('hey it worked!');
};

// Primitive datatypes
var myName = 'Wes';
var myAge = 20;
var isLazy = false;
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
