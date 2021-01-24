var num = [1, 2, 3, 4];
//fruits.reverse();
var i;   
var lenArray = parseInt(num.length)-1;
for ( i = 0; i < 2; i++)
 {
   var par= num[i]
   lenArray = parseInt(num.length)- 1 - parseInt(i);
   num[i]= num[lenArray]
   num[lenArray]= par
  }
  console.log(num);