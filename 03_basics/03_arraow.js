//this keyword

const user = {
    username : "Hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcomw to website.`)
        //console.log(this)
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

//console.log(this) // it gives the output is {}

function chai(){
    //console.log(this)
}

chai()


//Declaration of arrow function
const arrow = () => {
    let username = "Sammy"
    console.log(this)
}

arrow()

const addTwo = (num1, num2) => {
    return num1 + num2          //explicit return
}

console.log(addTwo(3,4))

// Shorter implicit way of arrow function
const add = (a, b) => a + b; //implicit return

console.log(add(5, 5))