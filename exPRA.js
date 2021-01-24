var figlet = require('figlet');

   figlet('Hello World!!', function(err, data) {
       if (err) {
           console.log('Something went wrong...');
           console.dir(err);
           return;
       }
       console.log("You have10 guesses "+'\n'+"The word is:" + theWord);
   });



   const search = 'duck'
   var res = str.replaceAll(/^[a-zA-Z]/gi, "*");

const result = 'duck duck go'.replaceAll(search, replaceWith);