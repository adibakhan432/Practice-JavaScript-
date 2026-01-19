//Immediately invoked function expression (IIFE)

//Summary points

/*
1. IFFE runs immediately
2. Protects the global scope
3. Creates private variables
4. Works with regular and arrow functions.
 */

//Declaration of IIFE with regular function

( function chai(){
    //named IFFE
    console.log(`DB Connected`);
})();


// Declaration of IFFE with Arrow function

( (name) => {
    console.log(`DB is connected successfully ${name}!!`)
})('Sammy');
