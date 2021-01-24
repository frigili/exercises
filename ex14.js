var readlineSync = require('readline-sync');
var min
var max 
// Wait for user's response.
var len = readlineSync.question('Please enter a positive number ? ');
if ( (!isNaN(parseInt(len)) && (parseInt(len) > 0)))
{
var my_array = [];

for(var i =0; (i < parseInt (len));  i++) {
var random = Math.floor(Math.random()*50+1)
my_array.push(random)
}

min = Math.min.apply(Math, my_array) ;
max = Math.max.apply(Math, my_array) ;
}

console.log(min,",",max);

function checkInt
e
if ( (!isNaN(parseInt(len)) && (parseInt(len) > 0)))
{
