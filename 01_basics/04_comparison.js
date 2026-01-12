// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 < 1);
// console.log(2 != 1);

//console.log(null > 0); // false 
//console.log(null == 0); // false
//console.log(null >= 0); // true because its conversion problem

/* The reason is that an equality check == and comparison > < >= <= work differently.
comparisons convert null to a number, treating it as 0.
that's why (3) null >= 0 is true and (1) null > 0 is false */

// Notes : === => it is strictly check the values

console.log("2" === 1)

