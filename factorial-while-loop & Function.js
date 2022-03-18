 
// let i=1;
// let Number=6;
// let factorial=1;
// while(i<=Number){
//     factorial=factorial*i;
//     i++
// }
// console.log('while loop use factorial ', factorial);
 

let factorial=1;
    let i=1;
function factorialCAl(number){
     
    while(i<=number){
        factorial=factorial*i
        i++;
    }
    return factorial;
}

let factorialNumber=6;
let factorialValue= factorialCAl(factorialNumber);
console.log('while loop factorial value ',factorialValue);