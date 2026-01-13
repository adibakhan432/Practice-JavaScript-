const marvel_heroes = ["thor", "spiderman", "Ironman"]
const dc_heroes = ["superman", "flash", "batman"]

//marvel_heroes.push(dc_heroes)

const updateArr = marvel_heroes.concat(dc_heroes)

// console.log(updateArr)

// Spread method :- (...)

const new_hero = [...marvel_heroes, ...dc_heroes] // This is called spread method

// console.log(new_hero)

const another_array = [1,2, [3, 4], 5, 6, [7, 8, [9, 10]]]
const real_another_array = another_array.flat(Infinity);

console.log(real_another_array)

//Convert Array

console.log(Array.isArray("Adiba"))
console.log(Array.from("Adiba"))

let score1  = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))