// let results=[21,324,3,2,345,65,12,23,54,700];
// let smallNum=results[0];
// for(let i=0; i<results.length; i++){
//     let result=results[i];
//     if(result<smallNum){
//         smallNum=result;
//     }
// }
// console.log(smallNum);





// use function for find the small value in a array

function smallNum(result){

    let smallest= result[0];
    for(let i=0; i<result.length; i++){
        let resultValue=result[i];
        if(resultValue<smallest){
            smallest=resultValue;
        }
    }
     return smallest;
}
let results=[21,324,345,65,12,3.5,23,54,700];
let small=smallNum(results);
console.log(small);