var args = process.argv;

var password = args[2];

function obfuscate(aString){
  var newPassword = "";
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

console.log(obfuscate(password));

/*
Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).
*/