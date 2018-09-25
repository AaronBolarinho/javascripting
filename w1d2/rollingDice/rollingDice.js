var args = process.argv;
var num = args[2];

function rollingDice(num) {

  var output = [];
  var dieRoll = "";

  for (var i = 0; i < num; i++) {

    dieRoll = Math.floor(Math.random() * (7 - 1) + 1);
    output.push(" " + dieRoll);
  }

  return "Rolled " + num + " dice:" + output;

}

console.log(rollingDice(num));


/*
var args = process.argv;

var num = args[2];

function rollingDice(num) {

  var output = [];
  var x = "";
  for (var i = 0; i < num; i++) {
    x = Math.floor(Math.random() * (7 - 1) + 1);
    output.push(x);
  }

  return "Rolled " + num + " dice: " + output;
}

console.log(rollingDice(num));
*/



//console.log(output);

/*var args = process.argv;

//var oldPhrase = args[2];

function rollingDice(num) {
  var num = args[2];
  var output = [];
  for (var i = 0; i <= num; i++) {
    output.push(Math.floor(Math.random() * (7 - 1) + 1));
  }
  return output;
  //console.log(output);
}

//console.log(output);
*/