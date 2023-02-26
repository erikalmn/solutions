function reverseString(str) {
  var result = "";
  for (var i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

var example = "Hello World!";
var exampleReverse = reverseString(example);
console.log(exampleReverse);
