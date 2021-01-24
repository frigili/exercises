var readlineSync = require('readline-sync');

console.log( ( "##################### "), '\n',('Hello ! Welcome to the quiz'),'\n', ('#####################'),
 '\n', ( 'First Qustion' ),'\n',('---------------------------'))

 var  an1 = ['Calling an ambulance','Runs to her and picks her up and brings her to a safe place', 'Yells to her', 'Continuing on my way' ];
   var ques1 = parseInt(readlineSync.keyInSelect(an1,'An old woman crosses the road and a car comes towards her?'));
var scoer1= [3,1,2,0];
if (ques1 === -1) 
{
    console.log( " We will not continue ");
} else
{
   console.log( ( "##################### "),'\n', ( 'Second Qustion' ),'\n',('---------------------------'))
var  an2 = ['Call the police','oblivious','Cursing him','Chases after him'];
   var ques2 = parseInt(readlineSync.keyInSelect(an2,'A vehicle drives wildly on the road!'));
   var scoer2= [2,0,1,3]

   if (ques2 === -1) 
   {
       console.log( " We will not continue ");
   } else
   {
   console.log( ( "##################### "),'\n', ( 'Third Qustion' ),'\n',('---------------------------'))
   var  an3 = ['I am not the inspector','I will ask to stop','It will hurt my heart','Maybe he is an employee of the reserve'];
   var ques3 =parseInt(readlineSync.keyInSelect(an3,'During the hike you saw someone destroying the trees on the trail?'));
   var scoer3= [0,3,1,2]
   if (ques3 === -1) 
   {
       console.log( " We will not continue ");
   } else
   {

   console.log( ( "##################### "),'\n', ( 'Fourth Qustion' ),'\n',('---------------------------'))
   var  an4 = ['Do not give up on myself','Going to rest on the couch','Undertakes to wash the dishes later','Apologies and goes to sleep'];
   var ques4 = parseInt(readlineSync.keyInSelect(an4,'Saturday dinner is over but I do not have the strength to get up to wash dishes even though Mom has prepared everything?'));
   var scoer4= [3,0,2,1]
   if (ques4 === -1) 
   {
       console.log( " We will not continue ");
   } else
   {

   console.log( ( "##################### "),'\n', ( 'Fifth Qustion' ),'\n',('---------------------------'))
   var  an5 = ['Never','Twice a week','Twice a Year','Only When i asked for'];
   var ques5 = parseInt( readlineSync.keyInSelect(an5,'volunteering?'));
   var scoer5= [0,3,2,1]
   if (ques5 === -1) 
   {
       console.log( " We will not continue ");
   } else
   

   var degree = scoer5[ques5]+scoer4[ques4]+scoer3[ques3]+scoer2[ques2]+scoer1[ques1];
   console.log( "--------Quiz results----------");

   if (degree >= 10)
    {
    console.log( " heedful and active ");
    } else
    {
        if (degree <= 4) 
        {
            console.log( " There is no one else but me??? ");
        } else
        if (degree > 7) 
        {
            console.log( " A little more righteous ");
        } else
        {console.log( "You are not an angel");}


    }
}
}
}
}
