var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userStr = readlineSync.question('Please enter a sentence ? ');
var lenStr = userStr.length;
var revUserStr="";
var i;
for ( i = lenStr; i > 0; i--)

{  revUserStr = revUserStr + userStr[i-1];
}

if (revUserStr === userStr)
{console.log ('Palindrome')}
else
{console.log ('Is not Palindrome')}
