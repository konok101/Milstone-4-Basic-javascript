 
function reverse(texts){
    let  forReverse='';
    for(const txt of text){
        forReverse= txt+forReverse;
    }
    return forReverse;
}

let text="Hy bro! what happend";

let output= reverse(text);
console.log(output);
