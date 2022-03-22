 

function minVAlue(nur, pronoy,akul){
    if(nur<akul && nur<pronoy){
        return"Nur is Small";
    }
    else if(pronoy<nur && pronoy<akul){
        return"pronoy is small"
    }
    else{
        return"akul is small"
    }
}
let nurAge=223, pronoyAge=2323, akulAge=37;
let min=minVAlue(nurAge, pronoyAge, akulAge);
console.log(min);