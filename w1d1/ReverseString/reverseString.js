
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
  //console.log(obfuscate(password));


/* almost there - this is returning the right password, but not console.logging them one after the other
var args = process.argv;

for (var x = 2; x < args.length; x++) {

  password = args[x]

  function obfuscate(aString){
    var newPassword = "";
    for (var x = 2; x < args.length; x++) {
      var password = args[x];

    for (var i = aString.length - 1; i >= 0; i--){
      var char = aString[i];

        newPassword += char;
      }
    };
    return newPassword;
    }
    console.log(obfuscate(password));
  }
  //console.log(obfuscate(password));
*/



/* This is returning a string of n length and the second for loop is operating on it.
var args = process.argv;

for (var x = 2; x < args.length; x++) {

  password = args[x]

  function obfuscate(aString){
    var newPassword = "";
    for (var x = 2; x < args.length; x++) {
      var password = args[x];

    for (var i = 0; i < aString.length; i++){
      var char = aString[i];
      if (char === "a") {
        newPassword += "4";
      } else if (char === "e") {
        newPassword += "3";
      } else if (char === "o") {
        newPassword += "0";
      } else if (char === "l") {
        newPassword += "1";
      } else {
        newPassword += char;
      }
    };
    return newPassword;
    }
  }
  console.log(obfuscate(password));
}
*/