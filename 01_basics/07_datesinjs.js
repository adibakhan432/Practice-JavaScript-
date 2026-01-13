// Dates

let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate) // o/p : object

let myCreatedDate = new Date(2025, 0 , 23) // month starts in js 0
//console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

newDate.toLocaleString('default', {
    weekday:"long"
})

console.log(newDate)