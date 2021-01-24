var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userSen = readlineSync.question('Please enter a sentence ? '); 

var replaced = userSen.split(' ').join('*');
console.log(replaced);