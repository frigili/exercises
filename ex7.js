var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userNum = readlineSync.question('Please choose a positive number '); 
var num =/^[0-9]+$/;
while ((userNum < 0) || isNaN(parseInt(userNum))  || (!userNum.match(num)))
 {
   userNum = readlineSync.question('Please choose a positive number? '); 
 }
 var i
 var nFactorial =1;
 parseInt(userNum);

 for (let i = 1; i <= userNum ; i++)
 {
    nFactorial= i * nFactorial 
  }
 console.log (nFactorial);
