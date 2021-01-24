var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userNum = readlineSync.question('Please choose a positive number ? '); 
while ((userNum < 1) || isNaN(parseInt(userNum)))
 {
  var userNum = readlineSync.question('Please choose a positive number ? '); 
 }
 var num = 1;
 console.log(num);
 parseInt(userNum);

 for ( num = 2; num <= userNum; num++) {

    var notPrime = false;
    for (var i = 2; i <= num; i++) {
        if (num%i===0 && i!==num) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(num);
    }
}