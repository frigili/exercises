var readlineSync = require('readline-sync');
 
// Wait for user's response.
var val_1 = readlineSync.question('Hello ,please enter the first variable!');
//console.log(typeof val_1);

if (isNaN(parseFloat(val_1)))
{
    console.log('Invalid character entry - start from the beginning ...');
} else // Wait for user's response.
{ 
    var val_2 = readlineSync.question('Please enter the second variable!');
        if (isNaN(parseFloat(val_2)))
        {
              console.log('Invalid character entry - start from the beginning ...');
        } 
        else{ 
              var total = (Number(val_1) + Number(val_2));
              if ((total) === 10)
{ 
      console.log('makes 10');
} else { 
      console.log('nope');
}

        }
}
