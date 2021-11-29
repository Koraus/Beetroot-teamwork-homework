// let arr = ['yes', 15, 85,'yes', 46, 'yes'];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === 'yes') {
//         console.log(i);
//     }
// }

// // console.log(arr[1]);
// if (arr[0] === 'yes') {
//     console.log(0)
// }
// if (arr[1] === 'yes') {
//     console.log(1)
// }
// if (arr[2] === 'yes') {
//     console.log(2)
// }

let objL = {
    product1: 'moloko',
    product2: 25,
}
// console.log(obj.product1);
// console.log(obj.product2);
// console.log(obj);

// let c = obj.product1 + obj.product2
// console.log(c)

function add(a) {
    let c = a.product1 + a.product2;
    return c;
}
console.log(add(objL));