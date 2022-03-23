
/* 
let names=['akash','nur','pronoy','rony','nur'];

let unique=[];
for(const name of names){
  if(unique.indexOf(name)==-1){

    unique.push(name);

  }
 
}
console.log(unique); */



function removeDuplicateArray(names){
    let unique=[];
    for(const name of names){
        if(unique.indexOf(name)==-1){
          unique.push(name);
           
        }
    
  }
return unique;
}

const namearray=['akash', 'nur','pronoy','rony','nur','emon','yousuf','jony','opi','rony','nur','emon','yousuf','jony'];

const output= removeDuplicateArray(namearray);
console.log( output);