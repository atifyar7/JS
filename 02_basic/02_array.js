const pakCric= ["Baber", "Shaheen", "Fakhar"]
const indCric= ["Virat", "Rohit", "Bumrah"]

// pakCric.push(indCric)
// console.log(pakCric);

// const PSL= pakCric.concat(indCric)
// console.log(PSL);

// const IPL= [...pakCric, ...indCric]
// console.log(IPL);

const anotherArray= [1,2,3,4,[5,6],7,8,[9,10,[11,[12,13]]],14]
const flatArray= anotherArray.flat(Infinity)
console.log(flatArray);

console.log(Array.isArray("Atif"))
console.log(Array.from("Atif"))

let m1= "Atif"
let m2= "Amir"
let m3= "Usman"

console.log(Array.of(m1, m2, m3));