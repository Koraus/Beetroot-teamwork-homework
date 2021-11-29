// let a = {};
// a.start = 'yes'
// console.log(a);
// console.log(typeof (a));
// console.log(a.start + ' no')


// let b = [];
// b[0] = 'yes';
// console.log(b);
// console.log(typeof (b));


// let a = ['yes', 'no','John'] ;
// console.log(a[1][0])
// console.log(a[0])
// console.log('yes'[0])


let arr = [2, 3, 5, 7, 3, 5, 7, 3, 3];
let arr3 = [];

for (let i = 0; i <= arr.length; i++){
    if (arr[i] == 3) {
        arr3.push(arr[i])
    }
}

console.log(arr3)
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[6])