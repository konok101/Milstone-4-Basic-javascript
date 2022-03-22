/* let armyPower=545;
let policePower=433;
let rabPower=323; */

// detected max value with if else condition

/* if(armyPower>policePower && armyPower>rabPower){
    console.log("MOst powerful value is army");
}
else if(policePower>rabPower && policePower>armyPower){
    console.log("MOst powerful value is POlice");
}
else{
    console.log("Most powerful value is RAb");
} */



/*  DETECT MAX VALUE
let MaxValue= Math.max(policePower, armyPower, rabPower);
console.log(MaxValue); */

function maxValue(  policePower,  rabPower, armyPower,) {
    if(armyPower>policePower && armyPower>rabPower){
        return"MOst powerful value is army";
    }
    else if(policePower>rabPower && policePower>armyPower){
        return"MOst powerful value is POlice";
    }
    else{
        return"Most powerful value is RAb";

    }


}
let police=55323, army=434, rab=1213;
let max= maxValue(police, rab,army);
console.log(max);