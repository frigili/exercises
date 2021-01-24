var readlineSync = require('readline-sync');
var dg = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
// Wait for user's response.
let val_1 = readlineSync.question('Hello ,please enter number between 0-9 !');

if (isNaN(parseInt(val_1)) || (parseInt(val_1)>9) || (parseInt(val_1)<0) || (val_1.length!==1))
{ 
    console.log('Invalid character entry - start from the beginning ...');
}else
 // log the number in words.
{
    console.log(dg[parseInt(val_1)]);
}