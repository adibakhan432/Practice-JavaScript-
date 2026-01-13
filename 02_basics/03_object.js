//Singleton : In JavaScript, a Singleton ensures that only one 
// instance of an object exists and that the same instance is reused everywhere.

//Object Literals
const jsUser = {
    name : "Hitesh",
    age: 25,
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(jsUser.email);
jsUser.email = "hitesh1.gmail.com"
//Object.freeze(jsUser)
jsUser.age = 45

console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js user")
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())