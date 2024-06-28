const firstName= "Muhammad"
const lastName= " Atif"

// console.log(firstName+lastName+ " Yar")

// console.log(`Hello My first name is ${firstName} and my last name is ${lastName}`+ " Yar")

const movieName= new String("Lahore Nhi Jaon Gi")
// console.log(movieName)
console.log(movieName[0]+ movieName[3])
console.log(movieName.toUpperCase())
console.log(movieName.charAt(3))
console.log(movieName.indexOf('k'))
// let score = 33
// console.log(typeof score)
// let scoreInStr= String(score)
// console.log(typeof scoreInStr)

const newString = movieName.substring(0,3)
console.log(newString)

let password= String("   atifYar   ")
console.log(password);
console.log(password.trim());

let url= "https://muhammadAtif%20yar"
console.log(url.replace("%20","-"));
console.log(url.includes("Amir"));

console.log(movieName.split(" "));