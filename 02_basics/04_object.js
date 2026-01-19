const tinderUser = new Object() //singleton object
//const tinder1 = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(Object.keys(tinderUser))

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Hitesh",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname)

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}
const obj3 = {5: 'a', 6: 'b'}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2}
console.log(obj4)

//Object Destructuring

const course = {
    courseName : "JavaScript",
    price : 999,
    courseInstructor : "xyz"
};

//course.courseInstructor;

const {courseInstructor: instructor} = course
console.log(instructor)