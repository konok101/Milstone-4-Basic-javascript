//DETECT LOWEST PRIEC PHONE

/* const phones= [
    {name:'samsung', price:45500, camera: 10, storage:32},
    {name:'symphony', price:345232200, camera: 60, storage:3},
    {name:'oppo', price:121500, camera: 70, storage:2},
    {name:'iphn', price:25, camera: 40, storage:388},
    {name:'pixwl', price:14500, camera: 50, storage:132},
];

let cheapest= phones[0];
// Compare price only
for(const phn of phones){
    if(phn.price>cheapest.price){
        cheapest=phn ;
    }
}
console.log(cheapest); */


const products=[
    {name: 'watch', price:1, brand:'bd', quntatit:1},
    {name: 'shirt', price:2, brand:'bd', quntatit:2},
    {name: 'Boi', price:3, brand:'bd',quntatit:3},
    {name: 'panjabi', price:4, brand:'bd', quntatit:4},
 

];

// Total product price

/* let productTotalPrice=0;
for(const product of products){
    let totalProductprice=product.price*product.quntatit;
    productTotalPrice=productTotalPrice+totalProductprice;

}
console.log(productTotalPrice); */


 
// fOR TOTAL PRODUXTS PRICE
/*
let sum=0;
for(const product of products){
    sum=sum+product.price;
}
console.log(sum) */






// DETECT HEIGHEST PRICE

let highestPrice = products[0];

for(const product of products){
    if(product.price>highestPrice.price){
        highestPrice=product ;
    }
}
console.log(highestPrice);