var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('Hello my name is Gil ,May I have your name? ');
console.log('Hi ' + userName + '!');