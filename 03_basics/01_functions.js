function sayMyName() {           //function definition
    //console.log("Adiba");
}
sayMyName();                     //Reference
sayMyName();                     

function addTwoNumbers(num1, num2){
    // console.log(num1 + num2);
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3, 4)

//console.log("Result :", result);

function loginUserMessage(username){
    return `${username} just logged in.`
}

//console.log(loginUserMessage("Adiba"));
//console.log(loginUserMessage());  // it gives output is undefined

function calculateCartPrice(n1, n2, ...val1){
    return val1

}

//console.log(calculateCartPrice(200, 100, 300, 400));

//Function with Objects

const user = {
    username : "Ram",
    price : 100
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    username : "sam",
    price :  100
})

//Function with Array

const arr = [100, 200, 300, 400, 500]

function handleArray(anyarray){
    //console.log(`This is my Array ${anyarray[1]}`)
    return anyarray[0]
}

console.log(handleArray([
    500,200
]))