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

console.log(loginUserMessage("Adiba"));
console.log(loginUserMessage());  // it gives output is undefined