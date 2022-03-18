
function checkLeapYear(year){
    if(year%4==0){
        return true;

    }
    return false;
}

let myYear=1223;

let leapYear= checkLeapYear(myYear);
console.log("check the year ", leapYear);