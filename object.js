
// Declare a object
var computer ={
    id: 323,
    color: 'red',
    price: 29000,
    prosesor: '256gb'

};

console.log('computer ID= ',computer.id);

var computerColor= computer.color;
console.log('Computer color ',computerColor);

// set a value object property  many ways
computer.price= 300000;
computer['color']='black'
console.log(computer['color']);
console.log('computer price  ', computer.price)

console.log('ttal upadte details', computer)



