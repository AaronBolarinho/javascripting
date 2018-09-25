
var args = process.argv;

var oldPhrase = args;

var pigPhrase = "";

for (var x = 2; x < oldPhrase.length; x++) {

  var pigWord = "";
  var workingWord = oldPhrase[x];

  for (var i = 1; i < workingWord.length; i++) {
     pigPhrase += workingWord[i];

  }
   pigPhrase += workingWord[0];
   pigPhrase += "ay";
   pigPhrase += " ";
}

console.log(pigPhrase);



/*
var args = process.argv;

var oldPhrase = args

var pigWord = ""

for (var x = 2; x < oldPhrase.length; x++) {

  pigWord += oldPhrase[x] + " ";

}

console.log(pigWord);

*/


/*
var args = process.argv;

for (var x = 2; x < args.length; x++) {

  var pigWord = args[x]
  var pigPhrase = ""

    function pigLatin(aString){

      var newPigWord = "";

      newPigWord += aString + "B";

      return newPigWord

    }
    pigPhrase += pigLatin(aString);
    //console.log(pigPhrase);
}

console.log(pigPhrase);
*/





 /*

var args = process.argv;

for (var x = 2; x < args.length; x++) {

  password = args[x]

  function reverse(aString){
    var newPassword = "";
    for (var x = 2; x < args.length; x++) {
      var password = args[x];

    for (var i = aString.length - 1; i >= 0; i--){
      var char = aString[i];

        newPassword += char;
      }
      return newPassword;
     };
    }
    console.log(reverse(password));
  }
*/