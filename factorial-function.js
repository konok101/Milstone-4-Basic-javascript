
function factorialCal(num){
    let factorial=1;
    for(let i=1; i<=num; i++){

        factorial= factorial*i;

    }
    return factorial;
}

let NumberForFactorial=6;

let factorialValue=factorialCal(NumberForFactorial);
console.log(factorialValue);