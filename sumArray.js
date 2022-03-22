// let age=[12,21,22,32];

/* let sum=0;
for(let i=1; i<age.length; i++){
    sum=sum+age[i]
    
}
console.log(sum); */

function arrayTotal(age){
    let sum=0;
for(let i=1; i<age.length; i++){
    sum=sum+age[i]
}
return sum;

}
let ages=[12,21,22,32,25];
let totalAge=arrayTotal(ages);
console.log(totalAge);