function countAnimal(miles){
  
   if(miles<=10){
       let animalsee=10*miles;
       return animalsee;
   }
   else if(miles<=20){
    let animalsee=10* 10;
 
    let lastTen=(miles-10)*50;
 
    let lastTenSee=lastTen+animalsee;
    return lastTenSee;
   }
   else{
    let animalsee=10*10;
  
    let lastTen= 10*50;
    let lastTenSee=lastTen+animalsee;
    let lastCount= (miles-20)*100;
    let last=  lastTenSee+lastCount;
    return last;
  

   }
}
let a=countAnimal(35);
console.log(a);