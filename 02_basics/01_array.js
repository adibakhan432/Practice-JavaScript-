// Array

//Declaration of array
let myArr = [1, 2, 3, 4, 5]
let myArr2 = new Array(1, 2, 2)
// console.log(typeof myArr2)

// Array Methods

myArr.push(6) // Add the element in array
myArr.push(10)
myArr.pop() // Remove the last element of the array
// console.log(myArr);

// console.log(myArr.includes(5)) // it check the value inside the array or not 
// console.log(myArr.indexOf(3))

const newArr = myArr.join() // the typeof join is 'String'

// console.log(typeof newArr)

// Slice and Splice Methods

console.log("A", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("C", myArr)



