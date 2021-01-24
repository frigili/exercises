var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userSen = readlineSync.question('Please enter a sentence ? ');
var clenSen = userSen.replace(/[^a-zA-Z ]/g, ''); //clean the sybol and numbers
var strSplit = clenSen.split(' ');

var lenWord = 0;
var longestWord;
for(var i = 0; i < strSplit.length; i++){
  if(strSplit[i].length > lenWord){ // If strSplit[i].length is greater than the word it is compared with...
    lenWord = strSplit[i].length; // ...then lenWord takes this new value
    longestWord = strSplit[i];

   }}
  
   console.log(longestWord);

