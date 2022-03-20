// loop decrement 

// for(i=100; 1<=i; i--){
//     console.log(i);
// }

 
//  let i=5;
//  while(1<=i){
//      console.log(i);
//      i--;
//  }


// factorial calculate for loop

// function factorialCAl(number){
//     let factorial=1;
//     for(let i=1; i<number; i++){
//         factorial=factorial*i;
      
//     }
//  return factorial;
// }
// let num = 7;
// let factorialValue= factorialCAl(num);
// console.log(factorialValue);



// factorial calculate while loop
//  function factorialCAl(number){
//     let factorial=1;
//     let i=1;
//     while(i<=number){
//         factorial=factorial*i;
//         i++;

//     }
//     return factorial;
// }
// let num=6;
// let factorialValue= factorialCAl(num);
// console.log('while loop use for factorial calc ' , factorialValue);


// celsius to faranhit

// function cToFCal(celsius){
//     let celsiusVAlue= (celsius*9/5)+32;
//     return celsiusVAlue;
// }
// let cel=37;
// let celsiusValues= cToFCal(cel);
// console.log(celsiusValues)


// faranhig to celcius calculate

// function fTcCal(faranhit){
//     let convertVAlue=faranhit*9/5+32;
//     return convertVAlue;
// }
// let far=22;
// let faranhitValues=fTcCal(far);
// console.log(faranhitValues);


// grade calculation

// function gradeCal(result){
//     if(result<=100 && result>=80){
//         return "a+"
//     }
//     else if(result<80 && result>=70){
//         return "a"
//     }
//     else if(result<70 && result>=60){
//         return'A-'
//     }
// }
// let value=60;
// let resultPublish= gradeCal(value);
// console.log(resultPublish);



// dimple percentage calculate
// 200 er 20% amn type

function percentCAl(value1, value2){
    let percentage=value1*value2/100;
    return percentage;
}
let num1=200;
let num2=10;
let percentageResult= percentCAl(num1, num2);
console.log(percentageResult);