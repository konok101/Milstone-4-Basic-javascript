
// Break while loop
// var i=1;
// while(i<=10){
//     console.log(i)
 
//     if(i==5){
//         break
//     }
//     i++;
// }




// Break use for loop

// for(var i=1; i<=10; i++){
//     console.log(i);

//     if(i==5){
//         break
//     }
    
// }




// Break use array 

var numbers= [21,22,54,32,89,12,65,34,77];

for(var i=0; i<numbers.length; i++){
    var number= numbers[i];
    
    if(number<65){
     continue;
    }
    console.log(number);
}