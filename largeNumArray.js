
// let age=[21,43,77,112,23,58,95,54];

/* let largeNum=age[0];
for(let i=0; i<age.length; i++){
 let Element=age[i]
 if( Element>largeNum){
     largeNum= Element;
 }
}
console.log( largeNum); */


// use function to find the large number of a array

function largeNum(ages){
    let largeNum=ages[0];
    for(let i=0; i<ages.length; i++){
        let  Element=ages[i];
       if(Element>largeNum){
           largeNum=Element;
       }
    }
    return largeNum;
}

let age=[21,43,77,112,23,58,95,54];
let largeAges= largeNum(age);
console.log(largeAges);