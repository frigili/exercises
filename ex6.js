var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userNum = readlineSync.question('Please choose a number larger than 10? '); 
var num =/^[0-9]+$/;
while ((userNum <= 10) || isNaN(parseInt(userNum)) || (!userNum.match(num)))
 {
  var userNum = readlineSync.question('Please choose a number larger than 10? '); 
 }
 console.log("thnk you");

