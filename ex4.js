var readlineSync = require('readline-sync');

//Entering a number of diners is expected    
var customerNU = readlineSync.question('Hello ,how many people are you going with?');
if (isNaN(parseInt(customerNU)))
{
    console.log('Invalid character entry - start from the beginning ...');
} else
{ 
   var  short_an1 = ['yes','no'];
   var chooseK = readlineSync.keyInSelect(short_an1,'Should it be Kosher?');
   var chooseLem;   
   if ((chooseK)===-1)
    {
        console.log('Invalid character entry - start from the beginning ...');
    } else
    {
   if ((chooseK)=== 0)
        { var short_an2 = ['yes','no'];
          chooseLem = readlineSync.keyInSelect(short_an2,'If it is Kosher,should it be Kashrut Lemehdrin?');
          if ( (chooseLem)===-1)
    {
        console.log('Invalid character entry - start from the beginning ...');
    } }        
        
    var rType = ['Fast Food','Fine Dining','Cafe','Fast Casual','Chinis'];
    var cType = readlineSync.keyInSelect(rType,'What kind of food do you want?');
    var crType = rType[cType];
   
    switch(crType) {
      case "Fast Food":
        var Fast_Food = ['The sea','Pilpal','Bnai brak'];
        if ((chooseK) === 1)
        {console.log(Fast_Food[0]);}
        else
         {if ((chooseLem) === 0)
            {console.log(Fast_Food[2]);}else
            {console.log(Fast_Food[1]);}
         }  
        break;
      case "Fine Dining":
        var Fine_Dining = ['Pigi','Shabt','KIGEL'];
        if ((chooseK) === 1)
        {console.log(Fine_Dining[0]);}
        else
         {if ((chooseLem) === 0)
            {console.log(Fine_Dining[2]);}else
            {console.log(Fine_Dining[1]);}
         }
        
        break;
      case "Cafe":
        var Cafe = ['7&7','After','Seat'];
        if ((chooseK) === 1)
        {console.log(Cafe[0]);}
        else
         {if ((chooseLem) === 0)
            {console.log(Cafe[2]);}else
            {console.log(Cafe[1]);}
         }  
        break;
        case "Fast Casual":
            var Fast_Casual = ['4me','Good','GSMAKT'];
            if ((chooseK) === 1)
            {console.log(Fast_Casual[0]);}
            else
             {if ((chooseLem) === 0)
                {console.log(Fast_Casual[2]);}else
                {console.log(Fast_Casual[1]);}
             } 
        break;
      case "Chinis":
        var Chinis= ['Row','JUMPE','HGRA'];
        if ((chooseK) === 1)
        {console.log(Chinis[0]);}
        else
         {if ((chooseLem) === 0)
            {console.log(Chinis[2]);}else
            {console.log(Chinis[1]);}
         }
        break;
      default:
        }   

         
    }   
 }
