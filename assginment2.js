var readlineSync = require('readline-sync');


var nameGamer = readlineSync.question(
    "////////////-----Welcome To War--------\\\\\\\\\\ "+'\n'+"Please enter your name?" );

var haveDollars = 50 ;

var chooseNext= 0;

while ((chooseNext == 0) && (haveDollars > 0))
{
    var bet= readlineSync.question(  "Hello " + nameGamer + " You currently have "+ haveDollars + " dollars" + '\n' +"Place your bet for the next round: 1 to "+haveDollars +"?");
     if ((bet < 0) || isNaN(parseInt(bet)) || (parseInt(bet) > haveDollars) )
    {
    console.log( (" I said between 1 to 50 And you typed " + bet +"!!!" ) , '\n',('I dont play with liars!!! Bye'));
    break;
    } else 
    {
      
      var compCard = 0, gamerCard = 0;
      
      while (compCard === gamerCard)
      {
        compCard = Math.floor(Math.random()*12+1)
        gamerCard = Math.floor(Math.random()*12+1)
      }
      if (compCard < gamerCard)
      {
           haveDollars = haveDollars + parseInt(bet)
           console.log( ("Your card is"+gamerCard +"And my is" + compCard ) , '\n',('You won'+ bet +"!!! And now you have"+haveDollars));
           var short_an1 = ['Play another round','leave with my mony :-)'];
           chooseNext = readlineSync.keyInSelect(short_an1,'What would you like to do?');
      } 
      else 
      {
         haveDollars = haveDollars - parseInt(bet)
         console.log( ("Your card is"+gamerCard +"And my is" + compCard ) , '\n',('You lost'+ bet +"!!! And now you have"+haveDollars));
         if ( haveDollars > 0 )
           {
            var short_an1 = ['Play another round','leave with my mony :-)'] ;
            chooseNext = readlineSync.1keyInSelect(short_an1,'What would you like to do?');
           }
            else
            {console.log('You broke bye bye!!!') }
            //break;
      }
       
    }
    
}
