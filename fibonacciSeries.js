
// let febo= [0, 1];

// for(i=2;i<10;i++){
//     febo[i]=febo[i-1]+febo[i-2];
// }
// console.log(febo);


 

function febonacciSeries (num){
 
    if(typeof num != 'number'){
        return"please give me a number"
    }
    else if(num<2){
        return" 1 or boro number dan"

    }

    
        let febo=[0, 1];
        for(let i=2; i<num; i++){
            febo[i]=febo[i-1]+febo[i-2];
        }
        return febo;
  
}
 let feboVAlue= febonacciSeries(13);
console.log(feboVAlue);



















