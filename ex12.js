var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userStr = readlineSync.question('Please enter a sentence ? ');

function LetterChanges(userStr) {
    return userStr.toLowerCase().replace(/[aeiouy]/g, function(l) {
      return l.toUpperCase();
    });
  }
  
  console.log(LetterChanges(userStr));